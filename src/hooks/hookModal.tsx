import { useContext } from "react"
import { ModalContext } from "../context/modal/ModalContent"

export const useModal = () => {
    const context = useContext(ModalContext)
    if(!context){
        throw new Error("Error al cargar el contexto Modal")
    }
    return context
}