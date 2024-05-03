"use client";
import { Variants, motion } from "framer-motion";

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

export { H1, PRE, HeroP };
