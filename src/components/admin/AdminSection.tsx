import { deleteAdminRecord, saveAdminRecord } from "@/app/admin/actions";
import {
  type AdminFieldConfig,
  type AdminSectionConfig,
} from "@/lib/admin-config";
import { ChevronDown, PencilLine, Plus } from "lucide-react";
import CreateRecordModal from "@/components/admin/CreateRecordModal";
import AdminDeleteButton from "@/components/admin/AdminDeleteButton";

function formatDateTimeLocal(value: unknown) {
  if (typeof value !== "string" || !value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value.slice(0, 16);
  }

  const localTime = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localTime.toISOString().slice(0, 16);
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
}: {
  field: AdminFieldConfig;
  value: unknown;
}) {
  const baseClassName =
    "mt-2 w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-400 focus:bg-white";

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
      <label className="mt-2 flex items-center justify-between rounded-lg border border-stone-200 bg-stone-50 px-4 py-3">
        <div>
          <p className="text-sm font-medium text-slate-900">{field.label}</p>
          <p className="text-xs text-slate-500">체크 시 현재 공개 상태로 표시됩니다.</p>
        </div>
        <input
          type="checkbox"
          name={field.name}
          defaultChecked={Boolean(value)}
          className="h-5 w-5 rounded border-slate-300 text-slate-900"
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

function getRecordHeadline(record: Record<string, unknown>) {
  const headlineCandidates = ["title", "name", "question", "label", "key"];

  for (const key of headlineCandidates) {
    const value = record[key];

    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }

  return "이름 없는 항목";
}

function getRecordMeta(section: AdminSectionConfig, record: Record<string, unknown>) {
  const metaCandidates = section.fields
    .filter((field) => !["title", "name", "question"].includes(field.name))
    .map((field) => {
      const value = record[field.name];

      if (typeof value === "string" && value.trim()) {
        return `${field.label}: ${value}`;
      }

      if (typeof value === "number") {
        return `${field.label}: ${value}`;
      }

      if (typeof value === "boolean") {
        return `${field.label}: ${value ? "활성" : "비활성"}`;
      }

      if (Array.isArray(value) && value.length > 0) {
        return `${field.label}: ${value.length}개`;
      }

      return null;
    })
    .filter(Boolean)
    .slice(0, 2);

  if (metaCandidates.length > 0) {
    return metaCandidates.join(" · ");
  }

  const primaryKey = section.primaryKey ?? "id";
  return `${primaryKey}: ${String(record[primaryKey] ?? "-")}`;
}

function getDashMeta(section: AdminSectionConfig, record: Record<string, unknown>) {
  const excludedFields =
    section.id === "reviews"
      ? ["name", "description", "content", "desc", "answer", "details"]
      : ["description", "content", "desc", "answer", "details"];
  const values = section.fields
    .filter((field) => !excludedFields.includes(field.name))
    .map((field) => {
      const value = record[field.name];

      if (typeof value === "string" && value.trim()) {
        return value;
      }

      if (typeof value === "number") {
        return String(value);
      }

      return null;
    })
    .filter(Boolean)
    .slice(0, 3);

  return values.join(" - ");
}

function getRecordBodyPreview(record: Record<string, unknown>) {
  const value = record.description ?? record.content ?? record.desc ?? record.answer;

  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  return value.trim();
}

export function RecordForm({
  section,
  record,
  isCreateForm = false,
  hideHeader = false,
  variant = "card",
}: {
  section: AdminSectionConfig;
  record: Record<string, unknown>;
  isCreateForm?: boolean;
  hideHeader?: boolean;
  variant?: "card" | "plain";
}) {
  const primaryKey = section.primaryKey ?? "id";
  const recordId = record[primaryKey];
  const formId = `${section.id}-${String(recordId ?? "new").replace(
    /[^a-zA-Z0-9_-]/g,
    "-"
  )}-form`;

  return (
    <article
      className={
        variant === "plain"
          ? ""
          : `rounded-xl border p-5 ${
              isCreateForm
                ? "border-stone-300 bg-stone-50"
                : "border-stone-200 bg-white"
            }`
      }
    >
      {!hideHeader && (
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              {isCreateForm ? "새 항목 추가" : "기존 항목 수정"}
            </p>
            <h4 className="mt-1 text-lg font-semibold text-slate-950">
              {isCreateForm ? `${section.title} 추가` : getRecordHeadline(record)}
            </h4>
            {!isCreateForm && (
              <p className="mt-1 text-sm text-slate-500">
                {getRecordMeta(section, record)}
              </p>
            )}
          </div>
          {!isCreateForm && recordId !== undefined && recordId !== null && (
            <span className="rounded-md border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] text-slate-500">
              {primaryKey}: {String(recordId)}
            </span>
          )}
        </div>
      )}

      <div>
        <form id={formId} action={saveAdminRecord} className="space-y-5">
          <input type="hidden" name="sectionId" value={section.id} />
          {!isCreateForm && recordId !== undefined && recordId !== null && (
            <input type="hidden" name={primaryKey} value={String(recordId)} />
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {section.fields.map((field) => (
              <div
                key={field.name}
                className={
                  field.type === "textarea" || field.type === "detail-list"
                    ? "md:col-span-2"
                    : ""
                }
              >
                {field.type !== "checkbox" && (
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      {field.label}
                      {field.required && (
                        <span className="ml-1 text-sm font-semibold text-red-500">
                          *
                        </span>
                      )}
                    </label>
                  </div>
                )}
                <FieldInput field={field} value={record[field.name]} />
                {field.description && (
                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    {field.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </form>

        <div className="mt-5 flex justify-end gap-2">
          {!isCreateForm && recordId !== undefined && recordId !== null && (
            <form action={deleteAdminRecord}>
              <input type="hidden" name="sectionId" value={section.id} />
              <input type="hidden" name={primaryKey} value={String(recordId)} />
              <AdminDeleteButton />
            </form>
          )}
          <button
            type="submit"
            form={formId}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
          >
            {isCreateForm ? <Plus className="h-4 w-4" /> : <PencilLine className="h-4 w-4" />}
            {isCreateForm ? "새 항목 저장" : "변경사항 저장"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function AdminSection({
  section,
  records,
  recordLayout = "list",
  createMode = "inline",
  editMode = "inline",
}: {
  section: AdminSectionConfig;
  records: Record<string, unknown>[];
  recordLayout?: "list" | "grid";
  createMode?: "inline" | "modal";
  editMode?: "inline" | "modal";
}) {
  return (
    <section className="space-y-5 rounded-xl border border-stone-200 bg-white p-5">
      <div className="flex flex-col gap-1">
        <div>
          <h3 className="text-base font-semibold tracking-tight text-slate-950">
            {section.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">
            {section.description}
            <span className="ml-2 text-xs text-slate-400">
              총 {records.length}개 항목
            </span>
          </p>
        </div>
      </div>

      {createMode === "modal" ? (
        <CreateRecordModal sectionId={section.id} title={section.title}>
          <RecordForm
            section={section}
            record={{}}
            isCreateForm
            hideHeader
            variant="plain"
          />
        </CreateRecordModal>
      ) : (
        <div className="rounded-xl border border-stone-200 bg-white p-5">
          <div className="mb-4 flex items-center gap-2">
            <Plus className="h-4 w-4 text-slate-500" />
            <p className="text-sm font-semibold text-slate-900">새 항목</p>
          </div>
          <RecordForm
            section={section}
            record={{}}
            isCreateForm
          />
        </div>
      )}

      {records.length === 0 && (
        <div className="rounded-lg border border-dashed border-stone-300 bg-stone-50 px-5 py-4 text-sm text-slate-500">
          {section.emptyStateLabel} 위의 카드에서 첫 항목을 추가할 수 있습니다.
        </div>
      )}

      <div
        className={
          recordLayout === "grid"
            ? "grid gap-4 lg:grid-cols-2"
            : "space-y-4"
        }
      >
        {records.map((record, index) => {
          const recordKey = String(
            record[section.primaryKey ?? "id"] ?? `record-${index}`
          );

          const summaryContent = (
            <>
              <div className="min-w-0">
                {getDashMeta(section, record) && (
                  <p className="text-[11px] font-medium tracking-[0.08em] text-slate-400">
                    {getDashMeta(section, record)}
                  </p>
                )}
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {getRecordHeadline(record)}
                </p>
                {getRecordBodyPreview(record) ? (
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">
                    {getRecordBodyPreview(record)}
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-slate-500">
                    {getRecordMeta(section, record)}
                  </p>
                )}
              </div>
            </>
          );

          return editMode === "modal" ? (
            <article
              key={recordKey}
              className="flex min-h-28 items-start justify-between gap-4 rounded-xl border border-stone-200 bg-stone-50 px-5 py-4"
            >
              {summaryContent}
              <div className="shrink-0">
                <CreateRecordModal
                  sectionId={`${section.id}-${recordKey}`}
                  title={getRecordHeadline(record)}
                  mode="edit"
                >
                  <RecordForm
                    section={section}
                    record={record}
                    hideHeader
                    variant="plain"
                  />
                </CreateRecordModal>
              </div>
            </article>
          ) : (
            <details
              key={recordKey}
              className="group overflow-hidden rounded-xl border border-stone-200 bg-white open:border-slate-300"
            >
              <summary className="flex min-h-28 cursor-pointer list-none items-start justify-between gap-4 bg-stone-50 px-5 py-4 transition-colors hover:bg-stone-100">
                {summaryContent}
                <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
                  편집하기
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
              </summary>
              <div className="border-t border-stone-200 bg-white px-5 py-5">
                <RecordForm
                  section={section}
                  record={record}
                />
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
