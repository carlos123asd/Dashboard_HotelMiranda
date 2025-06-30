import { useState } from "react";
import { RiSortAlphabetAsc } from "react-icons/ri";
import { RiSortAlphabetDesc } from "react-icons/ri";
import { RiSortNumberAsc } from "react-icons/ri";
import { RiSortNumberDesc } from "react-icons/ri";

export default function THeadEmpleado({headers}:{headers:Array<string>}){
    const [filterNombre,setFilterNombre] = useState(false)
    const [filterFecha,setFilterFecha] = useState(false)
    const [filterEstado,setFilterEstado] = useState(false)

    const handleFilter = (type:string) => {
        switch(type){
            case 'Nombre': setFilterNombre(prevStatus => !prevStatus);break;
            case 'Fecha de Inicio': setFilterFecha(prevStatus => !prevStatus);break;
            case 'Estado': setFilterEstado(prevStatus => !prevStatus);break;
            default: throw new Error("Opcion Invalida de Filtro en Tabla Empleado")
        }
    }

    return <>
    {
        headers.map((header, index) =>
            header === 'Nombre' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div onClick={() => handleFilter(header)}>{filterNombre ? <RiSortAlphabetAsc size={20} /> : <RiSortAlphabetDesc size={20} />}</div>
                </th>
            ) : header === 'Fecha de Inicio' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div onClick={() => handleFilter(header)}>{filterFecha ? <RiSortNumberAsc size={20} /> : <RiSortNumberDesc size={20} />}</div>
                </th>
            ) : header === 'Estado' ? 
                <th key={index} className="headerTable">
                    {header}
                    <div onClick={() => handleFilter(header)}>{filterEstado ? <RiSortAlphabetAsc size={20} /> : <RiSortAlphabetDesc size={20} />}</div>
                </th>
            :   <th key={index} className="headerTable">
                    {header}
                </th>
        )
    }
    </>
}