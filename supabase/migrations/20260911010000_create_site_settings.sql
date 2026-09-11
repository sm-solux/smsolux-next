-- 사이트 전역 설정 테이블.
--
-- 푸터 링크 다섯 개 중 카카오 오픈채팅 주소만 기수마다 바뀐다. 나머지 넷은
-- 동아리·조직 계정이라 기수와 무관하므로 src/lib/site-content.ts 에 그대로
-- 둔다. 바뀌는 값 하나 때문에 링크 전부를 DB 로 되돌리지 않기 위한 테이블이고,
-- 나중에 다른 전역 설정이 생기면 행만 추가하면 된다.
--
-- 행은 이 마이그레이션에서만 만든다. 관리 화면에서는 value 만 고칠 수 있고
-- 추가·삭제는 막아 뒀다. 코드가 key 로 찾아 쓰기 때문이다.

create table if not exists public.site_settings (
  key text primary key,
  label text not null,
  value text not null default '',
  description text,
  updated_at timestamptz not null default now()
);

alter table public.site_settings enable row level security;

-- 푸터는 모든 방문자에게 보이므로 읽기는 공개한다.
drop policy if exists "site_settings 공개 읽기" on public.site_settings;
create policy "site_settings 공개 읽기"
  on public.site_settings
  for select
  using (true);

-- 쓰기는 서비스 역할 키를 쓰는 관리자 서버 액션만 한다.
-- (서비스 역할은 RLS 를 우회하므로 별도 쓰기 정책을 두지 않는다.)

insert into public.site_settings (key, label, value, description)
values (
  'kakao_open_chat_url',
  '카카오 오픈채팅 주소',
  'https://open.kakao.com/o/sKkticai',
  '푸터의 카카오톡 아이콘이 연결되는 주소입니다. 기수마다 방을 새로 열면 이 값을 바꿔주세요. 비워 두면 직전 주소가 계속 쓰입니다.'
)
on conflict (key) do nothing;
