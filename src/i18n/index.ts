import { DEFAULT_LOCALE, LOCALES, LOCALE_INFO, isLocale, type Locale } from './locales';
import type { Dictionary, TourId } from './types';
import { es } from './es';
import { en } from './en';
import { fr } from './fr';
import { ar } from './ar';

export { DEFAULT_LOCALE, LOCALES, LOCALE_INFO, isLocale };
export type { Locale, Dictionary, TourId };

export const DICTIONARIES: Record<Locale, Dictionary> = { es, en, fr, ar };

export const t = (lang: Locale): Dictionary => DICTIONARIES[lang] ?? DICTIONARIES[DEFAULT_LOCALE];

/**
 * Builds an absolute path for a locale. The default locale has no prefix, so
 * `path('/tours/x', 'es')` is `/tours/x` and `path('/tours/x', 'en')` is
 * `/en/tours/x`. `trailingSlash: false` in astro.config, so no trailing slash
 * except on the root.
 */
export const path = (to: string, lang: Locale): string => {
  const clean = `/${to.replace(/^\/+|\/+$/g, '')}`;
  const prefix = lang === DEFAULT_LOCALE ? '' : `/${lang}`;
  return clean === '/' ? prefix || '/' : `${prefix}${clean}`;
};

/** Path of a tour page in a given language, using that language's slug. */
export const tourPath = (id: TourId, lang: Locale): string => path(`/tours/${t(lang).tours.items[id].slug}`, lang);

/** Reads the locale out of a URL pathname. Falls back to the default locale. */
export const localeFromPathname = (pathname: string): Locale => {
  const first = pathname.split('/').filter(Boolean)[0];
  return isLocale(first) ? first : DEFAULT_LOCALE;
};

/**
 * Same page in every language, for the <link rel="alternate"> tags and the
 * language picker. `key` identifies the page: 'home', 'credits' or a tour id.
 */
export const alternates = (key: 'home' | 'credits' | TourId): { lang: Locale; href: string }[] =>
  LOCALES.map((lang) => {
    if (key === 'home') return { lang, href: path('/', lang) };
    if (key === 'credits') return { lang, href: path(`/${t(lang).credits.slug}`, lang) };
    return { lang, href: tourPath(key, lang) };
  });

/** Replaces {tour} in the WhatsApp template. */
export const fillTemplate = (template: string, values: Record<string, string>): string =>
  template.replace(/\{(\w+)\}/g, (match, key) => values[key] ?? match);
