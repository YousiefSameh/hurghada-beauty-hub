import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    '/',
    '/(de|en|ar|ru|pl)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
};
