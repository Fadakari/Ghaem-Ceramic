import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getArticles } from '@/lib/api';
import { getSafeImageUrl } from '@/lib/imageHelper';

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'مقاله یافت نشد | شرکت بی‌سان سام یزد',
    };
  }

  return {
    title: `${article.title} | دانشنامه بی‌سان سام یزد`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      url: `https://bisansam.ir/articles/${article.slug}`,
      images: [
        {
          url: getSafeImageUrl(article.featured_image, '/images/articles/fresh-meat-guide.jpg'),
        },
      ],
    },
    alternates: {
      canonical: `https://bisansam.ir/articles/${article.slug}`,
    },
  };
}

export default async function SingleArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getArticles();
  const relatedArticles = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const imageSrc = getSafeImageUrl(article.featured_image, '/images/articles/fresh-meat-guide.jpg');

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    image: imageSrc,
    author: {
      '@type': 'Person',
      name: article.author || 'کارشناس دامپزشکی بی‌سان سام یزد',
      jobTitle: article.author_role || 'متخصص کنترل کیفی',
    },
    publisher: {
      '@type': 'Organization',
      name: 'شرکت بی‌سان سام یزد',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bisansam.ir/images/brand/logo-full.png',
      },
    },
    datePublished: article.published_at || '2026-11-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bisansam.ir/articles/${article.slug}`,
    },
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1f2937]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Header & Breadcrumb */}
      <section className="bg-[#111216] text-white py-12 sm:py-16 border-b border-[#252733]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
            <Link href="/" className="hover:text-white transition">صفحه اصلی</Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition">مقالات و دانشنامه</Link>
            <span>/</span>
            <span className="text-rose-400 truncate">{article.title}</span>
          </div>

          <div className="inline-block bg-[#21232c] border border-[#333644] px-3.5 py-1 rounded-full text-xs font-bold text-rose-300 mb-4">
            {article.category}
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-gray-400 border-t border-[#232530] mt-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-rose-900/60 text-rose-300 font-bold flex items-center justify-center text-xs">
                دکتر
              </span>
              <div>
                <div className="font-bold text-gray-200">{article.author}</div>
                <div className="text-[10px] text-gray-500">{article.author_role}</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span>مدت زمان مطالعه:</span>
              <span className="font-bold text-white">{article.reading_time}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Main Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* Featured Image */}
        <div className="relative h-72 sm:h-[450px] w-full rounded-3xl overflow-hidden border border-[#e5dfd5] shadow-xl mb-10 bg-black">
          <Image
            src={imageSrc}
            alt={article.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 850px"
            className="object-cover"
          />
        </div>

        {/* Lead Summary */}
        <div className="bg-[#faf5ec] border-r-4 border-[#9f1239] p-6 rounded-2xl text-sm sm:text-base font-semibold text-gray-800 leading-relaxed mb-10 shadow-xs">
          {article.summary}
        </div>

        {/* Article Content Render */}
        <div className="prose prose-lg max-w-none text-gray-800 leading-loose space-y-6 text-sm sm:text-base">
          {article.content.split('\n\n').map((paragraph, index) => {
            const p = paragraph.trim();
            if (!p) return null;

            if (p.startsWith('### ')) {
              return (
                <h3 key={index} className="text-lg sm:text-xl font-black text-[#111216] pt-6 pb-2 border-b border-gray-200">
                  {p.replace('### ', '')}
                </h3>
              );
            }

            if (p.startsWith('* ')) {
              const items = p.split('\n* ').map((item) => item.replace('* ', ''));
              return (
                <ul key={index} className="space-y-2 list-disc list-inside bg-white p-5 rounded-2xl border border-gray-200">
                  {items.map((it, idx) => (
                    <li key={idx} className="text-gray-700">
                      {it}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-gray-700 leading-relaxed">
                {p}
              </p>
            );
          })}
        </div>

        {/* Wholesale Consultation CTA Box */}
        <div className="mt-14 bg-[#14151a] rounded-3xl p-8 text-white text-center sm:text-right flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#2b2d39]">
          <div>
            <h3 className="text-lg font-black">
              پرسشی درباره استانداردها یا نحوه تامین عمده دارید؟
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              کارشناسان بهداشت و بازرگانی بی‌سان سام یزد مشتاقانه پاسخگوی شما هستند.
            </p>
          </div>
          <Link
            href="/contact"
            className="btn-primary-meat px-6 py-3 text-xs sm:text-sm font-bold flex-shrink-0"
          >
            تماس و مشاوره بازرگانی
          </Link>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[#e5dfd5]">
            <h3 className="text-xl font-black text-[#111216] mb-6">
              سایر مقالات و راهنماهای مرتبط
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/articles/${rel.slug}`}
                  className="card-craft p-5 space-y-2 bg-white rounded-2xl border border-[#e5dfd5] group block"
                >
                  <span className="text-[10px] text-[#9f1239] font-bold block">
                    {rel.category}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-[#111216] group-hover:text-[#9f1239] transition-colors line-clamp-2">
                    {rel.title}
                  </h4>
                  <span className="text-[11px] text-gray-400 block pt-1">
                    {rel.reading_time}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </article>

    </div>
  );
}
