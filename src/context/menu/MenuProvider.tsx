import { useState } from "react"
import { MenuContext } from "./MenuContext"

export const MenuProvider = ({children}:{children:React.ReactNode}) =>  {
    const [activeMenu,setActiveMenu] = useState("home")

    return (
        <MenuContext.Provider value={{activeMenu,setActiveMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

