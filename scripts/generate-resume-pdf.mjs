import PDFDocument from 'pdfkit';
import { createWriteStream } from 'node:fs';

const name = 'Timothy J. McGuire';
const subtitle = 'Senior / Principal UX Designer  \u00B7  AI & Agentic Systems';
const email = 'godesigngo@gmail.com';
const linkedin = 'linkedin.com/in/timothymcguire27';

const summary =
  'Senior and Principal UX Designer with 15+ years of experience leading end-to-end product design for enterprise SaaS, data-intensive platforms, and AI-driven systems. Deep expertise in AI-native UX, agentic workflows, human-in-the-loop systems, and LLM-integrated decision support. Proven partner to product, engineering, data science, and executive stakeholders with a track record of modernizing complex B2B platforms, improving workflow efficiency, and scaling design systems while maintaining trust, transparency, and usability.';

const competencies = [
  'AI-Native UX & Agentic Systems', 'Human-in-the-Loop Design', 'LLM Oversight & Trust Models',
  'Decision-Support Interfaces', 'UX Strategy & User-Centered Design', 'Enterprise SaaS UX',
  'End-to-End Product Design', 'Information Architecture', 'Interaction Design',
  'Analytics & Data Visualization UX', 'Design Systems & Pattern Libraries',
  'Accessibility & Inclusive Design', 'Stakeholder Alignment', 'Cross-Functional Collaboration',
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
    period: 'Jan 2023 \u2013 Jun 2023',
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
    period: 'Nov 2021 \u2013 Dec 2022',
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
    period: 'Sep 2015 \u2013 Sep 2022',
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
    period: 'Oct 2016 \u2013 Oct 2018',
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
    period: 'May 2016 \u2013 Aug 2016',
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
    period: 'Jan 2016 \u2013 Jun 2016',
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
    period: 'Dec 2014 \u2013 Jan 2016',
    location: 'Remote',
    projects: 'Jim Beam Product Site, Dremel.com Redesign, Blue Cross Blue Shield Mobile App',
    bullets: [
      'Led redesign of mobile-responsive websites for major consumer brands, aligning design principles with each brand\u2019s vision and strategy.',
      'Conducted quantitative data analysis and competitive research to identify pain points and user needs across diverse audiences.',
      'Drove wireframe design from low-fidelity explorations through high-fidelity visual prototypes, incorporating user feedback and usability best practices.',
      'Established design systems and guidelines ensuring visual consistency and accessibility compliance across all projects.',
    ],
  },
  {
    company: 'FCB Chicago',
    title: 'Associate Creative Director / Principal UX Designer',
    period: 'Mar 2014 \u2013 Dec 2014',
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
    period: 'Nov 2011 \u2013 Dec 2014',
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
    period: 'May 2012 \u2013 Mar 2014',
    location: '',
    projects: 'Mopar.com, Chrysler.com, UConnect.com, Chicago Public Schools, National Heritage Academy',
    bullets: [
      'Delivered responsive web solutions for enterprise and public-sector clients, aligning design principles with each client\u2019s vision and strategy.',
      'Conducted quantitative data analysis and competitive research to identify user needs and inform design decisions across diverse projects.',
      'Created wireframe solutions from low-fidelity through high-fidelity visual prototypes, iterating with user feedback and usability best practices.',
      'Established design systems and guidelines for visual consistency and accessibility compliance across all client projects.',
    ],
  },
];

// ── Colors ───────────────────────────────────────────────────────────────

const C_DARK = '#1A1A1A';
const C_MID = '#555555';
const C_LIGHT = '#777777';
const C_ACCENT = '#4A7DFF';
const C_BORDER = '#D4D4D4';
const C_TAG_BG = '#F0F0F0';

// ── PDF Generation ──────────────────────────────────────────────────────

const MARGIN = 50;
const PAGE_WIDTH = 612;
const CONTENT_W = PAGE_WIDTH - MARGIN * 2;

const outputPath = 'public/Timothy_McGuire_AI_Agentic_UX_Designer_2026.pdf';
const doc = new PDFDocument({
  size: 'LETTER',
  margins: { top: 45, bottom: 45, left: MARGIN, right: MARGIN },
  bufferPages: true,
  info: {
    Title: 'Timothy J. McGuire - Resume',
    Author: 'Timothy J. McGuire',
    Subject: 'Senior / Principal UX Designer - AI & Agentic Systems',
  },
});

