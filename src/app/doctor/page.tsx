import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import DoctorClient from './_components/DoctorClient';
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';

  const titles = {
    en: 'Dr. Alaa Zaki | Top Aesthetic Specialist in Hurghada',
    ar: 'د. آلاء زكي | افضل دكتورة تجميل وبشرة في الغردقة',
    de: 'Dr. Alaa Zaki | Führende Ästhetik-Spezialistin in Hurghada',
    fr: 'Dr. Alaa Zaki | Spécialiste en Esthétique à Hurghada',
    pl: 'Dr. Alaa Zaki | Ekspert Medycyny Estetycznej w Hurghadzie',
    ru: 'Д-р Алаа Заки | Лучший Косметолог в Хургаде'
  };

  const descriptions = {
    en: 'Meet Dr. Alaa Zaki, top aesthetic specialist at Hurghada Beauty Hub. Expert in Botox, dermal fillers, lip filler, HydraFacial & facial harmonization in Hurghada.',
    ar: 'د. آلاء زكي خبيرة التجميل وحقن البوتوكس والفيلر وتناسق ملامح الوجه في بيوتي هب الغردقة. احصلي على أحدث جلسات نضارة البشرة والفيلر مع أفضل دكتورة تجميل.',
    de: 'Erfahren Sie mehr über Dr. Alaa Zaki im Hurghada Beauty Hub. Expertin für Botox, Lippen aufspritzen, Hyaluronsäure und Gesichtsbehandlungen.',
    fr: 'Découvrez le Dr. Alaa Zaki au Hurghada Beauty Hub. Experte en injections Botox, fillers, acide hyaluronique et harmonisation du visage.',
    pl: 'Poznaj dr Alaa Zaki w Hurghada Beauty Hub. Specjalistka od botoksu, wypełniaczy ust, kwasu hialuronowego i pielęgnacji skóry.',
    ru: 'Познакомьтесь с доктором Алаа Заки в Hurghada Beauty Hub. Эксперт по ботоксу, филлерам губ, гиалуроновой кислоте и уходу за кожей.'
  };

  const pageKeywords = [
    'Dr Alaa Zaki',
    'Dr Alaa Zaki Hurghada',
    'د آلاء زكي',
    'دكتورة آلاء زكي الغردقة',
    'Hurghada Beauty Hub doctor',

    'افضل دكتورة تجميل في الغردقة',
    'دكتور تجميل شاطر الغردقة',
    'دكتورة جلدية وتجميل الغردقة',
    'احسن دكتورة بوتوكس الغردقة',
    'فيلر شفايف دكتورة الاء',
    'احسن مكان فيلر وبوتوكس الغردقة',
    'جلسات نضارة بشرة الغردقة',

    'Best aesthetic doctor Hurghada',
    'Top cosmetologist Hurghada',
    'Best doctor for botox in Hurghada',
    'Lip fillers doctor Hurghada',
    'Facial harmonization expert Hurghada',
    'Female aesthetic doctor Hurghada',
    'English speaking doctor Hurghada beauty',

    'Ästhetik Ärztin Hurghada',
    'Kosmetologin Hurghada',
    'Косметолог Алаа Заки Хургада',
    'Врач косметолог Хургада'
  ];

  return generatePageMetadata({
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    keywords: pageKeywords,
    alternates: {
      canonical: currentLocale === 'en' ? `https://hurghadabeautyhub.com/doctor` : `https://${currentLocale}.hurghadabeautyhub.com/doctor`,
      languages: {
        en: `https://hurghadabeautyhub.com/doctor`,
        ar: `https://ar.hurghadabeautyhub.com/doctor`,
        de: `https://de.hurghadabeautyhub.com/doctor`,
        fr: `https://fr.hurghadabeautyhub.com/doctor`,
        pl: `https://pl.hurghadabeautyhub.com/doctor`,
        ru: `https://ru.hurghadabeautyhub.com/doctor`,
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