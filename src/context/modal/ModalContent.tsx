import { createContext } from "react"

type contextModal = {
    showModal: boolean,
    typeForm: string,
    edit: boolean,
    loadDTO: object | null,
    setLoadDTO: (value:object|null) => void
    setShowModal: (value:boolean) => void,
    setTypeForm: (value:string) => void,
    setEdit: (value:boolean) => void
}

export const ModalContext = createContext<contextModal | undefined>(undefined)