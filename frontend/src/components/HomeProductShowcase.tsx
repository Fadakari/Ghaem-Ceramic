'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCompany } from '@/context/CompanyContext';
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
    <section className="py-24 sm:py-36 bg-[#faf8f5] text-[#1f2937] relative overflow-hidden">
      
      {/* Subtle organic ambient circles in the background */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - High Breathing Whitespace & Minimal Luxury */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c21414]/10 text-[#c21414] text-xs font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c21414]" />
              <span>سبد جامع فرآورده‌های پروتئینی</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#111216] tracking-tight leading-tight">
              همه محصولات بی‌سان سام یزد
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto">
              صنایع گوشت بی‌سان سام یزد با بهره‌گیری از فناوری‌های نوین و نظارت دقیق دامپزشکی، مجموعه‌ای کامل از انواع گوشت گرم گوساله، گوسفندی، گوشت شتر اصیل کویر یزد و بسته‌بندی‌های اتمسفر اصلاح‌شده (MAP) را با حفظ بافت طبیعی و سلامت تضمین‌شده عرضه می‌نماید.
            </p>

            {/* Filter Pills with Generous Air */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              {filterTabs.map((tab) => {
                const active = selectedAnimal === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => setSelectedAnimal(tab.key)}
                    className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                      active
                        ? 'bg-[#c21414] text-white shadow-lg shadow-red-950/25 scale-105'
                        : 'bg-white text-gray-700 hover:text-[#c21414] border border-gray-200/80 hover:border-[#c21414]/40 hover:bg-gray-50'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* 
          A Completely Distinctive, Non-Standard Product Showcase:
          Circular / Organic Floating Portals with Generous Whitespace
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20">
          {filteredProducts.map((product, index) => {
            const imageSrc = getSafeImageUrl(product.image);
            return (
              <ScrollReveal
                key={product.id}
                direction="up"
                delay={(index % 3) * 120}
              >
                <div className="group flex flex-col items-center text-center space-y-6">
                  
                  {/* 
                    Circular Floating Artwork Frame
                    Instead of a box, it's a dramatic floating circle with concentric rings & soft shadow
                  */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2.5 bg-white border border-[#e5dfd5] group-hover:border-[#c21414] shadow-md group-hover:shadow-2xl group-hover:shadow-red-950/15 group-hover:scale-105 transition-all duration-500 block overflow-hidden cursor-pointer"
                  >
                    {/* Inner Clipped Circle */}
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#1a1b20]">
                      <Image
                        src={imageSrc}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                      
                      {/* Floating Temperature Badge on Bottom of Circle */}
                      <div className="absolute bottom-3 inset-x-0 flex justify-center">
                        <span className="bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-sm">
                          {product.temperature_state === 'chilled' ? 'گرم تازه ۰ تا ۲+ °C' : 'منجمد IQF'}
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Clean Typography & Minimalist Details */}
                  <div className="space-y-3 max-w-xs mx-auto">
                    
                    {/* Animal Type & Cut Pill */}
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-[11px] font-bold text-[#c21414] bg-red-50 px-3 py-0.5 rounded-full border border-red-100">
                        {product.animal_type_display || product.animal_type}
                      </span>
                      <span className="text-[11px] text-gray-500 font-medium">
                        {product.cut_type}
                      </span>
                    </div>

                    {/* Product Name */}
                    <Link
                      href={`/products/${product.slug}`}
                      className="block text-lg sm:text-xl font-black text-[#111216] group-hover:text-[#c21414] transition-colors leading-snug"
                    >
                      {product.name}
                    </Link>

                    {/* Culinary Usage */}
                    <p className="text-xs text-gray-600 line-clamp-1 leading-relaxed">
                      {product.suitable_for ? `مناسب برای: ${product.suitable_for}` : 'تامین با بهترین استاندارد برش'}
                    </p>

                    {/* Marbling Dots Indicator */}
                    <div className="flex items-center justify-center gap-1.5 pt-1 text-xs text-gray-500">
                      <span className="text-[11px]">ماربلینگ:</span>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`w-2 h-2 rounded-full ${
                              star <= (product.marbling_score || 3)
                                ? 'bg-[#c21414]'
                                : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Sleek Minimalist Action Pill */}
                    <div className="pt-2">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-gray-700 group-hover:text-white bg-gray-100 group-hover:bg-[#c21414] transition-all duration-300 shadow-2xs group-hover:shadow-md"
                      >
                        <span>مشاهده مشخصات و برش</span>
                        <span className="rotate-180 transition-transform group-hover:-translate-x-1">←</span>
                      </Link>
                    </div>

                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Wide CTA to Complete Catalog */}
        <div className="text-center mt-20 sm:mt-28">
          <Link
            href="/products"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-gray-300 hover:border-[#c21414] bg-white hover:bg-[#c21414] text-gray-800 hover:text-white text-xs sm:text-sm font-bold shadow-xs hover:shadow-lg transition-all duration-300"
          >
            <span>مشاهده تمامی محصولات و کاتالوگ جامع ({products.length} قلم)</span>
            <span className="rotate-180">←</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
