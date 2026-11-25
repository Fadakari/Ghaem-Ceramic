'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product, ProductCategory } from '@/types/company';
import { getSafeImageUrl } from '@/lib/imageHelper';

interface Props {
  initialProducts: Product[];
  categories: ProductCategory[];
}

export default function ProductsClientView({ initialProducts, categories }: Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('all');
  const [selectedTemp, setSelectedTemp] = useState('all');

  // Filter products in real time with high performance
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Animal filter
      if (selectedAnimal !== 'all' && product.animal_type !== selectedAnimal) {
        return false;
      }

      // Temperature filter
      if (selectedTemp !== 'all' && product.temperature_state !== selectedTemp) {
        return false;
      }

      // Keyword search
      if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        const matchesName = product.name?.toLowerCase().includes(query);
        const matchesCut = product.cut_type?.toLowerCase().includes(query);
        const matchesDesc = product.description?.toLowerCase().includes(query);
        const matchesSuitable = product.suitable_for?.toLowerCase().includes(query);
        const matchesAnimal = product.animal_type_display?.toLowerCase().includes(query);

        if (!matchesName && !matchesCut && !matchesDesc && !matchesSuitable && !matchesAnimal) {
          return false;
        }
      }

      return true;
    });
  }, [initialProducts, selectedAnimal, selectedTemp, searchQuery]);

  const animalTabs = [
    { key: 'all', label: 'همه دام‌ها و طیور' },
    { key: 'beef', label: 'گوساله پرواری' },
    { key: 'lamb', label: 'گوسفند و بره' },
    { key: 'camel', label: 'شتر کویر یزد' },
    { key: 'poultry', label: 'طیور و ماکیان' },
  ];

  const tempTabs = [
    { key: 'all', label: 'همه شرایط نگهداری' },
    { key: 'chilled', label: 'گرم تازه (۰ تا ۴ درجه)' },
    { key: 'frozen', label: 'منجمد IQF (-۱۸ درجه)' },
  ];

  const hasActiveFilters = searchQuery !== '' || selectedAnimal !== 'all' || selectedTemp !== 'all';

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedAnimal('all');
    setSelectedTemp('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      
      {/* Search & Filter Toolbar */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 border border-[#e5dfd5] shadow-sm mb-10 space-y-6">
        
        {/* Search Bar Input */}
        <div className="relative">
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجوی نام قطعه، شیوه پخت (کباب، استیک، خورشت...)، نوع دام یا مشخصات..."
            className="w-full pr-12 pl-10 py-3.5 rounded-2xl border border-[#d6cebf] bg-[#faf8f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#c21414] text-sm sm:text-base font-medium placeholder-gray-400 text-gray-900 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter Rows */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-[#f0ebe0]">
          
          {/* Animal Type Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 ml-1">نوع محصول:</span>
            {animalTabs.map((tab) => {
              const active = selectedAnimal === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedAnimal(tab.key)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-[#c21414] text-white shadow-xs'
                      : 'bg-[#faf8f5] text-gray-700 hover:bg-[#f1ebe0] border border-[#e5dfd5]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Temperature State Filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-500 ml-1">وضعیت برودت:</span>
            {tempTabs.map((tab) => {
              const active = selectedTemp === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setSelectedTemp(tab.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                    active
                      ? 'bg-[#0284c7] text-white shadow-xs'
                      : 'bg-[#faf8f5] text-gray-700 hover:bg-[#f1ebe0] border border-[#e5dfd5]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter & Reset Filter Trigger */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
          <div>
            نمایش <span className="font-bold text-[#111216]">{filteredProducts.length}</span> محصول از کل{' '}
            <span className="font-bold text-[#111216]">{initialProducts.length}</span> فرآورده پروتئینی
          </div>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-[#9f1239] hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              <span>پاکسازی همه فیلترها</span>
              <span>✕</span>
            </button>
          )}
        </div>

      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#e5dfd5] space-y-4">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-[#c21414] mx-auto flex items-center justify-center text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-gray-800">
            محصولی با مشخصات جستجو شده یافت نشد
          </h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto">
            عبارت جستجو را تغییر دهید یا فیلترها را حذف کنید. کارشناسان ما آماده تامین هرگونه برش سفارشی طبق نیاز شما هستند.
          </p>
          <button
            onClick={resetFilters}
            className="btn-primary-meat px-6 py-2.5 text-xs font-bold cursor-pointer"
          >
            مشاهده همه محصولات
          </button>
        </div>
      ) : (
        /* Products Grid - Exact Mahya-Inspired Luxury Circular Floating Showcase */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 pt-6">
          {filteredProducts.map((product) => {
            const imageSrc = getSafeImageUrl(product.image);
            return (
              <div
                key={product.id}
                className="group flex flex-col items-center text-center space-y-6"
              >
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
                <div className="space-y-3 max-w-xs mx-auto w-full">
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
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed min-h-[32px]">
                    {product.suitable_for
                      ? `مناسب برای: ${product.suitable_for}`
                      : (product.description || 'تامین مستقیم با برش بهداشتی و حفظ زنجیره سرد')}
                  </p>

                  {/* Marbling Dots */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    <span className="text-[10px] font-bold text-gray-400 ml-1">ماربلینگ:</span>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          star <= product.marbling_score
                            ? 'bg-[#c21414]'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex items-center justify-center gap-2">
                    <Link
                      href={`/products/${product.slug}`}
                      className="px-5 py-2.5 rounded-full bg-[#17181d] hover:bg-[#c21414] text-white text-xs font-bold transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      مشاهده جزئیات
                    </Link>
                    <Link
                      href={`/contact?subject=${encodeURIComponent(product.name)}`}
                      className="px-4 py-2.5 rounded-full bg-red-50 hover:bg-[#c21414] text-[#c21414] hover:text-white border border-red-200 hover:border-transparent text-xs font-bold transition-all duration-300"
                    >
                      استعلام عمده
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}
