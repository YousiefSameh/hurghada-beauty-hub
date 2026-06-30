import { MetadataRoute } from 'next';
import { seoConfig } from '@/config/seo.config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/private/'],
    },
    sitemap: `${seoConfig.baseUrl}/sitemap.xml`,
  };
}