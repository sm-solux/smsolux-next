// 관리자 레코드 표시용 헬퍼. 서버 컴포넌트(목록)와 클라이언트 컴포넌트(수정 폼)가
// 함께 쓰므로 'use client' 파일이 아닌 여기에 둔다.
export function getRecordHeadline(record: Record<string, unknown>) {
  const headlineCandidates = ["title", "name", "question", "label", "key"];

  for (const key of headlineCandidates) {
    const value = record[key];

    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }

  return "이름 없는 항목";
}
