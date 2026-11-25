'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCompany } from '@/context/CompanyContext';
import { getSafeImageUrl } from '@/lib/imageHelper';
import ScrollReveal from './ScrollReveal';

interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  features: string[];
  capacity: string;
}

const defaultFacilityItems: FacilityItem[] = [
  {
    id: 'slaughterhouse',
    title: 'کشتارگاه صنعتی و خط مکانیزه استحصال',
    subtitle: 'مجهز به خطوط اتوماتیک پوست‌کنی و شستشوی بهداشتی لاشه',
    badge: 'خط مکانیزه بهداشتی',
    image: '/images/facilities/facility-1.jpg',
    description:
      'مجتمع کشتارگاهی بی‌سان سام یزد با بهره‌گیری از خطوط مکانیزه اروپایی، سیستم پوست‌کنی هیدرولیک بدون تماس دست، اره‌های لاشه‌بر استیل و دوش‌های شستشوی تحت فشار، لاشه را تحت معاینه کامل دامپزشک مقیم آماده ورود به چرخه پیش‌سردخانه می‌نماید.',
    features: [
      'خط کشتار و پوست‌کنی تمام استیل بدون تماس دستی',
      'بازرسی مقیم دکتر دامپزشک قبل و بعد از ذبح',
      'سیستم شستشو و ضدعفونی مداوم تحت فشار (CIP)',
      'سیستم هدایت خودکار قلاب‌ها به سالن پیش‌سرد',
    ],
    capacity: 'ظرفیت کشتار: ۵۰۰ رأس دام سبک و ۵۰ رأس دام سنگین در شیفت',
  },
  {
    id: 'cutting-room',
    title: 'سالن‌های قطعه‌بندی بهداشتی استیل (Clean Room)',
    subtitle: 'فضای استریل مجهز به فیلتراسیون هوای هپا و دمای ۴ درجه سانتی‌گراد',
    badge: 'استاندارد HACCP',
    image: '/images/facilities/facility-4.jpg',
    description:
      'سالن‌های مجهز قطعه‌بندی با کنترل هوشمند دمای ۴ درجه و رطوبت استاندارد، میزهای تمام استنلس استیل ۳۱۶ و پرسنل آموزش‌دیده در زمینه کالبدشناسی گوشت، برش‌های راسته، فیله، ران، سرست و شقه را با دقت میلی‌متری فرآوری می‌نمایند.',
    features: [
      'فیلتراسیون هوای کلاس تمیز با فیلترهای هپا',
      'میزهای کار و تجهیزات استنلس استیل ضدمیکروب',
      'تفکیک تخصصی برش‌های پرایم بر اساس درجه ماربلینگ',
      'ضدعفونی روزانه با سیستم‌های بخار خشک و ازن',
    ],
    capacity: 'ظرفیت خردایش و قطعه‌بندی: روزانه بیش از ۳۰ تن گوشت قرمز',
  },
  {
    id: 'map-packaging',
    title: 'خطوط پیشرفته بسته‌بندی اتمسفر اصلاح‌شده (MAP)',
    subtitle: 'تزریق گازهای خنثی نیتروژن و CO2 جهت حفظ تازگی و ماندگاری طبیعی',
    badge: 'تکنولوژی گاز محافظ MAP',
    image: '/images/facilities/facility-6.jpg',
    description:
      'دستگاه‌های تری‌سیلر پرسرعت با تخلیه هوای داخل ظروف و تزریق ترکیب محافظ نیتروژن و دی‌اکسید کربن، مانع از رشد باکتری‌های هوازی شده و بافت، رنگ سرخ طبیعی و آبدار بودن گوشت را تا پایان تاریخ مصرف بدون کوچک‌ترین ماده نگه‌دارنده تضمین می‌کنند.',
    features: [
      'افزایش ماندگاری تا ۳ برابر بدون مواد شیمیایی افزوده',
      'حفظ رطوبت و بافت ترد گوشت تازه کشتار روز',
      'ظروف زیست‌تخریب‌پذیر استاندارد غذایی (Food Grade)',
      'چاپ بارکد ردیابی دامپزشکی و تاریخ دقیق تولید',
    ],
    capacity: 'سرعت بسته‌بندی: ۶,۰۰۰ بسته بشقابی در هر ساعت کاری',
  },
  {
    id: 'cold-chain',
    title: 'سردخانه‌های آمونیاکی و تونل‌های انجماد سریع IQF',
    subtitle: 'سالن‌های پیش‌سرد صفر درجه و سالن‌های نگهداری منفی ۱۸ درجه',
    badge: 'پایش برودت ۰ تا ۲+ درجه',
    image: '/images/facilities/cold-chain-facility.jpg',
    description:
      'سردخانه‌های صنعتی آمونیاکی بی‌سان سام با کنترل دیجیتالی دما و رطوبت، دوره ضروری جمود نعشی (Rigor Mortis) را در دمای صفر الی ۲ درجه طی کرده و در صورت نیاز به انجماد، توسط تونل‌های انجماد سریع IQF در دمای منفی ۴۰ درجه سانتی‌گراد منجمد می‌گردند.',
    features: [
      'سیستم رک‌های طبقاتی متحرک با تهویه یکنواخت سرمایش',
      'سنسورهای هوشمند ثبت دما با آلارم آنلاین تلگرامی و پیامکی',
      'تونل انجماد فوق‌سریع IQF جهت حفظ ساختار بافت سلولی گوشت',
      'ژنراتورهای پشتیبان اضطراری برق بدون وقفه (UPS & Diesel)',
    ],
    capacity: 'ظرفیت ذخیره‌سازی: ۱,۵۰۰ تن انواع گوشت گرم و منجمد',
  },
  {
    id: 'logistics-fleet',
    title: 'ناوگان لجستیک و توزیع مجهز به حسگرهای آنلاین (IoT)',
    subtitle: 'کامیونت‌های ایزوله مجهز به دیتالاگرهای لحظه‌ای دما و موقعیت‌یاب',
    badge: 'زنجیره سرد یکپارچه',
    image: '/images/facilities/facility-8.jpg',
    description:
      'ناوگان اختصاصی حمل گوشت بی‌سان سام مجهز به چیلرهای پیشرفته ترموکینگ و ردیاب‌های GPS با سنسورهای دمای پیوسته، سلامت محموله را از درب بارگیری کارخانه تا هنگام تخلیه در فروشگاه‌ها، هتل‌ها و رستوران‌ها کاملاً گواهی می‌نمایند.',
    features: [
      'مانیتورینگ آنلاین دما در تمام طول مسیر تحویل',
      'اتاق‌های حمل ایزوله بهداشتی با کف ضدزنگ آلومینیومی',
      'تحویل روزانه در سراسر استان یزد و استان‌های همجوار',
      'صدور گواهی حمل قرنطینه‌ای سامانه یکپارچه دامپزشکی',
    ],
    capacity: 'پوشش ناوگان: توزیع مویرگی روزانه بیش از ۲۰ تن گوشت تازه',
  },
  {
    id: 'ranch-quarantine',
    title: 'مزرعه اختصاصی پرواربندی و قرنطینه بهداشتی دام',
    subtitle: 'پرواربندی علمی شترهای بومی یزد و گوساله‌های نژاد سمینتال و هلشتاین',
    badge: 'تغذیه ارگانیک و علمی',
    image: '/images/facilities/livestock-ranch.jpg',
    description:
      'دام‌های ورودی به مجموعه بی‌سان سام، پیش از ورود به چرخه کشتار در مجتمع‌های پرواربندی قرنطینه شده و با جیره غذایی استاندارد و طبیعی زیر نظر متخصصین تغذیه دام و کارشناسان دامپزشکی تغذیه می‌گردند تا گوشتی با بهترین درجه ماربلینگ و عطر حاصل شود.',
    features: [
      'تغذیه طبیعی با یونجه مرغوب و کنسانتره بدون هورمون',
      'واکسیناسیون کامل و صدور پرونده سلامت انفرادی هر رأس دام',
      'پرواربندی تخصصی شترهای اصیل دوکوهانه و تک‌کوهانه کویر یزد',
      'محیط باز و استاندارد آرامش دام منطبق بر اصول Animal Welfare',
    ],
    capacity: 'ظرفیت پذیرش و نگهداری: ۱,۰۰۰ رأس دام سبک و سنگین',
  },
];

