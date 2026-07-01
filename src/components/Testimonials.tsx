import React from 'react';

const testimonials = [
  {
    initials: 'LC',
    name: 'Linda Corsey',
    title: 'VP Program Management',
    company: 'FCB',
    quote:
      "Tim is at the top of my list of UX/Creative leads. He seamlessly transitions between strategic concept development, complex UX projects, and efficient, high-quality creative production. He's one of the smartest, most reliable, and pleasant people I've had the pleasure of working with.",
    featured: true,
  },
  {
    initials: 'GB',
    name: 'Ginmann Bia',
    title: 'Experience Design Director',
    company: 'Accenture',
    quote:
      "Tim was invaluable because of his ability to adapt. Even when things were vague, he came to the table with fresh ideas at exactly the right level of detail. He has a relentless customer service mindset while maintaining a solid foundation in UX principles.",
    featured: false,
  },
  {
    initials: 'DB',
    name: 'Dao Boyle',
    title: 'Senior VP Product',
    company: 'TransUnion',
    quote:
      "Tim understands our underlying interest and creates a user experience that serves us even better than what we had envisioned. He has strong business acumen in addition to expert creative skills. His work has been extremely profitable for us.",
    featured: false,
  },
];

const Testimonials: React.FC = () => {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-tan dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-14">
          <h2 className="text-2xl font-semibold text-ink dark:text-white mb-2">
            What clients say
          </h2>
          <div className="w-8 h-[3px] bg-blue" />
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-start">

          {/* Featured testimonial */}
          <div className="bg-white dark:bg-neutral-900 border border-line dark:border-white/10 p-10 h-full flex flex-col justify-between">
            <p className="text-lg text-ink dark:text-white leading-relaxed mb-10">
              "{featured.quote}"
            </p>
            <div className="flex items-center gap-4 pt-6 border-t border-line dark:border-white/10">
              <div className="w-10 h-10 flex items-center justify-center bg-ink text-white text-xs font-semibold flex-shrink-0">
                {featured.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-ink dark:text-white">{featured.name}</p>
                <p className="text-xs text-muted dark:text-neutral-500">{featured.title} - {featured.company}</p>
              </div>
            </div>
          </div>

          {/* Stacked pair */}
          <div className="flex flex-col gap-6">
            {rest.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-neutral-900 border border-line dark:border-white/10 p-8"
              >
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-line dark:border-white/10">
                  <div className="w-8 h-8 flex items-center justify-center bg-neutral-100 dark:bg-white/10 text-ink dark:text-white text-xs font-semibold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink dark:text-white">{t.name}</p>
                    <p className="text-xs text-muted dark:text-neutral-500">{t.title} - {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
