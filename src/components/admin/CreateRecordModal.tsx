"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { PencilLine, Plus, X } from "lucide-react";

export default function CreateRecordModal({
  sectionId,
  title,
  children,
  mode = "create",
}: {
  sectionId: string;
  title: string;
  children: React.ReactNode;
  mode?: "create" | "edit";
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          mode === "create"
            ? "inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
            : "inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
        }
      >
        {mode === "create" ? (
          <>
            <Plus className="h-4 w-4" />
            새 항목 추가
          </>
        ) : (
          <>
            <PencilLine className="h-3.5 w-3.5" />
            편집
          </>
        )}
      </button>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
        <div
          className="fixed left-0 top-0 z-[100] h-screen min-h-[100dvh] w-screen overflow-y-auto bg-slate-950/35 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${sectionId}-create-title`}
        >
          <button
            type="button"
            className="fixed inset-0 cursor-default"
            aria-label="닫기"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative flex min-h-full items-center justify-center">
            <div className="relative w-full max-w-2xl rounded-xl border border-stone-200 bg-white p-5 shadow-xl">
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {mode === "create" ? "새 항목" : "항목 수정"}
                  </p>
                  <h4
                    id={`${sectionId}-create-title`}
                    className="mt-1 text-lg font-semibold text-slate-950"
                  >
                    {mode === "create" ? `${title} 추가` : title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-stone-200 bg-white p-2 text-slate-500 transition-colors hover:bg-stone-50 hover:text-slate-900"
                  aria-label="닫기"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
