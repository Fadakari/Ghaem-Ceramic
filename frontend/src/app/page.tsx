import React from 'react';
import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import FactoryShowcase from '@/components/FactoryShowcase';
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

  const defaultCategoryIcons: Record<string, string> = {
    'fresh-beef': '/images/cat-fresh.png',
    'minced-and-processed': '/images/cat-processed.png',
    'frozen-cuts': '/images/cat-frozen.png',
    'poultry-cuts': '/images/cat-sokhari.png',
    'horeca-bulk': '/images/cat-wholesale.png',
    'yazd-camel-meat': '/images/cat-sokhari.png',
  };

  const displayCategories = categories.length >= 3
    ? categories.slice(0, 5).map((cat) => ({
        slug: cat.slug,
        name: cat.name,
        subtitle: cat.subtitle || cat.description || 'تامین مستقیم با نظارت مقیم دامپزشکی',
        image: getSafeImageUrl(cat.image, defaultCategoryIcons[cat.slug] || '/images/cat-fresh.png'),
        href: cat.slug === 'horeca-bulk' ? '/services' : `/products?category=${cat.slug}`,
        btnText: cat.slug === 'horeca-bulk' ? 'خدمات سازمانی' : 'مشاهده محصولات',
      }))
    : [
        {
          slug: 'fresh-beef',
          name: 'محصولات تازه',
          subtitle: 'گوشت گرم گوساله و گوسفندی کشتار روز',
          image: '/images/cat-fresh.png',
          href: '/products?category=fresh-beef',
          btnText: 'مشاهده محصولات',
        },
        {
          slug: 'minced-and-processed',
          name: 'چرخ‌کرده و قطعه‌بندی',
          subtitle: 'چرخ‌کرده خالص، استیک، راسته و فیله',
          image: '/images/cat-processed.png',
          href: '/products?category=minced-and-processed',
          btnText: 'مشاهده محصولات',
        },
        {
          slug: 'yazd-camel-meat',
          name: 'گوشت شتر کویر یزد',
          subtitle: 'کم‌چرب، گرم‌مزاج و سرشار از آهن طبیعی',
          image: '/images/cat-sokhari.png',
          href: '/products?category=yazd-camel-meat',
          btnText: 'مشاهده محصولات',
        },
        {
          slug: 'frozen-cuts',
          name: 'فرآورده‌های منجمد',
          subtitle: 'بسته‌بندی اتمسفر محافظ و انجماد IQF',
          image: '/images/cat-frozen.png',
          href: '/products?category=frozen-cuts',
          btnText: 'مشاهده محصولات',
        },
        {
          slug: 'horeca-bulk',
          name: 'محصولات عمده',
          subtitle: 'تأمین هتل‌ها، هایپرمارکت‌ها و ارگان‌ها',
          image: '/images/cat-wholesale.png',
          href: '/services',
          btnText: 'خدمات سازمانی',
        },
      ];

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1f2937]">
      {/* 1. Hero Section - Cinematic Luxury with Mahya Red Accents */}
      <Hero />

      {/* 2. Signature Quick Category Grid - Exact Mahya Protein Under-Slider Style */}
      <section className="py-12 sm:py-16 bg-white border-b border-[#ede7dd] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold text-[#c21414] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c21414]"></span>
                  دسته‌بندی‌های اصلی فرآورده‌های پروتئینی
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#111216] mt-1">
                  تامین مستقیم بر اساس نوع دام و شیوه فرآوری
                </h3>
              </div>
              <Link
                href="/products"
                className="text-xs sm:text-sm font-bold text-[#c21414] hover:text-[#990f0f] transition-colors flex items-center gap-1"
              >
                <span>مشاهده کاتالوگ جامع محصولات</span>
                <span className="rotate-180">←</span>
              </Link>
            </div>

            {/* 5 Prominent Mahya-Style Category Round Cards - Dynamically Connected to Backend */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-8">
              {displayCategories.map((cat, idx) => (
                <Link
                  key={`${cat.slug}-${idx}`}
                  href={cat.href}
                  className={`group p-5 rounded-2xl bg-[#fcfbfa] hover:bg-white border border-[#ede7dd] hover:border-[#c21414] shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between ${
                    idx === 4 ? 'col-span-2 sm:col-span-1' : ''
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-gray-100 group-hover:border-[#c21414] flex items-center justify-center p-3 shadow-xs group-hover:shadow-md group-hover:scale-105 transition-all duration-300 mb-3 overflow-hidden">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        width={70}
                        height={70}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-black text-sm text-[#111216] group-hover:text-[#c21414] transition-colors">
                      {cat.name}
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed line-clamp-2">
                      {cat.subtitle}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-gray-100 w-full flex items-center justify-center gap-1 text-[11px] text-[#c21414] font-bold">
                    <span>{cat.btnText}</span>
                    <span className="rotate-180 group-hover:-translate-x-1 transition-transform">←</span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <span className="text-xs font-bold text-gray-400 pl-1">دسترسی سریع به دسته‌ها:</span>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.slug}`}
                  className="px-4 py-2 rounded-xl border border-[#ede7dd] bg-[#fcfbfa] hover:bg-white hover:border-[#c21414] hover:text-[#c21414] text-xs font-bold text-gray-700 transition-all duration-200 shadow-2xs flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#c21414] transition-colors"></span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 
        3. Factory & Processing Facilities Showcase - Dedicated Mahya-Style Section (.main-projects)
        Explicitly requested by the user: "پایین بخش هیرو مثل مهیا بخش هایی برای عکس های کارخانه و... داشته باشه"
      */}
      <FactoryShowcase />

      {/* 4. Master Product Showcase with Clickable Cards ("همه محصولات بی‌سان سام") */}
      <HomeProductShowcase />

      {/* 5. Interactive Butcher Cut Anatomy Guide */}
      <MeatCutGuide />

      {/* 6. Enterprise B2B Supply & HoReCa Spotlight - Minimalist & Authoritative */}
      <section className="py-20 sm:py-32 bg-[#0c0d10] text-white border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-7 text-right">
              <ScrollReveal direction="up">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold text-rose-300">
                  <span className="w-2 h-2 rounded-full bg-[#c21414] animate-pulse"></span>
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
              <ScrollReveal direction="up" delay={250}>
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

      {/* 7. Health & Quality Assurance Pillars */}
      <section className="py-20 sm:py-32 bg-[#faf8f5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-bold text-[#c21414] uppercase tracking-wider">
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
                <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#c21414] flex items-center justify-center font-black text-lg">
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

      {/* 8. Editorial Knowledge Base Preview (Like Mahya News & Articles) */}
      <section className="py-20 sm:py-28 bg-white border-t border-[#e2dcd2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold text-[#c21414] uppercase tracking-wider">
                  دانشنامه و راهنمای سلامت گوشت
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-[#111216] mt-1.5">
                  تازه‌ترین مقالات تخصصی و اخبار صنعت
                </h2>
              </div>
              <Link
                href="/articles"
                className="mt-4 sm:mt-0 text-xs sm:text-sm font-bold text-[#c21414] hover:underline"
              >
                مشاهده تمامی مقالات دانشنامه ←
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {articles.map((article, index) => {
              const imageSrc = getSafeImageUrl(article.featured_image, '/images/articles/fresh-meat-guide.jpg');
              const indexPersian = (index + 1).toLocaleString('fa-IR', { minimumIntegerDigits: 2 });
              return (
                <ScrollReveal
                  key={article.id}
                  direction="up"
                  delay={index * 120}
                >
                  <Link
                    href={`/articles/${article.slug}`}
                    className="group relative bg-[#fcfbfa] hover:bg-white rounded-[2rem] border border-[#e8e2d8] hover:border-[#c21414] p-5 sm:p-6 shadow-xs hover:shadow-2xl hover:shadow-red-950/10 hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-full cursor-pointer overflow-hidden"
                  >
                    {/* Top Editorial Index & Meta Bar */}
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#f0ebe0]">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#c21414]" />
                          <span className="text-[11px] font-bold text-[#c21414] bg-red-50 px-3 py-1 rounded-full border border-red-100">
                            {article.category || 'دانشنامه گوشت'}
                          </span>
                        </div>
                        <span className="text-xl sm:text-2xl font-black font-mono text-gray-300 group-hover:text-[#c21414] transition-colors">
                          {indexPersian}
                        </span>
                      </div>

                      {/* Architectural Photo Window */}
                      <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#181920] my-5 shadow-xs">
                        <Image
                          src={imageSrc}
                          alt={article.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />
                        
                        {/* Bottom Inset Tag on Image */}
                        <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-[11px] text-white">
                          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            {article.author || 'واحد کنترل کیفیت'}
                          </span>
                          <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/15 font-mono text-gray-200">
                            {article.reading_time || '۴ دقیقه'}
                          </span>
                        </div>
                      </div>

                      {/* Headline & Abstract */}
                      <div className="space-y-3">
                        <h3 className="text-base sm:text-lg font-black text-[#111216] group-hover:text-[#c21414] transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                          {article.summary}
                        </p>
                      </div>
                    </div>

                    {/* Interactive Footer Action */}
                    <div className="pt-5 mt-4 border-t border-[#f0ebe0] flex items-center justify-between">
                      <span className="text-xs font-bold text-[#c21414] group-hover:text-[#990f0f] transition-colors">
                        مطالعه مقاله تخصصی
                      </span>
                      <div className="w-8 h-8 rounded-full bg-red-50 text-[#c21414] group-hover:bg-[#c21414] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs group-hover:scale-110">
                        <span className="rotate-180 text-sm font-black transition-transform group-hover:-translate-x-0.5">←</span>
                      </div>
                    </div>

                    {/* Subtle Bottom Crimson Accent Line on Hover */}
                    <div className="absolute bottom-0 inset-x-8 h-1 bg-[#c21414] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Direct Wholesale Inquiry Banner - Luxury Dark Aesthetic */}
      <section className="py-16 sm:py-20 bg-[#0a0b0e] text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/20 via-transparent to-rose-950/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7 relative z-10">
          <ScrollReveal direction="up">
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              {settings.wholesale_title || 'نیاز به تامین عمده پروتئین یا عقد قرارداد سازمانی دارید؟'}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <p className="text-xs sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {settings.wholesale_subtitle || 'کارشناسان بازرگانی بی‌سان سام یزد آماده پاسخگویی به استعلام تناژ، ارسال نمونه و تدوین قراردادهای بلندمدت با نرخ رسمی هستند.'}
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
