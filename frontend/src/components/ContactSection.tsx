"use client";

import React, { useState } from "react";
import { SiteSetting, ContactFormData } from "@/types/company";
import { submitContactInquiry } from "@/lib/api";
import { Phone, Mail, MapPin, Printer, User, Send, CheckCircle2, AlertCircle, Building2, Globe } from "lucide-react";

interface ContactSectionProps {
  settings: SiteSetting;
}

export default function ContactSection({ settings }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    full_name: "",
    company_name: "",
    phone: "",
    email: "",
    subject: "استعلام قیمت و مشاوره مهندسی لاینینگ سرامیکی",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseState, setResponseState] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name || !formData.phone || !formData.message) {
      setResponseState({
        success: false,
        message: "لطفاً نام، شماره تماس و شرح درخواست را وارد فرمایید.",
      });
      return;
    }

    setLoading(true);
    setResponseState(null);

    const result = await submitContactInquiry(formData);
    setLoading(false);
    setResponseState(result);

    if (result.success) {
      setFormData({
        full_name: "",
        company_name: "",
        phone: "",
        email: "",
        subject: "استعلام قیمت و مشاوره مهندسی لاینینگ سرامیکی",
        message: "",
      });
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#090d16] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>واحد مهندسی و فروش</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            مشاوره تخصصی، بازدید میدانی و استعلام فنی
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            کارشناسان و متخصصان متالورژی و سرامیک شرکت سرامیک صنعت قائم آماده ارائه مشاوره، نقشه‌برداری در محل کارخانه و محاسبه ضخامت و چیدمان بهینه قطعات می‌باشند.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information & Office Details */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-black text-white mb-2">
                دفتر مرکزی و مدیریت شرکت
              </h3>
              <p className="text-xs text-orange-400 font-bold mb-6 flex items-center gap-2">
                <User className="w-4 h-4" />
                مدیریت محترم: {settings.manager_name}
              </p>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Phone */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold mb-0.5">تلفن تماس مستقیم:</span>
                    <a
                      href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-bold text-white hover:text-orange-400 transition font-mono text-sm sm:text-base"
                      dir="ltr"
                    >
                      {settings.phone}
                    </a>
                  </div>
                </div>

                {/* Fax */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
                    <Printer className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold mb-0.5">شماره فکس دبیرخانه:</span>
                    <span className="font-bold text-white font-mono text-sm sm:text-base" dir="ltr">
                      {settings.fax}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold mb-0.5">پست الکترونیک (Email):</span>
                    <a
                      href={`mailto:${settings.email}`}
                      className="font-bold text-white hover:text-orange-400 transition font-mono text-xs sm:text-sm"
                    >
                      {settings.email}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold mb-0.5">پرتال رسمی شرکت:</span>
                    <span className="font-bold text-white font-mono text-xs sm:text-sm">
                      {settings.website}
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 font-semibold mb-0.5">نشانی دفتر مرکزی:</span>
                    <span className="font-medium text-slate-200 text-xs sm:text-sm leading-relaxed">
                      {settings.address}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              ساعات پاسخگویی مهندسی: شنبه تا چهارشنبه از ساعت ۸:۰۰ الی ۱۶:۳۰ | پنج‌شنبه‌ها تا ساعت ۱۳:۰۰
            </div>
          </div>

          {/* Consultation / Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-black text-white mb-2">
              فرم استعلام فنی و ثبت درخواست مشاوره
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              جهت دریافت قیمت، نقشه قطعات یا ارسال مشخصات شوت‌ها و لوله‌های خود، فرم زیر را تکمیل نمایید.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    نام و نام خانوادگی <span className="text-orange-500">*</span>:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    placeholder="مثال: مهندس احمدی"
                    className="w-full bg-slate-950/80 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    نام شرکت / مجتمع صنعتی:
                  </label>
                  <input
                    type="text"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    placeholder="مثال: فولاد خوزستان / معدن مس"
                    className="w-full bg-slate-950/80 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    شماره همراه یا تلفن مستقیم <span className="text-orange-500">*</span>:
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="۰۹۱۲XXXXXXX یا ۰۲۱XXXXXXX"
                    className="w-full bg-slate-950/80 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition font-mono"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    پست الکترونیک (اختیاری):
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="info@company.com"
                    className="w-full bg-slate-950/80 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition font-mono"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  موضوع استعلام یا نوع تجهیز:
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition"
                >
                  <option value="استعلام قیمت و مشاوره لاینینگ شوت و هاپر">استعلام قیمت و مشاوره لاینینگ شوت و هاپر</option>
                  <option value="لاینینگ لوله‌ها، زانویی‌ها و خطوط انتقال اسلاری">لاینینگ لوله‌ها، زانویی‌ها و خطوط انتقال اسلاری</option>
                  <option value="سفارش موزاییک‌های شش‌ضلعی هگزاگونال">سفارش موزاییک‌های شش‌ضلعی هگزاگونال (Hexagonal)</option>
                  <option value="تیغه‌های میکسر و پلتایزینگ دیسک">تیغه‌های میکسر و پلتایزینگ دیسک</option>
                  <option value="طراحی قطعه سفارشی طبق نقشه مهندسی">طراحی قطعه سفارشی طبق نقشه مهندسی</option>
                  <option value="درخواست کاتالوگ و گواهی آزمون متالورژی رازی">درخواست کاتالوگ و گواهی آزمون متالورژی رازی</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  شرح درخواست، ابعاد تجهیز یا شرایط سایش و دما <span className="text-orange-500">*</span>:
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="لطفاً نوع ماده عبوری، دمای تخمینی، ابعاد حدودی یا نقشه قطعه مورد نظر خود را شرح دهید..."
                  className="w-full bg-slate-950/80 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              {responseState && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
                    responseState.success
                      ? "bg-emerald-950/40 border border-emerald-500/40 text-emerald-300"
                      : "bg-red-950/40 border border-red-500/40 text-red-300"
                  }`}
                >
                  {responseState.success ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  )}
                  <span>{responseState.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-600/30 border border-orange-400/30 transition hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    در حال ثبت اطلاعات...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>ارسال درخواست استعلام به کارشناسان مهندسی</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
