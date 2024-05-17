import { projects } from "@/constants";
import Image from "next/image";
import Project from "./Project";
import { ProjectContent } from "@/exports";

export default function Projects() {
  return (
    <ProjectContent project={<Project />}>
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
    </ProjectContent>
  );
}
