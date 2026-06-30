import React from 'react';
import { ChevronRight, Mic2, Users, BookOpen, ArrowRight } from 'lucide-react';

interface SpeakingWorkshopsProps {
  setCurrentPage: (page: string) => void;
}

const formats = [
  { icon: Mic2, label: 'Keynote & Conference Talks', description: 'Placeholder. 30–60 minute talks on AI product design, agentic UX, design leadership, and building enterprise products at scale.' },
  { icon: Users, label: 'Facilitated Workshops', description: 'Placeholder. Half-day or full-day workshops for product and design teams covering AI mental models, design system governance, and stakeholder alignment.' },
  { icon: BookOpen, label: 'Lunch & Learns', description: 'Placeholder. Focused 45-minute sessions for internal teams on topics ranging from accessibility to agentic workflow design.' },
];

const SpeakingWorkshops: React.FC<SpeakingWorkshopsProps> = ({ setCurrentPage }) => {
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
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-100 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950" />
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
              <li className="text-gray-900 dark:text-white font-medium">Speaking & Workshops</li>
            </ol>
          </nav>

          <div className="py-16 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4">
              Speaking & Workshops
            </p>
            <h1 className="text-4xl md:text-7xl font-light text-gray-900 dark:text-white tracking-tight mb-6">
              Clear thinking, shared with your team.
            </h1>
            <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mb-12">
              Placeholder copy. I speak at conferences and run workshops for product, design, and engineering teams on AI product design, design systems, and building better digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-neutral-500 mb-1">Format</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Remote or in-person</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-neutral-500 mb-1">Audience</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Product, design & eng teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-12 max-w-2xl">
            Engagement formats
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {formats.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="p-8 bg-gray-50 dark:bg-white/[0.03] dark:border dark:border-white/[0.06] rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-500/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{f.label}</h3>
                  <p className="text-gray-600 dark:text-neutral-400 text-sm">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.02] dark:border-t dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Topics</h2>
            <p className="text-lg text-gray-600 dark:text-neutral-400 mb-8">
              Placeholder copy. This section will list available talk topics and workshop themes.
            </p>
            <ul className="space-y-3">
              {['AI-Native UX and Agentic Workflow Design', 'Trust Models for AI Products', 'Design Systems at Enterprise Scale', 'Human-in-the-Loop Design Patterns', 'Enterprise UX Leadership', 'Accessible Design from First Principles'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-gray-700 dark:text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">Related</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { id: 'perspectives-speaking', label: 'Speaking', description: 'Past talks and appearances.' },
              { id: 'strategy-sessions', label: 'Strategy Sessions', description: 'Focused 1:1 design consulting.' },
              { id: 'perspectives-writing', label: 'Writing', description: 'Articles and essays on design.' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group text-left p-6 bg-gray-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] rounded-xl hover:border-neutral-300 dark:hover:border-white/[0.12] hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">{item.label}</div>
                <p className="text-sm text-gray-500 dark:text-neutral-500 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.02] dark:border-t dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Interested in having me speak?
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Reach out with details about your event or team and let's see if it's a fit.
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

export default SpeakingWorkshops;
