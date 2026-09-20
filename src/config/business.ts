/**
 * Every real-world detail of the business lives here: change it once and the
 * four language versions of the site follow. Values marked PROVISIONAL are
 * placeholders waiting for the real ones.
 */
export const BUSINESS = {
  /** PROVISIONAL — working brand name. */
  name: 'Atlas Nomad',
  legalName: 'Atlas Nomad Travel',
  /** Production domain, used for canonical URLs, sitemap and Open Graph. PROVISIONAL. */
  url: 'https://atlasnomad.example',

  /** Display format; `phoneE164` is the digits-only version for wa.me and tel:. */
  phone: '+212 719 705 808',
  phoneE164: '212719705808',
  email: 'reservas@atlasnomad.example',

  /** Where the business operates from, for local SEO. */
  address: {
    city: 'Marrakech',
    region: 'Marrakech-Safi',
    country: 'MA',
    countryName: 'Marruecos',
  },

  social: {
    instagram: 'https://instagram.com/', // PROVISIONAL
    facebook: '', // leave empty to hide
    tripadvisor: '',
  },

  /** Currency used for every displayed price. */
  currency: 'EUR',
  currencySymbol: '€',
} as const;

/** WhatsApp deep link with a prefilled message. */
export const whatsappLink = (message: string) =>
  `https://wa.me/${BUSINESS.phoneE164}?text=${encodeURIComponent(message)}`;
