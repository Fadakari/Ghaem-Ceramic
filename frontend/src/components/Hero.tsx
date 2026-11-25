'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompany } from '@/context/CompanyContext';
import { getSafeImageUrl } from '@/lib/imageHelper';
import ScrollReveal from '@/components/ScrollReveal';

export default function Hero() {
  const { data } = useCompany();
  const settings = data.settings;

  // Resolve multiple hero slide images from backend bundle
  const slides = useMemo(() => {
    const list: string[] = [];
    if (settings.hero_images && settings.hero_images.length > 0) {
      settings.hero_images.forEach((img) => {
        if (img && img.trim()) list.push(getSafeImageUrl(img));
      });
    } else {
      if (settings.hero_image) list.push(getSafeImageUrl(settings.hero_image));
      if (settings.hero_image_2) list.push(getSafeImageUrl(settings.hero_image_2));
      if (settings.hero_image_3) list.push(getSafeImageUrl(settings.hero_image_3));
    }

    // Deduplicate
    const unique = Array.from(new Set(list));
    if (unique.length > 0) return unique;

    // Fallbacks if backend has none
    return [
      '/images/hero/hero-craft-meat.jpg',
      '/images/hero/hero-beef-ribeye.jpg',
      '/images/facilities/facility-1.jpg',
    ];
  }, [settings.hero_images, settings.hero_image, settings.hero_image_2, settings.hero_image_3]);

  // Current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll slides every 5.5 seconds
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full overflow-hidden select-none flex flex-col justify-between min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] bg-[#0a0b0e]">
      
      {/* 
        Full-Width Auto-Sliding Dynamic Background Photography (Backend Powered)
        Smooth crossfade between slides with scale micro-transition
      */}
      <div className="absolute inset-0 z-0">
        {slides.map((src, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={`${src}-${idx}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={src}
                alt={settings.company_name || 'صنایع گوشت بی‌سان سام یزد'}
                fill
                priority={idx === 0}
                sizes="100vw"
                className={`object-cover object-center brightness-95 contrast-105 transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}
        
        {/* 
          Smart Directional Contrast Gradients:
          Heavy dark vignette on the right for Persian text clarity,
          subtle vignette overall to preserve photography vibrancy
        */}
        <div className="absolute inset-0 z-20 bg-gradient-to-l from-black/95 via-black/65 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* 
        Main Content Container:
        Sits in normal document flow with comfortable padding.
        The action buttons are completely separate and have natural vertical distance above the ribbon!
      */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-14 sm:pt-20 lg:pt-24 pb-8 sm:pb-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl space-y-5 text-right">
          
          {/* Trust Badge Pill */}
          <ScrollReveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1 shadow-lg">
              <span className="flex h-2.5 w-2.5 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-gray-100">
                {settings.hero_badge || 'کشتارگاه صنعتی رتبه کیفی A+ یزد'}
              </span>
              <span className="text-xs text-rose-400 font-extrabold pr-2 border-r border-white/20">
                نظارت مقیم دامپزشکی
              </span>
            </div>
          </ScrollReveal>

          {/* Main Headline - Bold, Crisp & High-Contrast */}
          <ScrollReveal direction="up" delay={150}>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.2] sm:leading-[1.18] tracking-tight drop-shadow-md">
              {settings.hero_title || 'تامین مستقیم و تخصصی گوشت گرم و فرآورده‌های پروتئینی'}
            </h1>
          </ScrollReveal>

          {/* Subtitle with High Readability */}
          <ScrollReveal direction="up" delay={250}>
            <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed font-normal drop-shadow max-w-2xl">
              {settings.hero_subtitle || 'تولید، قطعه‌بندی بهداشتی و بسته‌بندی در اتمسفر اصلاح‌شده (MAP) با حفظ زنجیره سرد ۰ تا ۲+ درجه سانتی‌گراد؛ تامین پایدار هتل‌ها، بیمارستان‌ها، هایپرمارکت‌ها و خانوار.'}
            </p>
          </ScrollReveal>

          {/* Action Buttons - Always above the ribbon with distinct natural spacing */}
          <ScrollReveal direction="up" delay={350}>
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/products"
                className="btn-primary-meat px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold shadow-2xl shadow-rose-950/80"
              >
                <span>مشاهده محصولات و برش‌ها</span>
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/services"
                className="px-7 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5"
              >
                <span>استعلام تامین عمده و B2B</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* Interactive Slide Indicator Dots */}
          {slides.length > 1 && (
            <div className="pt-2 flex items-center gap-2">
              <span className="text-[11px] text-gray-400 ml-1 font-medium">تصاویر کارخانه و فرآوری:</span>
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`نمایش اسلاید ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentSlide
                      ? 'w-7 bg-[#c21414] shadow-md shadow-rose-900/60'
                      : 'w-2 bg-white/35 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          )}

        </div>
      </div>

      {/* 
        Bottom Section:
        1. Metrics Ribbon (hidden on small mobile, visible on tablet/desktop)
        2. Organic Wave Separator - Smoothly curves into the white categories section!
      */}
      <div className="relative z-30 w-full mt-auto">
        
        {/* Quick Metrics Ribbon */}
        <div className="w-full bg-black/70 backdrop-blur-md border-t border-white/10 py-3 sm:py-4 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-4 gap-4 divide-x divide-x-reverse divide-white/10 text-center">
              
              <div className="px-2">
                <span className="text-base sm:text-xl font-black text-rose-400 font-mono">
                  {settings.annual_tonnage || '۱۲,۰۰۰+ تن'}
                </span>
                <span className="text-xs text-gray-300 block font-medium mt-0.5">ظرفیت تامین سالانه</span>
              </div>

              <div className="px-2">
                <span className="text-base sm:text-xl font-black text-sky-400 font-mono">
                  {settings.active_centers || '۱۸۰+ مرکز'}
                </span>
                <span className="text-xs text-gray-300 block font-medium mt-0.5">مراکز درمانی و هورکا</span>
              </div>

              <div className="px-2">
                <span className="text-base sm:text-xl font-black text-emerald-400 font-mono">
                  {settings.cold_chain_temp || '۰ تا ۲+ °C'}
                </span>
                <span className="text-xs text-gray-300 block font-medium mt-0.5">پایش برخط زنجیره سرد</span>
              </div>

              <div className="px-2">
                <span className="text-base sm:text-xl font-black text-amber-300 font-mono">
                  {settings.satisfaction_rate || '۹۹.۴٪'}
                </span>
                <span className="text-xs text-gray-300 block font-medium mt-0.5">شاخص رضایت کیفی</span>
              </div>

            </div>
          </div>
        </div>

        {/* 
          Organic Wave Separator:
          Seamlessly bridges the dark cinematic hero into the clean white background of the next section!
        */}
        <div className="relative w-full overflow-hidden leading-none -mb-[1px]">
          <svg
            viewBox="0 0 1440 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative block w-full h-6 sm:h-10 lg:h-14 preserve-3d"
            preserveAspectRatio="none"
          >
            {/* Subtle translucent wave layer for depth */}
            <path
              d="M0,20 C320,50 560,5 820,32 C1080,60 1280,15 1440,26 L1440,64 L0,64 Z"
              fill="rgba(255, 255, 255, 0.15)"
            />
            {/* Main clean white wave that matches section 2 background */}
            <path
              d="M0,32 C340,64 620,12 900,42 C1160,70 1340,24 1440,36 L1440,64 L0,64 Z"
              fill="#ffffff"
            />
          </svg>
        </div>

      </div>

    </section>
  );
}
