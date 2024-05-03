import dynamic from "next/dynamic";

const Menu = dynamic(() =>
  import("@/components/layout/Menu").then((module) => module.Menu)
);
const MenuToggleButton = dynamic(() =>
  import("@/components/layout/Menu").then((module) => module.MenuToggleButton)
);
const MenuList = dynamic(() =>
  import("@/components/layout/Menu").then((module) => module.MenuList)
);
const MenuListItem = dynamic(() =>
  import("@/components/layout/Menu").then((module) => module.MenuListItem)
);

const About = dynamic(() => import("@/components/content/About"));
const ActiveSection = dynamic(() => import("@/context/ActiveSection"));
const Carousel = dynamic(() => import("@/components/shared/Carousel"));
const Magnetic = dynamic(() => import("@/components/shared/Magnetic"));
const Section = dynamic(() => import("@/components/shared/Section"));

const SplineCubes = dynamic(
  () => import("@/components/content/home/SplineCubes"),
  { ssr: false }
);
const H1 = dynamic(() =>
  import("@/components/content/home/Hero").then((module) => module.H1)
);
const PRE = dynamic(() =>
  import("@/components/content/home/Hero").then((module) => module.PRE)
);
const HeroP = dynamic(() =>
  import("@/components/content/home/Hero").then((module) => module.HeroP)
);
const Projects = dynamic(
  () => import("@/components/content/projects/Projects")
);
export {
  Menu,
  MenuToggleButton,
  MenuList,
  MenuListItem,
  SplineCubes,
  H1,
  PRE,
  HeroP,
  ActiveSection,
  Carousel,
  Magnetic,
  Section,
  About,
  Projects,
};
