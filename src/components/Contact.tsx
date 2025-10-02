import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 dark:from-teal-900 dark:via-blue-900 dark:to-purple-900"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left max-w-3xl pt-32 pb-20">
            <h1 className="text-5xl md:text-7xl text-white mb-6">
              Let's Create<br />Something Together.
            </h1>
            <p className="text-xl text-white/90">
              Ready to transform your digital presence? We're here to help bring your vision to life. Tell us about your project, and we'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Get in Touch</h2>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Us</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">godesigngo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">(773)-724-0473</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Clock className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Business Hours</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Monday - Friday, 9am - 5pm CST</p>
                </div>
              </div>
            </div>

            {/* Tally Form with proper embedding */}
            <div className="md:col-span-2 bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <iframe
                data-tally-src="https://tally.so/embed/wzPxpq?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="580"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Contact form"
                className="rounded-lg"
              >
                Loading…
              </iframe>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
                  `
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;