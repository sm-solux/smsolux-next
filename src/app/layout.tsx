import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "SOLUX - 숙명여자대학교 개발 동아리",
  description: "숙명여자대학교 유일 중앙 프로그래밍 동아리 SOLUX입니다.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "SOLUX - 숙명여자대학교 개발 동아리",
    description: "숙명여자대학교 유일 중앙 프로그래밍 동아리 SOLUX입니다.",
    siteName: "SOLUX",
    images: [
      {
        url: "/thumbnail.png",
        width: 1898,
        height: 866,
        alt: "Page Thumbnail",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

import { supabase } from "@/lib/supabase";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: footerLinks } = await supabase
    .from('footer_links')
    .select('*')
    .order('order_index', { ascending: true });

  return (
    <html lang="ko">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer initialLinks={footerLinks || []} />
      </body>
    </html>
  );
}
