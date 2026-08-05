import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ImageWithSkeleton from './ui/ImageWithSkeleton';

interface CaseStudyDetailProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string | null) => void;
}

const CaseStudyDetail2: React.FC<CaseStudyDetailProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleBack = () => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy(null);
    setCurrentPage('solutions');
  };

  const base = 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Accenture/';

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
              Case Study · Enterprise HR · 2016 – 2018
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ink dark:text-white leading-tight tracking-tight mb-6">
              Redesigning the Onboarding Journey to Inspire Confidence from Day One.
            </h1>
            <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-2xl">
              Two years as Senior UX Designer at Accenture, reimagining a fragmented pre-boarding experience into a unified platform trusted by 500,000+ employees worldwide.
            </p>
          </div>

          {/* Meta strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10">
            {[
              { label: 'Role', value: 'Senior UX/UI Designer' },
              { label: 'Client', value: 'Accenture' },
              { label: 'Duration', value: 'Oct 2016 – Oct 2018' },
              { label: 'Industry', value: 'Enterprise HR' },
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
              src={`${base}onboarding-accenture-hero.png`}
              alt="Accenture Employee Onboarding Platform"
              className="w-full object-cover"
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
                Accenture onboards tens of thousands of employees per year globally. The existing pre-boarding experience was fragmented across multiple systems, creating anxiety and confusion for new hires before they had even started. The goal: a single, unified onboarding platform that made every new hire feel prepared and welcomed from offer acceptance to day one.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">My Approach</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                As Senior UX Designer, I reimagined the onboarding experience through deep empathy work with new hires at multiple career stages — campus hires, laterals, senior leaders. I streamlined task navigation, improved milestone communication, and built a consistent, accessible design system that extended Accenture's brand into a new platform context.
              </p>
            </div>
            <div className="bg-tan-100 dark:bg-neutral-900 p-10">
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Outcome</p>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A redesigned pre-boarding platform serving 500,000+ employees. Clear task flows, personalized content by hire type, accessible design patterns, and high-fidelity prototypes validated through user testing. New hires consistently reported feeling more prepared and connected to Accenture before their first day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design Principles ────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Design Direction</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              The principles behind the experience.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {[
              { title: 'Empowering', desc: 'Give every new hire the information they need to feel confident before day one.', attrs: ['Insightful', 'Meaningful', 'Useful'] },
              { title: 'Harmonious', desc: 'Extend Accenture brand with intent — patterns that feel native, not bolted on.', attrs: ['Intentional', 'Minimal', 'Elegant'] },
              { title: 'Simple', desc: 'Reduce the cognitive load of onboarding by prioritizing what matters most now.', attrs: ['Focused', 'Efficient', 'Progressive'] },
              { title: 'Learnable', desc: 'Design familiar patterns so new hires can navigate with confidence from their first click.', attrs: ['Intuitive', 'Familiar', 'Predictable'] },
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

      {/* ── Before + Research ────────────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Before</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">The existing experience.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The original pre-boarding site was task-heavy, visually inconsistent, and lacked clear hierarchy. New hires didn't know where to start, what was required versus optional, or how long tasks would take — creating anxiety at the most critical moment in the employee relationship.
              </p>
            </div>
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Persona Research</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Understanding three types of new hire.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Research identified distinct new hire segments — campus, lateral, and senior leader — each with different needs, timelines, and anxieties. Designing for all three required a flexible content strategy and personalized task routing.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}before-acc.png`} alt="Before — original onboarding experience" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}accenture-persona.png`} alt="Persona — new hire types" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Empathy + Photography ─────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Empathy Mapping</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">What new hires feel, think, and need.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Empathy mapping sessions with new hires across hire types surfaced the emotional arc of onboarding — from excitement at offer acceptance to anxiety about readiness on day one. These insights directly shaped the information hierarchy and messaging strategy.
              </p>
            </div>
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Visual Language</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Photography that connects, not decorates.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The photography system was built to show authentic Accenture culture — real people, real spaces — rather than stock imagery. This signaled that Accenture was a place where the new hire was already expected and welcomed.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}empathy-map-acc.png`} alt="Empathy Map" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}photography.png`} alt="Photography system" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Wireframe + Color Palette ─────────────────────────────── */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">UX Design</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Wireframes that clarify structure.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Low-fidelity wireframes established the task flow hierarchy, navigation model, and content prioritization before any visual design was applied. Iterating at this stage prevented costly rework and aligned stakeholders on structure early.
              </p>
            </div>
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Visual System</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Extending the Accenture brand.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The color palette extended Accenture's core brand identity — high-contrast purple accent on clean white, with accessible neutral tones — into a new platform context without deviation from enterprise brand standards.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}wireframe-site.png`} alt="Wireframes" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}color-palette.png`} alt="Color palette" className="w-full object-cover" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Component Library ────────────────────────────────────── */}
      <section className="bg-tan-100 dark:bg-neutral-900 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-6 h-[3px] bg-blue mb-6" />
              <p className="text-xs font-semibold text-blue uppercase tracking-widest mb-4">Component Library</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Task cards as the primary interaction pattern.</h2>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                The task card was the central UI component — it had to communicate status, urgency, estimated time, category, and action in a single scannable unit. I designed the card system with clear visual states: not started, in progress, complete, and overdue — giving new hires an instant read on where they stood at any moment.
              </p>
              <div className="flex flex-col gap-1">
                {['Status clarity at a glance', 'Accessible color coding + iconography', 'Responsive from mobile to desktop', 'Extensible for multiple task types'].map((item) => (
                  <span key={item} className="text-xs font-medium text-blue dark:text-lavender">{item}</span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden">
              <ImageWithSkeleton src={`${base}task-cards3.png`} alt="Task card component system" className="w-full object-cover" loading="lazy" decoding="async" />
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
            <h2 className="text-2xl font-semibold text-ink dark:text-white">The redesigned onboarding platform.</h2>
          </div>
          <div className="flex flex-col gap-12">
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}Countdown-Home-29-left-get.png`} alt="Countdown dashboard — 29 days out" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The homepage dashboard anchors around a countdown — giving new hires a clear, motivating timeline and surfacing the most urgent tasks without overwhelming them with everything at once.
              </p>
            </div>
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}Countdown-Home-Redefine-1f.png`} alt="Countdown home — Redefine view" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                A personalized "Redefine" state surfaces content tailored to the hire type — campus, lateral, or senior leader — so every new hire sees a journey that feels relevant to them specifically.
              </p>
            </div>
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}Countdown-SSO.png`} alt="Countdown SSO sign-in" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Single sign-on was redesigned to remove friction at first entry — the moment of highest anxiety for a new hire. A clean, welcoming entry point sets the tone for the entire onboarding relationship.
              </p>
            </div>
            <div>
              <div className="overflow-hidden border border-line dark:border-white/10 mb-4">
                <ImageWithSkeleton src={`${base}Countdown-Task%20list-inprogress-toast.png`} alt="Task list — in progress with toast" className="w-full" loading="lazy" decoding="async" />
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                The task list in progress state — with completion toasts — creates a rhythm of small wins, reinforcing that the new hire is making progress and building confidence as they move toward day one.
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
                Two years of embedded UX design work at one of the world's largest professional services firms — driving a platform used by a half-million employees at the most important moment in their career relationship with Accenture.
              </p>
            </div>
            <div className="flex flex-col gap-px bg-line dark:bg-white/10">
              {[
                'User Experience Design',
                'User Interface Design',
                'Design Library & Pattern Creation',
                'High-Fidelity Prototyping',
                'Brand Extension',
                'User Research & Empathy Mapping',
                'Persona Development',
                'Stakeholder Presentations',
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
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} /> Back to Solutions
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

export default CaseStudyDetail2;
