import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, Bot, Globe, Box, Smartphone, Users, Building2, Palette, Heart, BarChart3, RefreshCcw, BookOpen, Workflow, PenLine, Mic2, Target } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const servicePages = [
  { id: 'agentic-experience', label: 'Agentic Experience', description: 'AI-native product design and UX leadership.', icon: Bot },
  { id: 'enterprise-ux-consulting', label: 'Enterprise UX Consulting', description: 'Senior UX expertise for complex enterprise products.', icon: Building2 },
  { id: 'saas-product-design', label: 'SaaS Product Design', description: 'Scalable interfaces for software products.', icon: Box },
  { id: 'marketing-web-design', label: 'Marketing Web Design', description: 'Conversion-focused websites that tell your story.', icon: Globe },
  { id: 'mobile-web-design', label: 'Mobile & Web Design', description: 'Responsive experiences that shine on every device.', icon: Smartphone },
  { id: 'fractional-saas-designer', label: 'Fractional SaaS Designer', description: 'Senior design leadership on a flexible cadence.', icon: Users },
  { id: 'speaking-workshops', label: 'Speaking & Workshops', description: 'Talks and facilitated workshops for design teams.', icon: Mic2 },
  { id: 'strategy-sessions', label: 'Strategy Sessions', description: 'Focused time with a senior design mind.', icon: Target },
];

const solutionPages = [
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

type DropdownKey = 'services' | 'solutions' | 'perspectives' | null;

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => { setMounted(true); }, []);

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
    setCurrentPage(page);
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setMobileExpanded(null);
  };

  const isServicePage = currentPage === 'services' || servicePages.some(s => s.id === currentPage);
  const isSolutionPage = currentPage === 'solutions' || solutionPages.some(s => s.id === currentPage);
  const isPerspectivePage = currentPage === 'perspectives' || perspectivePages.some(s => s.id === currentPage);

  const getNavLinkClasses = (active: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors relative inline-flex items-center gap-1 ${
      active
        ? "text-black dark:text-white font-semibold"
        : "text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
    }`;

  const renderItem = (item: { id: string; label: string; description: string; icon: React.ElementType }) => {
    const Icon = item.icon;
    return (
      <button
        key={item.id}
        onClick={() => navigate(item.id)}
        className={`flex items-center gap-3 w-full text-left px-4 py-3 transition-colors ${
          currentPage === item.id
            ? 'bg-neutral-100 dark:bg-white/[0.06]'
            : 'hover:bg-neutral-50 dark:hover:bg-white/[0.04]'
        }`}
      >
        <div className="w-8 h-8 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08] flex items-center justify-center flex-shrink-0">
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
      </button>
    );
  };

  const renderDropdown = (
    key: DropdownKey,
    overviewPage: string,
    overviewLabel: string,
    items: { id: string; label: string; description: string; icon: React.ElementType }[],
  ) => (
    <div
      className={`absolute top-full left-0 mt-2 w-80 bg-white dark:bg-neutral-950 border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px] transition-all duration-200 origin-top ${
        activeDropdown === key
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted dark:text-neutral-500">{overviewLabel}</span>
        <button
          onClick={() => navigate(overviewPage)}
          className="text-xs font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
        >
          Overview
        </button>
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
          <button
            className="text-xs font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            onClick={() => navigate(overviewPage)}
          >
            Overview
          </button>
        </div>
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );

  if (!mounted) return null;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[#D9D9D9] dark:border-white/[0.1] dark:bg-neutral-950/95' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/tim-logo2.png"
                alt="Timothy McGuire"
                className="h-8 w-auto mr-4"
              />
              <span className="text-xl font-semibold text-black dark:text-white">Timothy McGuire</span>
            </div>

            <div className="hidden md:block">
              <div className="ml-8 flex items-baseline space-x-0">

                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('services')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isServicePage)} onClick={() => navigate('services')}>
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('services', 'services', 'Services', servicePages)}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('solutions')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isSolutionPage)} onClick={() => navigate('solutions')}>
                    Solutions
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('solutions', 'solutions', 'Solutions', solutionPages)}
                </div>

                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('perspectives')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isPerspectivePage)} onClick={() => navigate('perspectives')}>
                    Perspectives
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'perspectives' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('perspectives', 'perspectives', 'Perspectives', perspectivePages)}
                </div>

                <button className={getNavLinkClasses(currentPage === 'about')} onClick={() => navigate('about')}>About</button>
                <button className={getNavLinkClasses(currentPage === 'resume')} onClick={() => navigate('resume')}>Resume</button>
                <button className={getNavLinkClasses(currentPage === 'contact')} onClick={() => navigate('contact')}>Contact</button>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-[10px] text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] transition-colors"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="btn-primary btn-sm" onClick={() => navigate('contact')}>
              Let's Talk
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-[10px] text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-[10px] text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 bg-white dark:bg-neutral-950 border-t border-[#D9D9D9] dark:border-white/[0.1] max-h-screen overflow-y-auto">
            {renderMobileSection('services', 'Services', 'services', servicePages)}
            {renderMobileSection('solutions', 'Solutions', 'solutions', solutionPages)}
            {renderMobileSection('perspectives', 'Perspectives', 'perspectives', perspectivePages)}
            <button className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" onClick={() => navigate('about')}>About</button>
            <button className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" onClick={() => navigate('resume')}>Resume</button>
            <button className="block w-full text-left px-4 py-3 text-sm font-medium text-muted dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-white/[0.04]" onClick={() => navigate('contact')}>Contact</button>
            <div className="px-4 pt-4">
              <button className="btn-primary w-full" onClick={() => navigate('contact')}>
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
