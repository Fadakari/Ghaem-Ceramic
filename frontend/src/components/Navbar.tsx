'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useCompany } from '@/context/CompanyContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data } = useCompany();
  const settings = data.settings;

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll for mobile menu or search modal
  useEffect(() => {
    if (mobileMenuOpen || searchModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
          setSearchModalOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen, searchModalOpen]);

  // Close modals on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchModalOpen(false);
  }, [pathname]);

  // Persian Jalali date calculation (Intl native)
  const jalaliDateStr = useMemo(() => {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      return formatter.format(now);
    } catch {
      return 'امروز: چهارشنبه ۲۰ آبان ۱۴۰۵';
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchModalOpen(false);
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  // Streamlined 5 core navigation links - Removed redundant #facilities and #guide
  const navLinks = [
    {
      name: 'صفحه اصلی',
      href: '/',
      hasChild: false,
    },
    {
      name: 'محصولات پروتئینی',
      href: '/products',
      hasChild: true,
      submenu: [
        { name: 'محصولات تازه (گوساله و گوسفندی)', href: '/products?category=fresh-beef' },
        { name: 'گوشت شتر ممتاز کویر یزد', href: '/products?category=yazd-camel-meat' },
        { name: 'فرآورده‌های گوشتی و چرخ‌کرده', href: '/products?category=minced-and-processed' },
        { name: 'بسته‌بندی گاز محافظ (MAP)', href: '/products?category=map-packaging' },
      ],
    },
    {
      name: 'تامین عمده B2B',
      href: '/services',
      hasChild: false,
    },
    {
      name: 'اخبار و دانستنی‌ها',
      href: '/articles',
      hasChild: false,
    },
    {
      name: 'ارتباط با ما',
      href: '/contact',
      hasChild: false,
    },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    const cleanHref = href.split('#')[0].split('?')[0];
    if (cleanHref === '') return false;
    return pathname.startsWith(cleanHref);
  };

  return (
    <>
      {/* 
        1. Top Utility Header - Ultra-Transparent Dark Glass (.top-header)
      */}
      <div className="bg-[#050608]/80 backdrop-blur-xl text-gray-300 text-[11px] py-1.5 px-3 sm:px-4 border-b border-white/5 w-full max-w-full overflow-hidden relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 w-full">
          
          {/* Right Side: Persian Date & Veterinary Code */}
          <div className="flex items-center gap-3 truncate">
            <span className="flex items-center gap-1.5 text-gray-300 font-medium shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-white font-semibold">{jalaliDateStr}</span>
            </span>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <span className="text-gray-300 hidden md:inline truncate">
              پروانه بهداشتی دامپزشکی: <strong className="text-emerald-400 font-mono">{settings.veterinary_code || 'IR-VET-984210'}</strong>
            </span>
            <span className="text-gray-600 hidden lg:inline">|</span>
            <span className="text-rose-200 hidden lg:inline">
              پایش برودت: <strong className="font-mono text-white">{settings.cold_chain_temp || '۰ تا ۲+ درجه'}</strong>
            </span>
          </div>

          {/* Left Side: Sales Phone & Quick Search */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
              className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors font-bold"
              dir="ltr"
              title="تماس با واحد فروش"
            >
              <span className="font-mono text-xs">{settings.phone_sales || '035-38200001'}</span>
              <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>

            <span className="text-gray-600">|</span>

            <button
              type="button"
              onClick={() => setSearchModalOpen(true)}
              className="text-gray-300 hover:text-rose-400 hover:bg-white/10 p-1 rounded-lg transition-colors cursor-pointer"
              title="جستجو در محصولات"
              aria-label="جستجو"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* 
        2. Main Corporate Header - Ultra-Transparent Dark Glassmorphism, Sticky at Top
        Zero Left Overflow Guaranteed: max-w-full overflow-x-clip with 5 streamlined links
      */}
      <header
        className={`sticky top-0 z-50 w-full max-w-full overflow-x-clip transition-all duration-300 ${
          scrolled
            ? 'bg-[#08090b]/85 backdrop-blur-2xl border-b border-white/15 shadow-xl shadow-black/50'
            : 'bg-[#08090b]/50 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-18 sm:h-20 gap-2 sm:gap-4">
            
            {/* Right: Brand Logo & Typography */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-2xl bg-white/10 p-1.5 border border-white/15 group-hover:border-rose-500 group-hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center">
                <Image
                  src="/images/brand/logo-mark.png"
                  alt="لوگو شرکت بی‌سان سام یزد"
                  width={46}
                  height={46}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col shrink-0">
                <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-rose-400 transition-colors whitespace-nowrap">
                  {settings.company_name || 'شرکت بی‌سان سام یزد'}
                </span>
                <span className="text-[10px] text-rose-400 font-extrabold whitespace-nowrap hidden sm:block">
                  صنایع فرآوری و بسته‌بندی پروتئینی
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links (Compact 5 Links - Perfectly Contained) */}
            <nav className="hidden lg:flex items-center justify-center gap-1.5 xl:gap-3">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative px-3 py-2 rounded-xl text-xs xl:text-sm font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-1 ${
                        active
                          ? 'text-white bg-[#c21414] font-black shadow-md shadow-red-950/40'
                          : 'text-gray-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{link.name}</span>
                      {link.hasChild && (
                        <svg className="w-3 h-3 text-gray-400 group-hover:text-white transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {/* Submenu Dropdown */}
                    {link.hasChild && link.submenu && (
                      <div className="absolute right-0 top-full pt-1.5 hidden group-hover:block z-50 min-w-[220px]">
                        <div className="bg-[#0e0f13]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-white/15 p-2 space-y-1">
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-3.5 py-2 rounded-xl text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Left: Desktop Action Button & Search */}
            <div className="hidden lg:flex items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
                aria-label="جستجوی سریع"
                title="جستجو در کاتالوگ"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <Link
                href="/contact"
                className="btn-primary-meat px-4 py-2.5 text-xs xl:text-sm font-bold shadow-md shadow-red-950/50 whitespace-nowrap flex items-center gap-1.5"
              >
                <span>استعلام و سفارش عمده</span>
                <svg className="w-3.5 h-3.5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Mobile Header Controls */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              <button
                type="button"
                onClick={() => setSearchModalOpen(true)}
                className="w-9 h-9 flex items-center justify-center text-gray-200 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all"
                aria-label="جستجو"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <a
                href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                className="w-9 h-9 flex items-center justify-center text-amber-300 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all"
                aria-label="تماس با بازرگانی"
                title="تماس با بازرگانی"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="flex items-center gap-1.5 py-2 px-2.5 text-white bg-[#c21414] hover:bg-[#990f0f] rounded-xl shadow-xs cursor-pointer transition-all active:scale-95"
                aria-label="باز کردن منو"
              >
                <span className="text-xs font-bold">منو</span>
                <div className="w-3.5 h-3 flex flex-col justify-between">
                  <span className="w-full h-0.5 bg-white rounded-full"></span>
                  <span className="w-2.5 h-0.5 bg-white rounded-full self-end"></span>
                  <span className="w-full h-0.5 bg-white rounded-full"></span>
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* 
        3. Search Modal
      */}
      {searchModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            onClick={() => setSearchModalOpen(false)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />
          <div className="relative bg-[#0e0f14] rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl z-10 border border-white/15 text-right space-y-6 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 flex items-center justify-center">
                  <Image
                    src="/images/brand/logo-mark.png"
                    alt="لوگو بی‌سان سام"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white">جستجو در سبد محصولات و مقالات</h3>
                  <p className="text-[11px] text-gray-400">شرکت صنایع گوشت بی‌سان سام یزد</p>
                </div>
              </div>
              <button
                onClick={() => setSearchModalOpen(false)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="بستن"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSearchSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="نام برش گوشت، شقه، راسته، فیله، گوشت شتر..."
                  autoFocus
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/15 text-sm focus:outline-none focus:border-[#c21414] focus:bg-white/10 text-white transition-all font-medium placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute left-2.5 top-2.5 bottom-2.5 px-4 bg-[#c21414] hover:bg-[#990f0f] text-white rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>جستجو</span>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>

              {/* Quick Search Suggestions */}
              <div className="pt-2">
                <div className="text-[11px] text-gray-400 font-bold mb-2">دسته‌بندی‌های پرجستجو:</div>
                <div className="flex flex-wrap gap-2">
                  {['فیله گوساله', 'راسته گوسفندی', 'گوشت شتر یزد', 'چرخ‌کرده MAP', 'شقه بره', 'ماهیچه'].map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => {
                        setSearchQuery(tag);
                        router.push(`/products?search=${encodeURIComponent(tag)}`);
                        setSearchModalOpen(false);
                      }}
                      className="px-3 py-1 rounded-xl bg-white/10 hover:bg-[#c21414] text-xs font-medium text-gray-300 hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 
        4. Mobile Drawer Menu
      */}
      <div className="lg:hidden">
        <div
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden={!mobileMenuOpen}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            opacity: mobileMenuOpen ? 1 : 0,
            visibility: mobileMenuOpen ? 'visible' : 'hidden',
            pointerEvents: mobileMenuOpen ? 'auto' : 'none',
            transition: 'opacity 0.35s ease, visibility 0.35s ease',
          }}
        />

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
            maxWidth: '360px',
            zIndex: 61,
            backgroundColor: '#0a0b0e',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '-15px 0 50px rgba(0, 0, 0, 0.9)',
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
          <div>
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-[#050608]">
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

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-rose-900/60 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center cursor-pointer transition-all active:scale-90"
                aria-label="بستن منو"
              >
                ✕
              </button>
            </div>

            <div className="p-4 pb-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchModalOpen(true);
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-3 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <svg className="w-4 h-4 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>جستجو در کاتالوگ و برش‌های گوشت...</span>
              </button>
            </div>

            <div className="p-4 space-y-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition-all duration-200 ${
                      active
                        ? 'bg-[#c21414] text-white font-bold shadow-sm'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span className="text-sm font-bold">{link.name}</span>
                    <span className="rotate-180 text-xs opacity-60">←</span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="p-4 border-t border-white/10 bg-[#050608] space-y-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary-meat w-full py-3.5 text-xs sm:text-sm font-bold text-center block shadow-xl"
            >
              استعلام قیمت و تامین عمده B2B
            </Link>

            <div className="bg-white/5 p-3 rounded-2xl border border-white/5 space-y-2 text-xs">
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
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
