import { getPageMeta, isPrivatePage, SITE_URL } from './routes';

// Only factual, public information. No hidden FAQs or fabricated credentials.
export function schemaForPage(page: string) {
  if (isPrivatePage(page)) return { '@context': 'https://schema.org', '@graph': [] };
  const meta = getPageMeta(page);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Person', '@id': `${SITE_URL}/#person`, name: 'Timothy McGuire',
        url: `${SITE_URL}/about`, jobTitle: 'Enterprise AI Experience Architect and UX Director',
        knowsAbout: ['Enterprise UX', 'Agentic AI Design', 'AI Experience Strategy', 'Agentic Design Systems', 'Human-Centered AI', 'Design Leadership'],
        sameAs: ['https://www.linkedin.com/in/timothymcguire27'] },
      { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: SITE_URL,
        name: 'Timothy McGuire', publisher: { '@id': `${SITE_URL}/#person` } },
      { '@type': 'WebPage', '@id': `${SITE_URL}${meta.path}#webpage`, url: `${SITE_URL}${meta.path}`,
        name: meta.title, description: meta.description, inLanguage: 'en-US',
        isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': `${SITE_URL}/#person` } },
    ],
  };
}
