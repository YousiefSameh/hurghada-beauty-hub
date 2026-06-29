import ContactSection from '@/components/sections/ContactSection';
import DoctorSection from '@/components/sections/DoctorSection';
import HeroSection from '@/components/sections/HeroSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TreatmentsSection from '@/components/sections/TreatmentsSection';
import { setRequestLocale } from 'next-intl/server';

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <TreatmentsSection />
      <DoctorSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}