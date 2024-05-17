import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Project({
  item,
}: {
  item?: (typeof projects)[number];
}) {
  return (
    <Link
      href={item?.demo ?? ""}
      target="_blank"
      className="flex items-center py-10 px-5 sm:px-10 sm:py-20 justify-center flex-col gap-5 sm:gap-0 sm:justify-center sm:flex-row w-full"
    >
      <figure className="sm:hidden">
        <Image
          src={item?.img ?? ""}
          alt={item?.label ?? ""}
          className="object-cover aspect-video object-center"
        />
      </figure>
      <div className="w-full flex items-center justify-center flex-col sm:flex-row sm:justify-between gap-1.5 sm:gap-0">
        <h3 className="text-3xl sm:group-hover:translate-x-3 duration-500">
          {item?.label}
        </h3>
        <p className="sm:group-hover:-translate-x-3 duration-500 text-center text-xs lg:text-sm sm:w-60 lg:w-96">
          {item?.desc}
        </p>
      </div>
    </Link>
  );
}
