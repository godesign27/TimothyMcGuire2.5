import React from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ValueProposition from './components/ValueProposition';
import SuccessStories from './components/SuccessStories';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Solutions from './components/Solutions';
import CaseStudyDetail from './components/CaseStudyDetail';
import CaseStudyDetail2 from './components/CaseStudyDetail2';
import CaseStudyDetail3 from './components/CaseStudyDetail3';
import MarketingWebDesign from './components/MarketingWebDesign';
import SpecializedExpertise from './components/SpecializedExpertise';
import SaasProductDesign from './components/SaasProductDesign';
import MobileWebDesign from './components/MobileWebDesign';
import FractionalSaasDesigner from './components/FractionalSaasDesigner';
import Resume from './components/Resume';
import Analytics from './components/Analytics';
import { trackPageView } from './lib/analytics';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  canonicalPath?: string;
}

const SITE_NAME = 'Timothy McGuire - Experience Designer';

const pageSeo: Record<string, PageMeta> = {
  home: {
    title: SITE_NAME,
    description: 'Timothy McGuire is a Senior UX Designer with 12+ years of experience creating intuitive SaaS products, responsive websites, and mobile app solutions.',
    path: '/',
  },
  about: {
    title: `${SITE_NAME} | About`,
    description: 'Learn about Timothy McGuire, a Senior UX Designer with 12+ years of experience leading user-centered design initiatives for SaaS products, responsive websites, and mobile applications.',
    path: '/about',
  },
  contact: {
    title: `${SITE_NAME} | Contact`,
    description: 'Get in touch with Timothy McGuire for UX/UI design services, SaaS product design, responsive web design, and fractional design partnerships.',
    path: '/contact',
  },
  services: {
    title: `${SITE_NAME} | Services`,
    description: 'Explore a full range of design services including SaaS product design, marketing web design, mobile app design, and fractional design leadership.',
    path: '/services',
  },
  'marketing-web-design': {
    title: `${SITE_NAME} | Marketing Web Design`,
    description: 'Expert marketing website design services focused on conversion, user engagement, and brand storytelling. Responsive, accessible, and results-driven.',
    path: '/services/marketing-web-design',
  },
  'saas-product-design': {
    title: `${SITE_NAME} | SaaS Product Design`,
    description: 'End-to-end SaaS product design services including user research, wireframing, prototyping, design systems, and accessibility compliance for enterprise platforms.',
    path: '/services/saas-product-design',
  },
  'mobile-web-design': {
    title: `${SITE_NAME} | Mobile & Web Design`,
    description: 'Mobile-first and responsive web design services that deliver intuitive, accessible user experiences across all devices and screen sizes.',
    path: '/services/mobile-web-design',
  },
  'fractional-saas-designer': {
    title: `${SITE_NAME} | Fractional SaaS Designer`,
    description: 'Hire a fractional SaaS designer for flexible, senior-level UX/UI design leadership. Scalable expertise for startups and growing SaaS teams without the full-time overhead.',
    path: '/services/fractional-saas-designer',
  },
  resume: {
    title: `${SITE_NAME} | Resume`,
    description: 'View the professional resume of Timothy McGuire, a Senior UX Designer with 12+ years of experience at companies including Bank of America, Accenture, TransUnion, and more.',
    path: '/resume',
  },
  solutions: {
    title: `${SITE_NAME} | Case Studies`,
    description: 'Explore real-world case studies showcasing UX/UI design solutions for SaaS products, enterprise platforms, and consumer brands.',
    path: '/solutions',
  },
  analytics: {
    title: `${SITE_NAME} | Analytics`,
    description: 'Site analytics dashboard for tracking page views, visitors, and engagement.',
    path: '/analytics',
  },
};

const pageToPath: Record<string, string> = {
  home: '/',
  about: '/about',
  contact: '/contact',
  services: '/services',
  solutions: '/solutions',
  'marketing-web-design': '/services/marketing-web-design',
  'saas-product-design': '/services/saas-product-design',
  'mobile-web-design': '/services/mobile-web-design',
  'fractional-saas-designer': '/services/fractional-saas-designer',
  resume: '/resume',
  analytics: '/analytics',
};

const getPageFromPath = (pathname: string): string => {
  const normalizedPath = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const entry = Object.entries(pageToPath).find(([, path]) => path === normalizedPath);
  return entry?.[0] ?? 'home';
};

function App() {
  const [currentPage, setCurrentPage] = React.useState(() => getPageFromPath(window.location.pathname));
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<string | null>(null);

  React.useEffect(() => {
    const meta = pageSeo[currentPage] ?? pageSeo.home;
    const baseUrl = 'https://godesigninc.com';

    document.title = meta.title;

    const setMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    setMeta('name', 'description', meta.description);
    setMeta('name', 'citation_title', meta.title);

    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:url', `${baseUrl}${meta.path}`);

    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseUrl}${meta.path}`;

    trackPageView(currentPage, meta.path);
  }, [currentPage]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (currentPage !== 'solutions' && selectedCaseStudy) {
      setSelectedCaseStudy(null);
    }
  }, [currentPage]);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    const targetPath = pageToPath[currentPage] ?? '/';
    const currentPath = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';

    if (targetPath !== currentPath) {
      window.history.pushState({ page: currentPage }, '', targetPath);
    }
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Partners />
            <ValueProposition />
            <SuccessStories setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
            <Testimonials />
            <SpecializedExpertise setCurrentPage={setCurrentPage} />
            <CTA setCurrentPage={setCurrentPage} />
          </>
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'marketing-web-design':
        return <MarketingWebDesign setCurrentPage={setCurrentPage} />;
      case 'saas-product-design':
        return <SaasProductDesign setCurrentPage={setCurrentPage} />;
      case 'mobile-web-design':
        return <MobileWebDesign setCurrentPage={setCurrentPage} />;
      case 'fractional-saas-designer':
        return <FractionalSaasDesigner setCurrentPage={setCurrentPage} />;
      case 'resume':
        return <Resume />;
      case 'analytics':
        return <Analytics />;
      case 'solutions':
        if (selectedCaseStudy === 'CoreTechs SaaS Healthcare Product') {
          return <CaseStudyDetail setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else if (selectedCaseStudy === 'Accenture - Employee Onboarding') {
          return <CaseStudyDetail2 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else if (selectedCaseStudy === 'Jim Beam - The Cocktail Project') {
          return <CaseStudyDetail3 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else {
          return (
            <Solutions 
              setCurrentPage={setCurrentPage} 
              setSelectedCaseStudy={setSelectedCaseStudy}
            />
          );
        }
      default:
        return null;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-white dark:bg-brand-950">
        <Navbar 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        {renderPage()}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;