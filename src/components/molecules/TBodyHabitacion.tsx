import type { IHabitacion } from "../../types/Habitacion.type";
import CheckBoxTable from "../atoms/CheckBoxTable";
import ActionsTable from "./ActionsTable";

export default function TBodyHabitacion({docs,actual,checkGlobal,handleCountChecked}:{docs:Array<IHabitacion>,actual:number,checkGlobal:boolean,handleCountChecked:(value:number) => void}){
    /*
    const handleStatusStyle = (value:string) => {
        switch(value){
            case 'aceptada': return 'statusEmpleadoActivo';
            case 'cancelada': return 'statusEmpleadoInactivo';
            case 'pendiente': return 'statusEmpleadoSuspendido';
            case 'en curso': return 'statusMorado';
            default: throw new Error("Status Reserva Invalido")
        }
    }*/
    
    return <>
        <tbody> 
            {docs.slice(actual - 10,actual).map((registro:IHabitacion,index:number) => (
                <tr key={index}>
                    <CheckBoxTable key={index+1} checkGlobal={checkGlobal} handleCountChecked={handleCountChecked} />
                    <td className="contentCelda pd-1">
                        <img className="photoPerfil" src={undefined} alt="" />
                        <span>{registro.nombre}</span>
                    </td>
                    <td className="pd-1">
                        { registro.categoria}
                    </td>
                    <td className="pd-1">
                        {registro.piso}
                    </td>
                    <td className="pd-1">
                        {registro.descripcion}
                    </td>
                    <td className="pd-1">
                        {registro.precio.toFixed(2)}€
                    </td>
                    <td className="pd-1">
                        {registro.oferta.toFixed()}%
                    </td>
                    <td>
                        <ActionsTable />
                    </td>
                </tr>
            ))}
        </tbody>
    </>
}

/**
 * <td>
        <div className={`tagStatusEmpleadoTable ${handleStatusStyle(registro.estado)}`}>{registro.estado}</div>
    </td>
 */