import React from 'react';

interface CTAProps {
  setCurrentPage: (page: string) => void;
}

const CTA: React.FC<CTAProps> = ({ setCurrentPage }) => {
  return (
    <section className="bg-black dark:bg-neutral-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Let's create something beautiful.
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
          I'd love to learn more about how I can help your business.
        </p>
        <button
          onClick={() => setCurrentPage('contact')}
          className="btn-secondary"
        >
          Make Contact
        </button>
      </div>
    </section>
  );
};

export default CTA;
