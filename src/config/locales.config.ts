export const defaultLocale = 'en';

export const locales = ['en', 'ar', 'de', 'ru', 'pl', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const localePrefix = 'always'; // 'always' | 'as-needed' | 'never'

export const localeDetails = {
  en: { label: 'English', dir: 'ltr', code: 'en' },
  ar: { label: 'العربية', dir: 'rtl', code: 'ar' },
  de: { label: 'Deutsch', dir: 'ltr', code: 'de' },
  ru: { label: 'Русский', dir: 'ltr', code: 'ru' },
  pl: { label: 'Polski', dir: 'ltr', code: 'pl' },
  fr: { label: 'Francais', dir: 'ltr', code: 'fr' }
} as const;
