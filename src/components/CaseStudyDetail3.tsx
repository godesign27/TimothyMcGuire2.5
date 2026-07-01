import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

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
            A frictionless journey that seduces and entices patrons to create cocktails.
          </h1>
          <p className="text-xl text-muted dark:text-neutral-400 max-w-4xl mb-12">
            Mobile-led cards, trending rails, and contextual CTAs guide exploration; the recipe page spotlights essentials (glass type, skill level, main spirit) with one-tap actions to save, share, or print. Designed to move users from browse → pick → pour in just a few taps.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-9 relative bg-white border border-line dark:border-white/10 overflow-hidden h-[700px]">
              <ImageWithSkeleton
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg"
                alt="The Cocktail Project by Jim Beam"
                className="w-full h-full object-cover object-top"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="lg:col-span-3 flex flex-col items-start self-start">
              <div className="bg-tan dark:bg-neutral-900 p-6 lg:p-8 border border-line dark:border-white/10 w-full">
                <h2 className="text-base font-semibold text-ink dark:text-white mb-6">New Site Responsive Design</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Role</p>
                    <p className="text-sm text-ink dark:text-white font-medium">Principal UX Designer + UX Director + Creative Visionary</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Client</p>
                    <p className="text-sm text-ink dark:text-white font-medium">Suntory Lab + Jim Beam</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Tools</p>
                    <p className="text-sm text-muted dark:text-neutral-400">Sketch, InVision, Zeplin, MS Word, Slack, PowerPoint, Adobe Suite</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Services</p>
                    <ul className="text-sm text-muted dark:text-neutral-400 space-y-0.5">
                      <li>User Experience Design</li>
                      <li>User Research</li>
                      <li>Content Strategy</li>
                      <li>Design Library Creation</li>
                      <li>Prototype</li>
                      <li>Brand Development</li>
                      <li>Logo Design</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">Duration</p>
                    <p className="text-sm text-muted dark:text-neutral-400">Sept 2016 – Sept 2017</p>
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
                Suntory Lab and Jim Beam needed a digital experience that would turn casual spirit drinkers into engaged cocktail makers. The audience ranged from curious novices to cocktail enthusiasts — and the experience had to serve all of them without feeling complicated. The brand story also needed to be told through the product, not just around it.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-8">
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">My Approach</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Principal UX Designer and Creative Visionary, I built the experience from the ground up: user research to understand the three core audience types (Recipe Searchers, Cocktail Lifestylists, Spirits Enthusiasts), a sitemap and content strategy built around those personas, and a mobile-first design system that used editorial photography and progressive disclosure to guide users naturally toward making a drink.
              </p>
            </div>
            <div className="bg-tan dark:bg-neutral-900 p-8">
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">Outcome</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A fully responsive cocktail destination site with mobile-first card layouts, trending recipe rails, brand landing pages, and a streamlined recipe detail experience. User testing validated that the browse-to-pour flow reduced decision friction significantly — users found a recipe they wanted to make in fewer taps than any previous benchmark.
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
              The right path for every palate.
            </h2>
            <p className="text-lg text-muted dark:text-neutral-400">
              Build the homepage as a gateway for Recipe Searchers, Cocktail Lifestylists, and Spirits Enthusiasts. When the audience sees themselves instantly, they stay, explore, and make a drink — exactly the behavior we designed for.
            </p>
          </div>
        </div>
      </section>

      {/* Three-col: Wireframe / Role / Persona */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-6 bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden h-[600px]">
              <div className="absolute top-6 left-6 z-10">{tag('Built from Scratch')}</div>
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/04-TCP_desktop_wireframe2.png" alt="Desktop Wireframe" className="w-full h-full object-cover object-center" loading="lazy" decoding="async" />
            </div>
            <div className="lg:col-span-3 bg-white dark:bg-neutral-950 p-6 lg:p-8 border border-line dark:border-white/10">
              {tag('UX Design')}
              <h3 className="text-base font-semibold text-ink dark:text-white mt-6 mb-4">Principal UX/UI Designer</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Principal UX/UI Designer, I shaped the solution by driving the complete design journey — translating business needs into a user-centered product. I created a sitemap, wireframes, empathy mapping, design iteration, and prototyping through user testing research.
              </p>
            </div>
            <div className="lg:col-span-3 bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('Persona')}</div>
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/persona2.png" alt="Cocktail Lifestylist" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/strategy_b.png" alt="Strategy" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10 flex gap-2">{tag('UX Design')}{tag('Site Map')}</div>
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/sitemap.png" alt="Site Map" className="w-full h-full object-cover" loading="lazy" decoding="async" />
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

      {/* Wireframe + User Testing */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('UX Design')}</div>
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/04-TCP_desktop_wireframe.jpg" alt="Wireframe" className="w-full h-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 relative overflow-hidden aspect-[4/3] lg:aspect-auto">
              <div className="absolute top-6 left-6 z-10">{tag('User Testing')}</div>
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/user_testing_quotes.png" alt="User Testing Quotes" className="w-full h-full object-center max-w-[500px]" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Homepage Solution */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tan dark:bg-neutral-900 border border-line dark:border-white/10 p-6 lg:p-8">
            {tag('UI Design')}
            <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mt-4 mb-6">Home Page Solution</h2>
            <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_homepage_.jpg" alt="Homepage" className="w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* Recipe Detail */}
      <section className="py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-tan dark:bg-neutral-900 border border-line dark:border-white/10 p-6 lg:p-8">
            <div className="flex gap-2 mb-4">{tag('UI Design')}{tag('Final Design')}</div>
            <h2 className="text-2xl lg:text-4xl font-semibold text-ink dark:text-white mb-6">Recipe Detail</h2>
            <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_recipe_basic_v1.jpg" alt="Recipe Detail" className="w-full object-cover" loading="lazy" decoding="async" />
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
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/cp_mybar.png" alt="My Bar" className="max-w-full h-auto" loading="lazy" decoding="async" />
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_registration_0002_Layer%20Comp%203.jpg" alt="Registration" className="w-full" loading="lazy" decoding="async" />
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_brand_landing_simple_v1.jpg" alt="Brand Landing" className="w-full" loading="lazy" decoding="async" />
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/TCP_desktop_recipe_results_0004_Layer%20Comp%205.jpg" alt="Recipe Results" className="w-full" loading="lazy" decoding="async" />
              <ImageWithSkeleton src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/10-TCP_mobile_recipe.jpg" alt="Mobile Recipe" className="w-full" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyDetail;
