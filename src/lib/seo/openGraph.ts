import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { seoConfig } from '@/config/seo.config';

export function getOpenGraphMetadata(customOg?: OpenGraph | undefined | null): OpenGraph {
  return {
    type: 'website',
    siteName: seoConfig.defaultTitle,
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    url: seoConfig.baseUrl,
    images: [
      {
        url: '/assets/images/favicons/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: seoConfig.defaultTitle,
      },
    ],
    ...customOg,
  };
}