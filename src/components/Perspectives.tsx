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
  },
  {
    id: 'perspectives-how-i-work',
    label: 'How I Work',
    description: 'My process, collaboration style, and tools — from discovery through handoff.',
    icon: Workflow,
  },
  {
    id: 'perspectives-ai-native-design',
    label: 'AI-Native Design',
    description: 'How I think about designing products where AI is a first-class participant, not a feature.',
    icon: Bot,
  },
  {
    id: 'perspectives-writing',
    label: 'Writing',
    description: 'Essays, articles, and short-form thinking on design, AI, and building digital products.',
    icon: PenLine,
  },
  {
    id: 'perspectives-speaking',
    label: 'Speaking',
    description: 'Conference talks, workshops, and panel discussions on AI product design and enterprise UX.',
    icon: Mic2,
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Perspectives
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              How I think about design.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
              A collection of essays, frameworks, and working principles built from 15+ years designing complex digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className="group text-left p-8 bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-none hover:border-neutral-400 dark:hover:border-white/[0.2] transition-colors"
                >
                  <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                  </div>
                  <h2 className="text-lg font-semibold text-black dark:text-white mb-3 group-hover:underline">
                    {item.label}
                  </h2>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-black dark:text-white">
                    Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-2xl font-light text-muted dark:text-neutral-400 leading-relaxed italic">
              "Design is not what it looks like and feels like. Design is how it works — and who it works for."
            </p>
            <p className="mt-6 text-sm text-muted dark:text-neutral-500">— Timothy McGuire</p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-muted dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            I take on a limited number of engagements each quarter. Let's see if we're a fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNav('contact')}
              className="btn-primary"
            >
              Get in touch
            </button>
            <button
              onClick={() => handleNav('services')}
              className="btn-secondary"
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
