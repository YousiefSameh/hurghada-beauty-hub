import { MetadataRoute } from 'next'
import { headers } from 'next/headers'

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headerList = await headers()
  const host = headerList.get('host') || 'hurghadabeautyhub.com'
  
  const sitemapUrl = host.includes('localhost')
    ? `http://${host}/sitemap.xml`
    : `https://${host}/sitemap.xml`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: sitemapUrl,
  }
}