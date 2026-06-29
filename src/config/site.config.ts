export const siteConfig = {
  name: 'Beauty Hub Hurghada',
  shortName: 'Beauty Hub',
  domain: 'hurghadabeautyhub.com',
  url: 'https://hurghadabeautyhub.com',
  ogImage: 'https://hurghadabeautyhub.com/og-image.webp',
  contact: {
    phone: '+201277702008',
    email: 'info@hurghadabeautyhub.com',
    whatsapp: 'https://wa.me/201277702008',
    address: {
      street: 'El Mamsha, Village Road',
      city: 'Hurghada',
      state: 'Red Sea',
      country: 'Egypt',
      zip: '84511',
    },
  },
  socials: {
    instagram: 'https://www.instagram.com/beautyhub.center/',
    facebook: 'https://www.facebook.com/p/Beauty-Hub-Hurghada-61576576883375/',
  },
  businessHours: {
    weekdays: '17:00 AM - 17:00 PM',
    weekend: '12:00 PM - 08:00 PM',
  },
} as const;

export type SiteConfig = typeof siteConfig;
