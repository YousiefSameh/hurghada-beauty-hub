import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata';
import ContactSection from '@/components/sections/ContactSection';
import DoctorSection from '@/components/sections/DoctorSection';
import HeroSection from '@/components/sections/HeroSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TreatmentsSection from '@/components/sections/TreatmentsSection';
import { setRequestLocale } from 'next-intl/server';
import { Locale } from '@/config/locales.config';
import { headers } from 'next/headers';

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const currentLocale = (headerList.get('x-next-intl-locale') as Locale) || 'en';

  const titles = {
    en: 'Hurghada Beauty Hub | Premier Aesthetic & Skin Center',
    ar: 'بيوتي هب الغردقة | المركز الرائد للتجميل والعناية بالبشرة',
    de: 'Hurghada Beauty Hub | Erstklassiges Ästhetik- & Hautzentrum',
    fr: 'Hurghada Beauty Hub | Centre d\'Esthétique & Soins de la Peau',
    pl: 'Hurghada Beauty Hub | Luksusowe Centrum Estetyki i Pielęgnacji Skóry',
    ru: 'Hurghada Beauty Hub | Премиум Центр Эстетики и Ухода за Кожей'
  };

  const descriptions = {
    en: 'Hurghada Beauty Hub is the leading aesthetic center in Hurghada. Expert treatments for Botox, dermal fillers, HydraFacial, and luxury skin rejuvenation.',
    ar: 'مركز بيوتي هب الغردقة (Hurghada Beauty Hub) هو المركز الرائد للتجميل والعناية بالبشرة بالغردقة. أحدث جلسات البوتوكس، الفيلر، الهايدرافيشل، وتجديد حيويتها.',
    de: 'Hurghada Beauty Hub ist das führende Ästhetikzentrum in Hurghada. Experten für Botox, Filler, HydraFacial und Hautverjüngung.',
    fr: 'Hurghada Beauty Hub est le premier centre d\'esthétique à Hurghada. Soins experts en Botox, fillers, HydraFacial et rajeunissement de la peau.',
    pl: 'Hurghada Beauty Hub to wiodące centrum estetyki w Hurghadzie. Eksperci w dziedzinie botoksu, wypełniaczy, HydraFacial i odmładzania skóry.',
    ru: 'Hurghada Beauty Hub — ведущий центр эстетики в Хургаде. Ботокс, филлеры, HydraFacial и профессиональный уход за кожей.'
  };

  const keywords = [
    'Hurghada Beauty Hub',
    'Beauty Hub Hurghada',
    'HurghadaBeautyHub',
    'Beauty Hub Clinic',
    'Beauty Hub Center',
    'بيوتي هب الغردقة',
    'مركز بيوتي هب',
    'عيادة بيوتي هب',
    'عياده بيوتي هب الغردقه',
    'بيوتي هب تجميل',
  
    'احسن مكان بوتوكس في الغردقة',
    'افضل عيادة تجميل في الغردقة',
    'فيلر شفايف الغردقة',
    'افضل دكتورة تجميل الغردقة',
    'تنظيف بشرة عالي الغردقة',
    'نضارة البشرة الغردقة',
    'جلسات هايدرافيشل الغردقة',
    'علاج تجاعيد الوش',
    'حقن فيلر وبوتوكس',
    'عيادات تجميل الممشي السياحي',
    'ارخص بوتوكس في الغردقة',
    'دكتور تجميل شاطر الغردقة',
    'beauty clinic el mamsha',
    'botox fel ghardaqah',
    'filler el ghardaqah',
  
    'Best beauty clinic in Hurghada',
    'Botox in Hurghada',
    'Lips filler Hurghada',
    'Dermal fillers Hurghada',
    'HydraFacial Hurghada',
    'Skin care Hurghada',
    'Deep facial cleansing Hurghada',
    'Best doctor for botox Hurghada',
    'Anti aging clinic Hurghada',
    'Aesthetic clinic Hurghada',
    'Hurghada skin rejuvenation',
    'Beauty salon Hurghada',
    'Cosmetology Hurghada',
    'Cheap botox Hurghada',
    'Aesthetic doctor near me Hurghada',
    'Hurghada medical tourism beauty',
    'Top rated skin clinic Hurghada',
  
    'Botox Hurghada',
    'Lippen aufspritzen Hurghada',
    'Gesichtsbehandlung Hurghada',
    'Hyaluronsäure Hurghada',
    'Faltenbehandlung Hurghada',
    'Schönheitsklinik Hurghada',
    'Hautpflege Hurghada',
    'Kosmetikstudio Hurghada',
    'Beste Schönheitsklinik Hurghada',
  
    'Ботокс Хургада',
    'Филлеры Хургада',
    'Чистка лица Хургада',
    'Косметолог Хургада',
    'У увеличение губ Хургада',
    'Салон красоты Хургада',
    'Омоложение кожи Хургада',
    'Клиника эстетической медицины Хургада',
  
    'Injections Botox Hurghada',
    'Soins du visage Hurghada',
    'Clinique esthetique Hurghada',
    'Botoks Hurghada',
    'Wypełniacze Hurghada',
    'Pielęgnacja twarzy Hurghada'
  ]

  return generatePageMetadata({
    title: titles[currentLocale],
    description: descriptions[currentLocale],
    alternates: {
      canonical: currentLocale === 'en' ? `https://hurghadabeautyhub.com` : `https://${currentLocale}.hurghadabeautyhub.com`,
      languages: {
        en: `https://hurghadabeautyhub.com`,
        ar: `https://ar.hurghadabeautyhub.com`,
        de: `https://de.hurghadabeautyhub.com`,
        fr: `https://fr.hurghadabeautyhub.com`,
        pl: `https://pl.hurghadabeautyhub.com`,
        ru: `https://ru.hurghadabeautyhub.com`,
      },
    },
    keywords,
    openGraph: {
      title: titles[currentLocale],
      description: descriptions[currentLocale],
      url: currentLocale === 'en' ? `https://hurghadabeautyhub.com` : `https://${currentLocale}.hurghadabeautyhub.com`,
    }
  });
}

export default async function LocalizedHomePage() {
  const headerList = await headers();
  const locale = (headerList.get('x-next-intl-locale') as Locale) || 'en';
  setRequestLocale(locale);

  return (
    <main>
      <HeroSection />
      <TreatmentsSection />
      <DoctorSection />
      <ServicesSection />
      <ReviewsSection />
      <ContactSection />
    </main>
  );
}