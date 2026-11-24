import React, { useState } from 'react';
import { Mail, Calendar, Clock } from 'lucide-react';

interface ServicesContactFormProps {
  /**
   * Section background. Callers pick the one that does not match the section
   * above, since the design system forbids two like backgrounds in a row.
   */
  background?: 'tan' | 'white';
}

/**
 * Inline enquiry form, shared by the Services overview, the offering detail
 * pages and the product pages so people can get in touch without navigating away.
 */
const ServicesContactForm: React.FC<ServicesContactFormProps> = ({ background = 'tan' }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formspree.io/f/myznjdnq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const inputCls =
    'w-full px-4 py-3 rounded-none border border-line dark:border-white/10 bg-white dark:bg-transparent text-ink dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors';

  return (
    <section
      id="contact"
      className={`${background === 'tan' ? 'bg-tan dark:bg-neutral-900' : 'bg-white dark:bg-neutral-950'} py-24 border-t border-line dark:border-white/10`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="w-8 h-[3px] bg-blue dark:bg-lavender mb-8" />
          <p className="text-xs font-semibold text-blue dark:text-lavender uppercase tracking-widest mb-3">Get started</p>
          <h2 className="text-2xl md:text-3xl font-semibold text-ink dark:text-white leading-snug mb-4">
            Ready to start a conversation?
          </h2>
          <p className="text-base text-muted dark:text-neutral-400 max-w-2xl leading-relaxed">
            Send a brief description of your product and what you are trying to accomplish. I will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-muted dark:text-neutral-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-ink dark:text-white mb-1">Email</p>
                <p className="text-sm text-muted dark:text-neutral-400">godesigngo@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-muted dark:text-neutral-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div>
                <p className="text-sm font-medium text-ink dark:text-white mb-1">Response time</p>
                <p className="text-sm text-muted dark:text-neutral-400">Within 24 hours, Monday to Friday</p>
              </div>
            </div>
            <div className="pt-4 border-t border-line dark:border-white/10">
              <a
                href="https://cal.com/timothy-mcguire-27"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-ink dark:bg-white text-white dark:text-ink px-6 py-3 font-medium text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
              >
                <Calendar className="w-4 h-4" strokeWidth={1.5} />
                Schedule a Call
              </a>
              <p className="mt-3 text-xs text-muted dark:text-neutral-500 text-center">
                Prefer to talk? Book a free 30 minute call.
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="svc-name" className="block text-sm font-medium text-ink dark:text-white mb-2">Name *</label>
                  <input type="text" id="svc-name" name="name" required className={inputCls} placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="svc-email" className="block text-sm font-medium text-ink dark:text-white mb-2">Email *</label>
                  <input type="email" id="svc-email" name="email" required className={inputCls} placeholder="your@email.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="svc-company" className="block text-sm font-medium text-ink dark:text-white mb-2">Company</label>
                  <input type="text" id="svc-company" name="company" className={inputCls} placeholder="Your company" />
                </div>
                <div>
                  <label htmlFor="svc-engagement" className="block text-sm font-medium text-ink dark:text-white mb-2">What are you interested in?</label>
                  <select id="svc-engagement" name="projectType" className={inputCls}>
                    <option value="">Select an option</option>
                    <option value="AI Enterprise Agents">AI Enterprise Agents</option>
                    <option value="AI Design System in a Box">AI Design System in a Box</option>
                    <option value="AI Component Library">AI Component Library</option>
                    <option value="Enterprise AI Consulting">Enterprise AI Consulting</option>
                    <option value="Fractional AI Leadership">Fractional AI Leadership</option>
                    <option value="AI Strategy Session">AI Strategy Session</option>
                    <option value="AI Speaking or Workshop">AI Speaking or Workshop</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="svc-message" className="block text-sm font-medium text-ink dark:text-white mb-2">What are you working on? *</label>
                <textarea
                  id="svc-message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputCls} resize-none`}
                  placeholder="Tell me about your product, your challenge, and what you are trying to accomplish..."
                />
              </div>

              {formStatus === 'success' && (
                <div role="status" className="p-4 bg-white dark:bg-white/[0.05] border border-line dark:border-white/10">
                  <p className="text-sm text-ink dark:text-white font-medium">Message sent. I will be in touch within 24 hours.</p>
                </div>
              )}
              {formStatus === 'error' && (
                <div role="alert" className="p-4 bg-white dark:bg-white/[0.05] border border-line dark:border-white/10">
                  <p className="text-sm text-ink dark:text-white font-medium">Something went wrong. Email me directly at godesigngo@gmail.com</p>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-ink dark:bg-white text-white dark:text-ink text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 disabled:opacity-50 transition-colors"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesContactForm;
