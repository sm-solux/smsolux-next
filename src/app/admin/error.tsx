"use client";

import { useEffect } from "react";

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-6 text-red-100">
      <h2 className="text-base font-semibold">관리자 데이터를 불러오지 못했습니다.</h2>
      <p className="mt-2 text-sm leading-6 text-red-200/70">
        {error.message || "Supabase 연결과 테이블 설정을 확인해주세요."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-5 rounded-lg bg-red-300 px-4 py-2.5 text-sm font-semibold text-red-950 transition-colors hover:bg-red-200"
      >
        다시 시도
      </button>
    </div>
  );
}
