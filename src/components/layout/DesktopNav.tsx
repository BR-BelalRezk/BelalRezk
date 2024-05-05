import { Menu, MenuList, MenuListItem } from "@/exports";
import { navbar } from "@/constants";
export default function DesktopNav() {
  return (
    <div className="relative hidden lg:block">
      <Menu id="desktop">
        <MenuList
          className="flex p-1.5 justify-center items-center capitalize overflow-hidden border border-stone-800 text-stone-100  gap-3  text-sm"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0%)",
              borderRadius: 9999,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                delayChildren: 0.75,
                staggerChildren: 0.05,
              },
            },
            close: {
              clipPath: "inset(10% 50% 90% 50%)",
              borderRadius: 9999,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
          }}
        >
          {navbar.map((item) => (
            <MenuListItem
              key={item.id}
              layoutId={'desktop'}
              label={item.id}
              className="w-full relative px-2.5 py-1 flex items-center justify-center"
            >
              {item.id}
            </MenuListItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
