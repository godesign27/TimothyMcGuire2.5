import React from 'react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage: _currentPage, setCurrentPage }) => {
  const nav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <footer className="bg-white dark:bg-neutral-950 py-16 border-t border-[#D9D9D9] dark:border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">

          <div className="col-span-2 md:col-span-1">
            <button onClick={() => nav('home')} className="text-xl font-bold text-black dark:text-white text-left">
              Timothy McGuire
            </button>
            <p className="mt-4 text-sm text-muted dark:text-neutral-400 max-w-xs leading-relaxed">
              Senior / Principal UX Designer specializing in enterprise SaaS, AI-native products, and agentic experience design.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'services', label: 'Services' },
                { id: 'solutions', label: 'Solutions' },
                { id: 'perspectives', label: 'Perspectives' },
                { id: 'about', label: 'About' },
                { id: 'resume', label: 'Resume' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => nav(item.id)}
                    className="text-sm text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'agentic-experience', label: 'Agentic Experience' },
                { id: 'enterprise-ux-consulting', label: 'Enterprise UX' },
                { id: 'saas-product-design', label: 'SaaS Product Design' },
                { id: 'marketing-web-design', label: 'Marketing Web Design' },
                { id: 'mobile-web-design', label: 'Mobile & Web Design' },
                { id: 'fractional-saas-designer', label: 'Fractional Designer' },
                { id: 'speaking-workshops', label: 'Speaking & Workshops' },
                { id: 'strategy-sessions', label: 'Strategy Sessions' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => nav(item.id)}
                    className="text-sm text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS' },
                { id: 'solutions-ai-native-products', label: 'AI-Native Products' },
                { id: 'solutions-design-systems', label: 'Design Systems' },
                { id: 'solutions-healthcare-ux', label: 'Healthcare UX' },
                { id: 'solutions-fintech-ux', label: 'Fintech UX' },
                { id: 'solutions-product-modernization', label: 'Product Modernization' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => nav(item.id)}
                    className="text-sm text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-black dark:text-white uppercase tracking-wider mb-4">Perspectives</h3>
            <ul className="space-y-2.5 mb-8">
              {[
                { id: 'perspectives-my-philosophy', label: 'My Philosophy' },
                { id: 'perspectives-how-i-work', label: 'How I Work' },
                { id: 'perspectives-ai-native-design', label: 'AI-Native Design' },
                { id: 'perspectives-writing', label: 'Writing' },
                { id: 'perspectives-speaking', label: 'Speaking' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => nav(item.id)}
                    className="text-sm text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => nav('contact')}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-none hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Let's Talk
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D9D9D9] dark:border-white/[0.1] text-center text-sm text-muted dark:text-neutral-500">
          © 2026 Timothy McGuire. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
