import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { products, productPageId, productPath } from '../data/products';

interface HomeProductsProps {
  setCurrentPage: (page: string) => void;
}

/**
 * Productized offerings on the home page. Sits on white between Testimonials
 * (tan) and the closing CTA (ink), which keeps the background rotation valid.
 */
const HomeProducts: React.FC<HomeProductsProps> = ({ setCurrentPage }) => {
  const goToPage = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  /** Let modified clicks fall through so the link still opens in a new tab. */
  const handleCardClick = (event: React.MouseEvent, page: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    goToPage(page);
  };

  return (
    <section className="bg-white dark:bg-neutral-950 py-24 border-t border-line dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-14">
          <div>
            <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
            <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-4">
              Productized offerings
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-ink dark:text-white leading-tight">
              Packaged AI work, with set prices.
            </h2>
          </div>
          <p className="text-base text-muted dark:text-neutral-400 leading-relaxed lg:pt-16">
            Three products with fixed scope and published pricing. License the component library, have an agent readable design system installed, or have an agent designed and built for your product.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-line dark:bg-white/10 border border-line dark:border-white/10">
          {products.map(product => (
            <article key={product.slug} className="flex flex-col bg-white dark:bg-neutral-950 p-8">
              <span className="text-xs font-semibold text-blue dark:text-lavender tracking-widest uppercase mb-8">
                Product
              </span>
              <h3 className="text-xl font-semibold text-ink dark:text-white leading-snug mb-4">{product.navLabel}</h3>
              <p className="text-sm text-muted dark:text-neutral-400 leading-relaxed mb-8">{product.headline}</p>
              <div className="mt-auto">
                <p className="text-lg font-semibold text-ink dark:text-white">From {product.tiers[0].price}</p>
                <p className="text-sm text-muted dark:text-neutral-500 mt-2">{product.tiers.length} packages · USD</p>
                <a
                  href={productPath(product.slug)}
                  onClick={event => handleCardClick(event, productPageId(product.slug))}
                  className="mt-6 pt-5 border-t border-line dark:border-white/10 flex min-h-12 items-center justify-between text-sm font-semibold text-blue dark:text-lavender hover:underline"
                >
                  View details <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => goToPage('work-with-me')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            See all services <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
