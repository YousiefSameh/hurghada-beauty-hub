'use client';

import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

interface I18nProviderProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export function I18nProvider({ children, locale, messages }: I18nProviderProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Africa/Cairo">
      {children}
    </NextIntlClientProvider>
  );
}
