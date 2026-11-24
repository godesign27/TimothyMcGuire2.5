/**
 * The site Worker: serves the prerendered static build and hosts the one
 * dynamic route, /api/chat, behind which the services assistant runs.
 *
 * The API key lives only here, as a Worker secret. It must never reach the
 * client bundle, because this repository and the built JS are both public.
 */
import { SYSTEM_PROMPT } from './knowledge';

interface Env {
  ASSETS: Fetcher;
  CHAT_RATE_LIMITER: RateLimit;
  ANTHROPIC_API_KEY?: string;
}

const MODEL = 'claude-haiku-5-5';
const MAX_TOKENS = 700;
/** Turns kept from the client's history. Caps both cost and prompt-stuffing. */
const MAX_TURNS = 12;
const MAX_CHARS_PER_MESSAGE = 2000;

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });

/**
 * Trusts only the shape, never the content: every field is re-validated here
 * because the client can send anything.
 */
function parseMessages(input: unknown): ChatMessage[] | null {
  if (!Array.isArray(input) || input.length === 0) return null;
  const messages: ChatMessage[] = [];
  for (const item of input.slice(-MAX_TURNS)) {
    if (!item || typeof item !== 'object') return null;
    const { role, content } = item as Record<string, unknown>;
    if (role !== 'user' && role !== 'assistant') return null;
    if (typeof content !== 'string') return null;
    const trimmed = content.trim();
    if (!trimmed) return null;
    messages.push({ role, content: trimmed.slice(0, MAX_CHARS_PER_MESSAGE) });
  }
  // The Messages API requires the conversation to start and end with a user turn.
  while (messages.length && messages[0].role !== 'user') messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== 'user') return null;
  return messages;
}

/**
 * Reads Anthropic's SSE stream and re-emits just the assistant's text as a
 * plain UTF-8 stream. The client then needs no SSE parser, and no upstream
 * metadata (usage, model, stop reasons) is exposed to the page.
 */
function textStreamFrom(upstream: ReadableStream<Uint8Array>): ReadableStream<Uint8Array> {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = '';

  return new ReadableStream({
    async start(controller) {
      const reader = upstream.getReader();
      try {
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop() ?? '';
          for (const line of lines) {
            if (!line.startsWith('data:')) continue;
            const payload = line.slice(5).trim();
            if (!payload || payload === '[DONE]') continue;
            try {
              const event = JSON.parse(payload);
              if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
                controller.enqueue(encoder.encode(event.delta.text));
              }
            } catch {
              // A partial or non-JSON frame: skip it rather than failing the stream.
            }
          }
        }
      } catch (error) {
        controller.error(error);
        return;
      } finally {
        reader.releaseLock();
      }
      controller.close();
    },
  });
}

async function handleChat(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') {
    return json({ error: 'Use POST.' }, 405);
  }
  if (!env.ANTHROPIC_API_KEY) {
    return json({ error: 'The assistant is not configured yet.' }, 503);
  }

  // Keyed per visitor IP so one person cannot exhaust the budget for everyone.
  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown';
  const { success } = await env.CHAT_RATE_LIMITER.limit({ key: ip });
  if (!success) {
    return json({ error: 'Too many messages. Give it a moment and try again.' }, 429);
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Expected a JSON body.' }, 400);
  }

  const messages = parseMessages((body as { messages?: unknown } | null)?.messages);
  if (!messages) {
    return json({ error: 'Expected a non-empty list of messages ending with a user turn.' }, 400);
  }

  const upstream = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      stream: true,
      // Cached because the services reference is large and identical on every
      // request, which is most of the prompt cost on a site like this.
      system: [
        {
          type: 'text',
          text: SYSTEM_PROMPT,
          cache_control: { type: 'ephemeral' },
        },
      ],
      messages,
    }),
  });

  if (!upstream.ok || !upstream.body) {
    // Log for Workers observability, but never return the upstream body: it can
    // carry account and request detail that visitors should not see.
    console.error('Anthropic request failed', upstream.status, await upstream.text().catch(() => ''));
    return json({ error: 'The assistant could not answer just now. Please try again.' }, 502);
  }

  return new Response(textStreamFrom(upstream.body), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/chat') {
      return handleChat(request, env);
    }
    // Everything else is the prerendered site, including 404 handling.
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
