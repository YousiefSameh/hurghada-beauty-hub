'use client';

import { MessageCircle, Phone, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'; // ضفنا FaWhatsapp هنا
import { Button } from '../atoms/button';
import { useLocale } from 'next-intl';

export default function FloatingBtns() {
  const locale = useLocale()
  const [isSocialMenuOpen, setIsSocialMenuOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-[80%] md:left-[95%] z-30 flex w-fit flex-col items-center gap-3">
      {/* --- Expandable Social Menu --- */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 ease-out origin-bottom ${
          isSocialMenuOpen
            ? 'translate-y-0 opacity-100 scale-100 pointer-events-auto'
            : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
        }`}
      >
        {/* Facebook */}
        <Link
          href="https://www.facebook.com/profile.php?id=61576576883375"
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Facebook"
        >
          <FaFacebook className="h-5 w-5" fill="currentColor" />
        </Link>

        {/* Instagram */}
        <Link
          href="https://www.instagram.com/beautyhub.center/"
          target="_blank"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Instagram"
        >
          <FaInstagram className="h-5 w-5" />
        </Link>

        {/* WhatsApp - الزر الجديد */}
        <Link
          href="https://wa.me/201277702008"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="h-6 w-6" />
        </Link>

        {/* Phone Call - تعديل الأيقونة والرابط للاتصال المباشر */}
        <Link
          href="tel:+201277702008"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Call Us"
        >
          <Phone className="h-5 w-5" fill="currentColor" />
        </Link>
      </div>

      {/* --- Main Toggle Button --- */}
      <button
        onClick={() => setIsSocialMenuOpen(!isSocialMenuOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl hover:scale-105 transition-transform z-10"
        aria-label="Toggle Social Menu"
      >
        {isSocialMenuOpen ? (
          <X className="h-6 w-6 animate-in spin-in-90 duration-200" />
        ) : (
          <MessageCircle className="h-6 w-6 animate-in spin-out-90 duration-200" />
        )}
      </button>

      {/* --- Static Book Button --- */}
      <Button asChild className="flex h-14 w-14 items-center justify-center rounded-full bg-[#CD6C3E] text-white shadow-lg hover:scale-105 transition-transform text-[10px] font-bold uppercase tracking-wider z-10 mt-2">
        <Link href={`/${locale}#contact`}>
          Book
        </Link>
      </Button>
    </div>
  );
}