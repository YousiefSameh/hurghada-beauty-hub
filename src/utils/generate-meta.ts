import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';

export function getMeta(custom: Metadata = {}): Metadata {
  return generatePageMetadata(custom);
}
