import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { routesConfig } from '@/config/routes.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.values(routesConfig.marketing).map((path) => ({
    url: `${siteConfig.url}${path === '/' ? '' : path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1.0 : 0.8,
  }));

  return routes;
}
