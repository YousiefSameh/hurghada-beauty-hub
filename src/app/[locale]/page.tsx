import { setRequestLocale, getTranslations } from 'next-intl/server';
import { LanguageSwitcher } from '@/components/molecules/LanguageSwitcher';
import { getLocalBusinessSchema } from '@/lib/seo/schema';

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('common');
  const schema = getLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-3xl mx-auto gap-8">
        <header className="flex flex-col gap-4">
          {/* Changed text-brand-gold to text-brand-accent for an eye-catching brand header */}
          <h1 className="text-5xl italic md:text-6xl font-serif text-brand-accent tracking-wide">
            {t('title')}
          </h1>
          <p className="text-brand-light-200 text-lg max-w-lg mx-auto leading-relaxed">
            {t('description')}
          </p>
        </header>

        {/* Updated borders and headers to use the delicate logo green accents instead of gold lines */}
        <section className="bg-brand-dark-900/60 backdrop-blur-md border border-brand-green/20 p-6 rounded-2xl w-full max-w-md shadow-2xl flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand-green/80">
              Select Language
            </h2>
            <div className="flex justify-center mt-2">
              <LanguageSwitcher />
            </div>
          </div>

          <div className="border-t border-brand-green/20 pt-4 flex flex-col gap-3">
            {/* The main CTA button now rocks the premium logo red with its dark variant on hover */}
            <a
              href={`/${locale}/admin/dashboard`}
              className="w-full py-2.5 bg-brand-accent text-brand-light-50 font-semibold rounded-lg hover:bg-brand-accent-dark transition-all duration-200 shadow-md"
            >
              Access Admin Portal
            </a>
            <a
              href={`/${locale}/auth/login`}
              className="w-full py-2.5 bg-transparent border border-brand-light-200 text-brand-light-100 font-semibold rounded-lg hover:bg-brand-dark-800 transition-all duration-200"
            >
              {t('actions.login')}
            </a>
          </div>
        </section>
      </main>
    </>
  );
}