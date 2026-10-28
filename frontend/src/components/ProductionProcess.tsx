"use client";

import React, { useState } from "react";
import { ProductionStep } from "@/types/company";
import { Factory, Cog, Flame, Microscope, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

interface ProductionProcessProps {
  steps: ProductionStep[];
}

export default function ProductionProcess({ steps }: ProductionProcessProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Factory className="w-3.5 h-3.5" />
            <span>فرآیند تولید دانش‌بنیان و کنترل کیفیت ۱۰۰٪</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            از پودر آلومینای خالص تا کوره تونلی ۱۶۰۰ درجه
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            مراحل دقیق و استانداردهای سخت‌گیرانه تولید سرامیک‌های ضد سایش در شرکت سرامیک صنعت قائم که کیفیتی فراتر از رقبای بین‌المللی خلق می‌کند.
          </p>
        </div>

        {/* Step Numbers Timeline Header */}
        <div className="flex items-center justify-between overflow-x-auto pb-4 mb-8 border-b border-slate-800">
          {steps.map((step, idx) => (
            <button
              key={step.step_number}
              onClick={() => setActiveStepIndex(idx)}
              className={`flex flex-col items-center gap-2 px-4 py-2 shrink-0 rounded-xl transition-all ${
                activeStepIndex === idx
                  ? "text-orange-400 font-bold"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-mono font-black text-sm border-2 transition-all ${
                  activeStepIndex === idx
                    ? "bg-orange-600 border-orange-400 text-white shadow-lg shadow-orange-600/40 scale-110"
                    : "bg-slate-900 border-slate-800 text-slate-400"
                }`}
              >
                0{step.step_number}
              </div>
              <span className="text-xs whitespace-nowrap hidden md:inline">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Showcase Card */}
        {currentStep && (
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 mb-2">
                <span>مرحله {currentStep.step_number} از {steps.length}</span>
                <span>•</span>
                <span>تضمین کیفیت ISO & ASTM</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white mb-2">
                {currentStep.title}
              </h3>

              <h4 className="text-sm sm:text-base font-bold text-amber-400 mb-4">
                {currentStep.headline}
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-normal">
                {currentStep.description}
              </p>

              {currentStep.equipment && (
                <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
                  <Cog className="w-4 h-4 text-orange-400 shrink-0" />
                  <span className="font-semibold text-slate-300">ماشین‌آلات و تجهیزات کلیدی: </span>
                  <span className="text-slate-300">{currentStep.equipment}</span>
                </div>
              )}

              {/* Prev / Next controls */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-800">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center gap-1.5 transition"
                >
                  <ChevronRight className="w-4 h-4" />
                  <span>مرحله قبلی</span>
                </button>

                <button
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-orange-600 hover:bg-orange-500 disabled:opacity-30 disabled:cursor-not-allowed text-white flex items-center gap-1.5 transition"
                >
                  <span>مرحله بعدی</span>
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

            </div>

            <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 flex flex-col gap-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <Microscope className="w-4 h-4 text-orange-400" />
                استاندارد بازرسی و تست این مرحله:
              </h4>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>کنترل ۱۰۰ درصدی نمونه‌گیری و عدم ورود مواد نامنطبق به خط</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>ثبت گزارش کیفی در سیستم مکانیزه کنترل کیفیت کارخانه</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>کاهش تخلخل داخلی و ممانعت کامل از عیوب دوپوسته‌ای شدن (Lamination)</span>
                </div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
