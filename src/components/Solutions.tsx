import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
}

interface SolutionsProps {
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy: (study: string) => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ title, description, image, tags, onClick }) => (
  <div
    className="group cursor-pointer bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px] overflow-hidden transition-all hover:border-neutral-400 dark:hover:border-white/[0.2]"
    onClick={onClick}
  >
    <div className="p-6 space-y-4">
      <div className="flex gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium px-2.5 py-1 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] text-muted dark:text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-white">{title}</h3>
      <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{description}</p>
    </div>
    <div className="mt-auto">
      <div className="aspect-[4/3] overflow-hidden border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
    </div>
  </div>
);

const Solutions: React.FC<SolutionsProps> = ({ setCurrentPage, setSelectedCaseStudy }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredCaseStudies = [
    {
      title: "CoreTechs SaaS Healthcare Product",
      description: "Improving value-based healthcare patient management through an intuitive interface design.",
      image: "https://images.pexels.com/photos/7089629/pexels-photo-7089629.jpeg",
      tags: ["Healthcare", "UX/UI Design", "Web App"]
    },
    {
      title: "Accenture - Employee Onboarding",
      description: "Designed an intuitive onboarding experience that guides new employees through common tasks and pain points.",
      image: "https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg",
      tags: ["Enterprise", "UX/UI Design", "Service Design"]
    },
    {
      title: "Jim Beam - The Cocktail Project",
      description: "Designed a new recipe responsive web site.",
      image: "https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg",
      tags: ["Beverage", "UX/UI Design", "Service Design"]
    }
  ];

  const handleCaseStudyClick = (title: string) => {
    setSelectedCaseStudy(title);
  };

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
              Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Our Solutions in Action.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
              Explore case studies to see how I've helped businesses across various industries transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-12">Featured Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                {...study}
                onClick={() => handleCaseStudyClick(study.title)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-50 dark:bg-white/[0.02] border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-black dark:text-white mb-12">Design Solutions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Accenture - Onboarding Redesign', description: "Redesigned Accenture's onboarding site to create a welcoming first impression. Provided clear, timely info to help new hires prepare.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/accenture.png', tags: ['Enterprise', 'Web Design'] },
              { title: 'TransUnion Redesign', description: 'Designed a responsive, user-friendly site that works seamlessly on desktop and mobile. Focused on what users need.', image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/TransUnion.png', tags: ['Enterprise', 'Web Design'] },
              { title: 'Aramark Redesign', description: "Redesigned Aramark's site with clear navigation, bold visuals, and storytelling that showcased their services.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/aramark.png', tags: ['Enterprise', 'Web Design'] },
              { title: 'Chrysler Redesign', description: "Reimagined Chrysler's site with user-first design, reorganizing content to match user needs with bold typography and dynamic photography.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Chrysler-web-design.png', tags: ['Automotive', 'Web Design'] },
              { title: 'Accenture - Leave of Absence', description: "Redesigned Accenture's leave of absence experience with a responsive, user-centered solution and custom design patterns.", image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/accenture-employeeleave.png', tags: ['HR Solutions', 'Web App'] },
              { title: 'Atom Manager Redesign', description: 'Reimagined the Atom Manager marketing site with a new logo and CRM form flow for lead generation.', image: 'https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Atom-Manager.png', tags: ['SaaS', 'Web Design'] },
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px] overflow-hidden">
                <div className="aspect-[4/3] bg-neutral-100 dark:bg-white/[0.04] relative overflow-hidden border-b border-[#D9D9D9] dark:border-white/[0.1]">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] text-muted dark:text-neutral-500">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-black dark:text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Let's create something beautiful.
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
            I'd love to learn more about how I can help your business.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="btn-secondary"
          >
            Make Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
