import { postAddDocEmpleado } from "../../features/thunks/postAddDocEmpleado";
import { postAddDocHabitacion } from "../../features/thunks/postAddDocHabitacion";
import { postAddDocNota } from "../../features/thunks/postAddDocNota";
import { postAddDocReserva } from "../../features/thunks/postAddDocReserva";
import { useModal } from "../../hooks/hookModal";
import type { empleado } from "../../types/Empleado.type";
import { PrepararDTOEmpleadoFinal, ValidacionEmpleado } from "../../utils/validations/ValidacionEmpleado";

export default function GroupBtnsActionForm({dto,type}:{dto:object,type:"empleado"|"reserva"|"nota"|"habitacion"}){
   const {setShowModal} = useModal()

    const handleDarAlta = () => {
        switch(type){
            case "empleado":
                if (ValidacionEmpleado(dto as empleado)) {
                    postAddDocEmpleado(PrepararDTOEmpleadoFinal(dto as empleado));
                }else{
                    console.log("DTO EMPLEADO INVALIDO CREAR TOAST")
                }
                break;
            case "habitacion": postAddDocHabitacion(dto);break;
            case "nota": postAddDocNota(dto);break;
            case "reserva": postAddDocReserva(dto);break;
            default: throw new Error("Tipo de entidad invalidad para dar alta")
        }
    }
   
   return <>
        <div className="contentActionBtnsForm">
            <div className="contentBtnForm">
                <div onClick={() => setShowModal(false)} className="btnFormAction btnCancelForm">Cancelar</div>
                <div onClick={handleDarAlta} className="btnFormAction btnAddForm">Dar alta</div>
            </div>
        </div>
    </>
}