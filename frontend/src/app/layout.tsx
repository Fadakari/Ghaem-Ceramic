import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { CompanyProvider } from "@/context/CompanyContext";
import { getCompanyBundle } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ea580c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://behbodceramic.ir"),
  title: {
    default: "شرکت بهبود سرامیک | سرامیک‌های ضد سایش آلومینا و جایگزین هاردوکس",
    template: "%s | شرکت بهبود سرامیک",
  },
  description:
    "تولیدکننده تخصصی قطعات و سرامیک‌های ضد سایش آلومینایی با خلوص بالای ۹۹٪ و سختی ۹ موهس. جایگزین مطمئن هاردوکس با بیش از ۴ برابر طول عمر بیشتر جهت شوت‌ها، هاپرها و لوله‌های صنایع فولاد، مس و سیمان.",
  keywords: [
    "سرامیک ضد سایش",
    "سرامیک آلومینا",
    "بهبود سرامیک",
    "شرکت بهبود سرامیک",
    "جایگزین هاردوکس",
    "پوشش ضد سایش شوت",
    "لاینر سرامیکی",
    "موزاییک سرامیکی شش ضلعی",
    "سرامیک صنعت قائم",
    "هاردوکس ۵۰۰",
    "ضد سایش صنعتی",
    "پوشش لوله انتقال اسلاری",
    "تایل آلومینایی",
    "Behbod Ceramic Industry",
    "Ghaem Ceramic Industry",
    "Wear resistant alumina ceramic",
    "Alumina ceramic liner"
  ],
  authors: [{ name: "شرکت بهبود سرامیک", url: "https://behbodceramic.ir" }],
  creator: "شرکت بهبود سرامیک",
  publisher: "شرکت بهبود سرامیک",
  applicationName: "شرکت بهبود سرامیک",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "شرکت بهبود سرامیک | پوشش‌های سرامیکی ضد سایش آلومینایی",
    description: "بومی‌سازی قطعات پیشرفته سرامیکی ضد سایش با استانداردهای ASTM و ISO؛ پایان استهلاک و توقف خطوط تولید صنایع سنگین.",
    url: "https://behbodceramic.ir",
    siteName: "شرکت بهبود سرامیک",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شرکت بهبود سرامیک | سرامیک ضد سایش آلومینا",
    description: "تولیدکننده تخصصی قطعات سرامیک ضد سایش جایگزین هاردوکس در صنایع فولاد، سیمان و معادن.",
  },
  alternates: {
    canonical: "https://behbodceramic.ir",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bundle = await getCompanyBundle();
  const companyName = bundle.settings?.company_name_fa || "شرکت بهبود سرامیک";
  const companyNameEn = bundle.settings?.company_name_en || "Behbod Ceramic Industry";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://behbodceramic.ir/#organization",
        name: companyName,
        alternateName: companyNameEn,
        url: "https://behbodceramic.ir",
        logo: "https://behbodceramic.ir/images/brand/logo.svg",
        telephone: bundle.settings?.phone || "+983537301340",
        faxNumber: bundle.settings?.fax || "+983537301320",
        email: bundle.settings?.email || "sales.csgh@gmail.com",
        foundingDate: "2011",
        address: {
          "@type": "PostalAddress",
          streetAddress: bundle.settings?.address || "بلوار پاسداران، مجتمع مهران، طبقه ۳، واحد D31",
          addressLocality: "یزد",
          addressRegion: "استان یزد",
          addressCountry: "IR"
        },
        description: bundle.settings?.tagline || "واحد تخصصی مشاوره، طراحی، تأمین و نصب سرامیک‌های ضد سایش آلومینایی با سختی ۹ موهس در صنایع فولاد، سیمان، مس و پتروشیمی."
      },
      {
        "@type": "WebSite",
        "@id": "https://behbodceramic.ir/#website",
        url: "https://behbodceramic.ir",
        name: companyName,
        publisher: { "@id": "https://behbodceramic.ir/#organization" },
        inLanguage: "fa-IR"
      }
    ]
  };

  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} antialiased selection:bg-orange-600 selection:text-white`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-800 font-sans flex flex-col antialiased">
        <CompanyProvider initialBundle={bundle}>
          {children}
        </CompanyProvider>
      </body>
    </html>
  );
}
