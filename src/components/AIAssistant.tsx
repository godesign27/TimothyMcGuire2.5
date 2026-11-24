import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, X, ArrowUp, RotateCcw } from 'lucide-react';
import { getPageFromPath } from '../lib/routes';

/**
 * The services assistant: a navbar icon that opens a right side drawer.
 *
 * The model runs behind /api/chat on the site Worker, which holds the API key.
 * Nothing here touches a credential, and the component only ever sends the
 * visible transcript.
 *
 * Copy rule: no em dashes or en dashes in any rendered string. See DESIGN_SYSTEM.md.
 */

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

/**
 * Above this width the page has room to be squeezed, so the drawer pushes the
 * content aside instead of covering it. At or below it, the drawer overlays.
 */
const PUSH_QUERY = '(min-width: 1441px)';

const SUGGESTIONS = [
  'What do you offer, and what does it cost?',
  'We need AI features in an enterprise app. Where do we start?',
  'What is an AI design system in a box?',
];

const GREETING =
  'Ask me about Timothy\'s services, what each package includes, or what fits the problem you are working on. For anything specific to your situation, I will point you to the contact form.';

/** Inline markup the model is asked to produce: links and bold, nothing else. */
const INLINE = /(\[[^\]\n]+\]\([^)\s]+\)|\*\*[^*\n]+\*\*)/g;

