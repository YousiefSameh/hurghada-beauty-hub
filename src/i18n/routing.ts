import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from '@/config/locales.config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'never'
});