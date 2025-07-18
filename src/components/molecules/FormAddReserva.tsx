import { useEffect, useState } from "react"
import { useModal } from "../../hooks/hookModal"
import type { EstadoReserva, Reserva } from "../../types/Reserva.type"
import type { Notas } from "../../types/Notas.type"
import InputTextIcon from "../atoms/InputTextIcon"
import SelectForm from "../atoms/SelectForm"
import { TbBrandBooking } from "react-icons/tb";
import type { IHabitacion } from "../../types/Habitacion.type"
import type { ICliente } from "../../types/Cliente.type"
import ListCheckBox from "../atoms/ListCheckBox"
import GroupBtnsActionForm from "../atoms/GroupBtnsActionForm"
import InputFecha from "../atoms/InputFecha"
import { FaExclamation } from "react-icons/fa";
import { useSelector } from "react-redux"
import type { RootState } from "../../features/store/store"
import type { IServicio } from "../../types/Servicio.type"

export default function FormAddReserva(){
    const [clientes,setClientes] = useState<ICliente[]>([])
    const [habitaciones,setHabitaciones] = useState<IHabitacion[]>([])
    const [servicios,setServicios] = useState<IServicio[]>([])

    const {statusCliente,dataCliente} = useSelector((state: RootState) => state.clientes)
    const {statusHabitaciones,dataHabitaciones} = useSelector((state: RootState) => state.habitaciones)
    const {statusServicios,dataServicios} = useSelector((state: RootState) => state.servicios)
    const {data} = useSelector((state: RootState) => state.reservas)

    const {edit,loadDTO} = useModal()
    const [totalReserva,setTotalReserva] = useState<EstadoReserva>("aceptada")
    const [estado,setEstado] = useState<EstadoReserva>("aceptada")
    const [asignacion,setAsignacion] = useState<ICliente[]>([])
    const [habitacion,setHabitacion] = useState<IHabitacion[]>([])
    const [checkIn,setCheckIn] = useState<string>("")
    const [checkOut,setCheckOut] = useState<string>("")
    const [peticion,setPeticion] = useState<string |null>("")
    const [extra,setExtra] = useState<IServicio[] | null>([])
    const [nota,setNota] = useState<Notas[] | null>([])
    
    useEffect(() => {
        if(loadDTO){
            setEstado((loadDTO as Reserva).estado)
            setAsignacion([(loadDTO as Reserva).asignacion])
            setHabitacion([(loadDTO as Reserva).habitacion])
            setCheckIn((loadDTO as Reserva).checkIn)
            setCheckOut((loadDTO as Reserva).checkOut)
            setPeticion((loadDTO as Reserva).peticion ?? null)
            setExtra((loadDTO as Reserva).extras ?? null)
            setNota((loadDTO as Reserva).notasInternas ?? null)
        }
    },[])

    useEffect(() => {
        if(checkIn && checkOut){
            const fechaCheckIn = new Date(checkIn)
            const fechaCheckOut = new Date(checkOut)
            const habitacionesDisponibles = [
                ...new Map(
                    data
                        .filter((reserva: Reserva) => {
                            const checkInReserva = new Date(reserva.checkIn);
                            const checkOutReserva = new Date(reserva.checkOut);
                            return !(checkInReserva < fechaCheckIn && checkOutReserva > fechaCheckOut);
                        })
                        .map((reserva: Reserva) => [reserva.habitacion.id, reserva.habitacion])
                ).values()
            ];
            setHabitaciones(habitacionesDisponibles as IHabitacion[])
        }
    },[checkIn,checkOut])

    useEffect(() => {
        if(statusCliente === "fulfilled"){
            setClientes(dataCliente)
        }
        if(statusHabitaciones === "fulfilled"){
            setHabitaciones(dataHabitaciones)
        }
        if(statusServicios === "fulfilled"){
            setServicios(dataServicios)
        }
    },[statusCliente,statusHabitaciones,dataCliente,dataHabitaciones,statusServicios,dataServicios])

    return <>
        <div className="FormAddDocEmpleado">
            <div className="headerDocEmpleado">
                <div className="topImagen">
                    <div style={{background:"white"}} className="imagenAddPerfil">
                        <TbBrandBooking style={{width:"100%",height:"100%"}} color="#1F1F21" />
                    </div>
                </div>
            </div>
            <div className="bodyDocEmpleado">
                <div className="contentNamePerfil">
                    <h2>{loadDTO ? (loadDTO as Reserva).asignacion.nombre : asignacion[0]?.nombre}</h2>
                    <span>{loadDTO ? (loadDTO as Reserva).asignacion.email : asignacion[0]?.email}</span>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Fechas</span>
                    <div className="contentRightFormEmpleado">
                        <InputFecha estado={checkIn} handle={setCheckIn} style={{width:"50%"}} placeholder="Check-In" />
                        <InputFecha estado={checkOut} handle={setCheckOut} style={{width:"50%"}} placeholder="Check-Out" />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <span style={{display:"block",marginBottom:"1em"}} className="contentLeftFormEmpleado">Clientes</span>
                <div style={{flexDirection:"column",maxHeight:"350px",overflowY:"auto"}} className="contentMainRowForm">
                    <div>
                        <ListCheckBox estado={asignacion} handle={setAsignacion} value={clientes} tipo="clientes" />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <span style={{display:"block",marginBottom:"1em"}} className="contentLeftFormEmpleado">Habitaciones Disponibles</span>
                <div style={{flexDirection:"column",maxHeight:"350px",overflowY:"auto"}} className="contentMainRowForm">
                    {
                    (!checkIn && !checkOut) ?
                    <span style={{color: "#555555"}}>Seleccione Fechas de entrada y de salida</span> :
                    <div>
                        <ListCheckBox estado={habitaciones} handle={setHabitaciones} value={habitaciones as []} tipo="habitaciones" />
                    </div>
                    }
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Peticion</span>
                    <div className="contentRightFormEmpleado">
                        <InputTextIcon estado={peticion ?? ""} handle={setPeticion} placeholder="Peticion del cliente" Icon={FaExclamation} style={{width:"100%"}} value={loadDTO ? (loadDTO as Reserva).peticion ?? "" : ""} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div style={{flexDirection:"column",maxHeight:"350px",overflowY:"auto"}} className="contentMainRowForm">
                    <span style={{display:"block",marginBottom:"1em"}} className="contentLeftFormEmpleado">Extras</span>
                    <div style={{width:"100%"}} className="contentRightFormEmpleado">
                        <ListCheckBox estado={extra ?? []} handle={setExtra} value={servicios} tipo="extras"/>
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                {edit && <div className="contentMainRowForm">
                    <div style={{display:"flex", width:"50%"}}>
                        <span className="contentLeftFormEmpleado">Estado</span>
                        <SelectForm handle={setEstado as (value:string) => void} items={["cancelada","en curso"]} value={loadDTO ? (loadDTO as Reserva).estado : undefined} />
                    </div>
                </div>}
                <hr style={{margin:"1.5em auto",marginBottom:"1em"}} />
                <GroupBtnsActionForm
                dto={loadDTO ? {
                    id: String((loadDTO as Reserva)._id),
                    estado: estado,
                    asignacion: (loadDTO as Reserva).asignacion,
                    habitacion: habitacion,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    totalReserva: totalReserva,
                    responsable: (loadDTO as Reserva).responsable,
                    extras: extra,
                    notasInternas: (loadDTO as Reserva).notasInternas,
                    peticion: peticion
                } :
                {
                    estado: estado,
                    asignacion: asignacion,
                    habitacion: habitacion,
                    checkIn: checkIn,
                    checkOut: checkOut,
                    extras: extra,
                    notasInternas: nota,
                    peticion: peticion
                }} type="empleado" />
            </div>
        </div>
    </>
}