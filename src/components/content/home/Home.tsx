import { FaArrowDownLong } from "react-icons/fa6";
import { H1, HeroP, PRE, SplineCubes } from "@/exports";
import HoverButton from "@/components/shared/HoverButton";

export default function Home() {
  return (
    <div className="w-full flex h-fit overflow-hidden items-center justify-center flex-col-reverse gap-5 md:gap-0  md:flex-row md:justify-between">
      <div className="flex items-center justify-center flex-col gap-1.5 md:items-start">
        <div className="flex items-start justify-center flex-col gap-0.5">
          <ul className="flex items-center justify-center gap-10 sm:gap-5">
            <PRE
              className="capitalize pl-0.5 sm:pl-1 lg:pl-1.5 xl:pl-2 2xl:pl-2.5 text-xl text-stone-300"
              text="belal rezk"
            />
            <HoverButton
              delay={1.5}
              className="px-3 py-1.5 text-sm"
              download
              text="resume"
              href=""
              Icon={FaArrowDownLong}
            />
          </ul>
          <H1 className="text-transparent bg-clip-text bg-gradient-to-r from-stone-200 via-stone-500 to-stone-800 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl capitalize">
            front-end dev
          </H1>
        </div>
        <HeroP className="text-transparent bg-clip-text bg-gradient-to-r from-stone-400 via-stone-300 to-stone-200 md:pl-1 lg:pl-1.5 xl:pl-2 2xl:pl-2.5 text-center md:text-left text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
          Elevating digital experiences through code.
          <br />
          Explore my portfolio to see innovation in action.
        </HeroP>
      </div>
      <SplineCubes />
    </div>
  );
}
