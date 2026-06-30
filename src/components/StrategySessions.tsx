import React from 'react';
import { ChevronRight, Target, Clock, ArrowRight } from 'lucide-react';

interface StrategySessionsProps {
  setCurrentPage: (page: string) => void;
}

const sessionTypes = [
  {
    icon: Target,
    label: 'Design Audit',
    duration: '90 minutes',
    description: 'Placeholder. A focused review of your existing product with prioritized recommendations for improvement. Ideal for teams that need an outside perspective before a redesign.',
  },
  {
    icon: Clock,
    label: 'Advisory Session',
    duration: '60 minutes',
    description: 'Placeholder. A structured conversation on a specific design challenge — roadmap prioritization, team structure, or how to approach a complex UX problem.',
  },
  {
    icon: Target,
    label: 'AI UX Strategy',
    duration: '2 hours',
    description: 'Placeholder. A deep-dive session on how to approach AI product design: trust models, human-in-the-loop patterns, and what your team should prioritize first.',
  },
];

const StrategySessions: React.FC<StrategySessionsProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm mb-8">
            <button
              onClick={() => handleNav('services')}
              className="text-muted dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
            >
              Services
            </button>
            <ChevronRight className="w-4 h-4 text-muted dark:text-neutral-500" />
            <span className="text-black dark:text-white font-medium">Strategy Sessions</span>
          </nav>

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Strategy Sessions
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Focused time with a senior design mind.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-3xl mb-12">
              Placeholder copy. Short, structured engagements for product teams and founders who need a clear perspective on a design challenge without a full-scale engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted dark:text-neutral-500 mb-1">Format</p>
                <p className="text-base font-semibold text-black dark:text-white">Remote video call</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted dark:text-neutral-500 mb-1">Turnaround</p>
                <p className="text-base font-semibold text-black dark:text-white">Same or next week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-12">Session types</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sessionTypes.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                    </div>
                    <span className="text-xs font-medium text-muted dark:text-neutral-500 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none px-2.5 py-1">
                      {s.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{s.label}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">What to expect</h2>
            <p className="text-muted dark:text-neutral-400 leading-relaxed">
              Placeholder copy. This section will walk through the session structure — prep materials, the session itself, and what's delivered afterward (notes, recommendations, follow-up).
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-10">Related</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { id: 'enterprise-ux-consulting', label: 'Enterprise UX Consulting', description: 'Longer-form consulting engagements.' },
              { id: 'fractional-saas-designer', label: 'Fractional SaaS Designer', description: 'Embedded senior design on retainer.' },
              { id: 'speaking-workshops', label: 'Speaking & Workshops', description: 'Team workshops and talks.' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group text-left p-6 bg-neutral-50 dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-none hover:border-neutral-400 dark:hover:border-white/[0.2] transition-colors"
              >
                <div className="font-semibold text-black dark:text-white mb-2 group-hover:underline">{item.label}</div>
                <p className="text-sm text-muted dark:text-neutral-500 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">Book a session</h2>
          <p className="text-lg text-muted dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Reach out with a brief description of your challenge and preferred session type.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="btn-primary"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default StrategySessions;
