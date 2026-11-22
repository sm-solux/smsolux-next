import "server-only";

import { createClient } from "@/lib/supabase-server";
import { getSupabaseAdminClient } from "@/lib/supabase-admin";
import {
  isAdminBypassEnabled,
  isAdminEmailAllowed,
} from "@/lib/admin-access";

export class AdminDatabaseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AdminDatabaseError";
  }
}

export async function getAdminReadClient() {
  return getSupabaseAdminClient() ?? (await createClient());
}

export async function requireAdminDatabase() {
  const sessionClient = await createClient();
  // 미들웨어와 같은 방식으로 JWT를 로컬 검증한다. 인증 서버 왕복이 없어
  // 미들웨어와 서버 액션에서 두 번 확인해도 비용이 거의 들지 않는다.
  const { data, error } = await sessionClient.auth.getClaims();
  const email = data?.claims.email;
  const hasAllowedSession =
    !error && typeof email === "string" && isAdminEmailAllowed(email);

  if (!isAdminBypassEnabled() && !hasAllowedSession) {
    throw new AdminDatabaseError("관리자 로그인이 필요합니다.");
  }

  const serviceRoleClient = getSupabaseAdminClient();

  if (serviceRoleClient) {
    return serviceRoleClient;
  }

  if (hasAllowedSession) {
    return sessionClient;
  }

  throw new AdminDatabaseError(
    "개발 로그인 우회 상태에서 DB를 수정하려면 SUPABASE_SERVICE_ROLE_KEY가 필요합니다."
  );
}
