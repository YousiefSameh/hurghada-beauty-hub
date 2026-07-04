'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <section className="relative max-h-[800px] h-screen w-full overflow-hidden bg-black text-white">
      {/* 1. Background Video & Overlays */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero_video_poster.webp"
        >
          <source src="/assets/videos/hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient/Dark Overlay for Text Readability */}
      <div
        className={`absolute inset-0 ${isArabic ? 'bg-linear-to-l' : 'bg-linear-to-r'} from-primary/40 via-primary/20 to-transparent`}
      />

      {/* 2. Main Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col pt-14 justify-center px-4 xl:px-0 container mx-auto">
        <div>
          <h1
            className={`italic text-[38px] sm:text-[42px] font-black md:text-6xl lg:text-7xl xl:text-[6.5rem] leading-[1.1] w-full text-white drop-shadow-sm ${
              !isArabic ? 'font-serif' : ''
            }`}
          >
            {t('homepage.herosection.title')}
            <br />
            <span className="text-primary">{t('homepage.herosection.titlestrong')}</span>{' '}
            {t('homepage.herosection.completetitle')}.
          </h1>
        </div>

        {/* Paragraph */}
        <p className="mt-6 max-w-2xl text-sm md:text-base lg:text-lg text-white font-light leading-relaxed">
          {t('homepage.herosection.subtitle')}{' '}
          <strong className="font-bold">{t('homepage.header.logo.name')}</strong>
          {t('homepage.herosection.subtitlecomplete')}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Button
            asChild
            className="w-full sm:w-auto rounded-full px-8 py-7 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2 border-0 cursor-pointer"
          >
            <Link href={`${locale}#contact`}>
              {t('homepage.herosection.cta.book')}
              {isArabic ? (
                <ArrowLeft className="w-4 h-4 ml-2" />
              ) : (
                <ArrowRight className="w-4 h-4 ml-2" />
              )}
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto rounded-full bg-transparent border-white/50 text-white hover:bg-white hover:text-primary px-8 py-7 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all backdrop-blur-sm cursor-pointer"
          >
            <Link href={`${locale}/services`}>{t('homepage.herosection.cta.view')}</Link>
          </Button>
        </div>
        {/* Luxury Stats */}
        <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-8 w-full sm:w-auto">
          <div className="hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer">
            <p
              className={`text-xl md:text-3xl lg:text-4xl font-bold text-white ${!isArabic ? 'font-serif' : ''}`}
            >
              {t('homepage.herosection.stats.rating_val')}
            </p>
            <span className="text-[8px] md:text-[10px] lg:text-xs uppercase tracking-widest text-white/60 block mt-1 font-medium">
              {t('homepage.herosection.stats.rating_lbl')}
            </span>
          </div>

          <div className="h-10 w-px bg-white/10 hidden sm:block" />

          <div className="hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer">
            <p
              className={`text-lg md:text-2xl lg:text-3xl font-bold uppercase text-white ${!isArabic ? 'font-serif' : ''}`}
            >
              {t('homepage.herosection.stats.reviews_val')}
            </p>
            <span className="text-[8px] md:text-[10px] lg:text-xs uppercase tracking-widest text-white/60 block mt-1 font-medium">
              {t('homepage.herosection.stats.reviews_lbl')}
            </span>
          </div>

          <div className="h-10 w-px bg-white/10 hidden sm:block" />

          <div className="hover:scale-120 transition-all duration-300 ease-in-out cursor-pointer">
            <p
              className={`text-xl md:text-3xl lg:text-4xl font-bold text-white ${!isArabic ? 'font-serif' : ''}`}
            >
              {t('homepage.herosection.stats.exp_val')}
            </p>
            <span className="text-[8px] md:text-[10px] lg:text-xs uppercase tracking-widest text-white/60 block mt-1 font-medium">
              {t('homepage.herosection.stats.exp_lbl')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
