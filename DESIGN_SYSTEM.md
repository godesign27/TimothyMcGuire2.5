# Design System — Timothy McGuire Portfolio

## Identity

**Editorial. Minimal. Explainable.**

A portfolio built for trust before impression. Every design decision should communicate clarity, expertise, and confidence — not decoration.

---

## Color Tokens

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| `ink` | `#111111` | `text-ink` / `bg-ink` | Primary text, dark backgrounds, CTA buttons |
| `muted` | `#666666` | `text-muted` | Secondary text, captions, timestamps |
| `line` | `#D9D9D9` | `border-line` / `bg-line` | Dividers, borders, grid gaps |
| `tan` | `#F3EFE7` | `bg-tan` | Section backgrounds, featured callout fills |
| `blue` | `#2563EB` | `text-blue` / `bg-blue` | Accent bars, links, eyebrow labels, CTAs |
| `lavender` | `#A29BFE` | `text-lavender` | Dark mode accent replacement for blue |
| `white` | `#FFFFFF` | `bg-white` / `text-white` | Page backgrounds, reversed text |

### Color Rules
- Max **one accent color** visible in any section. Blue in light mode, Lavender in dark.
- Never mix warm and cool grays. All neutrals are `neutral-*` (Tailwind) or the token above.
- Section backgrounds rotate: `white → tan → white → ink` (never two tan or two ink in a row).
- Blue accent bars (`w-8 h-[3px] bg-blue`) precede all major headings.

---

## Typography

**Font:** Instrument Sans (Google Fonts)  
**Weights used:** 400, 500, 600, 700  
**Italic:** 400i, 500i

```css
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
```

| Role | Classes |
|---|---|
| Display H1 | `text-4xl md:text-6xl font-semibold tracking-tight text-ink` |
| Section H2 | `text-3xl md:text-4xl font-semibold text-ink leading-tight` |
| Card H3 | `text-base font-semibold text-ink` |
| Eyebrow | `text-xs font-semibold text-blue tracking-widest uppercase` |
| Body | `text-base text-muted leading-relaxed` |
| Caption | `text-sm text-muted` |
| Nav | `text-sm font-medium` |

### Typography Rules
- No serifs. Instrument Sans only.
- No mixed font families.
- `font-semibold` (600) for headlines — never `font-light` or `font-bold` (700) on display text.
- Eyebrow labels: blue, uppercase, tracked wide, 2-4 words max.

---

## Shape System

**All-sharp corners. No border radius anywhere.**

- `rounded-none` on all interactive elements, cards, inputs, badges, images.
- Timeline dots are `w-[15px] h-[15px] rounded-none` squares.
- The only circular elements: none.

---

## Component Patterns

### Blue Accent Bar
Precedes all section H2s.
```jsx
<div className="w-8 h-[3px] bg-blue mb-8" />
```

### Section Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
```

### Divider Grid (for feature grids)
Use `gap-px bg-line` on the grid parent; each cell gets `bg-white dark:bg-neutral-950`.
```jsx
<div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
  <div className="p-8 bg-white dark:bg-neutral-950">...</div>
</div>
```

### Primary Button
```jsx
<button className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-white text-sm font-medium hover:bg-neutral-800 transition-colors">
```

### Secondary Button
```jsx
<button className="inline-flex items-center gap-2 px-8 py-4 border border-line text-ink text-sm font-medium hover:bg-tan transition-colors">
```

### Badge / Tag
```jsx
<span className="px-3 py-1.5 text-sm bg-blue/10 text-blue border border-blue/30 dark:text-lavender dark:border-lavender/40">
```

---

## Layout Dials (tasteskill v2)

| Dial | Value | Notes |
|---|---|---|
| `VARIANCE` | 6 | Asymmetric layouts, not centered-hero default |
| `MOTION` | 3 | Minimal — transitions only, no scroll animations |
| `DENSITY` | 3 | Airy, generous whitespace |

**Mode:** Redesign - Preserve (no URL/nav/form changes)

---

## Dark Mode

- Strategy: `next-themes` with `attribute="class"` on `<html>`
- All dark tokens: `dark:bg-neutral-950`, `dark:text-white`, `dark:text-neutral-400`, `dark:border-white/10`
- Accent in dark mode: `text-lavender` instead of `text-blue`
- CTA buttons invert: `bg-ink → bg-white`, `text-white → text-ink`

---

## Logo Mark

Inline SVG in Navbar — 32×32px sharp square.
- Light: ink background, white T, blue accent at stem base
- Dark: white background, ink T, blue accent persists
- Never load from external URL — always inline.

---

## Section Order (Home)

1. Hero — tan/white/blue gradient, left-aligned, `min-h-[100dvh]`
2. Partners — white bg, opacity-50 logos
3. ValueProposition — white bg, asymmetric 2-col
4. SuccessStories — tan bg, asymmetric
5. SpecializedExpertise — white bg, 3-col divider grid
6. Testimonials — tan bg, featured + 2 stacked
7. CTA — ink bg, left-aligned, white button

---

## Em-dash Policy

No em-dashes (`—`) or en-dashes (`–`) in any rendered content. Use commas, periods, or colons instead.
