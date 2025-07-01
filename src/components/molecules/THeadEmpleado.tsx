import { useEffect, useState } from "react";
import { RiSortAlphabetAsc } from "react-icons/ri";
import { RiSortAlphabetDesc } from "react-icons/ri";
import { RiSortNumberAsc } from "react-icons/ri";
import { RiSortNumberDesc } from "react-icons/ri";
import type { empleado } from "../../types/Empleado.type";
import type { RootState } from "../../features/store/store";
import { useSelector } from "react-redux";

export default function THeadEmpleado({headers,handleRisortTable}:{headers:Array<string>,handleRisortTable:(docsFilters:empleado[])=>void}){
    const [filterNombre,setFilterNombre] = useState(false)
    const [filterFecha,setFilterFecha] = useState(false)
    const [filterEstado,setFilterEstado] = useState(false)
    const {data} = useSelector((state: RootState) => state.documentos)

    const handleFilter = (type:string) => {
        switch(type){
            case 'Nombre': setFilterNombre(prevStatus => !prevStatus);break;
            case 'Fecha de Inicio': setFilterFecha(prevStatus => !prevStatus);break;
            case 'Estado': setFilterEstado(prevStatus => !prevStatus);break;
            default: throw new Error("Opcion Invalida de Filtro en Tabla Empleado")
        }
    }

    useEffect(() => {
        if (!data) return;

        let sortedData = [...data];


        if(filterNombre && filterNombre !== undefined){
            sortedData = (sortedData.sort((a:empleado,b:empleado) => {
                const cmpNombre = a.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    .localeCompare(
                        b.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    );
                if (cmpNombre !== 0) return cmpNombre;
                return 0;
            }))
        }else if(!filterNombre && filterNombre !== undefined){
            sortedData = (sortedData.sort((a:empleado,b:empleado) => {
                const cmpNombre = a.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    .localeCompare(
                        b.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    );
                if (cmpNombre !== 0) return -cmpNombre;
                return 0;
            }))
        }

        if(filterFecha && filterFecha !== undefined){
            sortedData = (sortedData.sort((a:empleado,b:empleado) => 
                new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
            ))
        }else if(!filterFecha && filterFecha !== undefined){
            sortedData = (sortedData.sort((a:empleado,b:empleado) => 
                 new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
            ))
        }

        if(filterEstado && filterEstado !== undefined){
            sortedData = (sortedData.sort((a:empleado,b:empleado) => 
                a.status.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().localeCompare(
                    b.status.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                )
            ))
        }else if(!filterEstado && filterEstado !== undefined){
            sortedData = (sortedData.sort((a:empleado,b:empleado) => {
                const cmpEstado = a.status.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .localeCompare(
                    b.status.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                );
                if (cmpEstado !== 0) return -cmpEstado;
                return 0;
            }))
        }
        handleRisortTable(sortedData)
    },[filterNombre,filterFecha,filterEstado,handleRisortTable,data])

    return <>
    {
        headers.map((header, index) =>
            header === 'Nombre' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div style={{display:'inline-block'}} className="headerTableIcon" onClick={() => handleFilter(header)}>{filterNombre ? <RiSortAlphabetAsc size={20} /> : <RiSortAlphabetDesc size={20} />}</div>
                </th>
            ) : header === 'Fecha de Inicio' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div style={{display:'inline-block'}} className="headerTableIcon" onClick={() => handleFilter(header)}>{filterFecha ? <RiSortNumberAsc size={20} /> : <RiSortNumberDesc size={20} />}</div>
                </th>
            ) : header === 'Estado' ? 
                <th key={index} className="headerTable">
                    {header}
                    <div style={{display:'inline-block'}} className="headerTableIcon" onClick={() => handleFilter(header)}>{filterEstado ? <RiSortAlphabetAsc size={20} /> : <RiSortAlphabetDesc size={20} />}</div>
                </th>
            :   <th key={index} className="headerTable">
                    {header}
                </th>
        )
    }
    </>
}