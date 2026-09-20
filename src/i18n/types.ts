export type TourId = 'desierto3' | 'gran6' | 'desierto3fes';

export interface TourDay {
  /** "Día 1: Marrakech – Ait Ben Haddou – Valle del Dades" */
  title: string;
  bullets: string[];
  /** Where the night is spent, shown as a pill under the day. */
  overnight?: string;
}

export interface TourCopy {
  /** URL segment for this tour in this language. */
  slug: string;
  name: string;
  shortName: string;
  route: string;
  duration: string;
  summary: string;
  /** Four short chips on the card. */
  highlights: string[];
  days: TourDay[];
  included: string[];
  notIncluded: string[];
  /** Honest caveat shown in a note box. Optional. */
  note?: string;
  metaTitle: string;
  metaDescription: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    /** Sentence that describes the business for schema.org. */
    tagline: string;
  };
  nav: {
    tours: string;
    itineraries: string;
    why: string;
    faq: string;
    contact: string;
  };
  common: {
    bookNow: string;
    whatsapp: string;
    viewItinerary: string;
    from: string;
    perPerson: string;
    onRequest: string;
    included: string;
    notIncluded: string;
    itinerary: string;
    overnight: string;
    goodToKnow: string;
    backToTours: string;
    otherTours: string;
    skipToContent: string;
    /** {tour} is replaced by the tour name. */
    whatsappMessage: string;
    whatsappMessageGeneric: string;
    languageLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
  };
  trust: { title: string; text: string }[];
  tours: {
    tagline: string;
    title: string;
    subtitle: string;
    items: Record<TourId, TourCopy>;
  };
  steps: {
    tagline: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  why: {
    tagline: string;
    title: string;
    subtitle: string;
    items: { title: string; text: string }[];
  };
  places: {
    tagline: string;
    title: string;
    subtitle: string;
    items: { name: string; text: string }[];
  };
  faq: {
    tagline: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    secondary: string;
  };
  footer: {
    about: string;
    toursTitle: string;
    companyTitle: string;
    contactTitle: string;
    rights: string;
    credits: string;
  };
  credits: {
    /** URL segment of the credits page in this language. */
    slug: string;
    title: string;
    intro: string;
  };
  notFound: {
    title: string;
    text: string;
    button: string;
  };
}
