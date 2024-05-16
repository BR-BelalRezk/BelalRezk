"use client";
import { Section } from "@/exports";
import { navbar } from "@/constants";
import { useEffect } from "react";
import Lenis from "lenis";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
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
