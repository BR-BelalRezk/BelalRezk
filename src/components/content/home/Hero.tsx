"use client";
import { Variants, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <p>3D CUBES</p>,
});

type Text = {
  className: string;
  children: Readonly<React.ReactNode>;
};
const preVariants: Variants = {
  fade: {
    opacity: 1,
  },
  hide: { opacity: 0 },
};

const PRE = ({ text, className }: { className: string; text: string }) => {
  return (
    <motion.pre
      initial="hide"
      animate="fade"
      variants={preVariants}
      transition={{ staggerChildren: 0.1, delayChildren: 1.5 }}
      className={className}
    >
      {text.split("").map((item) => (
        <motion.span variants={preVariants} key={item}>
          {item}
        </motion.span>
      ))}
    </motion.pre>
  );
};
const H1 = ({ className, children }: Text) => {
  return (
    <motion.h1
      initial={{ y: 300 }}
      animate={{
        y: 0,
        transition: { delay: 2, duration: 1.5, ease: [0.6, 0.01, -0.05, 0.95] },
      }}
      className={className}
    >
      {children}
    </motion.h1>
  );
};

const HeroP = ({ children, className }: Text) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5, duration: 1, ease: "linear" }}
    >
      {children}
    </motion.p>
  );
};

const SplineCubes = () => {
  return (
    <Suspense fallback={<p>3D CUBES</p>}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 5 }}
      >
        <Spline scene="/models/scene.splinecode" />
      </motion.div>
    </Suspense>
  );
};

export { H1, PRE, HeroP, SplineCubes };
