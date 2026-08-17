import React from 'react';
import {
  Gauge,
  Users,
  CircleDollarSign,
  ClipboardList,
  BookOpen,
  AlignLeft,
  Settings,
  UserCircle2,
  SlidersHorizontal,
  Download,
  Share2,
  Search,
  ChevronRight,
  X,
  RotateCcw,
  ArrowRight,
} from 'lucide-react';
import { ct, ctFont } from './tokens';
import { CoretechsLogo } from './CoretechsLogo';

// ─────────────────────────────────────────────────────────────────────────────
// CoreTechs 3.0 — interactive prototype (Population Builder, Option 1b flow)
// Rebuilt live from the original Sketch source. Self-contained, light-themed
// product surface that renders independent of the site's light/dark theme.
// Flow: Dashboard → click "Population" → build a cohort → Generate → Members.
// ─────────────────────────────────────────────────────────────────────────────

type Screen = 'dashboard' | 'builder' | 'output';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', Icon: Gauge, active: true },
  { id: 'population', label: 'Population', Icon: Users, active: true },
  { id: 'cost', label: 'Cost of Care', Icon: CircleDollarSign, active: false },
  { id: 'lists', label: 'Lists', Icon: ClipboardList, active: false },
  { id: 'dictionary', label: 'Dictionary', Icon: BookOpen, active: false },
] as const;

type ElementItem = { id: string; label: string; value: string };
type ElementGroup = { group: string; items: ElementItem[] };

const ELEMENT_GROUPS: ElementGroup[] = [
  {
    group: 'Demographics',
    items: [
      { id: 'age', label: 'Age', value: '45 – 64' },
      { id: 'gender', label: 'Gender', value: 'All' },
      { id: 'city', label: 'City', value: 'Chicago' },
      { id: 'county', label: 'County', value: 'Cook' },
      { id: 'state', label: 'State', value: 'IL' },
    ],
  },
  {
    group: 'Utilization',
    items: [
      { id: 'inpatient', label: 'Inpatient Admission', value: '≥ 1' },
      { id: 'ed', label: 'ED Visit', value: '≥ 2' },
      { id: 'lateEd', label: 'Late ED Visit', value: '≥ 1' },
      { id: 'wellness', label: 'Wellness Visit', value: 'None in 12 mo' },
    ],
  },
  {
    group: 'Clinical',
    items: [
      { id: 'measures', label: 'Measures', value: 'HEDIS' },
      { id: 'condition', label: 'Condition', value: 'Diabetes' },
      { id: 'hba1c', label: 'HbA1C', value: '> 9.0%' },
    ],
  },
];

const ALL_ITEMS = ELEMENT_GROUPS.flatMap((g) => g.items);

const RISK_DRIVERS = [
  { label: 'Diabetes', prevalence: 45, level: 'high' },
  { label: 'Heart Failure', prevalence: 33, level: 'high' },
  { label: 'Serious Mental Illness', prevalence: 31, level: 'medium' },
  { label: 'Drug Use Disorder', prevalence: 26.5, level: 'medium' },
  { label: 'DME', prevalence: 12, level: 'low' },
] as const;

const KPIS = [
  { label: 'Total Members', value: '10,000' },
  { label: '% High Risk', value: '25%' },
  { label: '% Medium Risk', value: '7%' },
  { label: '% Low Risk', value: '68%' },
  { label: '% High Cost', value: '10%' },
] as const;

const riskColor = (lvl: string) =>
  lvl === 'high' ? ct.error : lvl === 'medium' ? ct.statusMedium : ct.statusLow;

