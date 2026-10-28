import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { getCompanyBundle } from "@/lib/api";
import { Layers, Maximize2, Wrench, Factory, FileDown, CheckCircle, ChevronLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "محصولات و قطعات سرامیک ضد سایش | سرامیک صنعت قائم",
  description: "مشخصات و ابعاد انواع تایل‌های ضد سایش آلومینا، موزاییک‌های شش ضلعی هگزاگونال، لاینرهای ذوزنقه‌ای لوله و تیغه‌های میکسر سرامیک صنعت قائم.",
};

export default async function ProductsPage() {
  const { products, settings } = await getCompanyBundle();

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar settings={settings} />

      <PageHeader
        category="TECHNICAL SOLUTIONS"
        title="انواع قطعات، تایل‌ها و فرم‌های سرامیکی"
        subtitle="پوشش‌های استاندارد و سفارشی با ساختار کریستالی آلومینای کلسینه شده جهت حفاظت حداکثری از تجهیزات صنعتی"
        breadcrumb={[{ label: "محصولات و فرم‌های سرامیک" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="space-y-16">
            {products.map((product, idx) => (
              <div
                key={product.code}
                id={product.code.toLowerCase().replace(/\s+/g, '-')}
                className="border border-slate-200 rounded-2xl p-6 sm:p-10 bg-slate-50/60 hover:bg-slate-50 transition"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold font-mono text-[#c2410c] bg-orange-100/70 px-2.5 py-1 rounded">
                        {product.code}
                      </span>
                      <span className="text-xs text-slate-500 font-mono uppercase">
                        {product.name_en}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {product.name_fa}
                    </h2>

                    <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
                      {product.full_desc}
                    </p>
                  </div>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(product.name_fa)}`}
                    className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#c2410c] hover:bg-[#9a3412] px-4 py-2.5 rounded-lg transition"
                  >
                    <span>استعلام قیمت این قطعه</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                  
                  {/* Dimensions Box */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5">
                    <span className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Maximize2 className="w-4 h-4 text-[#c2410c]" />
                      ابعاد و اندازه‌های استاندارد (Available Size):
                    </span>
                    <p className="text-xs text-slate-700 font-mono whitespace-pre-line leading-relaxed">
                      {product.dimensions}
                    </p>
                    <span className="text-[11px] text-slate-500 block mt-3 pt-2 border-t border-slate-100">
                      * امکان تولید در ضخامت‌ها و ابعاد سفارشی طبق نقشه فنی کارفرما مقدور می‌باشد.
                    </span>
                  </div>

                  {/* Applications & Industries Box */}
                  <div className="bg-white border border-slate-200 rounded-xl p-5 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-[#c2410c]" />
                        تجهیزات و کاربردهای رایج (Typical Applications):
                      </span>
                      <p className="text-xs text-slate-700 leading-relaxed mb-4">
                        {product.applications}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
                      <strong className="text-slate-800">صنایع بهره‌بردار: </strong>
                      {product.industries}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

          {/* Custom Engineered Parts Note */}
          <div className="mt-16 bg-[#0f1f38] text-white rounded-2xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold text-orange-400 font-mono uppercase mb-1 block">
                CUSTOM ENGINEERED TILES
              </span>
              <h3 className="text-xl font-bold mb-2">
                نیاز به قطعه یا انحنای غیراستاندارد با نقشه مهندسی دارید؟
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                شرکت سرامیک صنعت قائم با دارا بودن کارگاه ساخت قالب، پرس‌های ۵۰۰ تن و واحد برشکاری دقیق، قادر به ساخت قطعات با هر شکل هندسی پیچیده منطبق بر نقشه فنی شماست.
              </p>
            </div>

            <Link
              href="/contact"
              className="shrink-0 px-6 py-3 bg-[#c2410c] hover:bg-[#9a3412] text-white text-xs font-bold rounded-lg transition"
            >
              ارسال نقشه و استعلام فنی ←
            </Link>
          </div>

        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
