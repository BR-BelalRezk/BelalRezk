"use client";
import { motion } from "framer-motion";

export default function Hamburger({ toggle }: { toggle?: boolean }) {
  const span_1 = toggle ? { transalteY: 8, rotate: 45 } : {};
  const span_2 = toggle ? { translateY: -8, rotate: -45 } : {};
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => index).map((index) => (
        <motion.span
          key={index}
          animate={index === 0 ? span_1 : span_2}
          className="h-0.5 w-5 bg-stone-900 rounded-full"
          transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
        />
      ))}
    </>
  );
}
