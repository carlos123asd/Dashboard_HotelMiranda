import type { Notas } from "../../types/Notas.type";
import CheckBoxTable from "../atoms/CheckBoxTable";
import ActionsTable from "./ActionsTable";

export default function TBodyNotas({docs,actual,checkGlobal,handleCountChecked}:{docs:Array<Notas>,actual:number,checkGlobal:boolean,handleCountChecked:(value:number) => void}){
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
            {docs.slice(actual - 10,actual).map((registro:Notas,index:number) => (
                <tr key={index}>
                    <CheckBoxTable key={index+1} checkGlobal={checkGlobal} handleCountChecked={handleCountChecked} />
                    <td className="contentCelda pd-1">
                        <img className="photoPerfil" src={registro.responsable.photo} alt="" />
                        <span>{registro.responsable.nombre}</span>
                    </td>
                    <td className="pd-1">
                        { registro.tipo }
                    </td>
                    <td className="pd-1">
                        {registro.fecha.split('T')[0].split('-').reverse().join('-')}
                    </td>
                    {
                        (registro.tipo === 'Habitacion') && 
                        <>
                            <td className="pd-1">
                                { registro.habitacion?.nombre }
                            </td>
                            <td className="pd-1">
                                { registro.habitacion?.codigo }
                            </td>
                            <td className="pd-1">
                                { registro.habitacion?.piso }
                            </td>
                            <td className="pd-1">
                                { registro.habitacion?.categoria }
                            </td>
                        </>
                    }
                    {
                        (registro.tipo === 'Cliente') && 
                        <>
                            <td className="pd-1">
                                { registro.cliente?.nombre }
                            </td>
                            <td className="pd-1">
                                { registro.cliente?.email }
                            </td>
                            <td className="pd-1">
                                { registro.cliente?.direccion }
                            </td>
                        </>
                    }
                    {
                        (registro.tipo === 'Reserva') && 
                        <>
                            <td className="pd-1">
                                { registro.reserva?.asignacion.nombre }
                            </td>
                            <td className="pd-1">
                                { registro.reserva?.habitacion.nombre }
                            </td>
                            <td>
                                <div className={`tagStatusEmpleadoTable ${handleStatusStyle(registro.reserva?.estado ?? '')}`}>{registro.reserva?.estado}</div>
                            </td>
                        </>
                    }
                    <td>
                        <ActionsTable dto={registro} nombre="notas" />
                    </td>
                </tr>
            ))}
        </tbody>
    </>
}