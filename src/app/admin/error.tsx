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
    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-900">
      <h2 className="text-base font-semibold">관리자 데이터를 불러오지 못했습니다.</h2>
      <p className="mt-2 text-sm leading-6 text-red-700">
        {error.message || "Supabase 연결과 테이블 설정을 확인해주세요."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-5 rounded-lg bg-red-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-800"
      >
        다시 시도
      </button>
    </div>
  );
}
