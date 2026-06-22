import { Metadata } from 'next';
import { seoConfig } from '@/config/seo.config';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';

export function getTwitterMetadata(custom: Twitter | null | undefined): Metadata['twitter'] {
  return {
    card: seoConfig.twitter.cardType as 'summary_large_image',
    site: seoConfig.twitter.site,
    creator: seoConfig.twitter.handle,
    ...custom,
  };
}
