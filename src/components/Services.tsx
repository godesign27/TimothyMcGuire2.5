import React from 'react';
import { Globe, Box, Bot, ArrowRight, ClipboardList, Sparkles, Briefcase } from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Services
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Solving Real Problems. Designing Exceptional Experiences.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-3xl">
              I bring clarity and simplicity to complexity. My suite of Experience Design services combines deep expertise with human-centered design principles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-16">Core Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <ClipboardList className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">UX/UI Design Consulting</h3>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Transform your digital presence with user-focused solutions. From crafting intuitive user flows to building robust design systems.
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-neutral-500">
                <li>User Flow</li>
                <li>Information Architecture</li>
                <li>UX/UI Design</li>
                <li>Wireframing</li>
                <li>Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>

            <div className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <Sparkles className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">AI + Agentic Experience</h3>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Design AI-powered products people actually trust. I bridge the gap between powerful models and interfaces users understand.
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-neutral-500">
                <li>Trust-by-Design Framework</li>
                <li>Mental Model Mapping</li>
                <li>AI Interaction Patterns</li>
                <li>Responsible AI Design</li>
                <li>Human-in-the-Loop Workflows</li>
              </ul>
            </div>

            <div className="p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <Briefcase className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Brand & Identity Design</h3>
              <p className="text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Develop a strong, cohesive brand identity that resonates with your audience. Comprehensive brand systems that stand out.
              </p>
              <ul className="space-y-2 text-sm text-muted dark:text-neutral-500">
                <li>Logo Design</li>
                <li>Color Definition</li>
                <li>Typography</li>
                <li>Graphic Imagery</li>
                <li>Brand Guidelines</li>
                <li>Visual Systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-b border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-16">Specialized Services</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-transparent p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <Globe className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Marketing Web Design</h3>
              <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Create impactful web experiences that convert visitors into customers with strategic user journeys.
              </p>
              <button
                onClick={() => handleNav('marketing-web-design')}
                className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white hover:underline"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white dark:bg-transparent p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <Box className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">SaaS Product Design</h3>
              <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Build powerful, scalable software solutions with comprehensive SaaS design expertise.
              </p>
              <button
                onClick={() => handleNav('saas-product-design')}
                className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white hover:underline"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="bg-white dark:bg-transparent p-8 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="w-10 h-10 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                <Bot className="w-5 h-5 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white mb-3">Agentic Experience</h3>
              <p className="text-sm text-muted dark:text-neutral-400 mb-6 leading-relaxed">
                Design AI and agent-powered interfaces that earn user trust through transparency and control.
              </p>
              <button
                onClick={() => handleNav('agentic-experience')}
                className="inline-flex items-center gap-1 text-sm font-medium text-black dark:text-white hover:underline"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-16">Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery & Strategy", description: "Understanding your business, goals, and target audience to create a strategic foundation." },
              { step: "02", title: "Design & Prototyping", description: "Creating beautiful, functional layouts that align with your brand and optimize for your goals." },
              { step: "03", title: "Development & Testing", description: "Building your solution using modern technologies, ensuring it works flawlessly." },
              { step: "04", title: "Launch & Optimization", description: "Monitoring performance and making data-driven improvements to maximize results." }
            ].map((phase) => (
              <div key={phase.step}>
                <p className="text-xs font-semibold text-muted dark:text-neutral-500 mb-4">{phase.step}</p>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{phase.title}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-black dark:text-white mb-4">
            Ready to see solutions in action?
          </h2>
          <p className="text-lg text-muted dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Explore how my services come to life through tailored solutions that solve real problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNav('solutions')}
              className="btn-primary"
            >
              View Solutions
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="btn-secondary"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
