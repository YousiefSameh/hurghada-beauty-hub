import HeroSection from '@/components/sections/HeroSection';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('common');

  return (
    <main>
      <HeroSection />
    </main>
  );
}