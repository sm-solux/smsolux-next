"use client";

import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import { Trash2 } from "lucide-react";

const CONFIRM_WINDOW_MS = 4000;

// 삭제 확인을 window.confirm 대신 버튼 두 번 누르기로 받는다. 앱 안 브라우저
// (카카오톡, Claude 브라우저 등)는 confirm 창을 띄우지 않고 바로 false를 돌려줘서,
// 삭제 버튼이 아무 반응 없이 무시되는 일이 있었다.
export default function AdminDeleteButton() {
  const { pending } = useFormStatus();
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    if (!isConfirming) {
      return;
    }

    const timeoutId = window.setTimeout(
      () => setIsConfirming(false),
      CONFIRM_WINDOW_MS
    );
    return () => window.clearTimeout(timeoutId);
  }, [isConfirming]);

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={(event) => {
        if (!isConfirming) {
          event.preventDefault();
          setIsConfirming(true);
        }
      }}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${
        isConfirming
          ? "border-red-400 bg-red-500 text-white hover:bg-red-600"
          : "border-red-400/20 bg-red-400/5 text-red-300 hover:bg-red-400/10"
      }`}
    >
      <Trash2 className="h-4 w-4" />
      {pending
        ? "삭제 중..."
        : isConfirming
        ? "한 번 더 누르면 삭제 (되돌릴 수 없음)"
        : "삭제"}
    </button>
  );
}
