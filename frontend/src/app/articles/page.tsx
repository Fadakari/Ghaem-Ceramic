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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const imageSrc = getSafeImageUrl(article.featured_image, '/images/articles/fresh-meat-guide.jpg');
              return (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="bg-white rounded-3xl border border-[#e5dfd5] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between group block cursor-pointer"
                >
                  <div>
                    {/* Featured Image */}
                    <div className="relative h-56 sm:h-60 w-full bg-[#1b1c23] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-108 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      <div className="absolute top-3.5 right-3.5 bg-black/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-xl border border-white/10">
                        {article.category}
                      </div>

                      <div className="absolute bottom-3 right-4 left-4 flex items-center justify-between text-xs text-white/90">
                        <span className="font-bold flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                          {article.author}
                        </span>
                        <span className="bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-md text-[11px] font-mono">
                          {article.reading_time}
                        </span>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="p-6 space-y-3">
                      <h2 className="text-base sm:text-lg font-black text-[#111216] group-hover:text-[#9f1239] transition-colors line-clamp-2 leading-snug">
                        {article.title}
                      </h2>

                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-gray-100 mt-2 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#9f1239] group-hover:text-[#881337] flex items-center gap-1.5 transition-colors">
                      <span>مطالعه کامل مقاله</span>
                      <span className="rotate-180 transition-transform group-hover:-translate-x-1">←</span>
                    </span>
                    <span className="text-[11px] text-gray-400">
                      دانشنامه بی‌سان سام
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
