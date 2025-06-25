import { createContext } from "react";

type MenuContextType = {
  activeMenu: string;
  showMenu: boolean;
  setShowMenu: (status: boolean) => void
  setActiveMenu: (menu: string) => void;
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);
