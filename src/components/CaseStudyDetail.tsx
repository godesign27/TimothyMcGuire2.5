import React from 'react';
import { ArrowLeft, Clock, Users, PenTool as Tool } from 'lucide-react';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackClick = () => {
    // Scroll to top first
    window.scrollTo(0, 0);
    // Clear the selected case study first
    setSelectedCaseStudy(null);
    // Then navigate back to solutions
    setCurrentPage('solutions');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Solutions Button */}
          <div className="py-4">
            <button
              onClick={handleBackClick}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Solutions
            </button>
          </div>

          <div className="py-2">
            <h1 className="text-4xl md:text-7xl font-regular text-black dark:text-white tracking-tight mb-6">
              Transform Healthcare Decisions with <br />
              Data Driven Insights.
            </h1>
            <p className="text-xl text-black dark:text-neutral-300 max-w-4xl">
              Unlock contract value, optimize performance, and manage population risk—all in one platform.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-8 lg:py-12">
            {/* Dashboard Image - 9 columns (75%) on desktop */}
            <div className="lg:col-span-9 relative bg-white rounded-none border border-[#D9D9D9] dark:border-white/[0.1] overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/core-hero.png"
                alt="Healthcare Dashboard"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Content - 3 columns (25%) on desktop */}
            <div className="lg:col-span-3 flex flex-col items-start">
              {/* Project Details Card */}
              <div className="mt-4 lg:mt-6 bg-white dark:bg-white/[0.03] rounded-none p-6 lg:p-8 border border-[#D9D9D9] dark:border-white/[0.1]">
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">SaaS Product Solution</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-muted dark:text-neutral-400 text-sm">ROLE(s)</h4>
                    <p className="text-black dark:text-white font-bold text-sm">Principal UX Designer + UX Director + Creative Director</p>
                  </div>
                  <div>
                    <h4 className="text-muted dark:text-neutral-400 text-sm">THE CLIENT</h4>
                    <p className="text-black dark:text-white font-bold text-sm">Gray Matter Analytics</p>
                  </div>
                  <div>
                    <h4 className="text-muted dark:text-neutral-400 text-sm">TOOLS</h4>
                    <p className="text-black dark:text-white font-bold text-sm">Sketch, Figma, Zeplin, Teams, Jira, InVision</p>
                  </div>
                  <div>
                    <h4 className="text-muted dark:text-neutral-400 text-sm">SERVICES</h4>
                    <ul className="text-black dark:text-white font-bold text-sm space-y-1">
                      <li>• User Experience Design</li>
                      <li>• User Interface Design</li>
                      <li>• Design Library Creation</li>
                      <li>• Prototype</li>
                      <li>• Brand Development</li>
                      <li>• Logo Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-muted dark:text-neutral-400 text-sm">DURATION</h4>
                    <p className="text-black dark:text-white font-bold text-sm">Sept 2016 - Sept 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2 - Strategy Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-white/[0.03] rounded-none p-6 lg:p-12 border border-[#D9D9D9] dark:border-white/[0.1]">
            <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none mb-6 lg:mb-8">
              The Strategy
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-4 lg:mb-6">
              Provide patient management through intuitive design and powerful functionality.
            </h2>
            <p className="text-lg lg:text-xl text-muted dark:text-neutral-400">
              A comprehensive solution that puts healthcare professionals first.
            </p>
          </div>
        </div>
      </section>

      {/* Row 3 - Three Card Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* First Card - full width on mobile, 6 columns on desktop */}
            <div className="lg:col-span-6 bg-white dark:bg-white/[0.03] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                Before
              </span>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/before.png"
                alt="Before"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card - full width on mobile, 3 columns on desktop */}
            <div className="lg:col-span-3 bg-white dark:bg-white/[0.03] rounded-none p-6 lg:p-8 border border-[#D9D9D9] dark:border-white/[0.1]">
              <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none mb-6 lg:mb-8">
                UX Design
              </span>
              <h3 className="text-lg lg:text-xl font-semibold text-black dark:text-white mb-4">
                Principle UX/UI Designer
              </h3>
              <p className="text-sm lg:text-base text-muted dark:text-neutral-400">
                As Principal UX/UI Designer, I shaped Coretechs' MVP by driving the complete design journey—translating business needs into a user-centered product through research, problem-solving, empathy, design iteration, and prototyping.
              </p>
            </div>

            {/* Third Card - full width on mobile, 3 columns on desktop */}
            <div className="lg:col-span-3 bg-white dark:bg-white/[0.03] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                Persona
              </span>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/healthcare-user.png"
                alt="Healthcare Professional"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Row 4 - Two Card Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* First Card */}
            <div className="bg-white dark:bg-white/[0.03] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                UX Strategy
              </span>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/requirements.png"
                alt="Requirements"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card */}
            <div className="bg-white dark:bg-white/[0.03] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="flex space-x-2 absolute top-6 lg:top-8 left-6 lg:left-8 z-10">
                <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                  UX Design
                </span>
                <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                  Site Map
                </span>
              </div>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/site-map.png"
                alt="Site Map"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Row 5 - Design Principles Section */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none mb-6">
            Design Direction
          </span>
          <h2 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-12">Design Principles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Top Row */}
            <div className="bg-neutral-100 dark:bg-white/[0.05] rounded-none p-6 lg:p-8 border border-[#D9D9D9] dark:border-white/[0.1]">
              <h3 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-6">Empowering</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-black dark:text-white">Insightful</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Meaningful</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Useful</span>
              </div>
            </div>
            <div className="bg-neutral-100 dark:bg-white/[0.05] rounded-none p-6 lg:p-8 border border-[#D9D9D9] dark:border-white/[0.1]">
              <h3 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-6">Harmonious</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-black dark:text-white">Intentional</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Minimal</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Elegant</span>
              </div>
            </div>
            {/* Bottom Row */}
            <div className="bg-neutral-100 dark:bg-white/[0.05] rounded-none p-6 lg:p-8 border border-[#D9D9D9] dark:border-white/[0.1]">
              <h3 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-6">Simple</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-black dark:text-white">Focused</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Efficient</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Prioritized</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Progressive Disclosure</span>
              </div>
            </div>
            <div className="bg-neutral-100 dark:bg-white/[0.05] rounded-none p-6 lg:p-8 border border-[#D9D9D9] dark:border-white/[0.1]">
              <h3 className="text-2xl lg:text-4xl font-bold text-black dark:text-white mb-6">Learnable</h3>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <span className="text-base lg:text-xl text-black dark:text-white">Intuitive</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Familiar</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Predictable</span>
                <span className="text-base lg:text-xl text-black dark:text-white">Usable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 6 - Two Image Cards */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* First Card */}
            <div className="bg-white dark:bg-white/[0.03] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                UX Design
              </span>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/wireframe.png"
                alt="Wireframe"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Second Card */}
            <div className="bg-white dark:bg-white/[0.03] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <span className="absolute top-6 lg:top-8 left-6 lg:left-8 z-10 inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                UI Design
              </span>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/color-harmony%20(1).png"
                alt="Color Harmony"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Row 7 - Color Palette Card */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-100 dark:bg-white/[0.05] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden p-6 lg:p-8">
            <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none mb-4">
              UI Design
            </span>
            <h2 className="text-2xl lg:text-4xl font-regular text-black dark:text-white mb-6">Color Palette</h2>
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/colorpalette2.png"
              alt="Color Palette"
              className="w-full h-full object-cover rounded-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Row 8 - Button Component Card */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-neutral-100 dark:bg-white/[0.05] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden p-6 lg:p-8">
            <div className="flex space-x-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                UI Design
              </span>
              <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-regular rounded-none">
                Component Definition
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-regular text-black dark:text-white mb-6">Button Component</h2>
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/button-component.png"
              alt="Button Component"
              className="w-full h-full object-cover rounded-none"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Row 9 - Page Designs Card */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-white/[0.03] rounded-none border border-[#D9D9D9] dark:border-white/[0.1] relative overflow-hidden p-6 lg:p-8">
            <div className="flex space-x-2 mb-4">
              <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-medium rounded-none">
                UI Design
              </span>
              <span className="inline-flex items-center px-4 py-1.5 bg-black dark:bg-neutral-900 text-white text-sm font-regular rounded-none">
                Final Designs
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-regular text-black dark:text-white mb-6">Page Designs</h2>
            <div className="space-y-6">
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png"
                alt="Dashboard Summary"
                className="w-full rounded-none"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detail-overview.png"
                alt="Measure Detail Overview"
                className="w-full rounded-none"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detailcard-practices.png"
                alt="Measure Detail Card Practices"
                className="w-full rounded-none"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Members.detail.png"
                alt="Members Detail"
                className="w-full rounded-none"
                loading="lazy"
                decoding="async"
              />
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Population%20Builder%20Landing%20Page.png"
                alt="Population Builder Landing Page"
                className="w-full rounded-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;
