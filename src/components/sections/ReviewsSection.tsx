'use client';

import { Sparkles } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function ReviewsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <section id="reviews" className="w-full bg-[#f7f1ea] py-24 sm:py-28">
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-[#CD6C3E]" />
              <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[#CD6C3E] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t('homepage.reviews.sectionLabel')}              </span>
            </div>

            <h2
              className={`text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl ${
                !isArabic ? 'font-serif italic' : ''
              }`}
            >
              {t('homepage.reviews.titleStart')}{' '}
              <span className="text-primary">{t('homepage.reviews.titleStrong')}</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-foreground/70 sm:text-base">
            {t('homepage.reviews.subtitle')}
          </p>
        </div>

        <div>
          {/* Review cards */}
          <script src="https://elfsightcdn.com/platform.js" async></script>
          <div
            className="elfsight-app-d528cf88-0cb2-401a-bb65-56fadc560350"
            data-elfsight-app-lazy
          ></div>
        </div>
      </div>
    </section>
  );
}
