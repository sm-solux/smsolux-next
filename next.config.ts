import type { NextConfig } from "next";

const supabaseHost = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname
  : null;

const nextConfig: NextConfig = {
  images: {
    // 프로젝트 썸네일은 Supabase Storage 원본(최대 수 MB)이다. next/image가 카드
    // 크기에 맞춰 줄이고 WebP/AVIF로 바꿔 내려주도록 이 호스트만 허용한다.
    remotePatterns: supabaseHost
      ? [{ protocol: "https", hostname: supabaseHost, pathname: "/storage/v1/object/public/**" }]
      : [],
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
    // 이미지는 브라우저가 Storage에 직접 올리므로 서버 액션 본문은 기본값(1MB)이면 된다.
  },
};

export default nextConfig;
