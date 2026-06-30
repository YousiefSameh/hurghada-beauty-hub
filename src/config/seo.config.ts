import { siteConfig } from './site.config';

export const seoConfig = {
  defaultTitle: 'Beauty Hub Hurghada | Luxury Aesthetic Clinic',
  baseUrl: 'https://hurghadabeautyhub.com',
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: 'Premium multilingual aesthetic clinic in Hurghada, Egypt. Experience high-end skincare contouring, and anti-aging treatments.',
  keywords: [
    'aesthetic clinic Egypt',
    'hurghada beauty hub',
    'botox in Hurghada',
    'hurghada skin care',
    'beauty treatments hurghada',
    'botox Hurghada',
    'fillers Hurghada',
    'hydrafacial Hurghada',
    'skin care Hurghada',
    'beauty clinic Red Sea',
    'medical tourism Egypt'
  ],
  geo: {
    latitude: 27.2579, 
    longitude: 33.8116,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  socials: {
    instagram: 'https://www.instagram.com/beautyhub.center/',
    facebook: 'https://www.facebook.com/p/Beauty-Hub-Hurghada-61576576883375/',
  },
  address: {
    street: 'El Mamsha, Village Road',
    locality: 'Hurghada',
    region: 'Red Sea',
    country: 'EG',
  },
  contactPhone: '+201277702008',
  twitter: {
    handle: '@beautyhub_eg',
    site: '@beautyhub_eg',
    cardType: '',
  },
};

export type SeoConfig = typeof seoConfig;
