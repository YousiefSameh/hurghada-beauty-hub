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

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale || 'en';

  const titles = {
    en: 'Beauty Hub Clinic Hurghada | Luxury Aesthetic & Laser Center',
    ar: 'عيادة بيوتي هب الغردقة | المركز الرائد للتجميل والليزر',
    de: 'Beauty Hub Klinik Hurghada | Luxus Ästhetik- & Laserzentrum',
    fr: 'Clinique Beauty Hub Hurghada | Centre d\'Esthétique & Laser de Luxe',
    pl: 'Klinika Beauty Hub Hurghada | Luksusowe Centrum Estetyki i Laseroterapii',
    ru: 'Клиника Beauty Hub Хургада | Люкс Центр Эстетики и Лазерной Медицины'
  };

  const descriptions = {
    en: 'Experience premium aesthetic medical care at Beauty Hub Clinic in Hurghada. Leading experts in Botox, fillers, laser hair removal, and luxury skin rejuvenation treatments.',
    ar: 'اكتشفي الرعاية الطبية الفاخرة في عيادة بيوتي هب الغردقة. خبراء في حقن البوتوكس، الفيلر، إزالة الشعر بالليزر، وأحدث جلسات العناية بالبشرة وتجديد حيويتها.',
    de: 'Erleben Sie erstklassige ästhetische medizinische Versorgung in Hurghada. Experten für Botox, Filler, Haarentfernung mit Laser und Hautverjüngung.',
    fr: 'Découvrez des soins médicaux esthétiques haut de gamme à Hurghada. Experts en Botox, fillers, épilation au laser et rajeunissement de la peau.',
    pl: 'Poznaj najwyższej jakości medycynę estetyczną w Hurghadzie. Eksperci w dziedzinie botoksu, wypełniaczy, depilacji laserowej i odmładzania skóry.',
    ru: 'Премиальная эстетическая медицина в Хургаде. Эксперты в области ботокса, филлеров, лазерной эпиляции и омоложения кожи.'
  };

  return generatePageMetadata({
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    alternates: {
      canonical: `https://hurghadabeautyhub.com/${currentLocale}`,
      languages: {
        'en': `https://hurghadabeautyhub.com/en`,
        'ar': `https://hurghadabeautyhub.com/ar`,
        'de': `https://hurghadabeautyhub.com/de`,
        'fr': `https://hurghadabeautyhub.com/fr`,
        'pl': `https://hurghadabeautyhub.com/pl`,
        'ru': `https://hurghadabeautyhub.com/ru`,
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: `https://hurghadabeautyhub.com/${currentLocale}`,
    }
  });
}

export default async function LocalizedHomePage({
  params,
}: Props) {
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