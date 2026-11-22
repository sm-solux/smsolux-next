"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSearchParams } from "next/navigation";
import { LoaderCircle, PencilLine, Plus, X } from "lucide-react";

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
  // 저장·삭제가 끝나면 서버가 매번 다른 값을 붙인 주소로 보낸다. 처리 중 표시는
  // 시작할 때의 주소에 묶어 두고, 주소가 바뀌면(= 서버 응답이 도착하면) 끈다.
  // 예전에는 20초 안전 타이머로만 꺼서, 0.2초에 끝난 저장도 20초 동안 가렸다.
  const searchParamsKey = useSearchParams().toString();
  const [pending, setPending] = useState<{ label: string; key: string } | null>(
    null
  );
  const pendingLabel =
    pending && pending.key === searchParamsKey ? pending.label : null;

  const startAction = useCallback(
    (label: string) => {
      if (pendingLabel) {
        return false;
      }

      setPending({ label, key: searchParamsKey });

      // Let the browser dispatch the submit event before removing the modal form.
      window.setTimeout(() => setIsOpen(false), 0);
      return true;
    },
    [pendingLabel, searchParamsKey]
  );

  const handleSubmitCapture = (event: React.FormEvent<HTMLDivElement>) => {
    const form = event.target;

    if (!(form instanceof HTMLFormElement)) {
      return;
    }

    const label = form.dataset.pendingLabel ?? "처리";

    if (!startAction(label)) {
      event.preventDefault();
    }
  };

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

  useEffect(() => {
    if (!pendingLabel) {
      return;
    }

    // 응답이 끝내 오지 않을 때를 위한 안전장치.
    const timeoutId = window.setTimeout(() => setPending(null), 20_000);

    return () => window.clearTimeout(timeoutId);
  }, [pendingLabel]);

  return (
    <>
      <button
        type="button"
        disabled={Boolean(pendingLabel)}
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
            <div
              className="relative w-full max-w-2xl rounded-2xl border border-white/10 bg-[#131519] p-5 text-white shadow-[0_32px_100px_rgba(0,0,0,0.55)] md:p-6"
              onSubmitCapture={handleSubmitCapture}
            >
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

      {pendingLabel &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[130] flex items-center justify-center bg-[#0F1012]/80 px-6 backdrop-blur-md"
            role="status"
            aria-live="assertive"
          >
            <div className="flex min-w-52 flex-col items-center rounded-2xl border border-white/10 bg-[#15171B] px-8 py-7 text-center shadow-[0_28px_90px_rgba(0,0,0,0.5)]">
              <LoaderCircle className="h-7 w-7 animate-spin text-[#8CE0F4]" />
              <p className="mt-4 text-sm font-semibold text-white">
                {pendingLabel} 중입니다
              </p>
              <p className="mt-1 text-xs text-white/35">
                잠시만 기다려주세요.
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
