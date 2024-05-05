"use client";
/* Compound Components */

import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Variants, motion } from "framer-motion";
import { useActiveSection } from "@/context/ActiveSection";
import { navbar } from "@/constants";
import Link from "next/link";
import Active from "./Active";

type TMenuContext = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;

};

const MenuContext = createContext<TMenuContext | null | undefined>(
  null || undefined
);

const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === null || context === undefined) {
    throw new Error("Use the useMenu hook within the MenuContext");
  }
  return context;
};

const Menu = ({
  children,
  id,
}: {
  children: Readonly<React.ReactNode>;
  id: "mobile" | "desktop";
}) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (id === "desktop" && window.screen.width >= 1024) {
      setToggle(true);
    }
  }, [id]);
  const value = { toggle, setToggle };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

const MenuToggleButton = ({
  className,
  children,
}: {
  className: string;
  children: Readonly<React.ReactElement>;
}) => {
  const { toggle, setToggle } = useMenu();
  return (
    <motion.button
      animate={toggle ? { translateY: 5, translateX: -5 } : {}}
      transition={{ type: "tween", duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
      className={className}
      aria-label="menu toggle button"
      onClick={() => setToggle((prevState) => !prevState)}
    >
      {cloneElement(children, { toggle })}
    </motion.button>
  );
};

const MenuList = ({
  className,
  children,
  variants,
}: {
  className: string;
  children: Readonly<React.ReactNode>;
  variants: Variants;
}) => {
  const { toggle } = useMenu();
  return (
    <motion.ul
      variants={variants}
      initial={"close"}
      animate={toggle ? "open" : "close"}
      className={className}
    >
      {children}
    </motion.ul>
  );
};

const MenuListItem = ({
  children,
  className,
  label,
  layoutId
}: {
  children: Readonly<React.ReactNode>;
  className: string;
  label: (typeof navbar)[number]["id"];
  layoutId : 'mobile' | 'desktop'
}) => {
  const { active, setActive } = useActiveSection();
  return (
    <motion.li
      onClick={() => setActive(label)}
      className={`w-full ${
        label === active
          ? "text-stone-500 lg:text-stone-100"
          : "text-stone-900 lg:text-stone-100"
      }`}
      style={{ transition: "color 0.5s" }}
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 250, damping: 25 },
        },
        close: { opacity: 0, y: 25, transition: { duration: 0.5 } },
      }}
    >
      <Link className={className} href={`#${label}`}>
        {children}
        {active === label && (
          <Active
            layoutId={layoutId}
            className="h-3 w-3 rounded-full bg-stone-500 lg:h-auto lg:w-auto lg:bg-stone-700 lg:absolute lg:inset-0 lg:-z-50"
          />
        )}
      </Link>
    </motion.li>
  );
};

export { Menu, MenuToggleButton, MenuList, MenuListItem };
