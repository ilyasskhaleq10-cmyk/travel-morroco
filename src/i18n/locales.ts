export const LOCALES = ['es', 'en', 'fr', 'ar'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export interface LocaleInfo {
  /** Value for <html lang>. */
  htmlLang: string;
  /** Value for <html dir>. Arabic is the only right-to-left locale here. */
  dir: 'ltr' | 'rtl';
  /** How the language names itself, for the language picker. */
  native: string;
  /** Two-letter code shown in the compact picker. */
  short: string;
  /** hreflang value for the alternate links. */
  hreflang: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  es: { htmlLang: 'es', dir: 'ltr', native: 'Español', short: 'ES', hreflang: 'es' },
  en: { htmlLang: 'en', dir: 'ltr', native: 'English', short: 'EN', hreflang: 'en' },
  fr: { htmlLang: 'fr', dir: 'ltr', native: 'Français', short: 'FR', hreflang: 'fr' },
  ar: { htmlLang: 'ar', dir: 'rtl', native: 'العربية', short: 'AR', hreflang: 'ar' },
};

export const isLocale = (value: unknown): value is Locale => LOCALES.includes(value as Locale);
