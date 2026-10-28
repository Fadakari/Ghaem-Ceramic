"use client";

import React from "react";
import { InstallationMethod } from "@/types/company";
import { Wrench, Flame, ShieldAlert, CheckCircle, AlertTriangle } from "lucide-react";

interface InstallationSectionProps {
  methods: InstallationMethod[];
}

export default function InstallationSection({ methods }: InstallationSectionProps) {
  return (
    <section id="installation" className="py-20 lg:py-28 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>خدمات مهندسی و اجرای در محل</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            روش‌های استاندارد نصب و لاینینگ صنعتی
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            اجرای بدون نقص و ماندگاری چندین ساله سرامیک‌ها وابسته به روش نصب صحیح است. متخصصان قائم کلیه مراحل طراحی، آماده‌سازی سطح و نصب را به ۳ روش استاندارد اجرا می‌نمایند.
          </p>
        </div>

        {/* 3 Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {methods.map((method, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-5 font-mono font-black text-lg">
                  0{idx + 1}
                </div>

                <h3 className="text-lg font-black text-white mb-2">
                  {method.title}
                </h3>

                <h4 className="text-xs font-bold text-amber-400 mb-4">
                  {method.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {method.description}
                </p>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-xs text-slate-300 font-normal">
                <span className="text-orange-400 font-bold block mb-1.5 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  الزامات مهندسی و شرایط فنی:
                </span>
                {method.specifications}
              </div>
            </div>
          ))}
        </div>

        {/* Important Engineering Cautions Banner (Direct from catalog page 28) */}
        <div className="bg-gradient-to-r from-orange-950/40 via-slate-900 to-amber-950/30 border border-orange-500/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6 text-orange-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-bold text-white mb-1">
              نکته کلیدی مهندسی در انتقال مواد داغ (گندله، آهن اسفنجی و کلینکر):
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              در سطوحی که ذرات داغ درشت‌دانه عبور می‌کنند، به علت نیاز سرامیک‌ها به فضای انقباض و انبساط حرارتی، درزهای انبساطی (Expansion Joints) توسط تیم مهندسی قائم محاسبه و لحاظ می‌گردد و چسب صرفاً جهت درپوش‌ها اعمال می‌شود.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition"
          >
            مشاوره تخصصی نصب
          </a>
        </div>

      </div>
    </section>
  );
}
