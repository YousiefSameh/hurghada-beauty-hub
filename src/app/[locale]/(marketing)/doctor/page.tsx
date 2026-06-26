'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Easing, motion } from 'framer-motion';
import {
  Award,
  GraduationCap,
  Stethoscope,
  Sparkles,
  Quote,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/atoms/button';
import Link from 'next/link';

// Mock Data for Dr. Alaa Zaki
const doctorData = {
  name: { en: 'Dr. Alaa Zaki', ar: 'د. ألاء زكي' },
  title: {
    en: 'Lead Aesthetic Practitioner & Founder',
    ar: 'مؤسس العيادة والمدير الطبي للتجميل',
  },
  heroImage: '/assets/images/dr.png', // تأكد من توفر هذه الصورة أو استبدل المسار
  quote: {
    en: 'True beauty is not about altering who you are, but revealing the masterpiece that already exists within you. Precision, safety, and artistry are the pillars of my practice.',
    ar: 'الجمال الحقيقي لا يكمن في تغيير ملامحك، بل في إبراز التحفة الفنية التي بداخلك بالفعل. الدقة، الأمان، واللمسة الفنية هي الركائز الأساسية لعملي.',
  },
  biography: {
    en: 'With over 15 years of dedicated experience in advanced aesthetic medicine, Dr. Alaa Zaki has established himself as a pioneer in non-surgical facial harmonization in Hurghada. Merging a profound understanding of facial anatomy with a refined artistic eye, he specializes in delivering bespoke, natural-looking results.\n\nGraduating with top honors and subsequently training under global leaders in aesthetic dermatology across Europe and the Middle East, Dr. Zaki constantly brings the latest, evidence-based clinical innovations to Hurghada Beauty Hub. His approach prioritizes patient safety, utilizing only FDA-approved injectables and state-of-the-art modalities to reverse the signs of aging while preserving your unique identity.',
    ar: 'بخبرة تزيد عن 15 عاماً من التفاني في مجال الطب التجميلي المتقدم، رسخ الدكتور الاء زكي مكانته كرائد في مجال التناسق الوجهي غير الجراحي في الغردقة. من خلال دمج الفهم العميق للتشريح الوجهي مع الرؤية الفنية الدقيقة، يتخصص في تقديم نتائج مخصصة وطبيعية المظهر.\n\nبعد تخرجه بمرتبة الشرف وتدربه على يد كبار أطباء الجلدية والتجميل في أوروبا والشرق الأوسط، يحرص د. زكي دائماً على جلب أحدث الابتكارات السريرية القائمة على الأدلة إلى عيادة الغردقة. يعطي نهجه الأولوية القصوى لسلامة المرضى، باستخدام الحقن المعتمدة من إدارة الغذاء والدواء (FDA) وأحدث الأجهزة لعكس علامات الشيخوخة مع الحفاظ على هويتك الفريدة وملامحك الأصلية.',
  },
  credentials: [
    {
      icon: GraduationCap,
      title: { en: 'Medical Degree', ar: 'الدرجة الطبية' },
      desc: { en: 'MD in Dermatology & Venereology', ar: 'دكتوراه في الأمراض الجلدية والتناسلية' },
    },
    {
      icon: Award,
      title: { en: 'Board Certified', ar: 'شهادة البورد' },
      desc: { en: 'American Board of Aesthetic Medicine', ar: 'البورد الأمريكي للطب التجميلي' },
    },
    {
      icon: Stethoscope,
      title: { en: 'Memberships', ar: 'العضويات' },
      desc: {
        en: 'Member of the European Society of Cosmetic Dentistry (ESCD)',
        ar: 'عضو الجمعية الأوروبية لطب التجميل',
      },
    },
  ],
  expertise: [
    {
      title: { en: 'Facial Harmonization', ar: 'التناسق الوجهي (Harmonization)' },
      desc: {
        en: 'Strategic placement of dermal fillers to balance profile and proportions.',
        ar: 'الاستخدام الاستراتيجي للفيلر لموازنة الملامح والنسب الجمالية.',
      },
    },
    {
      title: { en: 'Anti-Aging Injectables', ar: 'حقن مكافحة الشيخوخة' },
      desc: {
        en: 'Advanced Botox protocols for wrinkle reduction and facial lifting.',
        ar: 'بروتوكولات البوتوكس المتقدمة لتقليل التجاعيد وشد الوجه.',
      },
    },
    {
      title: { en: 'Biostimulators', ar: 'المحفزات الحيوية' },
      desc: {
        en: 'Collagen-inducing treatments like Radiesse and Sculptra for long-term youth.',
        ar: 'علاجات تحفيز الكولاجين مثل راديس وسكولبترا لشباب يدوم طويلاً.',
      },
    },
    {
      title: { en: 'Skin Rejuvenation', ar: 'تجديد شباب البشرة' },
      desc: {
        en: 'Mastering laser therapies and deep chemical peels for flawless skin.',
        ar: 'إتقان العلاجات بالليزر والتقشير الكيميائي العميق لبشرة خالية من العيوب.',
      },
    },
  ],
};

export default function DoctorPage() {
  const locale = useLocale() as 'en' | 'ar';
  const isArabic = locale === 'ar';
  const data = doctorData;

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
          {isArabic ? 'العودة للرئيسية' : 'Back to Home'}
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
                {isArabic ? 'الخبير الطبي' : 'Medical Expert'}
              </span>
            </div>

            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
            >
              {data.name[locale]}
            </h1>
            <p className="text-xl text-stone-500 mb-10 font-light tracking-wide">
              {data.title[locale]}
            </p>

            <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
              {data.biography[locale].split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12 flex items-center gap-6">
              <Button className="rounded-full bg-[#A05C3C] hover:bg-[#8C4E33] text-white px-8 py-6 text-xs uppercase tracking-widest border-0 shadow-xl shadow-[#A05C3C]/20">
                {isArabic ? 'احجز استشارتك مع الدكتور' : 'Book Consultation with Dr. Zaki'}
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
              {/* استبدل المسار أدناه بصورة الدكتور الحقيقية */}
              <Image
                src={data.heroImage}
                alt={data.name[locale]}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
              {/* لمسة فنية: إطار يحيط بالصورة */}
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
            className={`text-2xl md:text-4xl text-white leading-relaxed md:leading-snug font-light ${!isArabic ? 'font-serif' : ''}`}
          >
            &quot;{data.quote[locale]}&quot;
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#A05C3C]" />
            <span className="text-stone-400 text-sm tracking-widest uppercase">
              {data.name[locale]}
            </span>
            <div className="w-12 h-px bg-[#A05C3C]" />
          </div>
        </div>
      </section>

      {/* 3. Credentials & 4. Expertise */}
      <section className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Credentials Column */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              variants={fadeInUp}
            >
              <h2
                className={`text-3xl font-semibold mb-10 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
              >
                {isArabic ? 'الاعتمادات الطبية' : 'Medical Credentials'}
              </h2>
              <div className="space-y-8">
                {data.credentials.map((cred, idx) => {
                  const Icon = cred.icon;
                  return (
                    <div key={idx} className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full bg-white border border-stone-200 flex items-center justify-center shrink-0 shadow-sm">
                        <Icon className="w-5 h-5 text-[#A05C3C]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-stone-900 mb-1">
                          {cred.title[locale]}
                        </h3>
                        <p className="text-stone-500 font-light text-sm leading-relaxed">
                          {cred.desc[locale]}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Expertise Column */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10%' }}
              variants={staggerContainer}
            >
              <motion.h2
                variants={fadeInUp}
                className={`text-3xl font-semibold mb-10 text-stone-900 ${!isArabic ? 'font-serif' : ''}`}
              >
                {isArabic ? 'مجالات التخصص الدقيق' : 'Areas of Expertise'}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.expertise.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="bg-white p-8 rounded-2xl border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow group"
                  >
                    <div className="w-10 h-10 bg-[#FAF7F2] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#A05C3C] transition-colors">
                      <Sparkles className="w-5 h-5 text-[#A05C3C] group-hover:text-white transition-colors" />
                    </div>
                    <h3
                      className={`text-xl font-semibold text-stone-900 mb-3 ${!isArabic ? 'font-serif' : ''}`}
                    >
                      {item.title[locale]}
                    </h3>
                    <p className="text-stone-500 font-light leading-relaxed text-sm">
                      {item.desc[locale]}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section at the bottom */}
      <section className="container mx-auto px-6 md:px-12 mt-32">
        <div className="bg-stone-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#A05C3C] rounded-full blur-[120px] opacity-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-[120px] opacity-10" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2
              className={`text-3xl md:text-5xl text-white font-bold mb-6 ${!isArabic ? 'font-serif' : ''}`}
            >
              {isArabic ? 'مستعد لبدء رحلتك؟' : 'Ready to begin your journey?'}
            </h2>
            <p className="text-stone-400 font-light mb-10 text-lg">
              {isArabic
                ? 'احجز استشارتك الخاصة الآن مع د. الاء زكي واكتشف البروتوكول العلاجي الأنسب لك.'
                : 'Book your private consultation with Dr. Alaa Zaki today and discover your bespoke treatment protocol.'}
            </p>
            <Button className="rounded-full bg-white text-stone-900 hover:bg-[#A05C3C] hover:text-white transition-colors px-10 py-6 text-sm uppercase tracking-widest border-0">
              {isArabic ? 'تواصل معنا لحجز موعد' : 'Contact Us to Schedule'}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
