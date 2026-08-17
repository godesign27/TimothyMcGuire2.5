import React from 'react';
import { ArrowRight, Eye, Layers, Search, GitBranch, BarChart3 } from 'lucide-react';
import { getCaseStudyRoute } from '../lib/caseStudies';

interface HomeEditorialProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy?: (study: string) => void;
}

const principles = [
  {
    icon: Layers,
    label: 'Systems Before Screens',
    description: 'The interface is the surface. The architecture is the substance. Design the system first, the screen second.',
  },
  {
    icon: Eye,
    label: 'Trust Is a Design Material',
    description: 'Trust is not a feature to add at the end. It is a material — like color or spacing — considered in every decision.',
  },
  {
    icon: GitBranch,
    label: 'Governance Is a Design Problem',
    description: "Who decides how the AI behaves? Design that answer before it is made for you.",
  },
  {
    icon: Search,
    label: 'Human-in-the-Loop Is a Pattern',
    description: 'Oversight is not a disclaimer. It is a designed moment — with a clear interface, a clear action, and a clear consequence.',
  },
];

const perspectiveCards = [
  {
    id: 'perspectives-my-philosophy',
    eyebrow: 'Philosophy',
    label: 'Design is a translation act.',
    description:
      'Enterprise software fails users not because of bad technology, but because no one translated the complexity into something human.',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
        <rect x="4" y="4" width="18" height="18" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="26" y="26" width="18" height="18" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="22" y1="13" x2="26" y2="35" stroke="#2563EB" strokeWidth="1" />
        <circle cx="22" cy="13" r="2" fill="#2563EB" />
        <circle cx="26" cy="35" r="2" fill="#2563EB" />
      </svg>
    ),
  },
  {
    id: 'perspectives-how-i-work',
    eyebrow: 'Process',
    label: 'How I work with product and engineering teams.',
    description:
      "Good UX doesn't happen in isolation. My process is built around close collaboration, early alignment, and iterative visibility.",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
        <circle cx="8" cy="24" r="3" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <circle cx="24" cy="24" r="3" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <circle cx="40" cy="24" r="3" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="11" y1="24" x2="21" y2="24" stroke="#2563EB" strokeWidth="1" />
        <line x1="27" y1="24" x2="37" y2="24" stroke="#2563EB" strokeWidth="1" />
        <line x1="8" y1="21" x2="8" y2="12" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="24" y1="21" x2="24" y2="12" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="40" y1="21" x2="40" y2="12" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="5" y="8" width="6" height="4" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="21" y="8" width="6" height="4" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="37" y="8" width="6" height="4" fill="#2563EB" fillOpacity="0.15" stroke="#2563EB" strokeWidth="0.75" />
      </svg>
    ),
  },
  {
    id: 'perspectives-ai-native-design',
    eyebrow: 'AI-Native Design',
    label: 'What it means to design for intelligent systems.',
    description:
      "When the product thinks, the designer's job changes. Explainability, feedback loops, and trust become first-class design concerns.",
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
        <circle cx="24" cy="24" r="6" stroke="#2563EB" strokeWidth="0.75" />
        <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="0.75" strokeDasharray="2 3" className="text-line dark:text-white/20" />
        <circle cx="38" cy="10" r="2.5" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <circle cx="38" cy="38" r="2.5" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <circle cx="10" cy="10" r="2.5" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="35.8" y1="12.2" x2="28.2" y2="19.8" stroke="#2563EB" strokeWidth="0.75" />
        <line x1="35.8" y1="35.8" x2="28.2" y2="28.2" stroke="#2563EB" strokeWidth="0.75" />
        <line x1="12.2" y1="12.2" x2="19.8" y2="19.8" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
      </svg>
    ),
  },
  {
    id: 'perspectives-writing',
    eyebrow: 'Writing',
    label: 'Essays and frameworks on design and AI.',
    description:
      'Long-form thinking on the intersection of AI, design systems, and enterprise experience — shared openly.',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
        <rect x="8" y="6" width="32" height="36" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="14" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="14" y1="19" x2="34" y2="19" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="14" y1="24" x2="28" y2="24" stroke="#2563EB" strokeWidth="1" />
        <line x1="14" y1="29" x2="34" y2="29" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="14" y1="34" x2="26" y2="34" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
      </svg>
    ),
  },
  {
    id: 'perspectives-speaking',
    eyebrow: 'Speaking',
    label: 'Bringing AI design thinking to teams and conferences.',
    description:
      'Talks and workshops on trust-by-design, agentic UX, and building design systems for AI-native products.',
    svg: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6">
        <rect x="18" y="6" width="12" height="20" rx="0" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <path d="M10 22 C10 32 38 32 38 22" stroke="#2563EB" strokeWidth="1" fill="none" />
        <line x1="24" y1="32" x2="24" y2="38" stroke="#2563EB" strokeWidth="1" />
        <line x1="16" y1="38" x2="32" y2="38" stroke="#2563EB" strokeWidth="1" />
        <circle cx="24" cy="16" r="2" fill="#2563EB" />
      </svg>
    ),
  },
];

