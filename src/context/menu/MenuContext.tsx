import { createContext } from "react";

type MenuContextType = {
  showMenu: boolean;
  setShowMenu: (status: boolean) => void
};

export const MenuContext = createContext<MenuContextType | undefined>(undefined);
