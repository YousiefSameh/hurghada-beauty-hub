'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import Image from 'next/image';

// 1. Data Mock updated with Categories to match the image filters
const categories = ['All', 'Face', 'Body', 'Hair', 'Skin'];

const treatmentsMock = [
  {
    slug: 'signature-facelift',
    image: '/assets/images/service-1.png',
    category: 'Face',
    title: { en: 'Signature Facelift', ar: 'شد الوجه المميز' },
    desc: {
      en: 'Non-surgical contouring for a lifted, youthful appearance.',
      ar: 'نحت غير جراحي لمظهر مشدود وأكثر شباباً.',
    },
  },
  {
    slug: 'laser-hair-removal',
    image: '/assets/images/service-2.png',
    category: 'Hair',
    title: { en: 'Laser Hair Removal', ar: 'إزالة الشعر بالليزر' },
    desc: {
      en: 'Advanced clinical laser treatments for long-lasting smoothness.',
      ar: 'علاجات ليزر متقدمة لنعومة تدوم طويلاً.',
    },
  },
  {
    slug: 'body-sculpting',
    image: '/assets/images/service-3.png',
    category: 'Body',
    title: { en: 'Body Sculpting', ar: 'نحت القوام' },
    desc: {
      en: 'Precision treatments to contour and define your body architecture.',
      ar: 'علاجات دقيقة لنحت وتحديد معالم جسمك.',
    },
  },
  {
    slug: 'dermal-fillers',
    image: '/assets/images/service-4.png',
    category: 'Face',
    title: { en: 'Dermal Fillers', ar: 'الفيلر الجلدي' },
    desc: {
      en: 'Restore volume and enhance facial features effortlessly.',
      ar: 'استعادة الحجم وإبراز ملامح الوجه بنعومة.',
    },
  },
  {
    slug: 'prp-therapy',
    image: '/assets/images/service-5.png',
    category: 'Skin',
    title: { en: 'Cellular PRP', ar: 'علاج البلازما (PRP)' },
    desc: {
      en: 'Regenerative therapy utilizing your own growth factors.',
      ar: 'علاج تجديدي يستخدم عوامل النمو الخاصة بك.',
    },
  },
  {
    slug: 'iv-drip',
    image: '/assets/images/service-6.png',
    category: 'Body',
    title: { en: 'IV Wellness Drip', ar: 'فيتامينات وريدية' },
    desc: {
      en: 'Bespoke vitamin infusions for inner health and outer glow.',
      ar: 'فيتامينات مخصصة للصحة الداخلية والإشراق الخارجي.',
    },
  },
];

export default function TreatmentsPage() {
  const locale = useLocale() as 'en' | 'ar';
  const isArabic = locale === 'ar';

  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter logic
  const filteredTreatments =
    activeCategory === 'All'
      ? treatmentsMock
      : treatmentsMock.filter((t) => t.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-stone-900 selection:bg-[#A05C3C] selection:text-white pb-24">
      <section className="relative h-[60vh] min-h-[500px] w-full flex items-center">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/images/hero_video_poster.png"
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
              {isArabic ? 'علاجاتنا' : 'Our Treatments'}
            </span>
            <h1
              className={`text-5xl md:text-6xl font-light w-full mb-6 leading-tight ${!isArabic ? 'font-serif' : ''}`}
            >
              {isArabic ? 'روائع العلوم الجمالية' : 'Masterpieces of Aesthetic Science'}
              <br />
              <span className="font-bold italic">
                {isArabic ? 'مجانية بالكامل' : 'consultation'}
              </span>
            </h1>
            <Button className="rounded-full bg-white text-stone-900 hover:bg-[#A05C3C] hover:text-white transition-colors border-0 px-8 py-6 text-sm uppercase tracking-widest mt-4">
              {isArabic ? 'احجز استشارتك الآن' : 'Book a consultation'}
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-8 mt-20 mb-12">
        <div className="max-w-3xl mb-12">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl text-stone-900 font-light mb-6 ${!isArabic ? 'font-serif' : ''}`}
          >
            {isArabic ? 'عشرون علاجاً.' : 'Twenty treatments.'}{' '}
            <span className="italic text-[#A05C3C] font-semibold">
              {isArabic ? 'معيار واحد.' : 'One standard.'}
            </span>
          </h2>
          <p className="text-stone-500 text-lg font-light leading-relaxed">
            {isArabic
              ? 'اكتشف مجموعتنا المختارة بعناية من العلاجات التجميلية الفاخرة، المصممة خصيصاً لإبراز جمالك الطبيعي بأعلى المعايير الطبية العالمية.'
              : 'Explore our meticulously curated portfolio of bespoke aesthetic treatments, designed to unveil your timeless elegance with the highest clinical standards.'}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#A05C3C] text-white border-[#A05C3C]'
                  : 'bg-transparent text-stone-600 border-stone-300 hover:border-[#A05C3C] hover:text-[#A05C3C]'
              }`}
            >
              {isArabic && cat === 'All'
                ? 'الكل'
                : isArabic && cat === 'Face'
                  ? 'الوجه'
                  : isArabic && cat === 'Body'
                    ? 'الجسم'
                    : isArabic && cat === 'Hair'
                      ? 'الشعر'
                      : isArabic && cat === 'Skin'
                        ? 'البشرة'
                        : cat}
            </button>
          ))}
        </div>
      </section>

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
                <div className="relative aspect-3/2 w-full overflow-hidden rounded-md mb-5 bg-stone-200">
                  <Image
                    src={treatment.image}
                    width={400}
                    height={200}
                    alt={treatment.title[locale]}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-4 ${isArabic ? 'right-4' : 'left-4'} bg-[#A05C3C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md`}
                  >
                    {isArabic && treatment.category === 'Face'
                      ? 'الوجه'
                      : isArabic && treatment.category === 'Body'
                        ? 'الجسم'
                        : isArabic && treatment.category === 'Hair'
                          ? 'الشعر'
                          : isArabic && treatment.category === 'Skin'
                            ? 'البشرة'
                            : treatment.category}
                  </div>

                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-500" />
                </div>

                <h3
                  className={`text-2xl font-semibold text-stone-900 mb-2 ${!isArabic ? 'font-serif' : ''}`}
                >
                  {treatment.title[locale]}
                </h3>

                <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 grow line-clamp-2">
                  {treatment.desc[locale]}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-stone-200 mt-auto">
                  <Link
                    href={`/${locale}/services/${treatment.slug}`}
                    className="text-xs font-semibold uppercase tracking-widest text-stone-900 hover:text-[#A05C3C] transition-colors flex items-center gap-2 group/link"
                  >
                    {isArabic ? 'اكتشف المزيد' : 'Learn More'}
                    {isArabic ? (
                      <ArrowLeft className="w-3 h-3 transform group-hover/link:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3 h-3 transform group-hover/link:translate-x-1 transition-transform" />
                    )}
                  </Link>

                  <Button className="rounded-full bg-[#A05C3C] hover:bg-[#8C4E33] text-white px-6 py-2 h-auto text-[10px] uppercase tracking-widest border-0">
                    {isArabic ? 'احجز الآن' : 'Book Now'}
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