const aiPhases = [
  {
    phase: '01',
    label: 'Diagnose',
    description:
      'Surface the real AI experience problem. Where does the system confuse, overwhelm, or lose the user? What decisions are invisible?',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="56" height="56" stroke="currentColor" strokeWidth="0.5" className="text-line dark:text-white/10" />
        <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <circle cx="28" cy="28" r="8" stroke="#2563EB" strokeWidth="0.75" />
        <line x1="38" y1="38" x2="50" y2="50" stroke="#2563EB" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="2" fill="#2563EB" />
        <line x1="14" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" className="text-line dark:text-white/20" />
        <line x1="28" y1="14" x2="28" y2="20" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" className="text-line dark:text-white/20" />
        <line x1="36" y1="28" x2="42" y2="28" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" className="text-line dark:text-white/20" />
        <line x1="28" y1="36" x2="28" y2="42" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 2" className="text-line dark:text-white/20" />
      </svg>
    ),
  },
  {
    phase: '02',
    label: 'Architect',
    description:
      'Design the information architecture for AI states, signals, and human oversight before any interface work begins.',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="56" height="56" stroke="currentColor" strokeWidth="0.5" className="text-line dark:text-white/10" />
        <rect x="12" y="12" width="18" height="14" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="34" y="12" width="18" height="14" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="23" y="38" width="18" height="14" stroke="#2563EB" strokeWidth="0.75" />
        <line x1="21" y1="26" x2="32" y2="38" stroke="#2563EB" strokeWidth="0.75" />
        <line x1="43" y1="26" x2="32" y2="38" stroke="#2563EB" strokeWidth="0.75" />
        <circle cx="32" cy="45" r="2" fill="#2563EB" />
      </svg>
    ),
  },
  {
    phase: '03',
    label: 'Govern',
    description:
      'Build the components, tokens, patterns, and documentation that encode the architecture — so it scales without drifting.',
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="56" height="56" stroke="currentColor" strokeWidth="0.5" className="text-line dark:text-white/10" />
        <rect x="12" y="10" width="40" height="6" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="12" y="20" width="40" height="6" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <rect x="12" y="30" width="40" height="6" fill="#2563EB" fillOpacity="0.1" stroke="#2563EB" strokeWidth="0.75" />
        <rect x="12" y="40" width="40" height="6" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/20" />
        <line x1="56" y1="33" x2="60" y2="33" stroke="#2563EB" strokeWidth="1" />
        <polyline points="58,31 60,33 58,35" stroke="#2563EB" strokeWidth="1" fill="none" />
      </svg>
    ),
  },
];

const processSteps = [
  { n: '01', label: 'Discover', detail: 'Stakeholder alignment, system inventory, constraint mapping' },
  { n: '02', label: 'Research', detail: 'User interviews, workflow observation, competitive analysis' },
  { n: '03', label: 'Define', detail: 'Problem framing, mental models, information architecture' },
  { n: '04', label: 'Explore', detail: 'Concept sketches, flow alternatives, principle validation' },
  { n: '05', label: 'Prototype', detail: 'Interactive wireframes, hi-fi mockups, component design' },
  { n: '06', label: 'Validate', detail: 'Usability testing, analytics review, stakeholder sign-off' },
  { n: '07', label: 'Systemize', detail: 'Design tokens, component library, documentation handoff' },
  { n: '08', label: 'Measure', detail: 'Success metrics, adoption tracking, iteration planning' },
];

