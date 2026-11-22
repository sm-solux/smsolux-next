import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
    // 이미지는 브라우저가 Storage에 직접 올리므로 서버 액션 본문은 기본값(1MB)이면 된다.
  },
};

export default nextConfig;
