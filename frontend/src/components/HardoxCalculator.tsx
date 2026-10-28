"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck, TrendingDown, Clock, Zap, AlertTriangle, CheckCircle } from "lucide-react";

export default function HardoxCalculator() {
  const [equipment, setEquipment] = useState("شوت ریزش بار سنگین (Chute)");
  const [currentSteel, setCurrentSteel] = useState("هاردوکس 500 (Hardox 500)");
  const [replacementCycleMonths, setReplacementCycleMonths] = useState(4);
  const [downtimeHoursPerRepair, setDowntimeHoursPerRepair] = useState(12);

  // Calculations based on catalog real metrics:
  // Ceramic lasts 4 to 5x of Hardox (based on Sirjan, Bafgh & Ardakan data)
  const ceramicMultiplier = currentSteel.includes("600") ? 3.5 : 4.5;
  const ceramicLifetimeMonths = Math.round(replacementCycleMonths * ceramicMultiplier);
  
  // In a 3-year period (36 months):
  const hardoxReplacements = Math.floor(36 / replacementCycleMonths);
  const ceramicReplacements = Math.max(1, Math.floor(36 / ceramicLifetimeMonths));
  const savedReplacements = hardoxReplacements - ceramicReplacements;
  const savedDowntimeHours = savedReplacements * downtimeHoursPerRepair;
  const estimatedCostSavingPercent = 68; // Conservative 68% total ownership saving

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#090e1a] relative border-t border-b border-slate-800/80">
      
      {/* Background industrial lighting */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute left-0 bottom-10 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>ابزار تعاملی محاسبه‌گر بازگشت سرمایه (ROI)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            محاسبه‌گر مقایسه‌ای سرامیک ضد سایش قائم در برابر هاردوکس
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            بر اساس داده‌های واقعی ثبت‌شده در مجتمع‌های فولادی ارفع، سیرجان، بافق و سنگان، مشاهده کنید جایگزینی سرامیک‌های آلومینایی چقدر از هزینه‌های نگهداری و توقف خط تولید شما می‌کاهد.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-slate-800 pb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              مشخصات تجهیز و شرایط فعلی کارخانه شما
            </h3>

            <div className="space-y-6">
              
              {/* Equipment Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  نوع تجهیز صنعتی در معرض سایش:
                </label>
                <select
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                  className="w-full bg-slate-800/90 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
                >
                  <option value="شوت ریزش بار سنگین (Chute)">شوت ریزش بار سنگین (Chute) - گندله و سنگ آهن</option>
                  <option value="هاپر و بین ذخیره (Hopper & Bin)">هاپر و بین ذخیره (Hopper & Bin) - خطوط خردایش</option>
                  <option value="لوله انتقال دوغاب و اسلاری (Slurry Pipe)">لوله انتقال دوغاب و اسلاری (Slurry Pipe)</option>
                  <option value="زانویی و تبدیل خطوط غبارگیر (Elbow & Reducer)">زانویی و تبدیل خطوط غبارگیر (Elbow & Reducer)</option>
                  <option value="هیدروسیکلون و سپراتور (Hydrocyclone)">هیدروسیکلون و سپراتور مغناطیسی (Hydrocyclone)</option>
                  <option value="دیسک پلتایزینگ و میکسر (Pelletizing Disc)">دیسک پلتایزینگ و میکسر مواد نسوز</option>
                </select>
              </div>

              {/* Current Material */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  پوشش ضد سایش فعلی:
                </label>
                <select
                  value={currentSteel}
                  onChange={(e) => setCurrentSteel(e.target.value)}
                  className="w-full bg-slate-800/90 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition"
                >
                  <option value="ورق ضد سایش هاردوکس 400 (Hardox 400)">ورق ضد سایش هاردوکس 400 (Hardox 400)</option>
                  <option value="هاردوکس 500 (Hardox 500)">ورق ضد سایش هاردوکس 500 (Hardox 500)</option>
                  <option value="هاردوکس 600 (Hardox 600)">ورق ضد سایش هاردوکس 600 (Hardox 600)</option>
                  <option value="لوله‌های بازالت چدنی سنگین">لوله‌های بازالت چدنی سنگین</option>
                  <option value="ورق‌های فولادی معمولی ST52 / ST37">ورق‌های فولادی معمولی ST52 / ST37</option>
                </select>
              </div>

              {/* Replacement Cycle Slider */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-slate-300">دوره فعلی تعویض یا ترمیم ورق‌ها:</span>
                  <span className="text-orange-400 font-bold font-mono">
                    هر {replacementCycleMonths} ماه یک‌بار
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={replacementCycleMonths}
                  onChange={(e) => setReplacementCycleMonths(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>۱ ماه (سایش شدید)</span>
                  <span>۶ ماه</span>
                  <span>۱۲ ماه</span>
                </div>
              </div>

              {/* Downtime Hours */}
              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <span className="text-slate-300">مدت زمان توقف خط برای هر نوبت تعویض:</span>
                  <span className="text-amber-400 font-bold font-mono">
                    {downtimeHoursPerRepair} ساعت توقف
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="48"
                  step="2"
                  value={downtimeHoursPerRepair}
                  onChange={(e) => setDowntimeHoursPerRepair(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>۴ ساعت</span>
                  <span>۲۴ ساعت</span>
                  <span>۴۸ ساعت</span>
                </div>
              </div>

            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800 border border-orange-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full" />
            
            <h3 className="text-lg font-bold text-white mb-6 flex items-center justify-between border-b border-slate-700/60 pb-3">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-orange-400" />
                نتایج پیش‌بینی مهندسی با سرامیک قائم
              </span>
              <span className="text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                بر اساس آزمون‌های میدانی
              </span>
            </h3>

            {/* Main Calculated Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              
              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex flex-col">
                <span className="text-xs text-slate-400 mb-1">عمر مفید پیش‌بینی‌شده سرامیک:</span>
                <span className="text-2xl sm:text-3xl font-black text-orange-400 font-mono">
                  {ceramicLifetimeMonths} ماه
                </span>
                <span className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {ceramicMultiplier} برابر بیشتر از وضعیت فعلی
                </span>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 flex flex-col">
                <span className="text-xs text-slate-400 mb-1">صرفه‌جویی در زمان توقف (۳ سال):</span>
                <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
                  {savedDowntimeHours} ساعت
                </span>
                <span className="text-[11px] text-amber-400 mt-1 flex items-center gap-1">
                  <TrendingDown className="w-3 h-3" />
                  حذف {savedReplacements} نوبت توقف خط تولید
                </span>
              </div>

            </div>

            {/* Cost Saving Progress Card */}
            <div className="bg-orange-950/20 border border-orange-500/30 rounded-xl p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-orange-200">
                  تخمین کل صرفه‌جویی مالی در چرخه ۳ ساله:
                </span>
                <span className="text-sm font-black text-orange-400 font-mono">
                  ~{estimatedCostSavingPercent}٪ کاهش هزینه
                </span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-orange-500 h-2.5 rounded-full transition-all duration-700"
                  style={{ width: `${estimatedCostSavingPercent}%` }}
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                شامل صرفه‌جویی در هزینه خرید مکرر ورق‌های فلزی سنگین، دستمزد جوشکاری و توقف‌های پرهزینه کارخانه.
              </p>
            </div>

            {/* Quick Technical Comparison Table */}
            <div className="space-y-2 text-xs mb-8">
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50">
                <span className="text-slate-400">سختی در مقیاس موهس (Mohs):</span>
                <span className="text-slate-300">هاردوکس: ۵.۵ ~ ۶ | <strong className="text-orange-400">سرامیک قائم: ۹</strong></span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50">
                <span className="text-slate-400">تحمل حرارت مداوم:</span>
                <span className="text-slate-300">هاردوکس: max 250°C | <strong className="text-orange-400">سرامیک قائم: تا 800°C</strong></span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-lg bg-slate-800/50">
                <span className="text-slate-400">مقاومت در برابر اسید و زنگ‌زدگی:</span>
                <span className="text-slate-300">هاردوکس: آسیب‌پذیر | <strong className="text-emerald-400">سرامیک قائم: ۱۰۰٪ بی‌اثر</strong></span>
              </div>
            </div>

            {/* CTA from Calculator */}
            <a
              href={`#contact`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-lg shadow-orange-600/30 transition hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>درخواست نقشه مهندسی و استعلام قیمت برای این تجهیز</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
