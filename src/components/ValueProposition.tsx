import React from 'react';
import { Users, Zap, Layers, Focus, DollarSign, Lightbulb } from 'lucide-react';

const cards = [
  { icon: Users, title: 'Personalized Attention', description: 'Your success directly impacts me. I take time to deeply understand your business, customers, challenges, and vision, ensuring a tailored approach from start to finish.' },
  { icon: Zap, title: 'Agility and Speed', description: 'My nimble approach turns ideas into beautiful, working products quickly. Without layers of bureaucracy, I meet your goals more efficiently.' },
  { icon: Layers, title: 'Direct Collaboration', description: "You'll work with senior talent every step of the process. No layers of account managers or junior intermediaries. I maintain direct communication." },
  { icon: Focus, title: 'Focused Expertise', description: 'I specialize in what I do best: creating exceptional digital experiences. You get an expert who is passionate about your project\'s success.' },
  { icon: DollarSign, title: 'Cost-Effective Solutions', description: 'Small doesn\'t mean less. With lower overhead costs, 90% of your budget goes directly into the creative work—not corporate infrastructure.' },
  { icon: Lightbulb, title: 'Creative Flexibility', description: "Innovation thrives here. I'm free to think boldly, explore unexpected approaches, and adapt quickly to your needs with maximum flexibility." },
];

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4">
            Big Ideas. One Designer. Better Outcomes.
          </h2>
          <p className="text-muted dark:text-neutral-400 leading-relaxed">
            Work directly with a seasoned UX strategist who brings over 15 years of experience delivering clarity, creativity, and results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-8 bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px]"
              >
                <div className="w-10 h-10 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-muted dark:text-neutral-400" />
                </div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
