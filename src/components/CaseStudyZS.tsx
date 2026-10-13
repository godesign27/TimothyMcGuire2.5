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

const BASE = '/case-studies/zs';

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
            <Play className="w-7 h-7 translate-x-[2px]" fill="currentColor" strokeWidth={0} />
          </span>
        </button>
      )}
    </div>
  );
};

const AssetFigure: React.FC<{ asset: Asset }> = ({ asset }) => (
  <figure>
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
);

const CaseStudyZS: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(null);
    setCurrentPage('case-studies');
  };

  const navigateToWorkWithMe = () => {
    window.scrollTo(0, 0);
    setCurrentPage('work-with-me');
  };

  const navigateToAIA = () => {
    window.scrollTo(0, 0);
    setCurrentPage('ai-experience-architecture');
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
              Case Study
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
              The Future of Enterprise Design Isn't Another Design System.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
              It's a fundamentally different way of thinking, creating, and delivering software.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10">
            {[
              { label: 'Client', value: 'ZS Associates / Zaidyn' },
              { label: 'Industry', value: 'Enterprise Healthcare SaaS' },
              { label: 'Role', value: 'Principal Product Designer, UX Strategy Lead' },
              { label: 'Engagement', value: '2017 to Present' },
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

      {/* Intro narrative */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              How I helped reshape the design direction of Zaidyn, a complex enterprise healthcare platform, by bringing together AI-native product experiences, agentic workflows, and a new approach to design system architecture.
            </p>
            <div className="text-sm text-muted dark:text-neutral-500 leading-relaxed space-y-1">
              <p><span className="font-medium text-ink dark:text-white">Focus:</span> AI Experience Architecture, Enterprise UX Strategy, Agentic AI, Design Systems, Product Innovation</p>
            </div>
          </div>
        </div>
      </section>

      {/* The opportunity */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              The opportunity wasn't to design something better. It was to rethink how design happens.
            </h2>
            <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
              <p>
                Enterprise software rarely changes overnight.
              </p>
              <p>
                It evolves through years of decisions, expanding requirements, competing priorities, and the accumulation of systems that once made perfect sense. As organizations grow, so does the complexity of the products they create, and the processes required to maintain them.
              </p>
              <p>
                Zaidyn, ZS Associates' enterprise healthcare software ecosystem, was no exception.
              </p>
              <p>
                Across more than 20 product modules, the design challenge extended far beyond individual interfaces. These were sophisticated, data-intensive applications supporting complex healthcare and business workflows. Each experience needed to balance usability, consistency, scalability, and the realities of enterprise software development.
              </p>
              <p>
                But as artificial intelligence began changing what software could do, a more fundamental question emerged:
              </p>
              <p className="text-ink dark:text-white font-medium">
                What happens when the way we design software becomes one of the biggest constraints on what we can build?
              </p>
              <p>
                That question became central to my work.
              </p>
              <p>
                Rather than treating AI as another feature to incorporate into an existing design process, I began exploring how it could reshape the process itself, from the earliest product decisions to the systems and components used to build production experiences.
              </p>
              <p>
                The opportunity was no longer just to improve the product.
              </p>
              <p>
                It was to help evolve the way the organization imagined, designed, and delivered it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 01 / THE CHALLENGE */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-14">
            <div className="lg:col-span-2">
              <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
              <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
                01 / The Challenge
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
                A mature product ecosystem facing a new era of expectations.
              </h2>
              <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
                <p>
                  Enterprise design systems are built to create consistency. They establish common patterns, reduce duplication, and give teams a shared language for creating digital experiences.
                </p>
                <p>
                  But consistency alone doesn't guarantee progress.
                </p>
                <p>
                  As AI began introducing new interaction possibilities, the limitations of conventional design approaches became increasingly apparent.
                </p>
                <p>
                  Traditional workflows were organized around relatively predictable sequences: define requirements, research the problem, create wireframes, develop high fidelity designs, review with stakeholders, and hand off to engineering.
                </p>
                <p>
                  That approach had served the industry for years.
                </p>
                <p>
                  Yet AI-native products introduced different questions.
                </p>
              </div>
            </div>

            <ul className="divide-y divide-line dark:divide-white/10 border-t border-b border-line dark:border-white/10 self-start">
              {[
                'How should an interface behave when a system can interpret intent rather than simply respond to commands?',
                'How much autonomy should an intelligent workflow have?',
                'When should a user intervene, review a recommendation, or approve an action?',
                'How do we communicate what an AI system is doing, and why?',
                'How can a design system support experiences that are increasingly adaptive, contextual, and dynamic?',
              ].map((point) => (
                <li key={point} className="py-4 text-sm text-ink dark:text-white leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              These weren't questions that could be answered by adding a few new components to an existing library.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mt-4">
              They required a broader reconsideration of experience architecture.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mt-4">
              The challenge was to preserve the discipline of enterprise design while creating room for an entirely new generation of software experiences.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <AssetFigure asset={{
              kind: 'video',
              src: `${BASE}/v1-component-library.mp4`,
              poster: `${BASE}/v1-poster.jpg`,
              label: 'Guided tour of the component library, moving through components, patterns, and design tokens.',
              caption: 'A guided tour of the library. Each component is shown with its variants, the properties that drive them, and the semantic variables underneath.',
            }} />
          </div>
        </div>
      </section>

      {/* 02 / THE INSIGHT */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
              02 / The Insight
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              The next generation of enterprise software would demand more than better interfaces.
            </h2>
            <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
              <p>
                Throughout my career, I've learned that some of the most important product decisions happen long before a feature becomes a formal requirement.
              </p>
              <p>
                They happen when someone recognizes a pattern.
              </p>
              <p>
                A recurring frustration. An emerging behavior. A limitation that users have learned to work around. A capability that technology is finally making possible.
              </p>
              <p>
                At Zaidyn, I began advocating for product capabilities that I believed would become increasingly important to users and enterprise clients.
              </p>
              <p>
                Not every recommendation was immediately accepted.
              </p>
              <p>
                Some ideas were deprioritized. Others arrived before the organization was ready to pursue them.
              </p>
              <p>
                But approximately a year later, capabilities I had previously recommended began appearing in requests from users and clients themselves.
              </p>
              <p>
                What had once been a forward-looking design recommendation was becoming an expressed market need.
              </p>
              <p>
                That experience reinforced something I believe strongly about product leadership:
              </p>
              <p className="text-ink dark:text-white font-medium">
                The responsibility of a design leader isn't simply to respond to what users ask for today. It's to understand what they are moving toward, and help the organization prepare for it.
              </p>
              <p>
                Research tells us what people experience.
              </p>
              <p>
                Strategy helps us understand what those experiences mean.
              </p>
              <p>
                Vision asks what should happen next.
              </p>
              <p>
                The most valuable design work brings all three together.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/08-user-story-flows.webp`,
              alt: 'Flow boards grouped by user story, showing two versions of a report customization journey stacked for comparison.',
              caption: 'Flows grouped by the user story they serve, with successive versions stacked so the change in thinking stays visible.',
            }} />
          </div>
        </div>
      </section>

      {/* 03 / THE STRATEGIC SHIFT */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
              03 / The Strategic Shift
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              From designing with AI to redesigning the process around AI.
            </h2>
            <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
              <p>
                My work began expanding in two interconnected directions.
              </p>
              <p>
                The first was the product experience itself: exploring and designing AI-native interactions that could make complex enterprise workflows more intuitive, intelligent, and useful.
              </p>
              <p>
                The second was the process used to create those experiences.
              </p>
              <p>
                I began introducing agentic AI approaches into the design workflow, challenging the assumption that every stage of product design needed to follow the same manual, sequential process.
              </p>
              <p>
                AI offered opportunities to accelerate research synthesis, explore concepts, develop prototypes, and connect design decisions more closely to implementation.
              </p>
              <p>
                But the objective wasn't automation for its own sake.
              </p>
              <p className="text-ink dark:text-white font-medium">
                The objective was to reduce the distance between an idea and a meaningful, testable experience.
              </p>
              <p>
                In a conventional workflow, teams can spend substantial time translating an idea through multiple representations before stakeholders can interact with something that behaves like a real product.
              </p>
              <p>
                Agent-assisted approaches create opportunities to shorten that distance.
              </p>
              <p>
                Designers can investigate more possibilities. Product managers can evaluate ideas earlier. Engineers can engage with more concrete representations of intended behavior.
              </p>
              <p>
                The designer's role doesn't disappear.
              </p>
              <p>
                It becomes more consequential.
              </p>
              <p>
                When tools can accelerate execution, judgment becomes the differentiator: knowing which problems deserve attention, which experiences are worth building, and which decisions require human understanding.
              </p>
              <p>
                That is the transition I began helping the team navigate.
              </p>
              <p>
                Not from human design to machine design.
              </p>
              <p>
                From design as a sequence of deliverables to design as a more connected, intelligent process of discovery, decision making, and execution.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/09-prototype-flow-board.webp`,
              alt: 'Prototype flow board showing menu, hover, shared state, first time message, state change, and undo paths connected with flow arrows.',
              caption: 'One interaction expanded into every branch it produces, including the path back out.',
            }} />
          </div>
        </div>
      </section>

      {/* 04 / THE BREAKTHROUGH */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
              04 / The Breakthrough
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              The components changed. Then expectations changed.
            </h2>
            <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
              <p>
                One of the most meaningful developments came through the introduction of new AI-oriented components and experience patterns.
              </p>
              <p>
                The response from product managers was overwhelmingly positive.
              </p>
              <p>
                These weren't simply visual enhancements to an existing system. They represented a different direction for how Zaidyn experiences could be conceived and delivered.
              </p>
              <p>
                The enthusiasm was strong enough that product managers began expressing a preference for the new approach over the legacy design system.
              </p>
              <p>
                That was an important turning point.
              </p>
              <p className="text-ink dark:text-white font-medium">
                Because meaningful design transformation rarely happens when a team is instructed to adopt a new process.
              </p>
              <p className="text-ink dark:text-white font-medium">
                It happens when people experience a better possibility and begin asking for it themselves.
              </p>
              <p>
                The most powerful moment in innovation is when a new idea stops feeling experimental and starts feeling essential.
              </p>
              <p>
                The positive response created momentum for a broader transformation.
              </p>
              <p>
                What began with new components and AI-native experience thinking evolved into an initiative to rethink the enterprise design system itself.
              </p>
              <p>
                The question was no longer how to extend the existing system.
              </p>
              <p>
                It was how to create an architecture better suited to the products, workflows, and development practices emerging around AI.
              </p>
            </div>
          </div>

          <div className="mt-12 space-y-12">
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/12-zds-ai-dialog.webp`,
              alt: 'Documentation page for an AI dialog component with a live preview, tiered attributes for autonomy and confidence, and tabs for anatomy, state variations, tokens, code, and compliance.',
              caption: 'Each unit documented with live preview, tiering for autonomy and confidence, and its own token and compliance record.',
            }} />
            <AssetFigure asset={{
              kind: 'video',
              src: `${BASE}/v4-theme-tokens.mp4`,
              poster: `${BASE}/v4-poster.jpg`,
              label: 'Walkthrough comparing two composable themes built on the same semantic token names, shown across components in both light and dark.',
              caption: 'The payoff of naming things by meaning rather than appearance: one system carries two visual identities. A new personality costs a theme file, not a fork of the components, and it composes with light and dark instead of fighting them.',
            }} />
          </div>
        </div>
      </section>

      {/* 05 / THE TRANSFORMATION */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-14">
            <div className="lg:col-span-2">
              <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
              <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
                05 / The Transformation
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
                Rebuilding the design system for a world where humans and agents work together.
              </h2>
              <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
                <p>
                  I am now leading a comprehensive redesign of the Zaidyn design system.
                </p>
                <p>
                  This is an ongoing initiative, informed by the reception of the new AI-oriented components and the broader changes taking place across product design and software development.
                </p>
                <p>
                  The ambition is to move beyond a design system understood primarily as a collection of reusable interface components.
                </p>
                <p>
                  Instead, the direction is toward a more connected foundation for experience creation.
                </p>
                <p>
                  One where design principles, component definitions, tokens, documentation, governance, and implementation can operate as parts of a shared architecture.
                </p>
              </div>
            </div>

            <ul className="divide-y divide-line dark:divide-white/10 border-t border-b border-line dark:border-white/10 self-start">
              {[
                'A system that connects design intent to implementation',
                'A repository-driven source of truth',
                'A system designed for AI-native interaction',
                'A system built to evolve',
              ].map((point) => (
                <li key={point} className="py-4 text-sm text-ink dark:text-white leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-3xl mb-12">
            <h3 className="text-base font-semibold text-ink dark:text-white mb-4">A repository-driven source of truth</h3>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              Rather than allowing design assets, documentation, and implementation to evolve as disconnected interpretations, the goal is to create a more coherent relationship between them.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              That means treating design systems as structured product infrastructure, not simply as libraries maintained inside design software.
            </p>
          </div>

          <div className="max-w-3xl mb-12">
            <h3 className="text-base font-semibold text-ink dark:text-white mb-4">A system designed for AI-native interaction</h3>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              Conventional component libraries remain essential, but intelligent products introduce new patterns.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              Users need to understand when a system is recommending, generating, interpreting, or acting.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              They need appropriate opportunities to intervene.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              And they need confidence that consequential actions remain understandable and controllable.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mt-6">
              My experience architecture approach emphasizes human oversight, transparency, explainability, and interaction patterns that support trust.
            </p>
          </div>

          <div className="max-w-3xl mb-12">
            <h3 className="text-base font-semibold text-ink dark:text-white mb-4">A system built to evolve</h3>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              A modern enterprise design system must accommodate new capabilities without becoming increasingly fragmented.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              That requires clear principles, governance, documentation, and a scalable architecture that helps teams make consistent decisions as technology changes.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              The goal is not simply to produce a more modern interface.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mt-6">
              It is to create a foundation that helps the organization adapt without repeatedly rebuilding the experience from the ground up.
            </p>
          </div>

          <div className="space-y-12">
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/13-zds-repo-truth.webp`,
              alt: 'Executive briefing page stating that the repository is the single source of truth for every agent that touches the design system.',
              caption: 'Governance stated as a position, then enforced by where the answers actually live.',
            }} />
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/11-zds-pattern-library.webp`,
              alt: 'Pattern library index showing 93 catalogued units across 33 atomic, 15 molecules, 37 organisms, and 8 pages.',
              caption: 'A catalogued library, structured so both people and agents can navigate it by level.',
            }} />
          </div>
        </div>
      </section>

      {/* 06 / LEADERSHIP */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-14">
            <div className="lg:col-span-2">
              <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
              <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
                06 / Leadership
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
                Transformation doesn't scale through components. It scales through people.
              </h2>
              <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
                <p>
                  Technology can accelerate change.
                </p>
                <p>
                  People determine whether that change lasts.
                </p>
                <p>
                  Alongside my product and design system responsibilities, I have been mentoring the broader design team as it adapts to emerging AI tools, agentic workflows, and new approaches to experience design.
                </p>
                <p>
                  This work requires more than demonstrating a new tool or introducing a process.
                </p>
                <p>
                  It requires helping experienced designers reconsider established assumptions about their craft.
                </p>
              </div>
            </div>

            <ul className="divide-y divide-line dark:divide-white/10 border-t border-b border-line dark:border-white/10 self-start">
              {[
                'How do we evaluate AI-generated concepts?',
                'What remains the responsibility of the designer?',
                'How do we maintain quality when iteration becomes dramatically faster?',
                'How should design systems evolve when the relationship between design and code becomes more fluid?',
                'How do we preserve user-centered thinking when automation makes it easier than ever to produce solutions before fully understanding the problem?',
              ].map((point) => (
                <li key={point} className="py-4 text-sm text-ink dark:text-white leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              These are cultural and organizational questions as much as technical ones.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              My approach to mentorship is grounded in a simple belief:
            </p>
            <p className="text-base text-ink dark:text-white font-medium leading-relaxed mb-6">
              The goal of leadership is not to make a team dependent on your expertise. It is to increase the capability, confidence, and judgment of everyone around you.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
              As AI changes the mechanics of product design, experienced designers have an opportunity to become stronger strategic contributors.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              But that transition requires guidance, experimentation, and a willingness to challenge familiar ways of working.
            </p>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mt-6">
              Helping the team navigate that transition has become an important part of my role.
            </p>
          </div>
        </div>
      </section>

      {/* 07 / BUSINESS CONTEXT & IMPACT */}
      <section className="bg-ink dark:bg-neutral-900 py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="w-8 h-[3px] bg-lavender mb-8" />
            <p className="text-xs font-semibold text-lavender tracking-widest uppercase mb-4">
              07 / Business Context & Impact
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight leading-tight mb-6">
              Designing through a period of significant enterprise growth.
            </h2>
            <div className="text-base text-neutral-400 leading-relaxed space-y-6">
              <p>
                During my tenure, the business associated with Zaidyn grew from a reported $35 million to $150 million, more than four times its earlier scale.
              </p>
              <p>
                That growth provides important context for the environment in which the design work took place.
              </p>
              <p>
                Supporting an expanding enterprise product ecosystem requires more than delivering individual features. It demands consistency across experiences, the ability to manage increasing complexity, and design practices that can evolve alongside the business.
              </p>
              <p>
                My contribution has centered on helping the product experience mature through that growth: shaping UX strategy across a multi-module platform, designing production AI experiences, advancing design system architecture, and introducing new methods for creating software.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-t border-b border-white/10 mb-14">
            {[
              { label: 'Product direction', value: 'Capabilities I advocated for before they were prioritized have subsequently become explicit requests from users and clients.' },
              { label: 'Stakeholder response', value: 'New AI-oriented components received strong positive feedback from product managers and helped generate demand for a departure from the legacy design system.' },
              { label: 'Organizational evolution', value: 'The work has expanded into an ongoing redesign of the enterprise design system and mentorship of the broader design team.' },
              { label: 'Production experience', value: 'AI-related design work has progressed beyond conceptual exploration into production products.' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-ink dark:bg-neutral-900 px-6 py-8">
                <p className="text-sm font-semibold text-white mb-3">{label}</p>
                <p className="text-sm text-neutral-400 leading-relaxed">{value}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl">
            <p className="text-base text-neutral-400 leading-relaxed">
              These developments do not mean that UX alone caused the organization's financial growth.
            </p>
            <p className="text-base text-neutral-400 leading-relaxed mt-4">
              They demonstrate how strategic design can contribute to the evolution of an enterprise product during a period of significant change.
            </p>
          </div>
        </div>
      </section>

      {/* 08 / WHAT I LEARNED */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
              08 / What I Learned
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              The hardest part of innovation isn't imagining the future. It's helping an organization move toward it.
            </h2>
            <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
              <p>
                Enterprise transformation rarely begins with universal agreement.
              </p>
              <p>
                New approaches challenge established processes. Emerging technologies introduce uncertainty. Teams must balance the demands of today's product roadmap with investments whose value may not become obvious until later.
              </p>
              <p>
                Sometimes a recommendation arrives before the organization is ready.
              </p>
              <p>
                Sometimes the evidence becomes clearer only after customers begin asking for what was previously considered unnecessary.
              </p>
              <p>
                And sometimes the most effective way to create alignment isn't through another presentation.
              </p>
              <p>
                It's by demonstrating a different possibility.
              </p>
              <p>
                My experience at Zaidyn reinforced three principles that now shape how I approach enterprise AI experience architecture.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-14">
            {[
              {
                title: 'Design must look beyond the immediate requirement',
                body: 'Customer requests are valuable, but they are not the complete picture. Strategic design requires interpreting emerging needs and helping organizations anticipate where expectations are heading.',
              },
              {
                title: 'AI should change the system, not just the screen',
                body: 'Adding intelligence to a product is only part of the opportunity. Organizations must also reconsider how products are conceived, designed, governed, and delivered.',
              },
              {
                title: 'Adoption is the strongest signal that a new direction matters',
                body: 'A design approach becomes transformative when stakeholders begin preferring it, teams begin working differently, and the organization commits to building around it.',
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
                <h3 className="text-base font-semibold text-ink dark:text-white mb-4">{title}</h3>
                <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mt-14">
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              The measure of leadership isn't simply whether an idea was right.
            </p>
            <p className="text-base text-ink dark:text-white font-medium leading-relaxed mt-4">
              It's whether that idea can create meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* 09 / THE BIGGER PICTURE */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-4">
              09 / The Bigger Picture
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              The next competitive advantage is experience architecture.
            </h2>
            <div className="text-base text-muted dark:text-neutral-400 leading-relaxed space-y-6">
              <p>
                For years, enterprise organizations invested heavily in design systems to improve consistency and efficiency.
              </p>
              <p>
                That investment remains important.
              </p>
              <p>
                But AI introduces a different challenge.
              </p>
              <p>
                Software is becoming less dependent on fixed sequences of user actions and more capable of interpreting goals, recommending decisions, and coordinating complex work.
              </p>
              <p>
                The experience must evolve accordingly.
              </p>
              <p>
                Organizations will need systems that define not only how interfaces look, but how intelligent experiences behave, communicate, explain decisions, preserve human control, and maintain consistency across products.
              </p>
              <p>
                They will need design workflows that connect research, strategy, prototyping, implementation, and governance more closely.
              </p>
              <p>
                And they will need leaders who understand both the discipline of human-centered design and the emerging capabilities of agentic technology.
              </p>
              <p>
                This is the intersection where I focus my work.
              </p>
              <p className="text-ink dark:text-white font-medium">
                I call it AI Experience Architecture.
              </p>
              <p>
                A practical approach to designing the products, systems, and organizational capabilities required for AI-native enterprise software.
              </p>
              <p>
                The Zaidyn work is an ongoing example of that philosophy in practice.
              </p>
              <p>
                It reflects a shift from optimizing individual experiences toward helping shape the systems through which future experiences are created.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10 / WORK WITH ME */}
      <section className="bg-ink dark:bg-neutral-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-lavender mb-8" />
            <p className="text-xs font-semibold text-lavender tracking-widest uppercase mb-4">
              10 / Work With Me
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight mb-6">
              Your next generation of software needs more than a new interface.
            </h2>
            <div className="text-base text-neutral-400 leading-relaxed space-y-6 mb-10">
              <p>
                If your organization is introducing AI into an established product ecosystem, the challenge is rarely just deciding which features to build.
              </p>
              <p>
                It's determining how those capabilities should work together, how users will understand and trust them, how your design system must evolve, and how your teams can adopt new ways of working without sacrificing quality.
              </p>
              <p>
                Through GO Design and AI Experience Architecture, I help organizations navigate that transition.
              </p>
              <p>
                My work focuses on enterprise AI product strategy, AI-native experience design, agentic workflow transformation, design system architecture, and fractional design leadership.
              </p>
              <p>
                Whether you're modernizing a mature SaaS platform, establishing an AI-ready design system, or rethinking how your product organization designs and delivers software, I bring the perspective of someone who has worked through enterprise complexity, and is actively helping shape what comes next.
              </p>
              <p className="text-white font-medium">
                Let's design the systems your next generation of products will depend on.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={navigateToWorkWithMe}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink text-sm font-medium hover:bg-neutral-100 transition-colors"
              >
                Discuss Your AI Experience Strategy <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={navigateToAIA}
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors"
              >
                Explore AI Experience Architecture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white dark:bg-neutral-950 py-12 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted dark:text-neutral-500 leading-relaxed max-w-3xl">
            This case study describes my design leadership and contributions within a broader enterprise organization. Certain implementation details and proprietary product information have been intentionally omitted. The design system transformation described is ongoing.
          </p>
        </div>
      </section>

      {/* Addendum: Unused Images */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-4">
              Addendum
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white tracking-tight leading-tight mb-6">
              Additional assets for review
            </h2>
            <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
              The following images and videos were part of the original case study but were not directly mapped to the new narrative sections. They are included here for your review to determine if any should be integrated.
            </p>
          </div>

          <div className="space-y-12">
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/01-tooltip-library.png`,
              alt: 'Tooltip component library showing 48 variants across size, arrow direction, arrow position, and mode, plus popover and confirmation masters.',
              caption: '48 tooltip variants across size, arrow direction, arrow position, and mode, with popover and confirmation patterns built from the same parts.',
            }} />
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/02-tag-library.png`,
              alt: 'Rounded tag component library showing 120 variants across type, size, state, and semantic meaning.',
              caption: '120 tag variants covering type, size, interaction state, and semantic meaning.',
            }} />
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/03-action-menu-spec.webp`,
              alt: 'Annotated specification of a right click action menu, with lettered callouts covering header truncation, keyboard shortcuts, selected marker state, dismissal, and cursor behavior.',
              caption: 'One interaction, fully specified: truncation rules, keyboard equivalents, selection state, dismissal behavior, cursor handling, and the primitives the pattern composes from.',
            }} />
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/04-map-align-success.webp`,
              alt: 'Map based territory alignment view showing a green success confirmation banner and a preview and submit bar, with annotations describing the notification and button states.',
              caption: 'The confirmation says what changed and points to the review step. Nothing commits until the person submits.',
            }} />
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/05-report-columns-annotated.png`,
              alt: 'Report parameters screen with a column settings panel open, annotated with lettered callouts explaining search, reordering, apply, reset, scrolling, and selection limits.',
              caption: 'A single list for columns and metrics, with reordering, search, reset, and the selection limit all explained in place.',
            }} />
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/06-report-autolayout-a.png`,
              alt: 'The same column settings panel shown in Figma with auto layout properties visible on the right.',
              caption: 'Built with auto layout so the panel holds its structure as content changes.',
            }} />
            <AssetFigure asset={{
              kind: 'image',
              src: `${BASE}/07-report-autolayout-b.png`,
              alt: 'The column settings panel in Figma showing a different auto layout configuration with vertical flow and fixed height.',
              caption: 'Resizing behavior resolved in the file, so engineering inherits the rules instead of guessing them.',
            }} />
            <AssetFigure asset={{
              kind: 'video',
              src: `${BASE}/v2-alignment-flow.mp4`,
              poster: `${BASE}/v2-poster.jpg`,
              label: 'Prototype walkthrough of selecting multiple accounts on the map and reviewing the change before committing it.',
              caption: 'The same principle across a bulk change: select on the map, see exactly what is in scope and what it is worth, then review before anything is sent.',
            }} />
            <AssetFigure asset={{
              kind: 'video',
              src: `${BASE}/v3-report-templates.mp4`,
              poster: `${BASE}/v3-poster.jpg`,
              label: 'Report template library showing saved report configurations with preview and download actions.',
              caption: 'Configuration becomes reusable. A saved template carries its own parameters, dates, and scope, so the work of setting it up happens once.',
            }} />
          </div>
        </div>
      </section>

      {/* Back navigation */}
      <section className="bg-white dark:bg-neutral-950 py-12 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Solutions
          </button>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyZS;
