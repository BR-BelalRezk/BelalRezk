"use client";
import { useActiveProject } from "@/context/ActiveProject";

type Props = {
  children: Readonly<React.ReactNode>;
  index: number;
  className: string;
};

export default function Project({ index, children, className }: Props) {
  const { setModal } = useActiveProject();
  return (
    <div
      onMouseLeave={() =>
        setModal((prevState) => ({
          ...prevState,
          active: false,
          index: index,
        }))
      }
      onMouseEnter={() =>
        setModal((prevState) => ({
          ...prevState,
          active: true,
          index: index,
        }))
      }
      className={className}
    >
      {children}
    </div>
  );
}
