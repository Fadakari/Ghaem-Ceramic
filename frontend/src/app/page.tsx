import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HomeProductShowcase from '@/components/HomeProductShowcase';
import Link from 'next/link';
import Image from 'next/image';
import { getCompanyBundle } from '@/lib/api';
import { getSafeImageUrl } from '@/lib/imageHelper';

export const metadata: Metadata = {
  title: 'شرکت بی‌سان سام یزد | مجتمع فرآوری بهداشتی گوشت و فرآورده‌های دامی',
  description: 'تامین تخصصی و مستقیم گوشت گرم گوساله، گوسفندی، شتر بومی یزد و ماکیان با نظارت مقیم سازمان دامپزشکی و پایش برخط زنجیره سرد برای سازمان‌ها، هتل‌ها و خانوار.',
  openGraph: {
    title: 'شرکت بی‌سان سام یزد | تامین تخصصی گوشت و فرآورده‌های دامی',
    description: 'کشتار صنعتی، بسته‌بندی در اتمسفر اصلاح‌شده MAP و تامین عمده برای هتل‌ها، رستوران‌ها و سازمان‌ها.',
    url: 'https://bisansam.ir',
    siteName: 'شرکت بی‌سان سام یزد',
    locale: 'fa_IR',
    type: 'website',
  },
};

