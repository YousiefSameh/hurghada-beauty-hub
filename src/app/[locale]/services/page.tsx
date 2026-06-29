'use client';

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import Image from 'next/image';
// استدعاء البيانات الموحدة للأصناف العلاجية
import { treatmentsData } from '@/data/services';

// مصفوفة التصنيفات مع ربطها بمفاتيح الترجمة المقابلة في ملف الـ JSON
const categories = [
  { id: 'All', key: 'categories.all' },
  { id: 'Face', key: 'categories.face' },
  { id: 'Hair & Plasma', key: 'categories.hairPlasma' },
];

export default function TreatmentsPage() {
  const locale = useLocale() as 'en' | 'ar' | 'de' | 'fr' | 'pl' | 'ru';
  const t = useTranslations('servicesPage');
  const isArabic = locale === 'ar';

  const [activeCategory, setActiveCategory] = useState('All');

  // تصفية العلاجات بناءً على التصنيف النشط
  const filteredTreatments =
    activeCategory === 'All'
      ? treatmentsData
      : treatmentsData.filter((t) => t.category.en === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900 selection:bg-[#A05C3C] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
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
        <div className="container mx-auto px-4 md:px-0 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <span className="uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">
              {t('hero.tag')}
            </span>
            <h1
              className={`text-5xl md:text-6xl font-light w-full mb-6 leading-tight ${
                !isArabic ? 'font-serif' : ''
              }`}
            >
              {t('hero.titleLine1')}
              <br />
              <span className="font-bold uppercase italic">{t('hero.titleHighlight')}</span>
            </h1>
            <Button className="rounded-full bg-white text-stone-900 hover:bg-[#A05C3C] hover:text-white transition-colors border-0 px-8 py-6 text-sm uppercase tracking-widest mt-4">
              {t('hero.ctaButton')}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Intro & Categories Section */}
      <section className="container mx-auto px-4 md:px-8 mt-20 mb-12">
        <div className="max-w-3xl mb-12">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl text-stone-900 font-light mb-6 ${
              !isArabic ? 'font-serif' : ''
            }`}
          >
            {t('intro.titleRegular')}{' '}
            <span className="italic text-[#A05C3C] font-semibold">
              {t('intro.titleHighlighted')}
            </span>
          </h2>
          <p className="text-stone-500 text-lg font-light leading-relaxed">
            {t('intro.description')}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                activeCategory === cat.id
                  ? 'bg-[#A05C3C] text-white border-[#A05C3C]'
                  : 'bg-transparent text-stone-600 border-stone-300 hover:border-[#A05C3C] hover:text-[#A05C3C]'
              }`}
            >
              {t(cat.key)}
            </button>
          ))}
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="container mx-auto px-4 md:px-8">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredTreatments.map((treatment) => (
              <motion.div
                key={treatment.slug}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="group flex flex-col"
              >
                {/* Image Wrapper */}
                <div className="relative aspect-3/2 w-full overflow-hidden rounded-md mb-5 bg-stone-200">
                  <Image
                    src={treatment.image}
                    width={400}
                    height={200}
                    alt={treatment.title[locale] || treatment.title['en']}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-4 ${
                      isArabic ? 'right-4' : 'left-4'
                    } bg-[#A05C3C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md`}
                  >
                    {treatment.category[locale] || treatment.category['en']}
                  </div>
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3
                  className={`text-2xl font-semibold text-stone-900 mb-2 ${
                    !isArabic ? 'font-serif' : ''
                  }`}
                >
                  {treatment.title[locale] || treatment.title['en']}
                </h3>

                <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 grow line-clamp-2">
                  {treatment.desc[locale] || treatment.desc['en']}
                </p>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-stone-200 mt-auto">
                  <Link
                    href={`/${locale}/services/${treatment.slug}`}
                    className="text-xs font-semibold uppercase tracking-widest text-stone-900 hover:text-[#A05C3C] transition-colors flex items-center gap-2 group/link"
                  >
                    {t('card.learnMore')}
                    {isArabic ? (
                      <ArrowLeft className="w-3 h-3 transform group-hover/link:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" />
                    )}
                  </Link>

                  <Button className="rounded-full bg-[#A05C3C] hover:bg-[#8C4E33] text-white px-6 py-2 h-auto text-[10px] uppercase tracking-widest border-0">
                    {t('card.bookNow')}
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
