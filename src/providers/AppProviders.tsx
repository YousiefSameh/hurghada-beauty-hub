import { ReduxProvider } from './ReduxProvider';
import { QueryProvider } from './QueryProvider';
import { AuthProvider } from './AuthProvider';
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
      <ReduxProvider>
        <QueryProvider>
          <AuthProvider>
            <ThemeProvider defaultTheme="light" storageKey="beauty-hub-theme">
              {children}
            </ThemeProvider>
          </AuthProvider>
        </QueryProvider>
      </ReduxProvider>
    </I18nProvider>
  );
}
