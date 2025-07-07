import { useState } from "react"
import { ModalContext } from "./ModalContent"

export const ModalProvider = ({children}:{children:React.ReactNode}) => {
    const [showModal,setShowModal] = useState<boolean>(false)
    const [typeForm,setTypeForm] = useState<string>("");

    return <>
        <ModalContext.Provider value={{showModal,setShowModal,typeForm,setTypeForm}}>
            {children}
        </ModalContext.Provider>
    </>
}