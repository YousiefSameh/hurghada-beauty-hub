'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
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
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    const newLocale = value as Locale;
    router.replace(pathname, { locale: newLocale });
  };

  return (  
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger
        dir={localeDetails[currentLocale].dir}
        className="w-full bg-brand-dark-900 cursor-pointer border border-brand-gold/20 text-brand-light-200 hover:text-white px-6 py-6 text-base font-bold rounded-lg transition-colors duration-200 focus:ring-1 focus:ring-brand-gold/50 focus:ring-offset-0"
      >
        <SelectValue placeholder={localeDetails[currentLocale].label} />
      </SelectTrigger>
      <SelectContent position='popper'>
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
