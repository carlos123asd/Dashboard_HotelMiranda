import { createContext } from "react";

type MenuContextType = {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);
