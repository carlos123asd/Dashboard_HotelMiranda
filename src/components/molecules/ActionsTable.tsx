import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useModal } from "../../hooks/hookModal";
import { PrepararDTODeleteEmpleadoFinal } from "../../utils/validations/ValidacionEmpleado";
import { PrepararDTODeleteReservaFinal } from "../../utils/validations/ValidacionReserva";
import { PrepararDTODeleteNotaFinal } from "../../utils/validations/ValidacionNotas";
import { PrepararDTODeleteHabitacionFinal } from "../../utils/validations/ValidacionHabitacion";
import { deleteDocEmpleado } from "../../features/thunks/deleteDocEmpleado";
import type { empleado } from "../../types/Empleado.type";
import type { Reserva } from "../../types/Reserva.type";
import type { Notas } from "../../types/Notas.type";
import type { IHabitacion } from "../../types/Habitacion.type";
import type { DepsReserva } from "../../types/DepsReserva";

export default function ActionsTable({dto,nombre,depExtra}:{dto:object,nombre:string,depExtra?:DepsReserva}){
    const {setTypeForm,setShowModal,setEdit,setLoadDTO} = useModal()
    const handleEdit = () => {
        switch(nombre){
            case "empleados": setTypeForm("empleados");setShowModal(true);setEdit(true);setLoadDTO(dto);break;
            case "reservas": setTypeForm("reservas");setShowModal(true);setEdit(true);setLoadDTO({dto:dto,depExtra:depExtra});break;
            case "notas": setTypeForm("notas");setShowModal(true);setEdit(true);setLoadDTO(dto);break;
            case "habitaciones": setTypeForm("habitaciones");setEdit(true);setEdit(true);setLoadDTO(dto);break;
            default: throw new Error("Opcion invalida para modal, ADD doc")
        }
    }

    const handleDelete = () => {
        switch(nombre){
            case "empleados": deleteDocEmpleado(PrepararDTODeleteEmpleadoFinal(dto as empleado));break;
            case "reservas": deleteDocEmpleado(PrepararDTODeleteReservaFinal(dto as Reserva));break;
            case "notas": deleteDocEmpleado(PrepararDTODeleteNotaFinal(dto as Notas));break;
            case "habitaciones": deleteDocEmpleado(PrepararDTODeleteHabitacionFinal(dto as IHabitacion));break;
            default: throw new Error("Opcion invalida para eliminar, doc")
        }
    }

    return <>
        <div className="tdActions">
            <MdOutlineEdit onClick={handleEdit} size={30}  />
            <MdDeleteOutline onClick={handleDelete} size={30} color="#DE524D"  />
        </div>
    </>
}