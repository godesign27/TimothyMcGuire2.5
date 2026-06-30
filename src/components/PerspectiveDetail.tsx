import React from 'react';
import { ChevronRight, BookOpen, Workflow, Bot, PenLine, Mic2, ArrowRight } from 'lucide-react';

interface PerspectiveDetailProps {
  page: string;
  setCurrentPage: (page: string) => void;
}

const perspectiveConfig: Record<string, {
  label: string;
  subtitle: string;
  accent: string;
  gradient: string;
  icon: React.ElementType;
  iconColor: string;
  sections: { heading: string; body: string }[];
  related: { id: string; label: string; description: string }[];
}> = {
  'perspectives-my-philosophy': {
    label: 'My Philosophy',
    subtitle: 'A set of principles that guide how I approach every design problem.',
    accent: 'text-slate-600 dark:text-slate-400',
    gradient: 'from-slate-50 via-gray-50 to-zinc-100 dark:from-slate-900 dark:via-gray-950 dark:to-zinc-950',
    icon: BookOpen,
    iconColor: 'text-slate-600 dark:text-slate-400',
    sections: [
      { heading: 'Clarity over cleverness', body: "Placeholder copy. Design that needs explaining has already failed. Every decision should make the user's path clearer, not more interesting." },
      { heading: 'Trust is earned through detail', body: 'Placeholder copy. Users notice inconsistencies before they notice elegance. Reliability and polish build the confidence that keeps people coming back.' },
      { heading: 'Systems thinking from day one', body: 'Placeholder copy. Every interface is part of a larger whole. I design with an awareness of the ecosystem — the product, the team, the roadmap.' },
      { heading: 'Users are not edge cases', body: 'Placeholder copy. Accessibility and inclusion are not afterthoughts. They are the baseline from which good design starts.' },
    ],
    related: [
      { id: 'perspectives-how-i-work', label: 'How I Work', description: 'My process, tools, and collaboration style.' },
      { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How I think about designing for AI products.' },
      { id: 'perspectives-writing', label: 'Writing', description: 'Articles and essays on design and systems.' },
    ],
  },
  'perspectives-how-i-work': {
    label: 'How I Work',
    subtitle: 'My process, collaboration style, and the tools I use to get from problem to shipped product.',
    accent: 'text-sky-600 dark:text-sky-400',
    gradient: 'from-sky-50 via-cyan-50 to-blue-100 dark:from-sky-950 dark:via-cyan-950 dark:to-blue-950',
    icon: Workflow,
    iconColor: 'text-sky-600 dark:text-sky-400',
    sections: [
      { heading: 'Discovery first', body: 'Placeholder copy. I spend time understanding the problem space before touching any design tools. Research, stakeholder interviews, and competitive analysis inform everything that follows.' },
      { heading: 'Low-fidelity thinking', body: 'Placeholder copy. I work fast in low-fidelity before committing to detail. Sketches and rough wireframes align teams before pixels are ever placed.' },
      { heading: 'Design and engineering in sync', body: 'Placeholder copy. I embed alongside engineers early. Handoff friction is a design failure. I treat implementation feasibility as a design constraint from the start.' },
      { heading: 'Iteration over perfection', body: 'Placeholder copy. Shipped and improved is better than perfect and delayed. I work in tight cycles, gather signal, and refine continuously.' },
    ],
    related: [
      { id: 'perspectives-my-philosophy', label: 'My Philosophy', description: 'Principles that guide every project.' },
      { id: 'strategy-sessions', label: 'Strategy Sessions', description: 'Work with me on a focused engagement.' },
      { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How I approach AI product design.' },
    ],
  },
  'perspectives-ai-native-design': {
    label: 'AI-Native Design',
    subtitle: 'How I think about designing products where AI is a first-class participant, not a feature.',
    accent: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-50 via-indigo-50 to-violet-100 dark:from-blue-950 dark:via-indigo-950 dark:to-violet-950',
    icon: Bot,
    iconColor: 'text-blue-600 dark:text-blue-400',
    sections: [
      { heading: 'Trust is the core UX problem', body: 'Placeholder copy. When AI makes decisions, the interface must make those decisions legible. Trust cannot be assumed — it must be designed.' },
      { heading: 'Human-in-the-loop is a design pattern', body: 'Placeholder copy. Knowing when to surface AI output for human review, and when to automate, is one of the most consequential design decisions in an AI product.' },
      { heading: 'Error UX matters more than success UX', body: 'Placeholder copy. AI systems fail in novel ways. Designing for graceful degradation, clear error states, and recovery flows is not optional.' },
      { heading: 'Mental models precede interfaces', body: 'Placeholder copy. Before designing any screen, I map how users will conceptualize the AI\'s role. The interface is a layer over that model.' },
    ],
    related: [
      { id: 'agentic-experience', label: 'Agentic Experience', description: 'My AI & agentic UX service offering.' },
      { id: 'perspectives-my-philosophy', label: 'My Philosophy', description: 'Principles guiding my design approach.' },
      { id: 'solutions-ai-native-products', label: 'AI-Native Products', description: 'AI product design case studies.' },
    ],
  },
  'perspectives-writing': {
    label: 'Writing',
    subtitle: 'Essays, articles, and short-form thinking on design, AI, and the craft of building digital products.',
    accent: 'text-amber-600 dark:text-amber-400',
    gradient: 'from-amber-50 via-yellow-50 to-orange-100 dark:from-amber-950 dark:via-yellow-950 dark:to-orange-950',
    icon: PenLine,
    iconColor: 'text-amber-600 dark:text-amber-400',
    sections: [
      { heading: 'Recent articles', body: 'Placeholder — article cards will appear here. Topics include AI transparency, design systems at scale, and the future of human-computer interaction.' },
      { heading: 'Topics I write about', body: 'Placeholder copy. AI & agent UX, design systems, design leadership, working with engineers, and building enterprise products that real humans use.' },
      { heading: 'External publications', body: 'Placeholder copy. Links to pieces published on Medium, UX Collective, and industry newsletters will appear here.' },
    ],
    related: [
      { id: 'perspectives-speaking', label: 'Speaking', description: 'Talks and conference appearances.' },
      { id: 'perspectives-my-philosophy', label: 'My Philosophy', description: 'Core principles behind the work.' },
      { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'Thinking on designing for AI.' },
    ],
  },
  'perspectives-speaking': {
    label: 'Speaking',
    subtitle: 'Conference talks, workshops, and panel discussions on AI product design and enterprise UX.',
    accent: 'text-violet-600 dark:text-violet-400',
    gradient: 'from-violet-50 via-purple-50 to-fuchsia-100 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950',
    icon: Mic2,
    iconColor: 'text-violet-600 dark:text-violet-400',
    sections: [
      { heading: 'Past talks', body: 'Placeholder — talk cards will appear here. Topics have included trust models in AI products, scaling design systems, and human-in-the-loop design.' },
      { heading: 'Talk topics', body: 'Placeholder copy. Available talk topics include: AI-Native UX, Agentic Workflow Design, Design Leadership in Enterprise, and Accessible Interaction Patterns.' },
      { heading: 'Book a speaking engagement', body: 'Placeholder copy. I speak at product and design conferences, internal company offsites, and industry panels. Reach out to discuss availability.' },
    ],
    related: [
      { id: 'speaking-workshops', label: 'Speaking & Workshops', description: 'Facilitated workshops and sessions.' },
      { id: 'perspectives-writing', label: 'Writing', description: 'Articles and essays on design.' },
      { id: 'contact', label: 'Contact', description: 'Get in touch to book a talk.' },
    ],
  },
};

const PerspectiveDetail: React.FC<PerspectiveDetailProps> = ({ page, setCurrentPage }) => {
  const config = perspectiveConfig[page];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (!config) return null;

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage('perspectives')}
                  className="text-gray-500 dark:text-neutral-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Perspectives
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <li className="text-gray-900 dark:text-white font-medium">{config.label}</li>
            </ol>
          </nav>

          <div className="py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/60 dark:bg-white/5 flex items-center justify-center shadow-sm">
                <Icon className={`w-5 h-5 ${config.iconColor}`} />
              </div>
              <p className={`text-sm font-semibold uppercase tracking-widest ${config.accent}`}>
                Perspectives
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-white tracking-tight mb-6">
              {config.label}
            </h1>
            <p className="text-xl text-gray-600 dark:text-neutral-400">
              {config.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-16">
            {config.sections.map((section, i) => (
              <div key={i} className="border-l-2 border-neutral-200 dark:border-white/[0.08] pl-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-20 bg-gray-50 dark:bg-white/[0.02] dark:border-t dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-10">
            Related
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {config.related.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setCurrentPage(item.id);
                }}
                className="group text-left p-6 bg-white dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] rounded-xl hover:border-neutral-300 dark:hover:border-white/[0.12] hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:underline">
                  {item.label}
                </div>
                <p className="text-sm text-gray-500 dark:text-neutral-500 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Want to talk through an idea?
          </h2>
          <p className="text-lg text-gray-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            I'm happy to discuss design challenges, AI product questions, or collaboration opportunities.
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentPage('contact');
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 text-white hover:bg-brand-700 transition-colors font-medium"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default PerspectiveDetail;
