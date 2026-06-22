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
  

  return (
    <div className='h-[10000px]'>  
      <p>jtkjslkjfskl</p>
    </div>
  );
}