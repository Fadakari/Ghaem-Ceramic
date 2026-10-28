import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  category?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHeader({ title, subtitle, category, breadcrumb }: PageHeaderProps) {
  return (
    <div className="bg-[#0f1f38] text-white py-14 sm:py-20 border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 font-medium">
          <Link href="/" className="hover:text-white transition">
            صفحه اصلی
          </Link>
          {breadcrumb?.map((b, i) => (
            <React.Fragment key={i}>
              <ChevronLeft className="w-3.5 h-3.5 text-slate-500" />
              {b.href ? (
                <Link href={b.href} className="hover:text-white transition">
                  {b.label}
                </Link>
              ) : (
                <span className="text-orange-400">{b.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {category && (
          <span className="inline-block text-xs font-bold text-orange-400 uppercase tracking-wider mb-2 font-mono">
            {category}
          </span>
        )}

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
          {title}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed font-normal">
          {subtitle}
        </p>

      </div>
    </div>
  );
}
