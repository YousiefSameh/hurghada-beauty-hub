import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hurghadabeautyhub.com'
  const locales = ['en', 'ar', 'de', 'ru', 'pl', 'fr']
  
  const routes = ['', 'doctor', 'services']

  const sitemapEntries: MetadataRoute.Sitemap = []

  routes.forEach((route) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${route ? `/${route}` : ''}`
      const languages = locales.reduce((acc, loc) => {
        acc[loc] = `${baseUrl}/${loc}${route ? `/${route}` : ''}`
        return acc;
      }, {} as Record<string, string>)

      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: languages,
        },
      })
    })
  })

  return sitemapEntries
}