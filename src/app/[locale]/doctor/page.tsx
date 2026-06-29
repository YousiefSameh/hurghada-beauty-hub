'use client';

import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { Easing, motion } from 'framer-motion';
import { Sparkles, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import Link from 'next/link';

const expertiseKeys = [
  'facialHarmonization',
  'antiAging',
  'biostimulators',
  'skinRejuvenation',
] as const;

export default function DoctorPage() {
  const t = useTranslations('doctorPage');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  const luxuryEase: Easing = [0.16, 1, 0.3, 1];
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: luxuryEase } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900 selection:bg-[#A05C3C] selection:text-white pb-32">
      {/* Navigation Breadcrumb */}
      <div className="pt-32 pb-8 container mx-auto px-6 md:px-12">
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-stone-500 hover:text-[#A05C3C] transition-colors"
        >
          {isArabic ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          {t('backToHome')}
        </Link>
      </div>

      {/* 1. Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-24 lg:mb-32">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="w-full lg:w-1/2 order-2 lg:order-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#A05C3C]" />
              <span className="text-[#A05C3C] text-xs tracking-[0.2em] uppercase font-bold">
                {t('medicalExpert')}
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-stone-900 ${
                !isArabic ? 'font-serif' : ''
              }`}
            >
              {t('name')}
            </h1>
            <p className="text-xl text-stone-500 mb-10 font-light tracking-wide">{t('title')}</p>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
              <p>{t('bio1')}</p>
              <p>{t('bio2')}</p>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <Button className="rounded-full bg-[#A05C3C] hover:bg-[#8C4E33] text-white px-8 py-6 text-xs uppercase tracking-widest border-0 shadow-xl shadow-[#A05C3C]/20">
                {t('bookConsultation')}
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: luxuryEase }}
            className="w-full lg:w-1/2 order-1 lg:order-2"
          >
            <div className="relative aspect-3/4 md:aspect-square lg:aspect-4/5 rounded-3xl overflow-hidden bg-stone-200">
              <div className="absolute inset-0 bg-stone-300 animate-pulse -z-10" />
              <Image
                src="/assets/images/dr.webp"
                alt={t('name')}
                width={500}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute inset-4 border border-white/30 rounded-2xl z-10 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Philosophy Quote */}
      <section className="bg-stone-900 py-24 px-6 relative overflow-hidden mb-24 lg:mb-32">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
          <Quote className="w-96 h-96 text-white" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <Quote className="w-12 h-12 text-[#A05C3C] mx-auto mb-8 opacity-80" />
          <p
            className={`text-2xl md:text-4xl text-white leading-relaxed md:leading-snug font-light ${
              !isArabic ? 'font-serif' : ''
            }`}
          >
            &quot;{t('quote')}&quot;
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#A05C3C]" />
            <span className="text-stone-400 text-sm tracking-widest uppercase">{t('name')}</span>
            <div className="w-12 h-px bg-[#A05C3C]" />
          </div>
        </div>
      </section>

      {/* 3. Expertise Section */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="w-full lg:w-2/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl font-semibold mb-10 text-stone-900 ${
                  !isArabic ? 'font-serif' : ''
                }`}
              >
                {t('areasOfExpertise')}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {expertiseKeys.map((key) => (
                  <motion.div
                    key={key}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-10 h-10 bg-[#FAF7F2] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#A05C3C] transition-colors">
                      <Sparkles className="w-5 h-5 text-[#A05C3C] group-hover:text-white transition-colors" />
                    </div>
                    <h3
                      className={`text-xl font-semibold text-stone-900 mb-3 ${
                        !isArabic ? 'font-serif' : ''
                      }`}
                    >
                      {t(`expertise.${key}.title`)}
                    </h3>
                    <p className="text-stone-500 font-light leading-relaxed text-sm">
                      {t(`expertise.${key}.desc`)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <div className="bg-stone-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A05C3C] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[120px] opacity-10" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className={`text-3xl md:text-5xl text-white font-bold mb-6 ${
                !isArabic ? 'font-serif' : ''
              }`}
            >
              {t('cta.title')}
            </h2>
            <p className="text-stone-400 font-light mb-10 text-lg">{t('cta.subtitle')}</p>
            <Button className="rounded-full bg-white text-stone-900 hover:bg-[#A05C3C] hover:text-white transition-colors px-10 py-6 text-sm uppercase tracking-widest border-0">
              {t('cta.button')}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
