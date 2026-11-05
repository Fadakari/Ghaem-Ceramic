'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCompany } from '@/context/CompanyContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data } = useCompany();
  const settings = data.settings;

  const navLinks = [
    { name: 'صفحه اصلی', href: '/' },
    { name: 'محصولات پروتئینی', href: '/products' },
    { name: 'خدمات سازمانی و HoReCa', href: '/services' },
    { name: 'دانشنامه و مقالات', href: '/articles' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس و پشتیبانی', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#121316]/95 backdrop-blur-md border-b border-[#262832] text-white">
      {/* Micro-bar for veterinary license & cold chain status */}
      <div className="hidden md:flex justify-between items-center text-xs py-2 px-6 bg-[#0c0d0f] border-b border-[#1e2027] text-gray-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            پروانه بهداشتی دامپزشکی: {settings.veterinary_code}
          </span>
          <span className="text-gray-500">|</span>
          <span className="text-sky-300">
            پایش برودت زنجیره سرد: {settings.cold_chain_temp}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-300">توزیع روزانه و مستمر در سراسر کشور</span>
          <span className="text-gray-500">|</span>
          <a
            href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
            className="text-amber-400 hover:text-amber-300 transition-colors font-bold flex items-center gap-1"
          >
            <span>واحد بازرگانی:</span>
            <span dir="ltr">{settings.phone_sales}</span>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-white/5 p-1 rounded-2xl border border-white/10 group-hover:border-rose-500/40 transition-colors">
              <Image
                src="/images/brand/logo-mark.png"
                alt="لوگو شرکت بی‌سان سام یزد"
                width={48}
                height={48}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-rose-400 transition-colors">
                {settings.company_name || 'بی‌سان سام یزد'}
              </span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-medium line-clamp-1">
                مجتمع فرآوری و تامین گوشت
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    active
                      ? 'bg-rose-950/70 text-rose-300 border border-rose-800/60 shadow-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Side CTA & Search */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/products"
              className="p-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              title="جستجو در محصولات"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            <Link
              href="/contact"
              className="btn-primary-meat px-4.5 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-rose-950/50"
            >
              <span>استعلام قیمت عمده</span>
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Right Controls: Search + Phone + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/products"
              className="p-2 text-gray-300 hover:text-white bg-white/5 rounded-xl"
              aria-label="جستجوی محصولات"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>

            <a
              href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
              className="p-2 text-amber-400 bg-amber-950/30 border border-amber-800/40 rounded-xl"
              aria-label="تماس با واحد بازرگانی"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none"
              aria-label="باز کردن منو"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#16171b] border-b border-[#282a33] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-1 gap-1.5 pt-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-colors ${
                    active
                      ? 'bg-rose-900/40 text-rose-300 border border-rose-800/40'
                      : 'text-gray-200 hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <svg className="w-4 h-4 text-gray-500 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#2a2c36] space-y-2.5">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-meat w-full py-3.5 text-sm font-bold text-center block shadow-lg"
            >
              استعلام قیمت و تامین عمده
            </Link>

            <div className="bg-[#1e2027] p-3 rounded-2xl border border-white/5 space-y-1.5 text-xs">
              <div className="flex items-center justify-between text-gray-400">
                <span>کد نظارت دامپزشکی:</span>
                <span className="text-emerald-400 font-mono font-bold">{settings.veterinary_code}</span>
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>تلفن بازرگانی:</span>
                <a href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`} className="text-amber-400 font-bold font-mono" dir="ltr">
                  {settings.phone_sales}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
