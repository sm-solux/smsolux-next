"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  ADMIN_SECTIONS,
  type AdminFieldConfig,
  type AdminSectionConfig,
} from "@/lib/admin-config";
import { requireAdminDatabase } from "@/lib/admin-db";

class AdminValidationError extends Error {}

function parseDetailList(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [title, ...descriptionParts] = line.split("::");

      return {
        title: title.trim(),
        description: descriptionParts.join("::").trim(),
      };
    })
    .filter((detail) => detail.title);
}

function parseFieldValue(field: AdminFieldConfig, formData: FormData) {
  if (field.type === "checkbox") {
    return formData.get(field.name) === "on";
  }

  const raw = formData.get(field.name)?.toString().trim() ?? "";

  if (!raw) {
    if (field.required) {
      throw new AdminValidationError(`${field.label} 항목을 입력해주세요.`);
    }

    return null;
  }

  switch (field.type) {
    case "number": {
      const value = Number(raw);

      if (!Number.isFinite(value)) {
        throw new AdminValidationError(`${field.label} 항목은 숫자여야 합니다.`);
      }

      return value;
    }
    case "tags":
      return raw
        .split(/[\n,]/)
        .map((item) => item.trim())
        .filter(Boolean);
    case "detail-list":
      return parseDetailList(raw);
    case "datetime-local": {
      const wallClockUtc = `${raw}${raw.length === 16 ? ":00" : ""}Z`;
      const date = new Date(wallClockUtc);

      if (Number.isNaN(date.getTime())) {
        throw new AdminValidationError(`${field.label} 날짜가 올바르지 않습니다.`);
      }

      return date.toISOString();
    }
    default:
      return raw;
  }
}

function getSection(sectionId: string): AdminSectionConfig | null {
  return Object.prototype.hasOwnProperty.call(ADMIN_SECTIONS, sectionId)
    ? ADMIN_SECTIONS[sectionId]
    : null;
}

function getRedirectPath(
  path: string,
  message: string,
  status: "success" | "error"
) {
  const params = new URLSearchParams({ message, status });
  return `${path}?${params.toString()}`;
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.";
}

function revalidateSection(section: AdminSectionConfig) {
  section.revalidatePaths.forEach((path) => revalidatePath(path));
}

export async function saveAdminRecord(formData: FormData) {
  const sectionId = formData.get("sectionId")?.toString() ?? "";
  const section = getSection(sectionId);

  if (!section) {
    redirect(getRedirectPath("/admin/home", "알 수 없는 섹션입니다.", "error"));
  }

  let payload: Record<string, unknown>;

  try {
    payload = Object.fromEntries(
      section.fields.map((field) => [field.name, parseFieldValue(field, formData)])
    );
  } catch (error) {
    redirect(getRedirectPath(section.adminPath, getErrorMessage(error), "error"));
  }

  const primaryKey = section.primaryKey ?? "id";
  const recordId = formData.get(primaryKey)?.toString().trim();

  try {
    const database = await requireAdminDatabase();
    const query = recordId
      ? database
          .from(section.table)
          .update(payload)
          .eq(primaryKey, recordId)
          .select(primaryKey)
      : database.from(section.table).insert(payload).select(primaryKey);
    const { data, error } = await query;

    if (error) {
      throw error;
    }

    if (!data?.length) {
      throw new Error(
        recordId
          ? "수정할 항목을 찾지 못했거나 DB 수정 권한이 없습니다."
          : "저장 결과를 확인하지 못했습니다."
      );
    }
  } catch (error) {
    redirect(
      getRedirectPath(
        section.adminPath,
        `${section.title} 저장 실패: ${getErrorMessage(error)}`,
        "error"
      )
    );
  }

  revalidateSection(section);
  redirect(
    getRedirectPath(section.adminPath, `${section.title} 저장 완료`, "success")
  );
}

export async function deleteAdminRecord(formData: FormData) {
  const sectionId = formData.get("sectionId")?.toString() ?? "";
  const section = getSection(sectionId);

  if (!section) {
    redirect(getRedirectPath("/admin/home", "알 수 없는 섹션입니다.", "error"));
  }

  const primaryKey = section.primaryKey ?? "id";
  const recordId = formData.get(primaryKey)?.toString().trim();

  if (!recordId) {
    redirect(
      getRedirectPath(section.adminPath, "삭제할 항목의 id가 없습니다.", "error")
    );
  }

  try {
    const database = await requireAdminDatabase();
    const { data, error } = await database
      .from(section.table)
      .delete()
      .eq(primaryKey, recordId)
      .select(primaryKey);

    if (error) {
      throw error;
    }

    if (!data?.length) {
      throw new Error("삭제할 항목을 찾지 못했거나 DB 삭제 권한이 없습니다.");
    }
  } catch (error) {
    redirect(
      getRedirectPath(
        section.adminPath,
        `${section.title} 삭제 실패: ${getErrorMessage(error)}`,
        "error"
      )
    );
  }

  revalidateSection(section);
  redirect(
    getRedirectPath(section.adminPath, `${section.title} 삭제 완료`, "success")
  );
}
