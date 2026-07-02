import React from 'react';

const DS   = 'var(--ds-stroke)';
const DSS  = 'var(--ds-stroke-soft)';
const DL   = 'var(--ds-line)';
const DLab = 'var(--ds-label)';
const DFC  = 'var(--ds-fill-comp)';
const DFS  = 'var(--ds-fill-subtle)';
const BLUE = '#3B82F6';
const MONO = 'ui-monospace, "SF Mono", Menlo, monospace';
const SANS = 'system-ui, -apple-system, sans-serif';

const css = `
  .ds-illus {
    --ds-stroke: rgba(17,17,17,0.72);
    --ds-stroke-soft: rgba(17,17,17,0.36);
    --ds-line: rgba(17,17,17,0.09);
    --ds-label: rgba(17,17,17,0.38);
    --ds-fill-comp: rgba(255,255,255,0.96);
    --ds-fill-subtle: rgba(17,17,17,0.04);
  }
  .dark .ds-illus {
    --ds-stroke: rgba(255,255,255,0.55);
    --ds-stroke-soft: rgba(255,255,255,0.28);
    --ds-line: rgba(255,255,255,0.07);
    --ds-label: rgba(255,255,255,0.32);
    --ds-fill-comp: rgba(255,255,255,0.04);
    --ds-fill-subtle: rgba(255,255,255,0.04);
  }

  @keyframes ds-drift-a { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-3px)} }
  @keyframes ds-drift-b { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(3px)} }
  @keyframes ds-drift-c { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-2px)} }
  @keyframes ds-flow    { from{stroke-dashoffset:18} to{stroke-dashoffset:0} }
  @keyframes ds-flow-r  { from{stroke-dashoffset:0} to{stroke-dashoffset:18} }
  @keyframes ds-pulse   { 0%,100%{opacity:0.28} 50%{opacity:1} }
  @keyframes ds-fade-up { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0px)} }

  /* Inner animation groups — these only do translateY, no position override */
  .ds-a1 { animation: ds-fade-up .5s ease both .05s, ds-drift-a 7s ease-in-out infinite .6s }
  .ds-a2 { animation: ds-fade-up .5s ease both .18s, ds-drift-b 8s ease-in-out infinite }
  .ds-a3 { animation: ds-fade-up .5s ease both .30s, ds-drift-c 6.5s ease-in-out infinite .4s }
  .ds-a4 { animation: ds-fade-up .5s ease both .42s, ds-drift-a 9s ease-in-out infinite .9s }
  .ds-a5 { animation: ds-fade-up .5s ease both .54s, ds-drift-b 7s ease-in-out infinite .2s }
  .ds-a6 { animation: ds-fade-up .5s ease both .66s, ds-drift-c 8.5s ease-in-out infinite }
  .ds-a7 { animation: ds-fade-up .5s ease both .78s, ds-drift-a 7.5s ease-in-out infinite 1s }
  .ds-a8 { animation: ds-fade-up .5s ease both .90s, ds-drift-b 6.5s ease-in-out infinite .5s }

  .ds-flow-line { stroke-dasharray:5 4; animation: ds-flow-r 3s linear infinite }
  .ds-flow-blue { stroke-dasharray:5 4; animation: ds-flow 2.4s linear infinite }
  .ds-pulse     { animation: ds-pulse 3.2s ease-in-out infinite }
  .ds-pulse2    { animation: ds-pulse 3.2s ease-in-out infinite 1.6s }
`;

