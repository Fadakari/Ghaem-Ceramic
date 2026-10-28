"use client";

import React from "react";
import { SiteSetting } from "@/types/company";
import { defaultCompanyBundle } from "@/lib/defaultData";
import { useCompany } from "@/context/CompanyContext";
import { Phone, Mail, MapPin, Printer, ArrowUpRight, Award } from "lucide-react";

interface FooterProps {
  settings?: SiteSetting;
}

export default function Footer({ settings }: FooterProps) {
  const { settings: contextSettings } = useCompany();
  const currentSettings = settings || contextSettings || defaultCompanyBundle.settings;

  return (
    <footer className="bg-[#0b1526] text-slate-400 border-t border-slate-800 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main 4-column corporate grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-orange-600 text-white flex items-center justify-center font-bold text-lg font-serif">
                G
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base text-white">
                  {currentSettings.company_name_fa}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                  {currentSettings.company_name_en}
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {currentSettings.tagline}. جایگزین مطمئن هاردوکس در خطوط انتقال مواد کارخانجات فولادسازی، مس، سیمان و پتروشیمی.
            </p>

            <div className="flex items-center gap-2 text-slate-300 text-xs">
              <Award className="w-4 h-4 text-orange-400 shrink-0" />
              <span>تأسیس ۱۳۹۰ • دارای بیش از یک دهه سابقه در صنایع مادر</span>
            </div>
          </div>

          {/* Column 2: Products & Solutions */}
          <div className="lg:col-span-3 flex flex-col gap-2.5">
            <span className="text-sm font-bold text-white mb-2">محصولات و قطعات</span>
            <a href="#products" className="hover:text-white transition">
              لاینرهای مسطح تخت (PARY WE-AT)
            </a>
            <a href="#products" className="hover:text-white transition">
              موزاییک‌های شش‌ضلعی هگزاگونال (PARY WE-MA)
            </a>
            <a href="#products" className="hover:text-white transition">
              لاینرهای قوسی ویژه لوله‌ها (PARY WE-FA)
            </a>
            <a href="#products" className="hover:text-white transition">
              تیغه‌های ضد سایش میکسرها (PARY WE-SA)
            </a>
            <a href="#products" className="hover:text-white transition">
              قطعات سفارشی طبق نقشه کارفرما
            </a>
          </div>

          {/* Column 3: Engineering & Standards */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            <span className="text-sm font-bold text-white mb-2">مهندسی و کیفیت</span>
            <a href="#technology" className="hover:text-white transition">
              فرآیند خط تولید و پخت ۱۶۰۰°
            </a>
            <a href="#specs" className="hover:text-white transition">
              مشخصات و آنالیز آزمایشگاهی
            </a>
            <a href="#installation" className="hover:text-white transition">
              روش‌های نصب صنعتی
            </a>
            <a href="#testimonials" className="hover:text-white transition">
              گواهی‌های حسن انجام کار
            </a>
            <a href="#about" className="hover:text-white transition">
              درباره شرکت و تاریخچه
            </a>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-sm font-bold text-white mb-2">دفتر مرکزی</span>
            
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span className="text-slate-300 leading-relaxed">
                {currentSettings.address}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-orange-400 shrink-0" />
              <a href={`tel:${currentSettings.phone.replace(/[^0-9+]/g, '')}`} className="text-slate-300 hover:text-white font-mono" dir="ltr">
                {currentSettings.phone}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Printer className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-slate-300 font-mono" dir="ltr">
                {currentSettings.fax}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-slate-300 font-mono">
                {currentSettings.email}
              </span>
            </div>

            <a
              href="http://127.0.0.1:8000/admin/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-slate-400 hover:text-orange-400 transition"
            >
              <span>ورود به سامانه مدیریت محتوا (Admin CMS)</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <span>
            کلیه حقوق مادی و معنوی متعلق به {currentSettings.company_name_fa} (سهامی خاص) است.
          </span>
          <span className="font-mono text-slate-400">
            {currentSettings.company_name_en.toUpperCase()} • EST. 2011
          </span>
        </div>

      </div>
    </footer>
  );
}