function renderInline(text: string, navigate: (page: string) => void): React.ReactNode[] {
  return text.split(INLINE).filter(Boolean).map((part, index) => {
    const link = /^\[([^\]\n]+)\]\(([^)\s]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      // Only same-site paths are turned into links, so a stray or invented
      // absolute URL renders as plain text rather than sending anyone off site.
      if (!href.startsWith('/')) return <span key={index}>{label}</span>;
      return (
        <a
          key={index}
          href={href}
          className="text-blue underline underline-offset-2 hover:no-underline"
          onClick={event => {
            if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            event.preventDefault();
            navigate(getPageFromPath(href));
          }}
        >
          {label}
        </a>
      );
    }
    const bold = /^\*\*([^*\n]+)\*\*$/.exec(part);
    // Recursed because the model often bolds a linked name, as in
    // **[AI Enterprise Agents](/services/...)**, which would otherwise print
    // the raw markdown inside the <strong>.
    if (bold) {
      return (
        <strong key={index} className="font-semibold">
          {renderInline(bold[1], navigate)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

/** Block level rendering: paragraphs and simple bullet lists. */
function renderMessage(content: string, navigate: (page: string) => void): React.ReactNode {
  const blocks: React.ReactNode[] = [];
  let bullets: string[] = [];

  const flush = () => {
    if (!bullets.length) return;
    blocks.push(
      <ul key={`list-${blocks.length}`} className="list-disc pl-5 space-y-1.5">
        {bullets.map((item, index) => <li key={index}>{renderInline(item, navigate)}</li>)}
      </ul>,
    );
    bullets = [];
  };

  for (const line of content.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) { flush(); continue; }
    const bullet = /^[-*]\s+(.*)$/.exec(trimmed);
    if (bullet) { bullets.push(bullet[1]); continue; }
    flush();
    blocks.push(<p key={`p-${blocks.length}`}>{renderInline(trimmed, navigate)}</p>);
  }
  flush();
  return <div className="space-y-3">{blocks}</div>;
}

/**
 * The first same-site link in an answer is treated as where that answer came
 * from, and the page behind the panel is moved there, which is why the prompt
 * asks for the most relevant page first.
 */
function primarySource(content: string): { label: string; href: string } | null {
  const match = /\[([^\]\n]+)\]\((\/[^)\s]*)\)/.exec(content);
  return match ? { label: match[1], href: match[2] } : null;
}

interface AIAssistantProps {
  navigate: (page: string) => void;
  /** Rendered as the navbar trigger, so the drawer owns its own open state. */
  triggerClassName?: string;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ navigate, triggerClassName = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [draft, setDraft] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  /** True on wide screens, where the drawer pushes the page rather than covering it. */
  const [isPush, setIsPush] = useState(false);

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  /* A ref, not isStreaming: state read from this closure is stale, so two
     clicks in the same tick both saw false and fired concurrent requests. */
  const inFlightRef = useRef(false);

  const close = useCallback(() => {
    abortRef.current?.abort();
    inFlightRef.current = false;
    setIsStreaming(false);
    setIsOpen(false);
    /* Reset so reopening starts at the default view rather than resuming a
       conversation whose answers refer to a page the visitor has since left. */
    setMessages([]);
    setError(null);
    setDraft('');
    triggerRef.current?.focus();
  }, []);

  /* Kept live so resizing across the breakpoint swaps modes mid-session. */
  useEffect(() => {
    const query = window.matchMedia(PUSH_QUERY);
    const sync = () => setIsPush(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  /* Escape closes, and focus is kept inside the panel while it is open. */
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.stopPropagation(); close(); return; }
      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), textarea, a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, close]);

  /* Overlay mode freezes the page behind the drawer. Push mode instead makes
     room for the panel and leaves the page scrollable, since it stays visible. */
  useEffect(() => {
    if (!isOpen) return;
    const root = document.documentElement;
    const previous = document.body.style.overflow;
    if (isPush) {
      root.classList.add('assistant-push');
    } else {
      document.body.style.overflow = 'hidden';
    }
    const timer = window.setTimeout(() => inputRef.current?.focus(), 120);
    return () => {
      root.classList.remove('assistant-push');
      document.body.style.overflow = previous;
      window.clearTimeout(timer);
    };
  }, [isOpen, isPush]);

  /* Follow the newest text as it streams in. */
  useEffect(() => {
    const node = scrollRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, isStreaming, navigate]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const send = useCallback(async (text: string) => {
    const question = text.trim();
    if (!question || inFlightRef.current) return;
    inFlightRef.current = true;

    // Any earlier request is abandoned rather than left to write into the
    // transcript behind this one.
    abortRef.current?.abort();

    setError(null);
    setDraft('');
    const history: Message[] = [...messages, { role: 'user', content: question }];
    setMessages(history);
    setIsStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      if (!response.ok || !response.body) {
        const detail = await response.json().catch(() => null);
        throw new Error(detail?.error ?? 'The assistant could not answer just now.');
      }

      // The endpoint streams plain text, so the reply appears as it is written.
      setMessages(current => [...current, { role: 'assistant', content: '' }]);
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let answer = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        if (!chunk) continue;
        answer += chunk;
        setMessages(current => {
          const next = [...current];
          next[next.length - 1] = {
            role: 'assistant',
            content: next[next.length - 1].content + chunk,
          };
          return next;
        });
      }
      /* Decided from the locally accumulated answer, not inside a setMessages
         updater. Updaters must be pure, and React may run them more than once,
         which would have navigated twice. */
      if (!answer.trim()) {
        setError('The assistant returned an empty reply. Please try again.');
        setMessages(current =>
          current[current.length - 1]?.role === 'assistant' ? current.slice(0, -1) : current,
        );
      } else {
        // Move the page behind the open panel rather than closing it, so
        // nothing is pulled away mid-read and the answer stays on screen.
        const found = primarySource(answer);
        if (found) navigate(getPageFromPath(found.href));
      }
    } catch (caught) {
      if ((caught as Error).name === 'AbortError') return;
      setError((caught as Error).message);
      // Drop the unanswered question so retrying does not duplicate it.
      setMessages(current => (current[current.length - 1]?.role === 'user' ? current.slice(0, -1) : current));
      setDraft(question);
    } finally {
      setIsStreaming(false);
      abortRef.current = null;
    }
  }, [messages, isStreaming]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Ask the AI assistant about services"
        aria-expanded={isOpen}
        title="Ask the AI assistant"
        className={`btn-secondary btn-icon group hover:border-blue dark:hover:border-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue ${triggerClassName}`}
      >
        <Sparkles size={18} className="text-blue transition-transform group-hover:scale-110" />
      </button>

      {/* Portalled to <body>: this component lives inside <nav>, which gains a
          backdrop-filter once the page is scrolled, and backdrop-filter makes
          an ancestor a containing block for fixed descendants. Left in place,
          the panel's inset-y-0 resolved against the 64px navbar instead of the
          viewport, so it collapsed as soon as the visitor scrolled. The portal
          only runs when open, which is never during prerender. */}
      {isOpen && createPortal(
        <>
          {!isPush && (
            <div
              className="fixed inset-0 z-[60] bg-ink/40 dark:bg-black/60 motion-safe:animate-[fadeIn_150ms_ease-out]"
              onClick={close}
              aria-hidden="true"
            />
          )}
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Services assistant"
            className={`fixed inset-y-0 right-0 z-[61] flex w-full max-w-md flex-col border-l border-line dark:border-white/10 bg-white dark:bg-neutral-950 motion-safe:animate-[slideIn_220ms_cubic-bezier(0.16,1,0.3,1)] ${isPush ? '' : 'shadow-2xl'}`}
          >
            <header className="flex items-center justify-between gap-3 border-b border-line dark:border-white/10 px-5 py-4">
              <div className="flex items-center gap-2.5 min-w-0">
                <Sparkles size={16} className="text-blue flex-shrink-0" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-ink dark:text-white truncate">Services assistant</p>
                  <p className="text-xs text-muted dark:text-neutral-400 truncate">Answers from this site</p>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-shrink-0">
                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={() => { abortRef.current?.abort(); inFlightRef.current = false; setMessages([]); setError(null); setDraft(''); inputRef.current?.focus(); }}
                    aria-label="Start a new conversation"
                    className="p-2 text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] transition-colors"
                  >
                    <RotateCcw size={16} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={close}
                  aria-label="Close the assistant"
                  className="p-2 text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
              {messages.length === 0 ? (
                <div className="space-y-5">
                  <p className="text-sm leading-relaxed text-muted dark:text-neutral-300">{GREETING}</p>
                  <div className="space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted dark:text-neutral-500">
                      Try asking
                    </p>
                    {SUGGESTIONS.map(suggestion => (
                      <button
                        key={suggestion}
                        type="button"
                        onClick={() => send(suggestion)}
                        className="block w-full text-left text-sm border border-line dark:border-white/10 px-3.5 py-2.5 text-ink dark:text-neutral-200 hover:border-blue hover:text-blue dark:hover:border-blue dark:hover:text-blue transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                messages.map((message, index) =>
                  message.role === 'user' ? (
                    <div key={index} className="flex justify-end">
                      <div className="max-w-[85%] bg-tan dark:bg-neutral-900 border border-line dark:border-white/10 px-3.5 py-2.5 text-sm text-ink dark:text-neutral-100 whitespace-pre-wrap">
                        {message.content}
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="text-sm leading-relaxed text-ink dark:text-neutral-200">
                      {renderMessage(message.content, page => { close(); navigate(page); })}
                    </div>
                  ),
                )
              )}

              {isStreaming && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex items-center gap-1.5" role="status" aria-label="Thinking">
                  {[0, 1, 2].map(dot => (
                    <span
                      key={dot}
                      className="h-1.5 w-1.5 rounded-full bg-muted dark:bg-neutral-500 motion-safe:animate-pulse"
                      style={{ animationDelay: `${dot * 160}ms` }}
                    />
                  ))}
                </div>
              )}

              {error && (
                <p role="alert" className="text-sm text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 bg-red-50 dark:bg-red-950/30 px-3.5 py-2.5">
                  {error}
                </p>
              )}
            </div>

            <form
              onSubmit={event => { event.preventDefault(); send(draft); }}
              className="border-t border-line dark:border-white/10 px-5 py-4"
            >
              <div className="flex items-end gap-2">
                <label htmlFor="assistant-input" className="sr-only">Your question</label>
                <textarea
                  id="assistant-input"
                  ref={inputRef}
                  rows={1}
                  value={draft}
                  onChange={event => setDraft(event.target.value)}
                  onKeyDown={event => {
                    if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); send(draft); }
                  }}
                  placeholder="Ask about services or pricing"
                  maxLength={2000}
                  className="flex-1 resize-none bg-transparent border border-line dark:border-white/10 px-3 py-2.5 text-sm text-ink dark:text-white placeholder:text-muted dark:placeholder:text-neutral-500 focus:outline-none focus:border-blue max-h-32"
                />
                <button
                  type="submit"
                  disabled={!draft.trim() || isStreaming}
                  aria-label="Send question"
                  className="flex-shrink-0 h-[42px] w-[42px] grid place-items-center bg-ink dark:bg-white text-white dark:text-ink disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue dark:hover:bg-blue dark:hover:text-white transition-colors"
                >
                  <ArrowUp size={18} />
                </button>
              </div>
              <p className="mt-2.5 text-[11px] leading-snug text-muted dark:text-neutral-500">
                AI generated. Prices shown are planning references, not quotes. Confirm details on the{' '}
                <a
                  href="/contact"
                  className="underline underline-offset-2 hover:text-blue"
                  onClick={event => { event.preventDefault(); close(); navigate('contact'); }}
                >
                  contact page
                </a>.
              </p>
            </form>
          </div>
        </>,
        document.body,
      )}
    </>
  );
};

export default AIAssistant;
