# Agent Instructions — Timothy McGuire Portfolio

You are working on the personal portfolio site for Timothy McGuire, a Senior / Principal UX Designer specializing in enterprise SaaS, AI-native products, and agentic experience design.

**Before creating or modifying any page, component, or content, read these three files:**

1. [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — Color tokens, typography, component patterns, dark mode rules, design dials
2. [`DESIGN_STRATEGY.md`](./DESIGN_STRATEGY.md) — Brand voice, positioning, audience, content principles, CTA rules
3. [`DESIGN_STYLES.md`](./DESIGN_STYLES.md) — Tailwind CSS implementation patterns, section templates, do/don't table

There is also a live Design Library hidden at `/__design__` in the running dev server that shows every token, type scale, icon, and component pattern visually.

---

## Stack

- **Framework:** React + Vite + TypeScript (SPA, no router — uses custom `pushState` navigation in `src/App.tsx`)
- **Styling:** Tailwind CSS v3 with custom tokens (`ink`, `muted`, `line`, `tan`, `blue`, `lavender`) defined in `tailwind.config.js`
- **Dark mode:** `next-themes` with `attribute="class"` strategy
- **Icons:** `lucide-react` only — never mix with other icon libraries
- **Font:** Instrument Sans via Google Fonts `@import` in `src/index.css`
- **Database:** Supabase client is nullable — always check `supabase?.` before calling methods

---

## Adding a New Page

1. Create `src/components/PageName.tsx`
2. Add the page ID and path to `pageToPath` in `src/App.tsx`
3. Add the page SEO meta to `pageSeo` in `src/App.tsx`
4. Add a `case 'page-id':` in the `renderPage()` switch in `src/App.tsx`
5. Add it to the relevant nav group in `src/components/Navbar.tsx` if it should be publicly accessible
6. Add it to the relevant footer column in `src/components/Footer.tsx`

**Do not add `/__design__` to any navigation or footer — it is intentionally hidden.**

---

## Page Structure Rules

Every page must follow these rules. No exceptions.

### Layout
- Outer shell: `<main className="min-h-screen bg-white dark:bg-neutral-950">`
- Max width container: `<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">`
- Section padding: `py-24` standard, `py-32` for hero
- Section dividers: `border-t border-line dark:border-white/10`

### Section order (for inner pages)
1. Hero — left-aligned, eyebrow + H1 + body + CTA, `py-24` or `py-32`
2. Content sections — white/tan alternating backgrounds
3. CTA block at bottom — `bg-ink` background with white button

### Typography
- All headlines: `font-semibold` (600 weight). Never `font-light` or `font-bold`
- H1: `text-4xl sm:text-5xl font-semibold tracking-tight text-ink dark:text-white`
- H2: `text-3xl md:text-4xl font-semibold text-ink dark:text-white`
- H3: `text-base font-semibold text-ink dark:text-white`
- Body: `text-base text-muted dark:text-neutral-400 leading-relaxed`
- Eyebrow: `text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase`

### Colors
- Use `text-ink` not `text-black` or `text-gray-900`
- Use `text-muted` not `text-gray-500` or `text-gray-600`
- Use `border-line` not `border-gray-200`
- Accent: `text-blue dark:text-lavender` — always pair both modes
- Never use `text-violet-*`, `text-purple-*`, `text-brand-*`, or `text-indigo-*`

### Shapes
- **Zero border radius anywhere.** No `rounded-*` classes on any element
- Buttons, inputs, cards, badges, images — all sharp corners

### Section header (required before every H2)
```tsx
<div className="w-8 h-[3px] bg-blue mb-8" />
<h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight">
  Heading
</h2>
```

### Grids
- Use `gap-px bg-line dark:bg-white/10` divider grid pattern — not card boxes with shadows
- Never use `shadow-*` classes
- Never use percentage math (`w-[calc(33%-1rem)]`) — use CSS Grid

---

## Content Rules

- **No em-dashes** (`—`) or en-dashes (`–`) anywhere in rendered content
- No exclamation points in headlines or body copy
- No filler phrases: "passionate about", "results-driven", "leverage", "synergize"
- CTA button labels: 1-3 words max. Primary CTAs: "Let's Talk", "View Work", "Make Contact"
- Every bullet point must begin with a different word

---

## What NOT to Change (Preservation Rules)

When modifying existing pages, never change:
- Nav labels or their page IDs in `pageToPath`
- Any URL paths in `pageToPath`
- Form field names or email submission logic
- The Supabase client initialization in `src/lib/supabase.ts`
- The `/__design__` hidden route

---

## TypeScript

Run `npx tsc --noEmit` after any non-trivial change to verify no type errors before reporting work as done.

---

## Design Reference Quick Links

| File | Purpose |
|---|---|
| [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) | Tokens, type scale, component patterns, dials |
| [`DESIGN_STRATEGY.md`](./DESIGN_STRATEGY.md) | Brand voice, audience, content principles |
| [`DESIGN_STYLES.md`](./DESIGN_STYLES.md) | Tailwind patterns, section templates, do/don't |
| `/__design__` (browser) | Live component library — all tokens and patterns rendered |
| `tailwind.config.js` | Token definitions (colors, font family) |
| `src/index.css` | Global styles, btn-primary/btn-secondary classes |
