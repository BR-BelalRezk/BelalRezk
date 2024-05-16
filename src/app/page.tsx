"use client";
import { Section } from "@/exports";
import { navbar } from "@/constants";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { useScroll } from "framer-motion";
export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <main ref={ref} className="h-[500dvh]">
      {navbar.map((item, index) => (
        <Section
          index={index}
          key={item.id}
          id={item.id}
          scrollYProgress={scrollYProgress}
        >
          <item.element />
        </Section>
      ))}
    </main>
  );
}
