import { IoMdAdd } from "react-icons/io";
import { useModal } from "../../hooks/hookModal";
export default function BtnAddDoc({nombre}:{nombre:string}){
    const {setTypeForm,setShowModal,setEdit,setLoadDTO} = useModal()

    const handleAdd = () => {
        switch(nombre){
            case "empleados": setTypeForm("empleados");setShowModal(true);setEdit(false);setLoadDTO(null);break;
            case "reservas": setTypeForm("reservas");setShowModal(true);setEdit(false);setLoadDTO(null);break;
            case "notas": setTypeForm("notas");setShowModal(true);setEdit(false);setLoadDTO(null);break;
            case "habitaciones": setTypeForm("habitaciones");setShowModal(false);setEdit(false);setLoadDTO(null);break;
            default: throw new Error("Opcion invalida para modal, ADD doc")
        }
    }

    return <>
        <div onClick={handleAdd} className="btnAddDoc">
            <IoMdAdd size={20} color="#fff"/>
            <span>Añadir {nombre}</span>
        </div>
    </>
}