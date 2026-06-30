import React, { useState } from 'react';
import { Mail, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/myznjdnq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white tracking-tight mb-6">
              Let's Create Something Together.
            </h1>
            <p className="text-xl text-muted dark:text-neutral-400 max-w-2xl">
              Ready to transform your digital presence? Tell me about your project, and I'll get back to you within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-8">
              <h2 className="text-xl font-semibold text-black dark:text-white">Get in Touch</h2>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-5 h-5 text-muted dark:text-neutral-400" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-black dark:text-white">Email</h3>
                  <p className="mt-1 text-sm text-muted dark:text-neutral-400">godesigngo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-muted dark:text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-medium text-black dark:text-white">Phone</h3>
                  <p className="mt-1 text-sm text-muted dark:text-neutral-400">(773)-724-0473</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Clock className="w-5 h-5 text-muted dark:text-neutral-400" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-black dark:text-white">Business Hours</h3>
                  <p className="mt-1 text-sm text-muted dark:text-neutral-400">Monday - Friday, 9am - 5pm CST</p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#D9D9D9] dark:border-white/[0.1]">
                <a
                  href="https://cal.com/timothy-mcguire-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-[10px] font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Schedule a Meeting</span>
                </a>
                <p className="mt-3 text-xs text-muted dark:text-neutral-500 text-center">
                  Prefer to talk? Book a free consultation call
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent text-black dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent text-black dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent text-black dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black dark:text-white mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent text-black dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent text-black dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors"
                  >
                    <option value="">Select a project type</option>
                    <option value="Marketing Website Design">Marketing Website Design</option>
                    <option value="Mobile/Web App Design">Mobile/Web App Design</option>
                    <option value="SaaS Product Design">SaaS Product Design</option>
                    <option value="E-commerce Design">E-commerce Design</option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black dark:text-white mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-[10px] border border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent text-black dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors resize-none"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-neutral-100 dark:bg-white/[0.08] border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px]">
                    <p className="text-sm text-black dark:text-white font-medium">
                      Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-neutral-100 dark:bg-white/[0.08] border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px]">
                    <p className="text-sm text-black dark:text-white font-medium">
                      Something went wrong. Please try again or email me directly at godesigngo@gmail.com
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="btn-primary w-full"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
