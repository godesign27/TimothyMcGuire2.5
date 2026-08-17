import React, { useState, useEffect } from 'react';
import { X, Mail, Clock, Calendar } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

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

  if (!isOpen) return null;

  const inputCls = 'w-full px-4 py-3 rounded-none border border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent text-ink dark:text-white focus:ring-1 focus:ring-black dark:focus:ring-white focus:border-black dark:focus:border-white transition-colors text-sm';

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl bg-tan-100 dark:bg-neutral-950 border border-[#D9D9D9] dark:border-white/[0.1] shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-[#D9D9D9] dark:border-white/[0.1]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-muted dark:text-neutral-500 mb-2">
              Contact
            </p>
            <h2 className="text-2xl font-semibold text-ink dark:text-white">
              Let's Create Something Together.
            </h2>
            <p className="text-sm text-muted dark:text-neutral-400 mt-2 max-w-lg">
              Ready to transform your digital presence? Tell me about your project, and I'll get back to you within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted dark:text-neutral-500 hover:text-ink dark:hover:text-white transition-colors flex-shrink-0 mt-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8">
          <div className="grid md:grid-cols-3 gap-10">

            {/* Left: contact info */}
            <div className="space-y-6">
              <h3 className="text-base font-semibold text-ink dark:text-white">Get in Touch</h3>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-muted dark:text-neutral-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-ink dark:text-white">Email</p>
                  <p className="mt-0.5 text-sm text-muted dark:text-neutral-400">godesigngo@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-muted dark:text-neutral-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-ink dark:text-white">Phone</p>
                  <p className="mt-0.5 text-sm text-muted dark:text-neutral-400">(773)-724-0473</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-muted dark:text-neutral-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-ink dark:text-white">Business Hours</p>
                  <p className="mt-0.5 text-sm text-muted dark:text-neutral-400">Mon – Fri, 9am – 5pm CST</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D9D9D9] dark:border-white/[0.1]">
                <a
                  href="https://cal.com/timothy-mcguire-27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-ink dark:bg-white text-white dark:text-ink px-5 py-3 text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Schedule a Meeting
                </a>
                <p className="mt-2 text-xs text-muted dark:text-neutral-500 text-center">
                  Prefer to talk? Book a free consultation call
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cm-name" className="block text-sm font-medium text-ink dark:text-white mb-2">Name *</label>
                    <input type="text" id="cm-name" name="name" required className={inputCls} placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="cm-email" className="block text-sm font-medium text-ink dark:text-white mb-2">Email *</label>
                    <input type="email" id="cm-email" name="email" required className={inputCls} placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cm-company" className="block text-sm font-medium text-ink dark:text-white mb-2">Company</label>
                    <input type="text" id="cm-company" name="company" className={inputCls} placeholder="Your company" />
                  </div>
                  <div>
                    <label htmlFor="cm-phone" className="block text-sm font-medium text-ink dark:text-white mb-2">Phone</label>
                    <input type="tel" id="cm-phone" name="phone" className={inputCls} placeholder="(555) 123-4567" />
                  </div>
                </div>

                <div>
                  <label htmlFor="cm-type" className="block text-sm font-medium text-ink dark:text-white mb-2">Project Type *</label>
                  <select id="cm-type" name="projectType" required className={inputCls}>
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
                  <label htmlFor="cm-message" className="block text-sm font-medium text-ink dark:text-white mb-2">Project Details *</label>
                  <textarea
                    id="cm-message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputCls} resize-none`}
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="p-4 bg-neutral-100 dark:bg-white/[0.08] border border-[#D9D9D9] dark:border-white/[0.1]">
                    <p className="text-sm text-ink dark:text-white font-medium">
                      Thank you! Your message has been sent. I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="p-4 bg-neutral-100 dark:bg-white/[0.08] border border-[#D9D9D9] dark:border-white/[0.1]">
                    <p className="text-sm text-ink dark:text-white font-medium">
                      Something went wrong. Please try again or email me at godesigngo@gmail.com
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
      </div>
    </div>
  );
};

export default ContactModal;
