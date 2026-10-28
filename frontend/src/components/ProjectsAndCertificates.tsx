"use client";

import React, { useState } from "react";
import { ProjectTestimonial } from "@/types/company";
import { Award, CheckCircle2, Building, FileText, ExternalLink, Calendar, MapPin } from "lucide-react";

interface ProjectsAndCertificatesProps {
  testimonials: ProjectTestimonial[];
}

export default function ProjectsAndCertificates({ testimonials }: ProjectsAndCertificatesProps) {
  const [selectedLetter, setSelectedLetter] = useState<ProjectTestimonial | null>(null);

  // Executed major industrial project sites from catalog photos
  const executedSites = [
    { name: "سنگ آهن بافق", type: "لاینینگ هاپرهای R071 و مسیرهای ساینده آگلومراسیون", location: "بافق، یزد", tag: "۵ برابر عمر هاردوکس" },
    { name: "مجتمع جهان فولاد سیرجان", type: "لاینینگ ۱۰۰ مترمربع شوت‌های حمل مواد اکسید آهن", location: "سیرجان، کرمان", tag: "۲ سال بدون خرابی" },
    { name: "پتروشیمی کاویان", type: "لاینینگ تجهیزات فرآیندی، مخازن الفین و فلنج‌ها", location: "عسلویه، بوشهر", tag: "پتروشیمی و گاز" },
    { name: "سازمان ایمیدرو (سنگان)", type: "لاینینگ لوله‌های ۱۲ اینچ انتقال دوغاب سنگ آهن", location: "سنگان، خراسان رضوی", tag: "۳ برابر عمر بازالت" },
    { name: "فولاد شادگان", type: "شوت‌های ریزش بار سنگین و هاپرهای انتقال آهن اسفنجی", location: "شادگان، خوزستان", tag: "مقاوم به حرارت" },
    { name: "گندله‌سازی اردکان", type: "قطعات Cutting Plate بالینگ دیسک و میکسرها", location: "اردکان، یزد", tag: "۲۷,۵۶۰ تن کارکرد" },
    { name: "کنسانتره اپال پارسیان", type: "لاینینگ جدار داخلی لوله‌های اسلاری ساینده", location: "سنگان، خراسان رضوی", tag: "اسلاری سنگین" },
    { name: "سیمان مهریز", type: "تایل‌های سرامیکی مقاوم به سایش کونکال سپراتور", location: "مهریز، یزد", tag: "صنعت سیمان" },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>اسناد اعتماد و تأییدیه‌های رسمی صنایع سنگین</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            گواهی‌های رسمی حسن انجام کار و سوابق اجرایی
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            بهترین گواه برای کیفیت و ماندگاری سرامیک‌های شرکت سرامیک صنعت قائم، رضایت‌نامه‌های کتبی و مستند مدیران ارشد مجتمع‌های فولادی، معدنی و پتروشیمی کشور است.
          </p>
        </div>

        {/* Testimonials / Letters Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 relative group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-lg border border-orange-500/20">
                    {t.result_highlight}
                  </span>
                  {t.verified && (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      نامه رسمی
                    </span>
                  )}
                </div>

                <h3 className="text-base sm:text-lg font-black text-white mb-1.5">
                  {t.client_name}
                </h3>

                <h4 className="text-xs font-bold text-slate-400 mb-4">
                  {t.project_title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 italic bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                  «{t.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-slate-300">{t.signer}</span>
                  <span className="font-mono text-slate-400">{t.letter_number}</span>
                </div>
                {t.letter_date && (
                  <span className="font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {t.letter_date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Project Sites Showcase Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white mb-1">
                مجتمع‌های بزرگ صنعتی مجهز شده به سرامیک قائم
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                پروژه‌های اجرایی در سخت‌ترین نقاط سایش کارخانجات فولادسازی، مس، سیمان و پتروشیمی
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-orange-600 hover:bg-orange-500 text-white transition self-start sm:self-auto"
            >
              درخواست بازدید و ارزیابی شوت‌ها ←
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {executedSites.map((site, i) => (
              <div
                key={i}
                className="bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 rounded-xl p-4 flex flex-col justify-between transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white group-hover:text-orange-400 transition">
                      {site.name}
                    </span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-mono">
                      {site.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-3">
                    {site.type}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400 border-t border-slate-800/60 pt-2">
                  <MapPin className="w-3 h-3 text-orange-400" />
                  <span>{site.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
