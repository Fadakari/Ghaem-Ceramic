'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompany } from '@/context/CompanyContext';
import { getSafeImageUrl } from '@/lib/imageHelper';
import ScrollReveal from '@/components/ScrollReveal';

export default function Hero() {
  const { data } = useCompany();
  const settings = data.settings;

  // Resolve dynamic image path (backend URL, media rewrite, or public fallback)
  const heroImageSrc = getSafeImageUrl(settings.hero_image, '/images/hero/hero-craft-meat.jpg');

  return (
    <section className="relative bg-[#0a0b0e] text-white overflow-hidden border-b border-white/5">
      {/* Background with Ambient Vignette & High-Res Photography */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src={heroImageSrc}
            alt="فرآورده‌های پروتئینی و گوشت گرم بی‌سان سام یزد"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 filter contrast-115"
          />
        </div>
        {/* Soft luxury ambient gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-[#0a0b0e]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e] via-[#0a0b0e]/95 to-transparent" />
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-rose-900/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Main Headline & Description */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-right">
            
            <ScrollReveal direction="up" delay={50}>
              {/* Trust Badge - Single Clean Minimalist Pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
                <span className="flex h-2 w-2 relative shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-gray-200">
                  {settings.hero_badge || 'کشتارگاه صنعتی رتبه کیفی A+'}
                </span>
                <span className="text-xs text-rose-400 font-extrabold pr-2 border-r border-white/10">
                  یزد
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              {/* Main Title - Powerful & Elegant */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.25] sm:leading-[1.2] tracking-tight">
                {settings.hero_title || 'تامین مستقیم و تخصصی گوشت گرم و فرآورده‌های پروتئینی'}
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={250}>
              {/* Subtitle - Crisp and Breathing */}
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
                {settings.hero_subtitle || 'تأمین پایدار انواع گوشت گرم گوساله، گوسفندی، شتر ممتاز یزد و ماکیان؛ پایش برخط زنجیره سرمایش و توزیع روزانه برای هتل‌ها، رستوران‌ها، سازمان‌ها و خانوار.'}
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={350}>
              {/* Minimalist CTA Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
                <Link
                  href="/products"
                  className="btn-primary-meat px-8 py-4 text-sm sm:text-base font-bold shadow-2xl shadow-rose-950/60"
                >
                  <span>کاتالوگ و برش‌های تخصصی</span>
                  <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary-dark px-7 py-4 text-sm sm:text-base font-bold"
                >
                  <span>استعلام تامین عمده و B2B</span>
                </Link>
              </div>
            </ScrollReveal>

          </div>

          {/* Featured Visual Card - Pure Culinary Minimalism */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left" delay={200}>
              <div className="relative mx-auto max-w-md lg:max-w-none group">
                
                {/* Ambient glow behind visual */}
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-900/30 to-amber-700/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition duration-1000 pointer-events-none" />

                <div className="relative rounded-3xl overflow-hidden bg-[#121317] border border-white/10 p-3 sm:p-3.5 shadow-2xl shadow-black/90">
                  
                  {/* Photo Container */}
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-black/50">
                    <Image
                      src={heroImageSrc}
                      alt="برش ممتاز گوشت گوساله و گوسفندی"
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                    
                    {/* Top Floating Badge */}
                    <div className="absolute top-4 right-4 left-4 flex items-center justify-between pointer-events-none z-10">
                      <span className="badge-fresh shadow-xl">
                        تضمین تازگی کشتار روز
                      </span>
                      <span className="badge-cold shadow-xl">
                        زنجیره سرمایش ۰-۲°C
                      </span>
                    </div>

                    {/* Frosted Bottom Pill */}
                    <div className="absolute bottom-4 right-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-3.5 flex items-center justify-between text-white shadow-xl">
                      <div>
                        <div className="text-[10px] text-gray-400 font-medium">نظارت مقیم بهداشتی</div>
                        <div className="text-xs sm:text-sm font-bold text-white mt-0.5">سازمان دامپزشکی کشور</div>
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-gray-400 font-medium">پایش برخط برودت</div>
                        <div className="text-xs sm:text-sm font-bold text-sky-400 font-mono mt-0.5" dir="ltr">+1.8°C IoT</div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Corporate Trust Ribbon - Spacious & Prestigious (NO clunky bourse boxes) */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-14 sm:mt-24 pt-8 sm:pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-white/10">
              <div className="text-center sm:text-right px-2 sm:px-6 pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-rose-400 font-mono tracking-tight">
                  {settings.annual_tonnage || '۱۲,۰۰۰+ تن'}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-bold mt-2">ظرفیت تامین سالانه پروتئین</div>
                <div className="text-[11px] text-gray-400 mt-1">توزیع کشوری و استانی پایدار</div>
              </div>

              <div className="text-center sm:text-right px-2 sm:px-6 pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-sky-400 font-mono tracking-tight">
                  {settings.active_centers || '۱۸۰+ مرکز'}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-bold mt-2">مراکز درمانی و هورکا طرف قرارداد</div>
                <div className="text-[11px] text-gray-400 mt-1">بیمارستان‌ها، هتل‌ها و رستوران‌ها</div>
              </div>

              <div className="text-center sm:text-right px-2 sm:px-6 pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono tracking-tight">
                  {settings.cold_chain_temp || '۰ تا ۲+ درجه'}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-bold mt-2">پایش پیوسته زنجیره سرمایش</div>
                <div className="text-[11px] text-gray-400 mt-1">سنسورهای هوشمند IoT</div>
              </div>

              <div className="text-center sm:text-right px-2 sm:px-6 pt-4 sm:pt-0">
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tracking-tight">
                  {settings.satisfaction_rate || '۹۹.۴٪'}
                </div>
                <div className="text-xs sm:text-sm text-gray-200 font-bold mt-2">شاخص رضایت کیفی مشتریان</div>
                <div className="text-[11px] text-gray-400 mt-1">بر اساس ارزیابی ادواری خریداران</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
