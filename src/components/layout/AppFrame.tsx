"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { FooterLink } from "@/types/layout";
import { usePathname } from "next/navigation";

interface AppFrameProps {
  children: React.ReactNode;
  footerLinks: FooterLink[];
}

export default function AppFrame({ children, footerLinks }: AppFrameProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer initialLinks={footerLinks} />
    </>
  );
}
