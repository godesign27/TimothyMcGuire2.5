import React from 'react';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

/**
 * Disclosure boundary: see docs/11-intellectual-property.md.
 * Copy here stays at the level of principle and outcome. Product names, internal
 * terminology, and feature specifics are deliberately kept out of the written copy.
 */

type Asset =
  | { kind: 'image'; src: string; alt: string; caption: string }
  | { kind: 'video'; src: string; poster?: string; label: string; caption: string };

type WorkExample = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  assets: Asset[];
};

const BASE = '/case-studies/zs';

const workExamples: WorkExample[] = [
  {
    id: 'foundations',
    eyebrow: 'Example 01',
    title: 'Foundations built as a contract, not a suggestion',
    body: 'Enterprise components fail at the edges. The default state is easy, and every team gets it right. What breaks consistency is the small state nobody specified: the disabled tag, the inverse tooltip on a dark toolbar, the label that runs long. So the libraries were built to leave nothing to interpretation.',
    points: [
      'Every size, mode, direction, and interaction state drawn and named',
      'Inverse variants designed for dark surfaces rather than recolored later',
      'Semantic intent encoded in the component, so meaning survives reuse',
      'One set of names carrying more than one visual identity',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/01-tooltip-library.png`,
        alt: 'Tooltip component library showing 48 variants across size, arrow direction, arrow position, and mode, plus popover and confirmation masters.',
        caption: '48 tooltip variants across size, arrow direction, arrow position, and mode, with popover and confirmation patterns built from the same parts.',
      },
      {
        kind: 'image',
        src: `${BASE}/02-tag-library.png`,
        alt: 'Rounded tag component library showing 120 variants across type, size, state, and semantic meaning.',
        caption: '120 tag variants covering type, size, interaction state, and semantic meaning.',
      },
      {
        kind: 'video',
        src: `${BASE}/v1-component-library.mp4`,
        poster: `${BASE}/v1-poster.jpg`,
        label: 'Guided tour of the component library, moving through components, patterns, and design tokens.',
        caption: 'A guided tour of the library. Each component is shown with its variants, the properties that drive them, and the semantic variables underneath.',
      },
      {
        kind: 'video',
        src: `${BASE}/v4-theme-tokens.mp4`,
        poster: `${BASE}/v4-poster.jpg`,
        label: 'Walkthrough comparing two composable themes built on the same semantic token names, shown across components in both light and dark.',
        caption: 'The payoff of naming things by meaning rather than appearance: one system carries two visual identities. A new personality costs a theme file, not a fork of the components, and it composes with light and dark instead of fighting them.',
      },
    ],
  },
  {
    id: 'specification',
    eyebrow: 'Example 02',
    title: 'Specifying behavior, not just pixels',
    body: 'A screenshot tells engineering what something looks like. It does not say what happens on hover, what the keyboard does, what closes the menu, or what the cursor should be doing halfway through a drag. Those answers get invented during a sprint unless the design states them. Every interaction was annotated as a contract.',
    points: [
      'Keyboard shortcuts specified alongside their on click equivalents',
      'Dismissal rules written out, including what other components must yield',
      'Composed patterns traced back to the library primitives they reuse',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/03-action-menu-spec.webp`,
        alt: 'Annotated specification of a right click action menu, with lettered callouts covering header truncation, keyboard shortcuts, selected marker state, dismissal, and cursor behavior.',
        caption: 'One interaction, fully specified: truncation rules, keyboard equivalents, selection state, dismissal behavior, cursor handling, and the primitives the pattern composes from.',
      },
    ],
  },
  {
    id: 'workflow',
    eyebrow: 'Example 03',
    title: 'Consequential changes need a way back',
    body: 'Some actions in enterprise software move real money and real responsibility. Reassigning territory is one of them. The design treats the change as a proposal rather than a commitment: the system states plainly what it did, in the language of the business, and the user reviews and submits before anything becomes true.',
    points: [
      'Confirmation written in the user vocabulary, not system vocabulary',
      'A review step between the action and the commit',
      'Submission held in a disabled, in progress state until the system settles',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/04-map-align-success.webp`,
        alt: 'Map based territory alignment view showing a green success confirmation banner and a preview and submit bar, with annotations describing the notification and button states.',
        caption: 'The confirmation says what changed and points to the review step. Nothing commits until the person submits.',
      },
      {
        kind: 'video',
        src: `${BASE}/v2-alignment-flow.mp4`,
        poster: `${BASE}/v2-poster.jpg`,
        label: 'Prototype walkthrough of selecting multiple accounts on the map and reviewing the change before committing it.',
        caption: 'The same principle across a bulk change: select on the map, see exactly what is in scope and what it is worth, then review before anything is sent.',
      },
    ],
  },
  {
    id: 'reporting',
    eyebrow: 'Example 04',
    title: 'Configuration without a manual',
    body: 'Reporting tools tend to fail in one of two directions: too rigid to answer the real question, or so open that people cannot tell which settings matter. The pattern here separates what is required from what is optional, keeps the configuration next to the thing it configures, and states its limits in place rather than in documentation.',
    points: [
      'Mandatory parameters separated from optional ones at the layout level',
      'Ordering, visibility, and search handled in a single list',
      'System limits surfaced at the point of decision, not after the error',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/05-report-columns-annotated.png`,
        alt: 'Report parameters screen with a column settings panel open, annotated with lettered callouts explaining search, reordering, apply, reset, scrolling, and selection limits.',
        caption: 'A single list for columns and metrics, with reordering, search, reset, and the selection limit all explained in place.',
      },
      {
        kind: 'image',
        src: `${BASE}/06-report-autolayout-a.png`,
        alt: 'The same column settings panel shown in Figma with auto layout properties visible on the right.',
        caption: 'Built with auto layout so the panel holds its structure as content changes.',
      },
      {
        kind: 'image',
        src: `${BASE}/07-report-autolayout-b.png`,
        alt: 'The column settings panel in Figma showing a different auto layout configuration with vertical flow and fixed height.',
        caption: 'Resizing behavior resolved in the file, so engineering inherits the rules instead of guessing them.',
      },
      {
        kind: 'video',
        src: `${BASE}/v3-report-templates.mp4`,
        poster: `${BASE}/v3-poster.jpg`,
        label: 'Report template library showing saved report configurations with preview and download actions.',
        caption: 'Configuration becomes reusable. A saved template carries its own parameters, dates, and scope, so the work of setting it up happens once.',
      },
    ],
  },
  {
    id: 'flows',
    eyebrow: 'Example 05',
    title: 'Designing the journey, then versioning it',
    body: 'Screens are easy to review in isolation and easy to get wrong in sequence. Work was organized against the user stories it served, so every branch, empty state, and recovery path had somewhere to live. When the approach changed, the flow was versioned rather than quietly overwritten.',
    points: [
      'Flows mapped directly to the user stories they satisfy',
      'Alternate approaches kept side by side for comparison',
      'Hover, selection, and undo paths designed as part of the flow',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/08-user-story-flows.webp`,
        alt: 'Flow boards grouped by user story, showing two versions of a report customization journey stacked for comparison.',
        caption: 'Flows grouped by the user story they serve, with successive versions stacked so the change in thinking stays visible.',
      },
      {
        kind: 'image',
        src: `${BASE}/09-prototype-flow-board.webp`,
        alt: 'Prototype flow board showing menu, hover, shared state, first time message, state change, and undo paths connected with flow arrows.',
        caption: 'One interaction expanded into every branch it produces, including the path back out.',
      },
    ],
  },
  {
    id: 'agentic',
    eyebrow: 'Example 06',
    title: 'A design system an agent can be held to',
    body: 'Generative tools will produce interface whether or not a system governs them. The question is what they are held to. This work makes the repository the authoritative source: components, tokens, and behavioral rules live as checked in code, so a person and an agent asking the same question get the same answer. The system also names what is specific to AI, including confidence, autonomy, and where a human stays in the loop.',
    points: [
      'The repository as the single source of truth for design and generation',
      'AI specific states treated as first class, not bolted on afterward',
      'Every unit carrying its own anatomy, tokens, and compliance record',
    ],
    assets: [
      {
        kind: 'image',
        src: `${BASE}/10-zds-overview.webp`,
        alt: 'Agentic design system overview page with the headline Designing With AI Without Losing Control.',
        caption: 'The thesis the system is built to defend.',
      },
      {
        kind: 'image',
        src: `${BASE}/13-zds-repo-truth.webp`,
        alt: 'Executive briefing page stating that the repository is the single source of truth for every agent that touches the design system.',
        caption: 'Governance stated as a position, then enforced by where the answers actually live.',
      },
      {
        kind: 'image',
        src: `${BASE}/11-zds-pattern-library.webp`,
        alt: 'Pattern library index showing 93 catalogued units across 33 atomic, 15 molecules, 37 organisms, and 8 pages.',
        caption: 'A catalogued library, structured so both people and agents can navigate it by level.',
      },
      {
        kind: 'image',
        src: `${BASE}/12-zds-ai-dialog.webp`,
        alt: 'Documentation page for an AI dialog component with a live preview, tiered attributes for autonomy and confidence, and tabs for anatomy, state variations, tokens, code, and compliance.',
        caption: 'Each unit documented with live preview, tiering for autonomy and confidence, and its own token and compliance record.',
      },
    ],
  },
];

/**
 * Video with a poster and an explicit play affordance, so a still frame of a UI
 * is not mistaken for a screenshot. Native controls appear once playback starts.
 */
const VideoFigure: React.FC<{ src: string; poster?: string; label: string }> = ({ src, poster, label }) => {
  const ref = React.useRef<HTMLVideoElement>(null);
  const [started, setStarted] = React.useState(false);

  const start = () => {
    const el = ref.current;
    if (!el) return;
    setStarted(true);
    void el.play().catch(() => setStarted(false));
  };

  return (
    <div className="relative">
      <video
        ref={ref}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setStarted(true)}
        /* An in-flow video this size intermittently renders as a black rect in some
           Chromium compositors while still decoding normally. transform-gpu promotes
           it to its own layer; will-change-transform keeps it promoted, since a
           one-off transform alone let the layer get dropped again mid playback. */
        className="w-full bg-ink border border-line dark:border-white/10 transform-gpu will-change-transform"
      />

      {!started && (
        <button
          type="button"
          onClick={start}
          aria-label={`Play video. ${label}`}
          className="group absolute inset-0 flex items-center justify-center bg-ink/5 hover:bg-ink/15 transition-colors"
        >
          <span className="flex items-center justify-center w-20 h-20 bg-ink/90 text-white transition-colors group-hover:bg-ink">
            {/* nudged right so the triangle reads optically centred in the square */}
            <Play className="w-7 h-7 translate-x-[2px]" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      )}
    </div>
  );
};

const CaseStudyZS: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(null);
    setCurrentPage('case-studies');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-tan-100 dark:bg-neutral-950 pt-24 pb-0 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Solutions
          </button>

          <div className="max-w-4xl mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-4">
              Case Study · Pharmaceutical SaaS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
              From enterprise workflows to a design system that governs AI.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
              Nine years inside one pharmaceutical SaaS ecosystem: designing the workflows people depend on, systematizing them into a component library teams could trust, and building the governance layer that decides how AI is allowed to behave.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10">
            {[
              { label: 'Role', value: 'Principal Product Designer, UX Lead, Agentic Systems Designer' },
              { label: 'Client', value: 'ZS Associates' },
              { label: 'Industry', value: 'Pharmaceutical SaaS' },
              { label: 'Duration', value: '2017 to Present' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-tan-100 dark:bg-neutral-950 px-6 py-5">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-medium text-ink dark:text-white leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="bg-white dark:bg-neutral-950 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ImageWithSkeleton
            src={`${BASE}/10-zds-overview.webp`}
            alt="Agentic design system overview page with the headline Designing With AI Without Losing Control."
            className="w-full object-cover border border-line dark:border-white/10"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                label: 'The Challenge',
                body: 'A large product ecosystem, built by many teams over many years, drifting apart one reasonable local decision at a time. Then a second problem arrived on top of the first: generative tools that could produce interface faster than anyone could review it.',
              },
              {
                label: 'The Approach',
                body: 'Treat consistency as an outcome of infrastructure rather than diligence. Specify behavior, not just appearance. Make the source of truth something both a person and a machine can query, and say plainly where a human has to stay in the loop.',
              },
              {
                label: 'The Outcome',
                body: 'Teams ship from shared foundations instead of rebuilding them. Design and engineering argue less about intent because the intent is written down. AI generated interface has something specific to be held to.',
              },
            ].map(({ label, body }) => (
              <div key={label}>
                <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
                <h2 className="text-base font-semibold text-ink dark:text-white mb-4">{label}</h2>
                <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work intro */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              Six pieces of the same argument.
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              Each example below solves a local problem. Together they describe one position: that trustworthy software comes from systems that state their own rules, and that the same discipline is what makes AI safe to put in front of people.
            </p>
          </div>
        </div>
      </section>

      {/* Work examples */}
      {workExamples.map((example, index) => {
        const onTan = index % 2 === 1;
        const sectionBg = onTan ? 'bg-tan-100 dark:bg-neutral-950' : 'bg-white dark:bg-neutral-950';

        return (
          <section
            key={example.id}
            className={`${sectionBg} py-24 border-b border-line dark:border-white/10`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid lg:grid-cols-3 gap-12 mb-14">
                <div className="lg:col-span-2">
                  <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
                    {example.eyebrow}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
                    {example.title}
                  </h2>
                  <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                    {example.body}
                  </p>
                </div>

                <ul className="divide-y divide-line dark:divide-white/10 border-t border-b border-line dark:border-white/10 self-start">
                  {example.points.map((point) => (
                    <li key={point} className="py-4 text-sm text-ink dark:text-white leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-12">
                {example.assets.map((asset) => (
                  <figure key={asset.src}>
                    {asset.kind === 'video' ? (
                      <VideoFigure src={asset.src} poster={asset.poster} label={asset.label} />
                    ) : (
                      <ImageWithSkeleton
                        src={asset.src}
                        alt={asset.alt}
                        className="w-full object-contain border border-line dark:border-white/10"
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                    <figcaption className="mt-4 text-sm text-muted dark:text-neutral-500 leading-relaxed max-w-3xl">
                      {asset.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>

            </div>
          </section>
        );
      })}

      {/* Outcomes */}
      <section className="bg-ink dark:bg-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="w-8 h-[3px] bg-lavender mb-8" />
            <p className="text-xs font-semibold text-lavender tracking-widest uppercase mb-4">
              Outcomes
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">
              What the work produced.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border-t border-b border-white/10">
            {[
              { value: '50%+', label: 'Increase in design system adoption' },
              { value: '25 to 35%', label: 'Less friction between design and development' },
              { value: '30 to 40%', label: 'Improvement in task efficiency across analytics heavy workflows' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-ink dark:bg-neutral-900 px-6 py-10">
                <p className="text-4xl font-semibold text-white tracking-tight mb-3">{value}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope of work */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-4">
              Scope of Work
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white tracking-tight leading-tight">
              End to end, as the sole design lead.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-line dark:bg-white/10 border-t border-b border-line dark:border-white/10">
            {['Tokens', 'Components', 'Patterns', 'Governance', 'Documentation'].map((item) => (
              <div key={item} className="bg-white dark:bg-neutral-950 px-6 py-6">
                <p className="text-sm font-medium text-ink dark:text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              Working on something similar?
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-10">
              I help enterprise teams define how intelligent systems should behave, and how the people who depend on them keep oversight.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => { window.scrollTo(0, 0); setCurrentPage('work-with-me'); }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Let's Talk <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-8 py-4 border border-line dark:border-white/10 text-ink dark:text-white text-sm font-medium hover:bg-tan dark:hover:bg-white/5 transition-colors"
              >
                All Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyZS;
