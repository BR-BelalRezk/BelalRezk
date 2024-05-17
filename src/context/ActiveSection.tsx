"use client";
import { navbar } from "@/constants";
import { createContext, useContext, useState } from "react";

type TActiveSection = (typeof navbar)[number]["id"];

type TActiveSectionContext = {
  active: TActiveSection;
  setActive: React.Dispatch<React.SetStateAction<TActiveSection>>;
};
const ActiveSectionContext = createContext<
  TActiveSectionContext | null | undefined
>(null || undefined);

export default function ActiveSection({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const [active, setActive] = useState<TActiveSection>("home");
  const value = {
    active,
    setActive,
  };
  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null || context === undefined) {
    throw new Error(
      "Use the useActiveSection hook within the ActiveSectionContext"
    );
  }
  return context;
};
