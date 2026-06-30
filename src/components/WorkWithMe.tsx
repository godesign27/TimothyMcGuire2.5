import React from 'react';
import { ChevronRight, Bot, Globe, Box, Smartphone, Users, Building2, Mic2, Target, ArrowRight } from 'lucide-react';

interface WorkWithMeProps {
  setCurrentPage: (page: string) => void;
}

const engagements = [
  { id: 'agentic-experience', icon: Bot, label: 'Agentic Experience', description: 'AI-native product design and UX leadership.', iconBg: 'bg-blue-50 dark:bg-blue-500/10', iconColor: 'text-blue-600 dark:text-blue-400' },
  { id: 'enterprise-ux-consulting', icon: Building2, label: 'Enterprise UX Consulting', description: 'Senior UX expertise for complex enterprise products.', iconBg: 'bg-slate-50 dark:bg-slate-500/10', iconColor: 'text-slate-600 dark:text-slate-400' },
  { id: 'saas-product-design', icon: Box, label: 'SaaS Product Design', description: 'Scalable interfaces for software products.', iconBg: 'bg-sky-50 dark:bg-sky-500/10', iconColor: 'text-sky-600 dark:text-sky-400' },
  { id: 'marketing-web-design', icon: Globe, label: 'Marketing Web Design', description: 'Conversion-focused websites that tell your story.', iconBg: 'bg-emerald-50 dark:bg-emerald-500/10', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  { id: 'mobile-web-design', icon: Smartphone, label: 'Mobile & Web Design', description: 'Responsive experiences that shine on every device.', iconBg: 'bg-amber-50 dark:bg-amber-500/10', iconColor: 'text-amber-600 dark:text-amber-400' },
  { id: 'fractional-saas-designer', icon: Users, label: 'Fractional SaaS Designer', description: 'Senior design leadership on a flexible cadence.', iconBg: 'bg-teal-50 dark:bg-teal-500/10', iconColor: 'text-teal-600 dark:text-teal-400' },
  { id: 'speaking-workshops', icon: Mic2, label: 'Speaking & Workshops', description: 'Talks and facilitated workshops for teams.', iconBg: 'bg-violet-50 dark:bg-violet-500/10', iconColor: 'text-violet-600 dark:text-violet-400' },
  { id: 'strategy-sessions', icon: Target, label: 'Strategy Sessions', description: 'Focused time with a senior design mind.', iconBg: 'bg-teal-50 dark:bg-teal-500/10', iconColor: 'text-teal-600 dark:text-teal-400' },
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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-neutral-50 to-zinc-100 dark:from-gray-900 dark:via-neutral-950 dark:to-zinc-950" />
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
              <li className="text-gray-900 dark:text-white font-medium">Work With Me</li>
            </ol>
          </nav>

          <div className="py-16 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
              Work With Me
            </p>
            <h1 className="text-4xl md:text-7xl font-light text-gray-900 dark:text-white tracking-tight mb-6">
              Let's find the right engagement.
            </h1>
            <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl">
              Placeholder copy. Whether you need a full-scale redesign, embedded design leadership, a focused workshop, or a strategy session, I offer several ways to work together.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Types Grid */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">Ways to engage</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagements.map((eng) => {
              const Icon = eng.icon;
              return (
                <button
                  key={eng.id}
                  onClick={() => handleNav(eng.id)}
                  className="group text-left p-6 bg-gray-50 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] rounded-xl hover:border-neutral-300 dark:hover:border-white/[0.12] hover:shadow-md transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl ${eng.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${eng.iconColor}`} />
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white mb-1.5 text-sm group-hover:underline">
                    {eng.label}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-neutral-500 mb-3 leading-relaxed">
                    {eng.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.02] dark:border-t dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
              How we get started
            </h2>
            <p className="text-lg text-gray-600 dark:text-neutral-400 leading-relaxed mb-8">
              Placeholder copy. This section will walk through the intake process — initial call, scope definition, agreement, and kickoff. Simple, fast, no surprises.
            </p>
            <ol className="space-y-6">
              {['Reach out with a brief description of your challenge.', 'We schedule a 30-minute discovery call.', 'I share a scope of work or engagement recommendation.', 'We align on timeline and kick off.'].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-200 dark:bg-white/[0.08] flex items-center justify-center text-sm font-semibold text-gray-700 dark:text-neutral-300">
                    {i + 1}
                  </span>
                  <p className="text-gray-600 dark:text-neutral-400 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">Ready to get started?</h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            I take on a limited number of engagements. Let's talk about your project.
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

export default WorkWithMe;
