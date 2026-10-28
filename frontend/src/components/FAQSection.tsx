"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "چرا سرامیک ضد سایش آلومینا جایگزین مطمئن‌تری نسبت به ورق‌های فولادی هاردوکس است؟",
      a: "سختی سرامیک آلومینا ۹ در مقیاس موهس (نزدیک‌ترین سختی به الماس) است، در حالی که سرسخت‌ترین فولادهای هاردوکس دارای سختی ۵.۵ تا ۶ موهس هستند. علاوه بر این، سرامیک‌های قائم در دمای بالای ۲۵۰ درجه دچار افت سختی نمی‌شوند و تا ۸۰۰ درجه سانتی‌گراد پایداری دارند، در برابر اسیدها و رطوبت کاملاً خنثی بوده و طول عمری بین ۴ الی ۵ برابر هاردوکس ارائه می‌دهند."
    },
    {
      q: "در شوت‌ها و هاپرهایی که بار با ضربه شدید سقوط می‌کند، آیا سرامیک نمی‌شکند؟",
      a: "مهندسان سرامیک صنعت قائم با محاسبه زاویه برخورد، دبی و اندازه ذرات، ضخامت تایل‌ها را تا ۴۰ میلی‌متر انتخاب می‌کنند و از روش جوشکاری بوشن به همراه درپوش سرامیکی هم‌تراز استفاده می‌نمایند. این طراحی ضربه‌گیر و زاویه‌دار، تنش‌های دینامیکی را توزیع کرده و مانع شکستگی قطعه می‌شود."
    },
    {
      q: "روش نصب سرامیک به روش جوشکاری (Weld-on Stud) چگونه انجام می‌شود؟",
      a: "بوشن فلزی مخصوص درون سوراخ مخروطی تایل سرامیکی قرار گرفته و توسط یک نقطه جوش اولیه در جای خود تثبیت می‌شود. سپس طی ۴ مرحله جوشکاری کوتاه (۲ الی ۳ ثانیه‌ای با فواصل ۵ دقیقه‌ای خنک‌کاری جهت جلوگیری از شوک حرارتی) اتصال کامل ایجاد می‌گردد و در پایان با درپوش سرامیکی و چسب ضدسایش آب‌بندی می‌شود."
    },
    {
      q: "چسب اپوکسی مخصوص نصب سرامیک تا چه دمایی تحمل دارد و زمان گیرش آن چقدر است؟",
      a: "چسب مخصوص شرکت سرامیک صنعت قائم تا دمای کاری ۳۰۰ درجه سانتی‌گراد مقاومت کامل دارد. زمان گیرش اولیه آن در دمای اتاق ۴ ساعت و گیرش نهایی ۲۴ ساعت است. در صورت نیاز به راه‌اندازی سریع با گرم کردن ظرف چسب به بالای ۵۰ درجه، گیرش اولیه به ۱.۵ ساعت کاهش می‌یابد."
    },
    {
      q: "آیا امکان تولید قطعات، لاینرهای قوسی و زانویی‌ها با ابعاد سفارشی طبق نقشه وجود دارد؟",
      a: "بله، علاوه بر کدهای استاندارد PARY WE-AT، PARY WE-MA، PARY WE-FA و PARY WE-SA، شرکت سرامیک صنعت قائم با در اختیار داشتن سیستم قالب‌سازی و پرس‌های هیدرولیک پیشرفته، قطعات سفارشی را دقیقاً منطبق بر نقشه مهندسی و انحنای تجهیزات کارفرما طراحی و تولید می‌نماید."
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#090d16] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>پاسخ به سوالات متداول کارفرمایان و مهندسان صنایع</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            پرسش‌های متداول درباره سرامیک‌های ضد سایش
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            پاسخ‌های تخصصی به رایج‌ترین پرسش‌های مدیران کارخانجات، واحدهای نگهداری و تعمیرات (نت) و بازرگانی
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 text-white hover:text-orange-400 transition"
                >
                  <span className="text-sm sm:text-base font-bold leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-orange-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
