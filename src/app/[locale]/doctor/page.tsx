import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import DoctorClient from './_components/DoctorClient';
import { Locale } from '@/config/locales.config';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale || 'en';

  const titles = {
    en: 'Expert Aesthetic Doctor in Hurghada | Dr. Alaa Zaki',
    ar: 'دكتورة التجميل والجلدية الغردقة | د. آلاء زكي',
    de: 'Erfahrene Ästhetik-Ärztin in Hurghada | Dr. Alaa Zaki',
    fr: 'Médecin Esthétique Experte à Hurghada | Dr. Alaa Zaki',
    pl: 'Ekspert Medycyny Estetycznej w Hurghadzie | Dr. Alaa Zaki',
    ru: 'Эксперт Эстетической Медицины в Хургаде | Д-р Алаа Заки'
  };

  const descriptions = {
    en: 'Meet Dr. Alaa Zaki, leading aesthetic expert in Hurghada. Specializing in facial harmonization, anti-aging, biostimulators, and luxury skin rejuvenation treatments.',
    ar: 'تعرفي على د. آلاء زكي، خبيرة التجميل الرائدة في الغردقة. متخصصة في تنسيق ملامح الوجه (الهرموني)، ومكافحة الشيخوخة، ومحفزات الكولاجين، وعلاجات تجديد البشرة الفاخرة.',
    de: 'Lernen Sie Dr. Alaa Zaki kennen, die führende Expertin für Ästhetik in Hurghada. Spezialisiert auf Gesichtsharmonisierung und Anti-Aging.',
    fr: 'Rencontrez le Dr Alaa Zaki, experte de premier plan en esthétique à Hurghada. Spécialisée dans l’harmonisation faciale et l’anti-âge.',
    pl: 'Poznaj dr Alaa Zaki, wiodącego eksperta medycyny estetycznej w Hurghadzie. Specjalizacja: harmonizacja twarzy i anti-aging.',
    ru: 'Познакомьтесь с доктором Алаа Заки, ведущим экспертом в области эстетической медицины в Хургаде. Специализация: гармонизация лица и омоложение.'
  };

  return generatePageMetadata({
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    alternates: {
      canonical: `https://hurghadabeautyhub.com/${currentLocale}/doctor`,
      languages: {
        'en': `https://hurghadabeautyhub.com/en/doctor`,
        'ar': `https://hurghadabeautyhub.com/ar/doctor`,
        'de': `https://hurghadabeautyhub.com/de/doctor`,
        'fr': `https://hurghadabeautyhub.com/fr/doctor`,
        'pl': `https://hurghadabeautyhub.com/pl/doctor`,
        'ru': `https://hurghadabeautyhub.com/ru/doctor`,
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: `https://hurghadabeautyhub.com/${currentLocale}/doctor`,
    }
  });
}

export default async function Page() {
  return <DoctorClient />;
}