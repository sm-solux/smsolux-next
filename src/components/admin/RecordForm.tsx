"use client";

// 관리자 수정 폼. 클라이언트 컴포넌트로 둔 이유: 목록의 항목마다 수정 모달이
// 붙는데, 서버 컴포넌트로 그리면 닫힌 모달의 폼 마크업까지 전부 RSC payload에
// 실려 페이지가 수 MB로 커진다. 여기서는 레코드 데이터만 받고 폼은 모달을 열
// 때 브라우저에서 그린다.

import { deleteAdminRecord, saveAdminRecord } from "@/app/admin/actions";
import type { AdminFieldConfig, AdminSectionConfig } from "@/lib/admin-config";
import { PencilLine, Plus } from "lucide-react";
import AdminDeleteButton from "@/components/admin/AdminDeleteButton";
import { getRecordHeadline } from "@/lib/admin-record";
import { uploadFormImages } from "@/lib/admin-upload";
import { useRouter } from "next/navigation";

function formatDateTimeLocal(value: unknown) {
  if (typeof value !== "string" || !value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value.slice(0, 16);
  }

  return date.toISOString().slice(0, 16);
}

function formatFieldValue(field: AdminFieldConfig, value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }

  switch (field.type) {
    case "tags":
      return Array.isArray(value) ? value.join(", ") : "";
    case "detail-list":
      return Array.isArray(value)
        ? value
            .map((detail) => {
              if (!detail || typeof detail !== "object") {
                return "";
              }

              const title =
                "title" in detail && typeof detail.title === "string"
                  ? detail.title
                  : "";
              const description =
                "description" in detail && typeof detail.description === "string"
                  ? detail.description
                  : "";

              return [title, description].filter(Boolean).join(" :: ");
            })
            .filter(Boolean)
            .join("\n")
        : "";
    case "datetime-local":
      return formatDateTimeLocal(value);
    default:
      return typeof value === "string" || typeof value === "number"
        ? String(value)
        : "";
  }
}

