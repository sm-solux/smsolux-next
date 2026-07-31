"use client";

import { useFormStatus } from "react-dom";
import { LogOut } from "lucide-react";

export default function AdminLogoutButton({
  compact = false,
}: {
  compact?: boolean;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={
        compact
          ? "inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
          : "inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-white px-4 py-3 text-xs font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
      }
    >
      <LogOut className="h-4 w-4" />
      {pending ? "로그아웃 중..." : "로그아웃"}
    </button>
  );
}
