"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Carousel({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const carouselWidth = carouselRef.current?.scrollWidth ?? 0;
    const innerCarouselWidth = carouselRef.current?.offsetWidth ?? 0;
    setWidth(carouselWidth - innerCarouselWidth);
  }, []);
  return (
    <div
      className="overflow-hidden w-full flex items-center justify-center flex-col gap-5 xl:gap-10"
      role="carousel"
      ref={carouselRef}
    >
      <motion.ul
        className="cursor-grab flex items-center justify-center gap-10 w-full"
        role="inner-carousel"
        drag={"x"}
        dragConstraints={{ right: width, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </motion.ul>
      <h4 className="flex items-center justify-center gap-5">
        <FaArrowLeft /> Swipe <FaArrowRight />
      </h4>
    </div>
  );
}
