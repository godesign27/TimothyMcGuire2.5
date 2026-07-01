# Design Styles — Implementation Reference

> Implementation-level Tailwind CSS patterns for timothymcguire.com.
> Read this alongside DESIGN_SYSTEM.md (tokens + rules) and DESIGN_STRATEGY.md (voice + positioning).

---

## Page Shell

Every page uses this outer shell:

```tsx
<main className="min-h-screen bg-white dark:bg-neutral-950">
```

Never use `h-screen`. Always `min-h-screen`. Hero sections use `min-h-[100dvh]`.

---

## Section Patterns

### Standard section (white background)
```tsx
<section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* content */}
  </div>
</section>
```

### Tan background section
```tsx
<section className="py-24 border-t border-line dark:border-white/10" style={{ background: 'linear-gradient(135deg, #F3EFE7 0%, #ffffff 100%)' }}>
```
Or flat tan:
```tsx
<section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
```

### Dark (ink) background section
```tsx
<section className="bg-ink dark:bg-neutral-900 py-24 border-t border-white/10">
```

### Section background rotation (home page order)
white → white → tan → white → tan → ink  
Never place two `tan` or two `ink` sections adjacent.

---

## Section Header

Every major section starts with a blue accent bar + H2. No exceptions.

```tsx
<div className="w-8 h-[3px] bg-blue mb-8" />
<h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-4">
  Section Heading
</h2>
<p className="text-base text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
  Supporting description.
</p>
```

Eyebrow label (optional, before the bar):
```tsx
<p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-4">
  Category Label
</p>
```

---

## Typography Classes

```
Display H1:   text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink dark:text-white leading-tight
Section H2:   text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight
Card H3:      text-base font-semibold text-ink dark:text-white
Eyebrow:      text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase
Body:         text-base text-muted dark:text-neutral-400 leading-relaxed
Caption:      text-sm text-muted dark:text-neutral-500
Nav:          text-sm font-medium text-ink dark:text-white
```

---

## Buttons

### Primary (dark fill)
```tsx
<button className="inline-flex items-center gap-2 px-8 py-4 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors">
  Label <ArrowRight className="w-4 h-4" />
</button>
```

### Secondary (outlined)
```tsx
<button className="inline-flex items-center gap-2 px-8 py-4 border border-line dark:border-white/20 text-ink dark:text-white text-sm font-medium hover:bg-tan dark:hover:bg-white/[0.05] transition-colors">
  Label
</button>
```

### On dark background (white fill)
```tsx
<button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink text-sm font-medium hover:bg-neutral-100 transition-colors">
  Label <ArrowRight className="w-4 h-4" />
</button>
```

### Inline text link
```tsx
<button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue dark:text-lavender hover:underline">
  Link text <ArrowRight className="w-3.5 h-3.5" />
</button>
```

Button label rules: 1-3 words max for primary CTAs. Never wrap. No em-dashes in labels.

---

## Cards & Grids

### Divider grid (preferred over card containers)
```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
  <div className="p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors">
    <h3 className="text-base font-semibold text-ink dark:text-white mb-3">Title</h3>
    <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">Body.</p>
  </div>
</div>
```

### Featured callout card (sticky left or large hero card)
```tsx
<div
  className="p-10 border border-line dark:border-white/10"
  style={{ background: 'linear-gradient(135deg, #F3EFE7 0%, #ffffff 100%)' }}
>
  <div className="w-8 h-[3px] bg-blue mb-8" />
  <h2 className="text-3xl font-semibold text-ink dark:text-white leading-tight mb-6">Heading</h2>
  <p className="text-base text-muted leading-relaxed">Description.</p>
</div>
```

### Asymmetric 2-col layout (sticky left + right grid)
```tsx
<div className="grid lg:grid-cols-2 gap-16 items-start">
  <div className="lg:sticky lg:top-32">
    {/* featured callout */}
  </div>
  <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
    {/* 2x3 grid of items */}
  </div>
</div>
```

---

## Badges & Tags

### Accent badge (blue/lavender)
```tsx
<span className="px-3 py-1.5 text-sm bg-blue/10 text-blue border border-blue/30 dark:text-lavender dark:border-lavender/40">
  Label
</span>
```

### Neutral badge (tool/skill tag)
```tsx
<span className="px-3 py-1.5 text-sm bg-neutral-100 dark:bg-white/[0.08] text-muted dark:text-neutral-300 border border-line dark:border-white/10">
  Label
</span>
```

---

## Icon Usage

Library: `lucide-react` only. No mixing with other icon sets.

```tsx
// Section header icon container
<div className="flex items-center justify-center w-9 h-9 bg-neutral-100 dark:bg-white/[0.08]">
  <IconName size={18} className="text-muted dark:text-neutral-400" />
</div>

// Button icon
<ArrowRight className="w-4 h-4" />   // 16px

// Feature card icon
<IconName className="w-5 h-5" />      // 20px

// Large feature icon
<IconName className="w-10 h-10" />    // 40px
```

Accent color on icons: `text-blue dark:text-lavender`  
Default/muted: `text-muted dark:text-neutral-400`  
On dark bg: `text-white`

---

## Borders & Dividers

```
Standard border:   border border-line dark:border-white/10
Section divider:   border-t border-line dark:border-white/10
Subtle divider:    divide-y divide-line dark:divide-white/10
Timeline line:     bg-[#D9D9D9] dark:bg-white/[0.1]   (1px wide)
Timeline dot:      w-[15px] h-[15px] border-[3px] border-line  (sharp square)
```

---

## Shape Rules

**All-sharp corners everywhere.** No `rounded-*` classes except `rounded-none` (which is the Tailwind default reset — no need to add explicitly unless overriding).

This applies to: buttons, inputs, badges, cards, images, icon containers, modal dialogs, tooltips, everything.

---

## Dark Mode

Strategy: `next-themes` with `attribute="class"`. Applied at `<html>` level.

Always pair every light class with its dark equivalent:

```
bg-white           → dark:bg-neutral-950
text-ink           → dark:text-white
text-muted         → dark:text-neutral-400
border-line        → dark:border-white/10
bg-neutral-100     → dark:bg-white/[0.08]
text-blue          → dark:text-lavender
bg-ink             → dark:bg-neutral-900  (slightly lighter for depth)
```

---

## Inner Page Hero Pattern

All service, solution, and perspective pages use this hero structure:

```tsx
<section className="py-24 border-b border-line dark:border-white/10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-3xl">
      <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-4">
        Category
      </p>
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink dark:text-white leading-tight mb-6">
        Page Title
      </h1>
      <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
        Supporting description.
      </p>
      <button className="inline-flex items-center gap-2 px-8 py-4 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 transition-colors">
        Let's Talk <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
</section>
```

---

## Dos and Don'ts

| Do | Don't |
|---|---|
| `font-semibold` for all headlines | `font-light`, `font-bold`, `font-extrabold` |
| `text-ink` for primary text | `text-black`, `text-gray-900`, `text-neutral-900` |
| `text-muted` for secondary text | `text-gray-500`, `text-gray-600` |
| `border-line` for borders | `border-gray-200`, `border-neutral-200` |
| `bg-tan` for warm section bg | `bg-gray-50`, `bg-stone-50` |
| `text-blue dark:text-lavender` for accent | `text-indigo-*`, `text-violet-*`, `text-brand-*` |
| Inline SVG for logo | External image URL |
| `gap-px bg-line` for grids | Box-shadow cards, `shadow-*` classes |
| `min-h-[100dvh]` for hero | `h-screen`, `min-h-screen` on hero |
| Sharp corners everywhere | Any `rounded-*` except `rounded-none` |
