"use client";

import React, { useState } from "react";
import { IndustrySector } from "@/types/company";
import { Factory, Flame, Building2, Pickaxe, Droplets, Boxes, CheckCircle2 } from "lucide-react";

interface IndustriesSectionProps {
  industries: IndustrySector[];
}

export default function IndustriesSection({ industries }: IndustriesSectionProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Flame": return <Flame className="w-5 h-5 text-orange-400" />;
      case "Building2": return <Building2 className="w-5 h-5 text-amber-400" />;
      case "Pickaxe": return <Pickaxe className="w-5 h-5 text-emerald-400" />;
      case "Droplets": return <Droplets className="w-5 h-5 text-blue-400" />;
      case "Boxes": return <Boxes className="w-5 h-5 text-yellow-400" />;
      default: return <Factory className="w-5 h-5 text-orange-400" />;
    }
  };

  // Matrix from page 32 of catalog
  const equipmentMatrix = [
    { name: "شوت‌های انتقال و ریزش بار (Chutes Systems)", steel: true, cement: true, mining: true, coal: true, petro: false },
    { name: "لوله‌ها، زانویی‌ها و تبدیل‌های اسلاری (Slurry Pipes & Elbows)", steel: true, cement: false, mining: true, coal: true, petro: true },
    { name: "هیدروسیکلون‌ها (Hydrocyclone Liners / Vortex)", steel: false, cement: false, mining: true, coal: true, petro: false },
    { name: "داکت‌ها و غبارگیرهای سیکلون (Cyclone Dust Collectors)", steel: false, cement: true, mining: true, coal: false, petro: false },
    { name: "تیغه‌های میکسر و اسکرپر (Mixer Blades & Scrapers)", steel: true, cement: false, mining: false, coal: false, petro: false },
    { name: "کانوایرهای حلزونی و اسکرو (Screw Conveyors)", steel: true, cement: true, mining: true, coal: false, petro: false },
    { name: "سپراتورهای مغناطیسی و کونکال (Separators)", steel: true, cement: true, mining: true, coal: false, petro: false },
    { name: "درام‌های کک‌زدایی (Decock Drum)", steel: false, cement: false, mining: false, coal: false, petro: true },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#080c14] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>گستره صنایع و تجهیزات تحت پوشش</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            راهکارهای تخصصی برای صنایع سنگین کشور
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            از خطوط انتقال گندله و آهن اسفنجی تا پایپ‌های انتقال دوغاب معدنی و برج‌های پتروشیمی، سرامیک قائم در خط مقدم جلوگیری از استهلاک قرار دارد.
          </p>
        </div>

        {/* Industries Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-4">
                  {getIndustryIcon(ind.icon_name)}
                </div>

                <h3 className="text-sm font-black text-white mb-2 leading-tight">
                  {ind.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="bg-slate-950/80 rounded-lg p-2.5 border border-slate-800/80 text-[11px] text-orange-300 font-medium">
                <span className="text-slate-400 block mb-0.5">تجهیزات هدف:</span>
                {ind.equipments}
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Application Matrix Table (Catalog Page 32) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <h3 className="text-base sm:text-lg font-black text-white mb-6 flex items-center justify-between">
            <span>جدول کاربرد تجهیزات صنعتی (Industrial Applications Chart)</span>
            <span className="text-xs text-slate-400 font-mono">مطابق کاتالوگ مهندسی</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 bg-slate-950/60">
                  <th className="py-3 px-4 font-bold">تجهیزات تحت سایش (Equipments)</th>
                  <th className="py-3 px-3 text-center font-bold">فولاد و آهن اسفنجی</th>
                  <th className="py-3 px-3 text-center font-bold">سیمان</th>
                  <th className="py-3 px-3 text-center font-bold">معادن سنگ آهن و مس</th>
                  <th className="py-3 px-3 text-center font-bold">زغال‌سنگ و کک</th>
                  <th className="py-3 px-3 text-center font-bold">نفت و پتروشیمی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans">
                {equipmentMatrix.map((eq, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition">
                    <td className="py-3 px-4 font-medium text-white">
                      {eq.name}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {eq.steel ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-orange-500 shadow-sm shadow-orange-500/50" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {eq.cement ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {eq.mining ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {eq.coal ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50" /> : <span className="text-slate-600">—</span>}
                    </td>
                    <td className="py-3 px-3 text-center">
                      {eq.petro ? <span className="inline-block w-2.5 h-2.5 rounded-full bg-purple-400 shadow-sm shadow-purple-400/50" /> : <span className="text-slate-600">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
