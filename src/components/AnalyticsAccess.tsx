import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

// This gate improves UX. The database RLS policy is the security boundary.
export default function AnalyticsAccess({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<'checking' | 'signed-out' | 'denied' | 'allowed' | 'error'>('checking');
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    if (!supabase) return;
    const client = supabase;
    let active = true;
    let revision = 0;
    const check = async () => {
      const current = ++revision;
      try {
        const { data: { session }, error: sessionError } = await client.auth.getSession();
        if (sessionError) throw sessionError;
        if (!session) { if (active && current === revision) setState('signed-out'); return; }
        const { data: { user }, error } = await client.auth.getUser();
        if (error) throw error;
        if (active && current === revision) setState(user?.app_metadata?.portfolio_analytics_admin === true ? 'allowed' : 'denied');
      } catch {
        if (active && current === revision) { setState('error'); setMessage('Unable to verify access. Check your connection and reload.'); }
      }
    };
    void check();
    const { data: { subscription } } = client.auth.onAuthStateChange(() => { setState('checking'); setTimeout(() => void check(), 0); });
    return () => { active = false; subscription.unsubscribe(); };
  }, []);

  const signIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;
    const form = new FormData(event.currentTarget);
    setBusy(true); setMessage('');
    try {
      const { error } = await supabase.auth.signInWithPassword({ email: String(form.get('email')), password: String(form.get('password')) });
      if (error) setMessage('Unable to sign in. Check your email and password.');
    } catch { setMessage('Unable to connect. Please try again.'); }
    finally { setBusy(false); }
  };
  const signOut = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) setMessage('Unable to sign out. Please try again.');
    else setState('signed-out');
  };
  if (supabase && state === 'allowed') return <><div className="pt-24 px-6 text-right"><button onClick={signOut} className="text-blue dark:text-lavender underline">Sign out of analytics</button>{message && <p role="alert">{message}</p>}</div>{children}</>;
  return <main className="min-h-screen bg-tan-100 dark:bg-neutral-950 pt-32 pb-24 px-6">
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-semibold text-ink dark:text-tan-500">Private site analytics</h1>
      {!supabase ? <p role="status" className="mt-6 text-muted dark:text-neutral-300">Analytics is not configured. The site administrator must provide a matching Supabase project URL and public API key, then rebuild the site.</p>
        : state === 'checking' ? <p role="status" className="mt-6">Checking access…</p>
        : state === 'denied' ? <div className="mt-6"><p>Your account does not have access to this dashboard.</p><button onClick={signOut} className="mt-4 underline">Sign out</button></div>
        : <form onSubmit={signIn} className="mt-8 space-y-5">
          <p className="text-muted dark:text-neutral-300">Sign in with an authorized analytics account. Visitor data is not public.</p>
          <label className="block">Email<input name="email" type="email" autoComplete="username" required className="mt-2 w-full border border-line dark:border-white/20 bg-white dark:bg-neutral-900 p-3" /></label>
          <label className="block">Password<input name="password" type="password" autoComplete="current-password" required className="mt-2 w-full border border-line dark:border-white/20 bg-white dark:bg-neutral-900 p-3" /></label>
          <button disabled={busy} className="px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink disabled:opacity-50">{busy ? 'Signing in…' : 'Sign in'}</button>
        </form>}
      {message && <p role="alert" className="mt-4 text-muted dark:text-neutral-300">{message}</p>}
    </div>
  </main>;
}
