import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { slugSpecificKeywords, treatmentsData } from '@/data/services';
import { generatePageMetadata } from '@/lib/seo/metadata';
import TreatmentDetailClient from './_components/TreatmentDetailClient';
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

interface Props {
  params: Promise<{ slug: string }>;
}

function getKeywordsForSlug(slug: string): string[] {
  const baseKeywords = [
    'Hurghada Beauty Hub',
    'Dr Alaa Zaki Hurghada',
    'بيوتي هب الغردقة',
    'دكتورة آلاء زكي الغردقة',
    'Aesthetic Clinic Hurghada',
  ];

  return [...baseKeywords, ...(slugSpecificKeywords[slug] || [])];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';

  const data = treatmentsData.find((s) => s.slug === slug);
  if (!data) return {};

  const title = data.title[currentLocale] || data.title['en'];
  const tagline = data.tagline[currentLocale] || data.tagline['en'];
  const desc = data.desc[currentLocale] || data.desc['en'];

  const titlesMap: Record<Locale, string> = {
    ar: `${title} في الغردقة | د. آلاء زكي - بيوتي هب`,
    en: `${title} in Hurghada | Dr. Alaa Zaki - Beauty Hub`,
    de: `${title} in Hurghada | Dr. Alaa Zaki Beauty Hub`,
    fr: `${title} à Hurghada | Dr. Alaa Zaki Beauty Hub`,
    pl: `${title} w Hurghadzie | Dr. Alaa Zaki Beauty Hub`,
    ru: `${title} в Хургаде | Д-р Алаа Заки Beauty Hub`,
  };

  const localizedTitle = titlesMap[currentLocale] || `${title} in Hurghada | Beauty Hub Clinic`;
  const metaDescription = `${tagline} - ${desc.slice(0, 120)}...`;

  return generatePageMetadata({
    title: localizedTitle,
    description: metaDescription,
    keywords: getKeywordsForSlug(slug),
    alternates: {
      canonical:
        currentLocale === 'en'
          ? `https://hurghadabeautyhub.com/services/${slug}`
          : `https://${currentLocale}.hurghadabeautyhub.com/services/${slug}`,
      languages: {
        en: `https://hurghadabeautyhub.com/services/${slug}`,
        ar: `https://ar.hurghadabeautyhub.com/services/${slug}`,
        de: `https://de.hurghadabeautyhub.com/services/${slug}`,
        fr: `https://fr.hurghadabeautyhub.com/services/${slug}`,
        pl: `https://pl.hurghadabeautyhub.com/services/${slug}`,
        ru: `https://ru.hurghadabeautyhub.com/services/${slug}`,
      },
    },
    openGraph: {
      title: localizedTitle,
      description: metaDescription,
      url:
        currentLocale === 'en'
          ? `https://hurghadabeautyhub.com/services/${slug}`
          : `https://${currentLocale}.hurghadabeautyhub.com/services/${slug}`,
      images: [
        {
          url: data.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
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

  const procedureTitle = data.title[locale] || data.title['en'];
  const procedureDesc = data.desc[locale] || data.desc['en'];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://hurghadabeautyhub.com',
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://hurghadabeautyhub.com/services',
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': procedureTitle,
            'item': `https://hurghadabeautyhub.com/services/${slug}`,
          },
        ],
      },
      {
        '@type': 'MedicalProcedure',
        'name': procedureTitle,
        'description': procedureDesc,
        'image': `https://hurghadabeautyhub.com${data.image}`,
        'bodyLocation': data.category.en,
        'procedureHowItIsPerformed': data.howItWorks[locale] || data.howItWorks['en'],
        'performedBy': {
          '@type': 'Physician',
          'name': 'Dr. Alaa Zaki',
          'url': 'https://hurghadabeautyhub.com/doctor',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TreatmentDetailClient initialData={data} locale={locale} />
    </>
  );
}