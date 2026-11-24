import React from 'react';
import { Brain, Users, Lightbulb, Sparkles, Heart, Award, TrendingUp, MessageSquare } from 'lucide-react';
import SectionCTA from './SectionCTA';
import {
  aboutHeadline,
  aboutIntro,
  backgroundTitle,
  background,
  beliefs,
  values as aboutValues,
  career,
  type AboutValue,
} from '../data/about';

interface AboutProps {
  setCurrentPage: (page: string) => void;
}

/* Icons live here, not in the data module, which stays React free so the
   services assistant's Worker bundle can import it. */
const VALUE_ICONS: Record<AboutValue['key'], typeof Brain> = {
  'human-centered': Brain,
  collaboration: Users,
  impact: Lightbulb,
  simplicity: Sparkles,
  accessibility: Heart,
};

const values = aboutValues.map(value => ({ ...value, icon: VALUE_ICONS[value.key] }));

const About: React.FC<AboutProps> = ({ setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const handleNav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">About</p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                {aboutHeadline}
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed mb-8">
                {aboutIntro}
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => handleNav('contact')}
                  className="px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  Get in touch
                </button>
                <button
                  onClick={() => handleNav('resume')}
                  className="px-6 py-3 border border-line dark:border-white/20 text-ink dark:text-white text-sm font-medium hover:bg-tan dark:hover:bg-white/5 transition-colors"
                >
                  View resume
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://img1.wsimg.com/isteam/ip/8750adee-7fef-47ca-9c3a-3982c0b9d811/Timothy-McGuire.png/:/rs=w:740,cg:true,m"
                alt="Timothy McGuire"
                className="w-full border border-line dark:border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personal narrative */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">Background</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">{backgroundTitle}</h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                {background.map(paragraph => <p key={paragraph.slice(0, 32)}>{paragraph}</p>)}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">What I believe</p>
              <div className="space-y-px bg-line dark:bg-white/10">
                {beliefs.map((item) => (
                  <div key={item.label} className="bg-white dark:bg-neutral-950 p-6">
                    <p className="text-sm font-semibold text-ink dark:text-white mb-2">{item.label}</p>
                    <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Experience</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Where I have worked.</h2>
          </div>
          <div className="space-y-px bg-line dark:bg-white/10">
            {career.map((item) => (
              <div key={item.company} className="grid lg:grid-cols-3 bg-white dark:bg-neutral-950">
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-line dark:border-white/10">
                  <p className="text-base font-semibold text-ink dark:text-white mb-1">{item.company}</p>
                  <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest">{item.role}</p>
                  <p className="text-xs text-muted dark:text-neutral-500 mt-1">{item.tenure}</p>
                </div>
                <div className="lg:col-span-2 p-8">
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Leadership */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">Design leadership experience.</h2>
            <p className="text-base text-muted dark:text-neutral-400 max-w-2xl leading-relaxed">
              Throughout my career I have led design functions, mentored junior designers, and built the processes that let cross-functional teams move faster without losing quality.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10">
            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <Award className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">Principal & Lead Experience</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Served as Principal UX Designer and Design Manager at multiple organizations, owning end-to-end design strategy from discovery through delivery.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <TrendingUp className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">Cross-Functional Alignment</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Experienced at aligning product, engineering, data science, and executive stakeholders on design direction. Design decisions that stick because the right people were in the room.
              </p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-8">
              <div className="w-10 h-10 bg-tan dark:bg-white/5 flex items-center justify-center mb-6">
                <MessageSquare className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">Mentorship & Culture</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                Committed to building design cultures where craft is celebrated and junior designers grow through mentorship and feedback, not just by watching senior work happen around them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Values</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white mb-4">What I hold to.</h2>
            <p className="text-base text-muted dark:text-neutral-400 max-w-2xl leading-relaxed">
              Every project starts with a simple question: how can we make this better for the user? These are the principles that guide the answer.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line dark:bg-white/10">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white dark:bg-neutral-950 p-6">
                  <div className="w-8 h-8 bg-tan dark:bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-blue dark:text-lavender" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-ink dark:text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-muted dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 max-w-2xl">
            <p className="text-xl italic text-muted dark:text-neutral-400 leading-relaxed">
              "I'm not just creating digital products; I'm crafting experiences that connect, inspire, and endure."
            </p>
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Want to work together?"
        body="I take on a limited number of engagements at a time. Tell me about your project and what you're trying to accomplish."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="See My Work"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default About;
