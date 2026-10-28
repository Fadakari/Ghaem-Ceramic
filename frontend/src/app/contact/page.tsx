"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { defaultCompanyBundle } from "@/lib/defaultData";
import { submitContactInquiry, getCompanyBundle } from "@/lib/api";
import { ContactFormData, SiteSetting } from "@/types/company";
import { Phone, Mail, MapPin, Printer, User, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const [settings, setSettings] = useState<SiteSetting>(defaultCompanyBundle.settings);

  useEffect(() => {
    getCompanyBundle().then((bundle) => {
      if (bundle?.settings) setSettings(bundle.settings);
    });
  }, []);

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
    <div className="min-h-screen flex flex-col bg-white text-slate-800">
      <Navbar settings={settings} />

      <PageHeader
        category="GET IN TOUCH"
        title="ارتباط با ما و استعلام فنی"
        subtitle="مشاوره تخصصی با مهندسان متالورژی و سرامیک، نقشه‌برداری در محل و استعلام قیمت قطعات"
        breadcrumb={[{ label: "تماس با ما" }]}
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 bg-slate-50">
                <span className="text-xs font-bold text-[#c2410c] uppercase font-mono block mb-1">
                  CENTRAL HEADQUARTERS
                </span>
                <h2 className="text-xl font-bold text-slate-900 mb-2">
                  دفتر مرکزی و مدیریت
                </h2>
                <p className="text-xs text-slate-600 mb-6 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  مدیریت شرکت: <strong className="text-slate-800">{settings.manager_name}</strong>
                </p>

                <div className="space-y-4 text-xs sm:text-sm">
                  
                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <MapPin className="w-4 h-4 text-[#c2410c] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">نشانی پستی:</span>
                      <span className="text-slate-800 font-medium leading-relaxed">
                        {settings.address}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <Phone className="w-4 h-4 text-[#c2410c] shrink-0" />
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">تلفن تماس مستقیم:</span>
                      <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-900 font-bold font-mono text-sm hover:text-[#c2410c] transition" dir="ltr">
                        {settings.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <Printer className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">شماره فکس:</span>
                      <span className="text-slate-900 font-bold font-mono text-sm" dir="ltr">
                        {settings.fax}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <Mail className="w-4 h-4 text-slate-500 shrink-0" />
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">پست الکترونیک (Email):</span>
                      <a href={`mailto:${settings.email}`} className="text-slate-900 font-bold font-mono text-xs hover:text-[#c2410c] transition">
                        {settings.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-slate-200">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-slate-400 text-[11px] mb-0.5">ساعات اداری:</span>
                      <span className="text-slate-700 text-xs">
                        شنبه تا چهارشنبه: ۸:۰۰ الی ۱۶:۳۰ | پنج‌شنبه: ۸:۰۰ الی ۱۳:۰۰
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Inquiry Form Column */}
            <div className="lg:col-span-7">
              <div className="border border-slate-200 rounded-2xl p-6 sm:p-10 bg-white shadow-xs">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  فرم استعلام فنی و ثبت درخواست مشاوره
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-8 leading-relaxed">
                  جهت دریافت پیش‌فاکتور، ارسال ابعاد شوت‌ها یا استعلام تایل‌های ضد سایش، فرم زیر را تکمیل نمایید. کارشناسان ما در سریع‌ترین زمان با شما تماس خواهند گرفت.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        نام و نام خانوادگی <span className="text-[#c2410c]">*</span>:
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.full_name}
                        onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                        placeholder="مثال: مهندس احمدی"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#c2410c] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        نام شرکت / مجتمع صنعتی:
                      </label>
                      <input
                        type="text"
                        value={formData.company_name}
                        onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                        placeholder="مثال: فولاد خوزستان"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#c2410c] transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        شماره تماس مستقیم <span className="text-[#c2410c]">*</span>:
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="۰۹۱۲XXXXXXX یا ۰۲۱XXXXXXX"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#c2410c] transition font-mono"
                        dir="ltr"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        پست الکترونیک (Email):
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="info@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#c2410c] transition font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      موضوع استعلام یا نوع قطعه مورد نیاز:
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#c2410c] transition"
                    >
                      <option value="استعلام لاینر و تایل‌های مسطح (PARY WE-AT)">استعلام لاینر و تایل‌های مسطح (PARY WE-AT)</option>
                      <option value="استعلام موزاییک‌های شش‌ضلعی هگزاگونال (PARY WE-MA)">استعلام موزاییک‌های شش‌ضلعی هگزاگونال (PARY WE-MA)</option>
                      <option value="لاینینگ لوله‌ها، زانویی‌ها و اتصالات ذوزنقه‌ای (PARY WE-FA)">لاینینگ لوله‌ها، زانویی‌ها و اتصالات ذوزنقه‌ای (PARY WE-FA)</option>
                      <option value="تیغه‌های میکسر و دیسک پلتایزینگ (PARY WE-SA)">تیغه‌های میکسر و دیسک پلتایزینگ (PARY WE-SA)</option>
                      <option value="طراحی قطعه سفارشی طبق نقشه مهندسی">طراحی قطعه سفارشی طبق نقشه مهندسی</option>
                      <option value="درخواست اعزام کارشناس جهت بازدید و اندازه‌گیری">درخواست اعزام کارشناس جهت بازدید و اندازه‌گیری</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      شرح درخواست، شرایط کاری و ابعاد تجهیز <span className="text-[#c2410c]">*</span>:
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="نوع ماده عبوری، دمای تخمینی، ابعاد حدودی شوت یا لوله را شرح دهید..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#c2410c] transition"
                    />
                  </div>

                  {responseState && (
                    <div
                      className={`p-4 rounded-lg text-xs flex items-center gap-2 ${
                        responseState.success
                          ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
                          : "bg-red-50 border border-red-200 text-red-800"
                      }`}
                    >
                      {responseState.success ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      )}
                      <span>{responseState.message}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-bold text-sm text-white bg-[#c2410c] hover:bg-[#9a3412] shadow-sm transition disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? (
                      <span>در حال ارسال اطلاعات...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>ارسال درخواست استعلام به واحد مهندسی</span>
                      </>
                    )}
                  </button>

                </form>
              </div>
            </div>

          </div>

        </div>
      </section>

      <Footer settings={settings} />
    </div>
  );
}
