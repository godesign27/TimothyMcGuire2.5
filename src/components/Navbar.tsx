import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from 'next-themes';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const servicePages = [
  { id: 'marketing-web-design', label: 'Marketing Web Design' },
  { id: 'saas-product-design', label: 'SaaS Product Design' },
  { id: 'mobile-web-design', label: 'Mobile & Web Design' },
  { id: 'agentic-experience', label: 'Agentic Experience' },
  { id: 'fractional-saas-designer', label: 'Fractional SaaS Designer' },
];

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  const buttonClasses = "px-6 py-2 rounded-full bg-brand-600 text-white hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all";

  const isServicePage = currentPage === 'services' || servicePages.some(s => s.id === currentPage);

  const getLinkClasses = (page: string) => {
    const baseClasses = "px-3 py-2 text-sm font-medium transition-colors relative";
    const isActive = currentPage === page;

    return `${baseClasses} ${
      isActive
        ? "text-neutral-950 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neutral-950 dark:after:bg-white font-semibold"
        : "text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
    }`;
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-neutral-950/90' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/tim-logo2.png"
                alt="Timothy McGuire"
                className="h-8 w-auto mr-4 dark:hidden"
              />
              <img
                src="https://knddrhyoqawaccpztdiw.supabase.co/storage/v1/object/public/go-images/tim-logo2.png"
                alt="Timothy McGuire"
                className="h-8 w-auto mr-4 hidden dark:block"
              />
              <span className="text-2xl font-semibold dark:text-white">Timothy McGuire</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors relative inline-flex items-center gap-1 ${
                      isServicePage
                        ? "text-neutral-950 dark:text-white after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-neutral-950 dark:after:bg-white font-semibold"
                        : "text-neutral-800 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                    }`}
                    onClick={() => {
                      setCurrentPage('services');
                      setIsServicesOpen(false);
                    }}
                  >
                    Services
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 rounded-lg bg-white dark:bg-neutral-900 shadow-lg ring-1 ring-black/5 dark:ring-white/10 py-2 transition-all duration-200 origin-top ${
                      isServicesOpen
                        ? 'opacity-100 scale-100 translate-y-0'
                        : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    {servicePages.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          setCurrentPage(service.id);
                          setIsServicesOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2.5 text-sm transition-colors ${
                          currentPage === service.id
                            ? 'bg-neutral-50 dark:bg-neutral-800 text-neutral-950 dark:text-white font-medium'
                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white'
                        }`}
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>
                <a
                  href="#"
                  className={getLinkClasses('solutions')}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('solutions');
                  }}
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className={getLinkClasses('about')}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('about');
                  }}
                >
                  About
                </a>
                <a
                  href="/resume"
                  className={getLinkClasses('resume')}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage('resume');
                  }}
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                className={`ml-4 ${buttonClasses}`}
                onClick={() => setCurrentPage('contact')}
              >
                Let's Talk
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-1 rounded-full text-neutral-700 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white focus:outline-none mr-2"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg dark:bg-neutral-950">
            <div>
              <button
                className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  isMobileServicesOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <button
                  className="block w-full text-left pl-6 pr-3 py-2 rounded-md text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:text-white dark:hover:bg-neutral-800"
                  onClick={() => {
                    setCurrentPage('services');
                    setIsMenuOpen(false);
                  }}
                >
                  All Services
                </button>
                {servicePages.map((service) => (
                  <button
                    key={service.id}
                    className={`block w-full text-left pl-6 pr-3 py-2 rounded-md text-sm transition-colors ${
                      currentPage === service.id
                        ? 'font-medium text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 hover:bg-neutral-50 dark:hover:text-white dark:hover:bg-neutral-800'
                    }`}
                    onClick={() => {
                      setCurrentPage(service.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {service.label}
                  </button>
                ))}
              </div>
            </div>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('solutions');
                setIsMenuOpen(false);
              }}
            >
              Solutions
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('about');
                setIsMenuOpen(false);
              }}
            >
              About
            </a>
            <a
              href="/resume"
              className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-800"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage('resume');
                setIsMenuOpen(false);
              }}
            >
              Resume
            </a>
            <button
              className={`mt-4 w-full ${buttonClasses}`}
              onClick={() => {
                setCurrentPage('contact');
                setIsMenuOpen(false);
              }}
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;