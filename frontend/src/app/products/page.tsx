import React from 'react';
import type { Metadata } from 'next';
import ProductsClientView from './ProductsClientView';
import { getCompanyBundle } from '@/lib/api';

export const metadata: Metadata = {
  title: 'کاتالوگ و لیست محصولات پروتئینی | شرکت بی‌سان سام یزد',
  description: 'جستجو و مشاهده انواع قطعات گوشت گرم گوساله، گوسفندی، شتر کویر یزد، استیک ریب‌آی، چرخ‌کرده و ماکیان با بسته‌بندی در اتمسفر اصلاح‌شده MAP و پروانه بهداشتی دامپزشکی.',
  openGraph: {
    title: 'کاتالوگ فرآورده‌های پروتئینی و گوشت گرم | بی‌سان سام یزد',
    description: 'کاتالوگ کامل قطعات گوشت، مشخصات فنی، ارزش غذایی، شیوه بسته‌بندی و راهنمای طبخ.',
    url: 'https://bisansam.ir/products',
  },
};

export default async function ProductsPage() {
  const data = await getCompanyBundle();
  const products = data.products?.length > 0 ? data.products : (data.featured_products || []);
  const categories = data.categories || [];

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      {/* Header Banner */}
      <section className="bg-[#111216] text-white py-12 sm:py-16 border-b border-[#252733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-right">
          <div className="inline-flex items-center gap-2 bg-[#21232c] border border-[#333644] px-3.5 py-1.5 rounded-full text-xs font-bold text-rose-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>کاتالوگ کامل فرآورده‌های دامی و پروتئینی</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
            برش‌های تخصصی گوشت و محصولات صنعتی
          </h1>
          <p className="text-xs sm:text-base text-gray-300 max-w-3xl mt-2 leading-relaxed">
            جستجو بر اساس نوع دام، شیوه برش، شرایط برودتی و نوع بسته‌بندی؛ با اطلاعات دقیق ارزش غذایی، درجه لطافت بافت و راهنمای طبخ سرآشپز.
          </p>
        </div>
      </section>

      {/* Interactive Master Catalog with Instant Search & Multi-Filters */}
      <ProductsClientView initialProducts={products} categories={categories} />
    </div>
  );
}
