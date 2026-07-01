import React from 'react';

const featured = {
  title: 'Big Ideas. One Designer. Better Outcomes.',
  description:
    'Work directly with a seasoned UX strategist who brings over 15 years of experience delivering clarity, creativity, and results that large teams often cannot match.',
};

const items = [
  { title: 'Personalized Attention', description: 'I take time to deeply understand your business, customers, and vision - ensuring a tailored approach from start to finish.' },
  { title: 'Agility and Speed', description: 'My nimble approach turns ideas into working products quickly, without layers of bureaucracy slowing the process.' },
  { title: 'Direct Collaboration', description: "You work with senior talent every step of the way. No account managers, no junior intermediaries - direct creative partnership." },
  { title: 'Focused Expertise', description: 'I specialize in what I do best: exceptional digital experiences. You get an expert who is fully invested in your project.' },
  { title: 'Cost-Effective Solutions', description: '90% of your budget goes directly into the creative work, not corporate infrastructure.' },
  { title: 'Creative Flexibility', description: "I think boldly, explore unexpected approaches, and adapt quickly. Innovation is the default here, not the exception." },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: featured callout */}
          <div className="lg:sticky lg:top-32">
            <div
              className="p-10 border border-line dark:border-white/10"
              style={{ background: 'linear-gradient(135deg, #F3EFE7 0%, #ffffff 100%)' }}
            >
              <div className="w-8 h-[3px] bg-blue mb-8" />
              <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-6">
                {featured.title}
              </h2>
              <p className="text-base text-muted dark:text-neutral-400 leading-relaxed">
                {featured.description}
              </p>
            </div>
          </div>

          {/* Right: 2x3 grid of reasons */}
          <div className="grid sm:grid-cols-2 gap-px bg-line dark:bg-white/10">
            {items.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white dark:bg-neutral-950 hover:bg-tan dark:hover:bg-white/[0.03] transition-colors"
              >
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
