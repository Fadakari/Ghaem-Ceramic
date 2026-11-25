'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCompany } from '@/context/CompanyContext';

export default function Footer() {
  const { data } = useCompany();
  const settings = data.settings;

  return (
    <footer className="bg-[#111216] text-gray-300 border-t border-[#232530] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 p-1.5 border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/brand/logo-mark.png"
                  alt="بی‌سان سام یزد"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-lg text-white group-hover:text-[#c21414] transition-colors">
                  {settings.company_name}
                </span>
                <span className="text-[10px] text-gray-400">
                  مجتمع صنعتی فرآوری و بسته‌بندی گوشت
                </span>
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {settings.tagline || 'تولید، قطعه‌بندی بهداشتی و بسته‌بندی انواع گوشت تازه گوساله، گوسفندی و شتر ممتاز کویر یزد با نظارت مقیم اداره کل دامپزشکی کشور.'}
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-emerald-400">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                پروانه بهداشتی دامپزشکی: <strong className="font-mono text-white">{settings.veterinary_code || 'IR-VET-984210'}</strong>
              </span>
              <span className="text-sky-400 flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                زنجیره سرد برخط: <strong className="font-mono text-white">{settings.cold_chain_temp || '۰ تا ۲+ درجه'}</strong>
              </span>
            </div>

            {/* Social Icons (Mahya style) */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-[11px] text-gray-400">شبکه‌های اجتماعی:</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#c21414] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#c21414] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.34-.675.34l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.536-.195 1.006.128.832.923z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/5 hover:bg-[#c21414] text-gray-300 hover:text-white flex items-center justify-center transition-all border border-white/10"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
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
              <Link href="/products" className="text-[#c21414] hover:text-[#e02828] font-bold block pt-1">
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
              <Link href="/about#facility" className="text-gray-400 hover:text-white transition">
                تاسیسات و خطوط کارخانه
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
              <div className="font-bold text-gray-200">آدرس مجتمع:</div>
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
          <div className="flex items-center gap-4 text-gray-400 flex-wrap justify-center">
            <span>استاندارد ISO 22000:2018</span>
            <span>•</span>
            <span>گواهی مدیریت ایمنی غذا HACCP</span>
            <span>•</span>
            <span>نشان حلال جمهوری اسلامی ایران</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
