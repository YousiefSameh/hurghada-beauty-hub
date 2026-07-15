import { NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'

const locales = ['en', 'ar', 'de', 'ru', 'pl', 'fr']
const defaultLocale = 'en'

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
  localePrefix: 'always'
})

export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const pathname = url.pathname
  const hostname = request.headers.get('host') || ''

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const hostParts = hostname.split('.')
  let detectedLocale = defaultLocale

  if (hostname.includes('localhost')) {
    if (hostParts.length > 1 && locales.includes(hostParts[0])) {
      detectedLocale = hostParts[0]
    }
  } else if (hostParts.length > 2) {
    const subdomain = hostParts[0]
    if (locales.includes(subdomain)) {
      detectedLocale = subdomain
    }
  }

  request.headers.set('x-next-intl-locale', detectedLocale)

  const hasLocalePrefix = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!hasLocalePrefix) {
    url.pathname = `/${detectedLocale}${pathname}`

    NextResponse.rewrite(url, {
      request: {
        headers: request.headers,
      },
    })

    return intlMiddleware(new NextRequest(url, { headers: request.headers }))
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
}