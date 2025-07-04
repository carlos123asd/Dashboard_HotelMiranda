import { useEffect, useState } from "react"
import type { IHabitacion } from "../../types/Habitacion.type"
import { useMenuTable } from "../../hooks/hookMenuTable"
import { RiSortAlphabetAsc, RiSortAlphabetDesc, RiSortNumberAsc, RiSortNumberDesc } from "react-icons/ri"

export default function THeadHabitacion({headers,docs,setDocs}:{headers:Array<string>,docs:IHabitacion[],setDocs:(docsFilters:[])=>void}){
    const [filterNombre,setFilterNombre] = useState<boolean |undefined>(undefined)
    const [filterPrecio,setFilterPrecio] = useState<boolean |undefined>(undefined)
    const [filterOferta,setFilterOferta] = useState<boolean |undefined>(undefined)
    const [filterPiso,setFilterPiso] = useState<boolean |undefined>(undefined)
    const [filterData,setFilterData] = useState<'Nombre' | 'Precio' | 'Oferta' | 'Piso' | undefined>(undefined)
    const {menuActive} = useMenuTable()
    
    const handleFilter = (type: 'Nombre' | 'Precio' | 'Oferta' | 'Piso') => {
        switch(type) {
            case 'Nombre': setFilterNombre(prev => prev === undefined ? true : !prev);setFilterData('Nombre');break;
            case 'Precio': setFilterPrecio(prev => prev === undefined ? true : !prev);setFilterData('Precio');break;
            case 'Oferta': setFilterOferta(prev => prev === undefined ? true : !prev);setFilterData('Oferta');break;
            case 'Piso': setFilterPiso(prev => prev === undefined ? true : !prev);setFilterData('Piso');break;
            default: throw new Error("Opción inválida");
        }
    };
    
    useEffect(() => {
        setFilterNombre(undefined)
        setFilterPrecio(undefined)
        setFilterOferta(undefined)
        setFilterPiso(undefined)
        setFilterData(undefined)
    },[menuActive])
    
    useEffect(() => {
        if (!docs) return;
        const sortedData:IHabitacion[] = [...docs]

        if (filterNombre !== undefined && filterData === 'Nombre') {
            sortedData.sort((a, b) => {
                const comp = a.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
                    .localeCompare(b.nombre.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase());
                return filterNombre ? comp : -comp;
            })
        }

        if (filterPrecio !== undefined && filterData === 'Precio') {
            sortedData.sort((a, b) => {
                return filterPrecio
                        ? a.precio - b.precio
                        : b.precio - a.precio; 
            })
        }

        if (filterOferta !== undefined && filterData === 'Oferta') {
            sortedData.sort((a, b) => {
                return filterOferta ?
                         a.oferta - b.oferta 
                         : b.oferta - a.oferta;
            })
        }

        if (filterPiso !== undefined && filterData === 'Piso') {
            sortedData.sort((a, b) => {
                return filterPiso ? 
                        Number(a.piso) - Number(b.piso) 
                        : Number(b.piso) - Number(a.piso);
            })
        }
    
        setDocs(sortedData as []);
    }, [filterNombre, filterPrecio, filterOferta, filterPiso]);
    
    
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
            ) : header === 'Precio' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterPrecio ? <RiSortNumberAsc size={20} color={filterPrecio === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterPrecio === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ): header === 'Oferta' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterOferta ? <RiSortNumberAsc size={20} color={filterOferta === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterOferta === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : header === 'Piso' ? (
                <th key={index} className="headerTable">
                    {header}
                    <div 
                    style={{display:'inline-block'}} 
                    className="headerTableIcon" 
                    onClick={() => handleFilter(header)}>{filterPiso ? <RiSortNumberAsc size={20} color={filterPiso === undefined ? '#939393' : 'white'} /> 
                    : <RiSortNumberDesc size={20}  color={filterPiso === undefined ? '#939393' : 'white'} />}</div>
                </th>
            ) : <th key={index} className="headerTable">
                    {header}
                </th>
        )
    }
    </>
}