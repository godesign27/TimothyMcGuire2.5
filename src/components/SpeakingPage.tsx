import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';

interface SpeakingPageProps {
  setCurrentPage: (page: string) => void;
}

const talkTopics = [
  {
    title: 'AI-Native UX: Designing for Systems That Think',
    description: "What changes when the product makes decisions? A practical framework for trust, explainability, and human override in AI-powered interfaces. Aimed at product and design teams shipping AI features.",
    formats: ['Conference keynote', 'Workshop (half-day)', 'Internal team session'],
    duration: '30–60 min',
  },
  {
    title: 'Agentic Workflow Design: When the AI Acts',
    description: "The UX of autonomous agents is unlike anything we've designed before. This talk covers the critical design decisions — feedback loops, approval flows, error recovery — that determine whether an agentic system earns user trust.",
    formats: ['Conference talk', 'Executive briefing'],
    duration: '25–45 min',
  },
  {
    title: 'Design Systems That Last: Governance, Adoption, and the Long Game',
    description: "Most design systems fail in year two, not year one. This talk covers what separates systems that get adopted from systems that get abandoned — with specific attention to enterprise and multi-team environments.",
    formats: ['Conference talk', 'Workshop (full-day)'],
    duration: '30–45 min',
  },
  {
    title: 'Enterprise UX at Scale: Designing for Complexity Without Showing It',
    description: "Enterprise software is hard to design not because of bad intent, but because of structural complexity. This talk covers the mental models, IA patterns, and design principles that make complex systems feel manageable.",
    formats: ['Conference talk', 'Internal team session', 'Executive offsite'],
    duration: '30–50 min',
  },
];

const audiences = [
  {
    label: 'Product & Design Teams',
    description: 'Practical sessions on AI UX, design systems, and cross-functional collaboration that teams can apply immediately.',
  },
  {
    label: 'Design Conferences',
    description: "Talks on the state of AI product design, enterprise UX, and where the discipline is heading — grounded in real product work, not speculation.",
  },
  {
    label: 'Executive Offsites',
    description: 'Strategic briefings on AI design maturity, UX investment, and what separates products that users trust from products that frustrate them.',
  },
  {
    label: 'Workshops',
    description: 'Facilitated half-day or full-day sessions on AI-native design, design system governance, or enterprise UX strategy.',
  },
];

const SpeakingPage: React.FC<SpeakingPageProps> = ({ setCurrentPage }) => {
  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[
              { label: 'Perspectives', pageId: 'perspectives' },
              { label: 'Speaking' },
            ]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">
                Speaking
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Talks on AI design, enterprise UX, and the craft of building intelligent products.
              </h1>
              <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed mb-8">
                I speak at product and design events, internal team sessions, and executive offsites. My talks are grounded in real project experience — not trend-chasing.
              </p>
              <button
                onClick={() => setCurrentPage('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                Book a talk <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-px bg-line dark:bg-white/10">
              {[
                { stat: '15+', label: 'Years of enterprise design practice' },
                { stat: 'B2B', label: 'Enterprise, SaaS, and AI-native focus' },
                { stat: '4', label: 'Core talk formats available' },
                { stat: 'All', label: 'Custom workshop development on request' },
              ].map((item) => (
                <div key={item.label} className="bg-tan dark:bg-neutral-900 p-6">
                  <p className="text-2xl font-semibold text-ink dark:text-white mb-1">{item.stat}</p>
                  <p className="text-xs text-muted dark:text-neutral-500 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talk topics */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
              Talk Topics
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug">
              Available talks and workshops.
            </h2>
          </div>
          <div className="space-y-px bg-line dark:bg-white/10">
            {talkTopics.map((talk) => (
              <div key={talk.title} className="grid lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
                <div className="lg:col-span-2 bg-white dark:bg-neutral-950 p-8 lg:p-10">
                  <h3 className="text-base font-semibold text-ink dark:text-white mb-3 leading-snug">
                    {talk.title}
                  </h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                    {talk.description}
                  </p>
                </div>
                <div className="bg-tan dark:bg-neutral-900 p-8 lg:p-10">
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">
                      Duration
                    </p>
                    <p className="text-sm text-ink dark:text-white">{talk.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-2">
                      Formats
                    </p>
                    <ul className="space-y-1">
                      {talk.formats.map((f) => (
                        <li key={f} className="text-sm text-ink dark:text-white">{f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">
              Who I speak for
            </p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">
              The right fit depends on the audience.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10">
            {audiences.map((audience) => (
              <div key={audience.label} className="bg-white dark:bg-neutral-950 p-8">
                <h3 className="text-sm font-semibold text-ink dark:text-white mb-3">{audience.label}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Related"
        items={[
          {
            id: 'speaking-workshops',
            eyebrow: 'Service',
            label: 'Speaking & Workshops',
            description: 'Full service details, workshop formats, and facilitation offerings.',
          },
          {
            id: 'perspectives-writing',
            eyebrow: 'Writing',
            label: 'Writing',
            description: 'Articles and essays on design, AI, and enterprise products.',
          },
          {
            id: 'perspectives-ai-native-design',
            eyebrow: 'AI-Native Design',
            label: 'AI-Native Design',
            description: 'My thinking on designing products where AI is a first-class participant.',
          },
        ]}
      />

      <SectionCTA
        heading="Book a talk or workshop."
        body="Tell me about your event, team size, and what you want the audience to walk away with. I'll get back to you within 48 hours."
        primaryLabel="Get in Touch"
        primaryPage="contact"
        secondaryLabel="See All Services"
        secondaryPage="services"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default SpeakingPage;
