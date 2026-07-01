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
            Redesigning the Onboarding Journey to Inspire Confidence from Day One.
          </h1>
          <p className="text-xl text-muted dark:text-neutral-400 max-w-4xl mb-12">
            The Accenture Employee Onboarding experience for its 500K employees was reimagined to provide clarity, connection, and confidence for every new hire.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-9 relative bg-white border border-line dark:border-white/10 overflow-hidden aspect-[4/3] lg:aspect-auto">
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/onboarding-accenture-hero.png"
                alt="Employee Onboarding"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-3 flex flex-col items-start">
              <div className="bg-tan dark:bg-neutral-900 p-6 lg:p-8 border border-line dark:border-white/10 w-full">
                <h2 className="text-base font-semibold text-ink dark:text-white mb-6">Website Redesign</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Role</p>
                    <p className="text-sm text-ink dark:text-white font-medium">Senior UX/UI Designer</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Client</p>
                    <p className="text-sm text-ink dark:text-white font-medium">Accenture</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Tools</p>
                    <p className="text-sm text-muted dark:text-neutral-400">Figma, Teams, Jira, PowerPoint</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Services</p>
                    <ul className="text-sm text-muted dark:text-neutral-400 space-y-0.5">
                      <li>User Experience Design</li>
                      <li>User Interface Design</li>
                      <li>Design Library New Pattern Creation</li>
                      <li>Prototype</li>
                      <li>Brand Extension</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Duration</p>
                    <p className="text-sm text-muted dark:text-neutral-400">October 2016 – October 2018</p>
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
                Accenture onboards tens of thousands of employees per year globally. The existing pre-boarding experience was fragmented across multiple systems, creating anxiety and confusion for new hires before they had even started. The goal: a single, unified onboarding platform that made every new hire feel prepared and welcomed from offer acceptance to day one.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-8">
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">My Approach</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Senior UX Designer, I reimagined the onboarding experience through deep empathy work with new hires at multiple career stages — campus hires, laterals, senior leaders. I streamlined task navigation, improved key messaging and milestone communication, and built a consistent, accessible design system that extended Accenture's brand into a new platform context.
              </p>
            </div>
            <div className="bg-tan dark:bg-neutral-900 p-8">
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">Outcome</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A redesigned pre-boarding platform serving 500,000+ employees. Clear task flows, personalized content by hire type, accessible design patterns, and high-fidelity prototypes validated through user testing. New hires consistently reported feeling more prepared and connected to Accenture before their first day.
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
              Simplify complexity and enhance the employee journey from offer to day one.
            </h2>
            <p className="text-lg text-muted dark:text-neutral-400">
              Through clear task flows, accessible design, and personalized content, the solution helped new hires feel prepared, welcomed, and connected — while driving operational efficiency for HR stakeholders.
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
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/before-acc.png" alt="Before" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="lg:col-span-3 bg-white dark:bg-neutral-950 p-6 lg:p-8 border border-line dark:border-white/10">
              {tag('UX Design')}
              <h3 className="text-base font-semibold text-ink dark:text-white mt-6 mb-4">Senior UX/UI Designer</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Senior UX Designer, I reimagined Accenture's onboarding site to make the new hire experience clearer, faster, and more welcoming. I streamlined task navigation, improved key messaging, and built a consistent, accessible design system — backed by user research and high-fidelity prototypes to support a smooth pre-boarding journey.
              </p>
            </div>
            <div className="lg:col-span-3 bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('Persona')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/accenture-persona.png" alt="Persona" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Two-col: Empathy Map + Photography */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UX Strategy')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/empathy-map-acc.png" alt="Empathy Map" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UI Design')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/photography.png" alt="Photography" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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

      {/* Wireframe + Photography */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UX Design')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/wireframe-site.png" alt="Wireframe" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UI Design')}</div>
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/photography.png" alt="Photography" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/color-palette.png" alt="Color Palette" className="w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Task Card Component */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tan dark:bg-neutral-900 border border-line dark:border-white/10 p-6 lg:p-8">
            <div className="flex gap-2 mb-4">{tag('UI Design')}{tag('Component Definition')}</div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mb-6">Task Card Component</h2>
            <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/task-cards3.png" alt="Task Cards Component" className="w-full object-cover" loading="lazy" decoding="async" />
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
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/Countdown-Home-29-left-get.png" alt="Countdown Home" className="w-full" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/Countdown-Home-Redefine-1f.png" alt="Countdown Home Redefine" className="w-full" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/Countdown-Home-Redefine-1a.png" alt="Countdown Home Redefine Alt" className="w-full" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/Countdown-SSO.png" alt="Countdown SSO" className="w-full" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/Countdown-Task%20list-inprogress-toast.png" alt="Countdown Task List" className="w-full" />
              <img src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/onboarding-accenture-hero.png" alt="Onboarding Hero" className="w-full" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyDetail;
