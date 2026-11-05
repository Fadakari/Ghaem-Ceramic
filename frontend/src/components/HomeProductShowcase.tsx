'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompany } from '@/context/CompanyContext';
import { Product } from '@/types/company';
import { getSafeImageUrl } from '@/lib/imageHelper';

export default function HomeProductShowcase() {
  const { data } = useCompany();
  const products = data.featured_products?.length > 0 ? data.featured_products : (data.products || []);
  
  const [selectedAnimal, setSelectedAnimal] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedAnimal === 'all'
    ? products
    : products.filter((p) => p.animal_type === selectedAnimal);

  const filterTabs = [
    { key: 'all', label: 'همه محصولات برگزیده' },
    { key: 'beef', label: 'گوساله پرواری' },
    { key: 'lamb', label: 'گوسفندی تازه' },
    { key: 'camel', label: 'شتر کویر یزد' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#faf8f5] text-[#1f2937] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 border-b border-[#e2dcd2] pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-1 bg-[#9f1239] rounded-full"></span>
              <span className="text-xs sm:text-sm font-extrabold text-[#9f1239] tracking-wide uppercase">
                کاتالوگ تخصصی گوشت و فرآورده‌های دامی
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#111216]">
              برش‌های برگزیده و سبد محصولات پروتئینی
            </h2>
            <p className="text-xs sm:text-base text-gray-600 max-w-2xl leading-relaxed">
              عرضه مستقیم لاشه، شقه، قطعه‌بندی بهداشتی در اتمسفر اصلاح‌شده (MAP) و وکیوم ترموفرمینگ، تحت نظارت مقیم اداره کل دامپزشکی.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-black text-[#9f1239] hover:text-[#881337] group transition-colors bg-white px-4 py-2.5 rounded-xl border border-[#e2dcd2] shadow-xs"
            >
              <span>مشاهده و جستجو در کل محصولات ({products.length} محصول)</span>
              <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {filterTabs.map((tab) => {
            const active = selectedAnimal === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setSelectedAnimal(tab.key)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  active
                    ? 'bg-[#9f1239] text-white shadow-md shadow-rose-950/20'
                    : 'bg-white text-gray-700 border border-[#e2dcd2] hover:bg-[#f1ebe0]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid with Organic Butcher Craft Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const imageSrc = getSafeImageUrl(product.image);
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-[#e5dfd5] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo & Clickable Anchor to Product Detail Page */}
                  <Link href={`/products/${product.slug}`} className="block relative h-60 sm:h-64 w-full bg-[#1b1c23] overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />

                    {/* Gradient Overlay for bottom text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 right-3.5 flex flex-wrap gap-1.5">
                      <span className="badge-fresh shadow-md text-xs font-bold px-2.5 py-0.5">
                        {product.animal_type_display || product.animal_type}
                      </span>
                      {product.temperature_state === 'chilled' ? (
                        <span className="badge-cold shadow-md text-xs font-bold px-2.5 py-0.5">
                          گرم تازه ۰-۲°C
                        </span>
                      ) : (
                        <span className="badge-cold shadow-md text-xs font-bold px-2.5 py-0.5">
                          منجمد IQF
                        </span>
                      )}
                    </div>

                    <div className="absolute top-3.5 left-3.5">
                      <span className="stamp-seal bg-white/95 text-[10px] font-bold px-2.5 py-0.5 shadow-sm">
                        {product.packaging_type_display || 'بسته‌بندی MAP'}
                      </span>
                    </div>

                    {/* Cut Type Banner on Bottom of Photo */}
                    <div className="absolute bottom-3 right-4 left-4 text-white">
                      <div className="text-[11px] text-rose-300 font-medium">{product.cut_type}</div>
                      <div className="text-base sm:text-lg font-black truncate group-hover:text-rose-200 transition-colors">
                        {product.name}
                      </div>
                    </div>
                  </Link>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Suitable for & Shelf life */}
                    <div className="space-y-2 text-xs text-gray-600">
                      <div className="flex items-start gap-1.5">
                        <span className="font-bold text-gray-900 flex-shrink-0">کاربرد در پخت:</span>
                        <span className="text-gray-700">{product.suitable_for}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-gray-900 flex-shrink-0">ماندگاری بهداشتی:</span>
                        <span className="text-gray-700">{product.shelf_life}</span>
                      </div>
                    </div>

                    {/* Quality Indicators: Marbling & Tenderness */}
                    <div className="bg-[#faf7f2] rounded-2xl p-3.5 grid grid-cols-2 gap-2 text-xs border border-[#e8ded0]">
                      <div>
                        <div className="text-[10px] text-gray-500 font-bold mb-1">ماربلینگ (چربی بافت)</div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`w-3 h-3 rounded-full ${
                                star <= product.marbling_score
                                  ? 'bg-[#9f1239]'
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="text-[10px] text-gray-500 font-bold mb-1">لطافت و تردی بافت</div>
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              className={`w-3 h-3 rounded-full ${
                                star <= product.tenderness_rating
                                  ? 'bg-emerald-600'
                                  : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center gap-2 border-t border-[#f0ebe0]">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#1c1d22] hover:bg-[#2c2d36] text-white text-xs font-bold text-center transition-colors"
                  >
                    مشاهده مشخصات و آنالیز
                  </Link>

                  <Link
                    href={`/contact?subject=${encodeURIComponent(product.name)}`}
                    className="py-2.5 px-3.5 rounded-xl bg-[#9f1239] hover:bg-[#881337] text-white text-xs font-bold text-center transition-colors shadow-sm"
                    title="استعلام خرید عمده"
                  >
                    استعلام تناژ
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
