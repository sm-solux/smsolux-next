# SOLUX 공식 웹사이트

숙명여자대학교 프로그래밍 중앙 동아리 **SOLUX**의 공식 웹사이트입니다.
동아리 소개, 프로젝트 아카이브, 활동, 모집 공고를 보여 주고, 운영진은 `/admin`에서 내용을 직접 관리합니다.

- 사이트: <https://sm-solux.dev>
- 관리자: <https://sm-solux.dev/admin> (허용된 Google 계정만 접근)

---

## 목차

1. [기술 스택](#기술-스택)
2. [페이지 구성](#페이지-구성)
3. [시작하기](#시작하기)
4. [환경 변수](#환경-변수)
5. [검증](#검증)
6. [프로젝트 구조](#프로젝트-구조)
7. [동작 방식](#동작-방식)
8. [배포와 외부 설정](#배포와-외부-설정)

---

## 기술 스택

| 구분 | 사용 기술 |
|---|---|
| 프레임워크 | Next.js 16 (App Router), React 19, TypeScript |
| 데이터 | Supabase (PostgreSQL, Auth, Storage) |
| 스타일 | Tailwind CSS 4, Framer Motion, Lucide 아이콘 |
| 3D | Three.js (`@react-three/fiber`, `drei`) — 메인 히어로 |
| 배포 | Vercel (함수 지역: 싱가포르 `sin1`, DB와 같은 지역) |

## 페이지 구성

### 공개 페이지

| 경로 | 내용 | 데이터 |
|---|---|---|
| `/` | 메인: 히어로, 소개, 활동 후기 슬라이더, 지원 안내 | `reviews` |
| `/project` | 기수·학기별 프로젝트 아카이브 | `projects` + Storage 썸네일 |
| `/activity` | 1년 활동 소개 | `activities` |
| `/recruit` | 현재 모집 공고와 자주 묻는 질문 | `recruitments`, `faqs` |

`/projects`는 `/project`로 이동합니다. 모든 페이지 푸터의 카카오톡 링크는 `site_settings`에서 읽습니다.

### 관리자 페이지 (`/admin`)

메뉴 순서는 공개 사이트 헤더와 같습니다.

| 메뉴 | 관리 대상 |
|---|---|
| Home | 활동 후기 (`reviews`) |
| Projects | 프로젝트와 썸네일 이미지 (`projects`) |
| Activity | 활동 카드와 세부 카드 (`activities`) |
| Recruit | 모집 공고 (`recruitments`), 자주 묻는 질문 (`faqs`) |
| Settings | 카카오 오픈채팅 주소처럼 기수마다 바뀌는 값 (`site_settings`) |

각 메뉴에서 항목을 추가·수정·삭제하면 공개 페이지에 바로 반영됩니다. 삭제는 버튼을 **한 번 더 눌러야** 실행됩니다.

## 시작하기

**준비물:** Node.js 22 (CI와 같은 버전)

```bash
git clone https://github.com/sm-solux/smsolux-next.git
cd smsolux-next
npm install
```

프로젝트 루트에 `.env.local`을 만들고 [환경 변수](#환경-변수)를 채운 뒤 개발 서버를 띄웁니다.

```bash
npm run dev
```

<http://localhost:3000>에서 확인합니다.

> **개발 환경의 관리자 로그인 우회**
> `npm run dev`에서는 `/admin`이 로그인 없이 열립니다. 이 상태에서 저장·삭제까지 하려면 `SUPABASE_SERVICE_ROLE_KEY`가 필요합니다.
> 실제 Google 로그인 흐름을 확인하려면 `.env.local`에 `ADMIN_BYPASS_AUTH=false`를 넣으세요. 운영 환경에서는 우회가 항상 꺼져 있습니다.

## 환경 변수

| 이름 | 필수 | 설명 |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | ✅ | Supabase 프로젝트 주소 |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | ✅ | Supabase 공개(anon) 키 |
| `ADMIN_ALLOWED_EMAILS` | ✅ | 관리자 Google 계정. 여러 개면 쉼표로 구분 |
| `SUPABASE_SERVICE_ROLE_KEY` | 권장 | 관리자 저장·삭제와 이미지 정리에 쓰는 서버 전용 키 |
| `NEXT_PUBLIC_SITE_URL` | 선택 | 링크 미리보기의 기준 주소. 기본값 `https://sm-solux.dev` |
| `ADMIN_BYPASS_AUTH` | 선택 | 개발 환경에서 `false`로 두면 관리자 로그인 우회를 끔 |

> ⚠️ `SUPABASE_SERVICE_ROLE_KEY`는 모든 권한 검사를 건너뛰는 키입니다.
> 이름에 `NEXT_PUBLIC_`을 붙이지 말고, 커밋하지 마세요(`.env*`는 git에서 제외되어 있습니다).
> 이 키가 없으면 관리자 계정의 로그인 세션으로 저장하므로, 테이블과 Storage에 관리자용 RLS 정책이 따로 있어야 합니다.

## 검증

커밋 전에 아래 두 가지를 통과시킵니다.

```bash
npm run verify
```

타입 검사 → 린트 → 빌드를 차례로 돌립니다.

```bash
npm run verify:ui
```

개발 서버(또는 `npm start`)를 띄운 상태에서 실행합니다. 공개 페이지 4개를 모바일·태블릿·데스크톱 크기로 열어 아래 항목을 확인하고, 스크린샷을 `.ui-snapshots/`에 남깁니다.

- 가로 스크롤 생김
- 화면보다 넓은 요소
- 콘솔 에러
- 빈 화면

다른 주소를 검사하려면 `node scripts/verify-ui.mjs --base-url http://localhost:3123`처럼 실행합니다.

같은 검사가 GitHub Actions(`.github/workflows/ci.yml`)에서 push와 PR마다 돕니다. 타입 검사와 린트는 항상 돌고, 빌드와 UI 검사는 저장소에 Supabase 비밀값이 설정된 경우에만 돕니다.

## 프로젝트 구조

```
smsolux-next/
├── middleware.ts             # /admin 요청의 로그인·관리자 계정 확인
├── next.config.ts            # 이미지 최적화 허용 호스트 등
├── vercel.json               # 함수 지역(sin1)
├── scripts/verify-ui.mjs     # UI 자동 검사
├── supabase/migrations/      # Storage 버킷, site_settings 테이블 등
└── src/
    ├── app/
    │   ├── page.tsx              # 메인
    │   ├── project/              # 프로젝트 아카이브
    │   ├── activity/             # 활동
    │   ├── recruit/              # 모집 공고, FAQ
    │   ├── auth/callback/        # Google 로그인 후 돌아오는 주소
    │   └── admin/                # 관리자 화면과 서버 액션(actions.ts)
    ├── components/
    │   ├── layout/               # 헤더, 푸터, 공통 틀
    │   ├── home/                 # 메인 페이지 섹션
    │   ├── admin/                # 관리자 목록, 폼, 모달
    │   └── common/
    ├── lib/                      # 데이터 접근, 관리자 설정, 정렬 기준
    ├── types/                    # 화면에서 쓰는 타입
    └── utils/                    # 날짜 처리, 프로젝트 데이터 변환
```

### 어디를 고치면 되나

| 하고 싶은 일 | 위치 |
|---|---|
| 공개 페이지의 데이터 조회 | `src/lib/public-data.ts` → `src/app/<경로>/page.tsx` (서버 컴포넌트) |
| 공개 페이지의 상호작용 | 같은 폴더의 `*Client.tsx` (`'use client'`) |
| 관리자 메뉴·입력 항목 추가 | `src/lib/admin-config.ts` |
| 관리자 저장·삭제 로직 | `src/app/admin/actions.ts` |
| 후기·프로젝트 정렬 기준 | `src/lib/review.ts`, `src/utils/project.ts` (관리자와 공개 화면이 같은 함수를 씀) |

### Supabase 클라이언트

호출하는 위치에 맞는 클라이언트를 씁니다. 섞어 쓰면 로그인 정보가 어긋납니다.

| 위치 | 파일 |
|---|---|
| 서버 컴포넌트, 서버 액션 | `lib/supabase-server.ts` |
| 클라이언트 컴포넌트 | `lib/supabase-browser.ts` |
| 미들웨어 | `lib/supabase-middleware.ts` |
| 서비스 키가 필요한 관리자 작업 | `lib/supabase-admin.ts` (서버 전용) |
| 공개 데이터 조회 | `lib/supabase.ts` |

## 동작 방식

### 공개 페이지 캐시

공개 페이지는 미리 만들어 둔 화면을 CDN에서 바로 내려줍니다(ISR). 그래서 방문자는 DB를 기다리지 않습니다.

- 공개 페이지의 데이터는 `src/lib/public-data.ts`에서 테이블별 태그(`table:projects` 등)를 달아 캐시합니다.
- 관리자가 저장·삭제하면 서버 액션이 그 테이블의 태그를 즉시 만료(`updateTag`)시킵니다. 그래서 저장 직후 첫 방문부터 새 내용이 보입니다.
- 안전망으로 `/`, `/project`, `/activity`는 1시간, `/recruit`는 1분마다 다시 만듭니다. `/recruit`가 짧은 이유는 모집 시작·마감 시각이 지나면 저장하지 않아도 화면이 바뀌어야 하기 때문입니다.
- 푸터의 사이트 설정도 같은 방식으로 태그를 달아 캐시합니다(`src/lib/site-settings.ts`).
- 공개 페이지에서는 쿠키를 읽지 않습니다. 읽는 순간 캐시가 꺼지기 때문입니다. 내용 수정은 모두 `/admin`에서 합니다.

### 관리자 인증

1. `/admin/login`에서 Google로 로그인 → Supabase를 거쳐 `/auth/callback`으로 돌아옵니다.
2. `middleware.ts`가 `/admin` 요청마다 로그인 토큰을 검증하고, `ADMIN_ALLOWED_EMAILS`에 있는 계정인지 확인합니다.
3. 서버 액션도 저장·삭제 전에 같은 확인을 한 번 더 합니다. 서버 액션은 미들웨어를 거치지 않고 직접 호출될 수 있기 때문입니다.

토큰 검증은 `getClaims()`로 서버 안에서 끝납니다. Supabase 인증 서버까지 다녀오지 않습니다.

### 이미지 업로드

프로젝트 썸네일은 Supabase Storage의 공개 버킷 `project-thumbnail`에 저장합니다.

1. 브라우저가 서버 액션에 업로드용 서명 URL을 요청합니다.
2. 브라우저가 파일을 **Storage에 직접** 올립니다. Vercel 함수를 거치지 않으므로 함수의 4.5MB 본문 제한에 걸리지 않습니다.
3. 저장 요청에는 올라간 경로만 담겨 갑니다. 서버는 경로 형식(`projects/연도/uuid.확장자`)을 확인한 뒤 DB에 기록합니다.
4. 이미지를 교체하거나 항목을 지우면 옛 파일도 지웁니다. 파일 정리에 실패하면 화면에 경고가 뜹니다.

공개 페이지는 원본 대신 `next/image`로 카드 크기에 맞게 줄인 WebP/AVIF를 받습니다.

### 날짜

모집 기간은 한국 시각 그대로를 UTC 형식으로 저장합니다(예: 한국 시각 9월 1일 00:00 → `2026-09-01T00:00:00Z`). 비교와 표시는 `src/utils/date.ts`가 이 규칙에 맞춰 처리하므로, 날짜를 다룰 때는 이 파일의 함수를 씁니다.

## 배포와 외부 설정

### Vercel

- `main`에 push하면 자동으로 배포됩니다.
- 대표 도메인은 `sm-solux.dev`입니다. `www.sm-solux.dev`는 308로 대표 도메인으로 이동합니다.
- 환경 변수는 **Settings → Environment Variables**에 넣고, 바꾼 뒤에는 다시 배포해야 반영됩니다.

### Supabase

| 항목 | 설정 |
|---|---|
| Authentication → URL Configuration | Site URL `https://sm-solux.dev`. Redirect URLs에 각 도메인의 `/auth/callback` (로컬 개발용 `http://localhost:3000/auth/callback` 포함) |
| Authentication → Providers | Google 활성화 |
| Storage | 공개 버킷 `project-thumbnail` (`supabase/migrations/`의 SQL로 생성). 읽기는 공개, **쓰기·삭제 정책은 두지 않습니다**. 업로드는 서버가 발급한 서명 URL로, 삭제는 서비스 키로만 합니다 |
| Database | `site_settings` 테이블은 migration으로 관리. 나머지 테이블은 대시보드에서 관리 |

---

Made with 💙 by SOLUX
