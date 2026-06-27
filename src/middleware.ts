import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/auth')) {
    return;
  }

  // 2. حماية مسارات لوحة التحكم (Admin Panel)
  if (pathname.startsWith('/admin')) {
    // بيكلم الـ API بتاعة Better Auth عشان يجيب الـ Session الحالية للطلب
    const sessionRes = await fetch(`${req.nextUrl.origin}/api/auth/get-session`, {
      headers: {
        cookie: req.headers.get("cookie") || "",
      },
    });
    
    const sessionData = await sessionRes.json();

    // لو مش مسجل دخول أو الـ Role مش admin، رجعه لصفحة الـ login
    if (!sessionData || sessionData.user?.role !== 'admin') {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return;
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    '/',
    '/(de|en|ar|ru|pl)/:path*',
    '/((?!api|_next/static|_next/image|favicon.ico|images|assets).*)',
  ],
};

