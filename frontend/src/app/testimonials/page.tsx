import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getCompanyBundle } from "@/lib/api";
import { Award, CheckCircle2, Calendar, MapPin, Building, ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "گواهی‌های رسمی و سوابق پروژه‌ها | سرامیک صنعت قائم",
  description: "رضایت‌نامه‌ها و گواهی‌های مستند حسن انجام کار از شرکت سنگ آهن بافق، جهان فولاد سیرجان، ایمیدرو سنگان، فولاد ارفع، گندله‌سازی اردکان و فولاد غدیر.",
};

export default async function TestimonialsPage() {
  const { testimonials, settings } = await getCompanyBundle();

  const sites = [
    { name: "سنگ آهن بافق", project: "لاینینگ هاپرهای R071 و مسیرهای ساینده آگلومراسیون", location: "بافق، یزد", result: "۵ برابر عمر هاردوکس" },
    { name: "مجتمع جهان فولاد سیرجان", project: "پوشش ۱۰۰ مترمربع شوت‌های حمل مواد اکسید آهن", location: "سیرجان، کرمان", result: "۲ سال بدون تعویض" },
    { name: "سازمان ایمیدرو (سنگان)", project: "لاینینگ لوله‌های ۱۲ اینچ انتقال دوغاب سنگ آهن", location: "سنگان، خراسان رضوی", result: "۳ برابر عمر بازالت" },
    { name: "شرکت آهن و فولاد ارفع", project: "لاینینگ شوت‌ها و لاینرهای ضد سایش کارخانه فولاد", location: "اردکان، یزد", result: "چند برابر عمر هاردوکس" },
    { name: "گندله‌سازی اردکان", project: "تیغه‌های Cutting Plate بالینگ دیسک و میکسر", location: "اردکان، یزد", result: "۲۷,۵۶۰ تن کارکرد" },
    { name: "پتروشیمی کاویان", project: "لاینینگ تجهیزات فرآیندی، برج‌ها و مخازن الفین", location: "عسلویه، بوشهر", result: "مقاوم به اسید و باز" },
    { name: "سیمان مهریز", project: "تایل‌های ضد سایش کونکال سپراتور و لوله‌ها", location: "مهریز، یزد", result: "صنعت سیمان" },
    { name: "فولاد شادگان", project: "لاینینگ شوت‌های ریزش بار سنگین و هاپرها", location: "شادگان، خوزستان", result: "مقاوم به حرارت" },
    { name: "گهر زمین", project: "پایپ‌ها و اتصالات مخروطی انتقال کنسانتره", location: "سیرجان، کرمان", result: "اسلاری سنگین" },
    { name: "کنسانتره اپال پارسیان", project: "لاینینگ جدار داخلی لوله‌های اسلاری ساینده", location: "سنگان، خراسان رضوی", result: "دوغاب معدنی" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar settings={settings} />

      <PageHeader
        category="TRACK RECORD & CERTIFICATES"
        title="گواهی‌های حسن انجام کار و پروژه‌ها"
        subtitle="مستندات کتبی و نامه‌های رسمی رضایت‌مندی مدیران ارشد مجتمع‌های بزرگ فولادی، معدنی و پتروشیمی کشور"
        breadcrumb={[{ label: "گواهی‌ها و پروژه‌ها" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Letters of Satisfaction Grid */}
          <div className="mb-20">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">
              نامه‌های رسمی اعلام رضایت‌مندی کارفرمایان
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50/60 flex flex-col justify-between hover:bg-slate-50 transition"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold text-[#c2410c] bg-orange-100/70 px-2.5 py-1 rounded">
                        {t.result_highlight}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        شماره نامه: {t.letter_number}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
                      {t.client_name}
                    </h3>
                    <h4 className="text-xs font-semibold text-slate-500 mb-4">
                      موضوع: {t.project_title}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-4 rounded-xl border border-slate-200 mb-6">
                      «{t.quote}»
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold text-slate-800">{t.signer}</span>
                    <span className="font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {t.letter_date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Executed Sites Table */}
          <div className="border border-slate-200 rounded-2xl p-6 sm:p-10 bg-slate-50">
            <div className="max-w-2xl mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                گزیده‌ای از سایت‌های صنعتی تجهیز شده در سراسر کشور
              </h3>
              <p className="text-xs text-slate-500">
                پروژه‌های اجرایی در صنایع فولاد، آهن اسفنجی، گندله‌سازی، سیمان و پتروشیمی
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sites.map((site, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <strong className="text-sm font-bold text-slate-900">{site.name}</strong>
                      <span className="text-[10px] font-bold text-[#c2410c] bg-orange-50 px-2 py-0.5 rounded font-mono">
                        {site.result}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {site.project}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 border-t border-slate-100 pt-2">
                    <MapPin className="w-3 h-3 text-[#c2410c]" />
                    <span>{site.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
