import React from 'react';

/**
 * The three tier AI component hierarchy: AI aware basics, human plus AI, and
 * fully agentic. Follows the same 480x290 canvas and token conventions as the
 * other illustrations in this folder.
 */
const ComponentLibraryIllustration: React.FC = () => (
  <svg viewBox="0 0 480 290" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
    <defs>
      <style>{`
        .cl-illus { --cl-soft:#6B7280; --cl-line:#E5DDD0; --cl-fill:#F3EFE7; --cl-blue:#2563EB; --cl-label:#1a1714; --cl-card:#ffffff; --cl-hi:#EFF6FF; }
        .dark .cl-illus { --cl-soft:#9ca3af; --cl-line:rgba(255,255,255,0.12); --cl-fill:#262626; --cl-blue:#93C5FD; --cl-label:#f5f5f5; --cl-card:#1c1c1c; --cl-hi:rgba(147,197,253,0.08); }
        @keyframes cl-stream { 0%,100%{opacity:0.25} 50%{opacity:1} }
        .cl-pulse{animation:cl-stream 1.8s ease-in-out infinite}
        .cl-pulse2{animation:cl-stream 1.8s ease-in-out infinite;animation-delay:0.5s}
        .cl-pulse3{animation:cl-stream 1.8s ease-in-out infinite;animation-delay:1s}
        @keyframes cl-fill { 0%,100%{width:34px} 50%{width:52px} }
        .cl-meter{animation:cl-fill 3s ease-in-out infinite}
      `}</style>
      <linearGradient id="cl-fade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="white" stopOpacity="1" />
        <stop offset="15%" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <mask id="cl-mask">
        <rect width="480" height="290" fill="white" />
        <rect width="480" height="290" fill="url(#cl-fade)" />
      </mask>
    </defs>

    <g className="cl-illus" mask="url(#cl-mask)">
      <rect width="480" height="290" style={{ fill: 'var(--cl-fill)' }} />

      {/* Tier 1: AI aware basics */}
      <rect x="26" y="18" width="130" height="254" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="91" y="36" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.1em" fontFamily="monospace" style={{ fill: 'var(--cl-soft)' }}>TIER 1 · STANDARD</text>
      <line x1="26" y1="44" x2="156" y2="44" style={{ stroke: 'var(--cl-line)' }} strokeWidth="1" />

      <rect x="38" y="58" width="62" height="16" style={{ fill: 'var(--cl-hi)', stroke: 'var(--cl-blue)' }} strokeWidth="1" />
      <text x="69" y="69" textAnchor="middle" fontSize="7" fontFamily="sans-serif" style={{ fill: 'var(--cl-blue)' }}>AI generated</text>

      <text x="38" y="96" fontSize="7" fontWeight="600" fontFamily="monospace" style={{ fill: 'var(--cl-soft)' }}>STREAMING</text>
      <rect x="38" y="104" width="104" height="6" className="cl-pulse" style={{ fill: 'var(--cl-line)' }} />
      <rect x="38" y="116" width="78" height="6" className="cl-pulse2" style={{ fill: 'var(--cl-line)' }} />
      <rect x="38" y="128" width="92" height="6" className="cl-pulse3" style={{ fill: 'var(--cl-line)' }} />

      <line x1="26" y1="150" x2="156" y2="150" style={{ stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="38" y="168" fontSize="7" fontWeight="600" fontFamily="monospace" style={{ fill: 'var(--cl-soft)' }}>FEEDBACK</text>
      <rect x="38" y="176" width="28" height="18" style={{ fill: 'var(--cl-fill)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="52" y="188" textAnchor="middle" fontSize="8" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>Yes</text>
      <rect x="72" y="176" width="28" height="18" style={{ fill: 'var(--cl-fill)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="86" y="188" textAnchor="middle" fontSize="8" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>No</text>

      <rect x="38" y="210" width="104" height="5" style={{ fill: 'var(--cl-line)' }} />
      <rect x="38" y="222" width="66" height="5" style={{ fill: 'var(--cl-line)' }} />
      <rect x="38" y="244" width="104" height="16" style={{ fill: 'var(--cl-fill)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="90" y="255" textAnchor="middle" fontSize="6.5" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>AI can make mistakes</text>

      {/* Tier 2: Human and AI together, highlighted as the common case */}
      <rect x="170" y="18" width="140" height="254" style={{ fill: 'var(--cl-hi)', stroke: 'var(--cl-blue)' }} strokeWidth="1.5" />
      <text x="240" y="36" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.1em" fontFamily="monospace" style={{ fill: 'var(--cl-blue)' }}>TIER 2 · HYBRID AI</text>
      <line x1="170" y1="44" x2="310" y2="44" style={{ stroke: 'var(--cl-blue)', opacity: 0.3 }} strokeWidth="1" />

      {/* Prompt input */}
      <rect x="182" y="58" width="116" height="22" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="190" y="72" fontSize="7.5" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>Summarize open claims</text>
      <rect x="282" y="63" width="12" height="12" style={{ fill: 'var(--cl-blue)' }} />

      {/* Suggestion card */}
      <rect x="182" y="92" width="116" height="54" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <rect x="182" y="92" width="2" height="54" style={{ fill: 'var(--cl-blue)' }} />
      <rect x="192" y="102" width="92" height="5" style={{ fill: 'var(--cl-line)' }} />
      <rect x="192" y="112" width="74" height="5" style={{ fill: 'var(--cl-line)' }} />
      <text x="192" y="132" fontSize="6.5" fontFamily="monospace" style={{ fill: 'var(--cl-soft)' }}>CONFIDENCE</text>
      <rect x="192" y="136" width="64" height="5" style={{ fill: 'var(--cl-line)' }} />
      <rect x="192" y="136" width="52" height="5" className="cl-meter" style={{ fill: 'var(--cl-blue)' }} />

      {/* Accept / edit / dismiss */}
      <rect x="182" y="158" width="36" height="18" style={{ fill: 'var(--cl-blue)' }} />
      <text x="200" y="170" textAnchor="middle" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" style={{ fill: '#ffffff' }}>Accept</text>
      <rect x="224" y="158" width="30" height="18" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="239" y="170" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>Edit</text>
      <rect x="260" y="158" width="38" height="18" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="279" y="170" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>Dismiss</text>

      <line x1="170" y1="190" x2="310" y2="190" style={{ stroke: 'var(--cl-blue)', opacity: 0.3 }} strokeWidth="1" />

      {/* Citations */}
      <text x="182" y="208" fontSize="6.5" fontWeight="600" fontFamily="monospace" style={{ fill: 'var(--cl-soft)' }}>SOURCES</text>
      {[0, 1].map(i => (
        <g key={i}>
          <rect x="182" y={216 + i * 20} width="14" height="12" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
          <text x="189" y={225 + i * 20} textAnchor="middle" fontSize="7" fontFamily="monospace" style={{ fill: 'var(--cl-label)' }}>{i + 1}</text>
          <rect x="202" y={220 + i * 20} width="96" height="5" style={{ fill: 'var(--cl-line)' }} />
        </g>
      ))}
      <rect x="182" y="256" width="116" height="5" style={{ fill: 'var(--cl-line)' }} />

      {/* Tier 3: Fully agentic */}
      <rect x="324" y="18" width="146" height="254" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="397" y="36" textAnchor="middle" fontSize="6.5" fontWeight="700" letterSpacing="0.1em" fontFamily="monospace" style={{ fill: 'var(--cl-soft)' }}>TIER 3 · AGENTIC</text>
      <line x1="324" y1="44" x2="470" y2="44" style={{ stroke: 'var(--cl-line)' }} strokeWidth="1" />

      {/* Activity trace */}
      <text x="336" y="62" fontSize="6.5" fontWeight="600" fontFamily="monospace" style={{ fill: 'var(--cl-soft)' }}>ACTIVITY</text>
      {[
        { label: 'Pulled 248 tickets', done: true, y: 78 },
        { label: 'Grouped into 6 themes', done: true, y: 96 },
        { label: 'Drafting replies', done: false, y: 114 },
      ].map(({ label, done, y }) => (
        <g key={label}>
          <rect x="336" y={y - 7} width="8" height="8" style={{ fill: done ? 'var(--cl-blue)' : 'none', stroke: 'var(--cl-blue)' }} strokeWidth="1.2" className={done ? undefined : 'cl-pulse'} />
          <text x="350" y={y} fontSize="7.5" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>{label}</text>
        </g>
      ))}

      <line x1="324" y1="134" x2="470" y2="134" style={{ stroke: 'var(--cl-line)' }} strokeWidth="1" />

      {/* Approval gate */}
      <rect x="336" y="148" width="122" height="52" style={{ fill: 'var(--cl-fill)', stroke: 'var(--cl-blue)' }} strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="346" y="166" fontSize="6.5" fontWeight="700" letterSpacing="0.08em" fontFamily="monospace" style={{ fill: 'var(--cl-blue)' }}>APPROVAL GATE</text>
      <rect x="346" y="174" width="102" height="5" style={{ fill: 'var(--cl-line)' }} />
      <rect x="346" y="184" width="66" height="5" style={{ fill: 'var(--cl-line)' }} />

      <rect x="336" y="212" width="58" height="18" style={{ fill: 'var(--cl-blue)' }} />
      <text x="365" y="224" textAnchor="middle" fontSize="7.5" fontWeight="600" fontFamily="sans-serif" style={{ fill: '#ffffff' }}>Approve</text>
      <rect x="400" y="212" width="58" height="18" style={{ fill: 'var(--cl-card)', stroke: 'var(--cl-line)' }} strokeWidth="1" />
      <text x="429" y="224" textAnchor="middle" fontSize="7.5" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>Review</text>

      <text x="336" y="252" fontSize="6.5" fontFamily="sans-serif" style={{ fill: 'var(--cl-soft)' }}>Undo available for 24 hours</text>
    </g>
  </svg>
);

export default ComponentLibraryIllustration;
