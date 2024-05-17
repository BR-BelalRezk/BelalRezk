import { Variants, motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const scaleVariants: Variants = {
  open: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.5, ease: [0.32, 0, 0.67, 0] },
  },
};
export default function Modal({
  children,
  modal,
}: {
  children: Readonly<React.ReactNode>;
  modal: { active: boolean; index: number };
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const modalMoveX = gsap.quickTo(modalRef.current, "left", {
      duration: 1,
      ease: "power3",
    });
    const modalMoveY = gsap.quickTo(modalRef.current, "top", {
      duration: 1,
      ease: "power3",
    });
    const cursorMoveX = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.75,
      ease: "power3",
    });
    const cursorMoveY = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.75,
      ease: "power3",
    });
    window.addEventListener("mousemove", (e) => {
      modalMoveX(e.pageX);
      modalMoveY(e.pageY);
      cursorMoveX(e.pageX);
      cursorMoveY(e.pageY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={modalRef}
        variants={scaleVariants}
        animate={modal.active ? "open" : "close"}
        initial="close"
        className="h-52 w-80  items-center justify-center absolute overflow-hidden pointer-events-none hidden sm:flex"
      >
        <div
          className="w-full h-full absolute"
          style={{
            top: modal.index * -100 + "%",
            transition: "top 0.5s cubic-bezier(0.76 , 0 , 0.24 , 1)",
          }}
        >
          {children}
        </div>
      </motion.div>
      <motion.div
        ref={cursorRef}
        variants={scaleVariants}
        animate={modal.active ? "open" : "close"}
        initial="close"
        className="p-2.5 bg-stone-500 absolute rounded-full flex items-center justify-center pointer-events-none"
      >
        <HiOutlineExternalLink />
      </motion.div>
    </>
  );
}
