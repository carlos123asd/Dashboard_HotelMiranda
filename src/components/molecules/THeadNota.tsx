import { useEffect, useState } from "react"
import type { Notas } from "../../types/Notas.type"
import { useMenuTable } from "../../hooks/hookMenuTable"
import { RiSortAlphabetAsc, RiSortAlphabetDesc, RiSortNumberAsc, RiSortNumberDesc } from "react-icons/ri"

export default function THeadNota({headers,docs,setDocs}:{headers:Array<string>,docs:Notas[],setDocs:(docsFilters:[])=>void}){
    const [filterResponsable,setFilterResponsable] = useState<boolean |undefined>(undefined)
    const [filterFecha,setFilterFecha] = useState<boolean |undefined>(undefined)
    const [filterPiso,setFilterPiso] = useState<boolean |undefined>(undefined)
    const [filterCliente,setFilterCliente] = useState<boolean |undefined>(undefined)
    
    const [filterData,setFilterData] = useState<'Responsable' | 'Fecha' | 'Piso' | 'Cliente' | undefined>(undefined)
    const {menuActive} = useMenuTable()

    const handleFilter = (type: 'Responsable' | 'Fecha' | 'Piso' | 'Cliente') => {
        switch(type) {
            case 'Responsable': setFilterResponsable(prev => prev === undefined ? true : !prev);setFilterData('Responsable');break;
            case 'Fecha': setFilterFecha(prev => prev === undefined ? true : !prev);setFilterData('Fecha');break;
            case 'Piso': setFilterPiso(prev => prev === undefined ? true : !prev);setFilterData('Piso');break;
            case 'Cliente': setFilterCliente(prev => prev === undefined ? true : !prev);setFilterData('Cliente');break;
            default: throw new Error("Opción inválida");
        }
    };
    
    useEffect(() => {
        setFilterResponsable(undefined)
        setFilterFecha(undefined)
        setFilterPiso(undefined)
        setFilterCliente(undefined)
        setFilterData(undefined)
    },[menuActive])
    
    useEffect(() => {
    if (!docs) return;
    const sortedData:Notas[] = [...docs]

    if (filterResponsable !== undefined && filterData === 'Responsable') {
        sortedData.sort((a, b) => {
            const comp = a.responsable.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .localeCompare(b.responsable.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
            return filterResponsable ? comp : -comp;
        })
    }

    if (filterFecha !== undefined && filterData === 'Fecha') {
        sortedData.sort((a, b) => {
            const comp = new Date(a.fecha ? a.fecha : "").getTime() - new Date(b.fecha ? b.fecha : "").getTime();
            return filterFecha ? comp : -comp;
        })
    }

    if (filterPiso !== undefined && filterData === 'Piso') {
        sortedData.sort((a, b) => {
            const comp = (a.habitacion?.piso ?? "").normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                .localeCompare((b.habitacion?.piso ?? "").normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
            return filterPiso ? comp : -comp;
        })
    }

    if (filterCliente !== undefined && filterData === 'Cliente') {
        sortedData.sort((a, b) => {
            const aNombre = a.cliente?.nombre?.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() ?? "";
            const bNombre = b.cliente?.nombre?.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase() ?? "";
            const comp = aNombre.localeCompare(bNombre);
            return filterCliente ? comp : -comp;
        })
    }

    setDocs(sortedData as []);
    }, [filterResponsable, filterFecha, filterPiso, filterCliente]);

    
    return <>
    {
        headers.map((header, index) =>
            header === 'Responsable' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{
                        filterResponsable ? <RiSortAlphabetAsc size={20} color={filterResponsable === undefined ? '#939393' : 'white'} /> 
                        : <RiSortAlphabetDesc size={20} color={filterResponsable === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : header === 'Fecha' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterFecha ? <RiSortNumberAsc size={20} color={filterFecha === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterFecha === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ): header === 'Piso' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterPiso ? <RiSortNumberAsc size={20} color={filterPiso === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterPiso === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ): header === 'Cliente' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterCliente ? <RiSortAlphabetAsc size={20} color={filterCliente === undefined ? '#939393' : 'white'} /> 
                    : <RiSortAlphabetDesc size={20}  color={filterCliente === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : <th key={index} className="headerTable">
                    {header}
                </th>
        )
    }
    </>
}