"use client";

import React, { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUpRight, ChevronLeft } from "lucide-react";
import { SiteSetting } from "@/types/company";
import { useCompany } from "@/context/CompanyContext";

interface NavbarProps {
  settings?: SiteSetting;
}

export default function Navbar({ settings }: NavbarProps) {
  const { settings: contextSettings } = useCompany();
  const effectiveSettings = settings || contextSettings;

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const companyNameFa = effectiveSettings?.company_name_fa || "سرامیک صنعت قائم";
  const companyNameEn = effectiveSettings?.company_name_en || "GHAEM CERAMIC";
  const phone = effectiveSettings?.phone || "035-37301340";
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Desktop navigation items (concise, 5 items)
  const desktopLinks = [
    { href: "#products", label: "محصولات و ابعاد" },
    { href: "#comparison", label: "مقایسه با هاردوکس" },
    { href: "#technology", label: "خط تولید و کیفیت" },
    { href: "#testimonials", label: "گواهی‌های رسمی" },
    { href: "#about", label: "درباره ما" },
  ];

  // Mobile menu items
  const mobileLinks = [
    { href: "#about", label: "معرفی و سوابق شرکت" },
    { href: "#products", label: "محصولات و ابعاد قطعات" },
    { href: "#comparison", label: "مقایسه علمی با هاردوکس" },
    { href: "#technology", label: "فرآیند تولید و کنترل کیفیت" },
    { href: "#specs", label: "مشخصات فنی آزمایشگاهی" },
    { href: "#installation", label: "روش‌های استاندارد نصب" },
    { href: "#testimonials", label: "گواهی‌های رسمی حسن انجام کار" },
    { href: "#contact", label: "ارتباط با ما و استعلام قیمت" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200 py-2.5 sm:py-3"
            : "bg-white border-b border-slate-200 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            
            {/* Logo Brand (Strictly contained, never causes overflow) */}
            <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-[#ff4500] via-[#ff6a00] to-[#ffa500] flex items-center justify-center text-white shadow-md shadow-orange-500/25 shrink-0 group-hover:scale-105 transition-transform">
                <span className="font-black text-lg sm:text-xl tracking-tighter">G</span>
              </div>
              <div className="flex flex-col shrink-0">
                <span className="font-black text-sm sm:text-base lg:text-lg text-slate-900 leading-tight whitespace-nowrap">
                  {companyNameFa}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono tracking-wider uppercase whitespace-nowrap">
                  {companyNameEn}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {desktopLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs xl:text-sm font-bold text-slate-600 hover:text-[#ff5500] hover:bg-orange-50/70 px-3 py-2 rounded-lg transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              
              {/* Phone (Only on medium screens and up) */}
              <a
                href={phoneHref}
                className="hidden md:flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200/80 px-3 py-2 rounded-xl transition font-mono whitespace-nowrap shrink-0"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff5500] shrink-0" />
                <span>{phone}</span>
              </a>

              {/* Inquiry Button */}
              <a
                href="#contact"
                className="hidden sm:inline-flex btn-vibrant-orange items-center gap-1.5 text-xs font-bold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              >
                <span>استعلام مهندسی</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition shrink-0"
                aria-label="باز کردن منو"
              >
                <Menu className="w-6 h-6" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer: Only rendered when mobileMenuOpen is TRUE */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          
          {/* Backdrop */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Drawer container */}
          <div className="fixed top-0 bottom-0 right-0 h-full w-[85%] max-w-[320px] bg-white shadow-2xl flex flex-col justify-between z-10 animate-in slide-in-from-right duration-250 ease-out">
            
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#ff4500] to-[#ffa500] flex items-center justify-center text-white font-black text-base shadow-xs">
                  G
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-slate-900 whitespace-nowrap">{companyNameFa}</span>
                  <span className="text-[9px] text-slate-400 font-mono tracking-wider uppercase">{companyNameEn}</span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
                aria-label="بستن منو"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              {mobileLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#ff5500] hover:bg-orange-50/70 transition"
                >
                  <span>{link.label}</span>
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/80 flex flex-col gap-2.5 shrink-0">
              <a
                href={phoneHref}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-200 shadow-2xs font-mono"
                dir="ltr"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff5500]" />
                <span>{phone}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-vibrant-orange flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-center"
              >
                <span>ثبت درخواست مشاوره و استعلام</span>
              </a>
            </div>

          </div>

        </div>
      )}
    </>
  );
}
