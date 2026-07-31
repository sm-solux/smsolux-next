"use server";

import { revalidatePath } from "next/cache";
import { requireAdminDatabase } from "@/lib/admin-db";
import { normalizeActivityRecord } from "@/lib/activity";
import type { Activity } from "@/types/activity";

type ActivityEditorPayload = {
  id?: number;
  title: string;
  description: string;
  details: Activity["details"];
  order: number;
};

type ActivityActionResult = {
  success: boolean;
  message: string;
  activity?: Activity;
};

function revalidateActivityPaths() {
  ["/activity", "/admin", "/admin/activity"].forEach((path) =>
    revalidatePath(path)
  );
}

export async function saveActivityInline(
  payload: ActivityEditorPayload
): Promise<ActivityActionResult> {
  let database;

  try {
    database = await requireAdminDatabase();
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "관리자 권한이 필요합니다.",
    };
  }

  const data = {
    title: payload.title.trim(),
    description: payload.description.trim(),
    details: payload.details?.length ? payload.details : null,
    order: payload.order,
  };

  if (!data.title || !data.description) {
    return {
      success: false,
      message: "제목과 설명은 비워둘 수 없습니다.",
    };
  }

  if (!Number.isFinite(data.order)) {
    return {
      success: false,
      message: "순서는 숫자로 입력해주세요.",
    };
  }

  const query = payload.id !== undefined
    ? database
        .from("activities")
        .update(data)
        .eq("id", payload.id)
        .select("*")
    : database.from("activities").insert(data).select("*");

  const { data: savedActivities, error } = await query;
  const savedActivity = Array.isArray(savedActivities)
    ? savedActivities[0]
    : savedActivities;

  if (error || !savedActivity) {
    return {
      success: false,
      message: error?.message ?? "활동 저장에 실패했습니다.",
    };
  }

  revalidateActivityPaths();

  return {
    success: true,
    message: "활동이 저장되었습니다.",
    activity: normalizeActivityRecord(savedActivity),
  };
}

export async function deleteActivityInline(id: number) {
  let database;

  try {
    database = await requireAdminDatabase();
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "관리자 권한이 필요합니다.",
    };
  }

  const { data, error } = await database
    .from("activities")
    .delete()
    .eq("id", id)
    .select("id");

  if (error || !data?.length) {
    return {
      success: false,
      message:
        error?.message ??
        "삭제할 활동을 찾지 못했거나 DB 삭제 권한이 없습니다.",
    };
  }

  revalidateActivityPaths();

  return {
    success: true,
    message: "활동이 삭제되었습니다.",
  };
}
