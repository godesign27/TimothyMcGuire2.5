import React from 'react';

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
    <section id="success-stories" className="bg-white dark:bg-neutral-950 py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-16">
          Success Stories
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] p-4 rounded-[10px]">
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png"
              alt="CoreTechs Dashboard"
              className="rounded-[10px] w-full h-64 object-cover object-top"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">CoreTechs</h3>
            <p className="text-muted dark:text-neutral-400 mb-8 leading-relaxed">
              Over the course of five years, I transformed CoreTechs from a developer-centric tool into a fully realized SaaS product supporting payors and providers through Gray Matter's analytics solutions. My work spanned the full UX/UI lifecycle--crafting a scalable design component library, building page templates, user flows, and site maps, and aligning user personas with business goals through testing and iteration.
            </p>
            <button
              onClick={handleCaseStudyClick}
              className="btn-primary"
            >
              View case study
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
