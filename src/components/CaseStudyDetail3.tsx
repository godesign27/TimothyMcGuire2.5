import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

const CaseStudyDetail3: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(null);
    setCurrentPage('case-studies');
  };

  const base = 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/JimBeam/';

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 pt-24 pb-0 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="inline-flex items-center gap-2 text-sm text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Solutions
          </button>

          <div className="max-w-4xl mb-12">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">
              Case Study · Consumer Brand · 2016 – 2017
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
              A frictionless journey that seduces and entices patrons to create cocktails.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
              As Principal UX Designer and Creative Visionary for Suntory Lab and Jim Beam, I built a cocktail destination from the ground up — designed to move users from browse to pick to pour in just a few taps.
            </p>
          </div>

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10">
            {[
              { label: 'Role', value: 'Principal UX Designer & Creative Visionary' },
              { label: 'Client', value: 'Suntory Lab + Jim Beam' },
              { label: 'Duration', value: 'Sept 2016 – Sept 2017' },
              { label: 'Industry', value: 'Consumer Brand' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-tan-100 dark:bg-neutral-950 px-6 py-5">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-1">{label}</p>
                <p className="text-sm font-medium text-ink dark:text-white leading-snug">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero image ───────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="overflow-hidden">
            <ImageWithSkeleton
              src={`${base}TCP_desktop_homepage_.jpg`}
              alt="The Cocktail Project by Jim Beam — homepage"
              className="w-full object-cover object-top"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── Overview ─────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">The Challenge</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Suntory Lab and Jim Beam needed a digital experience that would turn casual spirit drinkers into engaged cocktail makers. The audience ranged from curious novices to cocktail enthusiasts — and the experience had to serve all of them without feeling complicated. The brand story also needed to be told through the product, not just around it.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">My Approach</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                I built the experience from the ground up: user research to understand three core audience types — Recipe Searchers, Cocktail Lifestylists, and Spirits Enthusiasts — a sitemap and content strategy built around those personas, and a mobile-first design system that used editorial photography and progressive disclosure to guide users naturally toward making a drink.
              </p>
            </div>
            <div className="bg-tan-100 dark:bg-neutral-900 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Outcome</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A fully responsive cocktail destination with mobile-first card layouts, trending recipe rails, brand landing pages, and a streamlined recipe detail experience. User testing validated that the browse-to-pour flow reduced decision friction significantly — users found a recipe in fewer taps than any previous benchmark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Principles ────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="w-6 h-[3px] bg-blue mb-6" />
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Design Direction</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              The principles behind the experience.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {[
              { title: 'Empowering', desc: 'Give every user — novice or expert — the right information to feel confident about making a drink.', attrs: ['Insightful', 'Meaningful', 'Useful'] },
              { title: 'Harmonious', desc: 'Let the brand speak through the product. Photography, typography, and layout work together, not separately.', attrs: ['Intentional', 'Minimal', 'Elegant'] },
              { title: 'Simple', desc: 'Remove every step between browsing and making. The path to a drink should feel natural, never like work.', attrs: ['Focused', 'Efficient', 'Progressive'] },
              { title: 'Learnable', desc: 'Familiar card patterns and progressive disclosure let users navigate confidently from their very first visit.', attrs: ['Intuitive', 'Familiar', 'Predictable'] },
            ].map((p) => (
              <div key={p.title} className="bg-white dark:bg-neutral-950 p-8">
                <div className="w-6 h-[3px] bg-blue mb-6" />
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-col gap-1">
                  {p.attrs.map((a) => (
                    <span key={a} className="text-xs font-medium text-blue dark:text-lavender">{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Strategy + Audience ───────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">UX Strategy</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">The right path for every palate.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The homepage needed to act as a gateway for three fundamentally different users. Recipe Searchers know what they want — get out of their way. Cocktail Lifestylists are browsing for inspiration — give them something beautiful. Spirits Enthusiasts want depth — let them go deep. When each audience sees themselves instantly, they stay, explore, and make a drink.
              </p>
            </div>
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Persona Research</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Three audiences. One experience.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Deep persona work identified the three core user types by behavior, not demographics. Each persona had distinct entry points, different decision criteria for recipe selection, and different definitions of a successful session. The design had to honor all three without making any feel underserved.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}strategy_b.png`} alt="UX strategy" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}persona2.png`} alt="Cocktail Lifestylist persona" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Sitemap + Wireframes ──────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-12">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Information Architecture</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Built from the sitemap up.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The site architecture was designed before any wireframe was drawn. Content categories, navigation depth, and page relationships were mapped to ensure every recipe, brand, and spirit had a logical home — and that getting there took as few clicks as possible.
              </p>
            </div>
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">UX Design</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Wireframes that validate the flow.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Wireframes focused on card hierarchy, rail structure, and recipe detail layout. The goal was to validate that the browse-to-pour flow felt natural at low fidelity before committing to visual design — and to surface any points where users might drop off.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}sitemap.png`} alt="Site map" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}04-TCP_desktop_wireframe2.png`} alt="Desktop wireframe" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Designs ────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <div className="w-6 h-[3px] bg-blue mb-6" />
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Final Designs</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">The Cocktail Project — full experience.</h2>
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}TCP_desktop_recipe_basic_v1.jpg`} alt="Recipe detail page" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The recipe detail page puts the essential information up front — glass type, skill level, main spirit — with one-tap actions to save, share, or print. Ingredients and steps are structured for scanning, not reading, so users can move from the screen to the bar without re-reading.
              </p>
            </div>
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}cp_mybar.png`} alt="My Bar — saved recipes" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                My Bar gives users a personal collection of saved recipes — turning the site into a returning destination, not just a one-time search. Saved recipes become a reflection of the user's own cocktail identity, deepening engagement with the brand.
              </p>
            </div>
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}TCP_desktop_brand_landing_simple_v1.jpg`} alt="Brand landing page" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Brand landing pages gave each Jim Beam and Suntory spirit its own editorial space — photography-led, copy-light, and designed to communicate character before promoting products. Spirits Enthusiasts could go deep into provenance, flavor, and cocktail pairings.
              </p>
            </div>
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}TCP_desktop_recipe_results_0004_Layer%20Comp%205.jpg`} alt="Recipe results" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Recipe results use a card-based grid with clear visual hierarchy — image, name, spirit, and difficulty at a glance. Trending rails surface time-relevant suggestions so Recipe Searchers can find something compelling without needing to know exactly what they want.
              </p>
            </div>
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}10-TCP_mobile_recipe.jpg`} alt="Mobile recipe view" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The mobile experience was designed first — the context where most users would actually browse for a recipe. Cards stack vertically, photography leads, and the path from browse to pour required no pinching, zooming, or hunting for the right section.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scope of Work ────────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Scope of Work</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">What I delivered.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A complete consumer cocktail destination designed and built from zero — strategy, research, architecture, visual system, and high-fidelity prototypes — for one of the world's most recognized spirits brands.
              </p>
            </div>
            <div className="flex flex-col gap-px bg-line dark:bg-white/10">
              {[
                'User Experience Design',
                'User Research',
                'Content Strategy',
                'Information Architecture',
                'Design Library Creation',
                'High-Fidelity Prototyping',
                'Brand Development',
                'Logo Design',
              ].map((item) => (
                <div key={item} className="flex items-center gap-4 bg-tan-100 dark:bg-neutral-900 px-6 py-4">
                  <div className="w-4 h-[2px] bg-blue flex-shrink-0" />
                  <span className="text-sm text-ink dark:text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 text-sm text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Case Studies
            </button>
            <button
              onClick={() => { window.scrollTo(0, 0); setCurrentPage('work-with-me'); }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Work with me <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyDetail3;
