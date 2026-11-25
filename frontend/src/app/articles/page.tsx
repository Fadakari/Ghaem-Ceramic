import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getArticles } from '@/lib/api';
import { getSafeImageUrl } from '@/lib/imageHelper';

export const metadata: Metadata = {
  title: 'دانشنامه و مقالات سلامت گوشت | شرکت بی‌سان سام یزد',
  description: 'مجموعه مقالات آموزشی و تخصصی پیرامون تشخیص گوشت تازه، مزایای گاز محافظ MAP، ارزش غذایی گوشت شتر کویر یزد، راهنمای برش‌ها و استانداردهای زنجیره سرد.',
  openGraph: {
    title: 'دانشنامه و مقالات تخصصی گوشت و پروتئین | بی‌سان سام یزد',
    description: 'راهنماهای علمی خرید، نگهداری بهداشتی و دستور پخت گوشت قرمز و سفید.',
    url: 'https://bisansam.ir/articles',
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ArticlesPage() {
  const articles = await getArticles();

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      
      {/* Page Header */}
      <section className="bg-[#111216] text-white py-12 sm:py-16 border-b border-[#252733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="inline-flex items-center gap-2 bg-[#21232c] border border-[#333644] px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>دانش‌نامه سلامت و بهداشت گوشت</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            مقالات و راهنماهای تخصصی پروتئین و سلامت دام
          </h1>
          <p className="text-xs sm:text-base text-gray-300 max-w-3xl mt-2 leading-relaxed">
            راهنماهای کاربردی پیرامون تشخیص گوشت گرم سالم، پایش زنجیره سرمایش، ارزش تغذیه‌ای فرآورده‌های دامی و تکنیک‌های پخت حرفه‌ای.
          </p>
        </div>
      </section>

      {/* Articles Grid - Fully Clickable Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {articles.map((article, index) => {
              const imageSrc = getSafeImageUrl(article.featured_image, '/images/articles/fresh-meat-guide.jpg');
              const indexPersian = (index + 1).toLocaleString('fa-IR', { minimumIntegerDigits: 2 });
              return (
                <Link
                  key={article.id}
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
                      <h2 className="text-base sm:text-lg font-black text-[#111216] group-hover:text-[#c21414] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h2>
                      <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
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
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
