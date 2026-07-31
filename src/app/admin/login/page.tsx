"use client";

import { createClient } from "@/lib/supabase-browser";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const searchParams = useSearchParams();
  const errorDescription = searchParams.get("error_description");
  const isBypassed = process.env.NODE_ENV !== "production";

  const handleGoogleSignIn = async () => {
    const supabase = createClient();
    const redirectTo = `${window.location.origin}/auth/callback`;

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo,
      },
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <section className="mx-auto max-w-md rounded-2xl bg-white/[0.035] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:p-8">
        <p className="mb-3 text-xs font-bold tracking-[0.24em] text-primary">
          SOLUX ADMIN
        </p>
        <h1 className="mb-3 text-2xl font-black tracking-tight text-white">
          관리자 로그인
        </h1>
        <p className="mb-8 text-sm leading-6 text-gray-400">
          {isBypassed
            ? "개발 환경에서는 로그인 없이 관리자 화면을 확인할 수 있습니다."
            : "지정된 Google 계정으로만 관리자 화면에 접근할 수 있습니다."}
        </p>

        {isBypassed ? (
          <Link
            href="/admin/home"
            className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-[#071013] transition-colors hover:bg-primary/90"
          >
            로그인 없이 계속하기
          </Link>
        ) : (
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-bold text-[#111315] transition-colors hover:bg-gray-100"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Sign in with Google
          </button>
        )}
        {errorDescription && (
          <p className="mt-4 break-words rounded-xl bg-red-500/10 px-4 py-3 text-xs leading-5 text-red-200">
            {errorDescription}
          </p>
        )}
      </section>
    </main>
  );
}