// Deterministic sample members so the "generated" cohort is stable.
// [name, primary condition, risk score, risk level]
const MEMBER_POOL: [string, string, number, string][] = [
  ['Alicia Bennett', 'Diabetes', 78, 'high'],
  ['Marcus Reed', 'Heart Failure', 71, 'high'],
  ['Priya Nair', 'Diabetes', 66, 'medium'],
  ['Devon Clarke', 'Drug Use Disorder', 63, 'medium'],
  ['Sofia Alvarez', 'Serious Mental Illness', 59, 'medium'],
  ['James O’Neal', 'Diabetes', 55, 'medium'],
  ['Hannah Cho', 'Heart Failure', 74, 'high'],
  ['Robert King', 'DME', 41, 'low'],
  ['Nadia Hassan', 'Diabetes', 69, 'medium'],
  ['Ethan Ward', 'Drug Use Disorder', 62, 'medium'],
  ['Grace Miller', 'Serious Mental Illness', 48, 'low'],
  ['Tomás Rivera', 'Heart Failure', 80, 'high'],
];

// ── Small primitives ─────────────────────────────────────────────────────────

const Switch: React.FC<{ on: boolean; onClick: () => void }> = ({ on, onClick }) => (
  <button
    onClick={onClick}
    role="switch"
    aria-checked={on}
    style={{
      width: 38,
      height: 20,
      borderRadius: 999,
      background: on ? ct.teal : '#C7CDD3',
      position: 'relative',
      transition: 'background .18s ease',
      flexShrink: 0,
    }}
  >
    <span
      style={{
        position: 'absolute',
        top: 2,
        left: on ? 20 : 2,
        width: 16,
        height: 16,
        borderRadius: '50%',
        background: '#fff',
        boxShadow: '0 1px 2px rgba(0,0,0,.25)',
        transition: 'left .18s ease',
      }}
    />
  </button>
);

const Card: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({
  children,
  style,
}) => (
  <div
    style={{
      background: ct.surface,
      border: `1px solid ${ct.line}`,
      borderRadius: 6,
      boxShadow: '0 1px 2px rgba(16,24,40,.04)',
      ...style,
    }}
  >
    {children}
  </div>
);

// ── Screens ──────────────────────────────────────────────────────────────────

const DashboardScreen: React.FC<{ onAnalyze: () => void }> = ({ onAnalyze }) => (
  <div style={{ padding: '28px 32px 40px' }}>
    <p style={{ color: ct.body, fontSize: 20, fontWeight: 400, marginBottom: 4 }}>
      Welcome to MyAnalytics, <span style={{ fontWeight: 600, color: ct.heading }}>Timothy McGuire</span>.
    </p>
    <p style={{ color: ct.muted, fontSize: 13, marginBottom: 22 }}>
      Population overview · Data for the last 90 days
    </p>

    {/* KPI strip */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, marginBottom: 30 }}>
      {KPIS.map((k) => (
        <div
          key={k.label}
          style={{
            background: ct.teal,
            borderRadius: 6,
            padding: '18px 20px',
            color: '#fff',
            minWidth: 0,
          }}
        >
          <div style={{ fontSize: 12.5, opacity: 0.92, marginBottom: 10, whiteSpace: 'nowrap' }}>
            {k.label}
          </div>
          <div style={{ fontSize: 34, fontWeight: 300, lineHeight: 1 }}>{k.value}</div>
        </div>
      ))}
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20 }}>
      {/* Predictive risk drivers */}
      <Card style={{ padding: '20px 22px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: ct.heading }}>Predictive Risk Drivers</h3>
          <span style={{ fontSize: 12, color: ct.muted }}>Prevalence</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {RISK_DRIVERS.map((d) => (
            <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 150, fontSize: 13.5, color: ct.orange, fontWeight: 500, flexShrink: 0 }}>
                {d.label}
              </div>
              <div style={{ flex: 1, height: 10, background: ct.lineSoft, borderRadius: 999 }}>
                <div
                  style={{
                    width: `${(d.prevalence / 50) * 100}%`,
                    height: '100%',
                    background: riskColor(d.level),
                    borderRadius: 999,
                  }}
                />
              </div>
              <div style={{ width: 44, textAlign: 'right', fontSize: 13, color: ct.body, fontVariantNumeric: 'tabular-nums' }}>
                {d.prevalence}%
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 22 }}>
          <button
            onClick={onAnalyze}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: ct.orange,
              color: '#fff',
              fontSize: 13,
              fontWeight: 600,
              padding: '10px 18px',
              borderRadius: 4,
            }}
          >
            Analyze Population <ArrowRight size={15} strokeWidth={2.4} />
          </button>
        </div>
      </Card>

      {/* Cost of care */}
      <Card style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: ct.heading, marginBottom: 6 }}>
          Cost of Care Summary
        </h3>
        <p style={{ fontSize: 12, color: ct.muted, marginBottom: 20 }}>Year to Date</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 30, fontWeight: 300, color: ct.heading }}>$4.2M</div>
            <div style={{ fontSize: 12, color: ct.success, fontWeight: 600 }}>▲ +10% vs. benchmark</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 70, marginTop: 'auto' }}>
          {[40, 55, 48, 62, 58, 70, 66, 60].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? ct.teal : '#CFE3E6', borderRadius: 3 }} />
          ))}
        </div>
        <button
          style={{
            marginTop: 20,
            fontSize: 13,
            fontWeight: 600,
            color: ct.orange,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            alignSelf: 'flex-start',
          }}
        >
          Analyze Cost of Care <ChevronRight size={15} strokeWidth={2.2} />
        </button>
      </Card>
    </div>
  </div>
);

