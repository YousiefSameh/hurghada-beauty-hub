import { seoConfig } from '@/config/seo.config';

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: seoConfig.defaultTitle,
    image: `${seoConfig.baseUrl}/assets/images/favicons/android-icon-192x192.png`,
    '@id': seoConfig.baseUrl,
    url: seoConfig.baseUrl,
    telephone: seoConfig.contactPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: seoConfig.address.street,
      addressLocality: seoConfig.address.locality,
      addressRegion: seoConfig.address.region,
      addressCountry: seoConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: seoConfig.geo.latitude,
      longitude: seoConfig.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'
      ],
      opens: '10:00',
      closes: '22:00',
    },
    sameAs: [
      seoConfig.socials.facebook,
      seoConfig.socials.instagram,
    ],
  };
}