"use client";

import { createContext, useContext, useState } from "react";

type TStateObject = { active: boolean; index: number };

type TActiveProjectContext = {
  modal: TStateObject;
  setModal: React.Dispatch<React.SetStateAction<TStateObject>>;
};

const ActiveProjectContext = createContext<
  TActiveProjectContext | null | undefined
>(null || undefined);

export default function ActiveProject({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const value = { modal, setModal };

  return (
    <ActiveProjectContext.Provider value={value}>
      {children}
    </ActiveProjectContext.Provider>
  );
}

export const useActiveProject = () => {
  const context = useContext(ActiveProjectContext);
  if (context === null || context === undefined) {
    throw new Error(
      "Use the useActiveProject hook within the ActiveProjectContext"
    );
  }
  return context;
};
