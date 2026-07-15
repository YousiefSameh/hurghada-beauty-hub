import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import DoctorClient from './_components/DoctorClient';
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';

  const titles = {
    en: 'Expert Aesthetic Doctor in Hurghada | Dr. Alaa Zaki',
    ar: 'دكتورة التجميل والجلدية الغردقة | د. آلاء زكي',
    de: 'Erfahrene Ästhetik-Ärztin in Hurghada | Dr. Alaa Zaki',
    fr: 'Médecin Esthétique Experte à Hurghada | Dr. Alaa Zaki',
    pl: 'Ekspert Medycyny Estetycznej w Hurghadzie | Dr. Alaa Zaki',
    ru: 'Эксперت Эстетической Медицины в Хургаде | Д-р Алаа Заки'
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
      canonical: currentLocale === 'en' ? `https://hurghadabeautyhub.com/doctor` : `https://${currentLocale}.hurghadabeautyhub.com/doctor`,
      languages: {
        'en': `https://hurghadabeautyhub.com/doctor`,
        'ar': `https://ar.hurghadabeautyhub.com/doctor`,
        'de': `https://de.hurghadabeautyhub.com/doctor`,
        'fr': `https://fr.hurghadabeautyhub.com/doctor`,
        'pl': `https://pl.hurghadabeautyhub.com/doctor`,
        'ru': `https://ru.hurghadabeautyhub.com/doctor`,
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: currentLocale === 'en' ? `https://hurghadabeautyhub.com/doctor` : `https://${currentLocale}.hurghadabeautyhub.com/doctor`,
    }
  });
}

export default async function Page() {
  return <DoctorClient />;
}