import { useState } from "react";

type TModal = { active: boolean; index: number };
type Props = {
  children: Readonly<React.ReactNode>;
  index: number;
  setModal: React.Dispatch<React.SetStateAction<TModal>>;
  className: string;
};

export default function Project({
  index,
  setModal,
  children,
  className,
}: Props) {
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
