'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { motion, AnimatePresence, Easing } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle2, ClipboardList, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import Image from 'next/image';

// 1. Mock Data (تم تحديث قسم beforeAfterCases ليحتوي على 5 حالات)
const treatmentDetailMock = {
  slug: 'signature-facelift',
  category: { en: 'Face', ar: 'الوجه' },
  heroImage: '/assets/images/face-female.jpg',
  title: { en: 'Signature Facelift', ar: 'شد الوجه المميز' },
  tagline: {
    en: 'Redefining Your Natural Architecture with Absolute Precision.',
    ar: 'إعادة تعريف هندستك الطبيعية بدقة مطلقة وفخامة لا تضاهى.',
  },

  howItWorks: {
    en: 'The Signature Facelift utilizes a strategic, multi-layered approach to facial contouring. By targeting the deeper SMAS layers using advanced clinical modalities, we restore structural support without the need for invasive surgery.',
    ar: 'يعتمد شد الوجه المميز على نهج استراتيجي متعدد الطبقات لنحت الوجه. من خلال استهداف طبقات (SMAS) العميقة باستخدام تقنيات سريرية متقدمة، نقوم باستعادة الدعم الهيكلي دون الحاجة إلى جراحة عنيفة.',
  },

  whenResultsSeen: {
    en: 'Initial lifting is immediately visible post-treatment. However, the true architectural refinement develops over 4 to 6 weeks as natural collagen remodeling occurs.',
    ar: 'الشد الأولي يكون مرئياً فوراً بعد العلاج مباشرة. ومع ذلك، فإن التحسن الهيكلي الحقيقي والتألق يكتمل خلال 4 إلى 6 أسابيع تزامناً مع عملية إعادة بناء الكولاجين الطبيعي.',
  },

  achievements: [
    { en: 'Restored facial symmetry and volume', ar: 'استعادة تناسق الوجه والحجم الطبيعي' },
    { en: 'Sharpened jawline and cheekbone definition', ar: 'تحديد دقيق لخط الفك وعظام الوجنتين' },
    {
      en: 'Long-term collagen and elastin stimulation',
      ar: 'تحفيز طويل الأمد للكولاجين والإيلاستين',
    },
    {
      en: 'Zero downtime with immediate return to daily life',
      ar: 'فترة نقاهة معدومة مع عودة فورية للحياة اليومية',
    },
  ],

  products: [
    {
      name: 'Restylane® Defyne',
      image: '/assets/images/face-male.jpg',
      desc: {
        en: 'Premium hyaluronic acid formulation for deep support.',
        ar: 'تركيبة حمض الهيالورونيك الفاخرة للدعم العميق.',
      },
    },
    {
      name: 'Radiesse® Volumizing',
      image: '/assets/images/face-female.jpg',
      desc: {
        en: 'Calcium-based biostimulator for sustained contouring.',
        ar: 'محفز حيوي غني بالكالسيوم لنحت يدوم طويلاً.',
      },
    },
  ],

  beforeAfterCases: [
    {
      id: 1,
      before: '/assets/images/face-female.jpg',
      after: '/assets/images/face-male.jpg',
      label: { en: 'Case 01', ar: 'الحالة 01' },
      desc: { en: 'Mid-face volume restoration', ar: 'استعادة حجم منتصف الوجه' },
    },
    {
      id: 2,
      before: '/assets/images/face-female.jpg',
      after: '/assets/images/face-male.jpg',
      label: { en: 'Case 02', ar: 'الحالة 02' },
      desc: { en: 'Jawline definition', ar: 'تحديد ملامح خط الفك' },
    },
    {
      id: 3,
      before: '/assets/images/face-female.jpg',
      after: '/assets/images/face-male.jpg',
      label: { en: 'Case 03', ar: 'الحالة 03' },
      desc: { en: 'Nasolabial fold correction', ar: 'تصحيح طيات الأنف الشفوية' },
    },
    {
      id: 4,
      before: '/assets/images/face-female.jpg',
      after: '/assets/images/face-male.jpg',
      label: { en: 'Case 04', ar: 'الحالة 04' },
      desc: { en: 'Overall skin tightening', ar: 'شد الجلد بالكامل' },
    },
    {
      id: 5,
      before: '/assets/images/face-female.jpg',
      after: '/assets/images/face-male.jpg',
      label: { en: 'Case 05', ar: 'الحالة 05' },
      desc: { en: 'Cheekbone enhancement', ar: 'إبراز عظام الوجنتين' },
    },
  ],

  instructions: {
    before: [
      { en: 'Avoid blood-thinning medications (e.g., Aspirin, Ibuprofen) for 72 hours.', ar: 'تجنب الأدوية المسيلة للدم (مثل الأسبرين، الإيبوبروفين) لمدة 72 ساعة.' },
      { en: 'Do not consume alcohol 24 hours prior to your session.', ar: 'امتنع عن تناول الكحوليات قبل الجلسة بـ 24 ساعة.' },
      { en: 'Arrive with a clean face, free of makeup or heavy skincare products.', ar: 'يُرجى الحضور بوجه نظيف خالٍ من المكياج أو منتجات العناية الثقيلة.' }
    ],
    after: [
      { en: 'Avoid strenuous exercise, saunas, and steam rooms for 48 hours.', ar: 'تجنب التمارين الشاقة، غرف الساونا والبخار لمدة 48 ساعة.' },
      { en: 'Do not massage or apply excessive pressure to the treated areas.', ar: 'لا تقم بتدليك أو الضغط بشدة على المناطق المعالجة.' },
      { en: 'Apply a broad-spectrum SPF 50+ daily and avoid direct sun exposure.', ar: 'استخدم واقي شمس واسع الطيف (+50 SPF) يومياً وتجنب التعرض المباشر للشمس.' }
    ]
  }
};

