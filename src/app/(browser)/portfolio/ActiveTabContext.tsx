"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ActiveTabDetails {
  activeDesc: string;
  activeTech: string;
  setActiveDesc: (desc: string) => void;
  setActiveTech: (tech: string) => void;
}

const ActiveTabContext = createContext<ActiveTabDetails | undefined>(undefined);

export function useActiveTabDetails() {
  const context = useContext(ActiveTabContext);
  if (!context) {
    throw new Error(
      "useActiveTabDetails must be used with an ActiveTabProvider",
    );
  }
  return context;
}

interface ActiveTabProviderProps {
  children: ReactNode;
}

export const ActiveTabProvider = ({ children }: ActiveTabProviderProps) => {
  const [activeDesc, setActiveDesc] = useState("");
  const [activeTech, setActiveTech] = useState("");

  return (
    <ActiveTabContext.Provider
      value={{ activeDesc, activeTech, setActiveDesc, setActiveTech }}
    >
      {children}
    </ActiveTabContext.Provider>
  );
};
