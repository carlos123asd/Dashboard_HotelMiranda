import { useState } from "react"
import { ModalContext } from "./ModalContent"

export const ModalProvider = ({children}:{children:React.ReactNode}) => {
    const [showModal,setShowModal] = useState<boolean>(false)
    const [typeForm,setTypeForm] = useState<string>("");
    const [edit,setEdit] = useState<boolean>(false);
    const [loadDTO,setLoadDTO] = useState<object | null>(null)

    return <>
        <ModalContext.Provider value={{showModal,setShowModal,typeForm,setTypeForm,edit,setEdit,loadDTO,setLoadDTO}}>
            {children}
        </ModalContext.Provider>
    </>
}