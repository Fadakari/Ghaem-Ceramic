import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import { getCompanyBundle } from '@/lib/api';

export const metadata: Metadata = {
  title: 'تماس با ما و استعلام قیمت عمده | شرکت بی‌سان سام یزد',
  description: 'ارتباط مستقیم با واحد بازرگانی، فروش و پشتیبانی کیفی شرکت بی‌سان سام یزد جهت ثبت سفارش‌های عمده، استعلام تناژ و انعقاد قراردادهای تامین پروتئین.',
  openGraph: {
    title: 'ارتباط با ما و پشتیبانی بازرگانی | شرکت بی‌سان سام یزد',
    description: 'استعلام قیمت عمده گوشت گرم، تامین هورکا و قراردادهای سازمانی.',
    url: 'https://bisansam.ir/contact',
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ContactPage() {
  const data = await getCompanyBundle();
  const settings = data.settings;

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      
      {/* Page Header */}
      <section className="bg-[#111216] text-white py-12 sm:py-16 border-b border-[#252733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="inline-flex items-center gap-2 bg-[#21232c] border border-[#333644] px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>واحد بازرگانی و پاسخگویی سازمانی</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            ارتباط با ما، استعلام تناژ و پشتیبانی
          </h1>
          <p className="text-xs sm:text-base text-gray-300 max-w-3xl mt-2 leading-relaxed">
            پاسخگویی مستقیم به مدیران رستوران‌ها، هتل‌ها، کترینگ‌ها، سازمان‌ها و بیمارستان‌های سراسر کشور جهت تامین مداوم گوشت باکیفیت و نرخ رسمی.
          </p>
        </div>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Contact Directory Cards */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-[#e5dfd5] space-y-6 shadow-xs">
                <div>
                  <span className="text-[11px] font-bold text-[#9f1239] uppercase tracking-wider block mb-1">
                    دفتر مرکزی و مجتمع فرآوری یزد
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-[#111216]">
                    اطلاعات تماس مستقیم
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  
                  {/* Address */}
                  <div className="bg-white p-4 rounded-xl border border-[#e5dfd5]">
                    <span className="text-gray-400 text-xs block mb-1">نشانی کارخانه و انبار مرکزی:</span>
                    <span className="text-gray-800 font-medium leading-relaxed">
                      {settings.address}
                    </span>
                  </div>

                  {/* Sales Phone */}
                  <div className="bg-white p-4 rounded-xl border border-[#e5dfd5]">
                    <span className="text-gray-400 text-xs block mb-1">واحد بازرگانی و سفارش‌های عمده:</span>
                    <a
                      href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                      className="text-base font-black text-[#9f1239] hover:underline font-mono block mt-0.5"
                      dir="ltr"
                    >
                      {settings.phone_sales}
                    </a>
                  </div>

                  {/* Central Phone */}
                  <div className="bg-white p-4 rounded-xl border border-[#e5dfd5]">
                    <span className="text-gray-400 text-xs block mb-1">تلفنخانه مرکزی:</span>
                    <a
                      href={`tel:${settings.phone_primary.replace(/[^0-9]/g, '')}`}
                      className="text-sm font-bold text-gray-800 font-mono block mt-0.5"
                      dir="ltr"
                    >
                      {settings.phone_primary}
                    </a>
                  </div>

                  {/* Email & Hours */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-white p-4 rounded-xl border border-[#e5dfd5]">
                      <span className="text-gray-400 text-xs block mb-1">پست الکترونیکی:</span>
                      <a href={`mailto:${settings.email}`} className="text-xs font-bold text-gray-800 block truncate" dir="ltr">
                        {settings.email}
                      </a>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[#e5dfd5]">
                      <span className="text-gray-400 text-xs block mb-1">کد دامپزشکی:</span>
                      <span className="text-xs font-bold text-emerald-700 block font-mono">
                        {settings.veterinary_code}
                      </span>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="bg-white p-4 rounded-xl border border-[#e5dfd5]">
                    <span className="text-gray-400 text-xs block mb-1">ساعات پاسخگویی اداری:</span>
                    <span className="text-xs text-gray-700 leading-relaxed font-medium">
                      {settings.working_hours}
                    </span>
                  </div>

                </div>

              </div>

            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7 bg-[#faf8f5] rounded-2xl p-6 sm:p-10 border border-[#e5dfd5] shadow-xs">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider block mb-1">
                  فرم استعلام و ثبت تقاضا
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111216]">
                  استعلام قیمت و شرایط تامین سازمانی
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  مشخصات درخواست خود را مرقوم فرمایید تا کارشناسان فروش در کوتاه‌ترین زمان با پیش‌فاکتور رسمی پاسخ دهند.
                </p>
              </div>

              <Suspense fallback={<div className="text-center py-10 text-gray-500 text-xs">در حال فراخوانی فرم استعلام...</div>}>
                <ContactForm />
              </Suspense>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQSection />

    </div>
  );
}
