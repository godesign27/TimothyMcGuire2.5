import React from 'react';
import { ArrowRight, Check, Plus, Minus } from 'lucide-react';
import Eyebrow from './Eyebrow';
import ServicesContactForm from './ServicesContactForm';
import AgentOrchestrationIllustration from './illustrations/AgentOrchestrationIllustration';
import TokenArchitectureIllustration from './illustrations/TokenArchitectureIllustration';
import ComponentLibraryIllustration from './illustrations/ComponentLibraryIllustration';
import { Product, productPath } from '../data/products';

/** Hero graphic per product, matching the pattern used on the solution pages. */
const PRODUCT_ILLUSTRATIONS: Record<string, React.ReactNode> = {
  'ai-enterprise-agents': <AgentOrchestrationIllustration />,
  'ai-design-system-in-a-box': <TokenArchitectureIllustration />,
  'ai-component-library': <ComponentLibraryIllustration />,
};

interface ProductDetailProps {
  product: Product;
  setCurrentPage: (page: string) => void;
}

const CAL_URL = 'https://cal.com/timothy-mcguire-27';
const container = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
const body = 'text-base text-muted dark:text-neutral-400 leading-relaxed';
const primaryBtn =
  'inline-flex items-center gap-2 px-8 py-4 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors';
const secondaryBtn =
  'inline-flex items-center gap-2 px-8 py-4 border border-line dark:border-white/20 text-ink dark:text-white text-sm font-medium hover:bg-tan dark:hover:bg-white/[0.05] transition-colors';
const accentBar = 'w-8 h-[3px] bg-blue dark:bg-lavender mb-8';

type SectionTone = 'white' | 'tan';

const TONE_CLASS: Record<SectionTone, string> = {
  white: 'bg-white dark:bg-neutral-950',
  tan: 'bg-tan dark:bg-neutral-900',
};

/**
 * Alternates white and tan so two like backgrounds never sit next to each other.
 * `peek` reports the tone a following section should use without consuming it.
 */
