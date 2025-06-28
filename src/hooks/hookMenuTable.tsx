import { useContext } from "react"
import { MenuTableContext } from "../context/menuTable/MenuTableContent"

export const useMenuTable = () => {
    const context = useContext(MenuTableContext)
    if(!context){
        throw new Error("Error al cargar el contexto Menu table")
    }
    return context
}