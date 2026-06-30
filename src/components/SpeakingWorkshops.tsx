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
            <span className="text-black dark:text-white font-medium">Speaking & Workshops</span>
          </nav>

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Speaking & Workshops
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Clear thinking, shared with your team.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-3xl mb-12">
              Placeholder copy. I speak at conferences and run workshops for product, design, and engineering teams on AI product design, design systems, and building better digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted dark:text-neutral-500 mb-1">Format</p>
                <p className="text-base font-semibold text-black dark:text-white">Remote or in-person</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted dark:text-neutral-500 mb-1">Audience</p>
                <p className="text-base font-semibold text-black dark:text-white">Product, design & eng teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-12 max-w-2xl">
            Engagement formats
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
                  <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{f.label}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{f.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">Topics</h2>
            <p className="text-muted dark:text-neutral-400 mb-8">
              Placeholder copy. This section will list available talk topics and workshop themes.
            </p>
            <ul className="space-y-3">
              {['AI-Native UX and Agentic Workflow Design', 'Trust Models for AI Products', 'Design Systems at Enterprise Scale', 'Human-in-the-Loop Design Patterns', 'Enterprise UX Leadership', 'Accessible Design from First Principles'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-black dark:text-white">
                  <span className="w-1.5 h-1.5 rounded-none bg-black dark:bg-white flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-10">Related</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { id: 'perspectives-speaking', label: 'Speaking', description: 'Past talks and appearances.' },
              { id: 'strategy-sessions', label: 'Strategy Sessions', description: 'Focused 1:1 design consulting.' },
              { id: 'perspectives-writing', label: 'Writing', description: 'Articles and essays on design.' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group text-left p-6 bg-neutral-50 dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-none hover:border-neutral-400 dark:hover:border-white/[0.2] transition-colors"
              >
                <div className="font-semibold text-black dark:text-white mb-2 group-hover:underline">{item.label}</div>
                <p className="text-sm text-muted dark:text-neutral-500 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Interested in having me speak?
          </h2>
          <p className="text-lg text-muted dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Reach out with details about your event or team and let's see if it's a fit.
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

export default SpeakingWorkshops;
