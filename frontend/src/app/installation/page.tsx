import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getCompanyBundle } from "@/lib/api";
import { Wrench, CheckCircle2, AlertTriangle, ShieldCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "دستورالعمل و روش‌های نصب سرامیک ضد سایش | سرامیک صنعت قائم",
  description: "راهنمای تخصصی نصب سرامیک‌های آلومینایی به روش جوشکاری بوشن فلزی، چسب اپوکسی ضدسایش مقاوم تا ۳۰۰ درجه و روش ترکیبی.",
};

export default async function InstallationPage() {
  const { installation_methods, settings } = await getCompanyBundle();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar settings={settings} />

      <PageHeader
        category="ENGINEERING & FIELD SERVICES"
        title="دستورالعمل و روش‌های استاندارد نصب"
        subtitle="اجرای مهندسی لاینینگ سرامیکی متناسب با شرایط ارتعاش، سایش، ضربه، حرارت و خورندگی شیمیایی"
        breadcrumb={[{ label: "روش‌های نصب" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              ۳ رویکرد استاندارد لاینینگ متناسب با تجهیزات
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              کیفیت کارکرد و طول عمر چندساله سرامیک‌های ضد سایش وابستگی مستقیم به نحوه آماده‌سازی سطح و روش اتصال دارد. تیم مهندسی سرامیک صنعت قائم با ارزیابی ابعاد شوت‌ها و لوله‌ها، روش نصب بهینه را تعیین و اجرا می‌نماید.
            </p>
          </div>

          {/* 3 Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {installation_methods.map((method, idx) => (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50/60 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0f1f38] text-white flex items-center justify-center font-mono font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {method.title}
                  </h3>

                  <h4 className="text-xs font-semibold text-[#c2410c] mb-4">
                    {method.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {method.description}
                  </p>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-1.5 pb-1 border-b border-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    الزامات و نکات اجرایی:
                  </span>
                  <p className="leading-relaxed">
                    {method.specifications}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Crucial Engineering Rules (From catalog pages 26-29) */}
          <div className="border border-slate-200 rounded-2xl p-6 sm:p-10 bg-slate-50">
            <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <span>نکات کلیدی مهندسی در دستورالعمل نصب سرامیک‌های قائم</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-2 font-bold text-sm">
                  ۱. ممانعت از شوک حرارتی در حین جوشکاری بوشن:
                </strong>
                <p className="leading-relaxed text-slate-600 text-xs">
                  هر مرحله جوشکاری نباید بیش از ۲ الی ۳ ثانیه به طول بینجامد و بین هر نوبت، حداقل ۵ دقیقه زمان جهت خنک شدن فلز ضروری است. این فرآیند مانع از افزایش ناگهانی دما و اعمال تنش شکست به تایل سرامیکی می‌شود.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-2 font-bold text-sm">
                  ۲. طراحی درزهای انبساط حرارتی (Expansion Joints):
                </strong>
                <p className="leading-relaxed text-slate-600 text-xs">
                  در شوتهای عبور مواد داغ نظیر گندله، آهن اسفنجی و کلینکر سیمان، به دلیل انقباض و انبساط متناوب سازه، درزهای انبساطی ویژه توسط مهندسان شرکت محاسبه می‌گردد و چسب صرفاً برای تثبیت درپوش‌ها اعمال خواهد شد.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-2 font-bold text-sm">
                  ۳. آماده‌سازی سطح فلز (Surface Preparation):
                </strong>
                <p className="leading-relaxed text-slate-600 text-xs">
                  سطح ورق‌های فلزی پیش از نصب می‌بایست با شات‌بلاست، سندبلاست یا فرچه سیمی از هرگونه زنگ‌زدگی، چربی و مواد باقی‌مانده پاکسازی شود تا چسبندگی اپوکسی به حداکثر برسد.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200">
                <strong className="block text-slate-900 mb-2 font-bold text-sm">
                  ۴. آب‌بندی درپوش سرامیکی:
                </strong>
                <p className="leading-relaxed text-slate-600 text-xs">
                  پس از اتمام جوشکاری، درپوش سرامیکی به چسب آغشته شده و در حفره قرار می‌گیرد. بیرون‌زدگی جزیی چسب از حفره نشان از آب‌بندی ۱۰۰٪ و محافظت کامل پیچ در برابر سایش اسلاری است.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600">
                اکیپ‌های اجرایی شرکت سرامیک صنعت قائم آماده اعزام به تمام سایت‌های صنعتی کشور جهت نظارت و نصب کامل می‌باشند.
              </span>
              <Link
                href="/contact"
                className="shrink-0 text-xs font-bold text-white bg-[#c2410c] hover:bg-[#9a3412] px-5 py-2.5 rounded-lg transition"
              >
                درخواست اعزام کارشناس نصب ←
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
