import { useState } from "react"
import { MenuContext } from "./MenuContext"

export const MenuProvider = ({children}:{children:React.ReactNode}) =>  {
    const [activeMenu,setActiveMenu] = useState("Inicio")
    const [showMenu,setShowMenu] = useState(true)

    return (
        <MenuContext.Provider value={{activeMenu,showMenu,setActiveMenu,setShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

