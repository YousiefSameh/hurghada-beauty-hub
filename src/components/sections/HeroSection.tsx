'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { useTranslations, useLocale } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 1. Background Video & Overlays */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/images/hero_video_poster.png"
        >
          <source src="/assets/videos/hero_video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Gradient/Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/40 via-primary/20 to-transparent" />

      {/* 2. Main Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col pt-14 justify-center px-8 md:px-16 lg:px-32 max-w-screen mx-auto">
        {/* Main Headings */}
        <div>
          {/* تم تعديل السطر القادم لإلغاء font-serif لو كانت اللغة عربية */}
          <h1
            className={`italic text-[42px] font-black sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.1] w-full text-white drop-shadow-sm ${
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
        <p className="mt-6 max-w-2xl text-base md:text-lg text-white font-light leading-relaxed">
          {t('homepage.herosection.subtitle')}{' '}
          <strong className="font-bold">{t('homepage.header.logo.name')}</strong>
          {t('homepage.herosection.subtitlecomplete')}
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Button className="w-full sm:w-auto rounded-full px-8 py-7 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2 border-0 cursor-pointer">
            {t('homepage.herosection.cta.book')}
            {isArabic ? (
              <ArrowLeft className="w-4 h-4 ml-2" />
            ) : (
              <ArrowRight className="w-4 h-4 ml-2" />
            )}
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto rounded-full bg-transparent border-white/50 text-white hover:bg-white hover:text-primary px-8 py-7 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all backdrop-blur-sm cursor-pointer"
          >
            {t('homepage.herosection.cta.view')}
          </Button>
        </div>
        {/* Luxury Stats */}
        <div className="flex flex-wrap items-center gap-6 md:gap-8 pt-8 w-full sm:w-auto">
          <div>
            <p
              className={`text-3xl md:text-4xl font-bold text-white ${!isArabic ? 'font-serif' : ''}`}
            >
              {t('homepage.herosection.stats.rating_val')}
            </p>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 block mt-1 font-medium">
              {t('homepage.herosection.stats.rating_lbl')}
            </span>
          </div>

          <div className="h-10 w-px bg-white/10 hidden sm:block" />

          <div>
            <p
              className={`text-3xl md:text-4xl font-bold text-white ${!isArabic ? 'font-serif' : ''}`}
            >
              {t('homepage.herosection.stats.reviews_val')}
            </p>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 block mt-1 font-medium">
              {t('homepage.herosection.stats.reviews_lbl')}
            </span>
          </div>

          <div className="h-10 w-px bg-white/10 hidden sm:block" />

          <div>
            <p
              className={`text-3xl md:text-4xl font-bold text-white ${!isArabic ? 'font-serif' : ''}`}
            >
              {t('homepage.herosection.stats.exp_val')}
            </p>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-white/60 block mt-1 font-medium">
              {t('homepage.herosection.stats.exp_lbl')}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
