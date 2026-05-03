import React from 'react';
import { ChevronRight, Eye, Shield, SlidersHorizontal, AlertCircle, Bot, Zap, BarChart3, Users, ArrowRight } from 'lucide-react';

interface AgenticExperienceProps {
  setCurrentPage: (page: string) => void;
}

const AgenticExperience: React.FC<AgenticExperienceProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 dark:from-slate-900 dark:via-blue-950 dark:to-sky-950"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <nav className="flex py-4" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-gray-500" />
              <li className="text-gray-900 dark:text-white font-medium">Agentic Experience</li>
            </ol>
          </nav>

          <div className="py-16">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
              AI & Agent Experience Design
            </p>
            <h1 className="text-4xl md:text-7xl font-regular text-gray-900 dark:text-white tracking-tight mb-6 max-w-4xl">
              We help design how AI works—inside your team and inside your product.
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
              From improving how teams use AI tools to designing AI-native product experiences,
              we help SaaS and enterprise companies turn AI into something usable, controlled,
              and built for the real world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Experience</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">10+ years product design</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Level</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Senior / Director</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Engagement</p>
                <p className="text-base font-semibold text-gray-900 dark:text-white">Remote collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative: Why most AI products fail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
              The Trust-by-Design Framework
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Why most AI products fail at the interface layer
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                The bottleneck in AI adoption isn't model performance — it's interface design. Teams
                invest heavily in training sophisticated models, then wrap them in UX that either
                hides how they work or overwhelms users with technical explanations they don't need.
              </p>
              <p>
                The result is predictable: users abandon AI features. Not because the technology
                fails, but because the interface never taught them what to expect, how to
                course-correct, or when to intervene. They return to manual workflows because those
                feel more controllable, even if they're slower.
              </p>
              <p>
                Good AI product design solves this by building <strong className="text-gray-900 dark:text-white">accurate mental models</strong> —
                helping users develop an intuitive understanding of what the AI can and can't do,
                without requiring them to understand transformers or training data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Layers of AI Trust */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
            Framework
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 max-w-2xl">
            The four layers of AI trust
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            Trust in AI systems isn't binary. It's built across four distinct layers, each
            requiring different design interventions.
          </p>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Predictability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Can users anticipate what the AI will do? Clear interaction patterns — copilot
                vs. agent vs. classifier — set expectations before outputs appear.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Transparency</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Can users see why the AI did what it did? Not full explainability — contextual
                signals at decision points that build confidence without cognitive overload.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mb-6">
                <SlidersHorizontal className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Control</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Can users redirect, refine, or reject AI outputs? Agency isn't about saying no
                to everything — it's about keeping humans in the loop where judgment matters.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 border border-gray-200 dark:border-gray-600">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900 rounded-full flex items-center justify-center mb-6">
                <AlertCircle className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accountability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                When things go wrong, is there a clear path to correction? Error states, feedback
                loops, and escalation paths complete the trust loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interaction Patterns */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
            Design Patterns
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 max-w-2xl">
            Interaction patterns that match the model
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl">
            Not all AI features need the same UX. The interaction model should match the task
            and the model's capabilities.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Copilot</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI suggests, human decides. Best for creative or judgment-heavy work where users
                want to stay in control.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <Bot className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Agent</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Users set goals, AI executes autonomously. Requires clear boundaries, progress
                visibility, and interrupt affordances.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Classifier</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI sorts, routes, and flags; human handles exceptions. Optimizes for speed while
                maintaining oversight on edge cases.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
              <div className="w-10 h-10 bg-sky-100 dark:bg-sky-900 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advisor</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                AI surfaces insights, human synthesizes. Information-dense dashboards with
                confidence indicators and decision support.
              </p>
            </div>
          </div>
          <div className="mt-12 max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I help teams choose the right pattern for their use case, then design the full
              interaction model — including edge cases, errors, and feedback loops most teams
              skip in v1.
            </p>
          </div>
        </div>
      </section>

      {/* Mental Model Mapping */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
              Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Mental model mapping: the missing step
            </h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                Most AI projects jump straight from "what should the model do" to "what should
                the screen look like." They skip the critical middle step: <strong className="text-gray-900 dark:text-white">what should users
                believe the model does?</strong>
              </p>
              <p>
                Mental model mapping documents the gap between how the AI actually works and how
                users think it works. This isn't about dumbing things down — it's about designing
                for the model users will inevitably build, whether you plan for it or not.
              </p>
              <p>
                A well-designed mental model means users know when to trust the AI, when to
                double-check it, and when to override it — without needing to read documentation
                or understand the architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
            Service Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
            How we can work together
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: '01',
                title: 'AI/AX Strategy & Assessment',
                description: 'Comprehensive audit of your AI product or feature set. Evaluate trust layers, mental model gaps, and interaction pattern fit. Leave with a prioritized roadmap grounded in user research and UX heuristics.',
                timeline: '4-6 weeks',
                format: 'Remote (async + live sessions)',
                deliverables: [
                  'Trust-by-Design audit across all four layers',
                  'Mental model gap analysis (user belief vs. system behavior)',
                  'Interaction pattern recommendations (copilot/agent/classifier fit)',
                  'Prioritized improvement roadmap with effort/impact scoring',
                  'Stakeholder workshop + recommendations deck',
                ],
              },
              {
                number: '02',
                title: 'AI Product Design Sprint',
                description: 'Rapid, collaborative sprint to design a new AI feature from scratch. Define interaction model, design key flows with edge cases, and prototype before engineering commits to an architecture.',
                timeline: '6-8 weeks',
                format: 'Remote (embedded with team)',
                deliverables: [
                  'AI interaction pattern definition + mental model specification',
                  'Core user flows including error states and feedback loops',
                  'High-fidelity clickable prototype (ready for user testing)',
                  'Design system components for AI-specific patterns',
                  'Handoff documentation with rationale for key decisions',
                ],
              },
              {
                number: '03',
                title: 'Fractional AI Design Leadership',
                description: 'Embedded design leadership for a major AI initiative. Own the full UX strategy from product definition through launch, working directly with product and engineering.',
                timeline: '6-12 months',
                format: 'Remote (fractional Director role)',
                deliverables: [
                  'End-to-end product strategy and interaction model definition',
                  'Complete design system with AI-specific component library',
                  'All screens, flows, edge cases, and error states designed',
                  'Iterative user testing and refinement (3+ rounds)',
                  'Ongoing eng collaboration through launch',
                  'Post-launch metrics framework and iteration plan',
                ],
              },
              {
                number: '04',
                title: 'Responsible AI Workshop',
                description: 'Structured workshop series to help your team navigate ethical, legal, and trust challenges. Design patterns for transparency, consent, and user control grounded in responsible AI principles.',
                timeline: '4 weeks',
                format: 'Remote (live workshops + async work)',
                deliverables: [
                  'Responsible AI design framework tailored to your context',
                  'Transparency and explainability pattern library',
                  'User control and consent flow designs',
                  'Risk assessment matrix for AI features',
                  'Team training session on ethical AI design',
                ],
              },
            ].map((service) => (
              <div
                key={service.number}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
              >
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {service.number}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Timeline</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Format</span>
                    <span className="font-semibold text-gray-900 dark:text-white">{service.format}</span>
                  </div>
                  <div className="mt-4">
                    <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-3">
                      Deliverables
                    </p>
                    <ul className="space-y-1.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Examples */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4">
              Recent AI/AX Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
              Case examples
            </h2>
          </div>
          <div className="space-y-0 max-w-3xl divide-y divide-gray-200 dark:divide-gray-700">
            {[
              {
                meta: 'Euphonic AI \u00B7 Startup \u00B7 SaaS 2024',
                title: 'Brand and interface design for an AI-led product',
                description: 'Partnered with the Euphonic AI founding team to define the brand identity and design the end-to-end interface for their AI-led SaaS platform. Established a visual system that signaled trust and intelligence without leaning on tired AI tropes, then translated it into a product UI where the model\u2019s reasoning, confidence, and limits are surfaced naturally inside the workflow. The result was a launch-ready product with a coherent voice across marketing site, onboarding, and core experience \u2014 and a design system the team could keep extending as the product matured.',
              },
              {
                meta: 'ZS \u00B7 Agentic AI \u00B7 Strategy 2026',
                title: 'Agentic AI experience strategy for an enterprise consultancy',
                description: 'Led the experience strategy for ZS\u2019s agentic AI initiative, helping product and consulting leadership define how autonomous agents should fit into existing client workflows. Mapped the spectrum of human-in-the-loop, human-on-the-loop, and fully delegated patterns against real engagement scenarios, then specified the trust signals, escalation paths, and interruption affordances each pattern required. Delivered a strategy framework, prioritized opportunity map, and reference interaction models that gave the org a shared language for designing agentic features without compromising client trust or compliance posture.',
              },
              {
                meta: 'ZS \u00B7 Agentic AI \u00B7 Design System Evaluation 2026',
                title: 'Design system evaluation for agentic AI surfaces',
                description: 'Audited ZS\u2019s existing design system against the demands of agentic AI interfaces \u2014 streaming outputs, in-progress reasoning, tool use, confidence and provenance, and recoverable error states. Identified gaps where current components quietly broke down under agent behavior, then proposed a layered set of new primitives and patterns (agent status, intent capture, plan preview, action approvals, audit trails) that extend the system rather than fork it. The output gave their design and engineering teams a clear roadmap for evolving the system without losing the consistency they\u2019d already invested in.',
              },
            ].map((caseItem, index) => (
              <div key={index} className="py-8 first:pt-0">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{caseItem.meta}</p>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {caseItem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {caseItem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's create<br />something beautiful.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            I'd love to learn more about how I can help your business.
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-colors"
          >
            Make Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default AgenticExperience;
