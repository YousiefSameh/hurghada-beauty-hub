'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <footer className="border-t border-black/5 bg-[#f3ece5]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <Image
                src="/assets/images/logo.webp"
                alt={t('homepage.footer.logoAlt')}
                width={60}
                height={60}
                className="rounded-lg object-cover lg:w-[60px] lg:h-[60px]"
                priority
              />
              <span className={'text-primary text-lg md:text-xl font-black tracking-wider ml-1'}>
                <strong className={cn('uppercase', isArabic ? '' : 'font-serif')}>
                  {t('homepage.header.logo.name')}
                </strong>
                <small className="text-xs uppercase font-normal block line-clamp-none mt-1">
                  {t('homepage.header.logo.subtitle')}
                </small>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-foreground/70">
              {t('homepage.footer.description')}
            </p>

            <div className="mt-8 flex items-center gap-4">
              {/* Social Links */}
              <Link
                href="https://www.facebook.com/profile.php?id=61576576883375"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <FaFacebook className="h-5 w-5" fill="currentColor" />
              </Link>

              <Link
                href="https://www.instagram.com/beautyhub.center/"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="https://wa.me/201277702008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="h-6 w-6" />
              </Link>

              <Link
                href="tel:+201277702008"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white shadow-lg hover:scale-110 transition-transform"
                aria-label={t('homepage.footer.callUs')}
              >
                <Phone className="h-5 w-5" fill="currentColor" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {t('homepage.footer.quickLinks.title')}
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-foreground/70">
              <Link href="/">{t('homepage.footer.quickLinks.home')}</Link>
              <Link href="#treatments">{t('homepage.footer.quickLinks.treatments')}</Link>
              <Link href="/doctor">{t('homepage.footer.quickLinks.doctor')}</Link>
              <Link href="/services">{t('homepage.footer.quickLinks.services')}</Link>
              <Link href="#contact">{t('homepage.footer.quickLinks.contact')}</Link>
            </div>
          </div>

          {/* Treatments */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {t('homepage.footer.treatments.title')}
            </h4>

            <div className="mt-5 flex flex-col gap-3 text-sm text-foreground/70">
              <Link href={`${locale}/services/botox-injections`}>
                {t('homepage.footer.treatments.botox')}
              </Link>
              <Link href={`${locale}/services/dermal-filler-injections`}>
                {t('homepage.footer.treatments.fillers')}
              </Link>
              <Link href={`${locale}/services/mesotherapy-prp-plasma-injections-for-glowing-skin`}>
                {t('homepage.footer.treatments.prp')}
              </Link>
              <Link href={`${locale}/services/facial-cleansing-sessions`}>
                {t('homepage.footer.treatments.skinCare')}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              {t('homepage.footer.contact.title')}
            </h4>

            <div className="mt-5 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-primary" />
                <p className="text-sm leading-6 text-foreground/70">
                  {t('homepage.footer.contact.address')}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:+201277702008"
                  className="text-sm text-foreground/70 hover:text-primary"
                >
                  {t('homepage.footer.contact.phone')}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:alaazaki.beautyhub@gmail.com"
                  className="text-sm text-foreground/70 hover:text-primary"
                >
                  alaazaki.beautyhub@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-black/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-foreground/50">{t('homepage.footer.copyright')}</p>

            <Link
              href="https://yousiefsameh-me.vercel.app"
              target="_blank"
              className="text-primary hover:scale-105 cursor-pointer hover:rotate-1 transition-all"
            >
              {t('homepage.footer.madeBy')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
