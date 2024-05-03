import { skills } from "@/constants";
import { Carousel } from "@/exports";
export default function Skills() {
  return (
    <Carousel>
      {skills.map((item) => (
        <li
          key={item.label}
          className="group flex items-center relative justify-center border border-stone-800 h-60 p-5"
        >
          <h3 className="group-hover:opacity-0 duration-500 ">
            <item.icon className="text-9xl" />
          </h3>
          <p className="absolute text-center text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-400 via-stone-300 to-stone-200  group-hover:opacity-100 opacity-0 duration-500">
            {item.label}
          </p>
        </li>
      ))}
    </Carousel>
  );
}
