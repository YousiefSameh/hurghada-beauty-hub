'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft, Sparkles, MoveRight } from 'lucide-react';
import Link from 'next/link';
// استدعاء البيانات الموحدة
import { treatmentsData } from '@/data/services';
import SpecialHeading from '../molecules/SpecialHeading';

export default function ServicesSection() {
  const locale = useLocale() as 'en' | 'ar';
  const isArabic = locale === 'ar';
  const t = useTranslations('homepage.services_section');

  const preparedServices = treatmentsData.map((s, idx) => ({
    ...s,
    displayId: String(idx + 1).padStart(2, '0'),
  }));

  const infiniteServices = [
    ...preparedServices.map((s) => ({ ...s, uniqueId: `${s.slug}-copy1` })),
    ...preparedServices.map((s) => ({ ...s, uniqueId: `${s.slug}-copy2` })),
    ...preparedServices.map((s) => ({ ...s, uniqueId: `${s.slug}-copy3` })),
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isReady, setIsReady] = useState(false);

  const getSingleCopyWidth = useCallback(() => {
    const isMd = window.innerWidth >= 768;
    const cardTotalWidth = isMd ? 460 : 344;
    return preparedServices.length * cardTotalWidth;
  }, [preparedServices.length]);

  useEffect(() => {
    const initScroll = () => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const singleCopyWidth = getSingleCopyWidth();

        container.style.scrollBehavior = 'auto';

        if (isArabic) {
          const isNegativeScroll = getComputedStyle(container).direction === 'rtl';
          container.scrollLeft = isNegativeScroll ? -singleCopyWidth : singleCopyWidth;
        } else {
          container.scrollLeft = singleCopyWidth;
        }

        void container.offsetWidth;
        container.style.scrollBehavior = 'smooth';
        setIsReady(true);
      }
    };

    const timer = setTimeout(initScroll, 100);
    return () => clearTimeout(timer);
  }, [isArabic, getSingleCopyWidth]);

  const handleScroll = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    scrollTimeoutRef.current = setTimeout(() => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const singleCopyWidth = getSingleCopyWidth();
      const currentScroll = container.scrollLeft;
      const absScroll = Math.abs(currentScroll);

      if (absScroll < singleCopyWidth * 0.5) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft =
          currentScroll > 0 ? currentScroll + singleCopyWidth : currentScroll - singleCopyWidth;
        void container.offsetWidth;
        container.style.scrollBehavior = 'smooth';
      } else if (absScroll > singleCopyWidth * 1.5) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft =
          currentScroll > 0 ? currentScroll - singleCopyWidth : currentScroll + singleCopyWidth;
        void container.offsetWidth;
        container.style.scrollBehavior = 'smooth';
      }
    }, 150);
  };

  const scrollNextPrev = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 460 : 344;
      const move =
        direction === 'left'
          ? isArabic
            ? scrollAmount
            : -scrollAmount
          : isArabic
            ? -scrollAmount
            : scrollAmount;

      sliderRef.current.scrollBy({ left: move, behavior: 'smooth' });
    }
  };

  const paddingSnapClass = isArabic
    ? 'scroll-pr-4 sm:scroll-pr-6 md:scroll-pr-12 lg:scroll-pr-24'
    : 'scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-12 lg:scroll-pl-24';

  return (
    <section id="services" className="py-24 md:py-32 overflow-hidden relative z-0 bg-[#FAF7F2]">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-[#CD6C3E]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header Block */}
      <div className="container px-4 xl:px-0 mx-auto mb-8 md:mb-12">
        <SpecialHeading
          isArabic={isArabic}
          subtitle={t('subtitle')}
          title={t('title')}
          titleHighlight={t('title_highlight')}
          description={t('description')}
        />
        <div className="items-end justify-end gap-4 lg:pb-4 flex">
          <button
            onClick={() => scrollNextPrev('left')}
            className="w-14 h-14 rounded-full border border-stone-300 flex items-center justify-center transition-all duration-300 hover:bg-[#CD6C3E] hover:border-[#CD6C3E] hover:text-white text-stone-900 cursor-pointer"
          >
            {isArabic ? <ArrowRight className="w-5 h-5" /> : <ArrowLeft className="w-5 h-5" />}
          </button>
          <button
            onClick={() => scrollNextPrev('right')}
            className="w-14 h-14 rounded-full border border-stone-300 flex items-center justify-center transition-all duration-300 hover:bg-[#CD6C3E] hover:border-[#CD6C3E] hover:text-white text-stone-900 cursor-pointer"
          >
            {isArabic ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Infinite Scroll Track */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className={`flex overflow-x-auto snap-x snap-mandatory pb-16 pt-4 [&::-webkit-scrollbar]:hidden w-full transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'} ${paddingSnapClass}`}
        style={{ scrollbarWidth: 'none' }}
      >
        {infiniteServices.map((service) => (
          <Link
            key={service.uniqueId}
            className="shrink-0 snap-start flex justify-start w-[344px] md:w-[460px]"
            href={`/services/${service.slug}`}
          >
            <div className="group cursor-pointer flex flex-col w-[320px] md:w-[420px]">
              {/* Image Card */}
              <div className="relative w-[400px] h-[300px] overflow-hidden rounded-2xl mb-8 bg-stone-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#CD6C3E]/20">
                <Image
                  src={service.image}
                  alt={service.title[locale]}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 420px"
                />

                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500" />

                <div className="absolute top-6 left-6 w-12 h-12 backdrop-blur-md bg-white/40 border border-white/50 rounded-full flex items-center justify-center text-stone-900 font-medium z-10 shadow-lg">
                  <span className={!isArabic ? 'font-serif' : ''}>{service.displayId}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col grow pr-4">
                <div className="w-12 h-px bg-stone-300 mb-6 transition-all duration-500 group-hover:w-24 group-hover:bg-[#CD6C3E]" />

                <h3
                  className={`text-2xl md:text-3xl font-bold text-stone-900 mb-4 transition-colors duration-300 group-hover:text-[#CD6C3E] ${!isArabic ? 'font-serif' : ''}`}
                >
                  {service.title[locale]}
                </h3>

                <p className="text-stone-500 font-light leading-relaxed mb-8 text-sm md:text-base">
                  {service.desc[locale]}
                </p>

                <div className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-stone-900 mt-auto">
                  <span className="relative overflow-hidden inline-block">
                    <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      {t('btn')}
                    </span>
                    <span className="absolute inset-0 block transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 text-[#CD6C3E]">
                      {t('btn')}
                    </span>
                  </span>
                  <MoveRight
                    className={`w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:text-[#CD6C3E] ${isArabic ? 'rotate-180 group-hover:-translate-x-3' : ''}`}
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
