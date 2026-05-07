import {
  Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType,
  TabStopPosition, TabStopType, BorderStyle, ShadingType,
  convertInchesToTwip, ExternalHyperlink, Header,
} from 'docx';
import { writeFileSync } from 'node:fs';

// ── Data ────────────────────────────────────────────────────────────────

const name = 'Timothy J. McGuire';
const subtitle = 'Senior / Principal UX Designer  \u00B7  AI & Agentic Systems';
const email = 'godesigngo@gmail.com';
const linkedin = 'linkedin.com/in/timothymcguire27';

const summary =
  'Senior and Principal UX Designer with 15+ years of experience leading end-to-end product design for enterprise SaaS, data-intensive platforms, and AI-driven systems. Deep expertise in AI-native UX, agentic workflows, human-in-the-loop systems, and LLM-integrated decision support. Proven partner to product, engineering, data science, and executive stakeholders with a track record of modernizing complex B2B platforms, improving workflow efficiency, and scaling design systems while maintaining trust, transparency, and usability.';

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

const education = {
  school: 'University of Wisconsin\u2013Madison',
  degree: 'Bachelor of Science, Graphic Design & Fine Art',
};

// ── Colors ──────────────────────────────────────────────────────────────

const DARK = '1A1A1A';
const MID = '555555';
const LIGHT = '777777';
const ACCENT = '4A7DFF';
const BORDER = 'D4D4D4';
const TAG_BG = 'F0F0F0';
const TAG_BORDER = 'DCDCDC';

// ── Helpers ─────────────────────────────────────────────────────────────

function sectionHeading(text) {
  return new Paragraph({
    spacing: { before: 360, after: 160 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: BORDER, space: 6 } },
    children: [
      new TextRun({
        text: text.toUpperCase(),
        bold: true,
        size: 20,
        font: 'Calibri',
        color: DARK,
        characterSpacing: 120,
      }),
    ],
  });
}

function bulletItem(text) {
  return new Paragraph({
    spacing: { after: 60 },
    indent: { left: convertInchesToTwip(0.25) },
    bullet: { level: 0 },
    children: [
      new TextRun({ text, size: 19, font: 'Calibri', color: MID }),
    ],
  });
}

function tagList(items) {
  const runs = [];
  items.forEach((item, i) => {
    runs.push(new TextRun({ text: item, size: 18, font: 'Calibri', color: MID }));
    if (i < items.length - 1) {
      runs.push(new TextRun({ text: '  \u00B7  ', size: 18, font: 'Calibri', color: LIGHT }));
    }
  });
  return new Paragraph({ spacing: { after: 80 }, children: runs });
}

// ── Build document ──────────────────────────────────────────────────────

const children = [];

// Name
children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [
      new TextRun({ text: name, bold: true, size: 40, font: 'Calibri', color: DARK }),
    ],
  })
);

// Subtitle
children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 80 },
    children: [
      new TextRun({ text: subtitle, size: 20, font: 'Calibri', color: LIGHT, characterSpacing: 60 }),
    ],
  })
);

// Contact
children.push(
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 240 },
    children: [
      new ExternalHyperlink({
        link: `mailto:${email}`,
        children: [new TextRun({ text: email, size: 19, font: 'Calibri', color: ACCENT, underline: {} })],
      }),
      new TextRun({ text: '   |   ', size: 19, font: 'Calibri', color: LIGHT }),
      new ExternalHyperlink({
        link: `https://${linkedin}`,
        children: [new TextRun({ text: linkedin, size: 19, font: 'Calibri', color: ACCENT, underline: {} })],
      }),
    ],
  })
);

// Divider
children.push(
  new Paragraph({
    spacing: { after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: BORDER, space: 1 } },
    children: [],
  })
);

// Summary
children.push(
  new Paragraph({
    spacing: { after: 200 },
    children: [
      new TextRun({ text: summary, size: 20, font: 'Calibri', color: MID, italics: false }),
    ],
  })
);

// Core Competencies
children.push(sectionHeading('Core Competencies'));
children.push(tagList(competencies));

// Tools
children.push(sectionHeading('Tools & Technologies'));
children.push(tagList(tools));

// Experience
children.push(sectionHeading('Professional Experience'));

for (const job of experience) {
  // Company + Period on same line
  children.push(
    new Paragraph({
      spacing: { before: 240, after: 40 },
      tabStops: [{ type: TabStopType.RIGHT, position: TabStopPosition.MAX }],
      children: [
        new TextRun({ text: job.company, bold: true, size: 22, font: 'Calibri', color: DARK }),
        new TextRun({ text: '\t', size: 22, font: 'Calibri' }),
        new TextRun({ text: job.period, size: 18, font: 'Calibri', color: LIGHT }),
      ],
    })
  );

  // Title + Location
  const titleRuns = [
    new TextRun({ text: job.title, size: 20, font: 'Calibri', color: MID, italics: true }),
  ];
  if (job.location) {
    titleRuns.push(new TextRun({ text: `  \u00B7  ${job.location}`, size: 18, font: 'Calibri', color: LIGHT }));
  }
  children.push(new Paragraph({ spacing: { after: 40 }, children: titleRuns }));

  // Projects
  if (job.projects) {
    children.push(
      new Paragraph({
        spacing: { after: 60 },
        children: [
          new TextRun({ text: job.projects, size: 18, font: 'Calibri', color: LIGHT, italics: true }),
        ],
      })
    );
  }

  // Bullets
  for (const b of job.bullets) {
    children.push(bulletItem(b));
  }
}

// Education
children.push(sectionHeading('Education'));
children.push(
  new Paragraph({
    spacing: { before: 120, after: 40 },
    children: [
      new TextRun({ text: education.school, bold: true, size: 22, font: 'Calibri', color: DARK }),
    ],
  })
);
children.push(
  new Paragraph({
    spacing: { after: 120 },
    children: [
      new TextRun({ text: education.degree, size: 20, font: 'Calibri', color: MID }),
    ],
  })
);

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: 'Calibri', size: 20, color: DARK },
      },
      listParagraph: {
        run: { font: 'Calibri', size: 19 },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: convertInchesToTwip(0.7),
            bottom: convertInchesToTwip(0.7),
            left: convertInchesToTwip(0.8),
            right: convertInchesToTwip(0.8),
          },
        },
      },
      children,
    },
  ],
});

// ── Write DOCX ──────────────────────────────────────────────────────────

const buffer = await Packer.toBuffer(doc);
const outputPath = 'public/Timothy_McGuire_AI_Agentic_UX_Designer_2026.docx';
writeFileSync(outputPath, buffer);
console.log(`DOCX written to ${outputPath} (${(buffer.length / 1024).toFixed(1)} KB)`);
