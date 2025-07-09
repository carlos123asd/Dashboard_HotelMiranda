import type { empleado } from "../../types/Empleado.type";
import { BsTelephoneFill } from "react-icons/bs";
import ActionsTable from "../molecules/ActionsTable";
import CheckBoxTable from "../atoms/CheckBoxTable";

export default function TBodyEmpleados({docs,actual,checkGlobal,handleCountChecked}:{docs:Array<empleado>,actual:number,checkGlobal:boolean,handleCountChecked:(value:number) => void}){
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
                    <CheckBoxTable key={index+1} checkGlobal={checkGlobal} handleCountChecked={handleCountChecked} />
                    <td className="contentCelda pd-1">
                        <img className="photoPerfil" src={registro.photo} alt="" />
                        <span>{registro.nombre}</span>
                    </td>
                    <td className="pd-1">
                        {registro.rol.permisos[0].descripcion}
                    </td>
                    <td className="pd-1">
                        {registro.startDate.split('T')[0].split('-').reverse().join('-')}
                    </td>
                    <td className="pd-1">
                        <BsTelephoneFill style={{display:'inline-block'}} />
                        <span style={{display:'inline-block',marginLeft:"1em"}}>{registro.telefono}</span>
                    </td>
                    <td>
                        <div className={`tagStatusEmpleadoTable ${handleStatusStyle(registro.status)}`}>{registro.status}</div>
                    </td>
                    <td>
                        <ActionsTable dto={registro} nombre="empleados"/>
                    </td>
                </tr>
            ))}
        </tbody>
    </>
}