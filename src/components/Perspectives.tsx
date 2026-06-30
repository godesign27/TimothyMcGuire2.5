import React from 'react';
import { BookOpen, Workflow, Bot, PenLine, Mic2, ArrowRight } from 'lucide-react';

interface PerspectivesProps {
  setCurrentPage: (page: string) => void;
}

const items = [
  {
    id: 'perspectives-my-philosophy',
    label: 'My Philosophy',
    description: 'The principles that guide how I approach every design problem — from first principles to final pixel.',
    icon: BookOpen,
    iconBg: 'bg-slate-50 dark:bg-slate-500/10',
    iconColor: 'text-slate-600 dark:text-slate-400',
  },
  {
    id: 'perspectives-how-i-work',
    label: 'How I Work',
    description: 'My process, collaboration style, and tools — from discovery through handoff.',
    icon: Workflow,
    iconBg: 'bg-sky-50 dark:bg-sky-500/10',
    iconColor: 'text-sky-600 dark:text-sky-400',
  },
  {
    id: 'perspectives-ai-native-design',
    label: 'AI-Native Design',
    description: 'How I think about designing products where AI is a first-class participant, not a feature.',
    icon: Bot,
    iconBg: 'bg-blue-50 dark:bg-blue-500/10',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    id: 'perspectives-writing',
    label: 'Writing',
    description: 'Essays, articles, and short-form thinking on design, AI, and building digital products.',
    icon: PenLine,
    iconBg: 'bg-amber-50 dark:bg-amber-500/10',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    id: 'perspectives-speaking',
    label: 'Speaking',
    description: 'Conference talks, workshops, and panel discussions on AI product design and enterprise UX.',
    icon: Mic2,
    iconBg: 'bg-violet-50 dark:bg-violet-500/10',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
];

const Perspectives: React.FC<PerspectivesProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNav = (id: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(id);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 via-slate-50 to-gray-100 dark:from-zinc-900 dark:via-slate-950 dark:to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="py-20 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Perspectives
            </p>
            <h1 className="text-4xl md:text-7xl font-light text-gray-900 dark:text-white tracking-tight mb-6">
              How I think about design.
            </h1>
            <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-2xl">
              A collection of essays, frameworks, and working principles built from 15+ years designing complex digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="group text-left p-8 bg-gray-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] rounded-2xl hover:border-neutral-300 dark:hover:border-white/[0.12] hover:shadow-lg transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:underline">
                    {item.label}
                  </h2>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider text block */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.02] dark:border-t dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-2xl font-light text-gray-700 dark:text-neutral-400 leading-relaxed italic">
              "Design is not what it looks like and feels like. Design is how it works — and who it works for."
            </p>
            <p className="mt-6 text-sm text-gray-500 dark:text-neutral-500">— Timothy McGuire</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            I take on a limited number of engagements each quarter. Let's see if we're a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition-colors font-medium"
            >
              Get in touch
            </button>
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-neutral-300 dark:border-white/[0.12] text-gray-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-white/[0.2] transition-colors font-medium"
            >
              View services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Perspectives;
