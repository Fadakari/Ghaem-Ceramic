"use client";

import React from "react";
import { CeramicAdvantage } from "@/types/company";
import { ShieldCheck, Flame, FlaskConical, TrendingDown, Layers, Zap, Check, X } from "lucide-react";

interface AdvantagesProps {
  advantages: CeramicAdvantage[];
}

export default function Advantages({ advantages }: AdvantagesProps) {
  
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Flame": return <Flame className="w-6 h-6 text-orange-400" />;
      case "FlaskConical": return <FlaskConical className="w-6 h-6 text-emerald-400" />;
      case "TrendingDown": return <TrendingDown className="w-6 h-6 text-amber-400" />;
      case "Layers": return <Layers className="w-6 h-6 text-blue-400" />;
      case "Zap": return <Zap className="w-6 h-6 text-yellow-400" />;
      default: return <ShieldCheck className="w-6 h-6 text-orange-400" />;
    }
  };

  const comparisonRows = [
    {
      feature: "سختی در مقیاس موهس (Mohs)",
      ceramic: "سختی 9 Mohs (نزدیک‌ترین به الماس)",
      hardox: "سختی 5.5 الی 6 Mohs (معادل 500 برینل)",
      ceramicWins: true,
    },
    {
      feature: "پایداری حرارتی مداوم",
      ceramic: "تا 800 درجه سانتی‌گراد بدون افت ساختار",
      hardox: "افت شدید سختی و ساختار در دمای بالای 250°C",
      ceramicWins: true,
    },
    {
      feature: "مقاومت در برابر اسید، باز و رطوبت",
      ceramic: "100% مقاوم (فاقد میل ترکیب با اکسیژن)",
      hardox: "آسیب‌پذیر، مستعد اکسیداسیون و خوردگی سریع",
      ceramicWins: true,
    },
    {
      feature: "طول عمر در مسیرهای ساینده سنگین",
      ceramic: "حداقل 4 الی 5 برابر بیشتر از هاردوکس",
      hardox: "نیازمند تعویض‌های مکرر هر چند ماه",
      ceramicWins: true,
    },
    {
      feature: "چگالی و وزن بار مرده روی استراکچر",
      ceramic: "3.6 g/cm³ (بیش از 50% سبک‌تر از فولاد)",
      hardox: "7.8 g/cm³ (فشار سنگین بر شاسی و موتورها)",
      ceramicWins: true,
    },
    {
      feature: "توقف خط تولید و هزینه تعویض سالیانه",
      ceramic: "به حداقل ممکن رسیده (سودآوری میلیاردی)",
      hardox: "توقف‌های مکرر، پرهزینه و خطرناک",
      ceramicWins: true,
    },
  ];

  return (
    <section id="advantages" className="py-20 lg:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>چرا سرامیک آلومینا جایگزین قطعی فلزات است؟</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            مزایای بنیادین سرامیک‌های ضد سایش در مقایسه با هاردوکس
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            سرامیک‌های نسل جدید قائم با تکیه بر آلومینای کلسینه شده با خلوص بالا و استحکام فشاری ۶۵۶ مگاپاسکال، ضعف‌های مشترک فلزات سخت‌کاری‌شده در برابر سایش، حرارت و مواد خورنده را برای همیشه برطرف کرده‌اند.
          </p>
        </div>

        {/* 6 Advantages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/10 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(adv.icon_name)}
                </div>

                <h3 className="text-base sm:text-lg font-black text-white mb-3">
                  {adv.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {adv.description}
                </p>
              </div>

              {adv.hardox_comparison && (
                <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3 text-xs text-orange-300/90 font-medium">
                  <span className="text-orange-400 font-bold block mb-1">در برابر هاردوکس:</span>
                  {adv.hardox_comparison}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <h3 className="text-lg sm:text-xl font-black text-white mb-6 flex items-center justify-between">
            <span>ماتریس مقایسه فنی: سرامیک ضد سایش قائم در برابر فولاد هاردوکس</span>
            <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              Technical Comparison
            </span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-3.5 px-4 font-bold">پارامتر مهندسی</th>
                  <th className="py-3.5 px-4 font-bold text-orange-400 bg-orange-950/20 rounded-t-lg">سرامیک صنعت قائم (Al2O3)</th>
                  <th className="py-3.5 px-4 font-bold text-slate-300">فولاد هاردوکس (Hardox 500)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-orange-300 bg-orange-950/10 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{row.ceramic}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      {row.hardox}
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
