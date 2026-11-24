/**
 * Biography and career content for the About page.
 *
 * Extracted from About.tsx so the services assistant can answer questions
 * about Timothy himself from the same source the page renders. Keep this
 * module pure data with no imports: it is bundled into the Worker, which has
 * no React. Icons stay in the component, mapped by `key`.
 *
 * Copy rule: no em dashes or en dashes in any rendered string. See DESIGN_SYSTEM.md.
 */

export const aboutHeadline =
  'I help organizations design intelligent products that people understand, trust, and enjoy using.';

export const aboutIntro =
  "I'm Timothy McGuire, an Experience Designer with 15+ years of experience helping businesses solve complex challenges through thoughtful, user-centered design. I specialize in enterprise SaaS, AI-native products, and the design systems that make both possible at scale.";

export const backgroundTitle = 'Fifteen years building products people use at work.';

export const background: string[] = [
  'My career has run through some of the more demanding design environments in enterprise software: pharmaceutical sales operations at ZS Associates, financial products at Bank of America and TransUnion, and large-scale digital transformation at Accenture.',
  'The through-line is complexity, products with multiple user roles, high-stakes decisions, dense information, and real consequences for getting the design wrong. I learned early that enterprise UX is a fundamentally different discipline from consumer design, and I have spent 15 years developing the patterns and judgment to do it well.',
  'In the last three years, AI has become the most interesting design problem in enterprise software. I have spent that time building frameworks for trust, explainability, and human oversight that I now bring to clients as a core offering.',
];

export interface Belief {
  label: string;
  body: string;
}

export const beliefs: Belief[] = [
  { label: 'Design is a translation act', body: 'Between what a system can do and what a user can understand. Between what a business needs and what a user will accept. Getting the translation right is the work.' },
  { label: 'Complexity lives in the system, not the interface', body: 'The job is to absorb complexity into the architecture so users never have to confront it. A product that feels simple is usually the result of enormous design effort behind the scenes.' },
  { label: 'Trust is designed', body: "Users don't trust a product because it's technically accurate. They trust it because the design tells them, through every microcopy label, every state, every error message, exactly what is happening and why." },
];

export interface AboutValue {
  /** Maps to a lucide icon in About.tsx, which keeps this module React free. */
  key: 'human-centered' | 'collaboration' | 'impact' | 'simplicity' | 'accessibility';
  title: string;
  description: string;
}

export const values: AboutValue[] = [
  { key: 'human-centered', title: 'Human-Centered', description: 'Design starts with understanding the people using the product, their goals, their mental models, their frustrations. Aesthetics come after.' },
  { key: 'collaboration', title: 'Collaboration', description: 'The best design decisions are made with product and engineering in the room, not delivered to them as final artifacts.' },
  { key: 'impact', title: 'Impact', description: 'Good design is measured by outcomes: tasks completed, errors reduced, decisions supported. Not by how the comp looks in a portfolio.' },
  { key: 'simplicity', title: 'Simplicity', description: 'Complexity in the system, clarity in the interface. Users should not have to think about how the product works, only about what they are trying to do.' },
  { key: 'accessibility', title: 'Accessibility', description: 'Design should work for everyone. Accessibility is not a compliance checkbox, it is a quality standard that benefits all users.' },
];

export interface CareerEntry {
  company: string;
  role: string;
  tenure: string;
  detail: string;
}

export const career: CareerEntry[] = [
  { company: 'ZS Associates', role: 'Principal UX Designer', tenure: '8 years', detail: 'Led experience design for enterprise SaaS deployment platform used by life sciences clients globally. Built design system, drove AI UX strategy, and owned end-to-end product design across multiple product lines.' },
  { company: 'Bank of America', role: 'Senior UX Designer', tenure: 'Multi-year', detail: 'Designed high-stakes financial interfaces for consumer and business banking. Accessibility compliance, complex data visualization, and regulated-environment UX.' },
  { company: 'TransUnion', role: 'UX Design Lead', tenure: 'Multi-year', detail: 'Led product design for fintech data products. Trust-centered UX for credit and identity data surfaces used by millions of consumers and enterprise buyers.' },
  { company: 'Accenture', role: 'UX Designer', tenure: 'Multi-year', detail: 'Enterprise consulting engagements across industries. Employee experience redesign, process digitization, and large-scale organizational change UX.' },
];