const writingCards = [
  {
    eyebrow: 'AI Product Design',
    title: 'The Trust Problem in AI Products',
    description:
      'Why "accuracy" is not a design goal — and what to measure instead when your product makes probabilistic decisions.',
    readTime: '8 min read',
  },
  {
    eyebrow: 'Design Systems',
    title: 'Design Tokens Are Not a Design System',
    description:
      'Tokens are infrastructure. The system is the shared language, governance, and human decisions that sit on top of them.',
    readTime: '6 min read',
  },
  {
    eyebrow: 'Agentic UX',
    title: 'When the AI Is Wrong: Designing for Error',
    description:
      'The most important moment in any AI product is when the system makes a mistake. Are you designing for that?',
    readTime: '7 min read',
  },
];

const focusTags = [
  'Agentic UX',
  'AI Design Systems',
  'Human Oversight',
  'Explainability',
  'Observability',
  'Enterprise AI',
];

const collaborationModels = [
  {
    label: 'Fractional Designer',
    description:
      'Embedded part-time on your product team. I work alongside engineers and PMs as a senior design partner — without the full-time cost.',
    cta: 'fractional-saas-designer',
  },
  {
    label: 'Strategy Sessions',
    description:
      'Focused engagements to audit your UX, define an AI design strategy, or pressure-test a product direction. Fast, high-leverage.',
    cta: 'strategy-sessions',
  },
  {
    label: 'Full Project',
    description:
      'End-to-end UX/UI for a product launch, redesign, or design system build. Discovery through final delivery.',
    cta: 'work-with-me',
  },
  {
    label: 'Speaking & Workshops',
    description:
      'I bring enterprise UX and AI-native design thinking to your team, conference, or leadership offsite.',
    cta: 'speaking-workshops',
  },
];

