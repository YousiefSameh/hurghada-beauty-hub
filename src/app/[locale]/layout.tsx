import { Inter, Felipa, Tajawal } from 'next/font/google';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { localeDetails, Locale } from '@/config/locales.config';
import { AppProviders } from '@/providers/AppProviders';
import { generatePageMetadata } from '@/lib/seo/metadata';
import '@/app/globals.css';
import { hasLocale } from 'next-intl';
import { getLocalBusinessSchema } from '@/lib/seo/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const felipa = Felipa({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-felipa',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata = generatePageMetadata();

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = localeDetails[locale as Locale]?.dir || 'ltr';

  const isArabic = locale === 'ar';
  const primaryBodyFontClass = isArabic ? tajawal.className : inter.className;

  const schema = getLocalBusinessSchema();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${felipa.variable} ${tajawal.variable} scroll-smooth`}
    >
      <body
        className={`${primaryBodyFontClass} antialiased bg-brand-dark-950 text-brand-light-50 min-h-screen flex flex-col`}
      >
        <AppProviders locale={locale} messages={messages}>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </AppProviders>
      </body>
    </html>
  );
}
