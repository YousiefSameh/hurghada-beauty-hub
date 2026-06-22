import { siteConfig } from './site.config';

export const seoConfig = {
  defaultTitle: 'Beauty Hub Hurghada | Luxury Aesthetic Clinic',
  titleTemplate: `%s | ${siteConfig.name}`,
  defaultDescription: 'Premium multilingual aesthetic clinic in Hurghada, Egypt. Experience high-end skincare, laser, body contouring, and anti-aging treatments.',
  keywords: [
    'aesthetic clinic Egypt',
    'hurghada beauty hub',
    'hurghada skin care',
    'beauty treatments hurghada',
    'botox Hurghada',
    'fillers Hurghada',
    'laser hair removal Egypt',
    'hydrafacial Hurghada',
    'skin care Hurghada',
    'beauty clinic Red Sea',
    'medical tourism Egypt'
  ],
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
  twitter: {
    handle: '@beautyhub_eg',
    site: '@beautyhub_eg',
    cardType: 'summary_large_image',
  },
};

export type SeoConfig = typeof seoConfig;
