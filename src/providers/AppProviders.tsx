import { ThemeProvider } from './ThemeProvider';
import { I18nProvider } from './I18nProvider';
import { AbstractIntlMessages } from 'next-intl';

interface AppProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export function AppProviders({ children, locale, messages }: AppProvidersProps) {
  return (
    <I18nProvider locale={locale} messages={messages}>
      {children}
    </I18nProvider>
  );
}
