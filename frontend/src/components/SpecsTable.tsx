"use client";

import React, { useState } from "react";
import { TechnicalProperty } from "@/types/company";
import { FileSpreadsheet, ShieldAlert, Award, CheckCircle } from "lucide-react";

interface SpecsTableProps {
  specs: TechnicalProperty[];
}

export default function SpecsTable({ specs }: SpecsTableProps) {
  const [filter, setFilter] = useState<'all' | 'chemical' | 'physical' | 'mechanical'>('all');

  const filteredSpecs = filter === 'all' 
    ? specs 
    : specs.filter(s => s.category === filter);

  return (
    <section id="specs" className="py-20 lg:py-28 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>مشخصات فنی و نتایج آزمایشگاهی</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            آنالیز شیمیایی و خواص فیزیکی و مکانیکی
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            کلیه قطعات تولیدی شرکت سرامیک صنعت قائم بر اساس استانداردهای بین‌المللی ASTM و تحت نظارت آزمایشگاه متالورژی رازی تولید و آزموده می‌شوند.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {[
            { id: 'all', label: 'همه مشخصات' },
            { id: 'mechanical', label: 'خواص مکانیکی و مقاومت' },
            { id: 'physical', label: 'خواص فیزیکی و دانسیته' },
            { id: 'chemical', label: 'ترکیب شیمیایی (XRF)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.id
                  ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/30'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Specs Table */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-950/80 border-b border-slate-800 text-slate-400">
                  <th className="py-4 px-6 font-bold">عنوان پارامتر</th>
                  <th className="py-4 px-6 font-bold">نام انگلیسی</th>
                  <th className="py-4 px-6 font-bold text-orange-400">مقدار استاندارد</th>
                  <th className="py-4 px-6 font-bold">استاندارد مرجع / آزمون</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {filteredSpecs.map((spec, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-white font-sans">
                      {spec.name_fa}
                    </td>
                    <td className="py-4 px-6 text-slate-400">
                      {spec.name_en}
                    </td>
                    <td className="py-4 px-6 font-black text-orange-400 text-sm sm:text-base">
                      {spec.value}
                    </td>
                    <td className="py-4 px-6 text-slate-300 font-sans flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{spec.standard_ref}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Razi Metallurgical Center Footer Note */}
          <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                تأییدیه رسمی مرکز پژوهش متالورژی رازی (RMRC) به شماره رهگیری ۳۳۶۹۸-۱ و تطابق با استانداردهای ASTM C373-72 و ISO 2768.
              </span>
            </div>
            <a href="#contact" className="text-orange-400 font-bold hover:underline font-sans">
              درخواست فایل سرتیفیکیت و گزارش آزمون ←
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