function createSectionBackgrounds() {
  let index = 0;
  const toneAt = (i: number): SectionTone => (i % 2 === 1 ? 'tan' : 'white');
  return {
    next: () => TONE_CLASS[toneAt(index++)],
    peek: () => toneAt(index),
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, setCurrentPage }) => {
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  const backgrounds = createSectionBackgrounds();
  const navigate = (page: string) => { window.scrollTo(0, 0); setCurrentPage(page); };

  const SITE_URL = 'https://timothymcguire.com';
  const pageUrl = `${SITE_URL}${productPath(product.slug)}`;

  /**
   * Service and breadcrumb graph.
   *
   * FAQPage is deliberately omitted: scripts/verify-seo.mjs blocks unreviewed FAQ
   * schema, since bad FAQ markup risks a manual action and Google now shows those
   * rich results for very few sites. The questions are still crawlable as plain
   * text in the markup. Add it to that allowlist only after a human review.
   */
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: product.name,
        serviceType: product.name,
        description: product.lede,
        url: pageUrl,
        provider: { '@type': 'Person', name: 'Timothy McGuire', url: SITE_URL },
        areaServed: 'Worldwide',
        offers: product.tiers.map(tier => ({
          '@type': 'Offer',
          name: tier.name,
          description: tier.summary,
          priceCurrency: 'USD',
          priceSpecification: { '@type': 'PriceSpecification', price: tier.price, priceCurrency: 'USD' },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/work-with-me` },
          { '@type': 'ListItem', position: 3, name: product.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />

      {/* Hero */}
      <section className="bg-tan dark:bg-neutral-900 pt-24 pb-16 border-b border-line dark:border-white/10">
        <div className={container}>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-3 text-xs mb-12 text-muted dark:text-neutral-400">
            <a href="/" onClick={e => { e.preventDefault(); navigate('home'); }} className="py-2 hover:underline">Home</a>
            <span aria-hidden="true">/</span>
            <a href="/work-with-me" onClick={e => { e.preventDefault(); navigate('work-with-me'); }} className="py-2 hover:underline">Services</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="text-blue dark:text-lavender">{product.shortName}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Eyebrow className="mb-6">{product.eyebrow}</Eyebrow>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-ink dark:text-tan-500 leading-tight mb-8">
                {product.headline}
              </h1>
              <p className="text-lg text-muted dark:text-neutral-400 leading-relaxed mb-10">
                {product.lede}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
                  Book a call <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a href="#pricing" className={secondaryBtn}>See pricing</a>
              </div>
            </div>
            <div className="hidden lg:block border border-line dark:border-white/10">
              {PRODUCT_ILLUSTRATIONS[product.slug]}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-line dark:bg-white/10 border-t border-line dark:border-white/10 mt-16">
            {product.metrics.map(metric => (
              <div key={metric.label} className="bg-tan dark:bg-neutral-900 px-6 py-6">
                <p className="text-2xl font-semibold text-ink dark:text-white tracking-tight mb-1">{metric.value}</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-snug">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      {product.problems && (
        <section className={`${backgrounds.next()} py-24 border-b border-line dark:border-white/10`}>
          <div className={container}>
            <div className="max-w-3xl mb-14">
              <div className={accentBar} />
              <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-4">{product.problemsTitle}</h2>
              {product.problemsLede && <p className={`${body} max-w-2xl`}>{product.problemsLede}</p>}
            </div>
            <ul className="border-t border-line dark:border-white/10">
              {product.problems.map(item => (
                <li key={item.key} className="grid md:grid-cols-[48px_1fr_1fr] gap-6 md:gap-8 py-7 border-b border-line dark:border-white/10">
                  <span className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase pt-1">{item.key}</span>
                  <h3 className="text-lg font-semibold text-ink dark:text-white leading-snug">{item.title}</h3>
                  <p className={body}>{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Levels */}
      {product.levels && (
        <section className={`${backgrounds.next()} py-24 border-b border-line dark:border-white/10`}>
          <div className={container}>
            <div className="max-w-3xl mb-14">
              <div className={accentBar} />
              <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-4">{product.levelsTitle}</h2>
              {product.levelsLede && <p className={`${body} max-w-2xl`}>{product.levelsLede}</p>}
            </div>
            {/* Static class strings: Tailwind cannot see interpolated class names. */}
            <div className={`grid gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10 ${product.levels.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {product.levels.map(level => (
                <div key={level.title} className="bg-white dark:bg-neutral-950 p-8">
                  <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-5">{level.level}</p>
                  <h3 className="text-xl font-semibold text-ink dark:text-white mb-3">{level.title}</h3>
                  <p className={`${body} mb-6`}>{level.body}</p>
                  <p className="text-sm text-muted dark:text-neutral-500 pt-5 border-t border-line dark:border-white/10">{level.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What is inside */}
      <section className={`${backgrounds.next()} py-24 border-b border-line dark:border-white/10`}>
        <div className={container}>
          <div className="max-w-3xl mb-14">
            <div className={accentBar} />
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-4">{product.insideTitle}</h2>
            {product.insideLede && <p className={`${body} max-w-2xl`}>{product.insideLede}</p>}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
            {product.inside.map(card => (
              <div key={card.title} className="bg-white dark:bg-neutral-950 p-8">
                <p className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-5">{card.label}</p>
                <h3 className="text-base font-semibold text-ink dark:text-white mb-3">{card.title}</h3>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      {product.process && (
        <section className={`${backgrounds.next()} py-24 border-b border-line dark:border-white/10`}>
          <div className={container}>
            <div className="max-w-3xl mb-14">
              <div className={accentBar} />
              <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight">{product.processTitle}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.process.map(step => (
                <div key={step.title} className="border-t-[3px] border-ink dark:border-white pt-6">
                  <p className="text-xs font-semibold text-muted dark:text-neutral-500 tracking-widest uppercase mb-3">{step.when}</p>
                  <h3 className="text-lg font-semibold text-ink dark:text-white mb-3">{step.title}</h3>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-5">{step.body}</p>
                  <ul className="border-t border-line dark:border-white/10">
                    {step.items.map(item => (
                      <li key={item} className="py-2.5 text-sm text-muted dark:text-neutral-400 border-b border-line dark:border-white/10 last:border-b-0">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing */}
      <section id="pricing" className={`${backgrounds.next()} py-24 border-b border-line dark:border-white/10 scroll-mt-24`}>
        <div className={container}>
          <div className="max-w-3xl mb-14">
            <div className={accentBar} />
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight mb-4">{product.tiersTitle}</h2>
            {product.tiersLede && <p className={`${body} max-w-2xl`}>{product.tiersLede}</p>}
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
            {product.tiers.map(tier => {
              const featured = tier.featured;
              return (
                <div
                  key={tier.name}
                  /* Featured tier is distinguished by a tan fill and an accent rule, not a dark panel. */
                  className={`flex flex-col p-8 ${featured ? 'bg-tan dark:bg-neutral-900' : 'bg-white dark:bg-neutral-950'}`}
                >
                  {featured && <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-5" />}
                  {tier.tag && (
                    <span className="self-start text-xs font-semibold tracking-widest uppercase bg-blue dark:bg-lavender text-white dark:text-ink px-3 py-1.5 mb-5">
                      {tier.tag}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold text-ink dark:text-white mb-4">{tier.name}</h3>
                  <p className="text-4xl font-semibold tracking-tight text-ink dark:text-white mb-2">{tier.price}</p>
                  <p className="text-sm text-muted dark:text-neutral-500 mb-5">{tier.term}</p>
                  <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-6">{tier.summary}</p>

                  <ul className="flex-1 border-t border-line dark:border-white/10">
                    {tier.features.map(feature => (
                      <li key={feature} className="flex gap-3 py-3 border-b border-line dark:border-white/10">
                        <Check className="w-4 h-4 shrink-0 mt-0.5 text-blue dark:text-lavender" strokeWidth={2} aria-hidden="true" />
                        <span className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                      featured
                        ? 'bg-ink dark:bg-white text-white dark:text-ink hover:bg-neutral-800 dark:hover:bg-neutral-100'
                        : 'border border-line dark:border-white/20 text-ink dark:text-white hover:bg-tan dark:hover:bg-white/[0.05]'
                    }`}
                  >
                    {tier.cta} <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </a>
                </div>
              );
            })}
          </div>

          {product.addon && (
            <div className="mt-8 border border-dashed border-line dark:border-white/20 p-8 flex flex-wrap gap-6 items-center justify-between">
              <div className="max-w-2xl">
                <p className="text-lg font-semibold text-ink dark:text-white mb-2">{product.addon.title}</p>
                <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed">{product.addon.body}</p>
              </div>
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={secondaryBtn}>Ask about this</a>
            </div>
          )}

          <p className="text-sm text-muted dark:text-neutral-500 leading-relaxed mt-8 max-w-4xl">{product.pricingNote}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${backgrounds.next()} py-24 border-b border-line dark:border-white/10`}>
        <div className={container}>
          <div className="max-w-3xl mb-12">
            <div className={accentBar} />
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight">Things people usually ask.</h2>
          </div>
          <div className="max-w-4xl border-t border-line dark:border-white/10">
            {product.faqs.map(faq => (
              <details key={faq.q} className="group border-b border-line dark:border-white/10 py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-lg font-semibold text-ink dark:text-white">
                  {faq.q}
                  <Plus className="w-5 h-5 shrink-0 mt-1 text-blue dark:text-lavender group-open:hidden" strokeWidth={1.5} aria-hidden="true" />
                  <Minus className="w-5 h-5 shrink-0 mt-1 text-blue dark:text-lavender hidden group-open:block" strokeWidth={1.5} aria-hidden="true" />
                </summary>
                <p className={`${body} mt-4 max-w-3xl`}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServicesContactForm background={backgrounds.peek()} />

      {/* CTA */}
      <section className="bg-ink dark:bg-neutral-900 py-24">
        <div className={container}>
          <div className="max-w-3xl">
            <div className="w-8 h-[3px] bg-lavender mb-8" />
            <p className="text-xs font-semibold text-lavender tracking-widest uppercase mb-4">Next step</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6">{product.ctaHeadline}</h2>
            <p className="text-base text-neutral-400 leading-relaxed mb-10">{product.ctaBody}</p>
            <div className="flex flex-wrap gap-4">
              <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-ink text-sm font-medium hover:bg-neutral-100 transition-colors">
                Book a call <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <button onClick={() => navigate('work-with-me')} className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white text-sm font-medium hover:bg-white/[0.05] transition-colors">
                All services
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
