import React from 'react';
import { ChevronRight, LayoutGrid, Workflow, Users } from 'lucide-react';

interface SaasProductDesignProps {
  setCurrentPage: (page: string) => void;
}

const SaasProductDesign: React.FC<SaasProductDesignProps> = ({ setCurrentPage }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('contact');
  };

  const handleSolutionsClick = () => {
    window.scrollTo(0, 0);
    setCurrentPage('solutions');
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
              <li className="text-black dark:text-white font-medium">SaaS Product Design</li>
            </ol>
          </nav>

          <div>
            <h1 className="text-4xl md:text-7xl font-regular text-black dark:text-white mb-6">
              SaaS Product Design<br />
              That Drives Growth
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
              We design intuitive, scalable SaaS products that users love. Our approach
              combines deep user research, strategic thinking, and beautiful design to
              create products that drive engagement and business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/[0.08] rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                User-Centric Design
              </h3>
              <p className="text-muted dark:text-neutral-400">
                We create intuitive interfaces that make complex functionality feel simple and natural to your users.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/[0.08] rounded-full flex items-center justify-center mb-6">
                <LayoutGrid className="w-6 h-6 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Design Systems
              </h3>
              <p className="text-muted dark:text-neutral-400">
                Build scalable products with consistent, reusable components that grow with your business.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-neutral-100 dark:bg-white/[0.08] rounded-full flex items-center justify-center mb-6">
                <Workflow className="w-6 h-6 text-muted dark:text-neutral-400" />
              </div>
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
                Workflow Optimization
              </h3>
              <p className="text-muted dark:text-neutral-400">
                Streamline user workflows to improve efficiency and reduce friction in key tasks.
              </p>
            </div>
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
                <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">User Research</h3>
                  <p className="text-muted dark:text-neutral-400">Deep understanding of user needs and behaviors</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Information Architecture</h3>
                  <p className="text-muted dark:text-neutral-400">Logical structure and navigation flow</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Interaction Design</h3>
                  <p className="text-muted dark:text-neutral-400">Intuitive and engaging user interactions</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Design Systems</h3>
                  <p className="text-muted dark:text-neutral-400">Scalable component libraries and guidelines</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Prototyping</h3>
                  <p className="text-muted dark:text-neutral-400">Interactive prototypes for testing and validation</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black dark:text-white mb-1">Developer Handoff</h3>
                  <p className="text-muted dark:text-neutral-400">Detailed specifications and assets for development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-12">Our Process</h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-neutral-100 dark:bg-white/[0.08] rounded-full flex items-center justify-center text-black dark:text-white font-semibold">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Research & Strategy
                </h3>
                <p className="text-muted dark:text-neutral-400">
                  We start by understanding your users, market, and business goals to create a strategic foundation for your product.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-neutral-100 dark:bg-white/[0.08] rounded-full flex items-center justify-center text-black dark:text-white font-semibold">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  UX Architecture
                </h3>
                <p className="text-muted dark:text-neutral-400">
                  Design the core structure and workflows of your product, ensuring a logical and efficient user experience.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-neutral-100 dark:bg-white/[0.08] rounded-full flex items-center justify-center text-black dark:text-white font-semibold">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  UI Design & Systems
                </h3>
                <p className="text-muted dark:text-neutral-400">
                  Create beautiful, consistent interfaces and establish a scalable design system for future growth.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="w-12 h-12 flex-shrink-0 bg-neutral-100 dark:bg-white/[0.08] rounded-full flex items-center justify-center text-black dark:text-white font-semibold">
                04
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Testing & Iteration
                </h3>
                <p className="text-muted dark:text-neutral-400">
                  Validate designs through user testing and iterate based on real feedback to ensure product success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions CTA Section */}
      {/* Design Solutions Grid */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-12 text-center">A Sample of SaaS Design Solutions</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mopar Redesign */}
            <div className="bg-white dark:bg-white/[0.03] dark:border dark:border-white/[0.1] rounded-[10px] overflow-hidden">
              <div className="aspect-[4/3] bg-white dark:bg-white/[0.03] relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-white/[0.08] dark:text-purple-400 dark:border-purple-400">
                  Enterprise
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Ion-SaaS-design.png"
                  alt="ION MVP" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  UL SaaS Tool
                </h3>
                <p className="text-muted dark:text-neutral-400 text-sm">
                  An MVP Design for UL Clients to perform compliance analysis.
                </p>
              </div>
            </div>

            {/* Atom Manager Redesign */}
            <div className="bg-white dark:bg-white/[0.03] dark:border dark:border-white/[0.1] rounded-[10px] overflow-hidden">
              <div className="aspect-[4/3] bg-white dark:bg-white/[0.03] relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-white/[0.08] dark:text-purple-400 dark:border-purple-400">
                  Government
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/Atom-Manager.png" 
                  alt="Atom Manager full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  Atom Manager SaaS Application Tool
                </h3>
                <p className="text-muted dark:text-neutral-400 text-sm">
                  Redesign Designed a user-friendly SaaS tool. We improved the UX/UI design patterns being used to make the user tasks more intuitive, predictable and easy to use.
                </p>
              </div>
            </div>

            {/* ZS SaaS product Redesign */}
            <div className="bg-white dark:bg-white/[0.03] dark:border dark:border-white/[0.1] rounded-[10px] overflow-hidden">
              <div className="aspect-[4/3] bg-white dark:bg-white/[0.03] relative">
                <span className="absolute top-4 left-4 z-10 inline-flex items-center px-2.5 py-0.5 rounded-sm bg-purple-100 text-purple-800 text-xs font-medium border border-purple-400 dark:bg-white/[0.08] dark:text-purple-400 dark:border-purple-400">
                  Healthcare
                </span>
                <img 
                  src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/ZS-Deployment.png" 
                  alt="ZS SaaS Redesign" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
                  ZS SaaS Product
                </h3>
                <p className="text-muted dark:text-neutral-400 text-sm">
                  I spent eight years helping ZS transform their SaaS deployment platform--advocating for a modern design system and shaping user-focused experiences that aligned client needs with business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions CTA Section */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-4">
            Ready to See the Solutions in Action?
          </h2>
          <p className="text-xl text-muted dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
            Explore how our services come to life through tailored solutions that solve real problems.
          </p>
          <button
            onClick={handleSolutionsClick}
            className="btn-primary px-8 py-4"
          >
            View Our Solutions
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden bg-black dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seen enough? Let's create<br />something beautiful.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We'd love to learn more about how we can help your business.
          </p>
          <button
            onClick={handleContactClick}
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
          >
            Make Contact
          </button>
        </div>
      </section>
    </div>
  );
};

export default SaasProductDesign;