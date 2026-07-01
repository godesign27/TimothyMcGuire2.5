import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SpecializedExpertiseProps {
  setCurrentPage: (page: string) => void;
}

const items = [
  {
    id: 'agentic-experience',
    label: 'Agentic Experience',
    description: 'Design AI and agent-powered interfaces that earn user trust through transparency, control, and clear mental models. Strategy through launch.',
  },
  {
    id: 'marketing-web-design',
    label: 'Marketing Web Design',
    description: 'Create impactful web experiences that convert visitors into customers. Marketing-focused design combining aesthetics with strategic user journeys.',
  },
  {
    id: 'saas-product-design',
    label: 'SaaS Product Design',
    description: 'Build powerful, scalable software solutions with comprehensive design expertise. Intuitive interfaces that drive user engagement and business growth.',
  },
];

const SpecializedExpertise: React.FC<SpecializedExpertiseProps> = ({ setCurrentPage }) => {
  const handleNav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <section className="py-24 bg-white dark:bg-neutral-950 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <h2 className="text-2xl font-semibold text-ink dark:text-white mb-2">Specialized Expertise</h2>
            <div className="w-8 h-[3px] bg-blue" />
          </div>
          <button
            onClick={() => handleNav('services')}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-blue dark:text-lavender hover:underline self-start md:self-auto"
          >
            All services <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-10 bg-white dark:bg-neutral-950 flex flex-col justify-between min-h-[280px]"
            >
              <div>
                <h3 className="text-lg font-semibold text-ink dark:text-white mb-4">{item.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => handleNav(item.id)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-blue dark:text-lavender hover:underline mt-8 self-start"
              >
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecializedExpertise;
