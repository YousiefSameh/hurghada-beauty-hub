import { MetadataRoute } from 'next'
import { treatmentsData } from '@/data/services' 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hurghadabeautyhub.com'
  const locales = ['en', 'ar', 'de', 'ru', 'pl', 'fr']
  
  const staticRoutes = ['', 'doctor', 'services']

  const sitemapEntries: MetadataRoute.Sitemap = []

  staticRoutes.forEach((route) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}${route ? `/${route}` : ''}`
      
      const languages = locales.reduce((acc, loc) => {
        acc[loc] = `${baseUrl}/${loc}${route ? `/${route}` : ''}`
        return acc
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

  treatmentsData.forEach((treatment) => {
    locales.forEach((locale) => {
      const url = `${baseUrl}/${locale}/services/${treatment.slug}`
      
      const languages = locales.reduce((acc, loc) => {
        acc[loc] = `${baseUrl}/${loc}/services/${treatment.slug}`
        return acc
      }, {} as Record<string, string>)

      sitemapEntries.push({
        url: url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
        alternates: {
          languages: languages,
        },
      })
    })
  })

  return sitemapEntries
}