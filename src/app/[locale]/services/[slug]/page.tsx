'use client';

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { motion, AnimatePresence, Easing } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/atoms/button';
import Image from 'next/image';
import { treatmentsData } from '@/data/services';

export default function TreatmentDetailPage() {
  const locale = useLocale() as 'en' | 'ar' | 'de' | 'fr' | 'ru' | 'pl';
  const isArabic = locale === 'ar';
  
  // تفعيل خطاف الترجمة لاستدعاء النصوص المفككة
  const t = useTranslations('TreatmentDetail');

  const params = useParams();
  const slug = params?.slug as string;

  const data = treatmentsData.find((s) => s.slug === slug);

  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  if (!data) {
    return notFound();
  }

  const activeCase = data.beforeAfterCases?.[activeCaseIndex];

  const handleCaseChange = (index: number) => {
    setActiveCaseIndex(index);
    setSliderPosition(50);
  };

  const luxuryEase: Easing = [0.16, 1, 0.3, 1];
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: luxuryEase } },
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-32 selection:bg-[#A05C3C] selection:text-white">
      {/* Navigation Bar / Back Link */}
      <div className="pt-32 pb-8 container mx-auto px-6 md:px-12">
        <Link
          href={`/${locale}/services`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-stone-500 hover:text-[#A05C3C] transition-colors"
        >
          {isArabic ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          {t('backToPortfolio')}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="w-full md:w-1/2"
          >
            <span className="text-[#A05C3C] text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 bg-[#A05C3C]/10 rounded-sm mb-6 inline-block">
              {data.category[locale] || data.category['en']}
            </span>
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-stone-900 ${
                !isArabic ? 'font-serif' : ''
              }`}
            >
              {data.title[locale] || data.title['en']}
            </h1>
            <p className="text-xl md:text-2xl font-light text-stone-600 mb-8 max-w-lg leading-relaxed">
              {data.tagline[locale] || data.tagline['en']}
            </p>
            <Button className="rounded-full bg-[#A05C3C] hover:bg-[#8C4E33] text-white px-8 py-6 text-xs uppercase tracking-widest border-0">
              {t('consultButton')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: luxuryEase }}
            className="w-full h-[250px] md:w-1/2 md:h-[400px] xl:h-[450px] rounded-2xl overflow-hidden relative shadow-lg"
          >
            <div className="absolute inset-0 bg-stone-200 animate-pulse -z-10" />
            <Image
              src={data.image}
              alt={data.title[locale] || data.title['en']}
              fill
              sizes="(max-w-768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Side: Detailed Sections */}
        <div className="w-full lg:w-2/3 space-y-24">
          
          {/* 1. How it works */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
              01. {t('howItWorksTitle')}
            </h2>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              {data.howItWorks[locale] || data.howItWorks['en']}
            </p>
          </motion.div>

          {/* 2. When you will see results */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
              02. {t('whenResultsTitle')}
            </h2>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              {data.whenResultsSeen[locale] || data.whenResultsSeen['en']}
            </p>
          </motion.div>

          {/* 3. What you will achieve */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeInUp}
          >
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
              03. {t('achievementsTitle')}
            </h2>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.achievements.map((achieve, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl border border-stone-100"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#A05C3C] shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-light leading-relaxed">
                    {achieve[locale] || achieve['en']}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Before & After Slider */}
          {data.beforeAfterCases && data.beforeAfterCases.length > 0 && activeCase && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              variants={fadeInUp}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <h2 className={`text-3xl md:text-4xl font-semibold text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
                  04. {t('clinicalResultsTitle')}
                </h2>
                <div className="flex gap-2 items-center text-xs uppercase tracking-widest text-stone-400 font-semibold bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm w-fit">
                  <ArrowLeft className="w-3 h-3" /> {t('dragToInteract')} <ArrowRight className="w-3 h-3" />
                </div>
              </div>
              <div className="h-px w-24 bg-[#A05C3C] mb-8" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  dir="ltr"
                  className="relative w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden group select-none bg-stone-200 mb-6"
                >
                  {/* Image After (Fixed Background) */}
                  <Image
                    src={activeCase.after}
                    alt="After Treatment"
                    fill
                    sizes="(max-w-1024px) 100vw, 70vw"
                    className="object-cover"
                    priority
                  />

                  {/* Image Before (Clipped Overlap) */}
                  <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                  >
                    <Image
                      src={activeCase.before}
                      alt="Before Treatment"
                      fill
                      sizes="(max-w-1024px) 100vw, 70vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Handle Divider */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-white flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none z-20"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-200/50">
                      <div className="flex gap-1">
                        <div className="w-0.5 h-3 bg-stone-400 rounded-full" />
                        <div className="w-0.5 h-3 bg-stone-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Range Input Control */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                  />

                  {/* Fixed Informative Badges */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md pointer-events-none z-20">
                    {t('beforeLabel')}
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md pointer-events-none z-20">
                    {t('afterLabel')}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mb-6 flex justify-between items-center px-2">
                <h4 className="font-semibold text-stone-900">
                  {activeCase.label[locale] || activeCase.label['en']}
                </h4>
              </div>

              {/* Slider Thumbnails */}
              <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
                {data.beforeAfterCases.map((caseItem, index) => (
                  <button
                    key={caseItem.id}
                    onClick={() => handleCaseChange(index)}
                    className={`relative shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 snap-center ${
                      activeCaseIndex === index
                        ? 'ring-2 ring-[#A05C3C] ring-offset-2 ring-offset-[#FAF7F2] opacity-100'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={caseItem.after}
                      alt={caseItem.label[locale] || caseItem.label['en']}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                    <div className="inset-0 w-1/2 overflow-hidden border-r border-white/50 relative">
                      <div className="absolute inset-0 w-[200%] h-full">
                        <Image
                          src={caseItem.before}
                          fill
                          sizes="96px"
                          className="object-cover"
                          alt="Thumbnail Before"
                        />
                      </div>
                    </div>
                    {activeCaseIndex === index && (
                      <div className="absolute inset-0 bg-[#A05C3C]/10" />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* 5. Pre & Post Care Instructions */}
          {data.instructions && (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              variants={fadeInUp}
            >
              <h2 className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
                05. {t('careInstructionsTitle')}
              </h2>
              <div className="h-px w-24 bg-[#A05C3C] mb-8" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-stone-200/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center">
                      <ClipboardList className="w-5 h-5 text-[#A05C3C]" />
                    </div>
                    <h3 className={`text-xl font-semibold text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
                      {t('preTreatment')}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {data.instructions.before.map((inst, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A05C3C] mt-2.5 shrink-0 opacity-60" />
                        <span className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
                          {inst[locale] || inst['en']}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-stone-200/50 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-[#A05C3C]" />
                    </div>
                    <h3 className={`text-xl font-semibold text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
                      {t('postTreatment')}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {data.instructions.after.map((inst, idx) => (
                      <li key={idx} className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#A05C3C] mt-2.5 shrink-0 opacity-60" />
                        <span className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
                          {inst[locale] || inst['en']}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Right Side: Sticky Appointment Action */}
        <div className="w-full lg:w-1/3 hidden lg:block">
          <div className="sticky top-32 bg-stone-900 p-10 rounded-2xl text-white shadow-2xl">
            <Sparkles className="w-8 h-8 text-[#A05C3C] mb-6" />
            <h3 className={`text-2xl font-bold mb-4 ${!isArabic ? 'font-serif' : ''}`}>
              {t('sidebarTitle')}
            </h3>
            <p className="text-stone-400 font-light text-sm leading-relaxed mb-8">
              {t('sidebarDescription')}
            </p>
            <Button
              asChild
              className="w-full rounded-full bg-[#A05C3C] hover:bg-white hover:text-stone-900 transition-colors px-6 py-6 text-xs uppercase tracking-widest border-0"
            >
              <Link href={`/${locale}#contact`}>
                {t('sidebarButton')}
              </Link>
            </Button>

            <div className="mt-8 pt-8 border-t border-stone-800 text-center">
              <span className="block text-stone-500 text-xs uppercase tracking-widest mb-2">
                {t('sidebarContactLabel')}
              </span>
              <a
                href="tel:+201277702008"
                className="text-xl font-serif hover:text-[#A05C3C] transition-colors"
              >
                +20 127 770 2008
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}