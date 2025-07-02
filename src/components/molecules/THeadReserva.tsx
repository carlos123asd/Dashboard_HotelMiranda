import { useEffect, useState } from "react";
import { RiSortAlphabetAsc } from "react-icons/ri";
import { RiSortAlphabetDesc } from "react-icons/ri";
import { RiSortNumberAsc } from "react-icons/ri";
import { RiSortNumberDesc } from "react-icons/ri";
import { useMenuTable } from "../../hooks/hookMenuTable";
import type { Reserva } from "../../types/Reserva.type";

export default function THeadReserva({headers,docs,setDocs}:{headers:Array<string>,docs:Reserva[],setDocs:(docsFilters:[])=>void}){
    const [filterNombre,setFilterNombre] = useState<boolean |undefined>(undefined)
    const [filterFechaReserva,setFilterFechaReserva] = useState<boolean |undefined>(undefined)
    const [filterFechaEntrada,setFilterFechaEntrada] = useState<boolean |undefined>(undefined)
    const [filterFechaSalida,setFilterFechaSalida] = useState<boolean |undefined>(undefined)
    const [filterData,setFilterData] = useState<'Nombre' | 'Fecha de Reserva' | 'Entrada' | 'Salida' | undefined>(undefined)
    const {menuActive} = useMenuTable()

    const handleFilter = (type: 'Nombre' | 'Fecha de Reserva' | 'Entrada' | 'Salida') => {
        switch(type) {
            case 'Nombre': setFilterNombre(prev => prev === undefined ? true : !prev);setFilterData('Nombre');break;
            case 'Fecha de Reserva': setFilterFechaReserva(prev => prev === undefined ? true : !prev);setFilterData('Fecha de Reserva');break;
            case 'Entrada': setFilterFechaEntrada(prev => prev === undefined ? true : !prev);setFilterData('Entrada');break;
            case 'Salida': setFilterFechaSalida(prev => prev === undefined ? true : !prev);setFilterData('Salida');break;
            default: throw new Error("Opción inválida");
        }
    };
    
    useEffect(() => {
        setFilterNombre(undefined)
        setFilterFechaReserva(undefined)
        setFilterFechaEntrada(undefined)
        setFilterFechaSalida(undefined)
        setFilterData(undefined)
    },[menuActive])
    
   useEffect(() => {
    if (!docs) return;
    const sortedData:Reserva[] = [...docs]

    if (filterNombre !== undefined && filterData === 'Nombre') {
        sortedData.sort((a, b) => {
            const comp = a.asignacion.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .localeCompare(b.asignacion.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
            return filterNombre ? comp : -comp;
        })
    }

    if (filterFechaReserva !== undefined && filterData === 'Fecha de Reserva') {
        sortedData.sort((a, b) => {
            const comp = new Date(a.createdAt ? a.createdAt : "").getTime() - new Date(b.createdAt ? b.createdAt : "").getTime();
            return filterFechaReserva ? comp : -comp;
        })
    }

    if (filterFechaEntrada !== undefined && filterData === 'Entrada') {
        sortedData.sort((a, b) => {
            const comp = new Date(a.checkIn).getTime() - new Date(b.checkIn).getTime();
            return filterFechaEntrada ? comp : -comp;
        })
    }

    if (filterFechaSalida !== undefined && filterData === 'Salida') {
        sortedData.sort((a, b) => {
            const comp = new Date(a.checkOut).getTime() - new Date(b.checkOut).getTime();
            return filterFechaSalida ? comp : -comp;
        })
    }

    setDocs(sortedData as []);
}, [filterNombre, filterFechaEntrada, filterFechaSalida, filterFechaReserva]);


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
            ) : header === 'Fecha de Reserva' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterFechaReserva ? <RiSortNumberAsc size={20} color={filterFechaReserva === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterFechaReserva === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ): header === 'Entrada' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterFechaEntrada ? <RiSortNumberAsc size={20} color={filterFechaEntrada === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterFechaEntrada === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : header === 'Salida' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterFechaSalida ? <RiSortNumberAsc size={20} color={filterFechaSalida === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterFechaSalida === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : <th key={index} className="headerTable">
                    {header}
                </th>
        )
    }
    </>
}