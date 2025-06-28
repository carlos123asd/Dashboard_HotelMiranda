import { useState } from "react"
import { MenuTableContext } from "./MenuTableContent"

export const MenuTableProvider = ({children}:{children:React.ReactNode}) => {
    const [menuActive,setMenuActive] = useState<string>("Todos")

    return <>
        <MenuTableContext.Provider value={{menuActive,setMenuActive}}>
            {children}
        </MenuTableContext.Provider>
    </>
}