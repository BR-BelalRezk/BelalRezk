import { certificates } from "@/constants";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Carousel } from "@/exports";
import HoverButton from "../shared/HoverButton";
export default function Certificates() {
  return (
    <Carousel>
      {certificates.map((item, index) => (
        <li
          key={item.label}
          className="flex items-center rounded-lg justify-center flex-col sm:flex-row border border-stone-800"
        >
          <figure className="w-80 h-60 sm:w-96">
            <Image
              src={item.img}
              alt={item.label}
              className="w-full pointer-events-none h-full rounded-t-lg sm:rounded-tr-none sm:rounded-bl-lg"
            />
          </figure>
          <div className="p-3 flex items-center justify-center flex-col gap-3 sm:gap-5">
            <div className="flex items-center justify-between w-full sm:justify-center sm:gap-10">
              <h3>
                <item.icon className="text-5xl text-stone-700" />
              </h3>
              <HoverButton
                delay={index}
                className="px-5 py-2.5"
                text="check it out"
                download={false}
                href={item.link}
                Icon={HiOutlineExternalLink}
              />
            </div>
            <p className="text-center max-w-80 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-stone-400 via-stone-300 to-stone-200">
              {item.label}
            </p>
          </div>
        </li>
      ))}
    </Carousel>
  );
}
