import React from "react";
import Hero from "@/components/home/Hero";
import Introduce from "@/components/home/Introduce"
import About from "@/components/home/About";
import Review from "@/components/home/Review";
import JoinUs from "@/components/home/JoinUs";
import { supabase } from "@/lib/supabase";

// 관리자가 저장하면 revalidatePath로 바로 갱신된다. 시간 값은 그 호출이
// 실패했을 때를 대비한 안전망이다.
export const revalidate = 3600;

export default async function Home() {
  const { data: reviews } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="flex flex-col w-full snap-y snap-mandatory text-white no-scrollbar scroll-smooth">
      <Hero className="snap-start shrink-0" />
      <Introduce className="snap-start shrink-0" />
      <About className="snap-start shrink-0" />
      <Review
        className="snap-start shrink-0"
        initialReviews={reviews || []}
      />
      <JoinUs className="snap-start shrink-0" />
    </main>
  );
}
