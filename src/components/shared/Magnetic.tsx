"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Magnetic({
  children,
  className,
  delay,
}: {
  children: Readonly<React.ReactNode>;
  className?: string;
  delay: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  useGSAP(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });

    ref.current?.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } =
        ref.current?.getBoundingClientRect() as {
          height: number;
          width: number;
          left: number;
          top: number;
        };
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
    });
    ref.current?.addEventListener("mouseleave", (e) => {
      xTo(0);
      yTo(0);
    });
  }, []);
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 1, delay, ease: "linear" },
      }}
      viewport={{ once: true }}
      ref={ref}
      className={className}
    >
      {children}
    </motion.li>
  );
}
