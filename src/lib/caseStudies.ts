export const CORETECHS_CARD_IMAGE = '/coretechs-v2-dashboard.png';

export const CASE_STUDY_ROUTES: Record<string, { page: string; path: string }> = {
  'CoreTechs SaaS Healthcare Product': {
    page: 'case-study-coretechs',
    path: '/case-studies/coretechs',
  },
  'Accenture - Employee Onboarding': {
    page: 'case-study-accenture',
    path: '/case-studies/accenture',
  },
  'Jim Beam - The Cocktail Project': {
    page: 'case-study-jim-beam',
    path: '/case-studies/jim-beam',
  },
};

export function getCaseStudyRoute(title: string): { page: string; path: string } {
  return CASE_STUDY_ROUTES[title] ?? { page: 'case-studies', path: '/case-studies' };
}
