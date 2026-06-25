'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';

export default function TreatmentsSection() {
  const [activeTab, setActiveTab] = useState('face');
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const locale = useLocale();
  const isArabic = locale === 'ar';
  const t = useTranslations('homepage.our_services');

  const servicesData = [
    {
      id: 'face',
      title: t('services.face.title'),
      shortDesc: t('services.face.shortDesc'),
      description: t('services.face.description'),
      image: '/assets/images/face-female.jpg',
      items: t.raw('services.face.items') as string[],
      sliderImages: ['/assets/images/face-female.jpg', '/assets/images/face-male.jpg'],
    },
    {
      id: 'hair',
      title: t('services.hair.title'),
      shortDesc: t('services.hair.shortDesc'),
      description: t('services.hair.description'),
      image: '/assets/images/hair-female.jpg',
      items: t.raw('services.hair.items') as string[],
      sliderImages: ['/assets/images/hair-female.jpg', '/assets/images/hair-male.jpg'],
    },
  ];

  const activeService = servicesData.find((s) => s.id === activeTab) || servicesData[0];

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [activeTab]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % activeService.sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeService.sliderImages.length]);

  return (
    <section id='treatments' className="bg-[#FAF7F2] py-12 md:py-28 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="container px-4 sm:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-32 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#CD6C3E]" />
              <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-semibold text-[#CD6C3E]">
                {t('section_subtitle')}
              </span>
            </div>

            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 leading-tight ${
                !isArabic ? 'font-serif italic' : ''
              }`}
            >
              {t('title')}{' '}
              <span className="text-[#CD6C3E] font-light uppercase">{t('title_highlight')}</span>
            </h2>
          </div>

          <p className="max-w-md text-stone-600 font-light text-base md:text-lg leading-relaxed pb-2">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-5 xl:col-span-4 order-1 lg:order-2 flex flex-row lg:flex-col gap-4 w-full">
            {servicesData.map((service) => {
              const isSelected = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`group relative flex-1 rounded-2xl lg:rounded-3xl overflow-hidden text-left p-4 lg:p-8 flex flex-col justify-end transition-all duration-500 border cursor-pointer h-24 sm:h-32 lg:h-auto ${
                    isSelected
                      ? 'border-[#CD6C3E] ring-2 ring-[#CD6C3E]/20 shadow-lg scale-[1.01]'
                      : 'border-stone-200/40 hover:border-stone-400'
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/10 transition-colors duration-500 group-hover:from-black/90" />

                  <div className="relative z-10 w-full transition-all duration-500 transform lg:translate-y-4 lg:group-hover:translate-y-0">
                    <h4
                      className={`text-sm sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white transition-colors duration-300 ${
                        isSelected ? 'text-[#CD6C3E]' : 'group-hover:text-[#CD6C3E]'
                      } ${!isArabic ? 'font-serif italic' : ''}`}
                    >
                      {service.title}
                    </h4>

                    <div className="hidden lg:block opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-500 ease-in-out overflow-hidden mt-2">
                      <p className="text-stone-300 text-xs md:text-sm font-light leading-relaxed">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="hidden lg:flex mt-4 pt-4 border-t border-white/20 items-center justify-between w-full">
                      <span className="text-white text-xs tracking-widest uppercase font-semibold">
                        {isSelected ? t('active_status') : t('explore_status')}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-[#CD6C3E] text-white'
                            : 'bg-white/10 text-white group-hover:bg-[#CD6C3E]'
                        }`}
                      >
                        <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-7 xl:col-span-8 order-2 lg:order-1 bg-white rounded-3xl border border-stone-200/60 p-6 md:p-10 shadow-xs flex flex-col justify-between min-h-[520px] sm:min-h-[580px] lg:min-h-[680px]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-center">
              <div className="md:col-span-6 flex flex-col justify-between h-full py-2">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#CD6C3E]/10 text-[#CD6C3E] text-xs font-medium mb-4">
                    <Sparkles className="w-3 h-3" />
                    {t('premium_badge')}
                  </div>
                  <h3
                    className={`text-2xl md:text-3xl font-black text-stone-900 mb-4 ${
                      !isArabic ? 'font-serif' : ''
                    }`}
                  >
                    {activeService.title}
                  </h3>
                  <p className="text-stone-500 font-light text-sm md:text-base leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  <div className="space-y-2.5 max-h-[260px] md:max-h-[320px] overflow-y-auto pr-2 scrollbar-thin">
                    {activeService.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-2.5 text-stone-700 text-xs md:text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#CD6C3E] mt-2 shrink-0" />
                        <span className="font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button className="inline-flex items-center justify-center gap-2 bg-[#CD6C3E] text-white px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide hover:bg-[#b85b30] transition-colors shadow-xs mt-8 w-full sm:w-fit">
                  {t('book_btn')}
                  <ArrowRight className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="md:col-span-6 relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-stone-100 group">
                {activeService.sliderImages.map((img, idx) => (
                  <div
                    key={img}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      idx === currentImgIndex
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0'
                    }`}
                  >
                    <Image
                      src={img}
                      alt="Service presentation"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                      priority
                    />
                  </div>
                ))}

                <div className="absolute inset-x-4 bottom-4 z-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-1.5 bg-black/40 backdrop-blur-md p-1.5 rounded-full">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIndex(
                          (prev) =>
                            (prev - 1 + activeService.sliderImages.length) %
                            activeService.sliderImages.length
                        );
                      }}
                      className="p-1 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIndex(
                          (prev) => (prev + 1) % activeService.sliderImages.length
                        );
                      }}
                      className="p-1 rounded-full text-white hover:bg-white/20 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
