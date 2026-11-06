'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MeatCutGuide() {
  const [activeTab, setActiveTab] = useState<'beef' | 'lamb' | 'camel'>('beef');

  const guides = {
    beef: {
      title: 'راهنمای آناتومی و برش‌های گوساله نر پرواری',
      subtitle: 'گوساله‌های جوان زیر ۱۸ ماه با بافت عضلانی ترد و ماربلینگ ایده‌آل',
      cuts: [
        {
          name: 'فیله و راسته (Loin & Tenderloin)',
          bestFor: 'کباب برگ اعلا، استیک شاتوبریان و ریب‌آی',
          tenderness: 'بسیار لطیف (۵ از ۵)',
          desc: 'کم‌تحرک‌ترین عضلات راسته کمر با الیاف کوتاه و رگه‌های ظریف چربی؛ نیازمند پخت سریع با حرارت بالا.',
          link: '/products/boneless-beef-striploin',
        },
        {
          name: 'مغز ران و سرقلوه (Topside & Rump)',
          bestFor: 'خورشت‌های مجلسی، بیف استروگانف، چلوگوشت',
          tenderness: 'منسجم و باقوام (۴ از ۵)',
          desc: 'بافت خالص بدون چربی اضافه با ماندگاری شکل ظاهری در پخت‌های آرام و طولانی سنتی ایرانی.',
          link: '/products?category=fresh-beef',
        },
        {
          name: 'سردست و قلوه‌گاه (Chuck & Flank)',
          bestFor: 'چرخ‌کرده مخصوص کباب کوبیده و همبرگر دست‌ساز',
          tenderness: 'طعم غنی و پرچرب (۴ از ۵)',
          desc: 'ترکیب بهینه پروتئین و چربی ساختاری که آبداری و چسبندگی بی‌نظیری به مایه کباب می‌بخشد.',
          link: '/products/premium-minced-blend',
        },
      ],
    },
    lamb: {
      title: 'راهنمای آناتومی و برش‌های بره نر کشتار روز',
      subtitle: 'گوشت تازه کشتار صبح با چربی متعادل، معطر و زودپخت',
      cuts: [
        {
          name: 'شیشلیک و دنده‌کباب (Lamb Chops & Rack)',
          bestFor: 'شیشلیک شاندیز، کباب دنده و گریل باربیکیو',
          tenderness: 'فوق‌العاده لذیذ و ترد (۵ از ۵)',
          desc: 'برش‌های کالیبره شده با استخوان تمیز، دارای چربی محافظ که مانع از خشک شدن مغز گوشت می‌شود.',
          link: '/products/fresh-lamb-tenderloin',
        },
        {
          name: 'ماهیچه و گردن (Lamb Shank & Neck)',
          bestFor: 'باقالی‌پلو با ماهیچه، خوراک چلوگردن، آبگوشت سنتی',
          tenderness: 'سرشار از ژلاتین طبیعی (۵ از ۵)',
          desc: 'تراکم کلاژن سازنده مفاصل که در پخت ۳ ساعته به بافتی حریری و لعابی غلیظ تبدیل می‌گردد.',
          link: '/products/lamb-shank-and-neck',
        },
        {
          name: 'ران و سردست بره (Lamb Leg & Shoulder)',
          bestFor: 'چنجه زعفرانی، کباب بختیاری، خورشت قورمه‌سبزی',
          tenderness: 'نرم و معطر (۵ از ۵)',
          desc: 'قطعات اصلی لاشه گوسفندی با طعم دلپذیر علوفه‌ای بدون کمترین بوی نامطبوع کهنگی.',
          link: '/products?category=fresh-lamb',
        },
      ],
    },
    camel: {
      title: 'راهنمای تخصصی گوشت شتر بومی کویر یزد',
      subtitle: 'محصول سنتی و ارگانیک یزد؛ سرشار از آهن طبیعی، طبع گرم و کمتر از ۲٪ چربی',
      cuts: [
        {
          name: 'مغز ران بدون استخوان (Camel Rump & Round)',
          bestFor: 'خورشت قیمه سنتی یزدی، رست‌بیف رژیمی، چلوگوشت گرم',
          tenderness: 'لطیف و خوش‌پخت (۴ از ۵)',
          desc: 'محصول سلامت‌محور با غلظت بالای گلیکوژن و پروتئین زودهضم؛ بدون کلسترول مضر، عالی برای ورزشکاران.',
          link: '/products/yazd-lean-camel-rump',
        },
        {
          name: 'راسته و کوهان شتر (Camel Loin & Hump)',
          bestFor: 'کباب برگ شتر، کباب تابه‌ای معطر، خوراک سنتی',
          tenderness: 'ترد و انرژی‌بخش (۴ از ۵)',
          desc: 'کوهان شتر چربی اشباع‌نشده طبیعی با اسیدهای چرب لینولئیک است که در طب سنتی خواص ضدالتهابی دارد.',
          link: '/products?category=yazd-camel-meat',
        },
        {
          name: 'سردست و چرخ‌کرده شتر (Camel Shoulder Mince)',
          bestFor: 'کتلت سلامت، کباب کوبیده مخلوط گرم، برگر مغذی',
          tenderness: 'پروتئین فشرده (۴ از ۵)',
          desc: 'بهترین جایگزین گوشت قرمز سنگین برای سالمندان و افراد مبتلا به چربی خون و کم‌خونی فقر آهن.',
          link: '/products?category=yazd-camel-meat',
        },
      ],
    },
  };

  const currentGuide = guides[activeTab];

  return (
    <section className="py-16 sm:py-24 bg-[#14151a] text-white border-b border-[#252733] relative overflow-hidden">
      {/* Subtle ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#292c38] pb-6 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-[#22242e] border border-[#353846] px-3 py-1 rounded-full text-xs font-bold text-rose-300">
              <span>راهنمای فنی سرآشپزان و مصرف‌کنندگان</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              دانش آناتومی لاشه و انتخاب هوشمندانه برش
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl leading-relaxed">
              هر عضله دام به دلیل میزان فعالیت حرکتی و کلاژن بافتی، نیازمند شیوه طبخ متفاوتی است. با شناخت برش‌ها، کیفیت نهایی خوراک را به اوج برسانید.
            </p>
          </div>

          {/* Animal Tabs Switcher */}
          <div className="flex items-center gap-2 bg-[#1b1c23] p-1.5 rounded-2xl border border-[#2e313e] shrink-0">
            <button
              onClick={() => setActiveTab('beef')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'beef'
                  ? 'bg-[#9f1239] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              گوساله پرواری
            </button>
            <button
              onClick={() => setActiveTab('lamb')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'lamb'
                  ? 'bg-[#9f1239] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              گوسفند و بره
            </button>
            <button
              onClick={() => setActiveTab('camel')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeTab === 'camel'
                  ? 'bg-[#9f1239] text-white shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              شتر کویر یزد
            </button>
          </div>
        </div>

        {/* Active Tab Header */}
        <div className="mb-8 text-right">
          <h3 className="text-xl sm:text-2xl font-black text-rose-300">
            {currentGuide.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            {currentGuide.subtitle}
          </p>
        </div>

        {/* 3 Cut Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {currentGuide.cuts.map((cut, index) => (
            <div
              key={index}
              className="bg-[#1b1c23] border border-[#2b2d39] rounded-3xl p-6 sm:p-7 flex flex-col justify-between space-y-5 hover:border-rose-800/60 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-9 h-9 rounded-xl bg-rose-950/80 text-rose-300 font-bold text-xs flex items-center justify-center border border-rose-800/40">
                    ۰{index + 1}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-0.5 rounded-full">
                    {cut.tenderness}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-black text-white group-hover:text-rose-300 transition-colors">
                  {cut.name}
                </h4>

                <div className="bg-[#242632] p-3 rounded-2xl border border-white/5 space-y-1">
                  <span className="text-[10px] text-gray-400 font-bold block">بهترین روش پخت:</span>
                  <span className="text-xs font-bold text-amber-300 block">{cut.bestFor}</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed font-normal">
                  {cut.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#292c38]">
                <Link
                  href={cut.link}
                  className="text-xs font-bold text-rose-400 hover:text-rose-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>مشاهده محصولات این برش در کاتالوگ</span>
                  <span className="rotate-180">←</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
