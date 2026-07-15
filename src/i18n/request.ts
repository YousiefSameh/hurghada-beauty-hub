import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { headers } from 'next/headers';
import { Locale } from '@/config/locales.config';

export default getRequestConfig(async () => {
  const headerList = await headers();
  let locale = headerList.get('x-next-intl-locale') || routing.defaultLocale;

  if (!routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});