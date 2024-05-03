"use client";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });
  const text =
    "Welcome to my portfolio. I'm Belal Rezk, a 20 years old Frontend developer based in Egypt, Beni-Suef with a relentless drive for excellence, skilled in creating and maintaining functional and responsive web applications and websites. Proficient in the latest web technologies and frameworks , continuously expanding my skill set to stay at the forefront of the industry.";
  const words = text.split(" ");

  return (
    <p
      ref={container}
      className="flex gap-2.5 justify-center flex-wrap text-sm sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl text-center"
    >
      {words?.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: Readonly<React.ReactNode>;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative">
      <span className="absolute opacity-5">{children}</span>
      <motion.span style={{ opacity, transition: "opacity 0.2s linear" }}>
        {children}
      </motion.span>
    </span>
  );
};
