'use client';

import { Sparkles } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import SpecialHeading from '../molecules/SpecialHeading';

export default function ReviewsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <section id="reviews" className="w-full bg-[#f7f1ea] py-24 sm:py-28">
      <div className="container mx-auto px-4 xl:px-0">
        <SpecialHeading
          isArabic={isArabic}
          title={t('homepage.reviews.titleStart')}
          titleHighlight={t('homepage.reviews.titleStrong')}
          subtitle={t('homepage.reviews.sectionLabel')}
          description={t('homepage.reviews.subtitle')}
        />

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
