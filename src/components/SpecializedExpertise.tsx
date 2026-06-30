import React from 'react';
import { Globe, Box, Bot, ArrowRight } from 'lucide-react';

interface SpecializedExpertiseProps {
  setCurrentPage: (page: string) => void;
}

const SpecializedExpertise: React.FC<SpecializedExpertiseProps> = ({ setCurrentPage }) => {
  const handleNav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const items = [
    { id: 'agentic-experience', icon: Bot, label: 'Agentic Experience', description: 'Design AI and agent-powered interfaces that earn user trust through transparency, control, and clear mental models.' },
    { id: 'marketing-web-design', icon: Globe, label: 'Marketing Web Design', description: 'Create impactful web experiences that convert visitors into customers with strategic user journeys.' },
    { id: 'saas-product-design', icon: Box, label: 'SaaS Product Design', description: 'Build powerful, scalable software solutions with comprehensive SaaS design expertise.' },
  ];

  return (
    <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-12">Specialized Expertise</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="p-8 bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
                <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{item.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={() => handleNav(item.id)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white hover:underline"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecializedExpertise;
