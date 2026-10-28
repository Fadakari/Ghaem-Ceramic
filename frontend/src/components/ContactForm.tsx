"use client";

import React, { useState } from "react";
import { submitContactInquiry } from "@/lib/api";
import { ContactFormData } from "@/types/company";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            نام و نام خانوادگی <span className="text-[#ff5500]">*</span>:
          </label>
          <input
            type="text"
            required
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            placeholder="مثال: مهندس احمدی"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#ff5500] focus:bg-white transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            نام کارخانه یا مجتمع صنعتی:
          </label>
          <input
            type="text"
            value={formData.company_name}
            onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
            placeholder="مثال: فولاد خوزستان / معدن مس"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#ff5500] focus:bg-white transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            شماره همراه مستقیم <span className="text-[#ff5500]">*</span>:
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="۰۹۱۲XXXXXXX یا ۰۲۱XXXXXXX"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#ff5500] focus:bg-white transition font-mono"
            dir="ltr"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            پست الکترونیک (Email):
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="info@company.com"
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#ff5500] focus:bg-white transition font-mono"
            dir="ltr"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          موضوع استعلام یا نوع قطعه:
        </label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#ff5500] focus:bg-white transition cursor-pointer"
        >
          <option value="استعلام قیمت و مشاوره لاینینگ شوت و هاپر (PARY WE-AT)">استعلام قیمت و مشاوره لاینینگ شوت و هاپر (PARY WE-AT)</option>
          <option value="سفارش موزاییک‌های شش‌ضلعی هگزاگونال (PARY WE-MA)">سفارش موزاییک‌های شش‌ضلعی هگزاگونال (PARY WE-MA)</option>
          <option value="لاینینگ لوله‌ها، زانویی‌ها و اتصالات ذوزنقه‌ای (PARY WE-FA)">لاینینگ لوله‌ها، زانویی‌ها و اتصالات ذوزنقه‌ای (PARY WE-FA)</option>
          <option value="تیغه‌های ضد سایش میکسر و پلتایزینگ (PARY WE-SA)">تیغه‌های ضد سایش میکسر و پلتایزینگ (PARY WE-SA)</option>
          <option value="طراحی قطعه سفارشی طبق نقشه مهندسی">طراحی قطعه سفارشی طبق نقشه مهندسی</option>
          <option value="درخواست اعزام کارشناس جهت بازدید و اندازه‌گیری">درخواست اعزام کارشناس جهت بازدید و اندازه‌گیری</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          شرح درخواست، ابعاد تجهیز یا شرایط سایش و دما <span className="text-[#ff5500]">*</span>:
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="نوع ماده عبوری (سنگ آهن، گندله، کلینکر و...)، دمای تقریبی یا ابعاد تجهیز را شرح دهید..."
          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#ff5500] focus:bg-white transition"
        />
      </div>

      {responseState && (
        <div
          className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
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
        className="w-full btn-vibrant-orange py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        {loading ? (
          <span>در حال ارسال اطلاعات...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>ارسال درخواست استعلام به کارشناسان مهندسی</span>
          </>
        )}
      </button>
    </form>
  );
}
