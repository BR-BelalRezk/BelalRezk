import { Menu, MenuList, MenuListItem, MenuToggleButton } from "@/exports";
import { navbar } from "@/constants";
import Hamburger from "./Hamburger";
export default function MobileNav() {
  return (
    <Menu id="mobile">
      <MenuToggleButton className="relative flex items-center justify-center flex-col gap-1 h-10 w-10 rounded-full z-40">
        <Hamburger />
      </MenuToggleButton>
      <MenuList
        variants={{
          open: {
            width: 250,
            height: 300,
            borderRadius: 25,
            transition: {
              duration: 0.75,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
              delayChildren: 0.75,
              staggerChildren: 0.05,
            },
          },
          close: {
            width: 40,
            height: 40,
            borderRadius: 25,
            transition: {
              duration: 0.75,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            },
          },
        }}
        className="p-5 font-semibold gap-3 top-0 right-0 bg-stone-100 absolute capitalize flex items-start justify-center flex-col text-stone-900"
      >
        {navbar.map((item) => (
          <MenuListItem
            key={item.id}
            label={item.id}
            className="w-full flex items-center justify-between"
          >
            {item.id}
          </MenuListItem>
        ))}
      </MenuList>
    </Menu>
  );
}
