import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { isAdminEmailAllowed } from "@/lib/admin-access";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request,
  });
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
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );

          response = NextResponse.next({
            request,
          });

          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const path = request.nextUrl.pathname;
  const isAdminRoute = path.startsWith("/admin");
  const isAdminLoginRoute = path === "/admin/login";

  if (isAdminRoute && !isAdminLoginRoute && !user) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/admin/login";
    redirectUrl.searchParams.set("next", path);
    return NextResponse.redirect(redirectUrl);
  }

  if (
    isAdminRoute &&
    !isAdminLoginRoute &&
    user &&
    !isAdminEmailAllowed(user.email)
  ) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/admin/login";
    redirectUrl.search = "";
    redirectUrl.searchParams.set(
      "error_description",
      "허용된 관리자 계정이 아닙니다."
    );
    response = NextResponse.redirect(redirectUrl);
    await supabase.auth.signOut();
    return response;
  }

  if (isAdminLoginRoute && user) {
    if (!isAdminEmailAllowed(user.email)) {
      const redirectUrl = request.nextUrl.clone();
      redirectUrl.searchParams.set(
        "error_description",
        "허용된 관리자 계정이 아닙니다."
      );
      response = NextResponse.redirect(redirectUrl);
      await supabase.auth.signOut();
      return response;
    }
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = "/admin/home";
    redirectUrl.search = "";
    return NextResponse.redirect(redirectUrl);
  }

  return response;
}
