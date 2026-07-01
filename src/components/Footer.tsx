import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage: _currentPage, setCurrentPage }) => {
  const nav = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const linkCls = 'text-sm text-muted dark:text-neutral-400 hover:text-ink dark:hover:text-white transition-colors text-left';
  const headingCls = 'text-xs font-semibold text-ink dark:text-white uppercase tracking-wider mb-4';

  return (
    <footer className="bg-white dark:bg-neutral-950 border-t border-line dark:border-white/10">

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">

          {/* Brand */}
          <div className="col-span-2">
            <button onClick={() => nav('home')} className="flex items-center gap-3 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="32" height="32" className="fill-ink dark:fill-white" />
                <rect x="7" y="9" width="18" height="3.5" className="fill-white dark:fill-ink" />
                <rect x="14.25" y="9" width="3.5" height="16" className="fill-white dark:fill-ink" />
                <rect x="14.25" y="22" width="3.5" height="3" fill="#2563EB" />
              </svg>
              <span className="text-base font-semibold text-ink dark:text-white">Timothy McGuire</span>
            </button>
            <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6 max-w-xs">
              I help organizations design intelligent products that people understand, trust, and enjoy using.
            </p>
            <button
              onClick={() => nav('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Let's Talk <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Thinking */}
          <div>
            <h3 className={headingCls}>Thinking</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'perspectives-my-philosophy', label: 'My Philosophy' },
                { id: 'perspectives-how-i-work', label: 'How I Work' },
                { id: 'perspectives-ai-native-design', label: 'AI-Native Design' },
                { id: 'perspectives-writing', label: 'Writing' },
                { id: 'perspectives-speaking', label: 'Speaking' },
                { id: 'perspectives', label: 'All Perspectives' },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => nav(item.id)} className={linkCls}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className={headingCls}>Services</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'agentic-experience', label: 'Agentic Experience' },
                { id: 'enterprise-ux-consulting', label: 'Enterprise UX' },
                { id: 'saas-product-design', label: 'SaaS Product Design' },
                { id: 'marketing-web-design', label: 'Marketing Web' },
                { id: 'mobile-web-design', label: 'Mobile & Web' },
                { id: 'fractional-saas-designer', label: 'Fractional Designer' },
                { id: 'speaking-workshops', label: 'Speaking & Workshops' },
                { id: 'strategy-sessions', label: 'Strategy Sessions' },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => nav(item.id)} className={linkCls}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className={headingCls}>Solutions</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS' },
                { id: 'solutions-ai-native-products', label: 'AI-Native Products' },
                { id: 'solutions-design-systems', label: 'Design Systems' },
                { id: 'solutions-healthcare-ux', label: 'Healthcare UX' },
                { id: 'solutions-fintech-ux', label: 'Fintech UX' },
                { id: 'solutions-product-modernization', label: 'Modernization' },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => nav(item.id)} className={linkCls}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={headingCls}>Company</h3>
            <ul className="space-y-2.5">
              {[
                { id: 'about', label: 'About' },
                { id: 'work-with-me', label: 'Work With Me' },
                { id: 'solutions', label: 'Case Studies' },
                { id: 'resume', label: 'Resume' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => nav(item.id)} className={linkCls}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-line dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted dark:text-neutral-500">
            &copy; 2026 Timothy McGuire. Enterprise UX, AI-Native Design, and Design Systems.
          </p>
          <div className="flex items-center gap-6 text-xs text-muted dark:text-neutral-500">
            <span>Editorial. Minimal. Explainable.</span>
            <div className="w-5 h-[2px] bg-blue" />
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
