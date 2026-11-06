'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCompany } from '@/context/CompanyContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { data } = useCompany();
  const settings = data.settings;

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      name: 'صفحه اصلی',
      href: '/',
      sublabel: 'درگاه رسمی شرکت',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      name: 'محصولات پروتئینی',
      href: '/products',
      sublabel: 'گوساله، گوسفند، شتر و ماکیان',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
    {
      name: 'خدمات سازمانی',
      href: '/services',
      sublabel: 'تامین هورکا و قراردادهای B2B',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'دانشنامه و مقالات',
      href: '/articles',
      sublabel: 'راهنمای سلامت، نگهداری و پخت',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      name: 'درباره ما',
      href: '/about',
      sublabel: 'رسالت، کشتارگاه صنعتی و استانداردها',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'تماس و استعلام',
      href: '/contact',
      sublabel: 'دفتر مرکزی، فروش و پرسش‌های متداول',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#111216]/95 backdrop-blur-md border-b border-[#242632] text-white">
        {/* Top Micro-Bar: License, Telemetry & Hotline */}
        <div className="hidden lg:flex justify-between items-center text-xs py-1.5 px-6 bg-[#0a0b0d] border-b border-[#1c1d24] text-gray-400">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              پروانه بهداشتی دامپزشکی: <strong className="font-mono text-white">{settings.veterinary_code}</strong>
            </span>
            <span className="text-gray-600">|</span>
            <span className="text-sky-300 flex items-center gap-1">
              <span>پایش برودت زنجیره سرد:</span>
              <strong className="font-mono text-sky-200">{settings.cold_chain_temp}</strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">توزیع روزانه و مستمر پروتئین در سراسر کشور</span>
            <span className="text-gray-600">|</span>
            <a
              href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
              className="text-amber-400 hover:text-amber-300 transition-colors font-bold flex items-center gap-1"
            >
              <span>واحد بازرگانی و فروش:</span>
              <span dir="ltr" className="font-mono">{settings.phone_sales}</span>
            </a>
          </div>
        </div>

        {/* Main Desktop & Mobile Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* Brand Logo & Name */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 bg-white/5 p-1 rounded-2xl border border-white/10 group-hover:border-rose-500/40 transition-colors shadow-xs">
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
                <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-rose-400 transition-colors whitespace-nowrap">
                  {settings.company_name || 'بی‌سان سام یزد'}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium line-clamp-1 whitespace-nowrap">
                  مجتمع فرآوری و تامین گوشت
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - STRICTLY SINGLE LINE (whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 xl:px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-150 shrink-0 ${
                      active
                        ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60 shadow-sm'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Right Side CTA & Search */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
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
                className="btn-primary-meat px-4.5 py-2.5 text-xs xl:text-sm font-bold shadow-md shadow-rose-950/50 whitespace-nowrap"
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
                className="p-2 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
                aria-label="جستجوی محصولات"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>

              <a
                href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                className="p-2 text-amber-400 bg-amber-950/40 border border-amber-800/50 rounded-xl"
                aria-label="تماس با واحد بازرگانی"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 text-gray-200 hover:text-white bg-white/5 border border-white/10 rounded-xl focus:outline-none cursor-pointer"
                aria-label="باز کردن منو"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Modern, Luxury Slide-Over Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-[#121316] text-white border-l border-[#282a36] shadow-2xl flex flex-col justify-between overflow-y-auto z-10 transition-transform duration-300">
            
            {/* Drawer Header */}
            <div>
              <div className="p-5 border-b border-[#232532] flex items-center justify-between bg-[#0e0f13]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 p-1 border border-white/10 flex items-center justify-center">
                    <Image
                      src="/images/brand/logo-mark.png"
                      alt="لوگو"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="font-black text-sm text-white">{settings.company_name}</div>
                    <div className="text-[10px] text-gray-400">فرآوری و تامین گوشت استاندارد</div>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="بستن منو"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Items with Icons & Sublabels */}
              <div className="p-4 space-y-1.5">
                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3.5 p-3 rounded-2xl transition-all duration-200 ${
                        active
                          ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60 shadow-sm'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <div className={`p-2 rounded-xl shrink-0 ${active ? 'bg-rose-900/60 text-rose-300' : 'bg-white/5 text-gray-400'}`}>
                        {link.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-sm leading-tight">{link.name}</div>
                        <div className="text-[10px] text-gray-400 font-normal mt-0.5">{link.sublabel}</div>
                      </div>
                      <svg className="w-4 h-4 text-gray-500 rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-[#232532] bg-[#0c0d10] space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary-meat w-full py-3.5 text-xs sm:text-sm font-bold text-center block shadow-lg"
              >
                استعلام قیمت و تامین عمده B2B
              </Link>

              {/* Quick Contact & Info Card */}
              <div className="bg-[#17181e] p-3 rounded-2xl border border-white/5 space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-400">
                  <span>تلفن بازرگانی:</span>
                  <a
                    href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                    className="text-amber-400 font-bold font-mono"
                    dir="ltr"
                  >
                    {settings.phone_sales}
                  </a>
                </div>
                <div className="flex items-center justify-between text-gray-400 pt-1 border-t border-white/5">
                  <span>کد بهداشتی دامپزشکی:</span>
                  <span className="text-emerald-400 font-mono font-bold">{settings.veterinary_code}</span>
                </div>
                <div className="flex items-center justify-between text-gray-400 pt-1 border-t border-white/5">
                  <span>پایش برودت زنجیره سرد:</span>
                  <span className="text-sky-300 font-mono font-bold">{settings.cold_chain_temp}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