export default function FactoryShowcase() {
  const { data } = useCompany();
  
  // Resolve dynamic facilities from backend or fallback to default
  const facilityItems: FacilityItem[] = React.useMemo(() => {
    if (data.facilities && data.facilities.length > 0) {
      return data.facilities.map((f) => ({
        id: f.key_slug,
        title: f.title,
        subtitle: f.subtitle,
        badge: f.badge,
        image: getSafeImageUrl(f.image, '/images/facilities/facility-1.jpg'),
        description: f.description,
        features: f.features_list && f.features_list.length > 0
          ? f.features_list
          : (f.features ? f.features.split('\n').filter(Boolean) : []),
        capacity: f.capacity,
      }));
    }
    return defaultFacilityItems;
  }, [data.facilities]);

  const [activeTab, setActiveTab] = useState<string>(() => facilityItems[0]?.id || 'slaughterhouse');
  const activeFacility = facilityItems.find((item) => item.id === activeTab) || facilityItems[0];

  return (
    <section id="facilities" className="py-20 sm:py-28 bg-[#f5f4f0] border-y border-[#ede7dd] relative overflow-hidden">
      
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c21414]/10 border border-[#c21414]/20 text-[#c21414] text-xs font-bold mb-3">
              <span className="w-2 h-2 rounded-full bg-[#c21414] animate-ping" />
              <span>شهر پروتئین و مجتمع صنایع گوشت بی‌سان سام یزد</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#111216] tracking-tight leading-tight">
              کارخانه، خطوط فرآوری و زنجیره سرد صنعتی
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
              بازدید از سالن‌های کشتار صنعتی، سالن‌های مکانیزه قطعه‌بندی بهداشتی، خطوط بسته‌بندی گاز محافظ و سردخانه‌های آمونیاکی استان یزد
            </p>
          </div>
        </ScrollReveal>

        {/* 
          1. MOBILE VIEW (Accordion with instant in-place photo and details):
          Eliminates mobile confusion completely! User taps a tab and the photo opens right beneath their finger!
        */}
        <div className="block lg:hidden space-y-4">
          {facilityItems.map((item) => {
            const isOpen = item.id === activeTab;
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#c21414] shadow-lg ring-1 ring-[#c21414]/30'
                    : 'bg-white/80 border-gray-200'
                }`}
              >
                {/* Accordion Trigger Header */}
                <button
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className="w-full text-right p-4 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-xs font-black transition-colors ${
                        isOpen ? 'bg-[#c21414] text-white' : 'bg-red-50 text-[#c21414]'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="font-black text-xs sm:text-sm text-[#111216] truncate">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-gray-500 truncate mt-0.5">
                        {item.badge}
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2">
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#c21414] text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                </button>

                {/* In-Place Expanded Content (Photo + Details directly inside the card) */}
                {isOpen && (
                  <div className="p-4 pt-0 space-y-4 border-t border-gray-100 animate-fadeIn">
                    {/* Facility Photo */}
                    <div className="relative h-56 w-full rounded-xl overflow-hidden mt-3 shadow-inner">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 right-3 left-3 text-white">
                        <span className="bg-[#c21414] text-[10px] font-bold px-2.5 py-1 rounded-md">
                          {item.badge}
                        </span>
                        <div className="text-xs font-bold mt-1 text-gray-100">{item.subtitle}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-700 leading-relaxed text-justify">
                      {item.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-1.5 pt-1">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-gray-800 bg-[#fcfbfa] p-2 rounded-lg border border-gray-100">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                            ✓
                          </span>
                          <span className="font-medium text-[11px]">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Capacity pill */}
                    <div className="pt-2 text-[11px] font-bold text-[#c21414] bg-red-50 p-2.5 rounded-xl border border-red-100">
                      {item.capacity}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 
          2. DESKTOP VIEW (Grand 2-Column Split Showcase):
        */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Right Column: List of Facilities */}
          <div className="lg:col-span-5 space-y-3">
            <ScrollReveal direction="right">
              <div className="bg-white rounded-3xl p-4 border border-[#e5dfd5] shadow-xs space-y-2">
                <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-700">واحدهای صنعتی کارخانه:</span>
                  <span className="text-[11px] text-[#c21414] font-bold">انتخاب جهت نمایش</span>
                </div>

                {facilityItems.map((item) => {
                  const isActive = item.id === activeTab;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full text-right p-4 rounded-2xl transition-all duration-300 flex items-start gap-3.5 cursor-pointer group border ${
                        isActive
                          ? 'bg-[#c21414] text-white border-[#c21414] shadow-md shadow-red-950/20 translate-x-1'
                          : 'bg-[#faf8f5] hover:bg-white text-gray-800 border-transparent hover:border-[#ede7dd]'
                      }`}
                    >
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-white text-[#c21414] shadow-2xs group-hover:bg-[#c21414] group-hover:text-white'
                        }`}
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className={`font-black text-xs sm:text-sm leading-snug truncate ${isActive ? 'text-white' : 'text-[#111216]'}`}>
                            {item.title}
                          </h3>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-bold whitespace-nowrap ${
                              isActive ? 'bg-white/20 text-white' : 'bg-red-50 text-[#c21414]'
                            }`}
                          >
                            {item.badge}
                          </span>
                        </div>
                        <p className={`text-[11px] mt-1 leading-tight line-clamp-1 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                          {item.subtitle}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>

          {/* Left Column: Featured Photo Viewer & Details */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl border border-[#e5dfd5] p-6 sm:p-8 shadow-xl space-y-6">
                
                {/* Large Featured Photo */}
                <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-black/5 shadow-inner border border-gray-100 group">
                  <Image
                    src={activeFacility.image}
                    alt={activeFacility.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 700px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 right-4 left-4 flex items-center justify-between">
                    <span className="bg-[#c21414] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl shadow-md flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                      <span>{activeFacility.badge}</span>
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-xl border border-white/20">
                      بی‌سان سام یزد
                    </span>
                  </div>

                  {/* Caption & Specs at bottom of photo */}
                  <div className="absolute bottom-4 right-4 left-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-black">{activeFacility.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-200 mt-1 line-clamp-1">{activeFacility.subtitle}</p>
                  </div>
                </div>

                {/* Facility Detailed Description */}
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal text-justify">
                    {activeFacility.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {activeFacility.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#faf8f5] border border-gray-100 text-xs text-gray-800">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0">
                          ✓
                        </span>
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Capacity Bar & Action Buttons */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div className="text-xs text-gray-600 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#c21414]"></span>
                      <span className="font-bold text-gray-900">{activeFacility.capacity}</span>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-primary-meat text-xs sm:text-sm px-6 py-2.5"
                    >
                      <span>درخواست بازدید حضوری و استعلام</span>
                      <span className="rotate-180">←</span>
                    </Link>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* 4 Bottom Key Facility Metric Badges */}
        <ScrollReveal direction="up" delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#e2dcd2]">
            
            <div className="bg-white p-5 rounded-2xl border border-[#ede7dd] shadow-xs text-center space-y-1 hover:border-[#c21414] transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#c21414] font-mono">
                ۲۰,۰۰۰+
              </div>
              <div className="text-xs font-bold text-gray-900">متر مربع مساحت مجتمع</div>
              <div className="text-[11px] text-gray-500">عرصه و اعیان کارخانجات صنعتی</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#ede7dd] shadow-xs text-center space-y-1 hover:border-[#c21414] transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#c21414] font-mono">
                ۵۰+ تن
              </div>
              <div className="text-xs font-bold text-gray-900">ظرفیت فرآوری روزانه</div>
              <div className="text-[11px] text-gray-500">کشتار، قطعه‌بندی و بسته‌بندی اتمسفر</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#ede7dd] shadow-xs text-center space-y-1 hover:border-[#c21414] transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#c21414] font-mono">
                ۰ تا ۲+ °C
              </div>
              <div className="text-xs font-bold text-gray-900">پایش آنلاین زنجیره سرد</div>
              <div className="text-[11px] text-gray-500">ثبت دیجیتال دما با سنسورهای IoT</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-[#ede7dd] shadow-xs text-center space-y-1 hover:border-[#c21414] transition-colors">
              <div className="text-2xl sm:text-3xl font-black text-[#c21414]">
                رتبه A+
              </div>
              <div className="text-xs font-bold text-gray-900">نظارت مقیم دامپزشکی</div>
              <div className="text-[11px] text-gray-500">پروانه بهداشتی IR-VET-984210</div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
