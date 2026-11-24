/**
 * Productized service offerings with tiered pricing.
 *
 * These differ from `serviceOfferings` (single price, time based) because each
 * carries several packages or licence levels, so they get their own page shape.
 *
 * Copy rule: no em dashes or en dashes in any rendered string. See DESIGN_SYSTEM.md.
 */

export interface ProductTier {
  name: string;
  price: string;
  term: string;
  summary: string;
  features: string[];
  cta: string;
  featured?: boolean;
  tag?: string;
}

export interface ProductCard {
  label: string;
  title: string;
  body: string;
}

export interface Product {
  slug: string;
  /** Menu label. Carries "AI" for search and answer engines. */
  navLabel: string;
  navDescription: string;
  name: string;
  shortName: string;
  eyebrow: string;
  headline: string;
  lede: string;
  /** Search and answer engine summary. Keep near 155 characters and lead with the offer. */
  metaDescription: string;
  metrics: { value: string; label: string }[];

  problemsTitle?: string;
  problemsLede?: string;
  problems?: { key: string; title: string; body: string }[];

  levelsTitle?: string;
  levelsLede?: string;
  levels?: { level: string; title: string; body: string; examples: string }[];

  insideTitle: string;
  insideLede?: string;
  inside: ProductCard[];

  processTitle?: string;
  process?: { when: string; title: string; body: string; items: string[] }[];

  tiersTitle: string;
  tiersLede?: string;
  tiers: ProductTier[];
  addon?: { title: string; body: string };
  pricingNote: string;

  faqs: { q: string; a: string }[];

  ctaHeadline: string;
  ctaBody: string;
}

export const productPageId = (slug: string) => `product-${slug}`;
export const productPath = (slug: string) => `/services/${slug}`;

const PRICING_NOTE =
  'Prices are in USD. Rates may vary by client and scope of work, and final pricing is confirmed in a written proposal before work begins.';

