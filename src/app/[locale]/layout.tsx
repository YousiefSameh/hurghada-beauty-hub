import { IBM_Plex_Sans_Arabic, Inter, Playfair_Display } from 'next/font/google';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { localeDetails, Locale } from '@/config/locales.config';
import { AppProviders } from '@/providers/AppProviders';
import { generatePageMetadata } from '@/lib/seo/metadata';
import '@/app/globals.css';
import { hasLocale } from 'next-intl';
import { getLocalBusinessSchema } from '@/lib/seo/schema';
import Navbar from '@/components/organisms/navbar';
import FloatingBtns from '@/components/molecules/FloatingBtn';
import Footer from '@/components/organisms/footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// const climateCrisis = Climate_Crisis({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-climate-crisis',
// });

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair',
});

const IBMPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  variable: '--font-IBM-Plex-Sans-Arabic',
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
  const primaryBodyFontClass = isArabic ? IBMPlexSansArabic.className : inter.className;

  const schema = getLocalBusinessSchema();

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${playfair.variable} ${IBMPlexSansArabic.variable} scroll-smooth`}
    >
      <body
        className={`${primaryBodyFontClass} antialiased min-h-screen flex flex-col`}
      >
        <AppProviders locale={locale} messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <FloatingBtns />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </AppProviders>
      </body>
    </html>
  );
}
