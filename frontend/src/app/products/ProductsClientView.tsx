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
            className="w-full pr-12 pl-10 py-3.5 rounded-2xl border border-[#d6cebf] bg-[#faf8f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#9f1239] text-sm sm:text-base font-medium placeholder-gray-400 text-gray-900 transition-colors"
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
                      ? 'bg-[#9f1239] text-white shadow-xs'
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
          <div className="w-16 h-16 rounded-full bg-rose-50 text-[#9f1239] mx-auto flex items-center justify-center text-2xl">
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
        /* Products Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const imageSrc = getSafeImageUrl(product.image);
            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-[#e5dfd5] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo & Clickable Area */}
                  <Link href={`/products/${product.slug}`} className="block relative h-60 sm:h-64 w-full bg-[#1b1c23] overflow-hidden">
                    <Image
                      src={imageSrc}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                    {/* Badges on Top */}
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

                    {/* Bottom Label on Photo */}
                    <div className="absolute bottom-3 right-4 left-4 text-white">
                      <div className="text-[11px] text-rose-300 font-medium">{product.cut_type}</div>
                      <div className="text-base sm:text-lg font-black truncate group-hover:text-rose-200 transition-colors">
                        {product.name}
                      </div>
                    </div>
                  </Link>

                  {/* Body Specs */}
                  <div className="p-5 sm:p-6 space-y-4">
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

                {/* Card Actions */}
                <div className="px-5 sm:px-6 pb-5 pt-2 flex items-center gap-2 border-t border-[#f0ebe0]">
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#1c1d22] hover:bg-[#2c2d36] text-white text-xs font-bold text-center transition-colors"
                  >
                    مشاهده جزئیات و صفحه محصول
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
      )}

    </div>
  );
}
