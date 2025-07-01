import { useEffect, useState } from "react";
import { RiSortAlphabetAsc } from "react-icons/ri";
import { RiSortAlphabetDesc } from "react-icons/ri";
import { RiSortNumberAsc } from "react-icons/ri";
import { RiSortNumberDesc } from "react-icons/ri";
import type { empleado } from "../../types/Empleado.type";

export default function THeadEmpleado({headers,docs,setDocs}:{headers:Array<string>,docs:empleado[],setDocs:(docsFilters:empleado[])=>void}){
    const [filterNombre,setFilterNombre] = useState<boolean |undefined>(undefined)
    const [filterFecha,setFilterFecha] = useState<boolean |undefined>(undefined)
    const [filterEstado,setFilterEstado] = useState<boolean |undefined>(undefined)
    const [filterDocs,setFilterDocs] = useState<empleado[]>(docs)

    const handleFilter = (type: string) => {
    switch(type) {
        case 'Nombre': setFilterNombre(prev => prev === undefined ? true : !prev); break;
        case 'Fecha de Inicio': setFilterFecha(prev => prev === undefined ? true : !prev); break;
        case 'Estado': setFilterEstado(prev => prev === undefined ? true : !prev); break;
        default: throw new Error("Opción inválida");
    }
    };

    useEffect(() => {
        setFilterDocs(docs);
    }, [docs]);
    
    useEffect(() => {
        if (!docs) return;

        const filteredData = [...filterDocs];

        if (filterNombre !== undefined) {
            filteredData.sort((a, b) => {
            const comp = a.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .localeCompare(b.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
            return filterNombre ? comp : -comp;
            });
        }

        if (filterFecha !== undefined) {
            filteredData.sort((a, b) => {
            const comp = new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
            return filterFecha ? comp : -comp;
            });
        }

        if (filterEstado !== undefined) {
            filteredData.sort((a, b) => {
            const comp = a.status.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .localeCompare(b.status.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
            return filterEstado ? comp : -comp;
            });
        }

        setFilterDocs(filteredData)
        setDocs(filteredData);
    }, [filterNombre, filterFecha, filterEstado]);

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