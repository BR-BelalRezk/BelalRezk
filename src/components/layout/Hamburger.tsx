"use client";
import { motion } from "framer-motion";

export default function Hamburger({ toggle }: { toggle?: boolean }) {
  const span_1 = toggle ? { rotate: 45, translateY: 5 } : {};
  const span_2 = toggle ? { rotate: -45, translateY: -5 } : {};
  return (
    <>
      {Array.from({ length: 2 }, (_, index) => index).map((index) => (
        <motion.span
          key={index}
          className="bg-stone-900 w-6 h-0.5 rounded-full"
          animate={index === 0 ? span_1 : span_2}
          transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
        />
      ))}
    </>
  );
}
