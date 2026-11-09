import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getCompanyBundle } from '@/lib/api';

export const metadata: Metadata = {
  title: 'خدمات سازمانی، تامین عمده و HoReCa | شرکت بی‌سان سام یزد',
  description: 'خدمات تامین عمده گوشت گرم و منجمد برای هتل‌ها، رستوران‌ها، بیمارستان‌ها و سازمان‌های بزرگ، بسته‌بندی سفارشی با برند شما (Private Label) و ناوگان مجهز به زنجیره سرد.',
  openGraph: {
    title: 'خدمات سازمانی و HoReCa | بی‌سان سام یزد',
    description: 'تامین گوشت بدون ضایعات، برش‌های کالیبره سرآشپز و قراردادهای رسمی با تضمین کیفیت.',
    url: 'https://bisansam.ir/services',
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ServicesPage() {
  const data = await getCompanyBundle();
  const services = data.services || [];

  const workflowSteps = [
    {
      step: '۰۱',
      title: 'استعلام حجم و نیازمندی',
      desc: 'ثبت نوع قطعات، وزن کالیبره، نوع بسته‌بندی (MAP یا لاشه) و دوره تحویل مورد نظر توسط کارفرما.',
    },
    {
      step: '۰۲',
      title: 'ارسال نمونه و تاییدیه سرآشپز',
      desc: 'ارسال پارت آزمایشی برای تست پخت و تطابق بافت با استانداردهای کیفی آشپزخانه شما.',
    },
    {
      step: '۰۳',
      title: 'عقد قرارداد و صدور فاکتور رسمی',
      desc: 'تنظیم قرارداد حقوقی با نرخ ثابت دوره‌ای، تضمین پایداری تامین و صدور فاکتور رسمی معتبر در سامانه مودیان.',
    },
    {
      step: '۰۴',
      title: 'توزیع مویرگی با پرینت آنلاین دما',
      desc: 'تحویل منظم اول صبح توسط ناوگان یخچال‌دار اختصاصی همراه با شناسه بهداشتی دامپزشکی.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      
      {/* Page Header */}
      <section className="bg-[#111216] text-white py-12 sm:py-16 border-b border-[#252733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="inline-flex items-center gap-2 bg-[#21232c] border border-[#333644] px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>بخش بازرگانی و قراردادهای سازمانی</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            خدمات تامین سازمانی، HoReCa و بسته‌بندی سفارشی
          </h1>
          <p className="text-xs sm:text-base text-gray-300 max-w-3xl mt-2 leading-relaxed">
            راهکارهای حرفه‌ای تامین مستمر پروتئین با برش‌های سفارشی بدون پرتی، سیستم قیمت‌گذاری شفاف و ناوگان اختصاصی حمل مجهز به دیتالاگر دما.
          </p>
        </div>
      </section>

      {/* Services List - Connected to Backend */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const benefitsList = service.benefits ? service.benefits.split('-').filter(Boolean) : [];
              return (
                <div
                  key={service.id}
                  className="bg-[#faf8f5] p-6 sm:p-8 flex flex-col justify-between border border-[#e5dfd5] rounded-3xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-11 h-11 rounded-2xl bg-rose-100/70 text-[#9f1239] font-black text-base flex items-center justify-center">
                        ۰{index + 1}
                      </span>
                      <span className="text-[11px] font-bold text-gray-600 bg-white border border-[#e5dfd5] px-3 py-1 rounded-full shadow-2xs">
                        {service.target_sector}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-[#111216]">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {service.full_description || service.short_description}
                    </p>

                    {benefitsList.length > 0 && (
                      <div className="pt-2 space-y-2.5 border-t border-gray-200/80">
                        <span className="text-xs font-bold text-gray-900 block">مزایای کلیدی همکاری:</span>
                        <ul className="space-y-1.5 text-xs text-gray-700">
                          {benefitsList.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-emerald-600 font-bold">✓</span>
                              <span>{item.trim()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-4 border-t border-gray-200/80">
                    <Link
                      href={`/contact?subject=${encodeURIComponent(service.title)}`}
                      className="btn-primary-meat w-full py-3.5 text-xs sm:text-sm font-bold text-center block shadow-xs"
                    >
                      درخواست جلسه کاری و استعلام نرخ
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Workflow Process */}
      <section className="py-16 bg-[#faf8f5] border-t border-[#e5dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
              فرآیند همکاری B2B
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111216] mt-1">
              مراحل آغاز همکاری از استعلام تا تحویل محموله
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step) => (
              <div key={step.step} className="bg-white p-6 rounded-3xl border border-[#e5dfd5] space-y-3 shadow-xs">
                <div className="text-2xl font-black text-[#9f1239] font-mono">
                  {step.step}
                </div>
                <h3 className="text-sm font-bold text-[#111216]">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-14 bg-[#9f1239] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-black">
              آماده عقد قرارداد تامین پایدار هستید؟
            </h3>
            <p className="text-xs sm:text-sm text-rose-100 max-w-xl mx-auto">
              فرم استعلام تجاری را تکمیل کنید تا کارشناسان ارشد فروش شرکت بی‌سان سام یزد در کمتر از ۲ ساعت کاری با شما تماس بگیرند.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="bg-white text-[#9f1239] hover:bg-rose-50 px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg transition-colors inline-block"
              >
                تکمیل فرم استعلام تناژ
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
