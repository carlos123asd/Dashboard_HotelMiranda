import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useModal } from "../../hooks/hookModal";

export default function ActionsTable({nombre,dto}:{nombre:string,dto:object}){
    const {setTypeForm,setShowModal,setEdit,setLoadDTO} = useModal()

    const handleEdit = () => {
        switch(nombre){
            case "empleados": setTypeForm("empleados");setShowModal(true);setEdit(true);setLoadDTO(dto);break;
            case "reservas": setTypeForm("reservas");setShowModal(true);setEdit(true);setLoadDTO(dto);break;
            case "notas": setTypeForm("notas");setShowModal(true);setEdit(true);setLoadDTO(dto);break;
            case "habitaciones": setTypeForm("habitaciones");setEdit(true);setEdit(true);setLoadDTO(dto);break;
            default: throw new Error("Opcion invalida para modal, ADD doc")
        }
    }

    return <>
        <div className="tdActions">
            <MdOutlineEdit onClick={handleEdit} size={30}  />
            <MdDeleteOutline size={30} color="#DE524D"  />
        </div>
    </>
}