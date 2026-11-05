'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { submitContactInquiry } from '@/lib/api';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialSubject = searchParams.get('subject') || '';

  const [formData, setFormData] = useState({
    full_name: '',
    organization: '',
    phone: '',
    email: '',
    inquiry_type: 'wholesale_supply',
    estimated_tonnage: '۱ الی ۵ تن در هفته',
    message: initialSubject ? `استعلام و سفارش محصول: ${initialSubject}` : '',
  });

  const [loading, setLoading] = useState(false);
  const [resultMessage, setResultMessage] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (initialSubject && !formData.message) {
      setFormData((prev) => ({
        ...prev,
        message: `استعلام و سفارش محصول: ${initialSubject}`,
      }));
    }
  }, [initialSubject]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.full_name || !formData.phone || !formData.message) {
      setResultMessage({
        success: false,
        message: 'لطفاً نام، شماره تماس و شرح درخواست را وارد فرمایید.',
      });
      return;
    }

    setLoading(true);
    setResultMessage(null);

    const res = await submitContactInquiry(formData);
    setLoading(false);
    setResultMessage(res);

    if (res.success) {
      setFormData({
        full_name: '',
        organization: '',
        phone: '',
        email: '',
        inquiry_type: 'wholesale_supply',
        estimated_tonnage: '۱ الی ۵ تن در هفته',
        message: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-right">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            نام و نام خانوادگی نماینده <span className="text-rose-600">*</span>:
          </label>
          <input
            type="text"
            required
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            placeholder="مثال: آقای محمودی / سرآشپز کریمی"
            className="w-full bg-[#faf8f5] border border-[#d6cebf] rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9f1239] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            نام سازمان، رستوران، هتل یا برند:
          </label>
          <input
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            placeholder="مثال: هتل صفائیه یزد / شرکت صنعتی معدنی چادرملو"
            className="w-full bg-[#faf8f5] border border-[#d6cebf] rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9f1239] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            شماره تماس همراه <span className="text-rose-600">*</span>:
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="09130000000"
            className="w-full bg-[#faf8f5] border border-[#d6cebf] rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9f1239] transition-colors"
            dir="ltr"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            پست الکترونیکی (ایمیل):
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="info@company.com"
            className="w-full bg-[#faf8f5] border border-[#d6cebf] rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9f1239] transition-colors"
            dir="ltr"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            موضوع و نوع استعلام:
          </label>
          <select
            value={formData.inquiry_type}
            onChange={(e) => setFormData({ ...formData, inquiry_type: e.target.value })}
            className="w-full bg-[#faf8f5] border border-[#d6cebf] rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9f1239] transition-colors cursor-pointer"
          >
            <option value="wholesale_supply">تامین عمده ارگان‌ها و صنایع غذایی</option>
            <option value="horeca_contract">قرارداد مستمر هتل‌ها، رستوران‌ها و کترینگ‌ها</option>
            <option value="private_label">درخواست بسته‌بندی سفارشی (Private Label)</option>
            <option value="veterinary_support">استعلام پروانه‌های بهداشتی و آزمایشگاهی</option>
            <option value="general">سایر موارد و پشتیبانی عمومی</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 mb-1">
            حجم تقریبی سفارش / تناژ دوره‌ای:
          </label>
          <input
            type="text"
            value={formData.estimated_tonnage}
            onChange={(e) => setFormData({ ...formData, estimated_tonnage: e.target.value })}
            placeholder="مثال: ۳ تن در ماه، یا لاشه ۵۰ راس هفتگی"
            className="w-full bg-[#faf8f5] border border-[#d6cebf] rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9f1239] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-700 mb-1">
          شرح درخواست یا جزئیات نیاز <span className="text-rose-600">*</span>:
        </label>
        <textarea
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="لطفاً نوع قطعات گوشت، شیوه برش، شرایط تحویل یا هرگونه پرسش بهداشتی را مرقوم بفرمایید..."
          className="w-full bg-[#faf8f5] border border-[#d6cebf] rounded-xl p-4 text-xs sm:text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#9f1239] transition-colors leading-relaxed"
        />
      </div>

      {resultMessage && (
        <div
          className={`p-4 rounded-xl text-xs sm:text-sm font-bold ${
            resultMessage.success
              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
              : 'bg-rose-50 text-rose-800 border border-rose-200'
          }`}
        >
          {resultMessage.message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary-meat w-full py-3.5 text-sm sm:text-base font-bold shadow-md cursor-pointer disabled:opacity-50"
      >
        {loading ? 'در حال ثبت اطلاعات...' : 'ارسال رسمی استعلام به واحد بازرگانی'}
      </button>
    </form>
  );
}