const HomeEditorial: React.FC<HomeEditorialProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleCaseStudyClick = (study: string) => {
    window.scrollTo(0, 0);
    const route = getCaseStudyRoute(study);
    if (setSelectedCaseStudy) setSelectedCaseStudy(study);
    setCurrentPage(route.page);
  };

  return (
    <>
      {/* ── Current Focus Strip ───────────────────────────────────── */}
      <section className="bg-tan dark:bg-neutral-900 py-10 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest shrink-0">
              Current Focus
            </span>
            <div className="w-px h-4 bg-line dark:bg-white/20 shrink-0" />
            {focusTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-ink dark:text-white px-3 py-1.5 border border-line dark:border-white/20 bg-white dark:bg-neutral-950"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Experience Architecture™ Manifesto ─────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Manifesto */}
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold text-blue uppercase tracking-widest mb-6">
                <span className="w-[7px] h-[7px] bg-blue flex-shrink-0" aria-hidden="true" />
                AI Experience Architecture™
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-6">
                A new discipline for a new era.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
                AI is being deployed into enterprise products faster than it can be designed. Organizations have model capabilities. What they don't have is a framework for the experience — what the AI communicates, what the human understands, and how trust is built and maintained.
              </p>
              <blockquote className="border-l-4 border-blue pl-6 py-1 mb-8">
                <p className="text-base text-ink dark:text-white leading-relaxed">
                  It is not a UI methodology. It is an architecture — the structural discipline that makes AI systems legible, trustworthy, and governable by the humans who depend on them.
                </p>
              </blockquote>
              <button
                onClick={() => navigate('solutions-ai-native-products')}
                className="inline-flex items-center gap-2 px-6 py-3 border border-ink/30 dark:border-white/30 text-ink dark:text-white text-sm font-medium hover:border-ink dark:hover:border-white hover:bg-ink/5 dark:hover:bg-white/5 transition-colors"
              >
                Explore the work <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {/* Right: Five Pillars */}
            <div>
              <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-6">
                Five Pillars
              </p>
              <div className="flex flex-col gap-px bg-line dark:bg-white/10">
                {[
                  { n: '01', label: 'Signal Architecture' },
                  { n: '02', label: 'Human Oversight Design' },
                  { n: '03', label: 'Agentic Design Systems', active: true },
                  { n: '04', label: 'Trust Architecture' },
                  { n: '05', label: 'AI Governance UX' },
                ].map((pillar) => (
                  <div
                    key={pillar.n}
                    className={`flex items-center gap-6 px-6 py-5 ${
                      pillar.active
                        ? 'bg-white dark:bg-neutral-900 border-l-4 border-blue'
                        : 'bg-tan-100 dark:bg-neutral-950'
                    }`}
                  >
                    <span className="text-xs font-semibold text-muted dark:text-neutral-600 tracking-wider shrink-0 w-6">
                      {pillar.n}
                    </span>
                    <span className={`text-sm font-medium ${pillar.active ? 'text-blue' : 'text-ink dark:text-neutral-300'}`}>
                      {pillar.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-muted dark:text-neutral-600 leading-relaxed">
                The full framework is not public. The thinking is.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── The Design Challenge ──────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">
                The Challenge
              </p>
              <blockquote className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-8">
                "Enterprises are deploying AI at the speed of infrastructure. The experience is still being designed at the speed of Jira tickets."
              </blockquote>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8 max-w-md">
                The gap between capability and experience is the most expensive problem in enterprise AI. Products make decisions users don't understand. Controls are buried. Trust is assumed rather than designed. This is the problem I work on.
              </p>
              <button
                onClick={() => navigate('perspectives-ai-native-design')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Read the full perspective <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                { label: 'Signal Legibility', body: 'Users should always understand what the AI detected, decided, and why.' },
                { label: 'Oversight Design', body: 'Every autonomous action needs a visible, accessible correction path.' },
                { label: 'Trust Calibration', body: 'Show uncertainty. False precision erodes trust faster than honest limitations.' },
                { label: 'Human-in-the-Loop', body: 'Surface AI reasoning at the moment users need oversight — not all at once.' },
              ].map((item) => (
                <div key={item.label} className="p-6 bg-white dark:bg-neutral-950">
                  <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AI-Native Phases ──────────────────────────────────────── */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
              My Approach
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white max-w-lg leading-snug">
              From diagnosis to architecture to governance.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {aiPhases.map((phase) => (
              <div key={phase.phase} className="p-10 bg-white dark:bg-neutral-950">
                <div className="text-ink dark:text-white">
                  {phase.svg}
                </div>
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-3">
                  Phase {phase.phase}
                </p>
                <h3 className="text-lg font-semibold text-ink dark:text-white mb-4">
                  {phase.label}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Design Principles ─────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-20 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
              Design Principles
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white">
              Four principles I design by.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {principles.map(({ icon: Icon, label, description }) => (
              <div key={label} className="p-8 bg-white dark:bg-neutral-950">
                <div className="w-8 h-8 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-semibold text-ink dark:text-white mb-2">{label}</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How I Work Timeline ───────────────────────────────────── */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                Process
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white">
                Eight steps from ambiguity to shipped.
              </h2>
            </div>
            <button
              onClick={() => navigate('perspectives-how-i-work')}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              Full process <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-px bg-line dark:bg-white/10">
            {processSteps.map((step, i) => (
              <div
                key={step.n}
                className="p-6 bg-white dark:bg-neutral-950 flex flex-col"
              >
                <span className={`text-xs font-semibold uppercase tracking-widest mb-4 ${i === 7 ? 'text-blue dark:text-lavender' : 'text-muted dark:text-neutral-500'}`}>
                  {step.n}
                </span>
                <p className="text-sm font-semibold text-ink dark:text-white mb-2 leading-snug">
                  {step.label}
                </p>
                <p className="text-xs text-muted dark:text-neutral-500 leading-relaxed mt-auto">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perspectives ──────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                Thinking
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white">
                How I think about design.
              </h2>
            </div>
            <button
              onClick={() => navigate('perspectives')}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              All perspectives <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line dark:bg-white/10">
            {perspectiveCards.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan-100 dark:hover:bg-white/[0.03] transition-colors"
              >
                <div className="text-ink dark:text-white opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.svg}
                </div>
                <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                  {item.eyebrow}
                </p>
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors leading-snug">
                  {item.label}
                </h3>
                <p className="text-xs text-muted dark:text-neutral-400 leading-relaxed mb-5">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  Read more <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Writing ────────────────────────────────────────── */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                Writing
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white">
                Long-form thinking, shared openly.
              </h2>
            </div>
            <button
              onClick={() => navigate('perspectives-writing')}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              All writing <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {writingCards.map((article, i) => (
              <button
                key={article.title}
                onClick={() => navigate('perspectives-writing')}
                className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan-100 dark:hover:bg-white/[0.03] transition-colors"
              >
                {/* Abstract SVG illustration */}
                <svg width="100%" height="56" viewBox="0 0 240 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-6 opacity-40 group-hover:opacity-70 transition-opacity">
                  {i === 0 && (
                    <>
                      <rect x="0" y="24" width="240" height="0.5" stroke="currentColor" strokeWidth="0.5" className="text-line dark:text-white/30" />
                      <circle cx="60" cy="24" r="12" stroke="#2563EB" strokeWidth="0.75" />
                      <circle cx="120" cy="24" r="8" stroke="#2563EB" strokeWidth="0.75" />
                      <circle cx="170" cy="24" r="5" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/30" />
                      <circle cx="200" cy="24" r="3" stroke="currentColor" strokeWidth="0.75" className="text-line dark:text-white/30" />
                      <line x1="60" y1="0" x2="60" y2="56" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" className="text-line dark:text-white/20" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <rect x="0" y="10" width="60" height="8" stroke="currentColor" strokeWidth="0.5" className="text-line dark:text-white/30" />
                      <rect x="0" y="24" width="100" height="8" fill="#2563EB" fillOpacity="0.12" stroke="#2563EB" strokeWidth="0.5" />
                      <rect x="0" y="38" width="80" height="8" stroke="currentColor" strokeWidth="0.5" className="text-line dark:text-white/30" />
                      <line x1="110" y1="10" x2="240" y2="10" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-line dark:text-white/20" />
                      <line x1="110" y1="24" x2="240" y2="24" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-line dark:text-white/20" />
                      <line x1="110" y1="38" x2="240" y2="38" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" className="text-line dark:text-white/20" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <polyline points="20,48 60,20 100,36 140,12 180,28 220,8" stroke="#2563EB" strokeWidth="1" fill="none" />
                      <circle cx="60" cy="20" r="3" fill="#2563EB" />
                      <circle cx="140" cy="12" r="3" fill="#2563EB" />
                      <circle cx="220" cy="8" r="3" fill="#2563EB" />
                      <line x1="0" y1="48" x2="240" y2="48" stroke="currentColor" strokeWidth="0.5" className="text-line dark:text-white/20" />
                    </>
                  )}
                </svg>
                <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                  {article.eyebrow}
                </p>
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted dark:text-neutral-500">{article.readTime}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                    Read <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Case Studies ─────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight">
                Problems worth solving.
              </h2>
            </div>
            <button
              onClick={() => navigate('case-studies')}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              All case studies <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="grid lg:grid-cols-5 gap-px bg-line dark:bg-white/10 mb-px">
            <a
              href={getCaseStudyRoute('CoreTechs SaaS Healthcare Product').path}
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
                event.preventDefault();
                handleCaseStudyClick('CoreTechs SaaS Healthcare Product');
              }}
              className="group lg:col-span-3 text-left bg-white dark:bg-neutral-950 hover:bg-tan-100 dark:hover:bg-white/[0.03] transition-colors overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden border-b border-line dark:border-white/10">
                <img
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png"
                  alt="CoreTechs Dashboard"
                  className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                  Healthcare SaaS · 5-year engagement
                </p>
                <h3 className="text-xl md:text-2xl font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors leading-snug">
                  CoreTechs — From an initial POC to an enterprise product
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6 max-w-lg">
                  Full-lifecycle UX/UI transformation spanning design system, user flows, and product strategy — turning a complex analytics platform into something payors and providers actually trust.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  View case study <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </div>
            </a>

            <div className="lg:col-span-2 flex flex-col gap-px bg-line dark:bg-white/10">
              <button
                onClick={() => navigate('solutions-design-systems')}
                className="group flex-1 text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan-100 dark:hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                  Design System
                </p>
                <h3 className="text-lg font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors leading-snug">
                  Enterprise Design System at Scale
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                  Building a shared component library and governance model that unified design and engineering across product lines.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  Explore solutions <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </button>
              <button
                onClick={() => navigate('solutions-ai-native-products')}
                className="group flex-1 text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan-100 dark:hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
                  AI-Native Products
                </p>
                <h3 className="text-lg font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors leading-snug">
                  Designing for Intelligent Workflows
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                  UX patterns for AI co-pilots, agentic dashboards, and decision-support interfaces where explainability is non-negotiable.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  Explore solutions <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </button>
            </div>
          </div>

          <div className="flex md:hidden mt-8">
            <button
              onClick={() => navigate('case-studies')}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              All case studies <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ── Work With Me ──────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
              Work With Me
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white max-w-lg leading-snug">
              Four ways to bring better design to your product.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10 mb-10">
            {collaborationModels.map((model, i) => (
              <button
                key={model.label}
                onClick={() => navigate(model.cta)}
                className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan-100 dark:hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">
                  0{i + 1}
                </p>
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors">
                  {model.label}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                  {model.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  Learn more <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('work-with-me')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              See all options <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              Or just say hello <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeEditorial;
