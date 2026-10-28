import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getCompanyBundle } from "@/lib/api";
import { Factory, CheckCircle2, ChevronLeft, Cog, Flame, Microscope } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "فناوری و فرآیند خط تولید | سرامیک صنعت قائم",
  description: "تشریح مراحل پیشرفته خط تولید سرامیک‌های ضد سایش آلومینا از آنالیز لیزری پودر تا بال‌میل، اسپری درایر و کوره تونلی ۱۶۰۰ درجه سانتی‌گراد.",
};

export default async function TechnologyPage() {
  const { production_steps, settings } = await getCompanyBundle();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar settings={settings} />

      <PageHeader
        category="MANUFACTURING & QUALITY CONTROL"
        title="فناوری و مراحل خط تولید پیشرفته"
        subtitle="فرآیند مهندسی، دانش‌بنیان و کنترل کیفی ۱۰۰٪ در تولید سرامیک‌های ضد سایش آلومینایی با ساختار کریستاله کوراندوم"
        breadcrumb={[{ label: "فناوری و خط تولید" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-3xl mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              دقت میلی‌متری و استانداردهای سخت‌گیرانه تولید
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              تولید سرامیک‌های مهندسی با مقاومت فشاری بیش از ۶۵۰ مگاپاسکال مستلزم کنترل متغیرهای متعدد فیزیکی، شیمیایی و دمایی است. در شرکت سرامیک صنعت قائم، تک‌تک مراحل از ورود پودر آلومینای وارداتی تا خروج واگن‌ها از کوره تونلی تحت بازرسی‌های مکانیزه قرار دارد.
            </p>
          </div>

          {/* 7-Step Process List */}
          <div className="space-y-8">
            {production_steps.map((step) => (
              <div
                key={step.step_number}
                className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50/50 hover:bg-slate-50 transition grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                {/* Step Number Badge */}
                <div className="lg:col-span-1 flex items-center justify-start lg:justify-center">
                  <div className="w-12 h-12 rounded-xl bg-[#0f1f38] text-white flex items-center justify-center font-mono font-bold text-lg shadow-sm">
                    0{step.step_number}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-7">
                  <span className="text-xs font-bold text-[#c2410c] uppercase font-mono block mb-1">
                    STEP {step.step_number} OF {production_steps.length}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                    {step.title}
                  </h3>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-600 mb-3">
                    {step.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Equipment & Standards info */}
                <div className="lg:col-span-4 bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-600">
                  <span className="font-bold text-slate-800 block mb-2 pb-1 border-b border-slate-100 flex items-center gap-1.5">
                    <Cog className="w-3.5 h-3.5 text-[#c2410c]" />
                    تجهیزات و ابزار اندازه‌گیری:
                  </span>
                  <p className="mb-3 text-slate-700 leading-relaxed">
                    {step.equipment}
                  </p>
                  <div className="flex items-center gap-1.5 text-emerald-700 font-medium text-[11px] pt-2 border-t border-slate-100">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>تأییدیه کنترل کیفیت ۱۰۰٪ ایستگاه</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Sintering Kiln Highlight Box */}
          <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold text-orange-400 font-mono uppercase mb-1 block">
                TUNNEL KILN TECHNOLOGY
              </span>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                کوره تونلی پیوسته با دمای پخت ۱۶۰۰ درجه سانتی‌گراد
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                پخت کامل و زینترینگ قطعات سرامیکی در دمای ۱۶۰۰ درجه به مدت نیم ساعت صورت می‌پذیرد. کنترل دقیق مناطق پیش‌گرمایش، پخت و خنک‌کن به همراه اتمسفر کوره، ساختار متراکم آلفا آلومینا (α-Al2O3) را بدون کوچکترین تخلخل یا عیب مویی پدید می‌آورد.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-2 bg-slate-800/80 p-5 rounded-xl border border-slate-700 text-xs">
              <div className="flex justify-between pb-1.5 border-b border-slate-700">
                <span className="text-slate-400">دمای بیشینه پخت:</span>
                <span className="font-bold text-orange-400 font-mono">1600 °C</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-slate-700">
                <span className="text-slate-400">زمان ماند در اوج دما:</span>
                <span className="font-bold text-white font-mono">30 Minutes</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">کنترل دما:</span>
                <span className="font-bold text-emerald-400">ترموکوپل‌های دیجیتال</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
