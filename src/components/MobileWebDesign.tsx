import React from 'react';
import { ChevronRight, Smartphone, Users, Zap } from 'lucide-react';

interface MobileWebDesignProps {
  setCurrentPage: (page: string) => void;
}

const MobileWebDesign: React.FC<MobileWebDesignProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section with Breadcrumb */}
      <section className="relative overflow-hidden bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <nav className="flex py-4 mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
                >
                  Services
                </button>
              </li>
              <ChevronRight className="w-4 h-4 text-muted dark:text-neutral-400" />
              <li className="text-black dark:text-white font-medium">Mobile App Design</li>
            </ol>
          </nav>

          <div>
            <h1 className="text-4xl md:text-7xl font-regular text-black dark:text-white mb-6">
              Mobile App Design<br />
              That Drives Engagement
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
              We create beautiful, intuitive mobile experiences that users love.
              Our designs are crafted to engage users, simplify interactions, and
              deliver exceptional value across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/[0.08] rounded-none flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Native Experience
              </h3>
              <p className="text-muted dark:text-neutral-400">
                We design apps that feel natural and intuitive on every platform, following platform-specific guidelines and best practices.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/[0.08] rounded-none flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                User-First Design
              </h3>
              <p className="text-muted dark:text-neutral-400">
                Every interaction is crafted with your users in mind, ensuring an engaging and seamless mobile experience.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/[0.08] rounded-none flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Performance Optimized
              </h3>
              <p className="text-muted dark:text-neutral-400">
                Fast-loading, responsive apps that provide excellent user experience even in challenging network conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solutions */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-12">Design Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Fitness App",
                description: "Designed an intuitive fitness tracking app with personalized workout plans and progress monitoring.",
                image: "https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg"
              },
              {
                title: "Food Delivery App",
                description: "Created a seamless food ordering experience with real-time order tracking and easy payment.",
                image: "https://images.pexels.com/photos/6963098/pexels-photo-6963098.jpeg"
              },
              {
                title: "Social Platform",
                description: "Developed a modern social platform focused on community engagement and content sharing.",
                image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
              }
            ].map((project, index) => (
              <div key={index} className="bg-white dark:bg-white/[0.03] dark:border dark:border-white/[0.1] rounded-none overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted dark:text-neutral-400">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-12">Our Process</h2>
          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Research & Strategy",
                description: "We start by understanding your users, market, and business goals to create a strategic foundation for your mobile app."
              },
              {
                step: "02",
                title: "UX Design & Prototyping",
                description: "Our designers create intuitive flows and interactive prototypes that align with mobile platform guidelines."
              },
              {
                step: "03",
                title: "UI Design & Testing",
                description: "We craft beautiful interfaces and test them with real users to ensure optimal usability and engagement."
              },
              {
                step: "04",
                title: "Launch & Optimization",
                description: "After launch, we monitor performance and user feedback to continuously improve the experience."
              }
            ].map((phase, index) => (
              <div key={index} className="flex gap-8">
                <div className="w-12 h-12 flex-shrink-0 bg-neutral-100 dark:bg-white/[0.08] rounded-none flex items-center justify-center text-black dark:text-white font-semibold">
                  {phase.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted dark:text-neutral-400">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-12">What's Included</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-none bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">User Research</h3>
                  <p className="text-muted dark:text-neutral-400">Deep understanding of mobile user behavior</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-none bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">UX Architecture</h3>
                  <p className="text-muted dark:text-neutral-400">Intuitive navigation and user flows</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-none bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Visual Design</h3>
                  <p className="text-muted dark:text-neutral-400">Beautiful, platform-specific UI design</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-none bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Prototyping</h3>
                  <p className="text-muted dark:text-neutral-400">Interactive prototypes for testing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-none bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">User Testing</h3>
                  <p className="text-muted dark:text-neutral-400">Comprehensive usability testing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-none bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Design System</h3>
                  <p className="text-muted dark:text-neutral-400">Complete mobile design system</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-black dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's create<br />something beautiful.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We'd love to learn more about how we can help your business.
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-black rounded-none hover:bg-gray-100 transition-colors"
          >
            Make Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default MobileWebDesign;