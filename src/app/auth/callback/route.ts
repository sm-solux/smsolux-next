import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isAdminEmailAllowed } from "@/lib/admin-access";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const requestedNext = requestUrl.searchParams.get("next");
  const next =
    requestedNext?.startsWith("/admin/") && !requestedNext.startsWith("//")
      ? requestedNext
      : "/admin/home";
  const error = requestUrl.searchParams.get("error");
  const errorDescription = requestUrl.searchParams.get("error_description");

  if (error) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("error", error);
    if (errorDescription) {
      loginUrl.searchParams.set("error_description", errorDescription);
    }
    return NextResponse.redirect(loginUrl);
  }

  let response = NextResponse.redirect(new URL(next, request.url));
  type CookieToSet = {
    name: string;
    value: string;
    options?: Parameters<typeof response.cookies.set>[2];
  };

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  if (code) {
    const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
    if (exchangeError) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("error", exchangeError.name);
      loginUrl.searchParams.set("error_description", exchangeError.message);
      return NextResponse.redirect(loginUrl);
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!isAdminEmailAllowed(user?.email)) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set(
        "error_description",
        "허용된 관리자 계정이 아닙니다."
      );
      response = NextResponse.redirect(loginUrl);
      await supabase.auth.signOut();
      return response;
    }
  }

  return response;
}
