import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SuccessStoriesProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}

const SuccessStories: React.FC<SuccessStoriesProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  const handleCaseStudyClick = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy('CoreTechs SaaS Healthcare Product');
    setCurrentPage('solutions');
  };

  return (
    <section id="success-stories" className="bg-tan dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-2">
            Success Stories
          </h2>
          <div className="w-8 h-[3px] bg-blue" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white dark:bg-neutral-900 border border-line dark:border-white/10 p-2">
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png"
              alt="CoreTechs Dashboard"
              className="w-full h-72 object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium text-blue dark:text-lavender uppercase tracking-widest mb-4">Case Study</p>
            <h3 className="text-2xl font-semibold text-ink dark:text-white mb-5 leading-snug">CoreTechs</h3>
            <p className="text-base text-muted dark:text-neutral-400 mb-8 leading-relaxed">
              Over five years, I transformed CoreTechs from a developer-centric tool into a fully realized SaaS product supporting payors and providers through Gray Matter's analytics solutions. Work spanned the full UX/UI lifecycle - a scalable design component library, page templates, user flows, and site maps - aligning user personas with business goals through testing and iteration.
            </p>
            <button
              onClick={handleCaseStudyClick}
              className="inline-flex items-center gap-2 text-sm font-medium text-ink dark:text-white hover:text-blue dark:hover:text-lavender transition-colors self-start"
            >
              View case study <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
