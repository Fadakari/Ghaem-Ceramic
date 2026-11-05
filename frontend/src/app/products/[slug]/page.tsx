import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductBySlug, getCompanyBundle } from '@/lib/api';
import { getSafeImageUrl } from '@/lib/imageHelper';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const bundle = await getCompanyBundle();
  const products = bundle.products?.length > 0 ? bundle.products : bundle.featured_products;
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: 'محصول یافت نشد | شرکت بی‌سان سام یزد',
    };
  }

  const title = `${product.name} | شرکت بی‌سان سام یزد`;
  const desc = `${product.name} با برش استاندارد ${product.cut_type}، بسته‌بندی ${product.packaging_type_display || 'بهداشتی'} و نظارت مقیم سازمان دامپزشکی کشور.`;

  return {
    title,
    description: desc,
    keywords: [
      product.name,
      product.cut_type,
      product.animal_type_display || 'گوشت',
      'خرید عمده گوشت',
      'گوشت یزد',
      'بی‌سان سام یزد',
    ],
    openGraph: {
      title,
      description: desc,
      type: 'website',
      url: `https://bisansam.ir/products/${product.slug}`,
      images: [
        {
          url: getSafeImageUrl(product.image),
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
    alternates: {
      canonical: `https://bisansam.ir/products/${product.slug}`,
    },
  };
}

export default async function SingleProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  const bundle = await getCompanyBundle();
  const settings = bundle.settings;

  if (!product) {
    notFound();
  }

  const allProducts = bundle.products?.length > 0 ? bundle.products : bundle.featured_products;
  const relatedProducts = allProducts
    .filter((p) => p.slug !== product.slug && (p.animal_type === product.animal_type || p.category === product.category))
    .slice(0, 3);

  const imageSrc = getSafeImageUrl(product.image);

  // Schema.org Product JSON-LD for Search Engines
  const productJsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.name,
    image: [imageSrc],
    description: product.description,
    sku: `BSS-${product.id}`,
    brand: {
      '@type': 'Brand',
      name: 'شرکت بی‌سان سام یزد',
    },
    offers: {
      '@type': 'Offer',
      url: `https://bisansam.ir/products/${product.slug}`,
      priceCurrency: 'IRR',
      price: '0',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceType: 'https://schema.org/WholesalePrice',
      },
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'شرکت بی‌سان سام یزد',
      },
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'نوع قطعه',
        value: product.cut_type,
      },
      {
        '@type': 'PropertyValue',
        name: 'نوع دام',
        value: product.animal_type_display || product.animal_type,
      },
      {
        '@type': 'PropertyValue',
        name: 'وضعیت برودتی',
        value: product.temperature_state_display || product.temperature_state,
      },
      {
        '@type': 'PropertyValue',
        name: 'میزان پروتئین در ۱۰۰ گرم',
        value: product.protein_per_100g,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1f2937]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <section className="bg-[#111216] text-white py-6 border-b border-[#252733]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition">صفحه اصلی</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition">کاتالوگ محصولات</Link>
            <span>/</span>
            <span className="text-rose-400 font-bold truncate">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Main Product Showcase */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: High-Res Interactive Visual */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-80 sm:h-[450px] w-full rounded-3xl overflow-hidden bg-[#16171d] border-2 border-[#2b2d39] shadow-2xl">
                <Image
                  src={imageSrc}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover object-center"
                />

                {/* Floating Top Badges */}
                <div className="absolute top-4 right-4 flex flex-wrap gap-2">
                  <span className="badge-fresh shadow-md text-xs font-bold px-3 py-1">
                    {product.animal_type_display || product.animal_type}
                  </span>
                  {product.temperature_state === 'chilled' ? (
                    <span className="badge-cold shadow-md text-xs font-bold px-3 py-1">
                      گرم تازه (۰ تا ۲ درجه)
                    </span>
                  ) : (
                    <span className="badge-cold shadow-md text-xs font-bold px-3 py-1">
                      منجمد IQF (-۱۸ درجه)
                    </span>
                  )}
                </div>

                <div className="absolute top-4 left-4">
                  <span className="stamp-seal bg-white/95 text-xs font-bold px-3 py-1 shadow-md">
                    {product.packaging_type_display || 'بسته‌بندی بهداشتی'}
                  </span>
                </div>

                {/* Bottom Assurance Bar */}
                <div className="absolute bottom-4 right-4 left-4 p-3.5 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-white text-xs">
                  <div>
                    <span className="text-gray-400 block text-[10px]">نظارت بهداشتی مقیم</span>
                    <span className="font-bold text-emerald-400">سازمان دامپزشکی کل کشور</span>
                  </div>
                  <div className="text-left">
                    <span className="text-gray-400 block text-[10px]">کد پروانه</span>
                    <span className="font-bold text-rose-300 font-mono">{settings.veterinary_code}</span>
                  </div>
                </div>
              </div>

              {/* Quality Assurances */}
              <div className="grid grid-cols-3 gap-3 text-center text-xs">
                <div className="bg-white p-3 rounded-xl border border-[#e5dfd5]">
                  <span className="text-gray-500 block text-[10px] mb-0.5">کنترل شرعی</span>
                  <span className="font-bold text-emerald-700">ذبح ۱۰۰٪ حلال</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#e5dfd5]">
                  <span className="text-gray-500 block text-[10px] mb-0.5">پایش دما</span>
                  <span className="font-bold text-sky-700">زنجیره سرمایش پیوسته</span>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#e5dfd5]">
                  <span className="text-gray-500 block text-[10px] mb-0.5">ماندگاری سالم</span>
                  <span className="font-bold text-rose-800">بدون مواد نگهدارنده</span>
                </div>
              </div>
            </div>

            {/* Right Column: Details, Nutritional Facts, and Actions */}
            <div className="lg:col-span-6 space-y-6 text-right">
              
              <div>
                <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider block mb-1">
                  {product.cut_type} • درجه کیفی صادراتی
                </span>
                <h1 className="text-2xl sm:text-4xl font-black text-[#111216] leading-tight">
                  {product.name}
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  عرضه به صورت تناژ، لاشه کامل، شقه، کارتن‌های شرینک و بسته‌بندی در اتمسفر اصلاح‌شده (MAP).
                </p>
              </div>

              {/* Description */}
              <div className="bg-white p-5 rounded-2xl border border-[#e5dfd5] space-y-2">
                <h3 className="text-xs font-bold text-gray-400">توضیحات و ویژگی‌های بافت:</h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quality Indicators: Marbling & Tenderness */}
              <div className="bg-[#faf7f2] p-5 rounded-2xl border border-[#e8ded0] grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-gray-600 font-bold mb-1.5">درجه ماربلینگ (چربی بین‌بافتی):</div>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className={`w-4 h-4 rounded-full ${
                          s <= product.marbling_score ? 'bg-[#9f1239]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-[#9f1239] mr-2">
                      {product.marbling_score} از ۵
                    </span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-600 font-bold mb-1.5">لطافت و تردی بافت عضلانی:</div>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className={`w-4 h-4 rounded-full ${
                          s <= product.tenderness_rating ? 'bg-emerald-600' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-xs font-bold text-emerald-700 mr-2">
                      {product.tenderness_rating} از ۵
                    </span>
                  </div>
                </div>
              </div>

              {/* Nutritional Facts Grid */}
              <div className="bg-white p-5 rounded-2xl border border-[#e5dfd5] space-y-3">
                <h3 className="text-xs font-bold text-gray-900">آنالیز ارزش غذایی در هر ۱۰۰ گرم:</h3>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-rose-50 border border-rose-200 p-3 rounded-xl">
                    <span className="text-xs text-rose-800 font-bold block">پروتئین خالص</span>
                    <span className="text-lg font-black text-rose-950 font-mono mt-0.5 block">
                      {product.protein_per_100g}
                    </span>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl">
                    <span className="text-xs text-amber-800 font-bold block">چربی بافت</span>
                    <span className="text-lg font-black text-amber-950 font-mono mt-0.5 block">
                      {product.fat_per_100g}
                    </span>
                  </div>
                  <div className="bg-sky-50 border border-sky-200 p-3 rounded-xl">
                    <span className="text-xs text-sky-800 font-bold block">انرژی کل</span>
                    <span className="text-lg font-black text-sky-950 font-mono mt-0.5 block">
                      {product.calories_per_100g}
                    </span>
                  </div>
                </div>
              </div>

              {/* Chef Cooking Guide */}
              {product.cooking_guide && (
                <div className="bg-[#fbf7f0] border-r-4 border-[#9f1239] p-5 rounded-xl space-y-1">
                  <h4 className="text-xs font-bold text-[#881337] flex items-center gap-1.5">
                    <span>توصیه و دستور پخت سرآشپز:</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {product.cooking_guide}
                  </p>
                </div>
              )}

              {/* Specs & Storage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700">
                <div className="bg-white p-3.5 rounded-xl border border-[#e5dfd5]">
                  <span className="font-bold text-gray-900 block mb-0.5">کاربرد پیشنهادی:</span>
                  <span>{product.suitable_for}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5dfd5]">
                  <span className="font-bold text-gray-900 block mb-0.5">اوزان قابل عرضه:</span>
                  <span>{product.weight_options}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5dfd5]">
                  <span className="font-bold text-gray-900 block mb-0.5">ماندگاری بهداشتی:</span>
                  <span>{product.shelf_life}</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5dfd5]">
                  <span className="font-bold text-gray-900 block mb-0.5">شرایط انبارش:</span>
                  <span>{product.storage_instructions}</span>
                </div>
              </div>

              {/* Call to Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href={`/contact?subject=${encodeURIComponent(product.name)}`}
                  className="btn-primary-meat flex-1 py-3.5 text-sm sm:text-base font-bold shadow-lg text-center"
                >
                  استعلام قیمت و ثبت سفارش عمده برای این محصول
                </Link>

                <a
                  href={`tel:${settings.phone_sales.replace(/[^0-9]/g, '')}`}
                  className="btn-secondary-dark py-3.5 px-6 text-sm font-bold text-center"
                >
                  تماس مستقیم با فروش
                </a>
              </div>

            </div>

          </div>

          {/* Related Products Carousel/Grid */}
          {relatedProducts.length > 0 && (
            <div className="mt-16 sm:mt-24 pt-12 border-t border-[#e5dfd5]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-bold text-[#9f1239] uppercase tracking-wider">
                    محصولات مرتبط
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#111216] mt-0.5">
                    سایر برش‌های پیشنهادی
                  </h3>
                </div>
                <Link
                  href="/products"
                  className="text-xs sm:text-sm font-bold text-[#9f1239] hover:underline"
                >
                  مشاهده همه محصولات ←
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedProducts.map((rel) => {
                  const relImg = getSafeImageUrl(rel.image);
                  return (
                    <Link
                      key={rel.id}
                      href={`/products/${rel.slug}`}
                      className="card-craft flex flex-col justify-between overflow-hidden group bg-white border border-[#e5dfd5] rounded-2xl"
                    >
                      <div className="relative h-48 w-full bg-[#1b1c23] overflow-hidden">
                        <Image
                          src={relImg}
                          alt={rel.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2">
                          <span className="badge-fresh text-[10px]">
                            {rel.animal_type_display}
                          </span>
                        </div>
                      </div>
                      <div className="p-4 space-y-1">
                        <div className="text-[11px] text-gray-500">{rel.cut_type}</div>
                        <h4 className="text-sm font-bold text-[#111216] group-hover:text-[#9f1239] transition-colors truncate">
                          {rel.name}
                        </h4>
                        <div className="text-xs font-bold text-[#9f1239] pt-2 flex items-center gap-1">
                          <span>مشاهده مشخصات و آنالیز</span>
                          <span className="rotate-180">←</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
