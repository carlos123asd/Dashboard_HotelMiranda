import { useDispatch, useSelector } from "react-redux";
import BtnAddDoc from "../components/atoms/BtnAddDoc";
import BtnExportDoc from "../components/atoms/BtnExportDoc";
import StatusTable from "../components/organisms/StatusTable";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import type { Reserva } from "../types/Reserva.type";
import type { AppDispatch, RootState } from "../features/store/store";
import Table from "../components/organisms/Table";
import { useEffect, useState } from "react";
import { useMenuTable } from "../hooks/hookMenuTable";
import { urlGetHabitaciones, urlGetReservas, urlGetServicios } from "../features/uris/urls";
import { getDocsReservaTable } from "../features/thunks/getDocsReservaTable";
import { getDocsCliente } from "../features/thunks/getDocsCliente";
import { getDocsHabitacionTable } from "../features/thunks/getDocsHabitacionTable";
import { getDocsServicio } from "../features/thunks/getDocsServicio";

export default function Reservas(){
    const [docs,setDocs] = useState<Reserva[]>([])
    
    const {menuActive,setMenuActive} = useMenuTable()

    const {data,status} = useSelector((state: RootState) => state.reservas)
    const {statusCliente} = useSelector((state: RootState) => state.clientes)
    const {statusHabitaciones} = useSelector((state: RootState) => state.habitaciones)
    const {statusServicios} = useSelector((state: RootState) => state.servicios)

    const dispatch = useDispatch<AppDispatch>()

    const statusReserva = [
        {nombre:"Pendiente",grado:3,cantidad:data.filter((doc:Reserva) => doc.estado === 'pendiente').length},
        {nombre:"Aceptada",grado:2,cantidad:data.filter((doc:Reserva) => doc.estado === 'aceptada').length},
        {nombre:"En curso",grado:4,cantidad:data.filter((doc:Reserva) => doc.estado === 'en curso').length},
        {nombre:"Cancelada",grado:1,cantidad:data.filter((doc:Reserva) => doc.estado === 'cancelada').length},
    ]

    const menuReserva = ["Todos","Pendiente","En curso","Aceptada","Cancelada","","","Habitacion Simple","Doble Habitacion","Suite","Deluxe","Familiar","Presidencial"]
    const headerReserva = ["Nombre","Fecha de Reserva","Entrada","Salida","Petición","Tipo de Habitación","Estado"]

    const handleFilterMenu = (value:string) => {
        switch(value){
            case 'Todos': setDocs(data);break;
            case 'Pendiente': setDocs(data.filter((doc:Reserva) => doc.estado === 'pendiente'));break;
            case 'En curso': setDocs(data.filter((doc:Reserva) => doc.estado === 'en curso'));break;
            case 'Aceptada': setDocs(data.filter((doc:Reserva) => doc.estado === 'aceptada'));break;
            case 'Cancelada': setDocs(data.filter((doc:Reserva) => doc.estado === 'cancelada'));break;
            case 'Habitacion Simple': setDocs(data.filter((doc:Reserva) => doc.habitacion.categoria === 'Habitacion Simple'));break;
            case 'Doble Habitacion': setDocs(data.filter((doc:Reserva) => doc.habitacion.categoria === 'Doble Habitacion'));break;
            case 'Suite': setDocs(data.filter((doc:Reserva) => doc.habitacion.categoria === 'Suite'));break;
            case 'Deluxe': setDocs(data.filter((doc:Reserva) => doc.habitacion.categoria === 'Deluxe'));break;
            case 'Familiar': setDocs(data.filter((doc:Reserva) => doc.habitacion.categoria === 'Familiar'));break;
            case 'Presidencial': setDocs(data.filter((doc:Reserva) => doc.habitacion.categoria === 'Presidencial'));break;
            case 'limpiar': setDocs(data);setMenuActive('Todos');break;
            default: throw new Error("Opcion invalida para Menu")
        }
    }

    useEffect(() => { 
        if(statusCliente === "idle"){
            dispatch(getDocsCliente())
        }else if(statusCliente === "pending"){
            console.log("Cargando Clientes")
        }else if(statusCliente === "fulfilled"){
            console.log("Cargado Clientes")
        }else if(statusCliente === "rejected" && statusHabitaciones === "rejected"){
            throw new Error ("Error al cargar los datos Cliente para formulario Reserva")
        }

        if(statusHabitaciones === "idle"){
            dispatch(getDocsHabitacionTable(urlGetHabitaciones))
        }else if(statusHabitaciones === "pending"){
            console.log("Cargando Reservas")
        }else if(statusHabitaciones === "fulfilled"){
             console.log("Cargado Reservas")
        }else if(statusHabitaciones === "rejected"){
            throw new Error ("Error al cargar los datos Habitaciones para formulario Reserva")
        }
        
        if(status === "idle"){
            dispatch(getDocsReservaTable(urlGetReservas))
        }else if(status === "pending"){
            console.log("Cargando Empleados")
        }else if(status === "fulfilled"){
            setDocs(data)
        }else if(status === "rejected"){
            throw new Error ("Error al cargar los datos Empleados")
        }    

        if(statusServicios === "idle"){
            dispatch(getDocsServicio(urlGetServicios))
        }else if(statusServicios === "pending"){
            console.log("Cargando Servicios")
        }else if(statusServicios === "fulfilled"){
           console.log("Servicios cargado")
        }else if(statusServicios === "rejected"){
            throw new Error ("Error al cargar los datos de Sevicios")
        }
    }, [data, status, statusCliente, statusHabitaciones, dispatch])

    useEffect(() => {
        handleFilterMenu(menuActive)
    }, [menuActive])

    return <>
        <DashboardTemplate>
            <div className="contentTopEmpleado">
                <h3>Todas las Reservas</h3>
                <div className="contentBtnTops">
                    <BtnExportDoc nombre="reservas"/>
                    <BtnAddDoc nombre="reservas"/>
                </div>
            </div>
            <StatusTable status={statusReserva} />
            <Table menu={menuReserva} headers={headerReserva} setDocs={setDocs} docs={docs}/>
        </DashboardTemplate>
    </>
}