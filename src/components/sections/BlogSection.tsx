'use client';

import Link from 'next/link';
import { ArrowRight, Clock3, CalendarDays } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

import { Button } from '@/components/atoms/button';
import { Card, CardContent } from '@/components/atoms/card';

interface BlogItem {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  href: string;
}

export default function BlogSection() {
  const t = useTranslations();
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const blogPosts = t.raw('homepage.blog_section.posts') as BlogItem[];

  return (
    <section id='blog' className="relative w-full bg-[#f8f1ea] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#CD6C3E]" />
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-[#CD6C3E]">
                {t('homepage.blog_section.sectionLabel')}
              </span>
            </div>

            <h2
              className={`text-4xl font-black leading-tight text-foreground sm:text-5xl lg:text-6xl ${
                !isArabic ? 'font-serif italic' : ''
              }`}
            >
              {t('homepage.blog_section.titleStart')}{' '}
              <span className="text-primary">{t('homepage.blog_section.titleStrong')}</span>
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-foreground/70 sm:text-base">
            {t('homepage.blog_section.subtitle')}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden py-0 border-white/70 bg-white/80 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,106,0.20),rgba(255,255,255,0.05))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,168,106,0.22),transparent_55%)]" />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="inline-flex rounded-full border border-white/30 bg-black/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="space-y-5 p-6">
                <div className="flex items-center gap-4 text-xs font-medium text-foreground/55">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock3 className="h-3.5 w-3.5 text-primary" />
                    {post.readTime}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold leading-tight text-foreground transition-colors duration-300 group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="text-sm leading-7 text-foreground/70">{post.excerpt}</p>
                </div>

                <Link href={post.href} className="inline-flex">
                  <Button
                    variant="ghost"
                    className="h-auto p-0 text-sm font-semibold text-primary hover:bg-transparent hover:text-primary/80"
                  >
                    {t('homepage.blog_section.readMore')}
                    <ArrowRight
                      className={`ml-2 h-4 w-4 transition-transform ${
                        isArabic ? 'rotate-180' : ''
                      }`}
                    />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-5 rounded-[2rem] border border-white/70 bg-white/70 px-6 py-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] backdrop-blur-sm md:flex-row md:items-center md:px-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground">
              {t('homepage.blog_section.ctaTitle')}
            </h3>
            <p className="mt-1 text-sm text-foreground/65">
              {t('homepage.blog_section.ctaSubtitle')}
            </p>
          </div>

          <Link href={`/${locale}/blog`} className="shrink-0">
            <Button className="rounded-full px-7 py-6 text-xs font-semibold uppercase tracking-widest shadow-lg">
              {t('homepage.blog_section.ctaButton')}
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform ${
                  isArabic ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}