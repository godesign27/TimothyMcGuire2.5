import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBackClick = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(null);
    setCurrentPage('solutions');
  };

  const tag = (label: string) => (
    <span className="inline-flex items-center px-3 py-1 bg-ink dark:bg-neutral-800 text-white text-xs font-medium">
      {label}
    </span>
  );

  return (
    <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Solutions
          </button>

          <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">Case Study</p>
          <h1 className="text-4xl md:text-6xl font-semibold text-ink dark:text-tan-500 tracking-tight mb-6 leading-tight">
            Transform Healthcare Decisions with<br />Data-Driven Insights.
          </h1>
          <p className="text-xl text-muted dark:text-neutral-400 max-w-4xl mb-12">
            Unlock contract value, optimize performance, and manage population risk — all in one platform.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-9 relative bg-white border border-line dark:border-white/10 overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/core-hero.png"
                alt="Healthcare Dashboard"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-3 flex flex-col items-start">
              <div className="bg-tan dark:bg-neutral-900 p-6 lg:p-8 border border-line dark:border-white/10 w-full">
                <h2 className="text-base font-semibold text-ink dark:text-white mb-6">SaaS Product Solution</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Role</p>
                    <p className="text-sm text-ink dark:text-white font-medium">Principal UX Designer + UX Director + Creative Director</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Client</p>
                    <p className="text-sm text-ink dark:text-white font-medium">Gray Matter Analytics</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Tools</p>
                    <p className="text-sm text-muted dark:text-neutral-400">Sketch, Figma, Zeplin, Teams, Jira, InVision</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Services</p>
                    <ul className="text-sm text-muted dark:text-neutral-400 space-y-0.5">
                      <li>User Experience Design</li>
                      <li>User Interface Design</li>
                      <li>Design Library Creation</li>
                      <li>Prototype</li>
                      <li>Brand Development</li>
                      <li>Logo Design</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Duration</p>
                    <p className="text-sm text-muted dark:text-neutral-400">Sept 2016 – Sept 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial context */}
      <section className="py-16 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950 p-8">
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">The Challenge</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Gray Matter Analytics needed to transform complex value-based care data into a platform that healthcare administrators could actually use. The existing tools required specialist interpretation — the goal was to make population risk management and contract performance analysis accessible to any clinical leader.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-8">
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">My Approach</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Principal UX/UI Designer from MVP through to a mature product, I drove the complete design journey: user research with healthcare administrators, information architecture for complex multi-dimensional data, progressive disclosure to surface insight without overwhelming users, and an iterative design system that scaled across the product.
              </p>
            </div>
            <div className="bg-tan dark:bg-neutral-900 p-8">
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">Outcome</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A full-featured SaaS healthcare analytics platform built from the ground up. Role-based dashboards, contract performance tracking, population risk tools, and a design library that enabled a small engineering team to ship consistently complex UI with speed and quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tan dark:bg-neutral-900 p-6 lg:p-12 border border-line dark:border-white/10">
            {tag('The Strategy')}
            <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mt-6 mb-4">
              Provide patient management through intuitive design and powerful functionality.
            </h2>
            <p className="text-lg text-muted dark:text-neutral-400">
              A comprehensive solution that puts healthcare professionals first.
            </p>
          </div>
        </div>
      </section>

      {/* Three-col: Before / Role / Persona */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-6 bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('Before')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/before.png" alt="Before" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="lg:col-span-3 bg-white dark:bg-neutral-950 p-6 lg:p-8 border border-line dark:border-white/10">
              {tag('UX Design')}
              <h3 className="text-base font-semibold text-ink dark:text-white mt-6 mb-4">Principal UX/UI Designer</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Principal UX/UI Designer, I shaped Coretechs' MVP by driving the complete design journey — translating business needs into a user-centered product through research, problem-solving, empathy, design iteration, and prototyping.
              </p>
            </div>
            <div className="lg:col-span-3 bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('Persona')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/healthcare-user.png" alt="Healthcare Professional" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Two-col: Strategy + Site Map */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UX Strategy')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/requirements.png" alt="Requirements" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10 flex gap-2">{tag('UX Design')}{tag('Site Map')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/site-map.png" alt="Site Map" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {tag('Design Direction')}
          <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mt-6 mb-12">Design Principles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {[
              { title: 'Empowering', values: ['Insightful', 'Meaningful', 'Useful'] },
              { title: 'Harmonious', values: ['Intentional', 'Minimal', 'Elegant'] },
              { title: 'Simple', values: ['Focused', 'Efficient', 'Prioritized', 'Progressive Disclosure'] },
              { title: 'Learnable', values: ['Intuitive', 'Familiar', 'Predictable', 'Usable'] },
            ].map((p) => (
              <div key={p.title} className="bg-tan dark:bg-neutral-900 border border-line dark:border-white/10 p-6 lg:p-8">
                <h3 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mb-6">{p.title}</h3>
                <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                  {p.values.map((v) => <span key={v} className="text-base text-ink dark:text-white">{v}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wireframe + Color */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UX Design')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/wireframe.png" alt="Wireframe" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UI Design')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/color-harmony%20(1).png" alt="Color Harmony" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tan dark:bg-neutral-900 border border-line dark:border-white/10 p-6 lg:p-8">
            {tag('UI Design')}
            <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mt-4 mb-6">Color Palette</h2>
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/colorpalette2.png" alt="Color Palette" className="w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Button Component */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tan dark:bg-neutral-900 border border-line dark:border-white/10 p-6 lg:p-8">
            <div className="flex gap-2 mb-4">{tag('UI Design')}{tag('Component Definition')}</div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mb-6">Button Component</h2>
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/button-component.png" alt="Button Component" className="w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Final Page Designs */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 p-6 lg:p-8">
            <div className="flex gap-2 mb-4">{tag('UI Design')}{tag('Final Designs')}</div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mb-6">Page Designs</h2>
            <div className="space-y-6">
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png" alt="Dashboard Summary" className="w-full" loading="lazy" decoding="async" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detail-overview.png" alt="Measure Detail Overview" className="w-full" loading="lazy" decoding="async" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detailcard-practices.png" alt="Measure Detail Card Practices" className="w-full" loading="lazy" decoding="async" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Members.detail.png" alt="Members Detail" className="w-full" loading="lazy" decoding="async" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Population%20Builder%20Landing%20Page.png" alt="Population Builder Landing Page" className="w-full" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyDetail;
