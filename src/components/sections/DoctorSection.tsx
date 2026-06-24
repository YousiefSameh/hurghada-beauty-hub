'use client';

import Image from 'next/image';
import { ArrowRight, ShieldCheck, Check, Quote } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '../atoms/button';
import { cn } from '@/lib/utils';

export default function DoctorSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('homepage.doctor_preview');

  // استخراج الاعتمادات كمصفوفة
  const credentials = t.raw('credentials') as string[];

  return (
    <section id='doctor' className="py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden relative z-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/40 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#CD6C3E]/5 blur-[120px] -z-10" />

      <div className="container px-4 sm:px-0 mx-auto">
        <div className="w-full flex flex-col mb-12 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 md:w-16 h-px bg-[#CD6C3E]" />
            <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-semibold text-[#CD6C3E]">
              {t('section_subtitle')}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-stone-900 leading-[1.1] ${!isArabic ? 'font-serif italic' : ''}`}
          >
            {t('title')} <br className="hidden sm:block" />
            <span className="text-[#CD6C3E] font-light uppercase text-3xl sm:text-4xl lg:text-5xl xl:text-6xl not-italic tracking-wide">
              {t('title_highlight')}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Side: Editorial Image Composition */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start lg:sticky lg:top-32">
            {/* Main Image Container */}
            <div className="relative aspect-4/5 w-full max-w-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/10 group z-10 bg-stone-100">
              <Image
                src="/assets/images/dr.png"
                alt={t('name')}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 w-full"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />

              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-stone-900/60 via-transparent to-transparent opacity-60" />

              {/* Floating Glassmorphism Badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center justify-between shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#CD6C3E] flex items-center justify-center shadow-md">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold tracking-wider uppercase">
                      Certified
                    </p>
                    <p className="text-white/80 text-[10px] tracking-widest uppercase">
                      Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Detailed Luxury Content */}
          <div className="lg:col-span-7 flex flex-col h-full relative z-10 pt-4 lg:pt-0">
            {/* Doctor Info & Quote */}
            <div className="bg-white/60 backdrop-blur-sm border border-white p-6 md:p-8 rounded-3xl shadow-sm mb-8 relative">
              <Quote
                className={cn(
                  'absolute top-6 w-8 h-8 text-[#CD6C3E]/10',
                  isArabic ? 'left-6' : 'right-6'
                )}
              />

              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-stone-400 block mb-3 uppercase">
                {t('specialist_tag')}
              </span>
              <h3
                className={`text-3xl md:text-4xl font-black text-stone-900 mb-2 ${!isArabic ? 'font-serif' : ''}`}
              >
                {t('name')}
              </h3>
              <p className="text-[#CD6C3E] font-medium text-sm md:text-base tracking-wide mb-6">
                {t('role')}
              </p>

              <blockquote
                className={`text-lg md:text-xl text-stone-700 leading-relaxed mb-6 ${!isArabic ? 'font-serif italic' : ''}`}
              >
                {t('quote')}
              </blockquote>

              <p className="text-stone-500 font-light text-sm md:text-base leading-relaxed">
                {t('bio')}
              </p>

              {/* Minimal Credentials List */}
              <div className="mt-6 flex flex-col gap-2.5">
                {credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-stone-700">
                    <div className="w-4 h-4 rounded-full bg-[#CD6C3E]/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-[#CD6C3E]" />
                    </div>
                    <span className="text-xs md:text-sm font-medium tracking-wide">{cred}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* High-End Editorial Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-y border-stone-200/60 py-6 mb-8">
              <div className="flex flex-col justify-center">
                <span
                  className={`text-3xl md:text-4xl font-black text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
                >
                  {t('stats.exp_val')}
                </span>
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-stone-400 font-semibold mt-2">
                  {t('stats.exp_lbl')}
                </span>
              </div>

              <div className="flex flex-col justify-center border-l border-stone-200/60 pl-4 md:pl-8">
                <span
                  className={`text-3xl md:text-4xl font-black text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
                >
                  {t('stats.focus_val')}
                </span>
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-stone-400 font-semibold mt-2">
                  {t('stats.focus_lbl')}
                </span>
              </div>

              <div className="flex flex-col justify-center border-l border-stone-200/60 pl-4 md:pl-8">
                <span
                  className={`text-3xl md:text-4xl font-black text-[#CD6C3E] ${!isArabic ? 'font-serif' : ''}`}
                >
                  {t('stats.rate_val')}
                </span>
                <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-stone-400 font-semibold mt-2">
                  {t('stats.rate_lbl')}
                </span>
              </div>
            </div>

            {/* Premium Call to Actions - Using Shadcn Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <Button
                size="lg"
                className="group relative w-full sm:w-fit inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl text-sm font-semibold tracking-widest uppercase overflow-hidden transition-all cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {t('btns.book')}
                  <ArrowRight
                    className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${isArabic ? 'rotate-180 group-hover:-translate-x-1' : ''}`}
                  />
                </span>
              </Button>

              <Button
                variant="ghost"
                size="lg"
                className="w-full sm:w-fit inline-flex items-center justify-center px-8 py-6 rounded-xl text-sm font-semibold tracking-widest uppercase text-stone-800 hover:text-[#CD6C3E] transition-colors relative after:content-[''] after:absolute after:bottom-2 after:left-8 after:right-8 after:h-px after:bg-[#CD6C3E] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left hover:bg-transparent cursor-pointer"
              >
                {t('btns.profile')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
