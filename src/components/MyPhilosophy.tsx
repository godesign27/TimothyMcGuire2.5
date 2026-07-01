import React from 'react';
import PageBreadcrumb from './PageBreadcrumb';
import RelatedContent from './RelatedContent';
import SectionCTA from './SectionCTA';

interface MyPhilosophyProps {
  setCurrentPage: (page: string) => void;
}

const principles = [
  {
    number: '01',
    heading: 'Clarity over cleverness',
    body: "Design that needs explaining has already failed. The best interfaces are invisible — they put users in flow without demanding attention or training. I measure my work not by how impressive it looks in a portfolio review, but by how quickly a real user accomplishes a real goal. Clever is a trap. Clarity is the discipline.",
  },
  {
    number: '02',
    heading: 'Complexity belongs in the system, not the screen',
    body: "Enterprise software is inherently complex. The mistake is letting that complexity leak into the interface. My job is to absorb it — through information architecture, smart defaults, progressive disclosure, and system design — so the person using the product never has to feel the weight of what's underneath. Hidden complexity is good design.",
  },
  {
    number: '03',
    heading: 'Trust is earned through detail',
    body: "Users notice inconsistencies before they notice elegance. A misaligned button, an error message that says nothing useful, a loading state that gives no feedback — each one chips away at confidence. I treat polish as a functional requirement, not a finishing touch. The reliability of the small things builds the trust that carries the large ones.",
  },
  {
    number: '04',
    heading: 'Systems thinking from day one',
    body: "Every interface is part of a larger whole. I design with constant awareness of the ecosystem — the product, the team's velocity, the roadmap, the edge cases that will inevitably arrive. A component that solves only today's problem creates tomorrow's debt. I build for the version of the product that exists three releases from now.",
  },
  {
    number: '05',
    heading: 'Users are not edge cases',
    body: "Accessibility and inclusion are not afterthoughts — they are the baseline from which good design starts. When I design for someone using a screen reader, or in low light, or under cognitive load, or with one hand free, I am not designing for an edge case. I am designing for the full range of human conditions in which a product is used. That constraint makes the design better for everyone.",
  },
  {
    number: '06',
    heading: 'Designers are translators',
    body: "Enterprise software fails users not because of bad technology, but because no one translated the complexity into something human. That is my fundamental role: to sit between the system and the person, and make the system legible. This means understanding the business logic deeply enough to simplify it honestly — not to oversimplify it, but to find the true minimum that serves the user's mental model.",
  },
];

const MyPhilosophy: React.FC<MyPhilosophyProps> = ({ setCurrentPage }) => {
  return (
    <main className="min-h-screen bg-tan-100 dark:bg-neutral-950">

      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24 border-b border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PageBreadcrumb
            items={[
              { label: 'Perspectives', pageId: 'perspectives' },
              { label: 'My Philosophy' },
            ]}
            setCurrentPage={setCurrentPage}
          />
          <div className="grid lg:grid-cols-2 gap-16 items-end pt-8">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">
                Philosophy
              </p>
              <h1 className="text-4xl sm:text-5xl font-semibold text-ink dark:text-tan-500 tracking-tight leading-tight mb-6">
                Design is a translation act.
              </h1>
              <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed max-w-xl">
                A set of principles I've built over 15 years of designing enterprise products. These aren't rules I follow — they're observations about what makes design work in the real world.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="border-l-2 border-blue pl-8 space-y-2">
                <p className="text-sm text-muted dark:text-neutral-400 italic leading-relaxed">
                  "The best interfaces are invisible. They put users in flow without demanding attention."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-px bg-line dark:bg-white/10">
            {principles.map((p) => (
              <div key={p.number} className="bg-white dark:bg-neutral-950 p-10">
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-widest mb-6">
                  {p.number}
                </p>
                <h2 className="text-lg font-semibold text-ink dark:text-white mb-4 leading-snug">
                  {p.heading}
                </h2>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended reflection */}
      <section className="bg-tan dark:bg-neutral-900 py-24 border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">
                On the work
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                Why I focus on enterprise.
              </h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>
                  Consumer apps get the design press. Enterprise software gets the users. Hundreds of millions of people spend their working hours inside tools that were designed for procurement committees, not for them. The gap between what those tools demand and what those users deserve is where I do my best work.
                </p>
                <p>
                  Enterprise design is hard in a specific way: there are more stakeholders, more constraints, more legacy, more politics. The design decisions that matter aren't always the visible ones. Sometimes the highest-leverage work is a data model conversation with an engineer at 4pm on a Tuesday.
                </p>
                <p>
                  I find that interesting. I find the puzzle of making something genuinely usable within tight constraints more satisfying than designing with total freedom. Constraints are where craft happens.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-6">
                On AI
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white mb-6 leading-snug">
                Why explainability is the design problem of this decade.
              </h2>
              <div className="space-y-4 text-base text-muted dark:text-neutral-400 leading-relaxed">
                <p>
                  For most of software history, systems were deterministic. Inputs produced predictable outputs. Designers could write interface copy that accurately described what the system would do.
                </p>
                <p>
                  AI breaks that contract. The system makes probabilistic decisions, surfaces uncertain conclusions, and fails in novel ways. The UX problem is not how to show the AI's output — it's how to make users calibrate their trust appropriately. Not too much, not too little.
                </p>
                <p>
                  That requires designing for transparency, for graceful failure, for human override, and for the mental model users will actually hold — which is almost never the technically accurate one. It is, I think, the most interesting design problem of the decade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <RelatedContent
        setCurrentPage={setCurrentPage}
        heading="Continue reading"
        items={[
          {
            id: 'perspectives-how-i-work',
            eyebrow: 'Process',
            label: 'How I Work',
            description: 'My process, collaboration style, and the tools I use to get from problem to shipped product.',
          },
          {
            id: 'perspectives-ai-native-design',
            eyebrow: 'AI-Native Design',
            label: 'Designing for Intelligent Systems',
            description: 'How I think about trust, explainability, and human oversight in AI-powered products.',
          },
          {
            id: 'work-with-me',
            eyebrow: 'Collaboration',
            label: 'Work With Me',
            description: 'Four ways to bring this thinking to your product.',
          },
        ]}
      />

      <SectionCTA
        heading="Want to talk through a design problem?"
        body="I'm happy to discuss design challenges, AI product questions, or what a collaboration could look like."
        primaryLabel="Let's Talk"
        primaryPage="contact"
        secondaryLabel="See My Work"
        secondaryPage="solutions"
        setCurrentPage={setCurrentPage}
      />
    </main>
  );
};

export default MyPhilosophy;