export default async function HomePage() {
  const data = await getCompanyBundle();
  const settings = data.settings;
  const categories = data.categories || [];
  const services = data.services || [];
  const articles = data.articles?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1f2937]">
      {/* 1. Hero Section with Dynamic Backend Image & Single-Line Mobile Badge */}
      <Hero />

      {/* 2. Category Quick Navigator */}
      <section className="py-12 bg-white border-b border-[#e5dfd5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
              دسته‌بندی‌های فرآورده‌های پروتئینی
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-[#111216] mt-1">
              انتخاب بر اساس نوع دام و فرآوری
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.slug}`}
                className="group p-4 rounded-2xl border border-[#e5dfd5] bg-[#faf8f5] hover:bg-[#9f1239] hover:border-[#9f1239] transition-all duration-200 text-center flex flex-col items-center justify-center space-y-2 shadow-xs hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#9f1239] group-hover:text-white group-hover:bg-[#881337] transition-colors shadow-xs">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div className="text-xs sm:text-sm font-bold text-[#1f2937] group-hover:text-white transition-colors">
                  {cat.name}
                </div>
                <div className="text-[11px] text-gray-500 group-hover:text-rose-100 transition-colors line-clamp-1">
                  {cat.description || 'برش‌های استاندارد'}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Master Product Showcase with Clickable Cards & Modal Specs */}
      <HomeProductShowcase />

      {/* 4. Enterprise B2B Supply & HoReCa Spotlight */}
      <section className="py-16 sm:py-24 bg-[#14151a] text-white border-y border-[#262832]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#22242e] border border-[#373a48] px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-300">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span>تامین سازمانی و خدمات HoReCa</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black leading-tight text-white">
                تامین پایدار پروتئین برای هتل‌ها، رستوران‌ها و صنایع بزرگ کشور
              </h2>

              <p className="text-xs sm:text-base text-gray-300 leading-relaxed font-normal">
                شرکت بی‌سان سام یزد با سالن‌های مکانیزه کشتار، قطعه‌بندی تمام‌استیل و ناوگان یخچال‌دار جنوب شرق، قراردادهای تامین مستمر تناژ بالا را با تضمین ثبات کیفیت و فاکتور رسمی معتبر منعقد می‌نماید.
              </p>

              {/* Dynamic Services from Backend */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {services.slice(0, 4).map((srv) => (
                  <div key={srv.id} className="bg-[#1b1c23] border border-[#2b2d39] p-4 rounded-2xl">
                    <div className="text-xs text-rose-400 font-bold mb-1">{srv.title}</div>
                    <div className="text-xs text-gray-400 line-clamp-2">{srv.short_description}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="btn-primary-meat px-6 py-3 text-sm font-bold"
                >
                  <span>اطلاعات کامل خدمات و شرایط قرارداد</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <Link
                  href="/contact"
                  className="btn-secondary-dark px-6 py-3 text-sm font-bold"
                >
                  استعلام ظرفیت و درخواست جلسه
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-[#2b2d39] shadow-2xl h-80 sm:h-96 w-full">
                <Image
                  src={getSafeImageUrl(settings.facility_image, '/images/facilities/cold-chain-facility.jpg')}
                  alt="سالن قطعه‌بندی بهداشتی بی‌سان سام یزد"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10">
                  <div className="text-xs text-emerald-400 font-bold">تاسیسات فرآوری صنعتی یزد</div>
                  <div className="text-xs sm:text-sm font-black text-white mt-0.5">سالن‌های مجهز به اتمسفر کنترل‌شده و فیلتراسیون هوای استریل</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Health & Quality Assurance Pillars */}
      <section className="py-16 sm:py-20 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
              چرا بی‌سان سام یزد؟
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#111216] mt-1">
              ۴ رکن تضمین سلامت و اعتماد مصرف‌کننده
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-craft p-6 rounded-3xl space-y-3 bg-white">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#9f1239] flex items-center justify-center font-black text-lg">
                ۰۱
              </div>
              <h3 className="text-base font-bold text-[#111216]">نظارت مقیم دامپزشکی</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                معاینه دقیق دام قبل از ذبح و بازرسی میکروسکوپی لاشه توسط دکتر دامپزشک سازمان دامپزشکی کل کشور.
              </p>
            </div>

            <div className="card-craft p-6 rounded-3xl space-y-3 bg-white">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-lg">
                ۰۲
              </div>
              <h3 className="text-base font-bold text-[#111216]">ذبح ۱۰۰٪ شرعی</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                انجام ذبح توسط ذابحین متخصص تحت نظارت روحانی مقیم حوزه نمایندگی ولی‌فقیه در جهاد کشاورزی.
              </p>
            </div>

            <div className="card-craft p-6 rounded-3xl space-y-3 bg-white">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-black text-lg">
                ۰۳
              </div>
              <h3 className="text-base font-bold text-[#111216]">تکنولوژی گاز محافظ MAP</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                تزریق ترکیب طبیعی گازهای نیتروژن و CO2 جهت ممانعت از تکثیر باکتری بدون نیاز به هیچ ماده شیمیایی نگهدارنده.
              </p>
            </div>

            <div className="card-craft p-6 rounded-3xl space-y-3 bg-white">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-black text-lg">
                ۰۴
              </div>
              <h3 className="text-base font-bold text-[#111216]">پایش آنلاین برودت بار</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                حفظ بی‌وقفه دمای صفر الی ۲ درجه سانتی‌گراد از مرحله پیش‌سردخانه تا لحظه تخلیه در انبار مشتری.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Editorial Knowledge Base Preview - Fully Clickable Cards */}
      <section className="py-16 sm:py-20 bg-white border-t border-[#e2dcd2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
                دانشنامه و راهنمای سلامت گوشت
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111216] mt-1">
                آخرین مقالات تخصصی و آموزشی
              </h2>
            </div>
            <Link
              href="/articles"
              className="mt-4 sm:mt-0 text-xs sm:text-sm font-bold text-[#9f1239] hover:underline"
            >
              مشاهده تمامی مقالات ←
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {articles.map((article) => {
              const imageSrc = getSafeImageUrl(article.featured_image, '/images/articles/fresh-meat-guide.jpg');
              return (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="bg-white rounded-3xl border border-[#e5dfd5] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group block cursor-pointer"
                >
                  <div>
                    <div className="relative h-48 sm:h-52 w-full bg-gray-100 overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-xl border border-white/10">
                        {article.category}
                      </div>
                      <div className="absolute bottom-2.5 right-3 left-3 text-white text-[11px] flex items-center justify-between">
                        <span>{article.author}</span>
                        <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded font-mono">{article.reading_time}</span>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-bold text-[#111216] group-hover:text-[#9f1239] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 text-xs font-bold text-[#9f1239] flex items-center gap-1 group-hover:text-[#881337]">
                    <span>مطالعه کامل مقاله</span>
                    <span className="rotate-180 transition-transform group-hover:-translate-x-1">←</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Direct Wholesale Inquiry Banner */}
      <section className="py-12 bg-[#9f1239] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black">
            نیاز به تامین عمده گوشت گرم یا عقد قرارداد سازمانی دارید؟
          </h2>
          <p className="text-xs sm:text-base text-rose-100 max-w-2xl mx-auto leading-relaxed">
            کارشناسان بازرگانی بی‌سان سام یزد آماده پاسخگویی به استعلام تناژ، ارسال نمونه و تدوین قراردادهای بلندمدت با نرخ رسمی هستند.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-[#9f1239] hover:bg-rose-50 px-8 py-3.5 rounded-2xl font-black text-sm sm:text-base shadow-lg transition-colors"
            >
              ثبت فرم استعلام قیمت عمده
            </Link>
            <a
              href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
              className="border-2 border-white/60 hover:border-white text-white px-7 py-3 rounded-2xl font-bold text-sm sm:text-base transition-colors"
            >
              تماس مستقیم با واحد فروش: {settings.phone_sales}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
