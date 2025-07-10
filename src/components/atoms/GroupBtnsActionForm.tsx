import { postAddDocEmpleado } from "../../features/thunks/postAddDocEmpleado";
import { postAddDocHabitacion } from "../../features/thunks/postAddDocHabitacion";
import { postAddDocNota } from "../../features/thunks/postAddDocNota";
import { postAddDocReserva } from "../../features/thunks/postAddDocReserva";
import { putDocEmpleado } from "../../features/thunks/putDocEmpleado";
import { putDocHabitacion } from "../../features/thunks/putDocHabitacion";
import { putDocNota } from "../../features/thunks/putDocNota";
import { putDocReserva } from "../../features/thunks/putDocReserva";
import { useModal } from "../../hooks/hookModal";
import type { empleado } from "../../types/Empleado.type";
import type { IHabitacion } from "../../types/Habitacion.type";
import type { Notas } from "../../types/Notas.type";
import type { Reserva } from "../../types/Reserva.type";
import { PrepararDTOEmpleadoFinal, PrepararDTOModEmpleadoFinal, ValidacionEmpleado } from "../../utils/validations/ValidacionEmpleado";
import { PrepararDTOHabitacionFinal, PrepararDTOModHabitacionFinal, ValidacionHabitacion } from "../../utils/validations/ValidacionHabitacion";
import { PrepararDTOModNotaFinal, PrepararDTONotaFinal, ValidacionNota } from "../../utils/validations/ValidacionNotas";
import { PrepararDTOModReservaFinal, PrepararDTOReservaFinal, ValidacionReserva } from "../../utils/validations/ValidacionReserva";

export default function GroupBtnsActionForm({dto,type,recargo}:{dto:object,type:"empleado"|"reserva"|"nota"|"habitacion",recargo?:number}){
   const {setShowModal,edit} = useModal()

    const handleDarAlta = () => {
        switch(type){
            case "empleado":
                if (ValidacionEmpleado(dto as empleado)) {
                    postAddDocEmpleado(PrepararDTOEmpleadoFinal(dto as empleado));
                }else{
                    console.log("DTO EMPLEADO INVALIDO CREAR TOAST")
                }
                break;
            case "habitacion": 
                if (ValidacionHabitacion(dto as IHabitacion)) {
                    postAddDocHabitacion(PrepararDTOHabitacionFinal(dto as IHabitacion));
                }else{
                    console.log("DTO HABITACION INVALIDO CREAR TOAST")
                }
                break;
            case "nota": 
                if (ValidacionNota(dto as Notas)) {
                    postAddDocNota(PrepararDTONotaFinal(dto as Notas));
                }else{
                    console.log("DTO NOTA INVALIDO CREAR TOAST")
                }
                break;
            case "reserva": 
                if (ValidacionReserva(dto as Reserva, recargo)) {
                    postAddDocReserva(PrepararDTOReservaFinal(dto as Reserva, recargo));
                }else{
                    console.log("DTO RESERVA INVALIDO CREAR TOAST")
                }
                break;
            default: throw new Error("Tipo de entidad invalidad para dar alta")
        }
    }

    const handleModificar = () => {
        switch(type){
            case "empleado":
                if (ValidacionEmpleado(dto as empleado)) {
                    putDocEmpleado(PrepararDTOModEmpleadoFinal(dto as empleado));
                }else{
                    console.log("DTO EMPLEADO INVALIDO CREAR TOAST")
                }
                break;
            case "habitacion": 
                if (ValidacionHabitacion(dto as IHabitacion)) {
                    putDocHabitacion(PrepararDTOModHabitacionFinal(dto as IHabitacion));
                }else{
                    console.log("DTO HABITACION INVALIDO CREAR TOAST")
                }
                break;
            case "nota": 
                if (ValidacionNota(dto as Notas)) {
                    putDocNota(PrepararDTOModNotaFinal(dto as Notas));
                }else{
                    console.log("DTO NOTA INVALIDO CREAR TOAST")
                }
                break;
            case "reserva": 
                if (ValidacionReserva(dto as Reserva, recargo)) {
                    putDocReserva(PrepararDTOModReservaFinal(dto as Reserva));
                }else{
                    console.log("DTO RESERVA INVALIDO CREAR TOAST")
                }
                break;
            default: throw new Error("Tipo de entidad invalidad para dar alta")
        }
    }
   
   return <>
        <div className="contentActionBtnsForm">
            <div className="contentBtnForm">
                <div onClick={() => setShowModal(false)} className="btnFormAction btnCancelForm">Cancelar</div>
                <div onClick={edit ? handleModificar : handleDarAlta} className="btnFormAction btnAddForm">{edit ? "Modificar" : "Dar alta"}</div>
            </div>
        </div>
    </>
}