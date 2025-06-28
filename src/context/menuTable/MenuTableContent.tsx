import { createContext } from "react";

type contextMenuTable = {
    menuActive: string,
    setMenuActive: (value:string) => void
}

export const MenuTableContext = createContext<contextMenuTable | undefined>(undefined)