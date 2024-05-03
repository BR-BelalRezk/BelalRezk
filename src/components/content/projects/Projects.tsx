"use client";
import { useState } from "react";
import { projects } from "@/constants";
import Project from "./Project";
import Modal from "./Modal";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <div className="w-full relative">
        {projects.map((item, index) => (
          <Project
            key={item.label}
            index={index}
            setModal={setModal}
            className="group border-t border-stone-800 last-of-type:border-b"
          >
            <Link
              href={item.demo}
              target="_blank"
              className="group-hover:text-stone-700 duration-500 flex items-center py-10 px-5 sm:px-10 sm:py-20 justify-center flex-col gap-5 sm:gap-0 sm:justify-center sm:flex-row w-full"
            >
              <figure className="sm:hidden">
                <Image
                  src={item.img}
                  alt={item.label}
                  className="object-cover aspect-video object-center"
                />
              </figure>
              <div className="w-full flex items-center justify-center flex-col sm:flex-row sm:justify-between gap-1.5 sm:gap-0">
                <h3 className="text-3xl sm:group-hover:translate-x-3 duration-500">
                  {item.label}
                </h3>
                <p className="sm:group-hover:-translate-x-3 duration-500 text-center text-xs lg:text-sm sm:w-60 lg:w-96">
                  {item.desc}
                </p>
              </div>
            </Link>
          </Project>
        ))}
      </div>
      <Modal active={modal.active} icon={<HiOutlineExternalLink />}>
        <div
          className="w-full h-full absolute"
          style={{
            top: modal.index * -100 + "%",
            transition: "top 0.5s cubic-bezier(0.76 , 0 , 0.24 , 1)",
          }}
        >
          {projects.map((item) => (
            <figure
              key={item.desc}
              className="relative h-full flex items-center justify-center p-5 bg-stone-500"
            >
              <Image
                className="h-auto w-auto aspect-video object-cover object-center"
                height={0}
                width={0}
                src={item.img}
                alt={item.label}
              />
            </figure>
          ))}
        </div>
      </Modal>
    </>
  );
}
