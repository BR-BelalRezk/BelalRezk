"use client";
import { cloneElement, useState } from "react";
import { projects } from "@/constants";
import ProjectWrapper from "./ProjectWrapper";
import Modal from "./Modal";

export default function ProjectContent({
  children,
  project,
}: {
  children: Readonly<React.ReactNode>;
  project: Readonly<React.ReactElement>;
}) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <>
      <div className="w-full relative">
        {projects.map((item, index) => (
          <ProjectWrapper
            key={item.label}
            index={index}
            setModal={setModal}
            className="group hover:opacity-50 duration-500 border-t border-stone-800 last-of-type:border-b"
          >
            {cloneElement(project, { item })}
          </ProjectWrapper>
        ))}
      </div>
      <Modal modal={modal}>{children}</Modal>
    </>
  );
}
