import { useEffect, useState } from "react"
import type { Notas } from "../types/Notas.type"
import { useMenuTable } from "../hooks/hookMenuTable"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../features/store/store"
import { getDocsNotasTable } from "../features/thunks/getDocsNotasTable"
import { urlGetNotas } from "../features/uris/urls"
import DashboardTemplate from "../components/templates/DashboardTemplate"
import BtnExportDoc from "../components/atoms/BtnExportDoc"
import BtnAddDoc from "../components/atoms/BtnAddDoc"
import StatusTable from "../components/organisms/StatusTable"
import Table from "../components/organisms/Table"
import MenuTabla from "../components/molecules/MenuTabla"

export default function Nota(){
    const [docsHabitacion,setDocsHabitacion] = useState<Notas[]>([])
    const [docsCliente,setDocsCliente] = useState<Notas[]>([])
    const [docsReserva,setDocsReserva] = useState<Notas[]>([])
    const {data,status} = useSelector((state: RootState) => state.notas)
    const {menuActive,setMenuActive} = useMenuTable()

    const dispatch = useDispatch<AppDispatch>()

    const statusReserva = [
        {nombre:"Habitacion",grado:3,cantidad:data.filter((doc:Notas) => doc.tipo === 'Habitacion').length},
        {nombre:"Cliente",grado:4,cantidad:data.filter((doc:Notas) => doc.tipo === 'Cliente').length},
        {nombre:"Reserva",grado:1,cantidad:data.filter((doc:Notas) => doc.tipo === 'Reserva').length},
    ]

    const menuNota = ["Todos","Habitacion","Cliente","Reserva"]
    
    const headerNotaHabitacion = ["Responsable","Tipo","Fecha","Habitacion","Codigo","Piso","Categoria"]
    const headerNotaCliente = ["Responsable","Tipo","Fecha","Cliente","Email","Direccion"]
    const headerNotaReserva = ["Responsable","Tipo","Fecha","Cliente","Habitacion","Estado de Reserva"]

    const handleFilterMenu = (value:string) => {
        switch(value){
            case 'Todos': 
            setDocsHabitacion(data.filter((nota:Notas) => nota.tipo === 'Habitacion'));
            setDocsReserva(data.filter((nota:Notas) => nota.tipo === 'Reserva'));
            setDocsCliente(data.filter((nota:Notas) => nota.tipo === 'Cliente'));break;
            case 'Habitacion': setDocsHabitacion(data.filter((doc:Notas) => doc.tipo === 'Habitacion'));break;
            case 'Cliente': setDocsCliente(data.filter((doc:Notas) => doc.tipo === 'Cliente'));break;
            case 'Reserva': setDocsReserva(data.filter((doc:Notas) => doc.tipo === 'Reserva'));break;
            case 'limpiar': 
            setDocsHabitacion(data.filter((nota:Notas) => nota.tipo === 'Habitacion'));
            setDocsReserva(data.filter((nota:Notas) => nota.tipo === 'Reserva'));
            setDocsCliente(data.filter((nota:Notas) => nota.tipo === 'Cliente'));
            setMenuActive('Todos');break;
            default: throw new Error("Opcion invalida para Menu")
        }
    }

    useEffect(() => { 
        if(status === "idle"){
            dispatch(getDocsNotasTable(urlGetNotas))
        }else if(status === "pending"){
            console.log("Cargando")
        }else if(status === "fulfilled"){
            setDocsHabitacion(data.filter((nota:Notas) => nota.tipo === 'Habitacion'))
            setDocsReserva(data.filter((nota:Notas) => nota.tipo === 'Reserva'))
            setDocsCliente(data.filter((nota:Notas) => nota.tipo === 'Cliente'))
        }else if(status === "rejected"){
            throw new Error ("Error al cargar los datos Empleados")
        }    
    }, [data, status, dispatch])

    useEffect(() => {
        handleFilterMenu(menuActive)
    }, [menuActive])

    return <>
        <DashboardTemplate>
            <div className="contentTopEmpleado">
                <h3>Todas las Notas</h3>
                <div className="contentBtnTops">
                    <BtnExportDoc nombre="notas"/>
                    <BtnAddDoc nombre="notas"/>
                </div>
            </div>
            <StatusTable status={statusReserva} />
            <MenuTabla menu={menuNota} />
            <div style={{display:"flex",flexDirection:"column",gap:"2em"}}>
                {(menuActive === 'Habitacion' || menuActive === 'Todos') && <Table headers={headerNotaHabitacion} setDocs={setDocsHabitacion} docs={docsHabitacion}/>}
                {(menuActive === 'Cliente' || menuActive === 'Todos') &&<Table headers={headerNotaCliente} setDocs={setDocsCliente} docs={docsCliente}/>}
                {(menuActive === 'Reserva' || menuActive === 'Todos') &&<Table headers={headerNotaReserva} setDocs={setDocsReserva} docs={docsReserva}/>}
            </div>
        </DashboardTemplate>
    </>
}