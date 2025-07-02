import { useEffect, useState } from "react";
import { RiSortAlphabetAsc } from "react-icons/ri";
import { RiSortAlphabetDesc } from "react-icons/ri";
import { RiSortNumberAsc } from "react-icons/ri";
import { RiSortNumberDesc } from "react-icons/ri";
import type { empleado } from "../../types/Empleado.type";
import { useMenuTable } from "../../hooks/hookMenuTable";

export default function THeadEmpleado({headers,docs,setDocs}:{headers:Array<string>,docs:empleado[],setDocs:(docsFilters:empleado[])=>void}){
    const [filterNombre,setFilterNombre] = useState<boolean |undefined>(undefined)
    const [filterFecha,setFilterFecha] = useState<boolean |undefined>(undefined)
    const [filterData,setFilterData] = useState<'Nombre' | 'Fecha de Inicio' | undefined>(undefined)
    const {menuActive} = useMenuTable()

    const handleFilter = (type: 'Nombre' | 'Fecha de Inicio') => {
        switch(type) {
            case 'Nombre': setFilterNombre(prev => prev === undefined ? true : !prev);setFilterData('Nombre');break;
            case 'Fecha de Inicio': setFilterFecha(prev => prev === undefined ? true : !prev);setFilterData('Fecha de Inicio');break;
            default: throw new Error("Opción inválida");
        }
    };
    
    useEffect(() => {
        setFilterNombre(undefined)
        setFilterFecha(undefined)
        setFilterData(undefined)
    },[menuActive])
    
   useEffect(() => {
    if (!docs) return;
    const sortedData = [...docs]

    if (filterNombre !== undefined && filterData === 'Nombre') {
        sortedData.sort((a, b) => {
            const comp = a.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .localeCompare(b.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
            return filterNombre ? comp : -comp;
        })
    }

    if (filterFecha !== undefined && filterData === 'Fecha de Inicio') {
        sortedData.sort((a, b) => {
            const comp = new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
            return filterFecha ? comp : -comp;
        })
    }

    setDocs(sortedData);
}, [filterNombre, filterFecha]);


    return <>
    {
        headers.map((header, index) =>
            header === 'Nombre' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{
                        filterNombre ? <RiSortAlphabetAsc size={20} color={filterNombre === undefined ? '#939393' : 'white'} /> 
                        : <RiSortAlphabetDesc size={20} color={filterNombre === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : header === 'Fecha de Inicio' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterFecha ? <RiSortNumberAsc size={20} color={filterFecha === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterFecha === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : <th key={index} className="headerTable">
                    {header}
                </th>
        )
    }
    </>
}