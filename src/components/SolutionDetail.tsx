import React from 'react';
import { ChevronRight, Building2, Bot, Palette, Heart, BarChart3, RefreshCcw, ArrowRight } from 'lucide-react';

interface SolutionDetailProps {
  page: string;
  setCurrentPage: (page: string) => void;
}

const solutionConfig: Record<string, {
  label: string;
  subtitle: string;
  accent: string;
  gradient: string;
  icon: React.ElementType;
  iconColor: string;
  sections: { heading: string; body: string }[];
  related: { id: string; label: string; description: string }[];
}> = {
  'solutions-enterprise-saas': {
    label: 'Enterprise SaaS',
    subtitle: 'Designing complex, multi-tenant SaaS platforms that scale without sacrificing usability.',
    accent: 'text-indigo-600 dark:text-indigo-400',
    gradient: 'from-indigo-50 via-blue-50 to-violet-100 dark:from-indigo-950 dark:via-blue-950 dark:to-violet-950',
    icon: Building2,
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    sections: [
      { heading: 'The challenge', body: 'Placeholder copy. Enterprise SaaS products serve multiple user roles, complex permission models, and workflows that can span dozens of steps. Most fail at the interface layer because they were designed for engineers, not users.' },
      { heading: 'My approach', body: 'Placeholder copy. I start with the most complex workflow first. If I can make the hardest thing simple, the rest follows. Role-based IA, progressive disclosure, and inline guidance are core patterns I apply.' },
      { heading: 'What good looks like', body: 'Placeholder copy. A well-designed enterprise SaaS should feel like consumer software: fast, obvious, and rewarding to use — even when the underlying logic is intricate.' },
      { heading: 'Case studies', body: 'Placeholder — case study cards will appear here, drawn from work at Agate Software, Gray Matter Analytics, and TransUnion.' },
    ],
    related: [
      { id: 'saas-product-design', label: 'SaaS Product Design', description: 'End-to-end product design for software.' },
      { id: 'solutions-design-systems', label: 'Design Systems', description: 'Scalable component and pattern libraries.' },
      { id: 'solutions-product-modernization', label: 'Product Modernization', description: 'Upgrading legacy product experiences.' },
    ],
  },
  'solutions-ai-native-products': {
    label: 'AI-Native Products',
    subtitle: 'Designing products where AI is foundational — not bolted on — and trust is built into every interaction.',
    accent: 'text-blue-600 dark:text-blue-400',
    gradient: 'from-blue-50 via-sky-50 to-cyan-100 dark:from-blue-950 dark:via-sky-950 dark:to-cyan-950',
    icon: Bot,
    iconColor: 'text-blue-600 dark:text-blue-400',
    sections: [
      { heading: 'The challenge', body: 'Placeholder copy. AI products introduce new interaction patterns, new failure modes, and new expectations. Most teams treat UX as a wrapper around model output. The result is products users don\'t trust.' },
      { heading: 'My approach', body: 'Placeholder copy. I apply a trust-by-design framework: making AI reasoning visible, giving users meaningful control, and designing graceful fallbacks when confidence is low.' },
      { heading: 'Agentic workflows', body: 'Placeholder copy. I have deep experience designing human-in-the-loop systems where agents take actions on behalf of users. Oversight, interruption, and audit trails are UX problems, not engineering problems.' },
      { heading: 'Case studies', body: 'Placeholder — case study cards will appear here.' },
    ],
    related: [
      { id: 'agentic-experience', label: 'Agentic Experience', description: 'AI & agent experience design service.' },
      { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How I think about AI product design.' },
      { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.' },
    ],
  },
  'solutions-design-systems': {
    label: 'Design Systems',
    subtitle: 'Building the shared language that lets teams design and ship faster without sacrificing consistency.',
    accent: 'text-violet-600 dark:text-violet-400',
    gradient: 'from-violet-50 via-purple-50 to-fuchsia-100 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950',
    icon: Palette,
    iconColor: 'text-violet-600 dark:text-violet-400',
    sections: [
      { heading: 'The challenge', body: 'Placeholder copy. Most design systems fail because they are built for Figma, not for teams. They grow into component museums that no one trusts and everyone works around.' },
      { heading: 'My approach', body: 'Placeholder copy. I build systems around usage patterns, not components. A system should answer "how do we handle this case?" before a designer even opens a file.' },
      { heading: 'Governance and adoption', body: 'Placeholder copy. The best component in the world has no value if no one uses it. I treat adoption and governance as design problems, building the feedback loops that keep systems alive.' },
      { heading: 'WCAG and accessibility', body: 'Placeholder copy. Accessibility is baked into the component spec, not handled at the page level. Every token, every pattern, every variant is tested against WCAG 2.1 AA from the start.' },
    ],
    related: [
      { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Scalable product design at enterprise scale.' },
      { id: 'saas-product-design', label: 'SaaS Product Design', description: 'End-to-end product design service.' },
      { id: 'solutions-product-modernization', label: 'Product Modernization', description: 'Upgrading legacy interfaces and systems.' },
    ],
  },
  'solutions-healthcare-ux': {
    label: 'Healthcare UX',
    subtitle: 'Designing clinical and patient-facing experiences where clarity, trust, and compliance are non-negotiable.',
    accent: 'text-rose-600 dark:text-rose-400',
    gradient: 'from-rose-50 via-pink-50 to-red-100 dark:from-rose-950 dark:via-pink-950 dark:to-red-950',
    icon: Heart,
    iconColor: 'text-rose-600 dark:text-rose-400',
    sections: [
      { heading: 'The challenge', body: 'Placeholder copy. Healthcare products must be accurate, compliant, and usable under pressure. Clinical workflows are complex, users are time-constrained, and errors have real consequences.' },
      { heading: 'My approach', body: 'Placeholder copy. I design for high-stakes environments by reducing cognitive load, surfacing critical information at the right moment, and building in safeguards against common errors.' },
      { heading: 'Regulatory considerations', body: 'Placeholder copy. Experience designing with HIPAA considerations, accessibility requirements for clinical settings, and the interplay between compliance and usability.' },
      { heading: 'Case studies', body: 'Placeholder — case study cards will appear here, including work on the CoreTechs SaaS Healthcare Platform.' },
    ],
    related: [
      { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.' },
      { id: 'solutions-fintech-ux', label: 'Fintech UX', description: 'Design for regulated financial products.' },
      { id: 'agentic-experience', label: 'Agentic Experience', description: 'AI in high-stakes decision environments.' },
    ],
  },
  'solutions-fintech-ux': {
    label: 'Fintech UX',
    subtitle: 'Designing financial products that are trustworthy, compliant, and genuinely easy to use.',
    accent: 'text-emerald-600 dark:text-emerald-400',
    gradient: 'from-emerald-50 via-teal-50 to-green-100 dark:from-emerald-950 dark:via-teal-950 dark:to-green-950',
    icon: BarChart3,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    sections: [
      { heading: 'The challenge', body: "Placeholder copy. Financial products carry high stakes and high anxiety. Users need to trust the product before they'll act on it. Trust is earned through clarity, not branding." },
      { heading: 'My approach', body: 'Placeholder copy. I design financial UX around progressive disclosure of complexity: start simple, reveal depth only when the user is ready. Dense data should be scannable, not overwhelming.' },
      { heading: 'Data-heavy interfaces', body: 'Placeholder copy. I have extensive experience designing for data-intensive financial platforms: credit reports, loan products, analytics dashboards, and transaction histories.' },
      { heading: 'Case studies', body: 'Placeholder — case study cards will appear here, including work on the TransUnion credit product and Bank of America Auto Loans integration.' },
    ],
    related: [
      { id: 'solutions-healthcare-ux', label: 'Healthcare UX', description: 'Design for regulated, high-stakes environments.' },
      { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Complex product design at scale.' },
      { id: 'saas-product-design', label: 'SaaS Product Design', description: 'End-to-end product design service.' },
    ],
  },
  'solutions-product-modernization': {
    label: 'Product Modernization',
    subtitle: 'Redesigning legacy products that have accumulated years of complexity, debt, and user frustration.',
    accent: 'text-orange-600 dark:text-orange-400',
    gradient: 'from-orange-50 via-amber-50 to-yellow-100 dark:from-orange-950 dark:via-amber-950 dark:to-yellow-950',
    icon: RefreshCcw,
    iconColor: 'text-orange-600 dark:text-orange-400',
    sections: [
      { heading: 'The challenge', body: 'Placeholder copy. Legacy products are a design challenge unlike any other. You\'re not starting from a blank slate — you\'re navigating years of decisions, user habits, and technical constraints.' },
      { heading: 'My approach', body: 'Placeholder copy. I approach modernization as an archeological dig before it\'s a design project. Understanding why things are the way they are shapes every design decision that follows.' },
      { heading: 'Managing transition risk', body: 'Placeholder copy. Modernizing a product your users depend on requires careful sequencing. I design for continuity: preserving what works, eliminating what doesn\'t, and communicating change clearly.' },
      { heading: 'Case studies', body: 'Placeholder — case study cards will appear here, drawn from redesign work at Agate Software, Millonex, and Gray Matter Analytics.' },
    ],
    related: [
      { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.' },
      { id: 'solutions-design-systems', label: 'Design Systems', description: 'Shared language for scalable design teams.' },
      { id: 'saas-product-design', label: 'SaaS Product Design', description: 'End-to-end product design service.' },
    ],
  },
};

const SolutionDetail: React.FC<SolutionDetailProps> = ({ page, setCurrentPage }) => {
  const config = solutionConfig[page];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  if (!config) return null;

  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero */}
      <section className="bg-white dark:bg-neutral-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <button
                  onClick={() => setCurrentPage('solutions')}
                  className="text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Solutions
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-muted dark:text-neutral-400" />
              <li className="text-black dark:text-white font-medium">{config.label}</li>
            </ol>
          </nav>

          <div className="py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center">
                <Icon className={`w-5 h-5 ${config.iconColor}`} />
              </div>
              <p className={`text-sm font-semibold uppercase tracking-widest ${config.accent}`}>
                Solutions
              </p>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              {config.label}
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400">
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
                <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  {section.heading}
                </h2>
                <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-20 bg-white dark:bg-neutral-950 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-10">Related</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {config.related.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  window.scrollTo(0, 0);
                  setCurrentPage(item.id);
                }}
                className="group text-left p-6 bg-white dark:bg-white/[0.03] border border-[#D9D9D9] dark:border-white/[0.1] rounded-none hover:border-[#D9D9D9] dark:hover:border-white/[0.15] transition-all"
              >
                <div className="font-semibold text-black dark:text-white mb-2 group-hover:underline">
                  {item.label}
                </div>
                <p className="text-sm text-muted dark:text-neutral-400 mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white dark:text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-neutral-300 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Let's talk about your product challenges and how I can help.
          </p>
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              setCurrentPage('contact');
            }}
            className="btn-primary"
          >
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default SolutionDetail;
