# SEO and analytics operations

## Deployment

- Production domain: `https://timothymcguire.com`.
- Cloudflare Worker: `timothymcguire27`. Do not deploy to a similarly named Pages project.
- Run `npm run build`, then `npm run verify:seo`, before `npx wrangler deploy`.
- The build now generates HTML per route, `sitemap.xml`, and a custom `404.html`.
- Deploy the generated HTML and the updated `wrangler.jsonc` together. A client-only build is no longer sufficient.
- Never copy private `/docs`, environment files, or credentials into `public` or `dist`.

## SEO maintenance

- `src/lib/routes.ts` is the shared route/metadata source for the client and static build.
- Every public route needs a distinct title, concise description, visible heading, and crawlable links.
- Navigation links use `SiteLink`; actions such as filtering and opening menus remain buttons.
- Old service URLs retain permanent redirects to their canonical Work With Me equivalents.
- Analytics and the design library are excluded from the sitemap and marked `noindex` in HTML and headers. Noindex is not access control.
- Structured data must reflect visible, factual content. Do not add hidden FAQs, invented credentials, or unsupported claims of recognition.
- Use 15+ years for enterprise UX experience, not for years specifically designing agentic AI.
- Search and AI citations are not guaranteed. Check Google Search Console/Bing Webmaster Tools after deployment and submit the generated sitemap.
- Robots permits OAI-SearchBot; confirm Cloudflare bot/WAF rules also allow legitimate search crawlers. Do not disable security globally.

## Supabase findings (2026-09-19)

- The original local environment lacked `VITE_SUPABASE_URL` and repeated a Healthcare App key. This mismatch is fixed locally.
- Confirmed target: **Go App**, project `knddrhyoqawaccpztdiw`, URL `https://knddrhyoqawaccpztdiw.supabase.co`. `.env` now uses its matching public key.
- Approved owner: `godesigngo@gmail.com`, an existing confirmed Auth account. Its server-managed analytics admin flag is enabled.
- Site images use **Go App**, project `knddrhyoqawaccpztdiw`.
- Go App has a `page_views` table without a `page` column, and its live policy permits validated anonymous inserts but not anonymous reads.
- Migration `secure_portfolio_analytics_access` is applied to Go App. Anonymous SELECT is revoked; authenticated reads require the server-managed admin flag.
- Transactional RLS tests passed: admin reads, non-admin denial, user-metadata spoof denial, anonymous insert, anonymous read denial. All test rows were rolled back. These are database policy tests, not a real password sign-in test.

## Analytics setup checklist

1. Confirm the intended project. Set its matching URL and public key in `.env` and the Cloudflare build environment. Never use a service-role key in browser code.
2. Keep anonymous reads disabled. An authenticated session alone must not grant access.
3. Give only the approved owner account server-managed `app_metadata.portfolio_analytics_admin: true` through a trusted Supabase admin operation. Never use user-editable metadata.
4. Review `supabase/analytics-access-review.sql` before adding a SELECT policy for `authenticated` requiring that exact app-metadata flag. This script is not applied automatically. Inspect all existing policies first; permissive policies combine with OR.
5. Validate anonymous SELECT is denied, a non-admin account cannot read records, and the approved owner can read them. Do not call this complete until verified against the chosen project.
6. Sign in at `/analytics`. Sessions are memory-only and must be re-established after reloading; no signup is offered.

The tracker uses `path` rather than a `page` column, strips query strings from referrers, respects Do Not Track, skips local previews and internal routes, and reports failures without breaking navigation. The dashboard paginates results, clears stale data on error, and does not mistake connection failures for zero visits.

## Outstanding external verification

The owner confirmed successful local analytics sign-in on 2026-09-19. Production deployment, Search Console indexing, Cloudflare bot controls, and end-to-end production analytics collection still need release-time verification. A successful local build does not establish those outcomes.

The security advisor notes that authenticated users can discover the `page_views` GraphQL schema; RLS still blocks non-admin row access, verified above. It also flags the pre-existing `public.is_admin()` SECURITY DEFINER function. That unrelated function was not modified by this analytics setup.
