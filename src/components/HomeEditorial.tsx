import React from 'react';
import { ArrowRight, Brain, Shield, Eye, SlidersHorizontal, Layers } from 'lucide-react';

interface HomeEditorialProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy?: (study: string) => void;
}

const principles = [
  {
    icon: Eye,
    label: 'Clarity',
    description: 'Interfaces that communicate instantly — no training required, no decoding needed.',
  },
  {
    icon: Brain,
    label: 'Explainability',
    description: 'AI decisions made visible. Users understand what the system did and why.',
  },
  {
    icon: Shield,
    label: 'Trust',
    description: 'Consistency, transparency, and honesty build the confidence to act.',
  },
  {
    icon: SlidersHorizontal,
    label: 'Control',
    description: 'Humans stay in charge. Automation serves intent, not the other way around.',
  },
  {
    icon: Layers,
    label: 'Simplicity',
    description: 'Complexity hidden, not removed. The right detail at the right moment.',
  },
];

const perspectives = [
  {
    id: 'perspectives-my-philosophy',
    eyebrow: 'Philosophy',
    label: 'Design is a translation act.',
    description:
      'Enterprise software fails users not because of bad technology, but because no one translated the complexity into something human.',
  },
  {
    id: 'perspectives-ai-native-design',
    eyebrow: 'AI-Native Design',
    label: 'What it means to design for intelligent systems.',
    description:
      "When the product thinks, the designer's job changes. Explainability, feedback loops, and trust become first-class design concerns.",
  },
  {
    id: 'perspectives-how-i-work',
    eyebrow: 'Process',
    label: 'How I work with product and engineering teams.',
    description:
      "Good UX doesn't happen in isolation. My process is built around close collaboration, early alignment, and iterative visibility.",
  },
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
    if (setSelectedCaseStudy) setSelectedCaseStudy(study);
    setCurrentPage('solutions');
  };

  return (
    <>
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
              onClick={() => navigate('solutions')}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              All case studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Asymmetric featured case study */}
          <div className="grid lg:grid-cols-5 gap-px bg-line dark:bg-white/10 mb-px">
            {/* Large feature — spans 3 cols */}
            <button
              onClick={() => handleCaseStudyClick('CoreTechs SaaS Healthcare Product')}
              className="group lg:col-span-3 text-left bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors overflow-hidden"
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
                  CoreTechs — From developer tool to enterprise product
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6 max-w-lg">
                  Full-lifecycle UX/UI transformation spanning design system, user flows, and product strategy — turning a complex analytics platform into something payors and providers actually trust.
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  View case study <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </button>

            {/* Sidebar cases — spans 2 cols, stacked */}
            <div className="lg:col-span-2 flex flex-col gap-px bg-line dark:bg-white/10">
              <button
                onClick={() => handleCaseStudyClick('Enterprise Design System')}
                className="group flex-1 text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
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
                  View case study <ArrowRight className="w-3 h-3" />
                </span>
              </button>
              <button
                onClick={() => navigate('solutions-ai-native-products')}
                className="group flex-1 text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
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
                  Explore solutions <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            </div>
          </div>

          <div className="flex md:hidden mt-8">
            <button
              onClick={() => navigate('solutions')}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              All case studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── AI-Native Design Callout ──────────────────────────────── */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">
                AI-Native Design
              </p>
              <blockquote className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-8">
                "When the product thinks, the designer's job changes fundamentally."
              </blockquote>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8 max-w-md">
                AI-native design isn't about adding chatbots to existing products. It's about rethinking
                how humans and intelligent systems build shared understanding — through transparency,
                control, and intentional feedback loops.
              </p>
              <button
                onClick={() => navigate('perspectives-ai-native-design')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Read the full guide <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                { label: 'Explainability', body: 'Users should always understand what the AI did and why.' },
                { label: 'Human Override', body: 'Every automated action needs a visible, easy undo path.' },
                { label: 'Calibrated Confidence', body: 'Show uncertainty. False precision erodes trust faster than admitting limits.' },
                { label: 'Progressive Disclosure', body: 'Surface AI reasoning at the moment users need it — not all at once.' },
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

      {/* ── Design Principles Strip ───────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-20 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
              Design Principles
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white">
              Five things I never compromise on.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line dark:bg-white/10">
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

      {/* ── Perspectives Preview ──────────────────────────────────── */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
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
              All perspectives <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {perspectives.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
              >
                <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">
                  {item.eyebrow}
                </p>
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3 group-hover:text-blue dark:group-hover:text-lavender transition-colors leading-snug">
                  {item.label}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue dark:text-lavender">
                  Read more <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
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
                className="group text-left p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
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
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('work-with-me')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              See all options <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors"
            >
              Or just say hello <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeEditorial;
