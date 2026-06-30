import React from 'react';
import { ChevronRight, Building2, Users, BarChart3, Layers, ArrowRight } from 'lucide-react';

interface EnterpriseUXConsultingProps {
  setCurrentPage: (page: string) => void;
}

const capabilities = [
  { icon: Building2, label: 'Platform Redesign', description: 'End-to-end redesign of enterprise platforms with complex user roles, multi-tenant data models, and cross-functional workflows.' },
  { icon: Users, label: 'Stakeholder Alignment', description: 'Facilitating design reviews, roadmap workshops, and cross-functional alignment sessions to build consensus and move fast.' },
  { icon: BarChart3, label: 'Research & Audits', description: 'Heuristic audits, user interviews, and quantitative analysis to identify where your product is losing users and why.' },
  { icon: Layers, label: 'Design Systems', description: 'Building scalable component libraries and design systems that increase shipping velocity and reduce inconsistency.' },
];

const EnterpriseUXConsulting: React.FC<EnterpriseUXConsultingProps> = ({ setCurrentPage }) => {
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
            <span className="text-black dark:text-white font-medium">Enterprise UX Consulting</span>
          </nav>

          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Enterprise UX Consulting
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Senior UX expertise for complex enterprise products.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-3xl mb-12">
              Placeholder copy. I partner with enterprise teams to redesign complex platforms, align stakeholders, and build design systems that scale with the business.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted dark:text-neutral-500 mb-1">Experience</p>
                <p className="text-base font-semibold text-black dark:text-white">15+ years enterprise UX</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted dark:text-neutral-500 mb-1">Engagement</p>
                <p className="text-base font-semibold text-black dark:text-white">Project or retainer</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted dark:text-neutral-500 mb-1">Format</p>
                <p className="text-base font-semibold text-black dark:text-white">Remote collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
            What I do
          </p>
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-12 max-w-2xl">
            Placeholder section heading for capabilities.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.label} className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px]">
                  <div className="w-10 h-10 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{cap.label}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Placeholder section
            </p>
            <h2 className="text-2xl font-semibold text-black dark:text-white mb-6">
              Who this is for
            </h2>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
              Placeholder copy. This section will describe the ideal client profile — typically enterprise SaaS companies, scale-up product teams, and organizations going through platform modernization or AI adoption.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-black dark:text-white mb-10">Related services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { id: 'saas-product-design', label: 'SaaS Product Design', description: 'End-to-end product design for software.' },
              { id: 'agentic-experience', label: 'Agentic Experience', description: 'AI & agent experience design.' },
              { id: 'fractional-saas-designer', label: 'Fractional SaaS Designer', description: 'Flexible senior design leadership.' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="group text-left p-6 bg-neutral-50 dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px] hover:border-neutral-400 dark:hover:border-white/[0.2] transition-colors"
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
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">Ready to discuss your project?</h2>
          <p className="text-lg text-muted dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            I work with a limited number of enterprise clients at a time. Let's talk.
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

export default EnterpriseUXConsulting;
