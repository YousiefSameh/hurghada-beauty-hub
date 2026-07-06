import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import TreatmentsClient from './_components/TreatmentsClient';
import { Locale } from '@/config/locales.config';

interface Props {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = locale || 'en';

  const titles = {
    en: 'Premium Aesthetic & Skin Treatments in Hurghada | Beauty Hub',
    ar: 'أقسامنا الطبية وعلاجات التجميل في الغردقة | بيوتي هب',
    de: 'Premium Ästhetik- & Hautbehandlungen in Hurghada | Beauty Hub',
    fr: 'Traitements Esthétiques de Premium à Hurghada | Beauty Hub',
    pl: 'Zabiegi Estetyczne Premium w Hurghadzie | Beauty Hub',
    ru: 'Эстетические Процедуры Премиум Класса в Хургаде | Beauty Hub'
  };

  const descriptions = {
    en: 'Explore our luxury medical treatments in Hurghada. From Botox and fillers to advanced facials and medical hair plasma protocols managed by Dr. Alaa Zaki.',
    ar: 'استكشفي أقسامنا الطبية الفاخرة في الغردقة. من حقن البوتوكس والفيلر إلى جلسات تنظيف البشرة العميق وبروتوكولات بلازما الشعر الطبية تحت إشراف د. آلاء زكي.',
    de: 'Entdecken Sie unsere luxuriösen medizinischen Behandlungen in Hurghada. Von Botox und Fillern bis hin zu fortschrittlichen Gesichtsbehandlungen.',
    fr: 'Découvrez nos traitements médicaux de luxe à Hurghada. Du Botox et des fillers aux soins du visage avancés.',
    pl: 'Poznaj nasze luksusowe zabiegi medyczne w Hurghadzie. Od botoksu i wypełniaczy po zaawansowane zabiegi na twarz.',
    ru: 'Ознакомьтесь с нашими роскошными медицинскими процедурами в Хургаде. От ботокса и филлеров до передовых процедур для лица.'
  };

  return generatePageMetadata({
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    alternates: {
      canonical: `https://hurghadabeautyhub.com/${currentLocale}/services`,
      languages: {
        'en': `https://hurghadabeautyhub.com/en/services`,
        'ar': `https://hurghadabeautyhub.com/ar/services`,
        'de': `https://hurghadabeautyhub.com/de/services`,
        'fr': `https://hurghadabeautyhub.com/fr/services`,
        'pl': `https://hurghadabeautyhub.com/pl/services`,
        'ru': `https://hurghadabeautyhub.com/ru/services`,
      },
    },
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: `https://hurghadabeautyhub.com/${currentLocale}/services`,
    }
  });
}

export default async function Page() {
  return <TreatmentsClient />;
}