import React from 'react';
import { pageToPath } from '../lib/routes';

type Props = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  page: string;
  navigate: (page: string) => void;
};

/** Crawlable navigation that retains SPA behavior and browser new-tab shortcuts. */
export default function SiteLink({ page, navigate, onClick, children, ...props }: Props) {
  return <a {...props} href={pageToPath[page] ?? '/'} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || props.target === '_blank') return;
    event.preventDefault();
    navigate(page);
  }}>{children}</a>;
}
