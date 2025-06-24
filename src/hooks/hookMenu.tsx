import { useContext } from "react"
import { MenuContext } from "../context/menu/MenuContext"

export const useMenu = () => {
    const context = useContext(MenuContext)
    if(context === undefined){
        throw new Error ("useMenu no esta en MenuProvider")
    }
    return context
}