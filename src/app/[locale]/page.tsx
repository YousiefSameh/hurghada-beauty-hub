import DoctorSection from '@/components/sections/DoctorSection';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
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
      <ServicesSection />
      <DoctorSection />
    </main>
  );
}