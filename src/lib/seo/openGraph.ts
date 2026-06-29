import { Metadata } from 'next';
import { seoConfig } from '@/config/seo.config';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';

export function getOpenGraphMetadata(custom: OpenGraph | null | undefined): Metadata['openGraph'] {
  return {
    ...seoConfig.openGraph,
    ...custom,
    images: custom?.images || seoConfig.openGraph.images,
  };
}
