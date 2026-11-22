"use client";

import { createAdminImageUpload } from "@/app/admin/actions";
import type { AdminSectionConfig } from "@/lib/admin-config";

/**
 * 폼에 담긴 이미지 파일을 Storage에 직접 올리고, FormData의 파일 자리를
 * 올라간 경로 문자열로 바꾼다. 서버 액션에는 경로만 넘어가므로 요청 본문이
 * 작고, Vercel 함수의 4.5MB 본문 제한에 걸리지 않는다.
 *
 * supabase-js를 관리자 번들에 넣지 않으려고 서명 URL에 fetch로 바로 PUT 한다.
 */
export async function uploadFormImages(
  section: AdminSectionConfig,
  formData: FormData
) {
  for (const field of section.fields) {
    if (field.type !== "image") {
      continue;
    }

    const value = formData.get(field.name);

    if (!(value instanceof File) || value.size === 0) {
      formData.delete(field.name);
      continue;
    }

    const ticket = await createAdminImageUpload(section.id, field.name, {
      type: value.type,
      size: value.size,
    });

    if (!ticket.ok) {
      throw new Error(ticket.message);
    }

    const response = await fetch(ticket.signedUrl, {
      method: "PUT",
      headers: {
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
        "content-type": value.type,
        "cache-control": "max-age=31536000",
        "x-upsert": "false",
      },
      body: value,
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      throw new Error(
        `${field.label} 업로드 실패 (${response.status})${detail ? `: ${detail}` : ""}`
      );
    }

    formData.set(field.name, ticket.path);
  }
}
