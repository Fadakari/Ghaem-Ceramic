import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { CompanyProvider } from "@/context/CompanyContext";

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
  metadataBase: new URL("https://pssgh.ir"),
  title: {
    default: "شرکت سرامیک صنعت قائم | سرامیک‌های ضد سایش آلومینا و جایگزین هاردوکس",
    template: "%s | سرامیک صنعت قائم",
  },
  description:
    "تولیدکننده تخصصی قطعات و سرامیک‌های ضد سایش آلومینایی با خلوص بالای ۹۹٪ و سختی ۹ موهس. جایگزین مطمئن هاردوکس با بیش از ۴ برابر طول عمر بیشتر جهت شوت‌ها، هاپرها و لوله‌های صنایع فولاد، مس و سیمان.",
  keywords: [
    "سرامیک ضد سایش",
    "سرامیک آلومینا",
    "جایگزین هاردوکس",
    "پوشش ضد سایش شوت",
    "لاینر سرامیکی",
    "موزاییک سرامیکی شش ضلعی",
    "سرامیک صنعت قائم",
    "هاردوکس ۵۰۰",
    "ضد سایش صنعتی",
    "پوشش لوله انتقال اسلاری",
    "تایل آلومینایی",
    "Ghaem Ceramic Industry",
    "Wear resistant alumina ceramic",
    "Alumina ceramic liner"
  ],
  authors: [{ name: "شرکت سرامیک صنعت قائم", url: "https://pssgh.ir" }],
  creator: "شرکت سرامیک صنعت قائم",
  publisher: "سرامیک صنعت قائم",
  applicationName: "سرامیک صنعت قائم",
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
    title: "شرکت سرامیک صنعت قائم | پوشش‌های سرامیکی ضد سایش آلومینایی",
    description: "بومی‌سازی قطعات پیشرفته سرامیکی ضد سایش با استانداردهای ASTM و ISO؛ پایان استهلاک و توقف خطوط تولید صنایع سنگین.",
    url: "https://pssgh.ir",
    siteName: "سرامیک صنعت قائم",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شرکت سرامیک صنعت قائم | سرامیک ضد سایش آلومینا",
    description: "تولیدکننده تخصصی قطعات سرامیک ضد سایش جایگزین هاردوکس در صنایع فولاد، سیمان و معادن.",
  },
  alternates: {
    canonical: "https://pssgh.ir",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://pssgh.ir/#organization",
        name: "شرکت سرامیک صنعت قائم",
        alternateName: "Ghaem Ceramic Industry",
        url: "https://pssgh.ir",
        logo: "https://pssgh.ir/logo.png",
        telephone: "+983537301340",
        faxNumber: "+983537301320",
        email: "sales.csgh@gmail.com",
        foundingDate: "2011",
        founder: {
          "@type": "Person",
          name: "مهندس زارع"
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "بلوار پاسداران، مجتمع مهران، طبقه ۳، واحد D31",
          addressLocality: "یزد",
          addressRegion: "استان یزد",
          addressCountry: "IR"
        },
        description: "واحد تخصصی مشاوره، طراحی، تأمین و نصب سرامیک‌های ضد سایش آلومینایی با سختی ۹ موهس در صنایع فولاد، سیمان، مس و پتروشیمی."
      },
      {
        "@type": "WebSite",
        "@id": "https://pssgh.ir/#website",
        url: "https://pssgh.ir",
        name: "شرکت سرامیک صنعت قائم",
        publisher: { "@id": "https://pssgh.ir/#organization" },
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
        <CompanyProvider>
          {children}
        </CompanyProvider>
      </body>
    </html>
  );
}
