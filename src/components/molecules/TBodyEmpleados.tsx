import type { empleado } from "../../types/Empleado.type";
import { BsTelephoneFill } from "react-icons/bs";
import ActionsTable from "../molecules/ActionsTable";

export default function TBodyEmpleados({docs,actual}:{docs:Array<empleado>,actual:number}){
    console.log(actual)
    const handleStatusStyle = (value:string) => {
        switch(value){
            case 'activo': return 'statusEmpleadoActivo';
            case 'inactivo': return 'statusEmpleadoInactivo';
            case 'suspendido': return 'statusEmpleadoSuspendido';
            default: throw new Error("Status Empleado Invalido")
        }
    }

    return <>
        <tbody> 
            {docs.slice(actual - 10,actual).map((registro:empleado,index:number) => (
                <tr key={index}>
                    <td><input className="checkboxTable" type="checkbox" name="" id="" /></td>
                    <td className="contentCelda pd-1">
                        <img className="photoPerfil" src={registro.photo} alt="" />
                        <span>{registro.nombre}</span>
                    </td>
                    <td className="pd-1">
                        {registro.rol.permisos[0].descripcion}
                    </td>
                    <td className="pd-1">
                        {registro.startDate}
                    </td>
                    <td className="pd-1">
                        <BsTelephoneFill />
                        <span style={{marginLeft:"1em"}}>{registro.telefono}</span>
                    </td>
                    <td>
                        <div className={`tagStatusEmpleadoTable ${handleStatusStyle(registro.status)}`}>{registro.status}</div>
                    </td>
                    <td>
                        <ActionsTable />
                    </td>
                </tr>
            ))}
        </tbody>
    </>
}