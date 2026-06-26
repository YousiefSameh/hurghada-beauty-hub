'use client';

import { Star, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import { Button } from '@/components/atoms/button';
import { Card, CardContent } from '@/components/atoms/card';

const reviews = [
  {
    name: 'Sarah M.',
    country: 'Germany',
    treatment: 'Botox',
    rating: 5,
    text: 'Beautiful clinic, very professional team, and the result looked completely natural. I felt comfortable from the first consultation.',
  },
  {
    name: 'Olivia R.',
    country: 'United Kingdom',
    treatment: 'Skin Treatment',
    rating: 5,
    text: 'The clinic feels luxurious and calm. The doctor explained everything clearly and the treatment was tailored to my skin goals.',
  },
  {
    name: 'Nadia K.',
    country: 'Russia',
    treatment: 'Hair Treatment',
    rating: 5,
    text: 'Very clean, modern, and professional. I really liked the personalized care and the attention to detail.',
  },
];

function Stars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-primary text-primary' : 'text-primary/25'}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <section id="reviews" className="w-full bg-[#f7f1ea] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
              {t('homepage.reviews.sectionLabel')}
            </p>

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
