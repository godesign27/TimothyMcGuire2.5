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
import AgenticExperience from './components/AgenticExperience';
import EnterpriseUXConsulting from './components/EnterpriseUXConsulting';
import SpeakingWorkshops from './components/SpeakingWorkshops';
import StrategySessions from './components/StrategySessions';
import WorkWithMe from './components/WorkWithMe';
import Perspectives from './components/Perspectives';
import PerspectiveDetail from './components/PerspectiveDetail';
import SolutionDetail from './components/SolutionDetail';
import Resume from './components/Resume';
import Analytics from './components/Analytics';
import DesignLibrary from './components/DesignLibrary';
import HomeEditorial from './components/HomeEditorial';
import MyPhilosophy from './components/MyPhilosophy';
import HowIWork from './components/HowIWork';
import WritingHub from './components/WritingHub';
import SpeakingPage from './components/SpeakingPage';
import { trackPageView } from './lib/analytics';

interface PageMeta {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = 'Timothy McGuire - Experience Designer';

const pageSeo: Record<string, PageMeta> = {
  home: {
    title: SITE_NAME,
    description: 'Timothy McGuire is a Senior UX Designer with 15+ years of experience creating intuitive SaaS products, AI-native platforms, and enterprise digital experiences.',
    path: '/',
  },
  about: {
    title: `${SITE_NAME} | About`,
    description: 'Learn about Timothy McGuire, a Senior UX Designer with 15+ years of experience leading user-centered design for enterprise SaaS, AI products, and digital platforms.',
    path: '/about',
  },
  contact: {
    title: `${SITE_NAME} | Contact`,
    description: 'Get in touch with Timothy McGuire for UX/UI design services, AI product design, enterprise consulting, and fractional design partnerships.',
    path: '/contact',
  },
  services: {
    title: `${SITE_NAME} | Services`,
    description: 'Explore a full range of design services including AI & agentic UX, SaaS product design, enterprise consulting, marketing web design, and fractional design leadership.',
    path: '/services',
  },
  'marketing-web-design': {
    title: `${SITE_NAME} | Marketing Web Design`,
    description: 'Expert marketing website design services focused on conversion, user engagement, and brand storytelling.',
    path: '/services/marketing-web-design',
  },
  'saas-product-design': {
    title: `${SITE_NAME} | SaaS Product Design`,
    description: 'End-to-end SaaS product design services including user research, wireframing, prototyping, design systems, and accessibility compliance.',
    path: '/services/saas-product-design',
  },
  'mobile-web-design': {
    title: `${SITE_NAME} | Mobile & Web Design`,
    description: 'Mobile-first and responsive web design services that deliver intuitive, accessible user experiences across all devices.',
    path: '/services/mobile-web-design',
  },
  'fractional-saas-designer': {
    title: `${SITE_NAME} | Fractional SaaS Designer`,
    description: 'Hire a fractional SaaS designer for flexible, senior-level UX/UI design leadership without the full-time overhead.',
    path: '/services/fractional-saas-designer',
  },
  'agentic-experience': {
    title: `${SITE_NAME} | AI & Agentic Experience Design`,
    description: 'AI and agent experience design services. Trust-by-design frameworks, mental model mapping, and interaction patterns for AI-powered products.',
    path: '/services/agentic-experience',
  },
  'enterprise-ux-consulting': {
    title: `${SITE_NAME} | Enterprise UX Consulting`,
    description: 'Senior UX consulting for complex enterprise products. Platform redesign, stakeholder alignment, design systems, and research-driven strategy.',
    path: '/services/enterprise-ux-consulting',
  },
  'speaking-workshops': {
    title: `${SITE_NAME} | Speaking & Workshops`,
    description: 'Conference talks and facilitated workshops on AI product design, design systems, and enterprise UX for product and design teams.',
    path: '/services/speaking-workshops',
  },
  'strategy-sessions': {
    title: `${SITE_NAME} | Strategy Sessions`,
    description: 'Focused strategy sessions with a senior design mind. Design audits, advisory calls, and AI UX strategy engagements.',
    path: '/services/strategy-sessions',
  },
  'work-with-me': {
    title: `${SITE_NAME} | Work With Me`,
    description: 'Find the right engagement format — from full-scale redesign to fractional leadership, workshops, and focused strategy sessions.',
    path: '/services/work-with-me',
  },
  resume: {
    title: `${SITE_NAME} | Resume`,
    description: 'View the professional resume of Timothy McGuire, a Senior UX Designer with 15+ years of experience at Bank of America, Accenture, TransUnion, and more.',
    path: '/resume',
  },
  solutions: {
    title: `${SITE_NAME} | Solutions`,
    description: 'Explore case studies and solution areas showcasing UX design for enterprise SaaS, AI products, design systems, healthcare, fintech, and product modernization.',
    path: '/solutions',
  },
  'solutions-enterprise-saas': {
    title: `${SITE_NAME} | Enterprise SaaS Design`,
    description: 'Designing complex, multi-tenant SaaS platforms that scale without sacrificing usability.',
    path: '/solutions/enterprise-saas',
  },
  'solutions-ai-native-products': {
    title: `${SITE_NAME} | AI-Native Product Design`,
    description: 'Designing products where AI is foundational — not bolted on — and trust is built into every interaction.',
    path: '/solutions/ai-native-products',
  },
  'solutions-design-systems': {
    title: `${SITE_NAME} | Design Systems`,
    description: 'Building the shared language that lets teams design and ship faster without sacrificing consistency.',
    path: '/solutions/design-systems',
  },
  'solutions-healthcare-ux': {
    title: `${SITE_NAME} | Healthcare UX`,
    description: 'Designing clinical and patient-facing experiences where clarity, trust, and compliance are non-negotiable.',
    path: '/solutions/healthcare-ux',
  },
  'solutions-fintech-ux': {
    title: `${SITE_NAME} | Fintech UX`,
    description: 'Designing financial products that are trustworthy, compliant, and genuinely easy to use.',
    path: '/solutions/fintech-ux',
  },
  'solutions-product-modernization': {
    title: `${SITE_NAME} | Product Modernization`,
    description: 'Redesigning legacy products that have accumulated years of complexity, debt, and user frustration.',
    path: '/solutions/product-modernization',
  },
  perspectives: {
    title: `${SITE_NAME} | Perspectives`,
    description: 'Essays, frameworks, and working principles on AI-native design, enterprise UX, and the craft of building great digital products.',
    path: '/perspectives',
  },
  'perspectives-my-philosophy': {
    title: `${SITE_NAME} | My Philosophy`,
    description: 'A set of design principles built from 15+ years of building enterprise products, AI tools, and digital experiences.',
    path: '/perspectives/my-philosophy',
  },
  'perspectives-how-i-work': {
    title: `${SITE_NAME} | How I Work`,
    description: 'My design process, collaboration style, and tools — from discovery through handoff.',
    path: '/perspectives/how-i-work',
  },
  'perspectives-ai-native-design': {
    title: `${SITE_NAME} | AI-Native Design`,
    description: 'How I think about designing products where AI is a first-class participant, not a feature.',
    path: '/perspectives/ai-native-design',
  },
  'perspectives-writing': {
    title: `${SITE_NAME} | Writing`,
    description: 'Essays, articles, and short-form thinking on design, AI, and building digital products.',
    path: '/perspectives/writing',
  },
  'perspectives-speaking': {
    title: `${SITE_NAME} | Speaking`,
    description: 'Conference talks, workshops, and panel discussions on AI product design and enterprise UX.',
    path: '/perspectives/speaking',
  },
  analytics: {
    title: `${SITE_NAME} | Analytics`,
    description: 'Site analytics dashboard.',
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
  'agentic-experience': '/services/agentic-experience',
  'enterprise-ux-consulting': '/services/enterprise-ux-consulting',
  'speaking-workshops': '/services/speaking-workshops',
  'strategy-sessions': '/services/strategy-sessions',
  'work-with-me': '/services/work-with-me',
  resume: '/resume',
  'solutions-enterprise-saas': '/solutions/enterprise-saas',
  'solutions-ai-native-products': '/solutions/ai-native-products',
  'solutions-design-systems': '/solutions/design-systems',
  'solutions-healthcare-ux': '/solutions/healthcare-ux',
  'solutions-fintech-ux': '/solutions/fintech-ux',
  'solutions-product-modernization': '/solutions/product-modernization',
  perspectives: '/perspectives',
  'perspectives-my-philosophy': '/perspectives/my-philosophy',
  'perspectives-how-i-work': '/perspectives/how-i-work',
  'perspectives-ai-native-design': '/perspectives/ai-native-design',
  'perspectives-writing': '/perspectives/writing',
  'perspectives-speaking': '/perspectives/speaking',
  analytics: '/analytics',
  '__design__': '/__design__',
};

const getPageFromPath = (pathname: string): string => {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const entry = Object.entries(pageToPath).find(([, path]) => path === normalized);
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

  const perspectiveDetailPages = new Set([
    'perspectives-ai-native-design',
  ]);

  const solutionDetailPages = new Set([
    'solutions-enterprise-saas',
    'solutions-ai-native-products',
    'solutions-design-systems',
    'solutions-healthcare-ux',
    'solutions-fintech-ux',
    'solutions-product-modernization',
  ]);

  const renderPage = () => {
    if (perspectiveDetailPages.has(currentPage)) {
      return <PerspectiveDetail page={currentPage} setCurrentPage={setCurrentPage} />;
    }
    if (solutionDetailPages.has(currentPage)) {
      return <SolutionDetail page={currentPage} setCurrentPage={setCurrentPage} />;
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero setCurrentPage={setCurrentPage} />
            <Partners />
            <ValueProposition />
            <SuccessStories setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
            <SpecializedExpertise setCurrentPage={setCurrentPage} />
            <Testimonials />
            <HomeEditorial setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
            <CTA setCurrentPage={setCurrentPage} />
          </>
        );
      case 'perspectives-my-philosophy':
        return <MyPhilosophy setCurrentPage={setCurrentPage} />;
      case 'perspectives-how-i-work':
        return <HowIWork setCurrentPage={setCurrentPage} />;
      case 'perspectives-writing':
        return <WritingHub setCurrentPage={setCurrentPage} />;
      case 'perspectives-speaking':
        return <SpeakingPage setCurrentPage={setCurrentPage} />;
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
      case 'agentic-experience':
        return <AgenticExperience setCurrentPage={setCurrentPage} />;
      case 'enterprise-ux-consulting':
        return <EnterpriseUXConsulting setCurrentPage={setCurrentPage} />;
      case 'speaking-workshops':
        return <SpeakingWorkshops setCurrentPage={setCurrentPage} />;
      case 'strategy-sessions':
        return <StrategySessions setCurrentPage={setCurrentPage} />;
      case 'work-with-me':
        return <WorkWithMe setCurrentPage={setCurrentPage} />;
      case 'perspectives':
        return <Perspectives setCurrentPage={setCurrentPage} />;
      case 'resume':
        return <Resume />;
      case 'analytics':
        return <Analytics />;
      case '__design__':
        return <DesignLibrary />;
      case 'solutions':
        if (selectedCaseStudy === 'CoreTechs SaaS Healthcare Product') {
          return <CaseStudyDetail setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else if (selectedCaseStudy === 'Accenture - Employee Onboarding') {
          return <CaseStudyDetail2 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else if (selectedCaseStudy === 'Jim Beam - The Cocktail Project') {
          return <CaseStudyDetail3 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else {
          return <Solutions setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        }
      default:
        return null;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderPage()}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
