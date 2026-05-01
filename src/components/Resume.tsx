import React from 'react';
import { FileText, FileDown, Briefcase, GraduationCap, Wrench, Sparkles, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {
  const [downloadOpen, setDownloadOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDownloadOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const competencies = [
    'AI-Native UX & Agentic Systems',
    'Human-in-the-Loop Design',
    'LLM Oversight & Trust Models',
    'Decision-Support Interfaces',
    'UX Strategy & User-Centered Design',
    'Enterprise SaaS UX',
    'End-to-End Product Design',
    'Information Architecture',
    'Interaction Design',
    'Analytics & Data Visualization UX',
    'Design Systems & Pattern Libraries',
    'Accessibility & Inclusive Design',
    'Stakeholder Alignment',
    'Cross-Functional Collaboration',
    'Design Leadership & Mentorship',
  ];

  const tools = [
    'Figma', 'Sketch', 'Adobe Creative Suite', 'Jira', 'Confluence', 'Miro', 'Slack',
    'OpenAI APIs', 'Claude', 'Gemini', 'Cursor', 'GitHub Copilot',
    'Bolt.new', 'Replit', 'Lovable.dev', 'Figma Make',
  ];

  const experience = [
    {
      company: 'Agate Software',
      title: 'Principal UX/UI Designer & Manager',
      period: 'Jun 2023 \u2013 Jun 2025',
      location: 'Remote',
      bullets: [
        'Led end-to-end redesign of enterprise SaaS platforms supporting complex, multi-tenant B2B workflows.',
        'Partnered with product, engineering, and leadership to align UX strategy with AI-adjacent roadmap initiatives.',
        'Redesigned Atom Software and IGX products, improving usability, navigation clarity, and system scalability.',
        'Established scalable UX patterns and workflows using Figma, Figma Make, Bolt.new, Jira, and Slack.',
      ],
    },
    {
      company: 'Bank of America',
      title: 'Senior UX/UI Designer',
      period: 'Jan 2023 \u2013 Jun 2023',
      location: 'Chicago, IL',
      bullets: [
        'Designed mobile-responsive Auto Loans experiences aligned with business, regulatory, and user needs.',
        'Collaborated across product and engineering teams to streamline UX workflows and improve delivery speed.',
        'Supported data-heavy financial interfaces with clear IA and interaction patterns.',
      ],
    },
    {
      company: 'Millonex',
      title: 'Lead UX/UI Designer & Manager',
      period: 'Nov 2021 \u2013 Dec 2022',
      location: 'Remote',
      bullets: [
        'Redesigned SaaS product and marketing website with a focus on clarity, IA, and intuitive interactions.',
        'Delivered consistent cross-platform design systems supporting desktop and responsive use cases.',
        'Led stakeholder reviews and iterative refinement cycles.',
      ],
    },
    {
      company: 'Gray Matter Analytics',
      title: 'Principal UX Designer',
      period: 'Sep 2015 \u2013 Sep 2022',
      location: 'Remote',
      bullets: [
        'Led redesign of the CoreTechs SaaS platform for enterprise and analytics-driven users.',
        'Focused on B2B usability, decision-support workflows, and scalable IA.',
        'Partnered long-term with product and engineering to evolve platform UX.',
      ],
    },
    {
      company: 'Accenture',
      title: 'Senior UX/UI Designer',
      period: 'Oct 2016 \u2013 Oct 2018',
      location: 'Remote',
      bullets: [
        'Redesigned and consolidated enterprise websites and internal product suites.',
        'Contributed to the Accenture Internal Product Suite consolidation initiative.',
      ],
    },
    {
      company: 'UX Factory',
      title: 'Lead UX Designer',
      period: 'May 2016 \u2013 Aug 2016',
      location: 'Remote',
      bullets: [
        'Designed MVP mobile application from concept to delivery.',
        'Delivered State Farm Mobile Application designs with scalable IA.',
      ],
    },
    {
      company: 'Frequency 540',
      title: 'Lead UX Designer',
      period: 'Jan 2016 \u2013 Jun 2016',
      location: 'Remote',
      bullets: [
        'Redesigned marketing website aligned to business and engagement goals.',
      ],
    },
    {
      company: 'iCrossing',
      title: 'Lead UX Designer',
      period: 'Dec 2014 \u2013 Jan 2016',
      location: 'Remote',
      bullets: [
        'Led redesign of mobile-responsive websites for major consumer brands.',
        'Projects included Jim Beam, Dremel, and Blue Cross Blue Shield.',
      ],
    },
    {
      company: 'FCB Chicago',
      title: 'Associate Creative Director / Principal UX Designer',
      period: 'Mar 2014 \u2013 Dec 2014',
      location: '',
      bullets: [
        'Executed responsive redesigns for enterprise and marketing sites including Aramark.',
      ],
    },
    {
      company: 'TransUnion',
      title: 'Principal UX/UI Designer',
      period: 'Nov 2011 \u2013 Dec 2014',
      location: '',
      bullets: [
        'Redesigned SaaS and marketing platforms supporting credit and reporting workflows.',
        'Oversaw UX for authenticated credit reporting products.',
      ],
    },
    {
      company: 'Sapient Nitro',
      title: 'Lead UX/UI Designer',
      period: 'May 2012 \u2013 Mar 2014',
      location: '',
      bullets: [
        'Delivered responsive web solutions for enterprise and public-sector clients including Chrysler, Mopar, and CPS.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-gray-900">
      {/* Hero Header */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight tracking-tight text-white mb-4">
              Timothy <span className="font-semibold">J. McGuire</span>
            </h1>

            <div className="flex items-center justify-center gap-3 text-neutral-400 text-sm tracking-widest uppercase mt-6 mb-8">
              <span>Senior / Principal UX Designer</span>
              <span className="w-1 h-1 rounded-full bg-brand-500" />
              <span>AI & Agentic Systems</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-neutral-300">
              <a href="tel:773-724-0473" className="hover:text-white transition-colors">
                773-724-0473
              </a>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <a href="mailto:godesigngo@gmail.com" className="hover:text-white transition-colors">
                godesigngo@gmail.com
              </a>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <a
                href="https://linkedin.com/in/timothymcguire27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white transition-colors"
              >
                LinkedIn <ExternalLink size={12} />
              </a>
            </div>

            {/* Download Button */}
            <div className="mt-10 flex justify-center" ref={dropdownRef}>
              <div className="relative">
                <button
                  onClick={() => setDownloadOpen(!downloadOpen)}
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-neutral-900 font-medium text-sm hover:bg-neutral-100 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
                >
                  <FileDown size={18} className="text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                  Download Resume
                  <svg className={`w-4 h-4 text-neutral-400 transition-transform ${downloadOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {downloadOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white dark:bg-neutral-800 rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden animate-in">
                    <a
                      href="./Timothy_McGuire_AI_Agentic_UX_Designer_2026.pdf"
                      download
                      className="flex items-center gap-3 px-5 py-3.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                      onClick={() => setDownloadOpen(false)}
                    >
                      <FileText size={18} className="text-red-500" />
                      <div>
                        <div className="font-medium">PDF Format</div>
                        <div className="text-xs text-neutral-400">Best for viewing</div>
                      </div>
                    </a>
                    <div className="border-t border-neutral-100 dark:border-neutral-700" />
                    <a
                      href="./Timothy_McGuire_AI_Agentic_UX_Designer_2026.docx"
                      download
                      className="flex items-center gap-3 px-5 py-3.5 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors"
                      onClick={() => setDownloadOpen(false)}
                    >
                      <FileText size={18} className="text-blue-500" />
                      <div>
                        <div className="font-medium">Word Document</div>
                        <div className="text-xs text-neutral-400">Best for editing</div>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Body */}
      <section className="relative -mt-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          {/* Main Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-neutral-200/50 dark:shadow-none border border-neutral-200/60 dark:border-gray-700 overflow-hidden">

            {/* Summary */}
            <div className="px-8 sm:px-12 pt-12 pb-10 border-b border-neutral-100 dark:border-gray-700">
              <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 font-light">
                Senior and Principal UX Designer with 15+ years of experience leading end-to-end product
                design for enterprise SaaS, data-intensive platforms, and AI-driven systems. Deep expertise
                in AI-native UX, agentic workflows, human-in-the-loop systems, and LLM-integrated
                decision support. Proven partner to product, engineering, data science, and executive
                stakeholders with a track record of modernizing complex B2B platforms, improving
                workflow efficiency, and scaling design systems while maintaining trust, transparency, and
                usability.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="px-8 sm:px-12 py-10 border-b border-neutral-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-50 dark:bg-brand-950/30">
                  <Sparkles size={18} className="text-brand-600 dark:text-brand-400" />
                </div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 dark:text-white">
                  Core Competencies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {competencies.map((c) => (
                  <span
                    key={c}
                    className="px-3.5 py-1.5 text-sm font-medium rounded-full bg-neutral-100 dark:bg-gray-700 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-gray-600"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="px-8 sm:px-12 py-10 border-b border-neutral-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
                  <Wrench size={18} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 dark:text-white">
                  Tools & Technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="px-3.5 py-1.5 text-sm rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Professional Experience */}
            <div className="px-8 sm:px-12 py-10 border-b border-neutral-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-sky-50 dark:bg-sky-950/30">
                  <Briefcase size={18} className="text-sky-600 dark:text-sky-400" />
                </div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 dark:text-white">
                  Professional Experience
                </h2>
              </div>

              <div className="space-y-0">
                {experience.map((job, i) => (
                  <div key={`${job.company}-${job.period}`} className={`relative pl-8 ${i < experience.length - 1 ? 'pb-10' : 'pb-0'}`}>
                    {/* Timeline line */}
                    {i < experience.length - 1 && (
                      <div className="absolute left-[7px] top-3 bottom-0 w-px bg-neutral-200 dark:bg-gray-600" />
                    )}
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-[3px] border-neutral-300 dark:border-gray-500 bg-white dark:bg-gray-800" />

                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white leading-snug">
                        {job.company}
                      </h3>
                      <div className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                        {job.title}
                      </div>
                      <div className="mt-0.5 text-sm text-neutral-400 dark:text-neutral-500">
                        {job.period}{job.location ? ` \u00B7 ${job.location}` : ''}
                      </div>
                      <ul className="mt-3 space-y-2">
                        {job.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                            <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="px-8 sm:px-12 py-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-amber-50 dark:bg-amber-950/30">
                  <GraduationCap size={18} className="text-amber-600 dark:text-amber-400" />
                </div>
                <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-neutral-900 dark:text-white">
                  Education
                </h2>
              </div>
              <div className="pl-0">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  University of Wisconsin{'\u2013'}Madison
                </h3>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                  Bachelor of Science, Graphic Design & Fine Art
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Download CTA */}
          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-400 dark:text-neutral-500 mb-4">
              Want a copy for your records?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="./Timothy_McGuire_AI_Agentic_UX_Designer_2026.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-300 dark:border-gray-600 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-gray-800 hover:border-neutral-400 dark:hover:border-gray-500 transition-all"
              >
                <FileText size={16} className="text-red-500" />
                Download PDF
              </a>
              <a
                href="./Timothy_McGuire_AI_Agentic_UX_Designer_2026.docx"
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-neutral-300 dark:border-gray-600 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-white dark:hover:bg-gray-800 hover:border-neutral-400 dark:hover:border-gray-500 transition-all"
              >
                <FileText size={16} className="text-blue-500" />
                Download Word
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
