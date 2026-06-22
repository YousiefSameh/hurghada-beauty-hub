'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { locales, localeDetails, Locale } from '@/config/locales.config';

export function LanguageSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-brand-dark-900 border border-brand-gold/20">
      {locales.map((locale) => {
        const isActive = locale === currentLocale;
        return (
          <button
            key={locale}
            onClick={() => handleLanguageChange(locale)}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
              isActive
                ? 'bg-brand-accent text-brand-dark-950 shadow-md'
                : 'text-brand-light-200 hover:bg-brand-dark-800 hover:text-white'
            }`}
            dir={localeDetails[locale].dir}
          >
            {localeDetails[locale].label}
          </button>
        );
      })}
    </div>
  );
}
