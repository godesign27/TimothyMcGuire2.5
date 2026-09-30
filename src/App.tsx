import React from 'react';
import ServiceOfferings from './components/ServiceOfferings';
import { serviceOfferings, offeringPageId } from './data/serviceOfferings';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ValueProposition from './components/ValueProposition';
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
import CaseStudyZS from './components/CaseStudyZS';
import CaseStudyAccess from './components/CaseStudyAccess';
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
import SolutionsLanding from './components/SolutionsLanding';
import MyPhilosophy from './components/MyPhilosophy';
import HowIWork from './components/HowIWork';
import WritingHub from './components/WritingHub';
import SpeakingPage from './components/SpeakingPage';
import AIExperienceArchitecturePage from './components/AIExperienceArchitecturePage';
import { pageToPath, getPageFromPath, getPageMeta, isPrivatePage, SITE_URL } from './lib/routes';
import { schemaForPage } from './lib/seo';
import AnalyticsAccess from './components/AnalyticsAccess';
import { trackPageView } from './lib/analytics';


function App({ initialPath }: { initialPath?: string }) {
  const [currentPage, setCurrentPage] = React.useState(() => getPageFromPath(initialPath ?? (typeof window !== 'undefined' ? window.location.pathname : '/')));
  const [selectedCaseStudy, setSelectedCaseStudy] = React.useState<string | null>(null);

  React.useEffect(() => {
    const meta = getPageMeta(currentPage);
    const baseUrl = SITE_URL;

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

    const robots = isPrivatePage(currentPage) ? 'noindex, nofollow' : 'index, follow, max-image-preview:large';
    setMeta('name', 'robots', robots);
    setMeta('name', 'googlebot', robots);
    setMeta('name', 'bingbot', robots);
    let schema = document.getElementById('page-schema');
    if (!schema) { schema = document.createElement('script'); schema.id = 'page-schema'; schema.setAttribute('type', 'application/ld+json'); document.head.appendChild(schema); }
    schema.textContent = JSON.stringify(schemaForPage(currentPage));
    if (!isPrivatePage(currentPage)) trackPageView(currentPage, pageToPath[currentPage]);
  }, [currentPage]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  React.useEffect(() => {
    const targetPath = pageToPath[currentPage];
    if (!targetPath) return;
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
    if (currentPage === 'service-offerings' || serviceOfferings.some(offering => offeringPageId(offering.slug) === currentPage)) {
      return <ServiceOfferings slug={serviceOfferings.find(offering => offeringPageId(offering.slug) === currentPage)?.slug} setCurrentPage={setCurrentPage} />;
    }
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
            <HomeEditorial setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
            <ValueProposition />
            <SpecializedExpertise setCurrentPage={setCurrentPage} />
            <Testimonials />
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
        return <About setCurrentPage={setCurrentPage} />;
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
        return <AnalyticsAccess><Analytics /></AnalyticsAccess>;
      case '__design__':
        return <DesignLibrary />;
      case 'ai-experience-architecture':
        return <AIExperienceArchitecturePage setCurrentPage={setCurrentPage} />;
      case 'case-studies':
        return <Solutions setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
      case 'solutions-landing':
        return <SolutionsLanding setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
      case 'work-with-me-enterprise-consulting':
        return <EnterpriseUXConsulting setCurrentPage={setCurrentPage} />;
      case 'work-with-me-fractional-leadership':
        return <FractionalSaasDesigner setCurrentPage={setCurrentPage} />;
      case 'work-with-me-strategy-sessions':
        return <StrategySessions setCurrentPage={setCurrentPage} />;
      case 'work-with-me-speaking-workshops':
        return <SpeakingWorkshops setCurrentPage={setCurrentPage} />;
      case 'case-study-zs':
        return (
          <CaseStudyAccess
            id="zs"
            title="ZS Associates"
            description="This case study covers client work and is shared by request. Enter the passphrase to continue."
          >
            <CaseStudyZS setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
          </CaseStudyAccess>
        );
      case 'solutions':
      case 'case-study-coretechs':
      case 'case-study-accenture':
      case 'case-study-jim-beam':
        if (currentPage === 'case-study-coretechs' || (currentPage === 'solutions' && selectedCaseStudy === 'CoreTechs SaaS Healthcare Product')) {
          return <CaseStudyDetail setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else if (currentPage === 'case-study-accenture' || (currentPage === 'solutions' && selectedCaseStudy === 'Accenture - Employee Onboarding')) {
          return <CaseStudyDetail2 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else if (currentPage === 'case-study-jim-beam' || (currentPage === 'solutions' && selectedCaseStudy === 'Jim Beam - The Cocktail Project')) {
          return <CaseStudyDetail3 setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        } else {
          return <SolutionsLanding setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />;
        }
      default:
        return <main className="min-h-screen pt-32 pb-24 max-w-7xl mx-auto px-6"><h1 className="text-4xl font-semibold text-ink dark:text-tan-500">Page not found</h1><p className="mt-6 text-muted dark:text-neutral-400">The page may have moved, or the address may be incorrect.</p><a href="/" className="inline-block mt-6 text-blue dark:text-lavender underline">Return home</a></main>;
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-tan-100 dark:bg-neutral-950">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} setSelectedCaseStudy={setSelectedCaseStudy} />
        {renderPage()}
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default App;
