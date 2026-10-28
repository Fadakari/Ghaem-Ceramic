"use client";

import React, { useState, useEffect } from "react";
import { SiteSetting } from "@/types/company";
import { ShieldCheck, Phone, Menu, X, FileDown, Layers } from "lucide-react";

interface HeaderProps {
  settings: SiteSetting;
}

export default function Header({ settings }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#advantages", label: "مزایای رقابتی" },
    { href: "#calculator", label: "محاسبه‌گر هاردوکس" },
    { href: "#products", label: "فرم‌ها و ابعاد" },
    { href: "#specs", label: "مشخصات فنی" },
    { href: "#process", label: "خط تولید و QC" },
    { href: "#installation", label: "روش‌های نصب" },
    { href: "#testimonials", label: "گواهی‌های صنعتی" },
    { href: "#contact", label: "تماس و استعلام" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090d16]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Company Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-700 flex items-center justify-center shadow-lg shadow-orange-500/20 border border-orange-400/30 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg sm:text-xl text-white tracking-tight flex items-center gap-1.5">
                {settings.company_name_fa}
                <span className="text-[10px] bg-orange-500/20 text-orange-400 border border-orange-500/30 px-1.5 py-0.5 rounded font-mono font-normal">
                  سختی 9 Mohs
                </span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider uppercase">
                {settings.company_name_en}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-orange-400 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 px-3.5 py-2 rounded-lg transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span dir="ltr">{settings.phone}</span>
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 px-4 py-2 rounded-lg shadow-lg shadow-orange-600/30 border border-orange-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>استعلام مهندسی</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              aria-label="منوی سایت"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0a0f1d] border-b border-slate-800 px-5 pt-3 pb-6 animate-in slide-in-from-top">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-orange-400 py-2 border-b border-slate-800/50"
              >
                {link.label}
              </a>
            ))}

            <div className="flex flex-col gap-2.5 pt-3">
              <a
                href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 text-sm font-semibold text-slate-200 bg-slate-800 py-2.5 rounded-lg border border-slate-700"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span dir="ltr">{settings.phone}</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 py-2.5 rounded-lg shadow-lg shadow-orange-600/30"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>ثبت درخواست مشاوره و استعلام</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
