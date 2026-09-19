import { renderToString } from 'react-dom/server';
import App from './App';
export { pageToPath, getPageMeta, isPrivatePage, canonicalPage, SITE_URL } from './lib/routes';
export { schemaForPage } from './lib/seo';
export const render = (path: string) => renderToString(<App initialPath={path} />);
