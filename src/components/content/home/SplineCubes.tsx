"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <p>3D CUBES</p>,
});
export default function SplineCubes() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 3, delay: 5 }}
    >
      <Spline scene="/models/scene.splinecode" />
    </motion.div>
  );
}
