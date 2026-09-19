-- Applied to Go App as secure_portfolio_analytics_access on 2026-09-19.
-- Review before reusing on any other project.
-- This is not an auto-applied migration and creates no accounts or admin assignments.
-- Before applying, inspect pg_policies for any other SELECT / ALL policy on page_views.
-- Only a trusted administrator may set app_metadata.portfolio_analytics_admin = true.
begin;
alter table public.page_views enable row level security;
drop policy if exists "Allow anonymous page view reads" on public.page_views;
revoke select on public.page_views from anon;
grant select on public.page_views to authenticated;
drop policy if exists "Portfolio analytics administrators can read" on public.page_views;
create policy "Portfolio analytics administrators can read"
  on public.page_views for select to authenticated
  using (
    (select auth.uid()) is not null
    and (select auth.jwt() -> 'app_metadata' ->> 'portfolio_analytics_admin') = 'true'
  );
commit;

-- Required verification with real anon, non-admin, and approved-admin sessions:
-- anon: cannot SELECT; non-admin: no rows; approved admin: expected rows.
-- Never weaken RLS to make the dashboard display data.
