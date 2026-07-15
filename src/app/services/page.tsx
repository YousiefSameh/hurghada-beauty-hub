import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import TreatmentsClient from './_components/TreatmentsClient';
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';

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