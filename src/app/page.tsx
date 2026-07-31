import React from "react";
import Hero from "@/components/home/Hero";
import Introduce from "@/components/home/Introduce"
import About from "@/components/home/About";
import Review from "@/components/home/Review";
import JoinUs from "@/components/home/JoinUs";
import { supabase } from "@/lib/supabase";
import { HomeStat } from "@/types/home";

export const revalidate = 0;

const defaultStats: HomeStat[] = [
  { id: "members", label: "Members", value: "100+", order_index: 0 },
  { id: "projects", label: "Projects", value: "40+", order_index: 1 },
  { id: "years", label: "Years", value: "28", order_index: 2 },
];

export default async function Home() {
  const { data: activities } = await supabase
    .from('home_activities')
    .select('*');

  const { data: reviews } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <main className="flex flex-col w-full snap-y snap-mandatory text-white no-scrollbar scroll-smooth">
      <Hero className="snap-start shrink-0" />
      <Introduce
        className="snap-start shrink-0"
        initialActivities={activities || []}
        initialStats={defaultStats}
      />
      <About className="snap-start shrink-0" />
      <Review
        className="snap-start shrink-0"
        initialReviews={reviews || []}
      />
      <JoinUs className="snap-start shrink-0" />
    </main>
  );
}