const BuilderScreen: React.FC<{
  selected: Record<string, boolean>;
  toggle: (id: string) => void;
  buildName: string;
  setBuildName: (v: string) => void;
  clear: () => void;
  generate: () => void;
}> = ({ selected, toggle, buildName, setBuildName, clear, generate }) => {
  const selectedItems = ALL_ITEMS.filter((i) => selected[i.id]);
  const canGenerate = selectedItems.length > 0 && buildName.trim().length > 0;

  return (
    <div style={{ padding: '24px 32px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 }}>
        <h2 style={{ fontSize: 18, fontWeight: 600, color: ct.heading }}>Population Builder</h2>
        <span style={{ fontSize: 12, color: ct.muted }}>Updated as of 03/01/2022</span>
      </div>
      <p style={{ fontSize: 13, color: ct.muted, marginBottom: 22 }}>
        Assemble a cohort by turning on the elements that define your population.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
        {/* Build elements */}
        <Card style={{ padding: '4px 0' }}>
          {ELEMENT_GROUPS.map((g) => (
            <div key={g.group}>
              <div
                style={{
                  padding: '12px 20px 8px',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '.06em',
                  textTransform: 'uppercase',
                  color: ct.muted,
                }}
              >
                {g.group}
              </div>
              {g.items.map((it) => {
                const on = !!selected[it.id];
                return (
                  <div
                    key={it.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '11px 20px',
                      borderTop: `1px solid ${ct.lineSoft}`,
                      background: on ? '#F5FAFB' : 'transparent',
                    }}
                  >
                    <Switch on={on} onClick={() => toggle(it.id)} />
                    <span style={{ fontSize: 14, color: ct.heading, fontWeight: 500, width: 190 }}>
                      {it.label}
                    </span>
                    <span
                      style={{
                        fontSize: 12.5,
                        color: on ? ct.tealDark : ct.faint,
                        fontWeight: on ? 600 : 400,
                        marginLeft: 'auto',
                      }}
                    >
                      {on ? it.value : 'Off'}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </Card>

        {/* Summary drawer */}
        <Card style={{ padding: 20, position: 'sticky', top: 8 }}>
          <label style={{ fontSize: 12, fontWeight: 600, color: ct.body, display: 'block', marginBottom: 6 }}>
            Build Name
          </label>
          <input
            value={buildName}
            onChange={(e) => setBuildName(e.target.value)}
            placeholder="e.g. Uncontrolled Diabetes"
            style={{
              width: '100%',
              border: `1px solid ${ct.line}`,
              borderRadius: 4,
              padding: '9px 11px',
              fontSize: 13.5,
              color: ct.heading,
              outline: 'none',
              marginBottom: 18,
              fontFamily: ctFont,
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: ct.heading }}>
              Summary ({selectedItems.length})
            </span>
            {selectedItems.length > 0 && (
              <button onClick={clear} style={{ fontSize: 12, color: ct.orange, fontWeight: 600 }}>
                Clear
              </button>
            )}
          </div>

          {selectedItems.length === 0 ? (
            <p style={{ fontSize: 12.5, color: ct.faint, padding: '14px 0', lineHeight: 1.5 }}>
              No elements yet. Toggle elements on to build your population.
            </p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 6 }}>
              {selectedItems.map((it) => (
                <div
                  key={it.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: '#F3F7F8',
                    border: `1px solid ${ct.lineSoft}`,
                    borderRadius: 4,
                    padding: '7px 10px',
                  }}
                >
                  <span style={{ fontSize: 12.5, color: ct.heading }}>
                    <strong style={{ fontWeight: 600 }}>{it.label}</strong>
                    <span style={{ color: ct.muted }}> · {it.value}</span>
                  </span>
                  <button onClick={() => toggle(it.id)} aria-label={`Remove ${it.label}`}>
                    <X size={14} color={ct.muted} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={generate}
            disabled={!canGenerate}
            style={{
              marginTop: 18,
              width: '100%',
              background: canGenerate ? ct.orange : ct.orangeDisabled,
              color: '#fff',
              fontSize: 14,
              fontWeight: 600,
              padding: '11px 0',
              borderRadius: 4,
              cursor: canGenerate ? 'pointer' : 'not-allowed',
              transition: 'background .15s ease',
            }}
          >
            Generate Population
          </button>
        </Card>
      </div>
    </div>
  );
};

const OutputScreen: React.FC<{
  buildName: string;
  selected: Record<string, boolean>;
  onBack: () => void;
}> = ({ buildName, selected, onBack }) => {
  const selectedItems = ALL_ITEMS.filter((i) => selected[i.id]);
  // Cohort size scales down as more filters are applied (purely illustrative).
  const total = Math.max(120, Math.round(10000 / Math.pow(1.7, selectedItems.length)));
  const [query, setQuery] = React.useState('');
  const members = MEMBER_POOL.filter(([n]) =>
    (n as string).toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div style={{ padding: '24px 32px 40px' }}>
      <button
        onClick={onBack}
        style={{ fontSize: 12.5, color: ct.orange, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5, marginBottom: 14 }}
      >
        ← Back to builder
      </button>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 }}>
        <div>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: ct.heading }}>
            {buildName || 'Untitled Population'}
          </h2>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
            {selectedItems.map((it) => (
              <span
                key={it.id}
                style={{
                  fontSize: 11.5,
                  color: ct.tealDark,
                  background: '#E7F2F3',
                  border: `1px solid #CFE3E6`,
                  borderRadius: 999,
                  padding: '3px 10px',
                }}
              >
                {it.label}: {it.value}
              </span>
            ))}
          </div>
        </div>
        <span
          style={{
            fontSize: 12.5,
            color: ct.success,
            fontWeight: 600,
            background: '#EAF7EB',
            border: '1px solid #CDEBCF',
            borderRadius: 4,
            padding: '5px 10px',
            whiteSpace: 'nowrap',
          }}
        >
          Population generated
        </span>
      </div>

      {/* result KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 26 }}>
        {[
          { label: 'Member Population', value: total.toLocaleString() },
          { label: '% High Risk', value: '31%' },
          { label: '% High Cost', value: '14%' },
          { label: 'Avg Risk Score', value: '2.6' },
        ].map((k) => (
          <div key={k.label} style={{ background: ct.teal, borderRadius: 6, padding: '16px 18px', color: '#fff' }}>
            <div style={{ fontSize: 12, opacity: 0.92, marginBottom: 8 }}>{k.label}</div>
            <div style={{ fontSize: 30, fontWeight: 300, lineHeight: 1 }}>{k.value}</div>
          </div>
        ))}
      </div>

      {/* member table */}
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px', borderBottom: `1px solid ${ct.line}` }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, color: ct.heading }}>Members</h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: `1px solid ${ct.line}`, borderRadius: 4, padding: '6px 10px', width: 240 }}>
            <Search size={14} color={ct.muted} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Member Search"
              style={{ border: 'none', outline: 'none', fontSize: 13, width: '100%', color: ct.heading, fontFamily: ctFont }}
            />
          </div>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Name', 'ID', 'Primary Condition', 'Risk Score'].map((h, i) => (
                <th
                  key={h}
                  style={{
                    textAlign: i === 3 ? 'right' : 'left',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '.05em',
                    textTransform: 'uppercase',
                    color: ct.muted,
                    padding: '10px 18px',
                    borderBottom: `1px solid ${ct.lineSoft}`,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map(([name, cond, score, level], idx) => (
              <tr key={idx} style={{ borderBottom: `1px solid ${ct.lineSoft}` }}>
                <td style={{ padding: '12px 18px', fontSize: 13.5, color: ct.orange, fontWeight: 500 }}>{name}</td>
                <td style={{ padding: '12px 18px', fontSize: 13, color: ct.body, fontVariantNumeric: 'tabular-nums' }}>
                  {String(100238 + idx * 47)}
                </td>
                <td style={{ padding: '12px 18px', fontSize: 13, color: ct.body }}>{cond}</td>
                <td style={{ padding: '12px 18px', fontSize: 13, color: ct.body, textAlign: 'right' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
                    <span style={{ width: 9, height: 9, borderRadius: '50%', background: riskColor(level as string) }} />
                    {score as number}
                  </span>
                </td>
              </tr>
            ))}
            {members.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: '28px 18px', textAlign: 'center', fontSize: 13, color: ct.faint }}>
                  No members match “{query}”.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

// ── Shell ────────────────────────────────────────────────────────────────────

const CoretechsPrototype: React.FC<{ className?: string }> = ({ className }) => {
  const [screen, setScreen] = React.useState<Screen>('dashboard');
  const [selected, setSelected] = React.useState<Record<string, boolean>>({});
  const [buildName, setBuildName] = React.useState('');
  const [toast, setToast] = React.useState<string | null>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);

  const flashToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout((flashToast as any)._t);
    (flashToast as any)._t = window.setTimeout(() => setToast(null), 1600);
  };

  const goTo = (s: Screen) => {
    setScreen(s);
    contentRef.current?.scrollTo({ top: 0 });
  };

  const toggle = (id: string) => setSelected((p) => ({ ...p, [id]: !p[id] }));
  const reset = () => {
    setSelected({});
    setBuildName('');
    goTo('dashboard');
  };

  const activeNav =
    screen === 'dashboard' ? 'dashboard' : 'population';

  const title =
    screen === 'dashboard'
      ? 'Population Risk Analysis'
      : screen === 'builder'
      ? 'Population Builder'
      : 'Member Population';

  return (
    <div
      className={className}
      style={{ fontFamily: ctFont, background: ct.canvas, borderRadius: 10, overflow: 'hidden', border: `1px solid ${ct.line}` }}
    >
      {/* browser chrome */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 14px', background: '#E9ECEF', borderBottom: `1px solid ${ct.line}` }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FF5F57' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#FEBC2E' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28C840' }} />
        <div style={{ flex: 1, textAlign: 'center', fontSize: 12, color: ct.muted }}>
          app.coretechs.io / population
        </div>
        <button
          onClick={reset}
          title="Reset prototype"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11.5, color: ct.body, fontWeight: 600 }}
        >
          <RotateCcw size={12} /> Reset
        </button>
      </div>

      {/* app */}
      <div style={{ display: 'flex', height: 640, minWidth: 860 }}>
        {/* left rail */}
        <nav
          style={{
            width: 76,
            background: '#fff',
            borderRight: `1px solid ${ct.line}`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            paddingTop: 14,
            flexShrink: 0,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 16 }}>
            <CoretechsLogo size={30} color={ct.heading} />
          </div>
          {NAV.map((n) => {
            const isActive = n.id === activeNav;
            return (
              <button
                key={n.id}
                onClick={() => {
                  if (n.id === 'dashboard') goTo('dashboard');
                  else if (n.id === 'population') goTo('builder');
                  else flashToast(`${n.label} isn’t part of this prototype slice.`);
                }}
                style={{
                  position: 'relative',
                  padding: '13px 0 11px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 5,
                  color: isActive ? ct.heading : ct.faint,
                  opacity: n.active || isActive ? 1 : 0.65,
                }}
              >
                {isActive && (
                  <span style={{ position: 'absolute', left: 0, top: 8, bottom: 8, width: 3, background: ct.orange, borderRadius: 999 }} />
                )}
                <n.Icon size={20} strokeWidth={isActive ? 2 : 1.7} />
                <span style={{ fontSize: 10.5, fontWeight: isActive ? 600 : 500 }}>{n.label}</span>
              </button>
            );
          })}
          <div style={{ marginTop: 'auto', paddingBottom: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, color: ct.faint }}>
            <AlignLeft size={18} />
            <Settings size={18} />
            <UserCircle2 size={20} />
          </div>
        </nav>

        {/* main column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
          {/* top bar */}
          <header
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '0 24px',
              height: 58,
              background: '#fff',
              borderBottom: `1px solid ${ct.line}`,
              flexShrink: 0,
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
              <CoretechsLogo size={22} color={ct.heading} />
              <span style={{ fontSize: 15, fontWeight: 600, color: ct.heading }}>
                CoreTechs<sup style={{ fontSize: 8 }}>®</sup> Client
              </span>
            </div>
            <span style={{ width: 1, height: 22, background: ct.line }} />
            <span style={{ fontSize: 14, fontWeight: 600, color: ct.body }}>{title}</span>

            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 20 }}>
              {screen === 'output' && (
                <>
                  <button onClick={() => flashToast('Export is stubbed in this prototype.')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: ct.body, fontWeight: 500 }}>
                    <Download size={15} /> Download
                  </button>
                  <button onClick={() => flashToast('Share is stubbed in this prototype.')} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: ct.body, fontWeight: 500 }}>
                    <Share2 size={15} /> Share
                  </button>
                </>
              )}
              <button
                onClick={() => flashToast('Filter drawer isn’t part of this slice.')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13.5, color: ct.orange, fontWeight: 600 }}
              >
                <SlidersHorizontal size={15} /> Filter
              </button>
            </div>
          </header>

          {/* scrollable content */}
          <div ref={contentRef} style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
            {screen === 'dashboard' && <DashboardScreen onAnalyze={() => goTo('builder')} />}
            {screen === 'builder' && (
              <BuilderScreen
                selected={selected}
                toggle={toggle}
                buildName={buildName}
                setBuildName={setBuildName}
                clear={() => setSelected({})}
                generate={() => goTo('output')}
              />
            )}
            {screen === 'output' && (
              <OutputScreen buildName={buildName} selected={selected} onBack={() => goTo('builder')} />
            )}

            {/* footer */}
            <footer style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '18px 32px', borderTop: `1px solid ${ct.line}`, marginTop: 8 }}>
              <CoretechsLogo size={22} color={ct.muted} />
              <div>
                <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.04em', color: ct.body }}>
                  CORETECHS<sup style={{ fontSize: 7 }}>®</sup>
                </div>
                <div style={{ fontSize: 11, color: ct.faint }}>
                  Version 3.0 &nbsp; © 2019 – 2021 Gray Matter Analytics
                </div>
              </div>
            </footer>

            {toast && (
              <div
                style={{
                  position: 'sticky',
                  bottom: 16,
                  margin: '0 auto',
                  width: 'fit-content',
                  background: ct.heading,
                  color: '#fff',
                  fontSize: 12.5,
                  padding: '9px 16px',
                  borderRadius: 6,
                  boxShadow: '0 6px 18px rgba(0,0,0,.22)',
                }}
              >
                {toast}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoretechsPrototype;
