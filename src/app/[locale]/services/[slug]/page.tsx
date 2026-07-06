import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { treatmentsData } from '@/data/services';
import { generatePageMetadata } from '@/lib/seo/metadata'; 
import TreatmentDetailClient from './_components/TreatmentDetailClient'; 
import { Locale } from '@/config/locales.config';

interface Props {
  params: Promise<{ slug: string; locale: Locale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, locale } = await params;
  const currentLocale = locale || 'en';
  
  const data = treatmentsData.find((s) => s.slug === slug);
  if (!data) return {};

  const title = data.title[currentLocale] || data.title['en'];
  const tagline = data.tagline[currentLocale] || data.tagline['en'];

  const localizedTitle = currentLocale === 'ar' 
    ? `${title} في الغردقة | بيوتي هب`
    : `${title} in Hurghada | Beauty Hub Clinic`;

  return generatePageMetadata({
    title: localizedTitle,
    description: `${tagline}`,
    alternates: {
      canonical: `https://hurghadabeautyhub.com/${currentLocale}/services/${slug}`,
      languages: {
        'en': `https://hurghadabeautyhub.com/en/services/${slug}`,
        'ar': `https://hurghadabeautyhub.com/ar/services/${slug}`,
        'de': `https://hurghadabeautyhub.com/de/services/${slug}`,
        'fr': `https://hurghadabeautyhub.com/fr/services/${slug}`,
        'pl': `https://hurghadabeautyhub.com/pl/services/${slug}`,
        'ru': `https://hurghadabeautyhub.com/ru/services/${slug}`,
      },
    },
    openGraph: {
      title: localizedTitle,
      description: tagline,
      url: `https://hurghadabeautyhub.com/${currentLocale}/services/${slug}`,
    }
  });
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'ar', 'de', 'fr', 'ru', 'pl'];
  const paths: { slug: string; locale: Locale }[] = [];

  treatmentsData.forEach((treatment) => {
    locales.forEach((locale) => {
      paths.push({ slug: treatment.slug, locale });
    });
  });

  return paths;
}

export default async function Page({ params }: Props) {
  const { slug, locale } = await params;
  const data = treatmentsData.find((s) => s.slug === slug);

  if (!data) {
    return notFound();
  }

  return <TreatmentDetailClient initialData={data} locale={locale} />;
}