// 활동 후기 정렬 기준. 공개 홈 슬라이더와 관리자 목록이 같은 순서를 쓰도록
// 조회 지점에서 이 함수 하나로 정렬한다.
//
// 1. 기수 높은 순. gen은 "30기" 같은 글자라 숫자만 뽑아 비교한다.
//    숫자가 없는 값(예: "test")은 맨 뒤로 보낸다.
// 2. 같은 기수 안에서는 먼저 등록한 순.
// 3. 등록 시각까지 같으면(한꺼번에 넣은 데이터) id로 고정해 순서가 흔들리지 않게 한다.

type ReviewSortFields = {
  id?: unknown;
  gen?: unknown;
  created_at?: unknown;
};

function getGenerationNumber(gen: unknown) {
  if (typeof gen !== "string" && typeof gen !== "number") {
    return null;
  }

  const match = String(gen).match(/\d+/);
  return match ? Number(match[0]) : null;
}

function getTime(value: unknown) {
  const time = typeof value === "string" ? Date.parse(value) : NaN;
  return Number.isNaN(time) ? 0 : time;
}

export function sortReviewsByGeneration<T extends ReviewSortFields>(reviews: T[]) {
  return [...reviews].sort((a, b) => {
    const genA = getGenerationNumber(a.gen);
    const genB = getGenerationNumber(b.gen);

    if (genA !== genB) {
      if (genA === null) return 1;
      if (genB === null) return -1;
      return genB - genA;
    }

    const timeDiff = getTime(a.created_at) - getTime(b.created_at);

    if (timeDiff !== 0) {
      return timeDiff;
    }

    return String(a.id ?? "").localeCompare(String(b.id ?? ""));
  });
}
