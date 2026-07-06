import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(de|en|ar|ru|pl)/:path*',
    '/((?!api|_next/static|_next/image|assets|favicons|sitemap.xml|robots.txt|manifest.json|favicon.ico|apple-icon.png|icon.png).*)',
  ],
};