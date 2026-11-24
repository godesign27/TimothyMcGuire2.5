import SiteLink from './SiteLink';
import AIAssistant from './AIAssistant';
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Bot, Box, Users, Building2, Palette, Heart, BarChart3, RefreshCcw, BookOpen, Workflow, PenLine, Mic2, Target, Briefcase } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setSelectedCaseStudy?: (study: string | null) => void;
}


const solutionPages = [
  { id: 'case-studies', label: 'Case Studies', description: 'Work samples and results across industries.', icon: Briefcase },
  { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.', icon: Building2 },
  { id: 'solutions-ai-native-products', label: 'AI-Native Products', description: 'Designing products where AI is foundational.', icon: Bot },
  { id: 'solutions-design-systems', label: 'Design Systems', description: 'Scalable component and pattern libraries.', icon: Palette },
  { id: 'solutions-healthcare-ux', label: 'Healthcare UX', description: 'Clinical and patient-facing experiences.', icon: Heart },
  { id: 'solutions-fintech-ux', label: 'Fintech UX', description: 'Trustworthy, compliant financial product design.', icon: BarChart3 },
  { id: 'solutions-product-modernization', label: 'Product Modernization', description: 'Redesigning legacy products and interfaces.', icon: RefreshCcw },
];

const perspectivePages = [
  { id: 'perspectives-my-philosophy', label: 'My Philosophy', description: 'Principles guiding every design decision.', icon: BookOpen },
  { id: 'perspectives-how-i-work', label: 'How I Work', description: 'My process, tools, and collaboration style.', icon: Workflow },
  { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How I think about designing for AI products.', icon: Bot },
  { id: 'perspectives-writing', label: 'Writing', description: 'Articles and essays on design and systems.', icon: PenLine },
  { id: 'perspectives-speaking', label: 'Speaking', description: 'Conference talks and panel appearances.', icon: Mic2 },
];

/**
 * Services menu. Labels carry "AI" for search and answer engines, except
 * "Work With Me", which is the overview and is named deliberately.
 */
const servicesPages = [
  { id: 'work-with-me', label: 'Work With Me', description: 'Compare every scoped AI engagement in one place.', icon: Briefcase },
  { id: 'product-ai-enterprise-agents', label: 'AI Enterprise Agents', description: 'Specialized AI agents designed and built for enterprise products.', icon: Bot },
  { id: 'product-ai-design-system-in-a-box', label: 'AI Design System in a Box', description: 'A fixed scope, agent readable design system your AI tools can follow.', icon: Box },
  { id: 'product-ai-component-library', label: 'AI Component Library', description: 'A token driven library of AI and agentic UI components.', icon: Palette },
  { id: 'work-with-me-enterprise-consulting', label: 'Enterprise AI Consulting', description: 'Senior AI experience strategy for enterprise products.', icon: Building2 },
  { id: 'work-with-me-fractional-leadership', label: 'Fractional AI Leadership', description: 'Senior AI design leadership on a flexible cadence.', icon: Users },
  { id: 'work-with-me-strategy-sessions', label: 'AI Strategy Sessions', description: 'Focused AI advisory engagements with a senior design mind.', icon: Target },
  { id: 'work-with-me-speaking-workshops', label: 'AI Speaking & Workshops', description: 'AI talks and workshops for design teams and conferences.', icon: Mic2 },
];

type DropdownKey = 'services' | 'solutions' | 'perspectives' | 'work-with-me' | null;

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, setSelectedCaseStudy }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openDropdown = (key: DropdownKey) => {
    clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
  };

  const scheduleClose = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const navigate = (page: string) => {
    window.scrollTo(0, 0);
    setSelectedCaseStudy?.(null);
    setCurrentPage(page);
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  const isSolutionPage = currentPage === 'solutions' || currentPage === 'case-studies' || solutionPages.some(s => s.id === currentPage);
  const isPerspectivePage = currentPage === 'perspectives' || perspectivePages.some(s => s.id === currentPage);
  const isServicesPage = currentPage === 'work-with-me' || currentPage === 'service-offerings' || currentPage === 'contact'
    || currentPage.startsWith('offering-') || currentPage.startsWith('product-')
    || servicesPages.some(s => s.id === currentPage);

  const getNavLinkClasses = (active: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors relative inline-flex items-center gap-1 ${
      active
        ? "text-black dark:text-white font-semibold"
        : "text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
    }`;

  const renderItem = (item: { id: string; label: string; description: string; icon: React.ElementType }) => {
    const Icon = item.icon;
    return (
      <SiteLink
        key={item.id}
        page={item.id} navigate={navigate}
        className={`flex items-center gap-3 w-full text-left px-4 py-3 transition-colors ${
          currentPage === item.id
            ? 'bg-neutral-100 dark:bg-white/[0.06]'
            : 'hover:bg-neutral-50 dark:hover:bg-white/[0.04]'
        }`}
      >
        <div className="w-8 h-8 rounded-none bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-muted dark:text-neutral-400" />
        </div>
        <div>
          <div className={`text-sm font-medium ${currentPage === item.id ? 'text-black dark:text-white' : 'text-black dark:text-white'}`}>
            {item.label}
          </div>
          <div className="text-xs text-muted dark:text-neutral-500 leading-snug">
            {item.description}
          </div>
        </div>
      </SiteLink>
    );
  };

  const renderDropdown = (
    key: DropdownKey,
    overviewPage: string,
    overviewLabel: string,
    items: { id: string; label: string; description: string; icon: React.ElementType }[],
    /** Services lists its overview as a named item, so the corner link is omitted there. */
    showOverviewLink = true,
  ) => (
    <div
      className={`absolute top-full left-0 mt-2 w-80 bg-white dark:bg-neutral-950 border border-[#D9D9D9] dark:border-white/[0.1] rounded-none transition-all duration-200 origin-top ${
        activeDropdown === key
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted dark:text-neutral-500">{overviewLabel}</span>
        {showOverviewLink && (
          <SiteLink
            page={overviewPage} navigate={navigate}
            className="text-xs font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
          >
            Overview
          </SiteLink>
        )}
      </div>
      <div className="py-1 pb-3">
        {items.map(renderItem)}
      </div>
    </div>
  );

  const renderMobileSection = (
    key: DropdownKey,
    label: string,
    overviewPage: string,
    items: { id: string; label: string; description: string; icon: React.ElementType }[],
  ) => (
    <div key={key}>
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]"
        onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === key ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === key ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex items-center justify-between pl-6 pr-4 py-2">
          <span className="text-xs font-semibold text-muted dark:text-neutral-500 uppercase tracking-wider">{label}</span>
          <SiteLink
            className="text-xs font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            page={overviewPage} navigate={navigate}
          >
            Overview
          </SiteLink>
        </div>
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );



  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#D9D9D9] dark:border-white/[0.1] dark:bg-neutral-950/95' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-3 flex-shrink-0"
                aria-hidden="true"
              >
                {/* Background */}
                <rect width="32" height="32" className="fill-ink dark:fill-white" />
                {/* T crossbar */}
                <rect x="7" y="9" width="18" height="3.5" className="fill-white dark:fill-ink" />
                {/* T stem */}
                <rect x="14.25" y="9" width="3.5" height="16" className="fill-white dark:fill-ink" />
                {/* Blue accent — bottom of stem */}
                <rect x="14.25" y="22" width="3.5" height="3" fill="#2563EB" />
              </svg>
              <span className="text-xl font-semibold text-black dark:text-white">Timothy McGuire</span>
            </div>

            <div className="hidden lg:block">
              <div className="ml-8 flex items-baseline space-x-0">

                <SiteLink className={getNavLinkClasses(currentPage === 'home')} page={'home'} navigate={navigate}>Home</SiteLink>

                <SiteLink className={getNavLinkClasses(currentPage === 'ai-experience-architecture')} page={'ai-experience-architecture'} navigate={navigate}>
                  AI Experience Architecture™
                </SiteLink>

                <div
                  className="relative"
                  onFocus={() => openDropdown('solutions')} onMouseEnter={() => openDropdown('solutions')}
                  onMouseLeave={scheduleClose}
                >
                  <SiteLink className={getNavLinkClasses(isSolutionPage)} page={'solutions'} navigate={navigate}>
                    Solutions
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </SiteLink>
                  {renderDropdown('solutions', 'solutions', 'Solutions', solutionPages)}
                </div>

                <div
                  className="relative"
                  onFocus={() => openDropdown('perspectives')} onMouseEnter={() => openDropdown('perspectives')}
                  onMouseLeave={scheduleClose}
                >
                  <SiteLink className={getNavLinkClasses(isPerspectivePage)} page={'perspectives'} navigate={navigate}>
                    Perspectives
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'perspectives' ? 'rotate-180' : ''}`} />
                  </SiteLink>
                  {renderDropdown('perspectives', 'perspectives', 'Perspectives', perspectivePages)}
                </div>

                <div
                  className="relative"
                  onFocus={() => openDropdown('work-with-me')} onMouseEnter={() => openDropdown('work-with-me')}
                  onMouseLeave={scheduleClose}
                >
                  <SiteLink className={getNavLinkClasses(isServicesPage)} page={'work-with-me'} navigate={navigate}>
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'work-with-me' ? 'rotate-180' : ''}`} />
                  </SiteLink>
                  {renderDropdown('work-with-me', 'work-with-me', 'Services', servicesPages, false)}
                </div>

                <SiteLink className={getNavLinkClasses(currentPage === 'about')} page={'about'} navigate={navigate}>About</SiteLink>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <AIAssistant navigate={navigate} currentPage={currentPage} />
            <SiteLink className="btn-primary btn-sm" page={'contact'} navigate={navigate}>
              Let's Talk
            </SiteLink>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <AIAssistant navigate={navigate} currentPage={currentPage} />
            <button
              aria-label="Toggle navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-none text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-neutral-950 border-t border-[#D9D9D9] dark:border-white/[0.1] max-h-screen overflow-y-auto">
            <SiteLink className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" page={'home'} navigate={navigate}>Home</SiteLink>
            <SiteLink className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" page={'ai-experience-architecture'} navigate={navigate}>AI Experience Architecture™</SiteLink>
            {renderMobileSection('solutions', 'Solutions', 'solutions', solutionPages)}
            {renderMobileSection('perspectives', 'Perspectives', 'perspectives', perspectivePages)}
            {renderMobileSection('work-with-me', 'Services', 'work-with-me', servicesPages)}
            <SiteLink className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" page={'about'} navigate={navigate}>About</SiteLink>
            <div className="px-4 pt-4">
              <SiteLink className="btn-primary w-full" page={'contact'} navigate={navigate}>
                Let's Talk
              </SiteLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
