import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getCompanyBundle } from '@/lib/api';

export const metadata: Metadata = {
  title: 'درباره شرکت بی‌سان سام یزد | پیشگام در فرآوری بهداشتی دام و طیور',
  description: 'آشنایی با تاریخچه، رسالت، استانداردهای بهداشتی، خطوط کشتارگاهی مکانیزه و ظرفیت‌های تامین گوشت شرکت بی‌سان سام یزد.',
  openGraph: {
    title: 'درباره شرکت بی‌سان سام یزد | فرآوری بهداشتی و زنجیره سرد گوشت',
    description: 'کشتارگاه مکانیزه، سالن‌های قطعه‌بندی تمام‌استیل، نظارت مقیم دکتر دامپزشک و ناوگان اختصاصی حمل گوشت در یزد.',
    url: 'https://bisansam.ir/about',
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AboutPage() {
  const data = await getCompanyBundle();
  const settings = data.settings;
  const standards = data.standards || [];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      
      {/* Page Header Banner */}
      <section className="bg-[#111216] text-white py-12 sm:py-16 border-b border-[#252733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="inline-flex items-center gap-2 bg-[#21232c] border border-[#333644] px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>هویت و تاریخچه سازمانی</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            درباره شرکت بی‌سان سام یزد
          </h1>
          <p className="text-xs sm:text-base text-gray-300 max-w-3xl mt-2 leading-relaxed">
            پیشگام در زنجیره یکپارچه پرورش، کشتار مکانیزه، بسته‌بندی در اتمسفر اصلاح‌شده (MAP) و توزیع پروتئین بهداشتی در مرکز و سراسر کشور.
          </p>
        </div>
      </section>

      {/* Main Corporate Story & Facility Photos */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-right">
              <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
                تاسیس {settings.established_year} • استان یزد
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111216] leading-tight">
                تعهد بی‌قیدوشرط به امنیت غذایی و سلامت جامعه
              </h2>
              
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                <p>
                  {settings.about_story}
                </p>
                <p>
                  در شیوه‌های سنتی و غیرمکانیزه، عرضه گوشت بلافاصله پس از کشتار و بدون عبور از دوره طلایی پیش‌سردسازی ۲۴ ساعته، علاوه بر ایجاد سفتی بافت، مخاطرات جدی انتقال بیماری‌های مشترک انسان و دام نظیر تب خونریزی‌دهنده کریمه کنگو (CCHF) را به همراه دارد. از سوی دیگر بسته‌بندی‌های متداول فاقد گاز محافظ، سرعت فساد باکتریایی را افزایش داده و عمر مفید گوشت تازه را به کمتر از ۴۸ ساعت محدود می‌کنند.
                </p>
                <p>
                  مجتمع فرآوری بی‌سان سام یزد با حذف کامل این گره‌های بهداشتی، خطوط تمام اتوماتیک پوست‌کنی هیدرولیک، سالن‌های پیش‌سردسازی صفر تا ۲ درجه و دستگاه‌های بسته‌بندی در اتمسفر اصلاح‌شده (MAP) را مستقر نموده است. ما با جایگزینی اکسیژن با گازهای خنثی طبیعی، ماندگاری گوشت تازه را تا ۲ برابر بدون هیچ‌گونه ماده نگهدارنده تضمین نموده‌ایم.
                </p>
              </div>

              {/* Vision Box */}
              <div className="bg-[#faf7f2] border-r-4 border-[#9f1239] p-5 rounded-xl space-y-1">
                <h4 className="text-sm font-bold text-[#111216]">چشم‌انداز و ماموریت:</h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {settings.about_vision}
                </p>
              </div>
            </div>

            {/* Visual Mosaic */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/images/facilities/livestock-ranch.jpg"
                  alt="مزرعه پرورش دام بی‌سان سام یزد"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-bold">
                  انتخاب دام‌های ممتاز و اصلاح‌نژاد جوان
                </div>
              </div>

              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <Image
                  src="/images/facilities/cold-chain-facility.jpg"
                  alt="تاسیسات سردخانه‌ای و سالن قطعه‌بندی"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-bold">
                  سالن‌های قطعه‌بندی تمام‌استیل مجهز به فیلتراسیون هوا
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Official Standards & Certificates */}
      <section className="py-16 bg-[#faf8f5] border-t border-[#e5dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
              تاییدیه‌ها و گواهینامه‌ها
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111216] mt-1">
              استانداردهای بهداشتی و نظارتی رسمی
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standards.map((st) => (
              <div key={st.id} className="card-craft p-6 space-y-3">
                <div className="badge-fresh text-xs font-bold">
                  {st.badge_text}
                </div>
                <h3 className="text-base font-bold text-[#111216]">
                  {st.title}
                </h3>
                <div className="text-xs text-rose-800 font-mono font-bold">
                  شناسه: {st.license_number}
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {st.description}
                </p>
                <div className="pt-2 text-[11px] text-gray-400 border-t border-gray-100">
                  مرجع: {st.authority}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Banner */}
          <div className="mt-14 bg-[#14151a] rounded-2xl p-8 sm:p-10 text-white text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#2b2d39]">
            <div>
              <h3 className="text-lg sm:text-xl font-black">
                مایل به بازدید حضوری از خطوط فرآوری و عقد قرارداد هستید؟
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                تیم روابط عمومی و بازرگانی آماده هماهنگی جلسات کاری با نمایندگان هتل‌ها و ارگان‌هاست.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary-meat px-6 py-3 text-sm font-bold flex-shrink-0"
            >
              هماهنگی و تماس با ما
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
