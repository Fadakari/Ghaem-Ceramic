"use client";

import React, { useState } from "react";
import { Check, X, ShieldAlert, Award, Zap, Flame, Droplets, Layers } from "lucide-react";

export default function InteractiveComparison() {
  const comparisonItems = [
    {
      title: "سختی در مقیاس موهس (Mohs Hardness)",
      ceramicValue: "سختی 9 Mohs (نزدیک‌ترین سختی به الماس)",
      ceramicScore: 90,
      hardoxValue: "سختی 5.5 الی 6 Mohs (معادل 500 برینل)",
      hardoxScore: 55,
      description: "سرامیک آلومینا عملاً توسط کانی‌های سخت معدنی نظیر کوارتز، سنگ آهن و کلینکر خط برنمی‌دارد.",
    },
    {
      title: "پایداری در حرارت مداوم و شوک حرارتی",
      ceramicValue: "تا 800 درجه سانتی‌گراد پایداری کامل",
      ceramicScore: 95,
      hardoxValue: "افت شدید سختی و تخریب فازی بالای 250°C",
      hardoxScore: 30,
      description: "در شوتهای عبور گندله و آهن اسفنجی داغ، فولادهای ضد سایش به سرعت نرم شده و دفرمه می‌شوند.",
    },
    {
      title: "مقاومت در برابر اسید، باز و رطوبت خورنده",
      ceramicValue: "100% مقاوم (فاقد میل ترکیب با اکسیژن)",
      ceramicScore: 100,
      hardoxValue: "آسیب‌پذیر، اکسیداسیون و خوردگی سریع فلز",
      hardoxScore: 25,
      description: "اکسید آلومینیوم (Al2O3) در محیط‌های مرطوب، اسیدی و قلیایی کاملاً خنثی بوده و دچار زنگ‌زدگی نمی‌شود.",
    },
    {
      title: "چگالی و وزن بار مرده روی سازه کارخانه",
      ceramicValue: "3.6 g/cm³ (بیش از 50% سبک‌تر از فولاد)",
      ceramicScore: 90,
      hardoxValue: "7.8 g/cm³ (فشار سنگین بر شاسی و الکتروموتور)",
      hardoxScore: 40,
      description: "کاهش بار استاتیکی و دینامیکی شوت‌ها، هاپرها و لوله‌ها، استهلاک شاسی و سازه نگهدارنده را کاهش می‌دهد.",
    },
    {
      title: "طول عمر مستند در کارخانجات فولادسازی",
      ceramicValue: "حداقل 4 الی 5 برابر طول عمر بیشتر",
      ceramicScore: 95,
      hardoxValue: "نیازمند تعویض‌های مکرر هر چند ماه",
      hardoxScore: 20,
      description: "بر اساس رضایت‌نامه‌های رسمی سیرجان و بافق، تعویض‌های مکرر سالیانه به صفر نزدیک شده است.",
    },
  ];

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-10 card-clean-shadow w-full max-w-full overflow-hidden">
      
      <div className="max-w-2xl mb-8">
        <span className="badge-glossy-orange px-3 py-1 rounded-md text-xs font-bold font-mono uppercase mb-2 inline-block">
          ENGINEERING COMPARISON MATRIX
        </span>
        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
          مقایسه علمی سرامیک ضد سایش قائم با فولاد هاردوکس
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
          چرا صنایع پیشرو کشور پوشش‌های سرامیکی آلومینایی را به عنوان جایگزین قطعی ورق‌های هاردوکس انتخاب می‌کنند؟
        </p>
      </div>

      <div className="space-y-6">
        {comparisonItems.map((item, idx) => (
          <div
            key={idx}
            className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-orange-200 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                {item.title}
              </h4>
              <span className="text-[11px] text-slate-500 font-normal">
                {item.description}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              
              {/* Ceramic Bar */}
              <div className="bg-white p-3.5 rounded-xl border border-orange-200/70 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#ff5500] flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#ff5500]" />
                    سرامیک صنعت قائم (Al2O3):
                  </span>
                  <span className="text-xs font-black text-[#ff5500] font-mono">
                    {item.ceramicValue}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#ff7a00] to-[#ff4500] h-2 rounded-full"
                    style={{ width: `${item.ceramicScore}%` }}
                  />
                </div>
              </div>

              {/* Hardox Bar */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-slate-400" />
                    فولاد هاردوکس (Hardox 500):
                  </span>
                  <span className="text-xs font-semibold text-slate-700 font-mono">
                    {item.hardoxValue}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-slate-300 h-2 rounded-full"
                    style={{ width: `${item.hardoxScore}%` }}
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
