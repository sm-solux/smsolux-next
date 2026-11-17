import {
  type AdminSectionConfig,
} from "@/lib/admin-config";
import { ChevronDown, Plus } from "lucide-react";
import CreateRecordModal from "@/components/admin/CreateRecordModal";
import RecordForm from "@/components/admin/RecordForm";
import { getRecordHeadline } from "@/lib/admin-record";
import { getKstWallClockTimestamp } from "@/utils/date";
import { resolveSupabaseImageUrl } from "@/lib/storage";

function getPreviewUrls(
  section: AdminSectionConfig,
  record: Record<string, unknown>
) {
  const entries = section.fields.flatMap((field) => {
    const value = record[field.name];

    if (field.type !== "image" || typeof value !== "string") {
      return [];
    }

    const url = resolveSupabaseImageUrl(value, { bucket: field.storageBucket });
    return url ? [[field.name, url] as const] : [];
  });

  return entries.length ? Object.fromEntries(entries) : undefined;
}

function joinRecordValues(
  record: Record<string, unknown>,
  fields: string[]
) {
  return fields
    .map((field) => record[field])
    .filter((value) =>
      typeof value === "string"
        ? Boolean(value.trim())
        : typeof value === "number"
    )
    .map(String)
    .join(" · ");
}

function getSummaryMeta(sectionId: string, record: Record<string, unknown>) {
  switch (sectionId) {
    case "siteSettings":
      return joinRecordValues(record, ["key"]);
    case "reviews":
      return joinRecordValues(record, ["gen", "part"]);
    case "activities":
      return record.order === undefined ? "" : `노출 순서 ${record.order}`;
    case "projects":
      return joinRecordValues(record, ["generation", "term", "team_name"]);
    default:
      return "";
  }
}

function formatAdminDate(value: unknown) {
  if (typeof value !== "string") {
    return "날짜 미설정";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "날짜 확인 필요";
  }

  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "UTC",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

function getRecruitmentStatus(record: Record<string, unknown>) {
  if (!record.is_active) {
    return {
      label: "비공개",
      className: "border-white/10 bg-white/5 text-white/40",
    };
  }

  const now = getKstWallClockTimestamp();
  const start = new Date(String(record.start_date ?? "")).getTime();
  const end = new Date(String(record.end_date ?? "")).getTime();

  if (!Number.isFinite(start) || !Number.isFinite(end)) {
    return {
      label: "날짜 확인",
      className: "border-amber-400/20 bg-amber-400/10 text-amber-200",
    };
  }

  if (now < start) {
    return {
      label: "게시 예정",
      className: "border-blue-400/20 bg-blue-400/10 text-blue-200",
    };
  }

  if (now >= end) {
    return {
      label: "마감",
      className: "border-white/10 bg-white/5 text-white/40",
    };
  }

  return {
    label: "모집 중",
    className: "border-[#8CE0F4]/25 bg-[#8CE0F4]/10 text-[#8CE0F4]",
  };
}

function getRecordBodyPreview(record: Record<string, unknown>) {
  const value = record.description ?? record.content ?? record.desc ?? record.answer;

  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  return value.trim();
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
    <section className="space-y-5 border-b border-white/10 pb-10 last:border-b-0 last:pb-0">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-white">
              {section.title}
            </h3>
            <span className="text-xs tabular-nums text-white/30">{records.length}</span>
          </div>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-white/40">
            {section.description}
          </p>
        </div>
        {createMode === "modal" && !section.fixedRows && (
          <CreateRecordModal sectionId={section.id} title={section.title}>
            <RecordForm
              section={section}
              record={{}}
              isCreateForm
              hideHeader
              variant="plain"
            />
          </CreateRecordModal>
        )}
      </div>

      {createMode === "inline" && !section.fixedRows && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
          <div className="mb-4 flex items-center gap-2">
            <Plus className="h-4 w-4 text-[#8CE0F4]" />
            <p className="text-sm font-semibold text-white">새 항목</p>
          </div>
          <RecordForm
            section={section}
            record={{}}
            isCreateForm
          />
        </div>
      )}

      {records.length === 0 && (
        <div className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-8 text-center text-sm text-white/35">
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
          const summaryMeta = getSummaryMeta(section.id, record);
          const recruitmentStatus =
            section.id === "recruitments" ? getRecruitmentStatus(record) : null;

          const summaryContent = (
            <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {recruitmentStatus && (
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${recruitmentStatus.className}`}>
                      {recruitmentStatus.label}
                    </span>
                  )}
                  {summaryMeta && (
                    <p className="text-xs text-white/35">{summaryMeta}</p>
                  )}
                </div>
                <p className={`${recruitmentStatus || summaryMeta ? "mt-3" : ""} text-base font-semibold text-white`}>
                  {getRecordHeadline(record)}
                </p>
                {section.id === "recruitments" ? (
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-xs font-medium text-white/35">마감</span>
                    <span className="text-lg font-semibold tabular-nums text-white">
                      {formatAdminDate(record.end_date)}
                    </span>
                    {recruitmentStatus?.label === "게시 예정" && (
                      <span className="text-xs text-white/30">
                        · 시작 {formatAdminDate(record.start_date)}
                      </span>
                    )}
                  </div>
                ) : getRecordBodyPreview(record) ? (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/45">
                    {getRecordBodyPreview(record)}
                  </p>
                ) : null}
            </div>
          );

          return editMode === "modal" ? (
            <article
              key={recordKey}
              className="flex min-h-28 items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-5 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
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
                    previewUrls={getPreviewUrls(section, record)}
                    hideHeader
                    variant="plain"
                  />
                </CreateRecordModal>
              </div>
            </article>
          ) : (
            <details
              key={recordKey}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] open:border-white/20"
            >
              <summary className="flex min-h-28 cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 transition-colors hover:bg-white/[0.035]">
                {summaryContent}
                <div className="flex shrink-0 items-center gap-2 text-sm text-white/35">
                  편집하기
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </div>
              </summary>
              <div className="border-t border-white/10 bg-black/10 px-5 py-5">
                <RecordForm
                  section={section}
                  record={record}
                  previewUrls={getPreviewUrls(section, record)}
                />
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
