'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCompany } from '@/context/CompanyContext';

export default function Footer() {
  const { data } = useCompany();
  const settings = data.settings;

  return (
    <footer className="bg-[#0f1013] text-gray-300 border-t border-[#232530] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#232530]">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-white/5 p-1 border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/brand/logo-mark.png"
                  alt="بی‌سان سام یزد"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white group-hover:text-rose-400 transition-colors">
                  {settings.company_name}
                </span>
                <span className="text-[10px] text-gray-400">
                  مجتمع فرآوری گوشت و فرآورده‌های دامی
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {settings.tagline}
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-emerald-400">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                پروانه بهداشتی دامپزشکی: {settings.veterinary_code}
              </span>
              <span className="text-sky-400 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                زنجیره سرد برخط: {settings.cold_chain_temp}
              </span>
            </div>
          </div>

          {/* Column 2: Products Quick Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-sm font-bold text-white mb-2">کاتالوگ و برش‌های ویژه</h4>
            <div>
              <Link href="/products?category=fresh-beef" className="text-gray-400 hover:text-white transition">
                راسته و فیله گوساله پرواری
              </Link>
            </div>
            <div>
              <Link href="/products?category=fresh-lamb" className="text-gray-400 hover:text-white transition">
                شقه، ماهیچه و گردن گوسفندی
              </Link>
            </div>
            <div>
              <Link href="/products?category=yazd-camel-meat" className="text-gray-400 hover:text-white transition">
                گوشت شتر کم‌چرب کویر یزد
              </Link>
            </div>
            <div>
              <Link href="/products?category=specialty-steaks" className="text-gray-400 hover:text-white transition">
                استیک‌های ریب‌آی با ماربلینگ ممتاز
              </Link>
            </div>
            <div>
              <Link href="/products?category=minced-and-processed" className="text-gray-400 hover:text-white transition">
                گوشت چرخ‌کرده مخلوط ۸۰/۲۰
              </Link>
            </div>
            <div>
              <Link href="/products" className="text-rose-400 hover:text-rose-300 font-bold block pt-1">
                ← جستجو در تمامی محصولات
              </Link>
            </div>
          </div>

          {/* Column 3: Corporate Pages */}
          <div className="lg:col-span-2 space-y-2.5">
            <h4 className="text-sm font-bold text-white mb-2">دسترسی سریع</h4>
            <div>
              <Link href="/about" className="text-gray-400 hover:text-white transition">
                درباره بی‌سان سام
              </Link>
            </div>
            <div>
              <Link href="/services" className="text-gray-400 hover:text-white transition">
                خدمات سازمانی و HoReCa
              </Link>
            </div>
            <div>
              <Link href="/articles" className="text-gray-400 hover:text-white transition">
                دانشنامه و مقالات سلامت
              </Link>
            </div>
            <div>
              <Link href="/contact" className="text-gray-400 hover:text-white transition">
                استعلام قیمت و تامین عمده
              </Link>
            </div>
            <div>
              <Link href="/contact#faq" className="text-gray-400 hover:text-white transition">
                پرسش‌های متداول
              </Link>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white mb-2">ارتباط با کارخانه و فروش</h4>
            
            <div className="space-y-1 text-gray-400">
              <div className="font-bold text-gray-200">آدرس:</div>
              <div className="text-[11px] leading-relaxed">{settings.address}</div>
            </div>

            <div className="space-y-1 text-gray-400">
              <div className="font-bold text-gray-200">واحد بازرگانی و فروش:</div>
              <a href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`} className="text-amber-400 font-bold block" dir="ltr">
                {settings.phone_sales}
              </a>
            </div>

            <div className="space-y-1 text-gray-400">
              <div className="font-bold text-gray-200">ساعات کاری:</div>
              <div className="text-[11px]">{settings.working_hours}</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Licences */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} کلیه حقوق این وب‌سایت متعلق به شرکت بی‌سان سام یزد می‌باشد.
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <span>استاندارد ISO 22000</span>
            <span>•</span>
            <span>گواهی HACCP</span>
            <span>•</span>
            <span>نشان حلال جمهوری اسلامی ایران</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
