"use client";

import { useFormStatus } from "react-dom";
import { Trash2 } from "lucide-react";

export default function AdminDeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      onClick={(event) => {
        if (!window.confirm("이 항목을 삭제할까요? 삭제 후에는 되돌릴 수 없습니다.")) {
          event.preventDefault();
        }
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition-colors hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <Trash2 className="h-4 w-4" />
      {pending ? "삭제 중..." : "삭제"}
    </button>
  );
}
