import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getCompanyBundle } from "@/lib/api";
import { Award, ShieldCheck, CheckCircle2, ChevronLeft, Target, Users, History } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "درباره شرکت سرامیک صنعت قائم | تاریخچه و مأموریت مهندسی",
  description: "آشنایی با تاریخچه تاسیس شرکت سرامیک صنعت قائم از سال ۱۳۹۰ در یزد، پیشگام در تولید و بومی‌سازی سرامیک‌های ضد سایش آلومینایی با خلوص بالا برای صنایع سنگین.",
};

export default async function AboutPage() {
  const { settings, stats, advantages } = await getCompanyBundle();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar settings={settings} />

      <PageHeader
        category="COMPANY PROFILE"
        title="درباره شرکت سرامیک صنعت قائم"
        subtitle="تخصصی‌ترین واحد مشاوره، طراحی، تأمین و نصب سرامیک‌های ضد سایش در کشور از سال ۱۳۹۰"
        breadcrumb={[{ label: "درباره شرکت" }]}
      />

      {/* Main Content Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 border-b border-slate-200 pb-4">
                بیش از یک دهه همراهی با صنایع مادر کشور
              </h2>
              
              <p>
                {settings.about_text_1}
              </p>

              <p>
                {settings.about_text_2}
              </p>

              <h3 className="text-lg font-bold text-slate-900 pt-4">
                چالش صنایع بزرگ و پاسخ مهندسی سرامیک قائم
              </h3>

              <p>
                در کارخانجات فرآوری سنگ آهن، تولید کنسانتره، گندله‌سازی، احیاء مستقیم فولاد و کلینکر سیمان، عبور مداوم میلیون‌ها تن مواد ساینده معدنی در شرایط حرارت و اسیدیته، فلزات ضد سایش معمول نظیر هاردوکس را در مدتی کوتاه دچار استهلاک شدید، شیارافتادگی و تخریب کامل می‌کند. تعویض این ورق‌ها هزینه‌های سرسام‌آور توقف ناخواسته خط تولید را تحمیل می‌نماید.
              </p>

              <p>
                سرامیک‌های نسل جدید قائم با ساختار کریستالی یکپارچه آلومینای کلسینه شده (گرید P662)، سختی استثنایی ۹ موهس و مقاومت حرارتی تا ۸۰۰ درجه سانتی‌گراد، پاسخی علمی و اقتصادی به این چالش ملی است که با کارکرد حداقل ۴ تا ۵ برابری نسبت به هاردوکس، هزینه‌های نگهداری و تعمیرات صنایع را به شدت کاهش داده است.
              </p>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#c2410c] flex items-center justify-center mb-3">
                    <History className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">تجربه و سابقه مستمر</h4>
                  <p className="text-xs text-slate-500">فعالیت مستمر و تخصصی از سال ۱۳۹۰ در تأمین قطعات حساس صنایع مادر.</p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#c2410c] flex items-center justify-center mb-3">
                    <Target className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">دقت و تطابق با نقشه</h4>
                  <p className="text-xs text-slate-500">طراحی دقیق قطعات بر اساس نقشه، ابعاد و شرایط دینامیکی تجهیزات کارفرما.</p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 text-[#c2410c] flex items-center justify-center mb-3">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">تیم اجرایی متخصص</h4>
                  <p className="text-xs text-slate-500">نیروهای جوان، مهندسان متالورژی و اکیپ‌های مجرب نصب در سایت‌های صنعتی.</p>
                </div>
              </div>

            </div>

            {/* Sidebar Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <h3 className="text-sm font-bold text-slate-900 pb-3 border-b border-slate-200 mb-4">
                  شناسنامه شرکت سرامیک صنعت قائم
                </h3>
                <dl className="space-y-3 text-xs">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <dt className="text-slate-500">سال تأسیس:</dt>
                    <dd className="font-bold text-slate-800 font-mono">۱۳۹۰ (2011)</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <dt className="text-slate-500">مدیریت شرکت:</dt>
                    <dd className="font-bold text-slate-800">{settings.manager_name}</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <dt className="text-slate-500">زمینه تخصصی:</dt>
                    <dd className="font-bold text-slate-800">سرامیک‌های ضد سایش آلومینا</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <dt className="text-slate-500">دفتر مرکزی:</dt>
                    <dd className="font-bold text-slate-800">یزد، بلوار پاسداران</dd>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <dt className="text-slate-500">استانداردهای مرجع:</dt>
                    <dd className="font-bold text-slate-800 font-mono">ASTM C373 • ISO 2768</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-slate-500">تأییدیه کیفی:</dt>
                    <dd className="font-bold text-emerald-700">مرکز پژوهش متالورژی رازی</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-[#0f1f38] text-white rounded-2xl p-6">
                <h3 className="text-sm font-bold text-white mb-2">استعلام قیمت و مشاوره مهندسی</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  کارشناسان فنی ما آماده پاسخگویی و ارائه طرح‌های مهندسی بر اساس نقشه تجهیزات شما هستند.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300"
                >
                  <span>ثبت درخواست مشاوره و نقشه ←</span>
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
