"use client";

import React from "react";
import Hero from "./components/Hero";
import Introduce from "./components/Introduce"
import About from "./components/About";
import Activities from "./components/Activities";
import JoinUs from "./components/JoinUs";

export default function Home() {
  return (
    <main className="flex flex-col w-full snap-y snap-mandatory text-white no-scrollbar scroll-smooth">
      <Hero className="snap-start shrink-0" />
      {/* <Introduce className="snap-start shrink-0" /> */}
      <About className="snap-start shrink-0" />
      {/* <Activities className="snap-start shrink-0" /> */}
      <JoinUs className="snap-start shrink-0" />
    </main>
  );
}