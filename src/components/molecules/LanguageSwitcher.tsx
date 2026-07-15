'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation'; // هنستخدم الـ pathname الطبيعي
import { locales, localeDetails, Locale } from '@/config/locales.config';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/select';

export function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    const newLocale = value as Locale;
    if (newLocale === currentLocale) return;

    const host = window.location.host;
    const hostParts = host.split('.');

    let baseDomain = host;

    if (host.includes('localhost')) {
      if (hostParts.length > 1 && locales.includes(hostParts[0] as Locale)) {
        baseDomain = hostParts.slice(1).join('.');
      }
    } else {
      if (hostParts.length > 2 && locales.includes(hostParts[0] as Locale)) {
        baseDomain = hostParts.slice(1).join('.');
      }
    }

    const protocol = window.location.protocol;
    const searchParams = window.location.search;

    let newUrl = '';

    if (newLocale === 'en') {
      newUrl = `${protocol}//${baseDomain}${pathname}${searchParams}`;
    } else {
      newUrl = `${protocol}//${newLocale}.${baseDomain}${pathname}${searchParams}`;
    }

    window.location.href = newUrl;
  };

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger
        dir={localeDetails[currentLocale].dir}
        className="w-full bg-brand-dark-900 cursor-pointer border border-brand-gold/20 text-brand-light-200 hover:text-white px-6 py-6 text-base font-bold rounded-lg transition-colors duration-200 focus:ring-1 focus:ring-brand-gold/50 focus:ring-offset-0"
      >
        <SelectValue placeholder={localeDetails[currentLocale].label} />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectLabel className="text-[10px] uppercase tracking-wider text-black px-2 py-1.5">
            Languages
          </SelectLabel>

          {locales.map((locale) => (
            <SelectItem
              key={locale}
              value={locale}
              dir={localeDetails[locale].dir}
              className="text-xs font-medium text-brand-accent rounded-md cursor-pointer my-1 focus:bg-brand-accent/10 hover:text-white data-[state=checked]:bg-brand-accent/10 data-[state=checked]:text-black px-2 py-1.5 transition-colors duration-200"
            >
              {localeDetails[locale].label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
