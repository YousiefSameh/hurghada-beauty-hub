import { Metadata } from 'next';
import { seoConfig } from '@/config/seo.config';
import { getOpenGraphMetadata } from './openGraph';
import { getTwitterMetadata } from './twitter';

export function generatePageMetadata(custom: Metadata = {}): Metadata {
  return {
    metadataBase: new URL(seoConfig.baseUrl),
    title: {
      default: seoConfig.defaultTitle,
      template: seoConfig.titleTemplate,
    },
    description: seoConfig.defaultDescription,
    keywords: seoConfig.keywords,
    
    alternates: {
      canonical: './',
      languages: {
        'en': '/en',
        'ar': '/ar',
        'de': '/de',
      },
      ...custom.alternates,
    },

    icons: {
      icon: [
        { url: '/assets/images/favicons/favicon.ico', sizes: 'any' }, // الأيقونة الأساسية للمتصفحات
        { url: '/assets/images/favicons/android-icon-36x36.png', sizes: '36x36', type: 'image/png' },
        { url: '/assets/images/favicons/android-icon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/assets/images/favicons/android-icon-72x72.png', sizes: '72x72', type: 'image/png' },
        { url: '/assets/images/favicons/android-icon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/assets/images/favicons/android-icon-144x144.png', sizes: '144x144', type: 'image/png' },
        { url: '/assets/images/favicons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
      apple: [
        { url: '/assets/images/favicons/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
      ],
    },
    manifest: '/manifest.json',
    ...custom,
    openGraph: getOpenGraphMetadata(custom?.openGraph),
    twitter: getTwitterMetadata(custom?.twitter),
  };
}