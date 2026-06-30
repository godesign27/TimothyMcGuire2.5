import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown, Bot, Globe, Box, Smartphone, Users, Building2, Palette, Heart, BarChart3, RefreshCcw, BookOpen, Workflow, PenLine, Mic2, Target } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const servicePages = [
  { id: 'agentic-experience', label: 'Agentic Experience', description: 'AI-native product design and UX leadership.', icon: Bot, iconBg: 'bg-blue-50 dark:bg-blue-500/10', iconColor: 'text-blue-600 dark:text-blue-400' },
  { id: 'enterprise-ux-consulting', label: 'Enterprise UX Consulting', description: 'Senior UX expertise for complex enterprise products.', icon: Building2, iconBg: 'bg-slate-50 dark:bg-slate-500/10', iconColor: 'text-slate-600 dark:text-slate-400' },
  { id: 'saas-product-design', label: 'SaaS Product Design', description: 'Scalable interfaces for software products.', icon: Box, iconBg: 'bg-sky-50 dark:bg-sky-500/10', iconColor: 'text-sky-600 dark:text-sky-400' },
  { id: 'marketing-web-design', label: 'Marketing Web Design', description: 'Conversion-focused websites that tell your story.', icon: Globe, iconBg: 'bg-emerald-50 dark:bg-emerald-500/10', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  { id: 'mobile-web-design', label: 'Mobile & Web Design', description: 'Responsive experiences that shine on every device.', icon: Smartphone, iconBg: 'bg-amber-50 dark:bg-amber-500/10', iconColor: 'text-amber-600 dark:text-amber-400' },
  { id: 'fractional-saas-designer', label: 'Fractional SaaS Designer', description: 'Senior design leadership on a flexible cadence.', icon: Users, iconBg: 'bg-teal-50 dark:bg-teal-500/10', iconColor: 'text-teal-600 dark:text-teal-400' },
  { id: 'speaking-workshops', label: 'Speaking & Workshops', description: 'Talks and facilitated workshops for design teams.', icon: Mic2, iconBg: 'bg-violet-50 dark:bg-violet-500/10', iconColor: 'text-violet-600 dark:text-violet-400' },
  { id: 'strategy-sessions', label: 'Strategy Sessions', description: 'Focused time with a senior design mind.', icon: Target, iconBg: 'bg-teal-50 dark:bg-teal-500/10', iconColor: 'text-teal-600 dark:text-teal-400' },
];

const solutionPages = [
  { id: 'solutions-enterprise-saas', label: 'Enterprise SaaS', description: 'Complex multi-tenant platform design.', icon: Building2, iconBg: 'bg-indigo-50 dark:bg-indigo-500/10', iconColor: 'text-indigo-600 dark:text-indigo-400' },
  { id: 'solutions-ai-native-products', label: 'AI-Native Products', description: 'Designing products where AI is foundational.', icon: Bot, iconBg: 'bg-blue-50 dark:bg-blue-500/10', iconColor: 'text-blue-600 dark:text-blue-400' },
  { id: 'solutions-design-systems', label: 'Design Systems', description: 'Scalable component and pattern libraries.', icon: Palette, iconBg: 'bg-violet-50 dark:bg-violet-500/10', iconColor: 'text-violet-600 dark:text-violet-400' },
  { id: 'solutions-healthcare-ux', label: 'Healthcare UX', description: 'Clinical and patient-facing experiences.', icon: Heart, iconBg: 'bg-rose-50 dark:bg-rose-500/10', iconColor: 'text-rose-600 dark:text-rose-400' },
  { id: 'solutions-fintech-ux', label: 'Fintech UX', description: 'Trustworthy, compliant financial product design.', icon: BarChart3, iconBg: 'bg-emerald-50 dark:bg-emerald-500/10', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  { id: 'solutions-product-modernization', label: 'Product Modernization', description: 'Redesigning legacy products and interfaces.', icon: RefreshCcw, iconBg: 'bg-orange-50 dark:bg-orange-500/10', iconColor: 'text-orange-600 dark:text-orange-400' },
];

const perspectivePages = [
  { id: 'perspectives-my-philosophy', label: 'My Philosophy', description: 'Principles guiding every design decision.', icon: BookOpen, iconBg: 'bg-slate-50 dark:bg-slate-500/10', iconColor: 'text-slate-600 dark:text-slate-400' },
  { id: 'perspectives-how-i-work', label: 'How I Work', description: 'My process, tools, and collaboration style.', icon: Workflow, iconBg: 'bg-sky-50 dark:bg-sky-500/10', iconColor: 'text-sky-600 dark:text-sky-400' },
  { id: 'perspectives-ai-native-design', label: 'AI-Native Design', description: 'How I think about designing for AI products.', icon: Bot, iconBg: 'bg-blue-50 dark:bg-blue-500/10', iconColor: 'text-blue-600 dark:text-blue-400' },
  { id: 'perspectives-writing', label: 'Writing', description: 'Articles and essays on design and systems.', icon: PenLine, iconBg: 'bg-amber-50 dark:bg-amber-500/10', iconColor: 'text-amber-600 dark:text-amber-400' },
  { id: 'perspectives-speaking', label: 'Speaking', description: 'Conference talks and panel appearances.', icon: Mic2, iconBg: 'bg-violet-50 dark:bg-violet-500/10', iconColor: 'text-violet-600 dark:text-violet-400' },
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

  const buttonClasses = "px-6 py-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all";

  const isServicePage = currentPage === 'services' || servicePages.some(s => s.id === currentPage);
  const isSolutionPage = currentPage === 'solutions' || solutionPages.some(s => s.id === currentPage);
  const isPerspectivePage = currentPage === 'perspectives' || perspectivePages.some(s => s.id === currentPage);

  const getNavLinkClasses = (active: boolean) =>
    `px-3 py-2 text-sm font-medium transition-colors relative inline-flex items-center gap-1 ${
      active
        ? "text-neutral-950 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neutral-950 dark:after:bg-white font-semibold"
        : "text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
    }`;

  const renderDropdown = (
    key: DropdownKey,
    overviewPage: string,
    overviewLabel: string,
    items: { id: string; label: string; description: string; icon: React.ElementType; iconBg: string; iconColor: string }[],
    widthClass = 'w-80',
  ) => (
    <div
      className={`absolute top-full left-0 mt-1 ${widthClass} rounded-xl bg-white dark:bg-neutral-950 dark:border dark:border-white/[0.06] shadow-xl ring-1 ring-black/5 dark:ring-white/10 transition-all duration-200 origin-top ${
        activeDropdown === key
          ? 'opacity-100 scale-100 translate-y-0'
          : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span className="text-sm font-semibold text-neutral-900 dark:text-white">{overviewLabel}</span>
        <button
          onClick={() => navigate(overviewPage)}
          className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          Overview
        </button>
      </div>
      <div className="py-1 px-2 pb-3">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg transition-colors ${
                currentPage === item.id
                  ? 'bg-neutral-100 dark:bg-white/[0.06]'
                  : 'hover:bg-neutral-50 dark:hover:bg-white/[0.04]'
              }`}
            >
              <div className={`w-9 h-9 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${item.iconColor}`} />
              </div>
              <div>
                <div className={`text-sm font-medium ${currentPage === item.id ? 'text-neutral-950 dark:text-white' : 'text-neutral-800 dark:text-neutral-200'}`}>
                  {item.label}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">
                  {item.description}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  const renderMobileSection = (
    key: DropdownKey,
    label: string,
    overviewPage: string,
    items: { id: string; label: string; description: string; icon: React.ElementType; iconBg: string; iconColor: string }[],
  ) => (
    <div key={key}>
      <button
        className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
        onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
      >
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === key ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${mobileExpanded === key ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex items-center justify-between pl-6 pr-3 py-2">
          <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">{label}</span>
          <button
            className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
            onClick={() => navigate(overviewPage)}
          >
            Overview
          </button>
        </div>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`flex items-center gap-3 w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                currentPage === item.id ? 'bg-neutral-100 dark:bg-white/[0.06]' : 'hover:bg-neutral-50 dark:hover:bg-white/[0.04]'
              }`}
              onClick={() => navigate(item.id)}
            >
              <div className={`w-8 h-8 rounded-lg ${item.iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-4 h-4 ${item.iconColor}`} />
              </div>
              <div>
                <div className={`text-sm font-medium ${currentPage === item.id ? 'text-neutral-950 dark:text-white' : 'text-neutral-800 dark:text-neutral-200'}`}>
                  {item.label}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 leading-snug">{item.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  if (!mounted) return null;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-neutral-950/90' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navRef}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => navigate('home')}>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/tim-logo2.png"
                alt="Timothy McGuire"
                className="h-8 w-auto mr-4"
              />
              <span className="text-2xl font-semibold dark:text-white">Timothy McGuire</span>
            </div>

            {/* Desktop nav items */}
            <div className="hidden md:block">
              <div className="ml-8 flex items-baseline space-x-0">

                {/* Services */}
                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('services')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isServicePage)} onClick={() => navigate('services')}>
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('services', 'services', 'Services', servicePages, 'w-80')}
                </div>

                {/* Solutions */}
                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('solutions')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isSolutionPage)} onClick={() => navigate('solutions')}>
                    Solutions
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('solutions', 'solutions', 'Solutions', solutionPages, 'w-80')}
                </div>

                {/* Perspectives */}
                <div
                  className="relative"
                  onMouseEnter={() => openDropdown('perspectives')}
                  onMouseLeave={scheduleClose}
                >
                  <button className={getNavLinkClasses(isPerspectivePage)} onClick={() => navigate('perspectives')}>
                    Perspectives
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'perspectives' ? 'rotate-180' : ''}`} />
                  </button>
                  {renderDropdown('perspectives', 'perspectives', 'Perspectives', perspectivePages, 'w-80')}
                </div>

                <a href="#" className={getNavLinkClasses(currentPage === 'about')} onClick={(e) => { e.preventDefault(); navigate('about'); }}>About</a>
                <a href="/resume" className={getNavLinkClasses(currentPage === 'resume')} onClick={(e) => { e.preventDefault(); navigate('resume'); }}>Resume</a>
                <a href="#" className={getNavLinkClasses(currentPage === 'contact')} onClick={(e) => { e.preventDefault(); navigate('contact'); }}>Contact</a>
              </div>
            </div>
          </div>

          {/* Desktop right: theme + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={buttonClasses} onClick={() => navigate('contact')}>
              Let's Talk
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white shadow-lg dark:bg-neutral-950 max-h-screen overflow-y-auto">
            {renderMobileSection('services', 'Services', 'services', servicePages)}
            {renderMobileSection('solutions', 'Solutions', 'solutions', solutionPages)}
            {renderMobileSection('perspectives', 'Perspectives', 'perspectives', perspectivePages)}
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800" onClick={(e) => { e.preventDefault(); navigate('about'); }}>About</a>
            <a href="/resume" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800" onClick={(e) => { e.preventDefault(); navigate('resume'); }}>Resume</a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800" onClick={(e) => { e.preventDefault(); navigate('contact'); }}>Contact</a>
            <button className={`mt-4 w-full ${buttonClasses}`} onClick={() => navigate('contact')}>
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
