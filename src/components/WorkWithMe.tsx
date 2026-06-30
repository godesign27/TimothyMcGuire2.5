import React from 'react';
import { ChevronRight, Bot, Globe, Box, Smartphone, Users, Building2, Mic2, Target, ArrowRight } from 'lucide-react';

interface WorkWithMeProps {
  setCurrentPage: (page: string) => void;
}

const engagements = [
  { id: 'agentic-experience', icon: Bot, label: 'Agentic Experience', description: 'AI-native product design and UX leadership.' },
  { id: 'enterprise-ux-consulting', icon: Building2, label: 'Enterprise UX Consulting', description: 'Senior UX expertise for complex enterprise products.' },
  { id: 'saas-product-design', icon: Box, label: 'SaaS Product Design', description: 'Scalable interfaces for software products.' },
  { id: 'marketing-web-design', icon: Globe, label: 'Marketing Web Design', description: 'Conversion-focused websites that tell your story.' },
  { id: 'mobile-web-design', icon: Smartphone, label: 'Mobile & Web Design', description: 'Responsive experiences that shine on every device.' },
  { id: 'fractional-saas-designer', icon: Users, label: 'Fractional SaaS Designer', description: 'Senior design leadership on a flexible cadence.' },
  { id: 'speaking-workshops', icon: Mic2, label: 'Speaking & Workshops', description: 'Talks and facilitated workshops for teams.' },
  { id: 'strategy-sessions', icon: Target, label: 'Strategy Sessions', description: 'Focused time with a senior design mind.' },
];

const WorkWithMe: React.FC<WorkWithMeProps> = ({ setCurrentPage }) => {
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
            <span className="text-black dark:text-white font-medium">Work With Me</span>
          </nav>

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Work With Me
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Let's find the right engagement.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-3xl">
              Placeholder copy. Whether you need a full-scale redesign, embedded design leadership, a focused workshop, or a strategy session, I offer several ways to work together.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-10">Ways to engage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagements.map((eng) => {
              const Icon = eng.icon;
              return (
                <button
                  key={eng.id}
                  onClick={() => handleNav(eng.id)}
                  className="group text-left p-6 bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px] hover:border-neutral-400 dark:hover:border-white/[0.2] transition-colors"
                >
                  <div className="w-10 h-10 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                  </div>
                  <div className="font-semibold text-black dark:text-white mb-1.5 text-sm group-hover:underline">
                    {eng.label}
                  </div>
                  <p className="text-xs text-muted dark:text-neutral-500 mb-3 leading-relaxed">
                    {eng.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-black dark:text-white">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              How we get started
            </h2>
            <p className="text-muted dark:text-neutral-400 leading-relaxed mb-8">
              Placeholder copy. This section will walk through the intake process — initial call, scope definition, agreement, and kickoff. Simple, fast, no surprises.
            </p>
            <ol className="space-y-6">
              {['Reach out with a brief description of your challenge.', 'We schedule a 30-minute discovery call.', 'I share a scope of work or engagement recommendation.', 'We align on timeline and kick off.'].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center text-sm font-semibold text-black dark:text-white">
                    {i + 1}
                  </span>
                  <p className="text-muted dark:text-neutral-400 pt-1.5">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            I take on a limited number of engagements. Let's talk about your project.
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

export default WorkWithMe;
