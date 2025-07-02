import type { Reserva } from "../../types/Reserva.type";
import CheckBoxTable from "../atoms/CheckBoxTable";
import ActionsTable from "./ActionsTable";

export default function TBodyReservas({docs,actual,checkGlobal,handleCountChecked}:{docs:Array<Reserva>,actual:number,checkGlobal:boolean,handleCountChecked:(value:number) => void}){
    const handleStatusStyle = (value:string) => {
        switch(value){
            case 'aceptada': return 'statusEmpleadoActivo';
            case 'cancelada': return 'statusEmpleadoInactivo';
            case 'pendiente': return 'statusEmpleadoSuspendido';
            case 'en curso': return 'statusMorado';
            default: throw new Error("Status Reserva Invalido")
        }
    }

    return <>
        <tbody> 
            {docs.slice(actual - 10,actual).map((registro:Reserva,index:number) => (
                <tr key={index}>
                    <CheckBoxTable key={index+1} checkGlobal={checkGlobal} handleCountChecked={handleCountChecked} />
                    <td className="contentCelda pd-1">
                        <img className="photoPerfil" src={undefined} alt="" />
                        <span>{registro.asignacion.nombre}</span>
                    </td>
                    <td className="pd-1">
                        FECHA DE REGISTRO
                    </td>
                    <td className="pd-1">
                        {registro.checkIn.split('T')[0].split('-').reverse().join('-')}
                    </td>
                    <td className="pd-1">
                        {registro.checkOut.split('T')[0].split('-').reverse().join('-')}
                    </td>
                    <td className="pd-1">
                        FALTA PETICION DEL CLIENTE
                    </td>
                    <td className="pd-1">
                        {registro.habitacion.categoria}
                    </td>
                    <td>
                        <div className={`tagStatusEmpleadoTable ${handleStatusStyle(registro.estado)}`}>{registro.estado}</div>
                    </td>
                    <td>
                        <ActionsTable />
                    </td>
                </tr>
            ))}
        </tbody>
    </>
}