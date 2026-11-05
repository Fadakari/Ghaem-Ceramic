import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { CompanyProvider } from "@/context/CompanyContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#111216",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bisansam.ir"),
  title: {
    default: "شرکت بی‌سان سام یزد | فرآورده‌های دامی، گوشت قرمز و سفید تازه و منجمد",
    template: "%s | بی‌سان سام یزد",
  },
  description:
    "مجتمع تخصصی کشتار صنعتی، قطعه‌بندی و بسته‌بندی گوشت گرم و منجمد گوساله، گوسفند، شتر و طیور با نظارت مقیم اداره کل دامپزشکی، بسته‌بندی نوین در اتمسفر اصلاح‌شده (MAP) و پایش مستمر زنجیره سرمایش در یزد.",
  keywords: [
    "شرکت بی سان سام یزد",
    "بی سان سام",
    "گوشت بی سان سام یزد",
    "کشتارگاه صنعتی یزد",
    "بسته بندی گوشت MAP",
    "گوشت شتر یزد",
    "گوشت گوساله ممتاز",
    "گوشت گوسفندی بره",
    "تامین گوشت هورکا",
    "تامین گوشت رستوران",
    "زنجیره سرد گوشت",
    "نظارت دامپزشکی یزد",
    "فروش عمده گوشت یزد",
    "Bisan Sam Yazd",
    "Yazd Meat Industry"
  ],
  authors: [{ name: "شرکت بی‌سان سام یزد", url: "https://bisansam.ir" }],
  creator: "شرکت بی‌سان سام یزد",
  publisher: "بی‌سان سام یزد",
  applicationName: "بی‌سان سام یزد",
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
    title: "شرکت بی‌سان سام یزد | فرآورده‌های دامی و گوشت مرغوب و استاندارد",
    description: "تولید، کشتار بهداشتی، بسته‌بندی تحت گاز محافظ MAP و توزیع گوشت تازه و منجمد در سراسر کشور با نظارت دائم دامپزشکی.",
    url: "https://bisansam.ir",
    siteName: "بی‌سان سام یزد",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "شرکت بی‌سان سام یزد | گوشت تازه و فرآورده‌های دامی",
    description: "کشتار صنعتی بهداشتی و توزیع گوشت گرم و منجمد تحت نظارت سازمان دامپزشکی در استان یزد و سراسر کشور.",
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
        "@type": "Organization",
        "@id": "https://bisansam.ir/#organization",
        name: "شرکت بی‌سان سام یزد",
        alternateName: "Bisan Sam Yazd Meat Processing",
        url: "https://bisansam.ir",
        logo: "https://bisansam.ir/images/brand/logo-full.png",
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+98-35-38200000",
            contactType: "customer service",
            areaServed: "IR",
            availableLanguage: ["Persian"]
          },
          {
            "@type": "ContactPoint",
            telephone: "+98-35-38200001",
            contactType: "sales",
            areaServed: "IR",
            availableLanguage: ["Persian"]
          }
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "شهرک صنعتی یزد، بلوار کارگر، خیابان صنایع غذایی",
          addressLocality: "یزد",
          addressRegion: "استان یزد",
          addressCountry: "IR"
        },
        description: "مجتمع تخصصی کشتار صنعتی، قطعه‌بندی بهداشتی، بسته‌بندی تحت اتمسفر اصلاح‌شده MAP و توزیع گوشت گرم و منجمد گوساله، گوسفندی، شتر و ماکیان با پایش پیوسته زنجیره سرمایش.",
        areaServed: "IR",
        knowsAbout: [
          "تولید و بسته‌بندی گوشت قرمز",
          "گوشت شتر کویری یزد",
          "بسته‌بندی MAP تحت گاز محافظ",
          "تأمین گوشت هتل‌ها و رستوران‌ها (HoReCa)",
          "زنجیره سرمایش صفر تا ۴ درجه"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://bisansam.ir/#website",
        url: "https://bisansam.ir",
        name: "شرکت بی‌سان سام یزد",
        publisher: { "@id": "https://bisansam.ir/#organization" },
        inLanguage: "fa-IR"
      }
    ]
  };

  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} antialiased selection:bg-rose-900 selection:text-white`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#faf8f5] text-[#1f2937] font-sans flex flex-col antialiased">
        <CompanyProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </CompanyProvider>
      </body>
    </html>
  );
}