const stream = createWriteStream(outputPath);
doc.pipe(stream);

function ensureSpace(needed) {
  if (doc.y + needed > doc.page.height - 55) {
    doc.addPage();
  }
}

function drawSectionLine() {
  doc.moveTo(MARGIN, doc.y).lineTo(PAGE_WIDTH - MARGIN, doc.y).strokeColor(C_BORDER).lineWidth(0.5).stroke();
  doc.moveDown(0.5);
}

// ── Header ──────────────────────────────────────────────────────────────

doc.font('Helvetica-Bold').fontSize(24).fillColor(C_DARK).text(name, { align: 'center' });
doc.moveDown(0.25);
doc.font('Helvetica').fontSize(9.5).fillColor(C_LIGHT).text(subtitle, { align: 'center', characterSpacing: 1 });
doc.moveDown(0.4);
doc.font('Helvetica').fontSize(9).fillColor(C_LIGHT).text(`Remote  \u2022  773-724-0473  \u2022  ${email}  \u2022  ${linkedin}`, { align: 'center' });
doc.moveDown(0.7);
drawSectionLine();
doc.moveDown(0.3);

// ── Summary ─────────────────────────────────────────────────────────────

doc.font('Helvetica').fontSize(9).fillColor(C_MID).text(summary, { lineGap: 3, align: 'left' });
doc.moveDown(0.7);

// ── Section: Core Competencies ──────────────────────────────────────────

function sectionTitle(title) {
  ensureSpace(30);
  doc.moveDown(0.2);
  doc.font('Helvetica-Bold').fontSize(9).fillColor(C_DARK).text(title.toUpperCase(), { characterSpacing: 2 });
  doc.moveDown(0.15);
  drawSectionLine();
  doc.moveDown(0.2);
}

function drawTags(items) {
  const text = items.join('  \u00B7  ');
  doc.font('Helvetica').fontSize(8.5).fillColor(C_MID).text(text, { lineGap: 4 });
  doc.moveDown(0.3);
}

sectionTitle('Core Competencies');
drawTags(competencies);

sectionTitle('Tools & Technologies');
drawTags(tools);

// ── Section: Professional Experience ────────────────────────────────────

sectionTitle('Professional Experience');

for (const job of experience) {
  ensureSpace(80);

  // Company + period
  const periodW = doc.font('Helvetica').fontSize(8).widthOfString(job.period);
  doc.font('Helvetica-Bold').fontSize(10).fillColor(C_DARK).text(job.company, MARGIN, doc.y, { continued: false, width: CONTENT_W });
  // Period on same line, right-aligned
  doc.font('Helvetica').fontSize(8).fillColor(C_LIGHT).text(job.period, PAGE_WIDTH - MARGIN - periodW - 2, doc.y - 13.5, { width: periodW + 4, align: 'right' });

  // Title + location
  const locText = job.location ? `  \u00B7  ${job.location}` : '';
  doc.font('Helvetica-Oblique').fontSize(9).fillColor(C_MID).text(`${job.title}${locText}`, MARGIN, doc.y + 1);
  doc.moveDown(0.1);

  // Projects
  if (job.projects) {
    doc.font('Helvetica-Oblique').fontSize(8).fillColor(C_LIGHT).text(job.projects, MARGIN);
    doc.moveDown(0.15);
  }

  // Bullets
  for (const b of job.bullets) {
    ensureSpace(25);
    const bulletX = MARGIN + 8;
    const textX = MARGIN + 16;
    const y = doc.y + 4;
    doc.circle(bulletX + 1.5, y + 3.5, 1.5).fill(C_LIGHT);
    doc.font('Helvetica').fontSize(8.5).fillColor(C_MID).text(b, textX, y, { width: CONTENT_W - 16, lineGap: 2.5 });
    doc.moveDown(0.05);
  }
  doc.moveDown(0.5);
}

// ── Section: Education ──────────────────────────────────────────────────

sectionTitle('Education');
ensureSpace(40);
doc.font('Helvetica-Bold').fontSize(10).fillColor(C_DARK).text('University of Wisconsin\u2013Madison');
doc.moveDown(0.1);
doc.font('Helvetica').fontSize(9).fillColor(C_MID).text('Bachelor of Science, Graphic Design & Fine Art');

// ── Finalize ────────────────────────────────────────────────────────────

doc.end();

stream.on('finish', () => {
  const { size } = stream;
  console.log(`PDF written to ${outputPath}`);
});
