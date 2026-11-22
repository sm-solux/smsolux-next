import "server-only";

// 관리자 DB 작업이 어느 단계에서 오래 걸리는지 서버 로그로 확인하기 위한 계측.
// 평소에는 조용하고, SLOW_MS 이상 걸린 경우에만
// `[timing] label total=…ms | step=…ms, …` 한 줄을 남긴다.
const SLOW_MS = 500;

export function createTimer(label: string) {
  const start = performance.now();
  let last = start;
  const steps: string[] = [];

  return {
    step(name: string) {
      const now = performance.now();
      steps.push(`${name}=${Math.round(now - last)}ms`);
      last = now;
    },
    end() {
      const total = Math.round(performance.now() - start);

      if (total < SLOW_MS) {
        return;
      }

      console.warn(`[timing] ${label} total=${total}ms | ${steps.join(", ")}`);
    },
  };
}
