-- project-thumbnail 버킷에 로그인하지 않은 사용자(public 역할)도 파일을 올리고,
-- 덮어쓰고, 지울 수 있게 열려 있던 정책을 지운다. 공개 키만 있으면 누구나
-- 이 버킷에 파일을 올릴 수 있었다 (2026-11-22 확인).
--
-- 사이트는 이 정책이 필요 없다.
--   - 업로드: 서버가 관리자 확인 후 발급한 서명 URL로만 올린다.
--   - 삭제·정리: 서버가 서비스 키로 한다.
-- 버킷이 public이라 이미지 읽기(공개 URL)는 정책 없이도 그대로 된다.

drop policy if exists "All_Allow_Policy 18rfi0_1" on storage.objects; -- public UPDATE
drop policy if exists "All_Allow_Policy 18rfi0_2" on storage.objects; -- public INSERT
drop policy if exists "All_Allow_Policy 18rfi0_3" on storage.objects; -- public DELETE
