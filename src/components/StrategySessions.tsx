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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 dark:from-teal-950 dark:via-cyan-950 dark:to-emerald-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-gray-500 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <li className="text-gray-900 dark:text-white font-medium">Strategy Sessions</li>
            </ol>
          </nav>

          <div className="py-16 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-600 dark:text-teal-400 mb-4">
              Strategy Sessions
            </p>
            <h1 className="text-4xl md:text-7xl font-light text-gray-900 dark:text-white tracking-tight mb-6">
              Focused time with a senior design mind.
            </h1>
            <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mb-12">
              Placeholder copy. Short, structured engagements for product teams and founders who need a clear perspective on a design challenge without a full-scale engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-neutral-500 mb-1">Format</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Remote video call</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-neutral-500 mb-1">Turnaround</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Same or next week</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12">Session types</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {sessionTypes.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="p-8 bg-gray-50 dark:bg-white/[0.03] dark:border dark:border-white/[0.06] rounded-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-500/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 dark:text-neutral-500 border border-neutral-200 dark:border-white/[0.1] rounded-full px-2.5 py-0.5">
                      {s.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{s.label}</h3>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.02] dark:border-t dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">What to expect</h2>
            <p className="text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
              Placeholder copy. This section will walk through the session structure — prep materials, the session itself, and what's delivered afterward (notes, recommendations, follow-up).
            </p>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">Related</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { id: 'enterprise-ux-consulting', label: 'Enterprise UX Consulting', description: 'Longer-form consulting engagements.' },
              { id: 'fractional-saas-designer', label: 'Fractional SaaS Designer', description: 'Embedded senior design on retainer.' },
              { id: 'speaking-workshops', label: 'Speaking & Workshops', description: 'Team workshops and talks.' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group text-left p-6 bg-gray-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] rounded-xl hover:border-neutral-300 dark:hover:border-white/[0.12] hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">{item.label}</div>
                <p className="text-sm text-gray-500 dark:text-neutral-500 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400">
                  Learn more <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.02] dark:border-t dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Book a session</h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Reach out with a brief description of your challenge and preferred session type.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition-colors font-medium"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default StrategySessions;
