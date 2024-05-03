import Link from "next/link";
import { IconType } from "react-icons";
import { Magnetic } from "@/exports";
export default function HoverButton({
  href,
  Icon,
  text,
  download,
  className,
  delay,
}: {
  href: string;
  Icon: IconType;
  text: string;
  download: boolean;
  className: string;
  delay: number;
}) {
  return (
    <Magnetic delay={delay}>
      <Link
        href={href}
        download={download}
        target="_blank"
        className={`${className} capitalize z-30 group relative overflow-hidden bg-stone-800 rounded-full flex items-center justify-center`}
      >
        {text}
        <Icon
          style={{ transition: "top 0.3s cubic-bezier(0.33,1,0.68,1)" }}
          className={`${className} bg-stone-100/50 backdrop-blur-sm z-50 text-stone-900 rounded-full group-hover:top-0  absolute top-[110%] w-full h-full`}
        />
      </Link>
    </Magnetic>
  );
}
