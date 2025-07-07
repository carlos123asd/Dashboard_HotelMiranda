import { IoMdAdd } from "react-icons/io";
import { useModal } from "../../hooks/hookModal";
export default function BtnAddDoc({nombre}:{nombre:string}){
    const {setTypeForm,setShowModal} = useModal()

    const handleAdd = () => {
        switch(nombre){
            case "empleados": setTypeForm("empleados");setShowModal(true);break;
            case "reservas": setTypeForm("reservas");setShowModal(true);break;
            case "notas": setTypeForm("notas");setShowModal(true);break;
            case "habitaciones": setTypeForm("habitaciones");setShowModal(true);break;
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