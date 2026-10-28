"use client";

import React from "react";
import { SiteSetting, KeyStat } from "@/types/company";
import { ShieldCheck, Calculator, FileDown, CheckCircle2, Flame, Award, ArrowDownLeft } from "lucide-react";

interface HeroProps {
  settings: SiteSetting;
  stats: KeyStat[];
}

export default function Hero({ settings, stats }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden grid-bg">
      {/* Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-600/15 to-amber-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-600/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Header */}
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/40 border border-orange-500/30 text-orange-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <Award className="w-4 h-4 text-orange-400" />
            <span>{settings.hero_badge}</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            {settings.hero_title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
            {settings.hero_subtitle}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 border border-orange-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ShieldCheck className="w-5 h-5" />
              <span>استعلام فنی و مشاوره مهندسی</span>
            </a>

            <a
              href="#calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-base text-slate-200 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 hover:border-orange-500/50 shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Calculator className="w-5 h-5 text-orange-400" />
              <span>محاسبه‌گر مقایسه هاردوکس</span>
            </a>

            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 transition"
            >
              <span>مشاهده انواع تایل‌ها و فرم‌ها</span>
              <ArrowDownLeft className="w-4 h-4 text-orange-400" />
            </a>
          </div>

          {/* Quick verification bullets */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-6 max-w-2xl mx-auto">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              تأییدیه رسمی پژوهش متالورژی رازی
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              آزمون استانداردهای ASTM C373 و ISO
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              ۱۰+ سال رضایت‌نامه از فولادسازی‌ها
            </span>
          </div>

        </div>

        {/* Live Key Stats Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-orange-500/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10 group"
            >
              <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300 mb-1 group-hover:scale-105 transition-transform" dir="ltr">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-200 mb-1 leading-snug">
                {stat.label}
              </span>
              {stat.sublabel && (
                <span className="text-[10px] sm:text-[11px] text-slate-400 leading-tight">
                  {stat.sublabel}
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
