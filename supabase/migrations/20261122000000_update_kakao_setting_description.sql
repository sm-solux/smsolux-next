-- 관리자 화면에서 값 입력칸이 필수라 비워 둘 수 없으므로, 설명에서
-- "비워 두면 직전 주소가 계속 쓰입니다." 문장을 뺀다.
update public.site_settings
set description = '푸터의 카카오톡 아이콘이 연결되는 주소입니다. 기수마다 방을 새로 열면 이 값을 바꿔주세요.'
where key = 'kakao_open_chat_url';
