"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ExternalLink,
  Database,
  FilePenLine,
  Home,
  GalleryVerticalEnd,
  FolderKanban,
  Megaphone,
  Link2,
} from "lucide-react";
import { ADMIN_NAV_ITEMS } from "@/lib/admin-config";
import { signOutAdmin } from "@/app/admin/auth-actions";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";

interface AdminShellProps {
  children: React.ReactNode;
  isBypassed: boolean;
  hasServiceRoleKey: boolean;
}

export default function AdminShell({
  children,
  isBypassed,
  hasServiceRoleKey,
}: AdminShellProps) {
  const pathname = usePathname();
  const navIcons = {
    "/admin/home": Home,
    "/admin/activity": GalleryVerticalEnd,
    "/admin/projects": FolderKanban,
    "/admin/recruit": Megaphone,
    "/admin/links": Link2,
  } as const;

  const currentItem =
    ADMIN_NAV_ITEMS.find((item) =>
      pathname === item.href || pathname.startsWith(`${item.href}/`)
    ) ?? ADMIN_NAV_ITEMS[0];

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  return (
    <div className="h-[100dvh] overflow-hidden bg-stone-100 text-slate-900">
      <div className="grid h-full overflow-hidden bg-stone-100 md:grid-cols-[248px_minmax(0,1fr)] xl:grid-cols-[272px_minmax(0,1fr)]">
          <aside className="hidden h-full border-r border-stone-200 bg-stone-50 text-slate-900 md:flex md:flex-col">
            <div className="border-b border-stone-200 bg-stone-50 px-6 py-6">
              <Link href="/admin/home" className="inline-flex items-center">
                <Image
                  src="/logo.png"
                  alt="SOLUX"
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>
              <p className="mt-4 text-sm font-semibold tracking-[-0.01em] text-slate-600">
                Admin
              </p>
            </div>

            <div className="flex-1 px-4 py-5">
              <div className="mb-5 rounded-lg border border-stone-200 bg-white px-4 py-3">
                <div className="inline-flex items-center gap-2 text-[12px] font-medium text-slate-600">
                  <Database className="h-4 w-4 text-slate-500" />
                  {isBypassed ? "Local mode" : "Google auth"}
                </div>
              </div>

              <nav className="space-y-1">
                {ADMIN_NAV_ITEMS.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
                  const Icon =
                    navIcons[item.href as keyof typeof navIcons] ?? FilePenLine;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition-colors ${
                        isActive
                          ? "bg-slate-900 text-white shadow-sm"
                          : "text-slate-600 hover:bg-white hover:text-slate-950"
                      }`}
                    >
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-md ${
                          isActive
                            ? "bg-white/10 text-white"
                            : "bg-stone-100 text-slate-500"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-[10px] uppercase tracking-[0.18em] ${
                            isActive ? "text-slate-300" : "text-slate-400"
                          }`}
                        >
                          {item.eyebrow}
                        </p>
                        <p className="mt-0.5 font-semibold">{item.label}</p>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="space-y-2 border-t border-stone-200 p-4">
              <Link
                href="/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950"
              >
                <ExternalLink className="h-4 w-4" />
                사이트 보기
              </Link>
              {!isBypassed && (
                <form action={signOutAdmin}>
                  <AdminLogoutButton />
                </form>
              )}
            </div>
          </aside>

          <main className="flex h-full min-h-0 flex-col overflow-hidden">
            <div className="min-h-0 flex-1 overflow-y-auto bg-stone-100 p-5 md:p-6">
              <section className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm md:p-8">
                <div className="mb-8 border-b border-stone-200 pb-6">
                  <div className="md:hidden">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <Link href="/admin/home" className="inline-flex items-center">
                        <Image
                          src="/logo.png"
                          alt="SOLUX"
                          width={120}
                          height={32}
                          className="h-8 w-auto object-contain"
                          priority
                        />
                      </Link>
                      {!isBypassed && (
                        <form action={signOutAdmin}>
                          <AdminLogoutButton compact />
                        </form>
                      )}
                    </div>
                    <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
                      {ADMIN_NAV_ITEMS.map((item) => {
                        const isActive =
                          pathname === item.href ||
                          pathname.startsWith(`${item.href}/`);
                        const Icon =
                          navIcons[item.href as keyof typeof navIcons] ??
                          FilePenLine;

                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold whitespace-nowrap ${
                              isActive
                                ? "border-slate-900 bg-slate-900 text-white"
                                : "border-stone-200 bg-white text-slate-600"
                            }`}
                          >
                            <Icon className="h-3.5 w-3.5" />
                            {item.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                        {currentItem.eyebrow}
                      </p>
                      <h1 className="mt-1 text-[28px] font-semibold tracking-[-0.03em] text-slate-950 md:text-[32px]">
                        {currentItem.label}
                      </h1>
                    </div>

                  </div>
                </div>
                {isBypassed && !hasServiceRoleKey && (
                  <div
                    role="alert"
                    className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-900"
                  >
                    로그인 우회 상태에서는 데이터 조회만 가능합니다. 저장·삭제를
                    사용하려면 서버 환경 변수에 <code>SUPABASE_SERVICE_ROLE_KEY</code>를
                    설정해주세요.
                  </div>
                )}
                {children}
              </section>
            </div>
          </main>
      </div>
    </div>
  );
}