export default function TreatmentDetailPage() {
  const locale = useLocale() as 'en' | 'ar';
  const isArabic = locale === 'ar';
  const data = treatmentDetailMock;

  // States for Gallery & Slider
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const activeCase = data.beforeAfterCases[activeCaseIndex];

  // دالة لتغيير الحالة وإعادة تعيين شريط السحب للمنتصف
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
          href={`/${locale}/treatments`}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-stone-500 hover:text-[#A05C3C] transition-colors"
        >
          {isArabic ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          {isArabic ? 'العودة إلى محفظة العلاجات' : 'Back to Portfolio'}
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
              {data.category[locale]}
            </span>
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
            >
              {data.title[locale]}
            </h1>
            <p className="text-xl md:text-2xl font-light text-stone-600 mb-8 max-w-lg leading-relaxed">
              {data.tagline[locale]}
            </p>
            <Button className="rounded-full bg-[#A05C3C] hover:bg-[#8C4E33] text-white px-8 py-6 text-xs uppercase tracking-widest border-0">
              {isArabic ? 'احجز استشارتك لهذا العلاج' : 'Consult for this treatment'}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: luxuryEase }}
            className="w-[800px] h-[400px] rounded-2xl overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-stone-200 animate-pulse -z-10" />
            <Image
              width={500}
              height={500}
              src={data.heroImage}
              alt={data.title[locale]}
              className="w-full h-full object-cover"
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
            <h2
              className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
            >
              01. {isArabic ? 'كيف يعمل العلاج؟' : 'How it works'}
            </h2>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />
            <p className="text-stone-600 text-lg leading-relaxed font-light">
              {data.howItWorks[locale]}
            </p>
          </motion.div>

          {/* 2. When you will see results */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeInUp}
          >
            <h2
              className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
            >
              02. {isArabic ? 'متى تظهر النتائج؟' : 'When you will see results'}
            </h2>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />
            <p className="text-stone-600 text-lg leading-relaxed font-light">
            {data.whenResultsSeen[locale]}
            </p>
          </motion.div>

          {/* 3. What you will achieve */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeInUp}
          >
            <h2
              className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
            >
              03. {isArabic ? 'ماذا ستحقق؟' : 'What you will achieve'}
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
                    {achieve[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* 4. Products we use */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeInUp}
          >
            <h2
              className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
            >
              04. {isArabic ? 'المنتجات المستخدمة' : 'Products we use'}
            </h2>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {data.products.map((product, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white p-8 rounded-2xl border border-stone-200/50 flex flex-col items-center text-center hover:border-[#A05C3C]/50 transition-colors"
                >
                  <div className="w-32 h-32 mb-6 p-4 rounded-full bg-[#FAF7F2]">
                    <Image
                      width={500}
                      height={500}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">{product.name}</h3>
                  <p className="text-stone-500 text-sm font-light leading-relaxed">
                    {product.desc[locale]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 5. Before & After (Interactive Gallery) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10%' }}
            variants={fadeInUp}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <h2
                className={`text-3xl md:text-4xl font-semibold text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
              >
                05. {isArabic ? 'النتائج (قبل وبعد)' : 'Clinical Results'}
              </h2>
              <div className="flex gap-2 items-center text-xs uppercase tracking-widest text-stone-400 font-semibold bg-white px-4 py-2 rounded-full border border-stone-200 shadow-sm w-fit">
                <ArrowLeft className="w-3 h-3" /> {isArabic ? 'اسحب للتفاعل' : 'Drag to interact'}{' '}
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />

            {/* The Main Interactive Slider */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden group select-none bg-stone-200 mb-6"
              >
                {/* After Image (Background) */}
                <Image
                  width={500}
                  height={500}
                  src={activeCase.after}
                  alt="After Treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Before Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    clipPath: isArabic
                      ? `inset(0 0 0 ${100 - sliderPosition}%)`
                      : `inset(0 ${100 - sliderPosition}% 0 0)`,
                  }}
                >
                  <Image
                    width={500}
                    height={500}
                    src={activeCase.before}
                    alt="Before Treatment"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Slider Handle UI */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-xl">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-3 bg-stone-300 rounded-full" />
                      <div className="w-0.5 h-3 bg-stone-300 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Native Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-10"
                />

                {/* Labels */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none">
                  {isArabic ? (sliderPosition > 50 ? 'بعد' : 'قبل') : 'Before'}
                </div>
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full pointer-events-none">
                  {isArabic ? (sliderPosition <= 50 ? 'قبل' : 'بعد') : 'After'}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Title for the active case */}
            <div className="mb-6 flex justify-between items-center px-2">
              <h4 className="font-semibold text-stone-900">{activeCase.label[locale]}</h4>
              <span className="text-stone-500 text-sm">{activeCase.desc[locale]}</span>
            </div>

            {/* Thumbnails Gallery */}
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
              {data.beforeAfterCases.map((caseItem, index) => (
                <button
                  key={caseItem.id}
                  onClick={() => handleCaseChange(index)}
                  className={`relative flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden transition-all duration-300 snap-center
                    ${activeCaseIndex === index ? 'ring-2 ring-[#A05C3C] ring-offset-2 ring-offset-[#FAF7F2] opacity-100' : 'opacity-50 hover:opacity-100'}
                  `}
                >
                  {/* Split thumbnail: half before, half after to indicate the transformation */}
                  <Image
                    width={500}
                    height={500}
                    src={caseItem.after}
                    alt={caseItem.label[locale]}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 w-1/2 overflow-hidden border-r border-white/50">
                    <Image
                      width={500}
                      height={500}
                      src={caseItem.before}
                      className="w-full h-full object-cover max-w-none"
                      style={{ width: '200%' }}
                      alt={'jkjfskdjlfsdj'}
                    />
                  </div>

                  {/* Active Indicator Overlay */}
                  {activeCaseIndex === index && (
                    <div className="absolute inset-0 bg-[#A05C3C]/10" />
                  )}
                </button>
              ))}
            </div>

            <p className="text-center text-stone-400 text-sm mt-8 italic">
              {isArabic
                ? '*النتائج الموضحة أعلاه تختلف من حالة لأخرى حسب التقييم الطبي.'
                : '*Results shown may vary depending on individual clinical assessment.'}
            </p>
          </motion.div>
          
          {/* 6. Pre & Post Care Instructions (القسم الجديد المضاف) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-10%" }} variants={fadeInUp}>
            <h2 className={`text-3xl md:text-4xl font-semibold mb-6 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
              06. {isArabic ? 'إرشادات الرعاية' : 'Care Instructions'}
            </h2>
            <div className="h-px w-24 bg-[#A05C3C] mb-8" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Pre-Treatment Card */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200/50 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center">
                    <ClipboardList className="w-5 h-5 text-[#A05C3C]" />
                  </div>
                  <h3 className={`text-xl font-semibold text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
                    {isArabic ? 'قبل الجلسة' : 'Pre-Treatment'}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {data.instructions.before.map((inst, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A05C3C] mt-2.5 shrink-0 opacity-60" />
                      <span className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
                        {inst[locale]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Post-Treatment Card */}
              <div className="bg-white p-8 rounded-2xl border border-stone-200/50 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2] flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-[#A05C3C]" />
                  </div>
                  <h3 className={`text-xl font-semibold text-stone-900 ${!isArabic ? 'font-serif' : ''}`}>
                    {isArabic ? 'بعد الجلسة' : 'Post-Treatment'}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {data.instructions.after.map((inst, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A05C3C] mt-2.5 shrink-0 opacity-60" />
                      <span className="text-stone-600 font-light text-sm md:text-base leading-relaxed">
                        {inst[locale]}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Right Side: Sticky Appointment Action */}
        <div className="w-full lg:w-1/3 hidden lg:block">
          <div className="sticky top-32 bg-stone-900 p-10 rounded-2xl text-white shadow-2xl">
            <Sparkles className="w-8 h-8 text-[#A05C3C] mb-6" />
            <h3 className={`text-2xl font-bold mb-4 ${!isArabic ? 'font-serif' : ''}`}>
              {isArabic ? 'ابدأ رحلة تألقك' : 'Begin Your Journey'}
            </h3>
            <p className="text-stone-400 font-light text-sm leading-relaxed mb-8">
              {isArabic
                ? 'نحن هنا للإجابة على جميع استفساراتك وتصميم بروتوكول علاجي يبرز جمالك الاستثنائي.'
                : 'We are here to answer your questions and craft a bespoke protocol to unveil your exceptional beauty.'}
            </p>
            <Button className="w-full rounded-full bg-[#A05C3C] hover:bg-white hover:text-stone-900 transition-colors px-6 py-6 text-xs uppercase tracking-widest border-0">
              {isArabic ? 'احجز استشارتك المجانية' : 'Book Complimentary Consultation'}
            </Button>

            <div className="mt-8 pt-8 border-t border-stone-800 text-center">
              <span className="block text-stone-500 text-xs uppercase tracking-widest mb-2">
                {isArabic ? 'أو تواصل معنا مباشرة' : 'Or Contact Us Directly'}
              </span>
              <a
                href="tel:+123456789"
                className="text-xl font-serif hover:text-[#A05C3C] transition-colors"
              >
                +971 50 123 4567
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
