'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCompany } from '@/context/CompanyContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { data } = useCompany();
  const settings = data.settings;

  // Track window scroll for header glassmorphism transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    {
      name: 'صفحه اصلی',
      href: '/',
      sublabel: 'درگاه رسمی مجموعه',
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
      name: 'خدمات سازمانی و B2B',
      href: '/services',
      sublabel: 'تامین هورکا و قراردادهای تناژ بالا',
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
      sublabel: 'کشتارگاه صنعتی، استانداردها و افتخارات',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      name: 'تماس و استعلام',
      href: '/contact',
      sublabel: 'دفتر مرکزی، فروش و استعلام قیمت',
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
      {/* Sticky Minimalist Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0d10]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/40'
            : 'bg-[#0c0d10]/80 backdrop-blur-md border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20 gap-4">
            
            {/* Brand Logo & Name - Strictly Unshrinkable & Full Company Title */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-2xl bg-white/5 p-1.5 border border-white/10 group-hover:border-rose-500/40 group-hover:scale-105 transition-all duration-300 shadow-sm">
                <Image
                  src="/images/brand/logo-mark.png"
                  alt="لوگو شرکت بی‌سان سام یزد"
                  width={44}
                  height={44}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col shrink-0">
                <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-white group-hover:text-rose-300 transition-colors whitespace-nowrap">
                  {settings.company_name || 'شرکت بی‌سان سام یزد'}
                </span>
                <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap hidden sm:block">
                  مجتمع فرآوری و تامین گوشت
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Strictly Single Line */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-nowrap shrink-0">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 ${
                      active
                        ? 'text-white bg-white/10 shadow-xs'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-1 right-3 left-3 h-0.5 bg-rose-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3 shrink-0">
              <a
                href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold text-amber-300 hover:bg-white/5 transition-colors"
                dir="ltr"
              >
                <svg className="w-4 h-4 text-amber-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-mono">{settings.phone_sales}</span>
              </a>

              <Link
                href="/contact"
                className="btn-primary-meat px-5 py-2.5 text-xs xl:text-sm font-bold shadow-lg shadow-rose-950/40 whitespace-nowrap"
              >
                <span>استعلام و تامین عمده</span>
                <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Header Controls: Clean, Balanced & Zero Overflow */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <a
                href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                className="w-10 h-10 flex items-center justify-center text-amber-400 bg-amber-950/30 hover:bg-amber-900/40 border border-amber-800/40 rounded-2xl transition-all"
                aria-label="تماس با واحد بازرگانی"
                title="تماس فوری با بازرگانی"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Animated Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center gap-2 py-2 px-3 text-white bg-rose-950/80 hover:bg-rose-900 border border-rose-800/70 rounded-2xl shadow-md cursor-pointer transition-all active:scale-95"
                aria-label="باز کردن منو"
              >
                <span className="text-xs font-bold text-rose-200">منو</span>
                <div className="w-4 h-3.5 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-rose-200 rounded-full transition-all"></span>
                  <span className="w-3/4 h-0.5 bg-rose-200 rounded-full transition-all self-end"></span>
                  <span className="w-full h-0.5 bg-rose-200 rounded-full transition-all"></span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 
        BULLETPROOF ANIMATED MOBILE DRAWER
        Uses inline styles + Tailwind utilities so it is 100% immune to CSS compilation bugs.
      */}
      <div className="lg:hidden">
        {/* Backdrop Overlay with Smooth Fade Transition */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden={!mobileMenuOpen}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            opacity: mobileMenuOpen ? 1 : 0,
            visibility: mobileMenuOpen ? 'visible' : 'hidden',
            pointerEvents: mobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.35s ease, visibility 0.35s ease',
          }}
        />

        {/* Drawer Panel with Hardware-Accelerated Slide Transition */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="منوی سایت"
          style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            right: 0,
            width: '85vw',
            maxWidth: '380px',
            zIndex: 61,
            backgroundColor: '#0f1013',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '-15px 0 50px rgba(0, 0, 0, 0.8)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            overflowY: 'auto',
            transform: mobileMenuOpen ? 'translate3d(0, 0, 0)' : 'translate3d(100%, 0, 0)',
            visibility: mobileMenuOpen ? 'visible' : 'hidden',
            pointerEvents: mobileMenuOpen ? 'auto' : 'none',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s ease',
            willChange: 'transform',
          }}
        >
          {/* Drawer Top Section */}
          <div>
            {/* Header with Logo and prominent Close Button */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-[#08090b]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/5 p-1.5 border border-white/10 flex items-center justify-center shrink-0">
                  <Image
                    src="/images/brand/logo-mark.png"
                    alt="لوگو"
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-black text-sm text-white">{settings.company_name}</div>
                  <div className="text-[10px] text-gray-400">فرآوری و تامین پروتئین استاندارد</div>
                </div>
              </div>

              {/* Close Button - Guaranteed Smooth Close */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-rose-900/60 border border-white/10 hover:border-rose-700/60 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-90"
                aria-label="بستن منو"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quick Search Shortcut inside Drawer */}
            <div className="p-4 pb-2">
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3.5 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>جستجو در کاتالوگ و برش‌های گوشت...</span>
              </Link>
            </div>

            {/* Navigation Links with Icons & Sublabels */}
            <div className="p-4 space-y-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3.5 p-3.5 rounded-2xl transition-all duration-200 ${
                      active
                        ? 'bg-rose-950/80 text-rose-300 border border-rose-800/60 shadow-sm'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className={`p-2 rounded-xl shrink-0 ${active ? 'bg-rose-900/60 text-rose-300' : 'bg-white/5 text-gray-400'}`}>
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-sm leading-tight truncate">{link.name}</div>
                      <div className="text-[10px] text-gray-400 font-normal mt-0.5 truncate">{link.sublabel}</div>
                    </div>
                    <svg className="w-4 h-4 text-gray-500 rotate-180 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Drawer Bottom Section */}
          <div className="p-4 border-t border-white/10 bg-[#08090b] space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-meat w-full py-3.5 text-xs sm:text-sm font-bold text-center block shadow-xl"
            >
              استعلام قیمت و تامین عمده B2B
            </Link>

            {/* Quick Contact & Info Card */}
            <div className="bg-white/5 p-3.5 rounded-2xl border border-white/5 space-y-2 text-xs">
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
              <div className="flex items-center justify-between text-gray-400 pt-1.5 border-t border-white/5">
                <span>کد پروانه بهداشتی:</span>
                <span className="text-emerald-400 font-mono font-bold">{settings.veterinary_code}</span>
              </div>
              <div className="flex items-center justify-between text-gray-400 pt-1.5 border-t border-white/5">
                <span>پایش برودت زنجیره سرد:</span>
                <span className="text-sky-300 font-mono font-bold">{settings.cold_chain_temp}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
