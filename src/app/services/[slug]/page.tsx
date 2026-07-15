import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { treatmentsData } from '@/data/services';
import { generatePageMetadata } from '@/lib/seo/metadata'; 
import TreatmentDetailClient from './_components/TreatmentDetailClient'; 
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';
  
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
      canonical: currentLocale === 'en' ? `https://hurghadabeautyhub.com/services/${slug}` : `https://${currentLocale}.hurghadabeautyhub.com/services/${slug}`,
      languages: {
        'en': `https://hurghadabeautyhub.com/services/${slug}`,
        'ar': `https://ar.hurghadabeautyhub.com/services/${slug}`,
        'de': `https://de.hurghadabeautyhub.com/services/${slug}`,
        'fr': `https://fr.hurghadabeautyhub.com/services/${slug}`,
        'pl': `https://pl.hurghadabeautyhub.com/services/${slug}`,
        'ru': `https://ru.hurghadabeautyhub.com/services/${slug}`,
      },
    },
    openGraph: {
      title: localizedTitle,
      description: tagline,
      url: currentLocale === 'en' ? `https://hurghadabeautyhub.com/services/${slug}` : `https://${currentLocale}.hurghadabeautyhub.com/services/${slug}`,
    }
  });
}

export async function generateStaticParams() {
  return treatmentsData.map((treatment) => ({
    slug: treatment.slug,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const headerList = await headers();
  const locale = (headerList.get('x-next-intl-locale') as Locale) || 'en';
  
  const data = treatmentsData.find((s) => s.slug === slug);

  if (!data) {
    return notFound();
  }

  return <TreatmentDetailClient initialData={data} locale={locale} />;
}