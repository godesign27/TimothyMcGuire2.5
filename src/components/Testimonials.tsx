import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      initials: 'FCB',
      name: 'Linda Corsey',
      title: 'VP Program Management',
      quote: "Tim is at the top of my list of UX/Creative leads to work with. He was the Creative lead for 2+ years on a program of brands for Fiat Chrysler Automobiles. Tim seamlessly transitions between strategic concept development, complex UX projects, and efficient, high-quality creative production. He's one of the smartest, most reliable, professional, efficient, and pleasant people I've had the pleasure of working with.",
    },
    {
      initials: 'AC',
      name: 'Ginmann Bia',
      title: 'Experience Design Director',
      quote: "Tim was such a valuable member of our team because of his ability to adapt. Even when things were vague, he was able to come to the table with fresh, innovative ideas expressed through cleanly designed mockups and prototypes at exactly the right level of detail. He has a relentless customer service mindset, listening earnestly and responding to client needs, while maintaining a solid foundation in UX principles.",
    },
    {
      initials: 'TU',
      name: 'Dao Boyle',
      title: 'Senior VP Product',
      quote: "Tim is an impressive designer. Tim understands our underlying interest and creates a user experience that serves us even better than what we had been envisioning. I think this is because Tim has strong business acumen in addition to expert creative skills. He is also a pleasure to work with and always punctual and responsive.",
    },
  ];

  return (
    <section className="bg-white dark:bg-neutral-950 py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4 text-center">
          What clients say
        </h2>
        <p className="text-muted dark:text-neutral-400 mb-16 max-w-2xl mx-auto text-center">
          Each project is a collaboration. Discover why clients keep coming back.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 bg-neutral-50 dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-none">
              <div className="flex items-center mb-6">
                <div className="h-10 w-10 flex items-center justify-center bg-neutral-100 dark:bg-white/[0.08] text-black dark:text-white rounded-none font-semibold text-sm">
                  {t.initials}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-black dark:text-white">{t.name}</h4>
                  <p className="text-sm text-muted dark:text-neutral-500">{t.title}</p>
                </div>
              </div>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">
                "{t.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
