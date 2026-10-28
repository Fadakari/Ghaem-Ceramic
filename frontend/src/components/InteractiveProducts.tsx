"use client";

import React, { useState } from "react";
import { CeramicProductForm } from "@/types/company";
import { Maximize2, Wrench, Factory, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface InteractiveProductsProps {
  products: CeramicProductForm[];
}

export default function InteractiveProducts({ products }: InteractiveProductsProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const current = products[selectedIndex] || products[0];

  if (!current) return null;

  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl p-5 sm:p-10 card-clean-shadow w-full max-w-full overflow-hidden">
      
      {/* Category selector tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10 pb-6 border-b border-slate-100">
        {products.map((p, idx) => {
          const isSelected = selectedIndex === idx;
          return (
            <button
              key={p.code}
              onClick={() => setSelectedIndex(idx)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                isSelected
                  ? "btn-vibrant-orange text-white"
                  : "bg-slate-100/80 text-slate-700 hover:bg-slate-200/70"
              }`}
            >
              <span className="font-mono tracking-wide">{p.code}</span>
              <span className="opacity-60 hidden sm:inline">|</span>
              <span className="font-medium">{p.name_fa}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Product Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Descriptions & Details */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="badge-glossy-orange px-3 py-1 rounded-lg text-xs font-bold font-mono">
                {current.code}
              </span>
              <span className="text-xs font-bold text-slate-500 font-mono">
                {current.name_en}
              </span>
              <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-md">
                {current.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
              {current.name_fa}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
              {current.full_desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
            <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#ff5500]" />
                تجهیزات و کاربردهای رایج:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {current.applications}
              </p>
            </div>

            <div className="bg-slate-50/80 p-4 rounded-xl border border-slate-200/80">
              <span className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-[#ff5500]" />
                صنایع بهره‌بردار:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                {current.industries}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Dimensions Card & Visual Spec */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-[#0f1f38] text-white p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-lg">
          <div>
            <span className="text-xs font-bold text-orange-400 font-mono uppercase block mb-1">
              SPECIFICATIONS & SIZES
            </span>
            <h4 className="text-base font-bold text-white mb-4">
              ابعاد و ضخامت‌های استاندارد
            </h4>

            <div className="bg-white/10 rounded-xl p-4 mb-4 border border-white/10">
              <span className="text-xs text-slate-300 block mb-1.5 flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                اندازه‌های قابل سفارش (Available Sizes):
              </span>
              <p className="text-xs sm:text-sm font-mono text-orange-200 whitespace-pre-line leading-relaxed">
                {current.dimensions}
              </p>
            </div>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>امکان تولید ابعاد سفارشی طبق نقشه مهندسی کارفرما</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>سختی ۹ موهس با ساختار بلوری کلسینه شده</span>
              </div>
            </div>
          </div>

          <a
            href={`#contact`}
            className="mt-6 w-full btn-vibrant-orange py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer text-center"
          >
            <span>استعلام قیمت و ارسال نقشه برای این قطعه</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </div>
  );
}
