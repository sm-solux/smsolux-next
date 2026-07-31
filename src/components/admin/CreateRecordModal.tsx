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

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          mode === "create"
            ? "inline-flex items-center gap-2 rounded-xl bg-[#8CE0F4] px-4 py-2.5 text-sm font-bold text-[#071013] transition-colors hover:bg-[#9ae8f9]"
            : "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/50 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
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
          className="fixed left-0 top-0 z-[100] h-screen min-h-[100dvh] w-screen overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-md"
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
            <div className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#131519] p-5 text-white shadow-[0_32px_100px_rgba(0,0,0,0.55)] md:p-6">
              <div className="mb-6 flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8CE0F4]/60">
                  {mode === "create" ? "새 항목" : "항목 수정"}
                  </p>
                  <h4
                    id={`${sectionId}-create-title`}
                    className="mt-1 text-lg font-semibold text-white"
                  >
                    {mode === "create" ? `${title} 추가` : title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-white/40 transition-colors hover:bg-white/[0.07] hover:text-white"
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
