import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  return (
    <header className="w-full backdrop-blur-sm flex items-center justify-center fixed py-5 lg:pt-10 z-50 px-5 sm:px-7 md:px-10 lg:px-14 xl:px-20">
      <nav className="container flex items-center justify-between relative">
        <Link href={"#home"} aria-label="logo">
          <Logo />
        </Link>
        <MobileNav />
        <DesktopNav />
      </nav>
    </header>
  );
}