export const products: Product[] = [
  {
    slug: 'ai-enterprise-agents',
    navLabel: 'AI Enterprise Agents',
    navDescription: 'Specialized AI agents designed and built for enterprise products.',
    name: 'AI Enterprise Agents',
    shortName: 'AI Enterprise Agents',
    eyebrow: 'Service · AI Enterprise Agents',
    headline: 'An AI agent that actually knows your product.',
    metaDescription: 'Specialized AI agents designed and built for enterprise software: in product copilots and internal operator agents. Discovery from $15,000, pilot in 30 to 60 days.',
    lede: 'I design and build specialized AI agents for enterprise software: in product copilots for your customers, or internal agents that help your teams run a complex platform. Development shops build the plumbing. I build the part people trust: when the agent acts, when it asks, how it explains itself, and how it stays inside your design system.',
    metrics: [
      { value: '2 to 3 weeks', label: 'to a designed, scoped agent' },
      { value: '30 to 60 days', label: 'to a working pilot on one workflow' },
      { value: 'One owner', label: 'from UX strategy to shipped behavior' },
    ],

    problemsTitle: 'Most agent projects fail on experience, not on models.',
    problemsLede: 'The demo works. Then real users meet it, and the problems show up in the places nobody designed.',
    problems: [
      { key: 'A', title: 'Nobody defined how much the agent should do on its own.', body: 'So it either asks permission for everything or quietly does too much. Both erode trust within a week.' },
      { key: 'B', title: 'It does not look or behave like your product.', body: 'The agent UI gets bolted on. It ignores your tokens, components and voice, and it feels like a different vendor.' },
      { key: 'C', title: 'No one can tell if it is getting better.', body: 'Without evaluations and success metrics, every prompt change is a guess, and leadership cannot see the return.' },
      { key: 'D', title: 'It is a black box to users and to compliance.', body: 'In healthcare, government technology and finance, an agent that cannot show its sources and reasoning never gets past review.' },
    ],

    levelsTitle: 'Built for your customers, or for your people.',
    levels: [
      { level: 'Type 01 · Customer facing', title: 'In product copilot', body: 'An agent inside your SaaS product that helps customers get to value faster: setting things up, finding answers in their own data, completing multi step tasks, and explaining what it did.', examples: 'For product leaders who want an AI story customers will actually use.' },
      { level: 'Type 02 · Internal', title: 'Platform operator agent', body: 'An agent that helps your employees run a complex enterprise product: configuration, reporting, triage, onboarding, and the knowledge that lives in three people’s heads.', examples: 'For operations and transformation leaders who need measurable time saved.' },
    ],

    insideTitle: 'AI speeds up the mechanical work. People make the calls.',
    insideLede: 'Especially in regulated industries, the most credible agent is the one that knows its limits.',
    inside: [
      { label: '01', title: 'Human in the loop by design', body: 'Approval gates, undo, and clear handoffs to a person are designed in from day one, not bolted on after the first incident.' },
      { label: '02', title: 'Explainable by default', body: 'Sources, confidence and the steps the agent took are visible to users and auditable by compliance.' },
      { label: '03', title: 'Native to your system', body: 'The agent UI uses your tokens and components, so it looks and behaves like your product, not a widget from someone else.' },
    ],

    processTitle: 'Small first, then bigger. You can stop after any stage.',
    process: [
      { when: 'Weeks 1 to 3', title: 'Discovery and agent design', body: 'Pick the job worth automating and design the agent around it.', items: ['Jobs to be done and workflow map', 'Autonomy and approval model', 'Conversation and UI patterns', 'Success metrics and evaluation plan'] },
      { when: 'Days 30 to 60', title: 'Pilot', body: 'One narrow workflow, live with real users, measured.', items: ['Working agent on one workflow', 'Skills, prompts and tool access', 'Evaluation suite and baseline', 'Go or no go readout'] },
      { when: 'Months 2 to 5', title: 'Production build', body: 'Expand scope, harden it, and ship it inside your product.', items: ['Design system native agent UI', 'Orchestration and integrations', 'Guardrails, logging, red team', 'Team handoff and documentation'] },
      { when: 'Ongoing', title: 'Run and improve', body: 'Agents drift as your product changes. Someone has to own that.', items: ['Monthly evaluation and tuning', 'New skills as features ship', 'UI governance audits', 'Quarterly roadmap review'] },
    ],

    tiersTitle: 'Clear prices for each stage.',
    tiersLede: 'Fixed fees for defined scope. No per seat surprises, and no outcome promises that depend on systems I do not control.',
    tiers: [
      { name: 'Discovery Sprint', price: '$15,000', term: 'Fixed · 2 to 3 weeks', summary: 'A designed, scoped agent your team can build, with or without me.', features: ['Workflow and opportunity map', 'Agent behavior specification', 'Clickable experience prototype', 'Build estimate and evaluation plan'], cta: 'Book discovery' },
      { name: 'Discovery and Pilot', price: '$45,000', term: 'Fixed · about 8 weeks', summary: 'A working agent on one real workflow, with numbers to show leadership.', features: ['Everything in Discovery', 'Live pilot with real users', 'Evaluation suite and baseline metrics', 'Executive readout and build plan'], cta: 'Plan a pilot', featured: true, tag: 'Most teams start here' },
      { name: 'Production Build', price: 'From $90,000', term: 'Scoped after the pilot', summary: 'The full agent, shipped inside your product and owned by your team.', features: ['Expanded workflows and tools', 'Design system native UI', 'Guardrails, logging, red team', 'Handoff, documentation and training'], cta: 'Talk scope' },
    ],
    addon: { title: 'Run and Improve retainer, from $6,000 per month', body: 'Monthly evaluations and tuning, new skills as your product ships features, and UI governance audits so the agent stays on brand and accurate.' },
    pricingNote: `${PRICING_NOTE} Backend integrations are delivered with your engineering team or a vetted build partner. Model and hosting costs are billed to your accounts at cost.`,

    faqs: [
      { q: 'Do you build the backend too?', a: 'I lead agent design, orchestration (skills, prompts, tools, evaluations) and the agent UI. For deep integrations I work alongside your engineers or bring in a vetted build partner, so you get one accountable lead without agency overhead.' },
      { q: 'Which models and platforms do you use?', a: 'Whatever fits your security posture and stack: Claude, OpenAI, Azure, Bedrock or Vertex, with MCP for tool access. The design and evaluation work carries over if you switch models later.' },
      { q: 'What if the pilot does not work?', a: 'Then you find out in eight weeks instead of six months. The readout tells you why, and what would need to be true for it to work.' },
      { q: 'Who owns the result?', a: 'You own your agent, prompts, data and UI. I keep my underlying framework and license it to you, which is part of why this costs less than starting from scratch.' },
    ],

    ctaHeadline: 'Got a workflow your customers or team keep getting stuck on?',
    ctaBody: 'Bring it to a call. I will tell you honestly whether an agent is the right fix, and what a pilot would look like.',
  },

  {
    slug: 'ai-design-system-in-a-box',
    navLabel: 'AI Design System in a Box',
    navDescription: 'A fixed scope, agent readable design system your AI tools can follow.',
    name: 'Agentic AI Design System in a Box',
    shortName: 'Design System in a Box',
    eyebrow: 'Product · AI Design System in a Box',
    headline: 'A design system your AI tools can follow.',
    metaDescription: 'A fixed scope, agent readable design system your AI coding tools can follow. Tokens, component specs, skills and governance in about six weeks, from $18,000.',
    lede: 'Your teams now generate UI with Cursor, Claude Code, Figma Make, Lovable and Bolt. Without a system those tools can read, every prompt drifts further from your brand. I package your tokens, components and rules into an agent readable system, set it up in your repository, and hand it over working. Fixed scope, fixed price, about six weeks.',
    metrics: [
      { value: 'About 6 weeks', label: 'from kickoff to a working system' },
      { value: 'Fixed price', label: 'three packages, no hourly billing' },
      { value: 'Every major tool', label: 'Claude Code, Cursor, Figma MCP and more' },
    ],

    problemsTitle: 'AI generated UI is fast. It is also making things up.',
    problemsLede: 'When an agent cannot find your system, it improvises, and every improvisation becomes design debt someone has to clean up.',
    problems: [
      { key: 'A', title: 'Hardcoded colors and spacing everywhere.', body: 'Agents guess hex values and pixel sizes instead of using your tokens, so theming and dark mode break.' },
      { key: 'B', title: 'Components that do not exist.', body: 'The AI writes a new button or modal rather than using the one you already have, and the library splinters.' },
      { key: 'C', title: 'Accessibility quietly regresses.', body: 'Contrast, focus states and labels are the first things generated code skips.' },
      { key: 'D', title: 'Your documentation is written for people, not agents.', body: 'A component site and a wiki page are not something an agent can reliably act on.' },
    ],

    insideTitle: 'One repository. Everything an agent needs to build on brand.',
    insideLede: 'A single entry point manifest tells any AI tool where your tokens, components, icons and rules live. No more pasting links into prompts.',
    inside: [
      { label: '01', title: 'Token architecture', body: 'Primitive, semantic and component tokens, synced between Figma Variables and code.' },
      { label: '02', title: 'Agent manifest', body: 'A single instructions file that every major AI coding tool reads first.' },
      { label: '03', title: 'Custom skills', body: 'Ready made skills for building screens, auditing UI and writing developer handoff specifications.' },
      { label: '04', title: 'Governance checks', body: 'Automated checks that flag hardcoded values, invented components and accessibility misses in every pull request.' },
    ],

    processTitle: 'A fixed path from audit to handoff.',
    process: [
      { when: 'Week 1', title: 'Audit', body: 'Inventory what you have in Figma and code, and test how your AI tools behave today.', items: ['Token and component inventory', 'AI drift baseline report'] },
      { when: 'Weeks 2 to 3', title: 'Structure', body: 'Token architecture, component specifications and the agent manifest.', items: ['Tokens in Figma and code', 'Agent readable specifications'] },
      { when: 'Weeks 4 to 5', title: 'Wire up', body: 'Connect your tools and add skills and governance checks.', items: ['Tool configuration', 'Skills and policy checks'] },
      { when: 'Week 6', title: 'Prove and hand off', body: 'Re run the baseline to show the difference, then train your team.', items: ['Before and after drift report', 'Team workshop and documentation'] },
    ],

    tiersTitle: 'Three sizes. Pick the one that matches your system today.',
    tiers: [
      { name: 'Foundation', price: '$18,000', term: 'Fixed · about 4 weeks', summary: 'For teams with a light or Figma only system who need agent readable basics.', features: ['Token architecture, one brand, light and dark', 'Agent manifest', 'Up to 15 core component specifications', 'Two AI tools configured', 'Drift baseline and after report'], cta: 'Get started' },
      { name: 'Agent Ready', price: '$38,000', term: 'Fixed · about 6 weeks', summary: 'For product teams already shipping AI generated UI who need it governed.', features: ['Everything in Foundation', 'Up to 40 component specifications and patterns', 'Three custom skills: build, audit, handoff', 'Governance checks on every pull request', 'All major AI tools configured', 'Team workshop'], cta: 'Book a fit call', featured: true, tag: 'Most popular' },
      { name: 'Enterprise', price: 'From $70,000', term: 'Scoped · 8 to 12 weeks', summary: 'For multi product platforms, multiple brands, or regulated environments.', features: ['Everything in Agent Ready', 'Multi brand and multi product theming', 'Governed token pipeline', 'Compliance grade accessibility policies', 'Rollout support across teams'], cta: 'Talk scope' },
    ],
    addon: { title: 'Keep it current, from $4,000 per month', body: 'New components, token updates, skill improvements and a monthly drift audit as your product and AI tools change.' },
    pricingNote: `${PRICING_NOTE} Agent Ready and Enterprise packages include a one year AI Component Library business licence.`,

    faqs: [
      { q: 'We do not have a design system yet. Is this for us?', a: 'Yes. Foundation is built for exactly that. We start from your product as it exists and set up the agent readable structure from day one, which is easier than retrofitting later.' },
      { q: 'Does it work with our component library?', a: 'The tokens, manifest and specifications do not depend on a framework. Component specifications point at your real code, whatever you build it in.' },
      { q: 'Why fixed price?', a: 'Because the scope is well understood. You know what you are paying and what you get, and I carry the risk of the estimate.' },
    ],

    ctaHeadline: 'Stop cleaning up after your AI tools.',
    ctaBody: 'A short call is enough to tell which package fits, and what your current drift looks like.',
  },

  {
    slug: 'ai-component-library',
    navLabel: 'AI Component Library',
    navDescription: 'A token driven library of AI and agentic UI components for your design system.',
    name: 'AI Component Library',
    shortName: 'Component Library',
    eyebrow: 'Product · AI Component Library',
    headline: 'The AI patterns your design system does not have yet.',
    metaDescription: 'A token driven library of 40+ AI and agentic UI components for Figma and React: prompt inputs, streaming, confidence and approval gates. Licences from $2,400 a year.',
    lede: 'Prompt inputs, streaming responses, suggestion cards, confidence and sources, agent activity, approval gates. Every team building AI features designs these from scratch and gets them slightly wrong. This library gives you a tested set that takes on your existing tokens, so it drops into the system you already have.',
    metrics: [
      { value: '40+', label: 'components and patterns across three tiers' },
      { value: 'Token driven', label: 'takes on your brand in minutes' },
      { value: 'Figma and React', label: 'plus agent readable specifications' },
    ],

    levelsTitle: 'Three tiers, from AI assisted to fully agentic.',
    levelsLede: 'Organized by how much the AI does, so teams pick patterns that match the trust a feature needs.',
    levels: [
      { level: 'Tier 1 · Standard', title: 'AI aware basics', body: 'Familiar components that know AI content might be inside them: labels, loading states, feedback.', examples: 'AI badge · feedback · disclaimer · streaming skeleton' },
      { level: 'Tier 2 · Hybrid AI', title: 'Human and AI together', body: 'The AI suggests and the person decides. Inline suggestions, accept or edit, confidence and sources.', examples: 'suggestion card · confidence · citations · prompt input' },
      { level: 'Tier 3 · Fully agentic', title: 'Agents that act', body: 'Multi step work the agent runs itself, with visible progress, approval gates and undo.', examples: 'activity trace · approval gate · task plan · handoff' },
    ],

    insideTitle: 'Map your tokens once. Every component follows.',
    insideLede: 'The library ships with semantic AI tokens that point to yours, so it looks native on day one and changes when your brand does.',
    inside: [
      { label: 'Figma', title: 'Figma library', body: 'Components with variants, built on Variables, ready to publish to your team.' },
      { label: 'Code', title: 'React package', body: 'Typed, accessible components with keyboard support and live regions for streaming.' },
      { label: 'Agents', title: 'Agent readable specifications', body: 'Specifications and usage rules your AI coding tools can follow, so generated UI uses these patterns.' },
      { label: 'Guide', title: 'Pattern guidance', body: 'When to use each tier, how much autonomy fits, and the copy that makes AI features trustworthy.' },
    ],

    tiersTitle: 'License the library, or have it installed for you.',
    tiersLede: 'Annual licences include updates as AI patterns change, and they change fast.',
    tiers: [
      { name: 'Team', price: '$2,400', term: 'Per year · 1 product, up to 15 seats', summary: 'For a single product team adding AI features.', features: ['Tier 1 and Tier 2 components', 'Figma library and React package', 'Token mapping guide', 'Quarterly updates'], cta: 'Get Team' },
      { name: 'Business', price: '$9,000', term: 'Per year · up to 3 products, unlimited seats', summary: 'For product organizations shipping agentic features across a platform.', features: ['All three tiers, including fully agentic', 'Agent readable specifications and skills', 'Pattern and AI copy guidance', 'Monthly updates', 'Email support'], cta: 'Get Business', featured: true, tag: 'Best value' },
      { name: 'Enterprise and Integration', price: 'From $25,000', term: 'Licence plus installation in your system', summary: 'I integrate it into your design system and code, mapped and tested.', features: ['Everything in Business, unlimited products', 'Token mapping and theming done for you', 'Custom components for your domain', 'Accessibility review and team workshop', 'Priority support'], cta: 'Talk integration' },
    ],
    pricingNote: `${PRICING_NOTE} Included with Agent Ready and Enterprise AI Design System in a Box packages.`,

    faqs: [
      { q: 'Does this replace our design system?', a: 'No. It adds the AI layer your system is missing, and borrows its look from your existing tokens.' },
      { q: 'What about Angular, Vue or Web Components?', a: 'React ships first. The Figma library, tokens and specifications work with any framework, and Enterprise integration can include porting to your stack.' },
      { q: 'Are the components accessible?', a: 'They are built to WCAG 2.2 AA, with particular care for the things AI interfaces usually get wrong: announcing streamed text, focus during agent actions, and keyboard reachable controls.' },
    ],

    ctaHeadline: 'Give your AI features a consistent face.',
    ctaBody: 'Not sure which licence fits? Let us look at your system together and figure it out.',
  },
];

export const getProduct = (slug?: string) => products.find(p => p.slug === slug);
