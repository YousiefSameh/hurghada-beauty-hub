import { Metadata } from 'next';
import { seoConfig } from '@/config/seo.config';
import { getOpenGraphMetadata } from './openGraph';
import { getTwitterMetadata } from './twitter';

export function generatePageMetadata(custom: Metadata = {}): Metadata {
  return {
    title: {
      default: seoConfig.defaultTitle,
      template: seoConfig.titleTemplate,
    },
    description: seoConfig.defaultDescription,
    keywords: seoConfig.keywords,
    ...custom,
    openGraph: getOpenGraphMetadata(custom.openGraph),
    twitter: getTwitterMetadata(custom.twitter),
  };
}
