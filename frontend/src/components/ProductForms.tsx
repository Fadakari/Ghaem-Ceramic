"use client";

import React, { useState } from "react";
import { CeramicProductForm } from "@/types/company";
import { Layers, Box, Maximize2, Shield, Wrench, CheckCircle2, ChevronLeft } from "lucide-react";

interface ProductFormsProps {
  products: CeramicProductForm[];
}

export default function ProductForms({ products }: ProductFormsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const current = products[activeTab] || products[0];

  if (!current) return null;

  // Custom schematic graphic renderer for each ceramic geometry
  const renderCeramicSchematic = (code: string) => {
    switch (code) {
      case "PARY WE-AT":
        return (
          <div className="relative w-full h-64 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-center p-6 overflow-hidden">
            <div className="relative w-48 h-36 bg-gradient-to-br from-slate-100 to-slate-300 rounded-lg shadow-2xl border-4 border-slate-400 flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Weld Hole with Cap */}
              <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-orange-500 shadow-inner flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-orange-400 animate-pulse" />
              </div>
              <span className="absolute top-2 right-2 text-[10px] font-bold text-slate-700 font-mono">150×100 mm</span>
              <span className="absolute bottom-2 left-2 text-[9px] bg-slate-800 text-white px-1.5 py-0.5 rounded font-mono">تایل مسطح سوراخ‌دار</span>
            </div>
            <div className="absolute bottom-3 right-4 text-xs text-orange-400 font-mono flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-400" />
              محل اتصال بوشن جوشی و درپوش سرامیکی
            </div>
          </div>
        );

      case "PARY WE-MA":
        return (
          <div className="relative w-full h-64 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-center p-4 overflow-hidden">
            <div className="grid grid-cols-5 gap-1.5 p-4 bg-slate-900/90 rounded-xl border border-slate-700 transform rotate-1 hover:rotate-0 transition-transform">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-9 bg-gradient-to-b from-white to-slate-200 shadow-md flex items-center justify-center text-[8px] font-mono text-slate-700 font-bold"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  9M
                </div>
              ))}
            </div>
            <span className="absolute top-3 left-4 text-xs text-slate-400 font-mono">موزاییک شش ضلعی Hexagonal</span>
            <span className="absolute bottom-3 right-4 text-xs text-orange-400 font-mono">انعطاف‌پذیر روی توری الیافی</span>
          </div>
        );

      case "PARY WE-FA":
        return (
          <div className="relative w-full h-64 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-center p-6 overflow-hidden">
            {/* Trapezoidal pipe brick schematic */}
            <div className="flex gap-2 items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-12 h-28 bg-gradient-to-t from-slate-300 via-slate-100 to-white rounded-t-sm shadow-xl border border-slate-400"
                  style={{
                    transform: `rotate(${(i - 1.5) * 12}deg)`,
                    transformOrigin: "bottom center",
                  }}
                />
              ))}
            </div>
            <span className="absolute top-3 left-4 text-xs text-slate-400 font-mono">چیدمان طاق ضربی درون لوله</span>
            <span className="absolute bottom-3 right-4 text-xs text-amber-400 font-mono">لاینر ذوزنقه‌ای ویژه جدار لوله</span>
          </div>
        );

      case "PARY WE-SA":
        return (
          <div className="relative w-full h-64 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-center p-6 overflow-hidden">
            <div className="w-52 h-28 bg-gradient-to-r from-slate-200 to-white rounded-xl shadow-2xl border-4 border-slate-300 flex items-center justify-around px-6">
              {/* Dual slotted holes */}
              <div className="w-6 h-10 rounded-full bg-slate-900 border-2 border-slate-600 shadow-inner" />
              <div className="w-6 h-10 rounded-full bg-slate-900 border-2 border-slate-600 shadow-inner" />
            </div>
            <span className="absolute top-3 left-4 text-xs text-slate-400 font-mono">190×100×20-60 mm</span>
            <span className="absolute bottom-3 right-4 text-xs text-orange-400 font-mono">تیغه مقاوم میکسر و پلتایزینگ</span>
          </div>
        );

      default:
        return (
          <div className="w-full h-64 bg-slate-950/60 rounded-xl border border-slate-800 flex items-center justify-center">
            <Box className="w-16 h-16 text-slate-600" />
          </div>
        );
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>ژئومتری و فرم‌های مهندسی قطعات</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            اشکال، لاینرها و ابعاد استاندارد سرامیک ضد سایش
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            سرامیک صنعت قائم طیف کاملی از تایل‌های مسطح، موزاییک‌های شبکه‌ای منعطف، لاینرهای لوله و تیغه‌های ضد سایش را بر اساس استانداردهای بین‌المللی تولید و عرضه می‌نماید.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {products.map((p, idx) => (
            <button
              key={p.code}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 border ${
                activeTab === idx
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white border-orange-500 shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-slate-900/90 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
              }`}
            >
              <span className="font-mono text-orange-300">{p.code}</span>
              <span className="hidden sm:inline">|</span>
              <span className="font-normal">{p.name_fa}</span>
            </button>
          ))}
        </div>

        {/* Active Product Details Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Schematic Graphic Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {renderCeramicSchematic(current.code)}
            
            <div className="p-4 bg-slate-950/80 rounded-xl border border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
              <span className="font-semibold text-slate-300">امکان تولید سفارشی:</span>
              <span className="text-emerald-400 font-medium">طبق نقشه فنی و ابعاد کارفرما</span>
            </div>
          </div>

          {/* Details & Specs Column */}
          <div className="lg:col-span-7 flex flex-col">
            
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20 font-bold">
                {current.code} • {current.name_en}
              </span>
              <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">
                {current.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              {current.name_fa}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {current.full_desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
                <span className="text-xs font-bold text-orange-400 mb-1 flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" />
                  ابعاد و اندازه‌ها (Available Sizes):
                </span>
                <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed font-mono">
                  {current.dimensions}
                </p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4">
                <span className="text-xs font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5" />
                  کاربردهای صنعتی اصلی:
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {current.applications}
                </p>
              </div>

            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                <strong className="text-slate-300">صنایع بهره‌بردار: </strong>
                {current.industries}
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition"
              >
                <span>استعلام فنی این قطعه</span>
                <ChevronLeft className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
