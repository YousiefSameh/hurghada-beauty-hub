'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // إضافة usePathname
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from '../molecules/LanguageSwitcher';
import { Button } from '../atoms/button';
import { cn } from '@/lib/utils';
import { useLocale, useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const isArabic = locale === 'ar';

  const NAV_LINKS = [
    { href: `/${locale}`, labelKey: 'home' },
    { href: `/${locale}/#treatments`, labelKey: 'treatments' },
    { href: `/${locale}/doctor`, labelKey: 'doctor' },
    { href: `/${locale}/services`, labelKey: 'services' },
    { href: `/${locale}/#contact`, labelKey: 'contact' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isTransparentPage =
    pathname === '/' ||
    pathname === `/${locale}` ||
    pathname === '/treatments' ||
    pathname === `/${locale}/treatments`;

  const isSolid = isScrolled || !isTransparentPage;

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSolid
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-0 transition-all duration-300">
        <Link
          href="/"
          className="relative z-50 flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <Image
            src="/assets/images/logo.webp"
            alt="Hurghada Beauty Hub Logo"
            width={60}
            height={60}
            className="rounded-lg object-cover lg:w-[70px] lg:h-[70px]"
            priority
          />
          <span
            className={cn(
              'text-base md:text-xl font-black tracking-wider ml-1 transition-colors',
              isSolid ? 'text-primary' : 'text-white'
            )}
          >
            <strong className={cn('uppercase', !isArabic ? 'font-serif' : '')}>
              {t('homepage.header.logo.name')}
            </strong>
            <small className="text-xs uppercase font-normal block line-clamp-none mt-2">
              {t('homepage.header.logo.subtitle')}
            </small>
          </span>
        </Link>

        <div className="flex gap-8 items-center">
          <ul className="hidden md:flex items-center gap-2 lg:gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm lg:text-base font-medium uppercase pb-2 tracking-wide transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    isSolid
                      ? 'text-foreground/80 hover:text-primary'
                      : 'text-white hover:text-primary'
                  }`}
                >
                  {t(`homepage.header.navigation.${link.labelKey}`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <LanguageSwitcher />
            <Button
              variant="default"
              size="lg"
              className="px-6 py-6 text-base font-bold shadow-md cursor-pointer hover:shadow-lg transition-all"
            >
              {t('homepage.header.btns.book')}
            </Button>
          </div>
        </div>

        <button
          className={`md:hidden relative z-50 p-2 focus:outline-none transition-colors ${
            isSolid ? 'text-foreground' : 'text-white'
          }`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 animate-in spin-in-90 duration-200" />
          ) : (
            <Menu className="w-6 h-6 animate-in spin-out-90 duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          `fixed inset-0 top-[70px] z-40 h-dvh transition-transform duration-300 ease-in-out md:hidden`,
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          isSolid ? 'bg-background/95 backdrop-blur-lg' : 'bg-black/40 backdrop-blur-md' // خلفية مظللة للموبايل في الصفحات الشفافة لتوضيح النص
        )}
      >
        <div className="flex flex-col items-center justify-start pt-10 h-full space-y-8 px-6">
          <ul className="flex flex-col items-center space-y-6 w-full">
            {NAV_LINKS.map((link) => (
              <li key={link.href} className="w-full text-center">
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'block w-full text-xl text-left font-semibold uppercase tracking-wider transition-colors py-2 hover:text-primary',
                    isSolid ? 'text-foreground' : 'text-white'
                  )}
                >
                  {t(`homepage.header.navigation.${link.labelKey}`)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="w-full h-px bg-border/50 my-6" />

          <div className="flex flex-col items-center gap-6 w-full pb-10">
            <div className={cn('p-1 rounded-md', !isSolid && 'bg-white/10')}>
              <LanguageSwitcher />
            </div>
            <Button variant="default" size="lg" className="w-full py-6 text-lg font-bold shadow-md">
              {t('homepage.header.btns.book')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
