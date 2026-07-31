import "server-only";

import { getAdminReadClient } from "@/lib/admin-db";

export async function fetchTableRecords(
  table: string,
  options?: {
    orderBy?: string;
    ascending?: boolean;
    limit?: number;
  }
) {
  const database = await getAdminReadClient();
  let query = database.from(table).select("*");

  if (options?.orderBy) {
    query = query.order(options.orderBy, {
      ascending: options.ascending ?? true,
    });
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    throw new Error(`${table} 조회 실패: ${error.message}`);
  }

  return data ?? [];
}

export async function fetchTableCount(table: string) {
  const database = await getAdminReadClient();
  const { count, error } = await database
    .from(table)
    .select("*", { count: "exact", head: true });

  if (error) {
    throw new Error(`${table} 개수 조회 실패: ${error.message}`);
  }

  return count ?? 0;
}
