import { supabase } from './supabase';

function getSessionId(): string {
  const key = 'analytics_session_id';
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export async function trackPageView(page: string, path: string) {
  if (!supabase || !path || ['analytics', '__design__', 'not-found'].includes(page)) return;
  // Keep local previews, build rendering, and privacy opt-outs out of production metrics.
  if (import.meta.env.DEV || navigator.doNotTrack === '1') return;
  try {
    let referrer = '';
    try { referrer = document.referrer ? new URL(document.referrer).origin : ''; } catch { /* Ignore malformed referrers. */ }
    const { error } = await supabase.from('page_views').insert({
      path,
      referrer,
      user_agent: (navigator.userAgent || '').slice(0, 999),
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      language: navigator.language || '',
      session_id: getSessionId(),
    });
    if (error) console.warn('Page-view tracking is unavailable.');
  } catch {
    // Silently fail - analytics should never break the site
  }
}