const DesignSystemIllustration: React.FC = () => (
  <svg
    className="ds-illus w-full"
    viewBox="0 0 580 560"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: '100%', height: 'auto' }}
  >
    <defs>
      <style>{css}</style>
      <linearGradient id="ds-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%"  stopColor="white" stopOpacity="0" />
        <stop offset="12%" stopColor="white" stopOpacity="1" />
        <stop offset="100%" stopColor="white" stopOpacity="1" />
      </linearGradient>
      <mask id="ds-mask">
        <rect width="580" height="560" fill="url(#ds-fade)" />
      </mask>
    </defs>

    <g mask="url(#ds-mask)">

      {/* Background grid */}
      {[80,160,240,320,400,480].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="560"
          style={{ stroke: DL }} strokeWidth="0.5" />
      ))}
      {[80,160,240,320,400,480].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="580" y2={y}
          style={{ stroke: DL }} strokeWidth="0.5" />
      ))}

      {/* Connector lines */}
      <line x1="148" y1="62" x2="352" y2="48"
        style={{ stroke: DL }} strokeWidth="0.75" className="ds-flow-line" />
      <line x1="168" y1="250" x2="362" y2="218"
        style={{ stroke: DL }} strokeWidth="0.75" className="ds-flow-line" />
      <line x1="282" y1="168" x2="282" y2="286"
        style={{ stroke: DL }} strokeWidth="0.75" />
      <line x1="430" y1="376" x2="464" y2="84"
        stroke={BLUE} strokeWidth="0.75" strokeOpacity="0.35" className="ds-flow-blue" />
      <line x1="358" y1="418" x2="390" y2="408"
        style={{ stroke: DL }} strokeWidth="0.75" className="ds-flow-line" />
      <line x1="218" y1="406" x2="248" y2="406"
        style={{ stroke: DL }} strokeWidth="0.75" />

      {/* ── C1: TYPOGRAPHY (top-left) — outer g positions, inner g animates */}
      <g transform="translate(36,30)">
        <g className="ds-a1">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>TYPOGRAPHY</text>
          <text x="0" y="52" fontSize="42" fontWeight="300" letterSpacing="-1.5"
            style={{ fill: DS }} fontFamily={SANS}>Aa</text>
          {[
            { y: 72,  size: '11.5', w: '600', label: 'Display / 48px / Semibold', lw: 116 },
            { y: 86,  size: '9',    w: '500', label: 'Heading / 32px / Medium',   lw: 108 },
            { y: 99,  size: '7.5',  w: '400', label: 'Body / 16px / Regular',     lw: 100 },
            { y: 111, size: '6.5',  w: '400', label: 'Caption / 12px / Muted',    lw: 96  },
          ].map(r => (
            <g key={r.y}>
              <text x="0" y={r.y} fontSize={r.size} fontWeight={r.w}
                style={{ fill: r.y < 86 ? DS : DSS }} fontFamily={SANS}>{r.label}</text>
              <line x1="0" y1={r.y + 3} x2={r.lw} y2={r.y + 3}
                style={{ stroke: DL }} strokeWidth="0.5" />
            </g>
          ))}
          <text x="0" y="130" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>SPACING SCALE</text>
          {[
            { x: 0,   w: 4,  label: '4' },
            { x: 12,  w: 8,  label: '8' },
            { x: 28,  w: 16, label: '16' },
            { x: 52,  w: 24, label: '24' },
            { x: 84,  w: 32, label: '32' },
            { x: 124, w: 48, label: '48' },
          ].map(s => (
            <g key={s.label}>
              <rect x={s.x} y="136" width={s.w} height="8"
                style={{ fill: DFS, stroke: DSS }} strokeWidth="0.5" />
              <text x={s.x + s.w / 2} y="154" fontSize="5.5" textAnchor="middle"
                style={{ fill: DLab }} fontFamily={MONO}>{s.label}</text>
            </g>
          ))}
          <line x1="0"   y1="136" x2="0"   y2="160" style={{ stroke: DSS }} strokeWidth="0.5" />
          <line x1="172" y1="136" x2="172" y2="160" style={{ stroke: DSS }} strokeWidth="0.5" />
          <line x1="0"   y1="160" x2="172" y2="160" style={{ stroke: DSS }} strokeWidth="0.5" />
        </g>
      </g>

      {/* ── C2: DESIGN TOKENS (top-right) */}
      <g transform="translate(358,30)">
        <g className="ds-a2">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>DESIGN TOKENS</text>
          {[
            { x: 0,  color: DS,   label: 'ink',     pulse: false },
            { x: 28, color: DSS,  label: 'muted',   pulse: false },
            { x: 56, color: DFS,  label: 'subtle',  pulse: false, border: DSS },
            { x: 84, color: BLUE, label: 'primary', pulse: true  },
          ].map(s => (
            <g key={s.label}>
              <rect x={s.x} y="16" width="20" height="20"
                style={{ fill: s.color }}
                stroke={s.border ?? 'none'} strokeWidth={s.border ? '0.5' : '0'}
                className={s.pulse ? 'ds-pulse' : ''} />
              <text x={s.x + 10} y="48" fontSize="6" textAnchor="middle"
                style={{ fill: s.pulse ? BLUE : DLab }}
                fontFamily={MONO}
                className={s.pulse ? 'ds-pulse2' : ''}>{s.label}</text>
            </g>
          ))}
          {[
            { t: '─ color-ink: #111111',       blue: false },
            { t: '─ color-primary: #3B82F6',   blue: true  },
            { t: '─ spacing-4: 4px',            blue: false },
            { t: '─ spacing-8: 8px',            blue: false },
            { t: '─ spacing-24: 24px',          blue: false },
            { t: '─ radius-none: 0px',          blue: false },
            { t: '─ font-weight-600: semibold', blue: false },
            { t: '─ line-height-tight: 1.1',    blue: false },
          ].map((v, i) => (
            <text key={i} x="0" y={62 + i * 12} fontSize="6.5"
              style={{ fill: v.blue ? BLUE : DLab, opacity: v.blue ? 0.85 : 1 }}
              fontFamily={MONO}>{v.t}</text>
          ))}
          <line x1="0" y1="160" x2="150" y2="160" style={{ stroke: DL }} strokeWidth="0.5" />
          {[
            { t: 'var(--color-ink)',     blue: false },
            { t: 'var(--spacing-24)',    blue: false },
            { t: 'var(--color-primary)', blue: true  },
          ].map((v, i) => (
            <text key={i} x="0" y={170 + i * 12} fontSize="6"
              style={{ fill: v.blue ? BLUE : DLab, opacity: v.blue ? 0.75 : 1 }}
              fontFamily={MONO}>{v.t}</text>
          ))}
        </g>
      </g>

      {/* ── C3: COMPONENTS (mid-left) */}
      <g transform="translate(30,214)">
        <g className="ds-a3">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>COMPONENTS</text>
          <rect x="0" y="16" width="84" height="24" style={{ fill: DS }} />
          <text x="42" y="32" fontSize="8.5" textAnchor="middle"
            fill="white" fontFamily={SANS} fontWeight="500">Primary</text>
          <rect x="92" y="16" width="78" height="24"
            style={{ stroke: DS }} strokeWidth="0.85" fill="none" />
          <text x="131" y="32" fontSize="8.5" textAnchor="middle"
            style={{ fill: DS }} fontFamily={SANS} fontWeight="400">Secondary</text>
          <text x="0" y="60" fontSize="8.5" style={{ fill: DS }} fontFamily={SANS}>Ghost link</text>
          <line x1="0" y1="62" x2="55" y2="62" style={{ stroke: DS }} strokeWidth="0.5" />
          <rect x="0" y="72" width="168" height="24"
            style={{ stroke: DSS }} strokeWidth="0.85" fill="none" />
          <text x="10" y="88" fontSize="8" style={{ fill: DLab }} fontFamily={SANS}>Search components…</text>
          <circle cx="158" cy="84" r="4.5" style={{ stroke: DSS }} strokeWidth="0.75" fill="none" />
          <line x1="161" y1="87" x2="163" y2="89" style={{ stroke: DSS }} strokeWidth="0.75" />
          <rect x="0" y="104" width="168" height="24"
            style={{ stroke: DSS }} strokeWidth="0.85" fill="none" />
          <text x="10" y="120" fontSize="8" style={{ fill: DLab }} fontFamily={SANS}>Email address</text>
          <text x="0" y="148" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>TOGGLES</text>
          <rect x="0" y="156" width="30" height="16" rx="8"
            style={{ stroke: DSS }} strokeWidth="0.75" fill="none" />
          <circle cx="8" cy="164" r="5.5" style={{ fill: DSS }} />
          <text x="36" y="168" fontSize="7.5" style={{ fill: DLab }} fontFamily={SANS}>Off</text>
          <rect x="0" y="178" width="30" height="16" rx="8"
            fill={BLUE} fillOpacity="0.85" />
          <circle cx="22" cy="186" r="5.5" fill="white" />
          <text x="36" y="190" fontSize="7.5" style={{ fill: DSS }} fontFamily={SANS}>On</text>
          <text x="0" y="214" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>PROGRESS</text>
          <rect x="0" y="220" width="124" height="5"
            style={{ fill: DFS, stroke: DL }} strokeWidth="0.5" />
          <rect x="0" y="220" width="84" height="5" style={{ fill: DSS }} />
          <text x="128" y="225" fontSize="6.5" style={{ fill: DLab }} fontFamily={MONO}>68%</text>
          <rect x="0" y="232" width="124" height="5"
            style={{ fill: DFS, stroke: DL }} strokeWidth="0.5" />
          <rect x="0" y="232" width="43" height="5" style={{ fill: DL }} />
          <text x="128" y="237" fontSize="6.5" style={{ fill: DLab }} fontFamily={MONO}>35%</text>
        </g>
      </g>

      {/* ── C4: HIERARCHY + AUTO-LAYOUT (center) */}
      <g transform="translate(220,148)">
        <g className="ds-a4">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>HIERARCHY</text>
          <rect x="46" y="16" width="48" height="18"
            style={{ stroke: DS }} strokeWidth="0.75" fill="none" />
          <text x="70" y="28" fontSize="7" textAnchor="middle"
            style={{ fill: DS }} fontFamily={MONO}>Page</text>
          <line x1="70" y1="34" x2="70" y2="44" style={{ stroke: DSS }} strokeWidth="0.5" />
          <line x1="30" y1="44" x2="110" y2="44" style={{ stroke: DSS }} strokeWidth="0.5" />
          <line x1="30" y1="44" x2="30" y2="54" style={{ stroke: DSS }} strokeWidth="0.5" />
          <line x1="110" y1="44" x2="110" y2="54" style={{ stroke: DSS }} strokeWidth="0.5" />
          <rect x="10" y="54" width="40" height="16"
            style={{ stroke: DSS }} strokeWidth="0.75" fill="none" />
          <text x="30" y="65" fontSize="6.5" textAnchor="middle"
            style={{ fill: DSS }} fontFamily={MONO}>Nav</text>
          <rect x="90" y="54" width="40" height="16"
            style={{ stroke: DSS }} strokeWidth="0.75" fill="none" />
          <text x="110" y="65" fontSize="6.5" textAnchor="middle"
            style={{ fill: DSS }} fontFamily={MONO}>Content</text>
          <line x1="30" y1="70" x2="30" y2="78" style={{ stroke: DL }} strokeWidth="0.5" />
          <line x1="18" y1="78" x2="42" y2="78" style={{ stroke: DL }} strokeWidth="0.5" />
          <line x1="18" y1="78" x2="18" y2="86" style={{ stroke: DL }} strokeWidth="0.5" />
          <line x1="42" y1="78" x2="42" y2="86" style={{ stroke: DL }} strokeWidth="0.5" />
          <rect x="6" y="86" width="24" height="12"
            style={{ stroke: DL }} strokeWidth="0.5" fill="none" />
          <text x="18" y="95" fontSize="5.5" textAnchor="middle"
            style={{ fill: DLab }} fontFamily={MONO}>Logo</text>
          <rect x="30" y="86" width="24" height="12"
            style={{ stroke: DL }} strokeWidth="0.5" fill="none" />
          <text x="42" y="95" fontSize="5.5" textAnchor="middle"
            style={{ fill: DLab }} fontFamily={MONO}>Menu</text>
          <line x1="0" y1="112" x2="140" y2="112"
            style={{ stroke: DL }} strokeWidth="0.5" />
          <text x="0" y="124" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>AUTO-LAYOUT</text>
          <rect x="0" y="130" width="140" height="62"
            style={{ stroke: DSS }} strokeWidth="0.75" fill="none" strokeDasharray="3 2" />
          <line x1="0" y1="144" x2="12" y2="144"
            stroke={BLUE} strokeWidth="0.5" strokeOpacity="0.55" />
          <line x1="12" y1="130" x2="12" y2="144"
            stroke={BLUE} strokeWidth="0.5" strokeOpacity="0.55" />
          <text x="3" y="153" fontSize="5.5" fill={BLUE} fontFamily={MONO} opacity="0.65">12</text>
          {[12, 54, 96].map(x => (
            <rect key={x} x={x} y="144" width="34" height="14"
              style={{ stroke: DSS }} strokeWidth="0.5" fill="none" />
          ))}
          <line x1="46" y1="151" x2="54" y2="151"
            stroke={BLUE} strokeWidth="0.5" strokeOpacity="0.55" />
          <text x="47" y="147" fontSize="5" fill={BLUE} fontFamily={MONO} opacity="0.65">8</text>
          <rect x="12" y="166" width="116" height="16"
            style={{ stroke: DSS }} strokeWidth="0.5" fill="none" />
          <line x1="130" y1="130" x2="140" y2="130"
            style={{ stroke: DL }} strokeWidth="0.5" />
          <line x1="130" y1="192" x2="140" y2="192"
            style={{ stroke: DL }} strokeWidth="0.5" />
          <line x1="135" y1="130" x2="135" y2="192"
            style={{ stroke: DSS }} strokeWidth="0.5" />
          <text x="143" y="165" fontSize="6" style={{ fill: DLab }} fontFamily={MONO}>62</text>
        </g>
      </g>

      {/* ── C5: CARD + AVATARS + NOTIFICATION (right) */}
      <g transform="translate(376,172)">
        <g className="ds-a5">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>CARD</text>
          <rect x="0" y="16" width="172" height="108"
            style={{ stroke: DS, fill: DFC }} strokeWidth="0.75" />
          <line x1="0" y1="38" x2="172" y2="38" style={{ stroke: DL }} strokeWidth="0.5" />
          <text x="12" y="31" fontSize="9.5" fontWeight="600"
            style={{ fill: DS }} fontFamily={SANS}>Component Name</text>
          {[154, 161, 168].map(cx => (
            <circle key={cx} cx={cx} cy="28" r="1.5" style={{ fill: DSS }} />
          ))}
          {[48, 59, 70].map((y, i) => (
            <rect key={y} x="12" y={y} width={[138, 100, 120][i]} height="5"
              style={{ fill: DFS }} />
          ))}
          <rect x="108" y="89" width="52" height="18" style={{ fill: DS }} />
          <text x="134" y="100" fontSize="7.5" textAnchor="middle"
            fill="white" fontFamily={SANS}>Action</text>
          <text x="0" y="142" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>AVATARS</text>
          {[
            { cx: 12, label: 'TM' },
            { cx: 30, label: 'JD' },
            { cx: 48, label: 'AL' },
          ].map(a => (
            <g key={a.cx}>
              <circle cx={a.cx} cy="158" r="11"
                style={{ stroke: DS, fill: DFS }} strokeWidth="0.75" />
              <text x={a.cx} y="161.5" fontSize="6.5" textAnchor="middle" fontWeight="500"
                style={{ fill: DSS }} fontFamily={SANS}>{a.label}</text>
            </g>
          ))}
          <circle cx="66" cy="158" r="11"
            style={{ stroke: DSS }} strokeWidth="0.5" fill="none" strokeDasharray="2 1.5" />
          <text x="66" y="161.5" fontSize="6.5" textAnchor="middle"
            style={{ fill: DLab }} fontFamily={SANS}>+4</text>
          <text x="0" y="188" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>NOTIFICATION</text>
          <rect x="0" y="194" width="172" height="26"
            style={{ stroke: DSS }} strokeWidth="0.75" fill="none" />
          <rect x="0" y="194" width="3" height="26" fill={BLUE} />
          <text x="12" y="210" fontSize="8" style={{ fill: DS }} fontFamily={SANS}>Update available — v2.4.1</text>
          <text x="155" y="210" fontSize="9" style={{ fill: DLab }} fontFamily={SANS}>✕</text>
        </g>
      </g>

      {/* ── C6: TABLE (bottom-left) */}
      <g transform="translate(28,386)">
        <g className="ds-a6">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>DATA TABLE</text>
          <rect x="0" y="14" width="200" height="16" style={{ fill: DFS }} />
          {[
            { x: 6,   t: 'Name'   },
            { x: 74,  t: 'Role'   },
            { x: 126, t: 'Status' },
            { x: 170, t: 'Act'    },
          ].map(h => (
            <text key={h.x} x={h.x} y="25" fontSize="7" fontWeight="600"
              style={{ fill: DSS }} fontFamily={SANS}>{h.t}</text>
          ))}
          {[
            { name: 'Sarah Chen', role: 'Admin',  status: '● Active', muted: false },
            { name: 'James Park', role: 'Editor', status: '● Active', muted: false },
            { name: 'Maria Lin',  role: 'Viewer', status: '○ Away',   muted: true  },
          ].map((r, i) => {
            const y = 30 + i * 18;
            return (
              <g key={r.name}>
                <line x1="0" y1={y} x2="200" y2={y} style={{ stroke: DL }} strokeWidth="0.5" />
                <text x="6"   y={y + 11} fontSize="7" style={{ fill: DS }} fontFamily={SANS}>{r.name}</text>
                <text x="74"  y={y + 11} fontSize="7" style={{ fill: DSS }} fontFamily={SANS}>{r.role}</text>
                <text x="126" y={y + 11} fontSize="7"
                  style={{ fill: r.muted ? DSS : DS }} fontFamily={SANS}>{r.status}</text>
                <rect x="170" y={y + 3} width="22" height="10"
                  style={{ stroke: DL }} strokeWidth="0.5" fill="none" />
              </g>
            );
          })}
          <line x1="0" y1="84" x2="200" y2="84" style={{ stroke: DL }} strokeWidth="0.5" />
          {[64, 116, 160].map(x => (
            <line key={x} x1={x} y1="14" x2={x} y2="84"
              style={{ stroke: DL }} strokeWidth="0.5" />
          ))}
          <rect x="0" y="14" width="200" height="70"
            style={{ stroke: DSS }} strokeWidth="0.5" fill="none" />
        </g>
      </g>

      {/* ── C6b: BAR CHART (bottom center-left) */}
      <g transform="translate(248,386)">
        <g className="ds-a6">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>CHART</text>
          <line x1="18" y1="14" x2="18" y2="80" style={{ stroke: DSS }} strokeWidth="0.75" />
          <line x1="18" y1="80" x2="138" y2="80" style={{ stroke: DSS }} strokeWidth="0.75" />
          {[28, 47, 66].map(y => (
            <line key={y} x1="18" y1={y} x2="138" y2={y}
              style={{ stroke: DL }} strokeWidth="0.5" strokeDasharray="2 3" />
          ))}
          {[
            { x: 24,  h: 42, label: 'Q1' },
            { x: 44,  h: 56, label: 'Q2' },
            { x: 64,  h: 32, label: 'Q3' },
            { x: 84,  h: 60, label: 'Q4' },
            { x: 104, h: 48, label: 'Q5' },
          ].map(b => (
            <g key={b.x}>
              <rect x={b.x} y={80 - b.h} width="14" height={b.h}
                style={{ fill: DFS, stroke: DSS }} strokeWidth="0.5" />
              <text x={b.x + 7} y="89" fontSize="5.5" textAnchor="middle"
                style={{ fill: DLab }} fontFamily={MONO}>{b.label}</text>
            </g>
          ))}
        </g>
      </g>

      {/* ── C7: MODAL (bottom-center) */}
      <g transform="translate(220,360)">
        <g className="ds-a7">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            style={{ fill: DLab }} fontFamily={MONO}>MODAL</text>
          <rect x="-8" y="14" width="180" height="132"
            style={{ fill: DFS }} opacity="0.5" />
          <rect x="4" y="20" width="164" height="120"
            style={{ stroke: DS, fill: DFC }} strokeWidth="0.75" />
          <line x1="4" y1="42" x2="168" y2="42" style={{ stroke: DL }} strokeWidth="0.5" />
          <text x="16" y="35" fontSize="9.5" fontWeight="600"
            style={{ fill: DS }} fontFamily={SANS}>Dialog Title</text>
          <text x="156" y="35" fontSize="10" style={{ fill: DSS }} fontFamily={SANS}>✕</text>
          {[50, 60, 70, 80].map((y, i) => (
            <rect key={y} x="16" y={y} width={[136, 104, 120, 80][i]} height="5"
              style={{ fill: DFS }} />
          ))}
          <rect x="16" y="104" width="54" height="22"
            style={{ stroke: DSS }} strokeWidth="0.75" fill="none" />
          <text x="43" y="118" fontSize="8" textAnchor="middle"
            style={{ fill: DSS }} fontFamily={SANS}>Cancel</text>
          <rect x="78" y="104" width="78" height="22" style={{ fill: DS }} />
          <text x="117" y="118" fontSize="8" textAnchor="middle"
            fill="white" fontFamily={SANS}>Confirm</text>
        </g>
      </g>

      {/* ── C8: AI ASSISTANT (bottom-right) */}
      <g transform="translate(390,356)">
        <g className="ds-a8">
          <text x="0" y="9" fontSize="6.5" letterSpacing="1.8"
            fill={BLUE} fontFamily={MONO} opacity="0.75">AI ASSISTANT</text>
          <rect x="0" y="14" width="162" height="130"
            style={{ stroke: DS, fill: DFC }} strokeWidth="0.75" />
          <rect x="0" y="14" width="162" height="24" fill={BLUE} fillOpacity="0.07" />
          <line x1="0" y1="38" x2="162" y2="38"
            stroke={BLUE} strokeWidth="0.75" strokeOpacity="0.28" />
          <circle cx="13" cy="26" r="6"
            stroke={BLUE} strokeWidth="0.75" fill="none" className="ds-pulse2" />
          <circle cx="13" cy="26" r="2.5" fill={BLUE} className="ds-pulse" />
          <text x="24" y="30" fontSize="8.5" fontWeight="600"
            style={{ fill: DS }} fontFamily={SANS}>AI Assistant</text>
          <rect x="8" y="46" width="106" height="22"
            style={{ stroke: DL, fill: DFS }} strokeWidth="0.5" />
          <text x="14" y="56" fontSize="6.5" style={{ fill: DSS }} fontFamily={SANS}>What patterns should</text>
          <text x="14" y="65" fontSize="6.5" style={{ fill: DSS }} fontFamily={SANS}>I use for this flow?</text>
          <rect x="8" y="76" width="146" height="34"
            stroke={BLUE} strokeWidth="0.5" strokeOpacity="0.28" fill="none" />
          <rect x="8" y="76" width="2.5" height="34" fill={BLUE} fillOpacity="0.55" />
          <text x="17" y="87" fontSize="6.5" style={{ fill: DSS }} fontFamily={SANS}>Consider progressive disclosure</text>
          <text x="17" y="97" fontSize="6.5" style={{ fill: DSS }} fontFamily={SANS}>with explicit confirmation steps</text>
          <text x="17" y="107" fontSize="6.5" style={{ fill: DSS }} fontFamily={SANS}>for irreversible actions.</text>
          <rect x="8" y="118" width="132" height="20"
            style={{ stroke: DSS }} strokeWidth="0.5" fill="none" />
          <text x="14" y="131" fontSize="7" style={{ fill: DLab }} fontFamily={SANS}>Ask AI…</text>
          <rect x="134" y="120" width="16" height="16" fill={BLUE} fillOpacity="0.85" />
          <text x="142" y="131" fontSize="9" textAnchor="middle" fill="white" fontFamily={SANS}>↑</text>
        </g>
      </g>

    </g>
  </svg>
);

export default DesignSystemIllustration;
