"use client";
import { navbar } from "@/constants";
import { useActiveSection } from "@/context/ActiveSection";
import {
  useInView,
  motion,
  Variants,
  MotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  id: (typeof navbar)[number]["id"];
  children: Readonly<React.ReactNode>;
  scrollYProgress: MotionValue<number>;
  index: number;
};

const textVariants: Variants = {
  fade: {
    opacity: 1,
  },
  hide: { opacity: 0 },
};

export default function Section({
  id,
  children,
  scrollYProgress,
  index,
}: Props) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  const { setActive } = useActiveSection();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    amount: id === "projects" ? 0.1 : 0.3,
  });
  useEffect(() => {
    if (isInView) {
      setActive(id);
    }
  }, [isInView, id, setActive]);
  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ top: `${index * 100 + "dvh"}`, scale, rotate }}
      className={`w-full sticky flex items-center justify-center px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20 ${
        id !== "projects" ? "h-dvh" : "h-fit scroll-mt-40"
      }`}
    >
      <article className="container flex items-center justify-center flex-col gap-10 h-full">
        {id !== "home" && (
          <motion.h2
            initial="hide"
            whileInView="fade"
            viewport={{ once: true }}
            variants={textVariants}
            transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
            className="font-medium capitalize text-stone-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
          >
            {id.split("").map((item) => (
              <motion.span key={item} variants={textVariants}>
                {item}
              </motion.span>
            ))}
          </motion.h2>
        )}
        {children}
      </article>
    </motion.section>
  );
}