function FieldInput({
  field,
  value,
  previewUrl,
}: {
  field: AdminFieldConfig;
  value: unknown;
  previewUrl?: string;
}) {
  const baseClassName =
    "mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/20 focus:border-[#8CE0F4]/60 focus:bg-black/30";

  if (field.type === "image") {
    const currentValue = typeof value === "string" ? value : "";

    return (
      <div className="mt-2 space-y-3">
        {previewUrl && (
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
            {/* The Supabase host is environment-specific, so this admin preview intentionally uses a native image. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewUrl}
              alt={`${field.label} 현재 이미지`}
              className="h-40 w-full object-cover"
            />
            <p className="truncate border-t border-white/10 px-3 py-2 text-xs text-white/35">
              현재 이미지: {currentValue}
            </p>
          </div>
        )}
        <input
          type="file"
          name={field.name}
          accept={field.accept}
          required={field.required && !currentValue}
          className={`${baseClassName} file:mr-3 file:rounded-lg file:border-0 file:bg-[#8CE0F4] file:px-3 file:py-2 file:text-xs file:font-bold file:text-[#071013]`}
        />
      </div>
    );
  }

  if (field.type === "textarea" || field.type === "detail-list") {
    return (
      <textarea
        name={field.name}
        defaultValue={formatFieldValue(field, value)}
        rows={field.rows ?? 4}
        required={field.required}
        placeholder={field.placeholder}
        className={`${baseClassName} resize-y`}
      />
    );
  }

  if (field.type === "checkbox") {
    return (
      <label className="mt-2 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-4 py-3">
        <div>
          <p className="text-sm font-medium text-white">{field.label}</p>
          <p className="text-xs text-white/35">체크한 항목만 공개 대상으로 사용합니다.</p>
        </div>
        <input
          type="checkbox"
          name={field.name}
          defaultChecked={Boolean(value)}
          className="h-5 w-5 rounded border-white/20 bg-black/30 accent-[#8CE0F4]"
        />
      </label>
    );
  }

  return (
    <input
      type={
        field.type === "number"
          ? "number"
          : field.type === "datetime-local"
          ? "datetime-local"
          : "text"
      }
      name={field.name}
      defaultValue={formatFieldValue(field, value)}
      required={field.required}
      placeholder={field.placeholder}
      className={baseClassName}
    />
  );
}

export default function RecordForm({
  section,
  record,
  isCreateForm = false,
  hideHeader = false,
  variant = "card",
  previewUrls,
}: {
  section: AdminSectionConfig;
  record: Record<string, unknown>;
  isCreateForm?: boolean;
  hideHeader?: boolean;
  variant?: "card" | "plain";
  /** 이미지 필드의 미리보기 URL. supabase-js를 클라이언트 번들에 넣지 않으려고 서버에서 계산해 넘긴다. */
  previewUrls?: Record<string, string>;
}) {
  const router = useRouter();
  const primaryKey = section.primaryKey ?? "id";
  const recordId = record[primaryKey];
  const hasImageField = section.fields.some((field) => field.type === "image");

  // 이미지가 있는 섹션은 파일을 먼저 Storage에 올린 뒤 경로만 서버 액션에 넘긴다.
  const saveAction = hasImageField
    ? async (formData: FormData) => {
        try {
          await uploadFormImages(section, formData);
        } catch (error) {
          const message =
            error instanceof Error ? error.message : "이미지 업로드에 실패했습니다.";
          router.push(
            `${section.adminPath}?${new URLSearchParams({ message, status: "error" })}`
          );
          return;
        }

        await saveAdminRecord(formData);
      }
    : saveAdminRecord;
  const formId = `${section.id}-${String(recordId ?? "new").replace(
    /[^a-zA-Z0-9_-]/g,
    "-"
  )}-form`;

  return (
    <article
      className={variant === "plain" ? "" : "rounded-2xl border border-white/10 bg-white/[0.025] p-5"}
    >
      {!hideHeader && (
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/35">
              {isCreateForm ? "새 항목 추가" : "기존 항목 수정"}
            </p>
            <h4 className="mt-1 text-lg font-semibold text-white">
              {isCreateForm ? `${section.title} 추가` : getRecordHeadline(record)}
            </h4>
          </div>
          {!isCreateForm && recordId !== undefined && recordId !== null && (
            <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/35">
              {primaryKey}: {String(recordId)}
            </span>
          )}
        </div>
      )}

      <div>
        <form
          id={formId}
          action={saveAction}
          data-pending-label={isCreateForm ? "추가" : "저장"}
          className="space-y-5"
        >
          <input type="hidden" name="sectionId" value={section.id} />
          {!isCreateForm && recordId !== undefined && recordId !== null && (
            <input type="hidden" name={primaryKey} value={String(recordId)} />
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {section.fields.map((field) => (
              <div
                key={field.name}
                className={
                  field.type === "textarea" ||
                  field.type === "detail-list" ||
                  field.type === "image"
                    ? "md:col-span-2"
                    : ""
                }
              >
                {field.type !== "checkbox" && (
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                      {field.label}
                      {field.required && (
                        <span className="ml-1 text-sm font-semibold text-red-500">
                          *
                        </span>
                      )}
                    </label>
                  </div>
                )}
                <FieldInput
                  field={field}
                  value={record[field.name]}
                  previewUrl={previewUrls?.[field.name]}
                />
                {field.description && (
                  <p className="mt-2 text-xs leading-5 text-white/35">
                    {field.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </form>

        <div className="mt-5 flex justify-end gap-2">
          {!section.fixedRows && !isCreateForm && recordId !== undefined && recordId !== null && (
            <form action={deleteAdminRecord} data-pending-label="삭제">
              <input type="hidden" name="sectionId" value={section.id} />
              <input type="hidden" name={primaryKey} value={String(recordId)} />
              <AdminDeleteButton />
            </form>
          )}
          <button
            type="submit"
            form={formId}
            className="inline-flex items-center gap-2 rounded-lg bg-[#8CE0F4] px-4 py-2.5 text-sm font-bold text-[#071013] transition-colors hover:bg-[#9ae8f9]"
          >
            {isCreateForm ? <Plus className="h-4 w-4" /> : <PencilLine className="h-4 w-4" />}
            {isCreateForm ? "새 항목 저장" : "변경사항 저장"}
          </button>
        </div>
      </div>
    </article>
  );
}

