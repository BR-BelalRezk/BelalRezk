"use client";
import { Section } from "@/exports";
import { navbar } from "@/constants";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <main>
      {navbar.map((item) => (
        <Section key={item.id} id={item.id}>
          <item.element />
        </Section>
      ))}
    </main>
  );
}
