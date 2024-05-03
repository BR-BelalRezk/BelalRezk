import { contacts } from "@/constants";
import Link from "next/link";
import { Magnetic } from "@/exports";

export default function Footer() {
  return (
    <footer className="w-full border-t border-stone-900 mt-20 p-5 flex items-center justify-center flex-col gap-5">
      <ul className="flex items-center justify-center gap-5 sm:gap-10">
        {contacts.map((item, index) => (
          <Magnetic
            key={item.url}
            delay={index * 0.1}
            className="h-10 w-10 p-5 rounded-full border border-stone-500 flex items-center justify-center"
          >
            <Link href={item.url} target="_blank" aria-label="contact link">
              <item.icon className="text-2xl" />
            </Link>
          </Magnetic>
        ))}
      </ul>
      <pre className="text-center text-stone-300 text-sm">
        Copyright&copy; {new Date().getFullYear()} BelalRezk.
        <br />
        All rights reserved
      </pre>
    </footer>
  );
}
