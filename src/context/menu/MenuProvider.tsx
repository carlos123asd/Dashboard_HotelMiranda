import { useState } from "react"
import { MenuContext } from "./MenuContext"

export const MenuProvider = ({children}:{children:React.ReactNode}) =>  {
    const [showMenu,setShowMenu] = useState(true)

    return (
        <MenuContext.Provider value={{showMenu,setShowMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

