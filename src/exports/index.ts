import dynamic from "next/dynamic";

const SplineCubes = dynamic(
  () =>
    import("@/components/content/home/Hero").then(
      (module) => module.SplineCubes
    ),
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

const ActiveSection = dynamic(() => import("@/context/ActiveSection"));
const ActiveProject = dynamic(() => import("@/context/ActiveProject"));

const About = dynamic(() => import("@/components/content/About"));
const Project = dynamic(() => import("@/components/content/projects/Project"));
const Modal = dynamic(() => import("@/components/content/projects/Modal"));

const Carousel = dynamic(() => import("@/components/shared/Carousel"));
const Magnetic = dynamic(() => import("@/components/shared/Magnetic"));
const Section = dynamic(() => import("@/components/shared/Section"));

export {
  Project,
  Modal,
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
  About,
  Section,
  ActiveProject,
};
