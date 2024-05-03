import { motion } from "framer-motion";

type Props = {
  layoutId: string;
  className: string;
};

export default function Active({ layoutId, className }: Props) {
  return (
    <motion.span
      layoutId={layoutId}
      className={className}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 25,
      }}
    />
  );
}
