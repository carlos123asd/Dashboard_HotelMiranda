import { createContext } from "react"

type contextModal = {
    showModal: boolean,
    typeForm: string,
    setShowModal: (value:boolean) => void,
    setTypeForm: (value:string) => void
}

export const ModalContext = createContext<contextModal | undefined>(undefined)