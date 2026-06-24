'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ArrowRight, ArrowLeft, Sparkles, MoveRight } from 'lucide-react';
import { Button } from '@/components/atoms/button';

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  link_text: string;
}

export default function ServicesSection() {
  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('homepage.services_section');
  const baseServices = t.raw('services') as ServiceItem[];

  // 1. Triple the array to create the Infinite Loop illusion
  const infiniteServices = [
    ...baseServices.map(s => ({ ...s, uniqueId: `${s.id}-copy1` })),
    ...baseServices.map(s => ({ ...s, uniqueId: `${s.id}-copy2` })),
    ...baseServices.map(s => ({ ...s, uniqueId: `${s.id}-copy3` })),
  ];

  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isReady, setIsReady] = useState(false);

  // Exact math to know the width of one full copy of services
  const getSingleCopyWidth = useCallback(() => {
    const isMd = window.innerWidth >= 768;
    const cardTotalWidth = isMd ? 460 : 344; // Card width + Empty space gap
    return baseServices.length * cardTotalWidth;
  }, [baseServices.length]);

  // 2. Center the scroll position instantly on load
  useEffect(() => {
    const initScroll = () => {
      if (sliderRef.current) {
        const container = sliderRef.current;
        const singleCopyWidth = getSingleCopyWidth();
        
        container.style.scrollBehavior = 'auto'; // Disable smooth scroll for instant jump

        if (isArabic) {
          // RTL safe logic
          const isNegativeScroll = getComputedStyle(container).direction === 'rtl';
          container.scrollLeft = isNegativeScroll ? -singleCopyWidth : singleCopyWidth;
        } else {
          container.scrollLeft = singleCopyWidth;
        }

        // Force reflow and re-enable smooth scrolling
        void container.offsetWidth;
        container.style.scrollBehavior = 'smooth';
        setIsReady(true); // Fade in the slider elegantly
      }
    };

    const timer = setTimeout(initScroll, 100);
    return () => clearTimeout(timer);
  }, [isArabic, getSingleCopyWidth]);

  // 3. The "Silent Jump" Logic to keep it infinite
  const handleScroll = () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

    // Wait for scroll momentum to finish to avoid breaking mobile swipe physics
    scrollTimeoutRef.current = setTimeout(() => {
      if (!sliderRef.current) return;
      const container = sliderRef.current;
      const singleCopyWidth = getSingleCopyWidth();
      const currentScroll = container.scrollLeft;
      const absScroll = Math.abs(currentScroll);

      // If user reaches the first copy, silently jump them forward
      if (absScroll < singleCopyWidth * 0.5) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = currentScroll > 0 
          ? currentScroll + singleCopyWidth 
          : currentScroll - singleCopyWidth;
        void container.offsetWidth;
        container.style.scrollBehavior = 'smooth';
      }
      // If user reaches the third copy, silently jump them back
      else if (absScroll > singleCopyWidth * 1.5) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = currentScroll > 0 
          ? currentScroll - singleCopyWidth 
          : currentScroll + singleCopyWidth;
        void container.offsetWidth;
        container.style.scrollBehavior = 'smooth';
      }
    }, 150);
  };

  const scrollNextPrev = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth >= 768 ? 460 : 344;
      const move = direction === 'left' 
        ? (isArabic ? scrollAmount : -scrollAmount) 
        : (isArabic ? -scrollAmount : scrollAmount);
        
      sliderRef.current.scrollBy({ left: move, behavior: 'smooth' });
    }
  };

  const paddingSnapClass = isArabic
    ? "scroll-pr-4 sm:scroll-pr-6 md:scroll-pr-12 lg:scroll-pr-24"
    : "scroll-pl-4 sm:scroll-pl-6 md:scroll-pl-12 lg:scroll-pl-24";

  return (
    <section id='services' className="py-24 md:py-32 overflow-hidden relative z-0 bg-[#FAF7F2]">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-1/3 h-1/2 bg-[#CD6C3E]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Header Block */}
      <div className="container px-4 sm:px-6 md:px-12 lg:px-24 mx-auto mb-16 md:mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-[#CD6C3E]" />
              <span className="uppercase tracking-[0.25em] text-sm font-semibold text-[#CD6C3E] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                {t('subtitle')}
              </span>
            </div>
            
            <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-black text-stone-900 leading-[1.1] ${!isArabic ? 'font-serif italic' : ''}`}>
              {t('title')}{" "}
              <span className="text-[#CD6C3E] font-light uppercase text-3xl lg:text-5xl not-italic tracking-wide block sm:inline mt-2 sm:mt-0">
                {t('title_highlight')}
              </span>
            </h2>
            
            <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed mt-6 max-w-xl">
              {t('description')}
            </p>
          </div>

          {/* Endless Navigation Buttons */}
          <div className="items-center gap-4 lg:pb-4 flex">
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
      </div>

      {/* Infinite Scroll Track */}
      <div 
        ref={sliderRef}
        onScroll={handleScroll}
        className={`flex overflow-x-auto snap-x snap-mandatory pb-16 pt-4 [&::-webkit-scrollbar]:hidden w-full transition-opacity duration-700 ${isReady ? 'opacity-100' : 'opacity-0'} ${paddingSnapClass}`}
        style={{ scrollbarWidth: 'none' }}
      >
        {infiniteServices.map((service) => (
          // Wrapper handles the exact width and spacing mathematically
          <div 
            key={service.uniqueId} 
            className="shrink-0 snap-start flex justify-start w-[344px] md:w-[460px]"
          >
            {/* The Actual Card */}
            <div className="group cursor-pointer flex flex-col w-[320px] md:w-[420px]">
              
              {/* Magazine Style Image Card */}
              <div className="relative w-[400px] h-[300px] overflow-hidden rounded-2xl mb-8 bg-stone-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#CD6C3E]/20">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 320px, 420px"
                />
                
                <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500" />
                
                <div className="absolute top-6 left-6 w-12 h-12 backdrop-blur-md bg-white/40 border border-white/50 rounded-full flex items-center justify-center text-stone-900 font-medium z-10 shadow-lg">
                  <span className={!isArabic ? 'font-serif' : ''}>{service.id}</span>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex flex-col grow pr-4">
                <div className="w-12 h-px bg-stone-300 mb-6 transition-all duration-500 group-hover:w-24 group-hover:bg-[#CD6C3E]" />
                
                <h3 className={`text-2xl md:text-3xl font-bold text-stone-900 mb-4 transition-colors duration-300 group-hover:text-[#CD6C3E] ${!isArabic ? 'font-serif' : ''}`}>
                  {service.title}
                </h3>
                
                <p className="text-stone-500 font-light leading-relaxed mb-8 grow text-sm md:text-base line-clamp-2">
                  {service.desc}
                </p>
                
                <div className="flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-stone-900 mt-auto">
                  <span className="relative overflow-hidden inline-block">
                    <span className="block transition-transform duration-500 ease-out group-hover:-translate-y-full">
                      Discover The {service.title} World Here
                    </span>
                    <span className="absolute inset-0 block transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 text-[#CD6C3E]">
                      Discover The {service.title} World Here
                    </span>
                  </span>
                  <MoveRight className={`w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:text-[#CD6C3E] ${isArabic ? 'rotate-180 group-hover:-translate-x-3' : ''}`} />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}