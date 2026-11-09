import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import HomeProductShowcase from '@/components/HomeProductShowcase';
import MeatCutGuide from '@/components/MeatCutGuide';
import ScrollReveal from '@/components/ScrollReveal';
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

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function HomePage() {
  const data = await getCompanyBundle();
  const settings = data.settings;
  const categories = data.categories || [];
  const articles = data.articles?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1f2937]">
      {/* 1. Hero Section - Cinematic Luxury with Scroll Stagger */}
      <Hero />

      {/* 2. Refined Category Navigation Bar - Clean, Minimalist & Spacious */}
      <section className="py-12 bg-white border-b border-[#e5dfd5]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
                  سبد جامع فرآورده‌های پروتئینی
                </span>
                <h3 className="text-lg sm:text-xl font-black text-[#111216] mt-0.5">
                  دسته‌بندی مستقیم بر اساس نوع دام
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs font-bold text-gray-500 hover:text-[#9f1239] transition-colors"
              >
                نمایش تمام محصولات و قطعات ←
              </Link>
            </div>

            {/* Minimalist Pills */}
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.slug}`}
                  className="px-5 py-3 rounded-2xl border border-[#e5dfd5] bg-[#faf8f5] hover:bg-white hover:border-[#9f1239] hover:text-[#9f1239] text-xs sm:text-sm font-bold text-gray-700 transition-all duration-200 shadow-xs hover:shadow-md flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#9f1239] transition-colors"></span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Master Product Showcase with Clickable Cards & Scroll Reveal */}
      <HomeProductShowcase />

      {/* 4. Interactive Butcher Cut Anatomy Guide */}
      <MeatCutGuide />

      {/* 5. Enterprise B2B Supply & HoReCa Spotlight - Minimalist & Authoritative */}
      <section className="py-20 sm:py-32 bg-[#0c0d10] text-white border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-7 text-right">
              <ScrollReveal direction="up">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-rose-300">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                  <span>تامین زنجیره‌ای HoReCa و صنایع بزرگ</span>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={100}>
                <h2 className="text-3xl sm:text-5xl font-black leading-[1.25] text-white tracking-tight">
                  تأمین پایدار پروتئین برای هتل‌ها، بیمارستان‌ها و نهادهای کشور
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
                  شرکت بی‌سان سام یزد با سالن‌های مکانیزه کشتار، قطعه‌بندی بهداشتی استیل و ناوگان یخچال‌دار مجهز به سنسورهای IoT، قراردادهای تامین مستمر تناژ بالا را با تضمین ثبات کیفیت و فاکتور رسمی معتبر منعقد می‌نماید.
                </p>
              </ScrollReveal>

              {/* 3 Clean Assurance Highlights */}
              <ScrollReveal direction="up" delay={300}>
                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span>تضمین ثبات هفتگی و ماهانه قیمت در قراردادهای بلندمدت تأمین</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span>تحویل به موقع با ناوگان اختصاصی یخچال‌دار و بارنامه رسمی دامپزشکی</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-200">
                    <span className="w-6 h-6 rounded-full bg-emerald-950/60 border border-emerald-700/60 text-emerald-400 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                    <span>قطعه‌بندی و اتمسفر اصلاح‌شده MAP منطبق با دستورالعمل‌های هورکا و تدارکات</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/services"
                    className="btn-primary-meat px-8 py-3.5 text-sm font-bold shadow-xl shadow-rose-950/50"
                  >
                    <span>شرایط کامل قراردادهای سازمانی</span>
                    <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/contact"
                    className="btn-secondary-dark px-7 py-3.5 text-sm font-bold"
                  >
                    درخواست جلسه و استعلام قیمت
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={250}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-80 sm:h-96 w-full group">
                  <Image
                    src={getSafeImageUrl(settings.facility_image, '/images/facilities/cold-chain-facility.jpg')}
                    alt="سالن قطعه‌بندی بهداشتی بی‌سان سام یزد"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-4 right-4 left-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                    <div className="text-xs text-emerald-400 font-bold">تاسیسات فرآوری صنعتی یزد</div>
                    <div className="text-xs sm:text-sm font-black text-white mt-1">سالن‌های مکانیزه مجهز به فیلتراسیون هوای استریل و پایش مستمر دما</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Health & Quality Assurance Pillars - Spacious Editorial Layout */}
      <section className="py-20 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
                چرا بی‌سان سام یزد؟
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#111216] mt-2">
                ۴ رکن تضمین کیفیت، بهداشت و اعتماد
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal direction="up" delay={100}>
              <div className="bg-white p-7 rounded-3xl border border-[#e5dfd5] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 h-full">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#9f1239] flex items-center justify-center font-black text-lg">
                  ۰۱
                </div>
                <h3 className="text-base font-bold text-[#111216]">نظارت مقیم دامپزشکی</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  معاینه دقیق دام قبل از ذبح و بازرسی میکروسکوپی لاشه توسط دکتر دامپزشک مقیم سازمان دامپزشکی کل کشور.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={200}>
              <div className="bg-white p-7 rounded-3xl border border-[#e5dfd5] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 h-full">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-black text-lg">
                  ۰۲
                </div>
                <h3 className="text-base font-bold text-[#111216]">ذبح ۱۰۰٪ شرعی</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  انجام ذبح توسط ذابحین متخصص تحت نظارت مستقیم روحانی مقیم حوزه نمایندگی ولی‌فقیه در جهاد کشاورزی.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <div className="bg-white p-7 rounded-3xl border border-[#e5dfd5] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 h-full">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-sky-700 flex items-center justify-center font-black text-lg">
                  ۰۳
                </div>
                <h3 className="text-base font-bold text-[#111216]">تکنولوژی گاز محافظ MAP</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  تزریق ترکیب طبیعی گازهای نیتروژن و CO2 جهت جلوگیری از اکسیداسیون و فساد بدون نیاز به هیچ ماده شیمیایی افزودنی.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="bg-white p-7 rounded-3xl border border-[#e5dfd5] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 space-y-4 h-full">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-black text-lg">
                  ۰۴
                </div>
                <h3 className="text-base font-bold text-[#111216]">پایش آنلاین برودت IoT</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  حفظ بی‌وقفه دمای صفر الی ۲ درجه سانتی‌گراد از مرحله پیش‌سردخانه تا لحظه تخلیه در انبار مشتری با ردیابی لحظه‌ای.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. Editorial Knowledge Base Preview */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#e2dcd2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
                  دانشنامه و راهنمای سلامت گوشت
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#111216] mt-1.5">
                  تازه‌ترین مقالات تخصصی و آموزشی
                </h2>
              </div>
              <Link
                href="/articles"
                className="mt-4 sm:mt-0 text-xs sm:text-sm font-bold text-[#9f1239] hover:underline"
              >
                مشاهده تمامی مقالات دانشنامه ←
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {articles.map((article, index) => {
              const imageSrc = getSafeImageUrl(article.featured_image, '/images/articles/fresh-meat-guide.jpg');
              return (
                <ScrollReveal
                  key={article.id}
                  direction="up"
                  delay={index * 120}
                >
                  <Link
                    href={`/articles/${article.slug}`}
                    className="card-luxury overflow-hidden flex flex-col justify-between group block cursor-pointer h-full"
                  >
                    <div>
                      <div className="relative h-52 sm:h-56 w-full bg-[#1b1c23] overflow-hidden">
                        <Image
                          src={imageSrc}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-xl border border-white/10">
                          {article.category}
                        </div>
                        <div className="absolute bottom-3 right-4 left-4 text-white text-[11px] flex items-center justify-between">
                          <span>{article.author}</span>
                          <span className="bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded font-mono">{article.reading_time}</span>
                        </div>
                      </div>

                      <div className="p-6 space-y-2.5">
                        <h3 className="text-base font-bold text-[#111216] group-hover:text-[#9f1239] transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 text-xs font-bold text-[#9f1239] flex items-center gap-1.5 group-hover:text-[#881337]">
                      <span>مطالعه کامل مقاله</span>
                      <span className="rotate-180 transition-transform group-hover:-translate-x-1.5">←</span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Direct Wholesale Inquiry Banner - Luxury Dark Aesthetic */}
      <section className="py-16 sm:py-20 bg-[#0a0b0e] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/20 via-transparent to-rose-950/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              نیاز به تامین عمده پروتئین یا عقد قرارداد سازمانی دارید؟
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="text-xs sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              کارشناسان بازرگانی بی‌سان سام یزد آماده پاسخگویی به استعلام تناژ، ارسال نمونه و تدوین قراردادهای بلندمدت با نرخ رسمی هستند.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="btn-primary-meat px-8 py-3.5 text-sm sm:text-base font-bold shadow-xl shadow-rose-950/60"
              >
                ثبت فرم استعلام قیمت و تناژ
              </Link>
              <a
                href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                className="btn-secondary-dark px-7 py-3.5 text-sm sm:text-base font-bold"
              >
                تماس مستقیم با واحد فروش: {settings.phone_sales}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
