import React from 'react';
import { Bot, Globe, Box, Smartphone, Users, Building2, Mic2, Target, ArrowRight } from 'lucide-react';
import PageBreadcrumb from './PageBreadcrumb';
import SectionCTA from './SectionCTA';

interface WorkWithMeProps {
  setCurrentPage: (page: string) => void;
}

const engagements = [
  {
    id: 'agentic-experience',
    icon: Bot,
    label: 'Agentic Experience',
    description: 'AI-native product design and UX leadership.',
    detail: 'Trust models, mental model mapping, and interaction patterns for products where AI is a first-class participant.',
    tag: 'AI & Emerging',
  },
  {
    id: 'enterprise-ux-consulting',
    icon: Building2,
    label: 'Enterprise UX Consulting',
    description: 'Senior UX expertise for complex enterprise products.',
    detail: 'Platform redesign, stakeholder alignment, UX audit, and design systems for B2B software teams.',
    tag: 'Project or Retainer',
  },
  {
    id: 'fractional-saas-designer',
    icon: Users,
    label: 'Fractional SaaS Designer',
    description: 'Senior design leadership on a flexible cadence.',
    detail: 'Embedded part-time design director capacity — for teams that need senior judgment without a full-time hire.',
    tag: 'Ongoing Retainer',
  },
  {
    id: 'saas-product-design',
    icon: Box,
    label: 'SaaS Product Design',
    description: 'Scalable interfaces for software products.',
    detail: 'End-to-end product design from IA and flows through high-fidelity specs and dev handoff.',
    tag: 'Project-based',
  },
  {
    id: 'marketing-web-design',
    icon: Globe,
    label: 'Marketing Web Design',
    description: 'Conversion-focused websites that tell your story.',
    detail: 'Narrative architecture first, then design — so the site converts because it communicates clearly.',
    tag: 'Project-based',
  },
  {
    id: 'mobile-web-design',
    icon: Smartphone,
    label: 'Mobile & Web Design',
    description: 'Responsive experiences that shine on every device.',
    detail: 'Mobile-first design from 375px up. iOS and Android patterns, cross-device flows, dev-ready specs.',
    tag: 'Project-based',
  },
  {
    id: 'speaking-workshops',
    icon: Mic2,
    label: 'Speaking & Workshops',
    description: 'Talks and facilitated workshops for teams.',
    detail: 'Conference talks and half- or full-day workshops on AI design, design systems, and enterprise UX.',
    tag: 'Event or Team',
  },
  {
    id: 'strategy-sessions',
    icon: Target,
    label: 'Strategy Sessions',
    description: 'Focused time with a senior design mind.',
    detail: 'Design audits, AI UX strategy, and advisory sessions. Come with a specific question; leave with a direct answer.',
    tag: 'Single Session',
  },
];

const process = [
  { step: '01', label: 'Reach out', body: 'Send a brief description of your product, your challenge, and what you are trying to accomplish. No deck required.' },
  { step: '02', label: 'Discovery call', body: 'A 30-minute conversation to make sure we are aligned on the problem and that I am the right person to help. Fast and no-pressure.' },
  { step: '03', label: 'Scope of work', body: 'I share an engagement recommendation — format, timeline, deliverables, and rate. Specific, not templated.' },
  { step: '04', label: 'Kickoff', body: 'Once aligned, we start. The first session is always about listening — not showing you a direction before I understand the problem.' },
];

const whoIWorkWith = [
  { label: 'Enterprise SaaS teams', body: 'Product teams at B2B companies who have outgrown their current design capacity or are navigating a major platform evolution.' },
  { label: 'AI-first product companies', body: 'Teams building products where AI is a core capability — not a bolt-on feature — who need senior design perspective on the interaction and trust model.' },
  { label: 'Founders and growth-stage startups', body: 'Founders who need senior design judgment at a critical inflection point: entering enterprise, redesigning for scale, or shipping a new product line.' },
  { label: 'Design leaders', body: 'Heads of design and VP-level leaders who need a senior sounding board, workshop facilitation, or embedded capacity for a specific initiative.' },
];

const WorkWithMe: React.FC<WorkWithMeProps> = ({ setCurrentPage }) => {
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
          <PageBreadcrumb
            items={[{ label: 'Services', pageId: 'services' }, { label: 'Work With Me' }]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">Engagements</p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Let's find the right engagement.
              </h1>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                Whether you need a full-scale platform redesign, fractional design leadership, a focused workshop, or a single strategy session — I offer several ways to work together. Engagements are scoped to the problem, not the other way around.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                { stat: 'Limited', label: 'Engagements at a time' },
                { stat: 'Remote', label: 'Collaboration by default' },
                { stat: 'Direct', label: 'You work with me, not a team' },
                { stat: 'Fast', label: 'Response within 24 hours' },
              ].map((item) => (
                <div key={item.label} className="bg-tan dark:bg-neutral-900 p-6">
                  <p className="text-xl font-semibold text-ink dark:text-white mb-1">{item.stat}</p>
                  <p className="text-xs text-muted dark:text-neutral-500 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement types */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Ways to engage</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">Choose your format.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {engagements.map((eng) => {
              const Icon = eng.icon;
              return (
                <button
                  key={eng.id}
                  onClick={() => handleNav(eng.id)}
                  className="group text-left bg-white dark:bg-neutral-950 p-8 hover:bg-tan dark:hover:bg-neutral-900 transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="w-5 h-5 text-blue dark:text-lavender" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-muted dark:text-neutral-500 border border-line dark:border-white/10 px-2 py-0.5 flex-shrink-0">
                      {eng.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-ink dark:text-white mb-2 group-hover:text-blue dark:group-hover:text-lavender transition-colors">
                    {eng.label}
                  </h3>
                  <p className="text-xs text-muted dark:text-neutral-500 mb-4 leading-relaxed">{eng.detail}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-blue dark:text-lavender">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who I work with */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Who this is for</p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">The right fit for working together.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {whoIWorkWith.map((item) => (
              <div key={item.label} className="bg-white dark:bg-neutral-950 p-8">
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{item.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we get started */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">How we get started</p>
              <h2 className="text-2xl font-semibold text-ink dark:text-white mb-6 leading-snug">Simple, fast, no surprises.</h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                The intake process is lightweight by design. I work with a limited number of clients, so every conversation starts with making sure I am the right person to help — before either of us commits to anything.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {process.map((p) => (
                <div key={p.step} className="bg-white dark:bg-neutral-950 p-8 border border-line dark:border-white/10">
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-4">{p.step}</p>
                  <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{p.label}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionCTA
        heading="Ready to get started?"
        body="I work with a limited number of engagements at a time. Reach out with a brief description of what you're working on."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="See My Work"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default WorkWithMe;
