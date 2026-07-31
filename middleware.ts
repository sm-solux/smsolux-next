import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase-middleware";
import { isAdminBypassEnabled } from "@/lib/admin-access";

export async function middleware(request: NextRequest) {
  if (isAdminBypassEnabled() && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  return updateSession(request);
}

export const config = {
  matcher: ["/admin/:path*"],
};
