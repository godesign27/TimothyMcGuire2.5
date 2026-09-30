import { serviceOfferings, offeringPageId, offeringPath } from '../data/serviceOfferings';

export interface PageMeta {
  title: string;
  description: string;
  path: string;
}

const SITE_NAME = 'Timothy McGuire — Agentic AI Designer & Director';

export const pageSeo: Record<string, PageMeta> = {
  'case-study-coretechs': { title: 'CoreTechs Healthcare SaaS Case Study | Timothy McGuire', description: 'Explore the CoreTechs healthcare product transformation, UX research, and interactive product and design-system previews.', path: '/case-studies/coretechs' },
  'case-study-accenture': { title: 'Accenture Employee Onboarding Case Study | Timothy McGuire', description: 'Explore the research and design behind the Accenture employee onboarding experience.', path: '/case-studies/accenture' },
  'case-study-jim-beam': { title: 'Jim Beam Cocktail Project Case Study | Timothy McGuire', description: 'Explore the strategy and experience design behind The Cocktail Project for Jim Beam.', path: '/case-studies/jim-beam' },
  'case-study-zs': { title: 'Protected Case Study | Timothy McGuire', description: 'This case study is shared by request.', path: '/case-studies/zs' },
  '__design__': { title: 'Design Library | Timothy McGuire', description: 'Internal design reference.', path: '/__design__' },
  'not-found': { title: 'Page not found | Timothy McGuire', description: 'This page could not be found.', path: '/404' },
  'service-offerings': {
    title: 'Agentic AI & Design Systems Service Offerings | Timothy McGuire',
    description: 'Compare focused AI experience audits, design-system builds, fractional leadership, and team workshops with clear scope and indicative pricing.',
    path: '/service-offerings',
  },
  ...Object.fromEntries(serviceOfferings.map(offering => [offeringPageId(offering.slug), {
    title: `${offering.name} | Timothy McGuire`,
    description: `${offering.promise} Explore scope, timing, and pricing with Timothy McGuire.`,
    path: offeringPath(offering.slug),
  }])),
  home: {
    title: SITE_NAME,
    description: 'Timothy McGuire brings 15+ years in enterprise UX to agentic AI design, AI experience strategy, and design systems. Explore his work and advisory services.',
    path: '/',
  },
  about: {
    title: `${SITE_NAME} | About`,
    description: 'Meet Timothy McGuire, an enterprise UX leader with 15+ years of experience and a current focus on agentic AI, experience strategy, and design systems.',
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
    title: `${SITE_NAME} | Fractional Agentic AI Design Director`,
    description: 'Hire a fractional Agentic AI Design Director. Senior-level agentic UX leadership, agentic design systems, and AI product strategy on retainer — without the full-time overhead.',
    path: '/services/fractional-saas-designer',
  },
  'agentic-experience': {
    title: `Timothy McGuire | Agentic AI Designer & Agentic Experience Design Director`,
    description: 'Agentic AI designer and director with deep expertise in agentic experience design, agentic design systems, trust-by-design frameworks, human-in-the-loop patterns, and AI product strategy. Available for consulting and fractional leadership.',
    path: '/services/agentic-experience',
  },
  'enterprise-ux-consulting': {
    title: `${SITE_NAME} | Enterprise UX Consulting & Agentic AI Strategy`,
    description: 'Director-level enterprise UX consulting and agentic AI experience strategy. Complex SaaS platform redesign, agentic design systems, stakeholder alignment, and research-driven transformation.',
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
    path: '/work-with-me',
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
    title: `Timothy McGuire | AI-Native & Agentic Product Design`,
    description: 'Expert agentic AI designer and director. Designing AI-native and agentic products where trust, transparency, and human-in-the-loop control are foundational — not bolted on. Trust-by-design, confidence signaling, agentic oversight UI.',
    path: '/solutions/ai-native-products',
  },
  'solutions-design-systems': {
    title: `Timothy McGuire | Agentic Design Systems & Component Architecture`,
    description: 'Building agentic design systems — token architecture, component libraries, and pattern frameworks purpose-built for AI-native and agentic products. Shared language for teams shipping at speed without sacrificing consistency.',
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
  'ai-experience-architecture': {
    title: `Timothy McGuire | AI Experience Architecture™`,
    description: 'A framework for designing intelligent enterprise products that people understand, trust, and confidently adopt. Five pillars: Signal Architecture, Human Oversight Design, Agentic Design Systems, Trust Architecture, AI Governance UX.',
    path: '/ai-experience-architecture',
  },
  'case-studies': {
    title: `${SITE_NAME} | Case Studies`,
    description: 'Case studies and strategic work across enterprise AI, healthcare SaaS, agentic design systems, and complex product design.',
    path: '/case-studies',
  },
  'work-with-me-enterprise-consulting': {
    title: `${SITE_NAME} | Enterprise AI Consulting`,
    description: 'Senior UX leadership and AI experience strategy for complex enterprise AI products.',
    path: '/work-with-me/enterprise-consulting',
  },
  'work-with-me-fractional-leadership': {
    title: `${SITE_NAME} | Fractional Design Leadership`,
    description: 'Senior design leadership on a flexible cadence — without the full-time overhead.',
    path: '/work-with-me/fractional-leadership',
  },
  'work-with-me-strategy-sessions': {
    title: `${SITE_NAME} | Strategy Sessions`,
    description: 'Focused advisory engagements with a senior AI experience design mind.',
    path: '/work-with-me/strategy-sessions',
  },
  'work-with-me-speaking-workshops': {
    title: `${SITE_NAME} | Speaking & Workshops`,
    description: 'Talks and facilitated workshops on AI experience design for teams and conferences.',
    path: '/work-with-me/speaking-workshops',
  },
};

export const pageToPath: Record<string, string> = {
  'case-study-coretechs': '/case-studies/coretechs',
  'case-study-accenture': '/case-studies/accenture',
  'case-study-jim-beam': '/case-studies/jim-beam',
  'case-study-zs': '/case-studies/zs',
  'service-offerings': '/service-offerings',
  ...Object.fromEntries(serviceOfferings.map(offering => [offeringPageId(offering.slug), offeringPath(offering.slug)])),
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
  'work-with-me': '/work-with-me',
  resume: '/resume',
  'ai-experience-architecture': '/ai-experience-architecture',
  'case-studies': '/case-studies',
  'work-with-me-enterprise-consulting': '/work-with-me/enterprise-consulting',
  'work-with-me-fractional-leadership': '/work-with-me/fractional-leadership',
  'work-with-me-strategy-sessions': '/work-with-me/strategy-sessions',
  'work-with-me-speaking-workshops': '/work-with-me/speaking-workshops',
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

export const getPageFromPath = (pathname: string): string => {
  const normalized = pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const entry = Object.entries(pageToPath).find(([, path]) => path === normalized);
  return entry?.[0] ?? (normalized === '/services/work-with-me' ? 'work-with-me' : 'not-found');
};

export const SITE_URL = 'https://timothymcguire.com';
export const isPrivatePage = (page: string) => ['analytics', '__design__', 'not-found', 'case-study-zs'].includes(page);
export const canonicalPage: Record<string, string> = {
  'enterprise-ux-consulting': 'work-with-me-enterprise-consulting',
  'fractional-saas-designer': 'work-with-me-fractional-leadership',
  'strategy-sessions': 'work-with-me-strategy-sessions',
  'speaking-workshops': 'work-with-me-speaking-workshops',
};
export const getPageMeta = (page: string) => pageSeo[canonicalPage[page] ?? page] ?? pageSeo['not-found'];
