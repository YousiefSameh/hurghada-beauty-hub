import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import ContactSection from '@/components/sections/ContactSection';
import DoctorSection from '@/components/sections/DoctorSection';
import HeroSection from '@/components/sections/HeroSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TreatmentsSection from '@/components/sections/TreatmentsSection';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';

  const titles = {
    en: 'Beauty Hub Clinic Hurghada | Luxury Aesthetic & Laser Center',
    ar: 'عيادة بيوتي هب الغردقة | المركز الرائد للتجميل والليزر',
    de: 'Beauty Hub Klinik Hurghada | Luxus Ästhetik- & Laserzentrum',
    fr: 'Clinique Beauty Hub Hurghada | Centre d\'Esthétique & Laser de Luxe',
    pl: 'Klinika Beauty Hub Hurghada | Luksusowe Centrum Estetyki i Laseroterapii',
    ru: 'Клиника Beauty Hub Хургада | Люкс Центр Эстетики и Лазерной Медицины'
  };

  const descriptions = {
    en: 'Experience premium aesthetic medical care at Beauty Hub Clinic in Hurghada. Leading experts in Botox, fillers, and luxury skin rejuvenation treatments.',
    ar: 'اكتشفي الرعاية الطبية الفاخرة في عيادة بيوتي هب الغردقة. خبراء في حقن البوتوكس، الفيلر، وأحدث جلسات العناية بالبشرة وتجديد حيويتها.',
    de: 'Erleben Sie erstklassige ästhetische medizinische Versorgung in Hurghada. Experten für Botox, Filler und Hautverjüngung.',
    fr: 'Découvrez des soins médicaux esthétiques haut de gamme à Hurghada. Experts en Botox, fillers et rajeunissement de la peau.',
    pl: 'Poznaj najwyższej jakości medycynę estetyczną w Hurghadzie. Eksperci w dziedzinie botoksu, wypełniaczy i odmładzania skóry.',
    ru: 'Премиальная эстетическая медицина в Хургаде. Эксперты в области ботокса, филлеров и омоложения кожи.'
  };

  return generatePageMetadata({
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    alternates: {
      canonical: currentLocale === 'en' ? `https://hurghadabeautyhub.com` : `https://${currentLocale}.hurghadabeautyhub.com`,
      languages: {
        en: `https://hurghadabeautyhub.com`,
        ar: `https://ar.hurghadabeautyhub.com`,
        de: `https://de.hurghadabeautyhub.com`,
        fr: `https://fr.hurghadabeautyhub.com`,
        pl: `https://pl.hurghadabeautyhub.com`,
        ru: `https://ru.hurghadabeautyhub.com`,
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: currentLocale === 'en' ? `https://hurghadabeautyhub.com` : `https://${currentLocale}.hurghadabeautyhub.com`,
    }
  });
}

export default async function LocalizedHomePage() {
  const headerList = await headers();
  const locale = (headerList.get('x-next-intl-locale') as Locale) || 'en';
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