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
    text:
      'Beautiful clinic, very professional team, and the result looked completely natural. I felt comfortable from the first consultation.',
  },
  {
    name: 'Olivia R.',
    country: 'United Kingdom',
    treatment: 'Skin Treatment',
    rating: 5,
    text:
      'The clinic feels luxurious and calm. The doctor explained everything clearly and the treatment was tailored to my skin goals.',
  },
  {
    name: 'Nadia K.',
    country: 'Russia',
    treatment: 'Hair Treatment',
    rating: 5,
    text:
      'Very clean, modern, and professional. I really liked the personalized care and the attention to detail.',
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
    <section id='reviews' className="w-full bg-[#f7f1ea] py-24 sm:py-28">
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

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Review cards */}
          <div className="grid gap-6 lg:col-span-12 lg:grid-cols-3 w-full">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-white/70 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
              >
                <CardContent className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Stars rating={review.rating} />
                      <p className="mt-5 text-base leading-7 text-foreground/80">
                        “{review.text}”
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-black/5 pt-5">
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-foreground/55">
                        {review.country} · {review.treatment}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA card */}
            <Card className="border-white/70 bg-[#fff8f1] shadow-[0_10px_40px_rgba(0,0,0,0.04)] lg:col-span-3">
              <CardContent className="flex flex-col items-start justify-between gap-5 p-7 md:flex-row md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/80">
                    {t('homepage.reviews.ctaLabel')}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-foreground">
                    {t('homepage.reviews.ctaTitle')}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-foreground/65">
                    {t('homepage.reviews.ctaSubtitle')}
                  </p>
                </div>

                <div className="flex shrink-0 gap-3">
                  <Link href="/reviews">
                    <Button className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-widest shadow-lg">
                      {t('homepage.reviews.ctaButton')}
                      {isArabic ? (
                        <ArrowRight className="ml-2 h-4 w-4 rotate-180" />
                      ) : (
                        <ArrowRight className="ml-2 h-4 w-4" />
                      )}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}