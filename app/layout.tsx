import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StructuredData from "./schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Nguyễn Phạm Sang Giàu | Data-Driven Analyst & Quantitative Finance",
    template: "%s | Nguyễn Phạm Sang Giàu",
  },
  description:
    "Data-Driven Analyst specializing in Quantitative Finance, Algorithmic Trading, and Supply Chain Management. Expert in Python, SQL, Machine Learning, and Financial Risk Management with proven track record in funded trading accounts and academic competitions.",
  keywords: [
    "Data Analyst",
    "Quantitative Finance",
    "Algorithmic Trading",
    "Supply Chain Management",
    "Python",
    "SQL",
    "Machine Learning",
    "Financial Analysis",
    "Risk Management",
    "MetaTrader 5",
    "Pine Script",
    "MQL5",
    "Data Science",
    "Trading Systems",
    "Financial Modeling",
    "Econometrics",
    "Business Intelligence",
    "Power BI",
    "Excel",
    "Vietnam",
    "FTU",
  ],
  authors: [{ name: "Nguyễn Phạm Sang Giàu" }],
  creator: "Nguyễn Phạm Sang Giàu",
  publisher: "Nguyễn Phạm Sang Giàu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://NguyenPhamSangGIau.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://NguyenPhamSangGIau.vercel.app",
    title: "Nguyễn Phạm Sang Giàu | Data-Driven Analyst",
    description:
      "Expert in Quantitative Finance, Algorithmic Trading, and Supply Chain Management with proven track record in funded trading accounts.",
    siteName: "Sang Giàu Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nguyễn Phạm Sang Giàu - Data-Driven Analyst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Phạm Sang Giàu | Data-Driven Analyst",
    description:
      "Expert in Quantitative Finance, Algorithmic Trading, and Supply Chain Management.",
    images: ["/og-image.png"],
    creator: "@sanggiau",
  },
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00a8a8" />
        <StructuredData />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
