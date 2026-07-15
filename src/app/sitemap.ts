import { MetadataRoute } from 'next';
import { treatmentsData } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseDomain = 'hurghadabeautyhub.com';
  const locales = ['en', 'ar', 'de', 'ru', 'pl', 'fr'];
  const defaultLocale = 'en';

  const staticRoutes = ['', 'doctor', 'services'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  const getSubdomainUrl = (locale: string, path: string) => {
    const cleanPath = path ? `/${path}` : '';
    return locale === defaultLocale
      ? `https://${baseDomain}${cleanPath}`
      : `https://${locale}.${baseDomain}${cleanPath}`;
  };

  staticRoutes.forEach((route) => {
    locales.forEach((locale) => {
      const url = getSubdomainUrl(locale, route);

      const languages = locales.reduce(
        (acc, loc) => {
          acc[loc] = getSubdomainUrl(loc, route);
          return acc;
        },
        {} as Record<string, string>
      );

      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: languages,
        },
      });
    });
  });

  treatmentsData.forEach((treatment) => {
    locales.forEach((locale) => {
      const path = `services/${treatment.slug}`;
      const url = getSubdomainUrl(locale, path);

      const languages = locales.reduce(
        (acc, loc) => {
          acc[loc] = getSubdomainUrl(loc, path);
          return acc;
        },
        {} as Record<string, string>
      );

      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: languages,
        },
      });
    });
  });

  return sitemapEntries;
}
