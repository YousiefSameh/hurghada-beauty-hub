'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/atoms/button';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 1. Background Image & Overlays */}
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

      {/* Gradient/Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/40 via-primary/20 to-transparent" />

      {/* 2. Main Content Container */}
      <div className="relative z-10 flex h-full w-full flex-col pt-14 justify-center px-8 md:px-16 lg:px-32 max-w-[1600px] mx-auto">
        {/* Main Headings */}
        <div className="max-w-4xl">
          <h1 className="font-serif italic text-[42px] font-black sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[1.1] text-white drop-shadow-sm">
            Timeless Beauty.
            <br />
            <span className="text-primary">World-Class</span> Care.
          </h1>
        </div>

        {/* Paragraph */}
        <p className="mt-6 max-w-2xl text-base md:text-lg text-white font-light leading-relaxed">
          Experience a new standard of aesthetic care in{' '}
          <strong className="font-bold">Hurghada Beauty Hub</strong>, where advanced treatments,
          medical expertise, and personalized attention come together to enhance your natural beauty
          with confidence and elegance.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Button className="w-full sm:w-auto rounded-full px-8 py-7 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2 border-0 cursor-pointer">
            Book Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <Button
            variant="outline"
            className="w-full sm:w-auto rounded-full bg-transparent border-white/50 text-white hover:bg-white hover:text-primary px-8 py-7 text-xs sm:text-sm font-semibold tracking-widest uppercase transition-all backdrop-blur-sm cursor-pointer"
          >
            View Treatments
          </Button>
        </div>
      </div>
    </section>
  );
}
