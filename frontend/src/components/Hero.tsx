'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompany } from '@/context/CompanyContext';
import { getSafeImageUrl } from '@/lib/imageHelper';

export default function Hero() {
  const { data } = useCompany();
  const settings = data.settings;

  // Resolve dynamic image path (backend URL, media rewrite, or public fallback)
  const heroImageSrc = getSafeImageUrl(settings.hero_image, '/images/hero/hero-craft-meat.jpg');

  return (
    <section className="relative bg-[#0d0e12] text-white overflow-hidden border-b border-[#252732]">
      {/* Background with Ambient Vignette & Real High-Res Photography */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src={heroImageSrc}
            alt="فرآورده‌های پروتئینی و گوشت گرم بی‌سان سام یزد"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35 scale-105 filter contrast-110"
          />
        </div>
        {/* Cinematic dark gradients for maximum legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/80 to-[#0d0e12]/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0e12] via-[#0d0e12]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Main Headline & Description */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-right">
            
            {/* Trust & Quality Badge - Single Clean Line on All Mobile Screens */}
            <div className="inline-flex items-center gap-2 bg-[#1b1c23]/95 border border-[#323542] rounded-full px-3.5 py-1.5 shadow-lg backdrop-blur-md max-w-full">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-gray-200 truncate max-w-[220px] xs:max-w-[280px] sm:max-w-none">
                {settings.hero_badge || 'کشتارگاه صنعتی دارای رتبه کیفی A+'}
              </span>
              <span className="text-[10px] sm:text-xs text-rose-400 font-extrabold pr-1.5 border-r border-gray-700 shrink-0">
                یزد
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.3] sm:leading-[1.25] tracking-tight">
              {settings.hero_title || 'تامین مستقیم و تخصصی گوشت گرم و فرآورده‌های پروتئینی با بالاترین استاندارد بهداشتی کشور'}
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
              {settings.hero_subtitle || 'تأمین پایدار انواع گوشت گرم گوساله، گوسفندی، شتر ممتاز یزد و ماکیان؛ پایش برخط زنجیره سرمایش و توزیع روزانه برای هتل‌ها، رستوران‌ها، سازمان‌ها و خانوار.'}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/products"
                className="btn-primary-meat px-7 py-3.5 text-sm sm:text-base font-extrabold shadow-xl shadow-rose-950/60"
              >
                <span>کاتالوگ و برش‌های تخصصی</span>
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <Link
                href="/contact"
                className="btn-secondary-dark px-6 py-3.5 text-sm sm:text-base font-bold"
              >
                <span>استعلام قیمت عمده و قرارداد B2B</span>
              </Link>
            </div>

            {/* Veterinary & Security Markers */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>پروانه بهداشتی {settings.veterinary_code}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>نشان حلال ملی</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>زنجیره سرد ۰ تا ۲ درجه</span>
              </div>
            </div>

          </div>

          {/* Featured Visual Card with High-Res Cut Showcase */}
          <div className="lg:col-span-5 animate-fadeIn">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle ambient luxury glow behind card */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-900/30 to-amber-700/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

              <div className="relative rounded-3xl overflow-hidden bg-[#14151a] border border-[#2b2d39] p-3 sm:p-4 shadow-2xl shadow-black/80">
                
                {/* Product Image */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden bg-black/40 group">
                  <Image
                    src={heroImageSrc}
                    alt="برش ممتاز گوشت گوساله و گوسفندی"
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Floating badges on image */}
                  <div className="absolute top-3.5 right-3.5 left-3.5 flex items-center justify-between pointer-events-none z-10">
                    <span className="badge-fresh shadow-lg">
                      تضمین تازگی کشتار روز
                    </span>
                    <span className="badge-cold shadow-lg">
                      پایش برودت IoT
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 left-3 bg-[#0d0e12]/85 backdrop-blur-md border border-white/10 rounded-2xl p-3 flex items-center justify-between text-white">
                    <div>
                      <div className="text-[10px] text-gray-400 font-medium">نظارت مداوم بهداشتی</div>
                      <div className="text-xs sm:text-sm font-bold text-white">سازمان دامپزشکی کشور</div>
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-gray-400 font-medium">سنسور برخط دما</div>
                      <div className="text-xs sm:text-sm font-bold text-sky-400 font-mono" dir="ltr">+1.8°C</div>
                    </div>
                  </div>
                </div>

                {/* Sub-strip with 3 key assurances - Seamless Glass Ribbon */}
                <div className="flex items-center justify-around pt-3 text-center text-xs divide-x divide-x-reverse divide-white/10">
                  <div className="flex-1 px-1">
                    <div className="text-[10px] text-gray-400">بسته‌بندی</div>
                    <div className="text-xs font-bold text-rose-300 mt-0.5">اتمسفر MAP</div>
                  </div>
                  <div className="flex-1 px-1">
                    <div className="text-[10px] text-gray-400">ذبح</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">شرعی ۱۰۰٪</div>
                  </div>
                  <div className="flex-1 px-1">
                    <div className="text-[10px] text-gray-400">حمل اختصاصی</div>
                    <div className="text-xs font-bold text-amber-300 mt-0.5">ناوگان سردخانه‌ای</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Corporate Key Trust Ribbon - Spacious & Prestigious (NO clunky bourse boxes) */}
        <div className="mt-12 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/10">
            <div className="text-center sm:text-right px-2 sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-4xl font-black text-rose-400 font-mono tracking-tight">
                {settings.annual_tonnage || '۱۲,۰۰۰+ تن'}
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-bold mt-1.5">ظرفیت تامین سالانه پروتئین</div>
              <div className="text-[11px] text-gray-400 mt-0.5">توزیع کشوری و استانی پایدار</div>
            </div>

            <div className="text-center sm:text-right px-2 sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-4xl font-black text-sky-400 font-mono tracking-tight">
                {settings.active_centers || '۱۸۰+ مرکز'}
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-bold mt-1.5">مراکز درمانی و ارگانی طرف قرارداد</div>
              <div className="text-[11px] text-gray-400 mt-0.5">بیمارستان‌ها، هتل‌ها و نهادها</div>
            </div>

            <div className="text-center sm:text-right px-2 sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                {settings.cold_chain_temp || '۰ تا ۲+ درجه'}
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-bold mt-1.5">پایش پیوسته زنجیره سرمایش</div>
              <div className="text-[11px] text-gray-400 mt-0.5">سنسورهای هوشمند IoT</div>
            </div>

            <div className="text-center sm:text-right px-2 sm:px-4 pt-4 sm:pt-0">
              <div className="text-2xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                {settings.satisfaction_rate || '۹۹.۴٪'}
              </div>
              <div className="text-xs sm:text-sm text-gray-200 font-bold mt-1.5">شاخص کیفی و رضایت مشتریان</div>
              <div className="text-[11px] text-gray-400 mt-0.5">بر اساس ارزیابی ادواری خریداران</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
