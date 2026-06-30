import React from 'react';
import { FileDown, Briefcase, GraduationCap, Wrench, Sparkles, ExternalLink } from 'lucide-react';

const Resume: React.FC = () => {

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
      period: 'Jun 2023 – Jun 2025',
      location: 'Remote',
      projects: 'Atom Software SaaS Product Redesign, IGX SaaS Product Redesign',
      bullets: [
        'Led end-to-end redesign of enterprise SaaS platforms supporting complex, multi-tenant B2B workflows, aligning design principles with product vision and strategy to improve task efficiency and user satisfaction.',
        'Conducted comprehensive user and product research using quantitative data analysis and competitive analysis to identify key pain points and inform design decisions.',
        'Drove the UX process from low-fidelity wireframes through high-fidelity visual design prototypes, iterating with user feedback and usability best practices at each stage.',
        'Created a comprehensive component design system and accessibility guidelines, ensuring visual consistency across all interface elements and WCAG compliance.',
        'Partnered with product, engineering, and leadership to align UX strategy with AI-adjacent roadmap initiatives.',
      ],
    },
    {
      company: 'Bank of America',
      title: 'Senior UX/UI Designer',
      period: 'Jan 2023 – Jun 2023',
      location: 'Remote',
      projects: 'Auto Loans Mobile Responsive Web Integration',
      bullets: [
        'Integrated Auto Loans mobile-responsive web pages into the existing platform, reviewing business requirements and incorporating stakeholder feedback at each stage to refine the design.',
        'Conducted quantitative data analysis and competitive analysis to identify user pain points and inform design decisions for data-heavy financial interfaces.',
        'Created wireframe solutions from low-fidelity to high-fidelity visual prototypes, enabling rapid validation of design concepts while ensuring alignment with regulatory and business goals.',
        'Established design systems and guidelines ensuring coherence across all interface elements and adherence to accessibility standards.',
      ],
    },
    {
      company: 'Millonex',
      title: 'Lead UX/UI Designer & Manager',
      period: 'Nov 2021 – Dec 2022',
      location: 'Remote',
      projects: 'Simplicity SaaS Product, Marketing Responsive Website, Branding',
      bullets: [
        'Redesigned the marketing website and SaaS product end-to-end, defining design principles aligned to product vision and improving overall task efficiency and user satisfaction.',
        'Conducted comprehensive user research using quantitative data analysis and competitive analysis to identify key pain points and inform design decisions.',
        'Drove wireframe design solutions from low-fidelity explorations through high-fidelity visual prototypes, incorporating user feedback at each iteration.',
        'Created a comprehensive component design system and guidelines for visual consistency and accessibility compliance across desktop and responsive use cases.',
        'Led stakeholder reviews and iterative refinement cycles throughout the engagement.',
      ],
    },
    {
      company: 'Gray Matter Analytics',
      title: 'Principal UX Designer',
      period: 'Sep 2015 – Sep 2022',
      location: 'Remote',
      projects: 'CoreTechs SaaS Product Redesign',
      bullets: [
        'Led redesign of the CoreTechs SaaS platform for enterprise and analytics-driven users, aligning design principles with product vision to improve usability and user satisfaction.',
        'Conducted comprehensive research using quantitative data analysis and competitive analysis to identify user pain points and inform design decisions.',
        'Drove the UX process from low-fidelity wireframes through high-fidelity prototypes, iterating with user feedback to develop a robust, user-friendly solution.',
        'Created a comprehensive component design system ensuring visual consistency, brand integrity, and accessibility compliance across the platform.',
        'Partnered long-term with product and engineering to continuously evolve platform UX and decision-support workflows.',
      ],
    },
    {
      company: 'Accenture',
      title: 'Senior UX/UI Designer',
      period: 'Oct 2016 – Oct 2018',
      location: 'Remote',
      projects: 'Accenture Internal Product Suite Consolidation',
      bullets: [
        'Redesigned and consolidated enterprise websites and internal product suites, meeting with key stakeholders and incorporating feedback at each stage.',
        'Conducted quantitative data analysis and competitive research to identify pain points and inform design decisions.',
        'Created wireframe solutions from low-fidelity through high-fidelity visual prototypes, ensuring alignment with user needs and business goals.',
        'Established design systems and guidelines for visual consistency and accessibility compliance across the consolidated product suite.',
      ],
    },
    {
      company: 'UX Factory',
      title: 'Lead UX Designer',
      period: 'May 2016 – Aug 2016',
      location: 'Remote',
      projects: 'State Farm Mobile Application',
      bullets: [
        'Designed from scratch an MVP mobile app, defining design principles aligned to the product vision and strategy.',
        'Conducted user and product research using quantitative data analysis and competitive analysis to identify key user needs.',
        'Drove the UX design process from low-fidelity wireframes through high-fidelity visual prototypes, incorporating feedback at each iteration.',
        'Established design system guidelines ensuring visual consistency and accessibility compliance.',
      ],
    },
    {
      company: 'Frequency 540',
      title: 'Lead UX Designer',
      period: 'Jan 2016 – Jun 2016',
      location: 'Remote',
      projects: 'Marketing Website Redesign',
      bullets: [
        'Redesigned the marketing website by reviewing business requirements and incorporating stakeholder feedback to align design solutions with engagement goals.',
        'Conducted user research and competitive analysis to inform design decisions and identify key opportunities.',
        'Created wireframe solutions from low-fidelity through high-fidelity visual prototypes for rapid concept validation.',
      ],
    },
    {
      company: 'iCrossing',
      title: 'Lead UX Designer',
      period: 'Dec 2014 – Jan 2016',
      location: 'Remote',
      projects: 'Jim Beam Product Site, Dremel.com Redesign, Blue Cross Blue Shield Mobile App',
      bullets: [
        'Led redesign of mobile-responsive websites for major consumer brands, aligning design principles with each brand\'s vision and strategy.',
        'Conducted quantitative data analysis and competitive research to identify pain points and user needs across diverse audiences.',
        'Drove wireframe design from low-fidelity explorations through high-fidelity visual prototypes, incorporating user feedback and usability best practices.',
        'Established design systems and guidelines ensuring visual consistency and accessibility compliance across all projects.',
      ],
    },
    {
      company: 'FCB Chicago',
      title: 'Associate Creative Director / Principal UX Designer',
      period: 'Mar 2014 – Dec 2014',
      location: '',
      projects: 'Aramark Marketing Site Responsive Redesign',
      bullets: [
        'Executed responsive redesign of the Aramark marketing website, meeting with stakeholders and incorporating feedback to align with business objectives.',
        'Conducted user research and competitive analysis to identify opportunities and inform design decisions.',
        'Created wireframe solutions from low-fidelity through high-fidelity visual prototypes, ensuring alignment with user needs.',
        'Established design guidelines for visual consistency and accessibility compliance.',
      ],
    },
    {
      company: 'TransUnion',
      title: 'Principal UX/UI Designer',
      period: 'Nov 2011 – Dec 2014',
      location: '',
      projects: 'Marketing Site Redesign, Authenticated Credit Report Product',
      bullets: [
        'Redesigned the marketing website and SaaS product, aligning design solutions with product strategy to improve task efficiency and user satisfaction.',
        'Conducted comprehensive user research using quantitative data analysis and competitive analysis to inform design decisions.',
        'Drove the UX process from low-fidelity wireframes through high-fidelity visual prototypes for both marketing and authenticated product experiences.',
        'Established design systems and guidelines ensuring visual consistency and accessibility compliance across all platforms.',
      ],
    },
    {
      company: 'Sapient Nitro',
      title: 'Lead UX/UI Designer',
      period: 'May 2012 – Mar 2014',
      location: '',
      projects: 'Mopar.com, Chrysler.com, UConnect.com, Chicago Public Schools, National Heritage Academy',
      bullets: [
        'Delivered responsive web solutions for enterprise and public-sector clients, aligning design principles with each client\'s vision and strategy.',
        'Conducted quantitative data analysis and competitive research to identify user needs and inform design decisions across diverse projects.',
        'Created wireframe solutions from low-fidelity through high-fidelity visual prototypes, iterating with user feedback and usability best practices.',
        'Established design systems and guidelines for visual consistency and accessibility compliance across all client projects.',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950">
      <section aria-label="Resume header" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-black dark:text-white mb-4">
              Timothy J. McGuire
            </h1>

            <p className="flex flex-wrap items-center justify-center gap-3 text-muted dark:text-neutral-400 text-sm tracking-widest uppercase mt-6 mb-8">
              <span>Senior / Principal UX Designer</span>
              <span className="w-1 h-1 rounded-full bg-black dark:bg-white" aria-hidden="true" />
              <span>AI & Agentic Systems</span>
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted dark:text-neutral-400">
              <a href="mailto:godesigngo@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">
                godesigngo@gmail.com
              </a>
              <span className="text-[#D9D9D9] dark:text-neutral-700" aria-hidden="true">|</span>
              <a
                href="https://linkedin.com/in/timothymcguire27"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-black dark:hover:text-white transition-colors"
              >
                LinkedIn <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="/Timothy_McGuire_AI_Agentic_UX_Designer_2026.pdf"
                download
                className="btn-primary"
              >
                <FileDown size={18} className="mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Resume details" className="border-t border-[#D9D9D9] dark:border-white/[0.1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">

          <div className="bg-white dark:bg-transparent border border-[#D9D9D9] dark:border-white/[0.1] rounded-[10px] overflow-hidden">

            <div className="px-8 sm:px-12 pt-12 pb-10 border-b border-[#D9D9D9] dark:border-white/[0.1]">
              <p className="text-base leading-relaxed text-muted dark:text-neutral-400">
                Senior and Principal UX Designer with 15+ years of experience leading end-to-end product
                design for enterprise SaaS, data-intensive platforms, and AI-driven systems. Deep expertise
                in AI-native UX, agentic workflows, human-in-the-loop systems, and LLM-integrated
                decision support.
              </p>
            </div>

            <section aria-labelledby="competencies-heading" className="px-8 sm:px-12 py-10 border-b border-[#D9D9D9] dark:border-white/[0.1]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08]" aria-hidden="true">
                  <Sparkles size={18} className="text-muted dark:text-neutral-400" />
                </div>
                <h2 id="competencies-heading" className="text-xs font-bold tracking-[0.2em] uppercase text-black dark:text-white">
                  Core Competencies
                </h2>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="List of core competencies">
                {competencies.map((c) => (
                  <li
                    key={c}
                    className="px-3 py-1.5 text-sm rounded-[10px] bg-neutral-100 dark:bg-white/[0.08] text-muted dark:text-neutral-300 border border-[#D9D9D9] dark:border-white/[0.1]"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="tools-heading" className="px-8 sm:px-12 py-10 border-b border-[#D9D9D9] dark:border-white/[0.1]">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08]" aria-hidden="true">
                  <Wrench size={18} className="text-muted dark:text-neutral-400" />
                </div>
                <h2 id="tools-heading" className="text-xs font-bold tracking-[0.2em] uppercase text-black dark:text-white">
                  Tools & Technologies
                </h2>
              </div>
              <ul className="flex flex-wrap gap-2" aria-label="List of tools and technologies">
                {tools.map((t) => (
                  <li
                    key={t}
                    className="px-3 py-1.5 text-sm rounded-[10px] bg-neutral-100 dark:bg-white/[0.08] text-muted dark:text-neutral-300 border border-[#D9D9D9] dark:border-white/[0.1]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="experience-heading" className="px-8 sm:px-12 py-10 border-b border-[#D9D9D9] dark:border-white/[0.1]">
              <div className="flex items-center gap-3 mb-10">
                <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08]" aria-hidden="true">
                  <Briefcase size={18} className="text-muted dark:text-neutral-400" />
                </div>
                <h2 id="experience-heading" className="text-xs font-bold tracking-[0.2em] uppercase text-black dark:text-white">
                  Professional Experience
                </h2>
              </div>

              <div>
                {experience.map((job, i) => (
                  <article key={`${job.company}-${job.period}`} className={`relative pl-8 ${i < experience.length - 1 ? 'pb-10' : 'pb-0'}`}>
                    {i < experience.length - 1 && (
                      <div className="absolute left-[7px] top-3 bottom-0 w-px bg-[#D9D9D9] dark:bg-white/[0.1]" aria-hidden="true" />
                    )}
                    <div className="absolute left-0 top-[7px] w-[15px] h-[15px] rounded-full border-[3px] border-[#D9D9D9] dark:border-white/[0.1] bg-white dark:bg-transparent" aria-hidden="true" />

                    <div>
                      <h3 className="text-lg font-semibold text-black dark:text-white leading-snug">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted dark:text-neutral-400">
                        {job.title}
                      </p>
                      <p className="mt-0.5 flex items-center gap-2 text-sm text-muted dark:text-neutral-500">
                        <time>{job.period}</time>
                        {job.location === 'Remote' ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-[10px] text-xs font-medium border border-[#D9D9D9] dark:border-white/[0.1] text-muted dark:text-neutral-400">
                            Remote
                          </span>
                        ) : job.location ? (
                          <span>{` · ${job.location}`}</span>
                        ) : null}
                      </p>
                      {job.projects && (
                        <p className="mt-2 text-sm italic text-muted dark:text-neutral-500">
                          {job.projects}
                        </p>
                      )}
                      <ul className="mt-3 space-y-2">
                        {job.bullets.map((b, bi) => (
                          <li key={bi} className="flex gap-2.5 text-sm leading-relaxed text-muted dark:text-neutral-400">
                            <span className="mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-muted dark:bg-neutral-500" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section aria-labelledby="education-heading" className="px-8 sm:px-12 py-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-9 h-9 rounded-[10px] bg-neutral-100 dark:bg-white/[0.08]" aria-hidden="true">
                  <GraduationCap size={18} className="text-muted dark:text-neutral-400" />
                </div>
                <h2 id="education-heading" className="text-xs font-bold tracking-[0.2em] uppercase text-black dark:text-white">
                  Education
                </h2>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white">
                  University of Wisconsin–Madison
                </h3>
                <p className="mt-1 text-sm text-muted dark:text-neutral-400">
                  Bachelor of Science, Graphic Design & Fine Art
                </p>
              </div>
            </section>
          </div>

          <nav aria-label="Download resume" className="mt-12 text-center">
            <p className="text-sm text-muted dark:text-neutral-500 mb-4">
              Want a copy for your records?
            </p>
            <a
              href="/Timothy_McGuire_AI_Agentic_UX_Designer_2026.pdf"
              download
              className="btn-secondary"
            >
              <FileDown size={16} className="mr-2" />
              Download PDF
            </a>
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Resume;
