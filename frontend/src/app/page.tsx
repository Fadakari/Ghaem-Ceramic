"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveProducts from "@/components/InteractiveProducts";
import InteractiveComparison from "@/components/InteractiveComparison";
import ContactForm from "@/components/ContactForm";
import { useCompany } from "@/context/CompanyContext";
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Layers, 
  Factory, 
  Flame, 
  CheckCircle, 
  ChevronLeft,
  Award,
  Sparkles,
  PhoneCall,
  Clock,
  MapPin,
  Mail,
  Printer,
  Wrench,
  Cog,
  CheckCircle2,
  Calendar,
  AlertTriangle,
  FileSpreadsheet
} from "lucide-react";

export default function HomePage() {
  const { settings, stats, advantages, products, specs, production_steps, installation_methods, testimonials } = useCompany();

  return (
    <div className="min-h-screen flex flex-col bg-[#fbfcfe] text-slate-800 w-full max-w-full overflow-x-hidden">
      <Navbar settings={settings} />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white border-b border-slate-200/80 overflow-hidden w-full max-w-full">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gradient-to-br from-orange-400/10 to-amber-300/5 blur-[100px] pointer-events-none rounded-full" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-glossy-orange text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#ff5500] animate-ping" />
              <Award className="w-4 h-4 text-[#ff5500]" />
              <span>{settings.hero_badge}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.25] mb-6">
              {settings.hero_title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10 font-normal">
              {settings.hero_subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <a
                href="#products"
                className="btn-vibrant-orange inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base cursor-pointer"
              >
                <span>مشاهده انواع تایل‌ها و ابعاد قطعات</span>
                <ChevronLeft className="w-4 h-4" />
              </a>

              <a
                href="#comparison"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 card-clean-shadow transition cursor-pointer"
              >
                <span>مقایسه فنی با هاردوکس ۵۰۰</span>
                <ArrowUpRight className="w-4 h-4 text-[#ff5500]" />
              </a>
            </div>

          </div>

          {/* 4 Wide Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.slice(0, 4).map((st, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-6 card-clean-shadow flex flex-col justify-between">
                <div>
                  <span className="text-3xl sm:text-4xl font-black text-[#ff5500] font-mono block mb-1" dir="ltr">
                    {st.value}
                  </span>
                  <strong className="text-sm font-bold text-slate-900 block mb-1">
                    {st.label}
                  </strong>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100">
                  {st.sublabel || "تایید شده در استانداردهای رسمی"}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#fbfcfe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="badge-glossy-orange px-3.5 py-1 rounded-md text-xs font-bold font-mono uppercase inline-block">
                COMPANY OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                {settings.about_title}
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {settings.about_text_1}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {settings.about_text_2}
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-700">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  مدیریت شرکت: {settings.manager_name}
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  استاندارد ASTM C373-72 و ISO 2768
                </span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  دفتر مرکزی در شهر یزد
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 card-clean-shadow">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#ff5500]" />
                  سختی فوق‌العاده ۹ در مقیاس موهس
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  مقاومت سایش بی‌نظیر که مانع هرگونه خوردگی در برابر ذرات ساینده کانی‌ها می‌شود.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 card-clean-shadow">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-[#ff5500]" />
                  مقاومت حرارتی مداوم تا ۸۰۰ درجه
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ایده‌آل برای شوتهای انتقال گندله، کلینکر داغ و خطوط احیاء مستقیم آهن اسفنجی.
                </p>
              </div>

              <div className="bg-white border border-slate-200/90 rounded-2xl p-6 card-clean-shadow">
                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#ff5500]" />
                  کاهش بیش از ۵۰ درصدی وزن بار مرده
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  چگالی ۳.۶ گرم بر سانتی‌متر مکعب در مقایسه با ۷.۸ فولاد، فشار وارده بر شاسی را به نصف می‌رساند.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Products & Geometries */}
      <section id="products" className="py-20 bg-white border-t border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="badge-glossy-orange px-3.5 py-1 rounded-md text-xs font-bold font-mono uppercase inline-block mb-2">
              SOLUTIONS & GEOMETRIES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              فرم‌ها، تایل‌ها و قطعات استاندارد سرامیک ضد سایش
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              انتخاب فرم مهندسی متناسب با هندسه تجهیز (شوت‌های مسطح، زانویی‌ها، مخروطی‌ها و لوله‌های انتقال اسلاری)
            </p>
          </div>

          <InteractiveProducts products={products} />

        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 bg-[#fbfcfe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveComparison />
        </div>
      </section>

      {/* Technology & Production Pipeline */}
      <section id="technology" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <span className="badge-glossy-orange px-3.5 py-1 rounded-md text-xs font-bold font-mono uppercase inline-block mb-2">
              MANUFACTURING EXCELLENCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              فرآیند ۷ مرحله‌ای خط تولید و کنترل کیفیت ۱۰۰٪
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              از ورود پودر آلومینای وارداتی فرانسه و هند تا خروج واگن‌ها از کوره تونلی ۱۶۰۰ درجه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {production_steps.map((step) => (
              <div
                key={step.step_number}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 card-clean-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff4500] to-[#ffa500] text-white flex items-center justify-center font-mono font-bold text-sm shadow-xs">
                      0{step.step_number}
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 font-mono">
                      QC VERIFIED
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>

                  <h4 className="text-xs font-bold text-[#ff5500] mb-3">
                    {step.headline}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {step.equipment && (
                  <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-1.5">
                    <Cog className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                    <span>{step.equipment}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Technical Specs Table */}
      <section id="specs" className="py-20 bg-[#fbfcfe] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="badge-glossy-orange px-3.5 py-1 rounded-md text-xs font-bold font-mono uppercase inline-block mb-2">
              LABORATORY ANALYSIS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              مشخصات فنی و نتایج آزمون‌های آزمایشگاهی
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              تطابق با استانداردهای ASTM C373-72 و تاییدیه رسمی مرکز پژوهش متالورژی رازی (RMRC)
            </p>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden card-clean-shadow">
            <div className="overflow-x-auto">
              <table className="w-full text-right border-collapse text-xs sm:text-sm min-w-[500px]">
                <thead>
                  <tr className="bg-slate-100/70 border-b border-slate-200 text-slate-700">
                    <th className="py-4 px-6 font-bold">عنوان پارامتر</th>
                    <th className="py-4 px-6 font-bold">نام انگلیسی</th>
                    <th className="py-4 px-6 font-bold text-[#ff5500]">مقدار استاندارد</th>
                    <th className="py-4 px-6 font-bold">استاندارد مرجع / آزمون</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-mono">
                  {specs.map((spec, i) => (
                    <tr key={i} className="hover:bg-orange-50/20 transition-colors">
                      <td className="py-4 px-6 font-bold text-slate-900 font-sans">{spec.name_fa}</td>
                      <td className="py-4 px-6 text-slate-500">{spec.name_en}</td>
                      <td className="py-4 px-6 font-black text-[#ff5500] text-sm sm:text-base">{spec.value}</td>
                      <td className="py-4 px-6 text-slate-700 font-sans">{spec.standard_ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <Award className="w-5 h-5 text-[#ff5500] shrink-0" />
              <span>
                گزارش رسمی شماره ۳۳۶۹۸-۱ مرکز پژوهش متالورژی رازی با استحکام فشاری ۶۵۶ مگاپاسکال و استحکام خمشی ۱۷۳ مگاپاسکال.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Engineering Installation Methods */}
      <section id="installation" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="badge-glossy-orange px-3.5 py-1 rounded-md text-xs font-bold font-mono uppercase inline-block mb-2">
              INSTALLATION METHODS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              روش‌های استاندارد نصب و لاینینگ صنعتی
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              نصب صحیح و رعایت اصول عدم شوک حرارتی ضامن طول عمر چندساله سرامیک‌هاست.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {installation_methods.map((method, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 card-clean-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-[#0f1f38] text-white flex items-center justify-center font-mono font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {method.title}
                  </h3>
                  <h4 className="text-xs font-bold text-[#ff5500] mb-3">
                    {method.subtitle}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {method.description}
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs text-slate-700">
                  <span className="font-bold text-slate-900 block mb-1">نکات کلیدی:</span>
                  {method.specifications}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong className="block font-bold text-amber-950 mb-0.5">
                طراحی درزهای انبساط حرارتی (Expansion Joints) در شوت‌های داغ:
              </strong>
              در شوتهای عبور مواد داغ نظیر گندله و آهن اسفنجی، درزهای انبساطی توسط مهندسان شرکت محاسبه می‌گردد تا تنش‌های دمایی تخلیه شده و اتصال سرامیک پایدار بماند.
            </div>
          </div>

        </div>
      </section>

      {/* Verified References & Testimonials */}
      <section id="testimonials" className="py-20 bg-[#fbfcfe] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="badge-glossy-orange px-3.5 py-1 rounded-md text-xs font-bold font-mono uppercase inline-block mb-2">
              OFFICIAL CERTIFICATES
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mb-3">
              گواهی‌های رسمی حسن انجام کار و سوابق درخشان
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              نامه‌های مکتوب مدیران ارشد مجتمع‌های بزرگ فولادی و معدنی کشور دال بر کارکرد چند برابری نسبت به هاردوکس
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 card-clean-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge-glossy-orange px-2.5 py-0.5 rounded text-xs font-bold">
                      {t.result_highlight}
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {t.letter_number}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {t.client_name}
                  </h3>

                  <h4 className="text-xs text-slate-500 mb-3">
                    {t.project_title}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-200/70 mb-4">
                    «{t.quote}»
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="font-semibold text-slate-700">{t.signer}</span>
                  <span className="font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {t.letter_date}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="badge-glossy-orange px-3.5 py-1 rounded-md text-xs font-bold font-mono uppercase inline-block mb-2">
                  CONTACT HEADQUARTERS
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
                  دفتر مرکزی و مدیریت شرکت
                </h2>
                <p className="text-xs text-slate-500 leading-relaxed">
                  کارشناسان فنی ما آماده پاسخگویی و ارائه نقشه‌های لاینینگ هستند.
                </p>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#ff5500] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">نشانی:</span>
                    <span className="font-medium text-slate-800 leading-relaxed">{settings.address}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                  <PhoneCall className="w-4 h-4 text-[#ff5500] shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">تلفن تماس مستقیم:</span>
                    <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="font-bold text-slate-900 font-mono text-sm hover:text-[#ff5500]" dir="ltr">
                      {settings.phone}
                    </a>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                  <Printer className="w-4 h-4 text-slate-500 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">شماره فکس:</span>
                    <span className="font-bold text-slate-800 font-mono text-sm" dir="ltr">{settings.fax}</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                  <div>
                    <span className="text-slate-400 text-[11px] block">پست الکترونیک (Email):</span>
                    <a href={`mailto:${settings.email}`} className="font-bold text-slate-800 font-mono text-xs hover:text-[#ff5500]">
                      {settings.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-orange-50/70 border border-orange-200/80 rounded-xl text-xs text-orange-950 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#ff5500] shrink-0" />
                <span>ساعات کاری: شنبه تا چهارشنبه ۸:۰۰ الی ۱۶:۳۰ | پنج‌شنبه تا ۱۳:۰۰</span>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-[#fbfcfe] border border-slate-200 rounded-3xl p-6 sm:p-10 card-clean-shadow">
              <h3 className="text-xl font-black text-slate-900 mb-2">
                فرم استعلام فنی و ثبت درخواست مشاوره
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                جهت استعلام قیمت یا ارسال مشخصات شوت‌ها و لوله‌های خود، فرم زیر را تکمیل نمایید.
              </p>

              <ContactForm />
            </div>

          </div>

        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
