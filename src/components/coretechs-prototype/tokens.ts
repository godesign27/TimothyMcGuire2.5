// ─────────────────────────────────────────────────────────────────────────────
// CoreTechs 3.0 prototype — design tokens
// Colors extracted directly from the Sketch document's shared swatches so the
// live rebuild matches the original Gray Matter Analytics design system.
// ─────────────────────────────────────────────────────────────────────────────

export const ct = {
  // Brand
  orange: '#DF542E',       // Active Orange — links & primary CTAs
  orangeHover: '#B03D1C',
  orangePressed: '#581E0E',
  orangeDisabled: '#F7D4CA',

  // Data / teal family (KPI cards, accents)
  teal: '#017E8B',         // KPI card fill (between Dark Teal 006E7B & Medium Teal 01A2B8)
  tealDark: '#006E7B',
  tealMed: '#01A2B8',

  // Status
  statusHigh: '#F15A27',
  statusMedium: '#FDB714',
  statusLow: '#49A2B8',
  error: '#B32631',
  success: '#56BD5B',

  // Neutrals
  heading: '#42484D',
  body: '#535B62',
  muted: '#8091A5',
  faint: '#A0ACBB',
  line: '#E4E7EA',
  lineSoft: '#EEF1F3',
  surface: '#FFFFFF',
  canvas: '#F3F3F3',
  railActive: '#DF542E',
} as const;

export const ctFont =
  'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
