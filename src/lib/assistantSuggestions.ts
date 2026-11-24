/**
 * Starter questions for the services assistant, chosen for the page the
 * visitor is on.
 *
 * A blank chat box asks the visitor to invent a question. These give them a
 * relevant one to click, without restricting what they can type.
 *
 * Product and offering pages generate their questions from the same data the
 * page renders from, so renaming a product or editing its FAQ updates the
 * suggestions too. Everything else is a small curated map, falling back to
 * section defaults and then to a general set.
 *
 * Copy rule: no em dashes or en dashes in any rendered string. See DESIGN_SYSTEM.md.
 */
import { products, productPageId } from '../data/products';
import {
  serviceOfferings,
  offeringPageId,
  existingServiceProducts,
} from '../data/serviceOfferings';

const GENERAL: string[] = [
  'What do you offer, and what does it cost?',
  'We need AI features in an enterprise app. Where do we start?',
  'What is an AI design system in a box?',
];

/** Pages that get their own questions. Anything absent falls through below. */
const BY_PAGE: Record<string, string[]> = {
  home: GENERAL,

  about: [
    'What is Timothy\'s background?',
    'What kind of teams does he usually work with?',
    'What is AI Experience Architecture?',
  ],

  resume: [
    'Where has Timothy worked?',
    'What did he do at ZS Associates?',
    'What is he focused on now?',
  ],

  'ai-experience-architecture': [
    'What is AI Experience Architecture?',
    'How is this different from regular UX work?',
    'Which services build on it?',
  ],

  'case-studies': [
    'What kind of work have you done before?',
    'Do you have enterprise SaaS examples?',
    'What services produced this kind of work?',
  ],

  contact: [
    'What should I include when I reach out?',
    'What happens after I get in touch?',
    'What do engagements typically cost?',
  ],

  ...Object.fromEntries(
    // The services index and its older alias ask the same thing.
    ['work-with-me', 'services', 'service-offerings'].map(page => [
      page,
      [
        'What do you offer, and what does it cost?',
        'Which option fits a small team?',
        'What is the difference between a project and a retainer?',
      ],
    ]),
  ),

  solutions: [
    'Which of these fits an enterprise SaaS product?',
    'Do you work on AI-native products?',
    'What would an engagement look like?',
  ],

  perspectives: [
    'How does Timothy approach AI product design?',
    'What is his design philosophy?',
    'How does he work with product and engineering teams?',
  ],
};

/** Section defaults, applied by page id prefix when no exact entry matches. */
const BY_PREFIX: [string, string[]][] = [
  ['solutions-', [
    'What would you do for a product like this?',
    'Which service covers this kind of work?',
    'What does an engagement cost?',
  ]],
  ['perspectives-', [
    'How does Timothy approach this?',
    'How does this show up in the actual work?',
    'Which services apply this?',
  ]],
  ['case-study-', [
    'What services does work like this involve?',
    'Could you do something similar for us?',
    'What would a project like this cost?',
  ]],
  ['work-with-me-', [
    'What is included in this?',
    'What does it cost?',
    'How is this different from the other options?',
  ]],
];

const productSuggestions = (page: string): string[] | null => {
  const product = products.find(item => productPageId(item.slug) === page);
  if (!product) return null;
  // The product's own FAQ: the questions visitors already ask about it, and
  // ones the assistant's reference can answer precisely.
  const faqs = product.faqs.slice(0, 2).map(faq => faq.q);
  return [`What does ${product.shortName} cost?`, ...faqs].slice(0, 3);
};

const offeringSuggestions = (page: string): string[] | null => {
  const offering = serviceOfferings.find(item => offeringPageId(item.slug) === page);
  if (!offering) return null;
  // Availability first where it is not open, so the suggestion does not imply
  // something the visitor cannot actually book.
  const opener =
    offering.status === 'Review'
      ? `What is included in the ${offering.shortName}?`
      : `Is the ${offering.shortName} available right now?`;
  return [
    opener,
    `What does the ${offering.shortName} cost?`,
    'Is this the right fit for my team?',
  ];
};

/**
 * The service pages outside the two lists above. Matched on both ids because
 * several of these are reachable under a slug and under a /work-with-me path.
 */
const serviceProductSuggestions = (page: string): string[] | null => {
  const item = existingServiceProducts.find(
    entry => entry.page === page || entry.slug === page,
  );
  if (!item) return null;
  return [
    // "Tell me about" rather than "What is", because several of these names are
    // plural ("Strategy Sessions", "Speaking & Workshops").
    `Tell me about ${item.name}.`,
    'How does this compare to your other services?',
    'What would this cost?',
  ];
};

export function assistantSuggestions(page: string): string[] {
  return (
    productSuggestions(page) ??
    offeringSuggestions(page) ??
    BY_PAGE[page] ??
    serviceProductSuggestions(page) ??
    BY_PREFIX.find(([prefix]) => page.startsWith(prefix))?.[1] ??
    GENERAL
  );
}
