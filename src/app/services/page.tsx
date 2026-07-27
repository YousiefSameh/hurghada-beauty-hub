import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import TreatmentsClient from './_components/TreatmentsClient';
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';

  const titles = {
    en: 'Hurghada Beauty Hub | Aesthetic, Skin & Hair Treatments',
    ar: 'بيوتي هب الغردقة | خدمات التجميل والعناية بالبشرة والشعر',
    de: 'Hurghada Beauty Hub | Ästhetik, Haut & Haar Behandlungen',
    fr: 'Hurghada Beauty Hub | Services d\'Esthétique, Peau & Cheveux',
    pl: 'Hurghada Beauty Hub | Zabiegi Estetyczne, Pielęgnacja Skóry i Włosów',
    ru: 'Hurghada Beauty Hub | Услуги Эстетики, Уход за Кожей и Волосами'
  };

  const descriptions = {
    en: 'Discover luxury aesthetic treatments at Hurghada Beauty Hub. Specialized in Botox, dermal fillers, HydraFacial, skin rejuvenation, and hair PRP plasma therapy in Hurghada.',
    ar: 'اكتشفي خدمات ومرافق مركز بيوتي هب الغردقة. جلسات بوتوكس، فيلر شفايف، هايدرافيشل عميق، بلازما الشعر الطبية وتجديد البشرة تحت إشراف د. آلاء زكي.',
    de: 'Entdecken Sie erstklassige Ästhetik-Behandlungen im Hurghada Beauty Hub: Botox, Filler, HydraFacial, Hautverjüngung und Haar-PRP-Plasmatherapie in Hurghada.',
    fr: 'Découvrez des soins esthétiques d\'exception au Hurghada Beauty Hub: Botox, fillers, HydraFacial, rajeunissement de la peau et plasma capillaire.',
    pl: 'Odkryj luksusowe zabiegi estetyczne w Hurghada Beauty Hub: botoks, wypełniacze, HydraFacial, odmładzanie skóry i osocze bogatopłytkowe na włosy.',
    ru: 'Процедуры эстетической медицины в Hurghada Beauty Hub: ботокс, филлеры, HydraFacial, омоложение кожи и плазмотерапия для волос в Хургаде.'
  };

  const servicesKeywords = [
    'Hurghada Beauty Hub services',
    'Beauty Hub treatments',
    'بيوتي هب الغردقة خدمات',
    'علاجات بيوتي هب',

    'حقن بوتوكس الغردقة',
    'فيلر شفايف الغردقة',
    'جلسات هايدرافيشل الغردقة',
    'تنظيف بشرة عميق الغردقة',
    'نضارة البشرة الغردقة',
    'علاج تجاعيد الوجه الغردقة',
    'تقشير كيميائي الغردقة',
    'ميزوثيرابي للوجه الغردقة',
    'botox ghardaqah',
    'filler ghardaqah',
    'hydrafacial ghardaqah',
    'tanzeef bashara ghardaqah',

    'جلسات بلازما الشعر الغردقة',
    'بلازما الوش الغردقة',
    'علاج تساقط الشعر الغردقة',
    'حقن بلازما شعر الغردقة',
    'PRP hair ghardaqah',
    'plasma sha3r ghardaqah',

    'Botox injections in Hurghada',
    'Dermal fillers Hurghada',
    'Lip fillers Hurghada',
    'HydraFacial treatment Hurghada',
    'Deep facial cleansing Hurghada',
    'PRP hair therapy Hurghada',
    'Hair loss treatment Hurghada',
    'Skin rejuvenation Hurghada',
    'Mesotherapy Hurghada',
    'Anti aging treatments Hurghada',
    'Best skin care clinic Hurghada',

    'Botox Behandlung Hurghada',
    'Lippen aufspritzen Hurghada',
    'Hyaluronsäure Injektion Hurghada',
    'PRP Haarausfall Behandlung Hurghada',
    'Gesichtsreinigung HydraFacial Hurghada',
    'Hautverjüngung Hurghada',

    'Инъекции ботокса Хургада',
    'Филлеры для губ Хургада',
    'Плазмотерапия для волос Хургада',
    'Чистка лица Гидрафашл Хургада',
    'Омоложение кожи Хургада',
    'Лечение выпадения волос Хургада'
  ];

  return generatePageMetadata({
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    keywords: servicesKeywords,
    alternates: {
      canonical: currentLocale === 'en' ? `https://hurghadabeautyhub.com/services` : `https://${currentLocale}.hurghadabeautyhub.com/services`,
      languages: {
        'en': `https://hurghadabeautyhub.com/services`,
        'ar': `https://ar.hurghadabeautyhub.com/services`,
        'de': `https://de.hurghadabeautyhub.com/services`,
        'fr': `https://fr.hurghadabeautyhub.com/services`,
        'pl': `https://pl.hurghadabeautyhub.com/services`,
        'ru': `https://ru.hurghadabeautyhub.com/services`,
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: currentLocale === 'en' ? `https://hurghadabeautyhub.com/services` : `https://${currentLocale}.hurghadabeautyhub.com/services`,
    }
  });
}

export default async function Page() {
  return <TreatmentsClient />;
}