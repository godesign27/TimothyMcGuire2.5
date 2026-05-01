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
  try {
    await supabase.from('page_views').insert({
      page,
      path,
      referrer: document.referrer || '',
      user_agent: navigator.userAgent || '',
      screen_width: window.screen.width,
      screen_height: window.screen.height,
      language: navigator.language || '',
      session_id: getSessionId(),
    });
  } catch {
    // Silently fail - analytics should never break the site
  }
}
