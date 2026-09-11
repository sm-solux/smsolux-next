"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

interface AppFrameProps {
  children: React.ReactNode;
  settings?: Record<string, string>;
}

export default function AppFrame({ children, settings }: AppFrameProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer settings={settings} />
    </>
  );
}
