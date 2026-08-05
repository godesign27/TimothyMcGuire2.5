import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(null);
    setCurrentPage('solutions');
  };

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
              Case Study · Healthcare SaaS · 2016 – 2022
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
              CoreTechs — Turning a developer tool into an enterprise product.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
              Five years as Principal UX Designer and Director, transforming a raw analytics platform into a trusted SaaS product used by healthcare payors and providers.
            </p>
          </div>

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10">
            {[
              { label: 'Role', value: 'Principal UX Designer & Director' },
              { label: 'Client', value: 'Gray Matter Analytics' },
              { label: 'Duration', value: 'Sept 2016 – Sept 2022' },
              { label: 'Industry', value: 'Healthcare SaaS' },
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
          <div className="overflow-hidden border border-line dark:border-white/10">
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/core-hero.png"
              alt="CoreTechs Healthcare Dashboard"
              className="w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* ── Overview: Challenge / Approach / Outcome ──────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">The Challenge</p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Gray Matter Analytics needed to transform complex value-based care data into a platform any clinical leader could use. Existing tools required specialist interpretation. The goal was to make population risk management and contract performance analysis genuinely accessible — without sacrificing depth.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">My Approach</p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                I led the complete design journey from MVP through maturity: user research with healthcare administrators, information architecture for multi-dimensional data, progressive disclosure to surface insight without overwhelming users, and an iterative design system that scaled with the engineering team.
              </p>
            </div>
            <div className="bg-tan-100 dark:bg-neutral-900 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Outcome</p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                A full-featured SaaS healthcare analytics platform — role-based dashboards, contract performance tracking, population risk tools, and a component library that allowed a lean engineering team to ship complex, consistent UI at pace across six years of product growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Principles ────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Design Direction</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Four principles that shaped every decision.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {[
              { title: 'Empowering', desc: 'Every view surfaces meaningful, actionable insight — not raw data.', values: ['Insightful', 'Meaningful', 'Useful'] },
              { title: 'Harmonious', desc: 'Consistent patterns and visual language across every surface.', values: ['Intentional', 'Minimal', 'Elegant'] },
              { title: 'Simple', desc: 'Progressive disclosure keeps complexity out of the way until needed.', values: ['Focused', 'Efficient', 'Prioritized'] },
              { title: 'Learnable', desc: 'Familiar patterns and predictable behavior reduce training overhead.', values: ['Intuitive', 'Familiar', 'Predictable'] },
            ].map((p) => (
              <div key={p.title} className="bg-white dark:bg-neutral-950 p-8">
                <div className="w-6 h-[3px] bg-blue mb-6" />
                <h3 className="text-xl font-semibold text-ink dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-col gap-1.5">
                  {p.values.map((v) => (
                    <span key={v} className="text-xs font-medium text-blue">{v}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before / After ───────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Starting Point</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Understanding what we inherited.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950">
              <div className="overflow-hidden">
                <img
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/before.png"
                  alt="Before state of CoreTechs"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 border-t border-line dark:border-white/10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Before</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  A developer-built interface optimized for engineers, not clinical administrators. Dense, hard to interpret, and requiring expert context to extract any value.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-950">
              <div className="overflow-hidden">
                <img
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/healthcare-user.png"
                  alt="Target user persona"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 border-t border-line dark:border-white/10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Target User</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  Healthcare administrators and clinical leaders managing population risk — not data scientists. The product needed to meet them where they were.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UX Process ───────────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">UX Process</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              From research to architecture.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950">
              <div className="overflow-hidden">
                <img
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/requirements.png"
                  alt="UX Strategy and Requirements"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 border-t border-line dark:border-white/10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">UX Strategy</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  Requirements mapping, user interviews, and competitive analysis to align business goals with clinical workflows before a single wireframe was drawn.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-950">
              <div className="overflow-hidden">
                <img
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/site-map.png"
                  alt="Information Architecture / Site Map"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 border-t border-line dark:border-white/10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Information Architecture</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  A full site map and navigation model that organized six product modules around how clinical leaders actually think about their data — not how the database was structured.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wireframe + UI Design ─────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">UI Design</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              From wireframe to visual system.
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-px bg-line dark:bg-white/10 mb-px">
            <div className="bg-white dark:bg-neutral-950">
              <div className="overflow-hidden">
                <img
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/wireframe.png"
                  alt="Wireframes"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 border-t border-line dark:border-white/10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Wireframes</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  Low-fidelity wireframes validated information hierarchy and navigation flow with clinical stakeholders before committing to visual design.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-neutral-950">
              <div className="overflow-hidden">
                <img
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/color-harmony%20(1).png"
                  alt="Color System"
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 border-t border-line dark:border-white/10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">Color System</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  A healthcare-appropriate palette built for data-dense interfaces — high contrast for status indicators, calm neutrals for primary surfaces, accessible at every level.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-tan-100 dark:bg-neutral-900 border border-line dark:border-white/10 p-10">
            <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-6">Color Palette</p>
            <img
              src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/colorpalette2.png"
              alt="Color Palette"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Component Library ────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Design System</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-6">
                A component library built for scale.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-6">
                With a small engineering team and a growing product surface, we needed a component library that was both flexible and opinionated enough to keep the UI consistent without constant design review.
              </p>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Every component was documented with states, variants, usage rules, and handoff specs — allowing engineers to build independently while maintaining visual integrity across six product modules.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 border border-line dark:border-white/10 p-8">
              <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-6">Button Component</p>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/button-component.png"
                alt="Button Component Documentation"
                className="w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Designs ────────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">Final Designs</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Six years of shipped product.
            </h2>
          </div>
          <div className="space-y-px bg-line dark:bg-white/10">
            {[
              { src: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Dashboard%20-%20Summary.png', alt: 'Dashboard Summary', caption: 'Population Dashboard — the primary view for clinical administrators managing risk across member populations.' },
              { src: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detail-overview.png', alt: 'Measure Detail Overview', caption: 'Measure Detail — drill-down view surfacing individual performance metrics against contract benchmarks.' },
              { src: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Measure-detailcard-practices.png', alt: 'Measure Detail Practices', caption: 'Practice-level performance cards — enabling administrators to identify and address outliers quickly.' },
              { src: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Members.detail.png', alt: 'Members Detail', caption: 'Member detail view — longitudinal risk tracking for individual patients across care episodes.' },
              { src: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Coretechs/Population%20Builder%20Landing%20Page.png', alt: 'Population Builder', caption: 'Population Builder — a configurable cohort tool allowing payors to segment and analyze member populations without engineering support.' },
            ].map(({ src, alt, caption }) => (
              <div key={alt} className="bg-white dark:bg-neutral-950">
                <div className="overflow-hidden border-b border-line dark:border-white/10">
                  <img src={src} alt={alt} className="w-full object-cover" loading="lazy" decoding="async" />
                </div>
                <div className="px-8 py-6">
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed max-w-3xl">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services delivered ───────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Scope of Work</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-6">
                Full-lifecycle design leadership.
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Over six years I owned design end-to-end — from initial user research through to design system governance — acting as both practitioner and director depending on the phase of the product.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                'User Experience Design',
                'User Interface Design',
                'Design Library Creation',
                'Prototyping',
                'Brand Development',
                'Logo Design',
              ].map((s) => (
                <div key={s} className="bg-white dark:bg-neutral-950 px-6 py-5">
                  <div className="w-4 h-[2px] bg-blue mb-3" />
                  <p className="text-sm font-medium text-ink dark:text-white">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Next project CTA ─────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-3">What's Next</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
                Interested in working together?
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <button
                onClick={() => { window.scrollTo(0,0); setSelectedCaseStudy(null); setCurrentPage('solutions'); }}
                className="inline-flex items-center gap-2 text-sm font-medium text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> All case studies
              </button>
              <button
                onClick={() => { window.scrollTo(0,0); setCurrentPage('work-with-me'); }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Work with me <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CaseStudyDetail;
