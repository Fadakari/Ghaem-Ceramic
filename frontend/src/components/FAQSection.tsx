"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, CheckCircle2 } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "فناوری بسته‌بندی در اتمسفر اصلاح‌شده (MAP) چیست و آیا گوشت به ماده نگه‌دارنده نیاز دارد؟",
      a: "خیر، به هیچ وجه از مواد نگه‌دارنده استفاده نمی‌شود. در روش MAP، هوای معمولی ظرف تخلیه شده و با ترکیبی از گازهای طبیعی سازگار با بافت (۷۰٪ نیتروژن و ۳۰٪ دی‌اکسید کربن خوراکی) جایگزین می‌شود. دی‌اکسید کربن از رشد باکتری‌های عامل فساد جلوگیری کرده و ماندگاری طبیعی گوشت تازه را تا ۱۴ روز در دمای ۰ تا ۴ درجه حفظ می‌نماید بدون اینکه طعم یا ارزش غذایی تغییر کند."
    },
    {
      q: "حداقل مقدار سفارش جهت ارسال عمده برای رستوران‌ها، هتل‌ها و فروشگاه‌ها چقدر است؟",
      a: "حداقل سفارش برای تحویل درون‌شهری یزد ۵۰ کیلوگرم و برای ارسال به سایر استان‌ها توسط ناوگان مجهز به یخچال ۲۰۰ کیلوگرم است. برای ارگان‌ها، هتل‌ها و کترینگ‌های صنعتی، امکان عقد قراردادهای بلندمدت با ثبات کیفیت و تحویل روزانه یا هفتگی فراهم می‌باشد."
    },
    {
      q: "چگونه اطمینان حاصل کنیم که زنجیره سرمایش در طول مسیر حمل به سایر شهرها قطع نمی‌شود؟",
      a: "تمامی خودروهای ناوگان ترابری بی‌سان سام مجهز به دیتالاگرهای هوشمند برودتی و سیستم رهگیری GPS هستند. درجه حرارت محفظه بار به صورت لحظه‌ای مانیتور شده و نمودار دمایی تحویل مسئول فنی خریدار می‌گردد تا از پیوستگی برودت اطمینان حاصل شود."
    },
    {
      q: "مزیت گوشت شتر جوان کویری یزد نسبت به سایر گوشت‌های قرمز چیست؟",
      a: "گوشت شتر جوان مزارع یزد دارای طبع بسیار گرم، سرشار از آهن هم، کلسیم و فسفر بوده و میزان کلسترول آن به مراتب کمتر از گوشت گوساله و گوسفند است. این گوشت برای تقویت بنیه، رفع کم‌خونی و افراد مبتلا به دردهای مفصلی و رماتیسم فوق‌العاده مفید و زودهضم است."
    },
    {
      q: "آیا سرآشپزها و کترینگ‌ها می‌توانند سایز، وزن و نوع برش قطعات را به صورت سفارشی تعیین کنند؟",
      a: "بله، سالن‌های قطعه‌بندی مکانیزه بی‌سان سام امکان کات‌های دقیق استیکی (با گرماژ دلخواه مثلاً ۲۵۰ تا ۳۵۰ گرم)، چنجه‌های یکدست، ران و فیله سورت‌شده بدون چربی، و چرخ‌کرده با نسبت‌های چربی دلخواه (۸۰/۲۰ یا ۸۵/۱۵) را دارند تا دورریز و زمان آماده‌سازی در آشپزخانه رستوران به صفر برسد."
    },
    {
      q: "آیا همراه هر محموله، برگه سلامت و مجوز قرنطینه دامپزشکی ارائه می‌گردد؟",
      a: "بله، کلیه محموله‌های تولیدی بی‌سان سام یزد دارای کد یکتای ره‌گیری سلامت از سامانه یکپارچه سازمان دامپزشکی کل کشور هستند و به همراه برگه بهداشتی قرنطینه‌ای و گواهی حمل رسمی صادر می‌گردند."
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white relative border-t border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md badge-organic text-xs font-bold font-mono uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            پرسش‌های متداول مشتریان و سازمان‌ها
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            پاسخ‌های تخصصی به رایج‌ترین پرسش‌های خریداران عمده، مدیران رستوران‌ها، هتل‌ها و مسئولان خرید سازمانی
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#faf9f6] border border-stone-200/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs hover:border-emerald-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 text-slate-900 hover:text-emerald-800 transition cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-stone-200/70 pt-4 bg-white">
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
