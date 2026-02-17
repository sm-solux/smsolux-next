import React from "react";
import Hero from "@/components/home/Hero";
import Introduce from "@/components/home/Introduce"
import About from "@/components/home/About";
import JoinUs from "@/components/home/JoinUs";

export const revalidate = 0;

export default async function Home() {
  return (
    <main className="flex flex-col w-full snap-y snap-mandatory text-white no-scrollbar scroll-smooth">
      <Hero className="snap-start shrink-0" />
      {/* <Introduce className="snap-start shrink-0" /> */}
      <About className="snap-start shrink-0" />
      <JoinUs className="snap-start shrink-0" />
    </main>
  );
}