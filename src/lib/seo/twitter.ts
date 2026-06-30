import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';
import { seoConfig } from '@/config/seo.config';

export function getTwitterMetadata(customTwitter?: Twitter | undefined | null): Twitter {
  return {
    card: 'summary_large_image',
    title: seoConfig.defaultTitle,
    description: seoConfig.defaultDescription,
    images: ['/assets/images/favicons/og-image.jpeg'],
    ...customTwitter,
  };
}