'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompany } from '@/context/CompanyContext';
import { Product } from '@/types/company';
import { getSafeImageUrl } from '@/lib/imageHelper';
import ScrollReveal from '@/components/ScrollReveal';

export default function HomeProductShowcase() {
  const { data } = useCompany();
  const products = data.featured_products?.length > 0 ? data.featured_products : (data.products || []);
  
  const [selectedAnimal, setSelectedAnimal] = useState<string>('all');

  const filteredProducts = selectedAnimal === 'all'
    ? products
    : products.filter((p) => p.animal_type === selectedAnimal);

  const filterTabs = [
    { key: 'all', label: 'همه فرآورده‌های برگزیده' },
    { key: 'beef', label: 'گوساله پرواری' },
    { key: 'lamb', label: 'گوسفند و بره' },
    { key: 'camel', label: 'شتر بومی یزد' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#faf8f5] text-[#1f2937] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Clean, Editorial & Spacious */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#e5dfd5]/80 pb-6 gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#9f1239] rounded-full"></span>
                <span className="text-xs font-bold text-[#9f1239] tracking-wider uppercase">
                  کاتالوگ تخصصی فرآورده‌های پروتئینی
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#111216] tracking-tight">
                برش‌های برگزیده و سبد محصولات ممتاز
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 max-w-2xl leading-relaxed">
                عرضه مستقیم لاشه، شقه و قطعه‌بندی بهداشتی در اتمسفر اصلاح‌شده (MAP) با پایش پیوسته زنجیره سرمایش.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#9f1239] hover:text-[#881337] transition-colors bg-white px-5 py-3 rounded-2xl border border-[#e5dfd5] shadow-xs group"
              >
                <span>مشاهده کل کاتالوگ ({products.length})</span>
                <svg className="w-4 h-4 rotate-180 group-hover:-translate-x-1.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Minimalist Filter Pills */}
        <ScrollReveal direction="up" delay={100}>
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            {filterTabs.map((tab) => {
              const active = selectedAnimal === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedAnimal(tab.key)}
                  className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#9f1239] text-white shadow-md shadow-rose-950/20'
                      : 'bg-white text-gray-600 border border-[#e5dfd5] hover:bg-[#f3ede3]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Product Cards Grid - Luxury Minimalist with Scroll Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProducts.map((product, index) => {
            const imageSrc = getSafeImageUrl(product.image);
            return (
              <ScrollReveal
                key={product.id}
                direction="up"
                delay={(index % 3) * 120}
              >
                <div className="card-luxury flex flex-col justify-between overflow-hidden group h-full">
                  <div>
                    {/* Photo & Clickable Anchor to Product Detail Page */}
                    <Link href={`/products/${product.slug}`} className="block relative h-64 sm:h-72 w-full bg-[#1b1c23] overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      />

                      {/* Subtle Gradient Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                      {/* Top Badges Bar - NEVER COLLIDES */}
                      <div className="absolute top-4 right-4 left-4 flex items-center justify-between pointer-events-none z-10">
                        <span className="badge-fresh shadow-md">
                          {product.animal_type_display || product.animal_type}
                        </span>
                        <span className="badge-cold shadow-md">
                          {product.temperature_state === 'chilled' ? 'گرم تازه ۰-۲°C' : 'منجمد IQF'}
                        </span>
                      </div>

                      {/* Cut Type Banner on Bottom of Photo */}
                      <div className="absolute bottom-3.5 right-4 left-4 text-white">
                        <div className="text-[11px] text-rose-300 font-medium">{product.cut_type}</div>
                        <div className="text-base sm:text-lg font-black truncate group-hover:text-rose-200 transition-colors">
                          {product.name}
                        </div>
                      </div>
                    </Link>

                    {/* Body Content - Spacious & Clean */}
                    <div className="p-6 space-y-4">
                      {/* Suitable for & Shelf life */}
                      <div className="space-y-1.5 text-xs text-gray-600">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-gray-900 shrink-0">کاربرد در طبخ:</span>
                          <span className="text-gray-700 truncate">{product.suitable_for}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-gray-900 shrink-0">ماندگاری بهداشتی:</span>
                          <span className="text-gray-700">{product.shelf_life}</span>
                        </div>
                      </div>

                      {/* Minimalist Marbling Gauge & Packaging Badge */}
                      <div className="flex items-center justify-between pt-2.5 border-t border-[#f0ebe0] text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-gray-500">ماربلینگ:</span>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                  star <= product.marbling_score
                                    ? 'bg-[#9f1239]'
                                    : 'bg-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                        </div>

                        <span className="badge-pill-subtle">
                          {product.packaging_type_display || 'بسته‌بندی MAP'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Buttons - Luxury Balance */}
                  <div className="px-6 pb-6 pt-1 flex items-center gap-2.5 border-t border-[#f0ebe0]/70">
                    <Link
                      href={`/products/${product.slug}`}
                      className="flex-1 py-3 px-3 rounded-xl bg-[#17181d] hover:bg-[#252730] text-white text-xs font-bold text-center transition-colors"
                    >
                      مشاهده آنالیز و پخت
                    </Link>

                    <Link
                      href={`/contact?subject=${encodeURIComponent(product.name)}`}
                      className="py-3 px-4 rounded-xl bg-[#9f1239] hover:bg-[#881337] text-white text-xs font-bold text-center transition-colors shadow-sm"
                      title="استعلام سفارش عمده"
                    >
                      استعلام تناژ
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
