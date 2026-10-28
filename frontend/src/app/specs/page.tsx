import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getCompanyBundle } from "@/lib/api";
import { Award, CheckCircle, FileSpreadsheet, ShieldAlert, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "مشخصات فنی و استانداردهای آزمایشگاهی | سرامیک صنعت قائم",
  description: "آنالیز آزمایشگاهی خواص فیزیکی، شیمیایی و مکانیکی سرامیک‌های آلومینایی با تاییدیه مرکز پژوهش متالورژی رازی (RMRC) و استانداردهای ASTM.",
};

export default async function SpecsPage() {
  const { specs, settings } = await getCompanyBundle();

  const chemicalSpecs = specs.filter(s => s.category === 'chemical');
  const physicalSpecs = specs.filter(s => s.category === 'physical');
  const mechanicalSpecs = specs.filter(s => s.category === 'mechanical');

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar settings={settings} />

      <PageHeader
        category="TECHNICAL DATA SHEET"
        title="مشخصات فنی و داده‌های آزمایشگاهی"
        subtitle="بررسی آنالیز شیمیایی XRF، خواص فیزیکی و آزمون‌های استحکام مکانیکی تحت استانداردهای بین‌المللی ASTM و ISO"
        breadcrumb={[{ label: "مشخصات فنی" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="space-y-12">
            
            {/* Section 1: Mechanical Properties */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  ۱. خواص مکانیکی و مقاومت سایشی
                </h2>
                <span className="text-xs text-slate-500 font-mono">MECHANICAL PROPERTIES</span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-right border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                    <tr>
                      <th className="py-3.5 px-6 font-bold">پارامتر</th>
                      <th className="py-3.5 px-6 font-bold">نام انگلیسی</th>
                      <th className="py-3.5 px-6 font-bold text-[#c2410c]">مقدار استاندارد</th>
                      <th className="py-3.5 px-6 font-bold">روش آزمون / استاندارد مرجع</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {mechanicalSpecs.map((spec, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition">
                        <td className="py-3.5 px-6 font-bold text-slate-900 font-sans">{spec.name_fa}</td>
                        <td className="py-3.5 px-6 text-slate-500">{spec.name_en}</td>
                        <td className="py-3.5 px-6 font-bold text-[#c2410c] text-sm sm:text-base">{spec.value}</td>
                        <td className="py-3.5 px-6 text-slate-700 font-sans">{spec.standard_ref}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 2: Physical Properties */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  ۲. خواص فیزیکی، دانسیته و حرارتی
                </h2>
                <span className="text-xs text-slate-500 font-mono">PHYSICAL & THERMAL PROPERTIES</span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-right border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                    <tr>
                      <th className="py-3.5 px-6 font-bold">پارامتر</th>
                      <th className="py-3.5 px-6 font-bold">نام انگلیسی</th>
                      <th className="py-3.5 px-6 font-bold text-[#c2410c]">مقدار استاندارد</th>
                      <th className="py-3.5 px-6 font-bold">روش آزمون / استاندارد مرجع</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {physicalSpecs.map((spec, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition">
                        <td className="py-3.5 px-6 font-bold text-slate-900 font-sans">{spec.name_fa}</td>
                        <td className="py-3.5 px-6 text-slate-500">{spec.name_en}</td>
                        <td className="py-3.5 px-6 font-bold text-[#c2410c] text-sm sm:text-base">{spec.value}</td>
                        <td className="py-3.5 px-6 text-slate-700 font-sans">{spec.standard_ref}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Section 3: Chemical Composition */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                  ۳. ترکیب و خلوص شیمیایی (آنالیز XRF)
                </h2>
                <span className="text-xs text-slate-500 font-mono">CHEMICAL COMPOSITION</span>
              </div>

              <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-right border-collapse text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                    <tr>
                      <th className="py-3.5 px-6 font-bold">عنصر / ترکیب</th>
                      <th className="py-3.5 px-6 font-bold">نام انگلیسی</th>
                      <th className="py-3.5 px-6 font-bold text-[#c2410c]">درصد وزنی</th>
                      <th className="py-3.5 px-6 font-bold">روش آزمون</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-mono">
                    {chemicalSpecs.map((spec, i) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition">
                        <td className="py-3.5 px-6 font-bold text-slate-900 font-sans">{spec.name_fa}</td>
                        <td className="py-3.5 px-6 text-slate-500">{spec.name_en}</td>
                        <td className="py-3.5 px-6 font-bold text-[#c2410c] text-sm sm:text-base">{spec.value}</td>
                        <td className="py-3.5 px-6 text-slate-700 font-sans">{spec.standard_ref}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Razi Metallurgical Center Reference Box */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-[#c2410c] shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  استناد رسمی به گزارش آزمون مرکز پژوهش متالورژی رازی (RMRC)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  بر اساس آزمون‌های رسمی شماره پیگیری ۳۳۶۹۸-۱ در آزمایشگاه متالورژی رازی، نمونه‌های تایل سرامیکی شرکت سرامیک صنعت قائم میانگین مقاومت فشاری ۶۵۶ مگاپاسکال (نیروی شکست بیش از ۳۵۶۰ کیلونیوتن) و میانگین مقاومت خمشی ۱۷۳ مگاپاسکال (نیروی ماکزیمم بیش از ۴۲۰۰۰ نیوتن) را با موفقیت کامل احراز نموده‌اند.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-[#c2410c] hover:underline inline-flex items-center gap-1"
                >
                  <span>درخواست نسخه کامل برگه نتایج آزمایشگاهی (Test Report)</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
