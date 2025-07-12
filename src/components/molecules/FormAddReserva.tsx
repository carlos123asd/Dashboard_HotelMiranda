import { useEffect, useState } from "react"
import { useModal } from "../../hooks/hookModal"
import type { EstadoReserva, Extras, Reserva } from "../../types/Reserva.type"
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
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../../features/store/store"
import { getDocsCliente } from "../../features/thunks/getDocsCliente"
import { getDocsHabitacionTable } from "../../features/thunks/getDocsHabitacionTable"
import { urlGetHabitaciones } from "../../features/uris/urls"

export default function FormAddReserva(){
    const {dataCliente,statusCliente} = useSelector((state: RootState) => state.clientes)
    const {dataHabitaciones,statusHabitaciones} = useSelector((state: RootState) => state.habitaciones)
    const dispatch = useDispatch<AppDispatch>()

    const [clientes,setClientes] = useState([])
    const [habitaciones,setHabitaciones] = useState([])

    const {edit,loadDTO} = useModal()
    const [totalReserva,setTotalReserva] = useState<EstadoReserva>("aceptada")
    const [estado,setEstado] = useState<EstadoReserva>("aceptada")
    const [asignacion,setAsignacion] = useState<ICliente>({} as ICliente)
    const [habitacion,setHabitacion] = useState<IHabitacion>({} as IHabitacion)
    const [checkIn,setCheckIn] = useState<string>("")
    const [checkOut,setCheckOut] = useState<string>("")
    const [peticion,setPeticion] = useState<string |null>("")
    const [extra,setExtra] = useState<Extras[] | null>([])
    const [nota,setNota] = useState<Notas[] | null>([])
    
        useEffect(() => {
            if(statusCliente === "idle"){
                dispatch(getDocsCliente())
            }else if(statusCliente === "pending"){
                console.log("Cargando")
            }else if(statusCliente === "fulfilled"){
                setClientes(dataCliente)
            }else if(statusCliente === "rejected" && statusHabitaciones === "rejected"){
                throw new Error ("Error al cargar los datos Cliente para formulario Reserva")
            }

            if(statusHabitaciones === "idle"){
                dispatch(getDocsHabitacionTable(urlGetHabitaciones))
            }else if(statusHabitaciones === "pending"){
                console.log("Cargando")
            }else if(statusHabitaciones === "fulfilled"){
                setHabitaciones(dataHabitaciones)
            }else if(statusHabitaciones === "rejected"){
                throw new Error ("Error al cargar los datos Habitaciones para formulario Reserva")
            }

            if(loadDTO){
                setEstado((loadDTO as Reserva).estado)
                setAsignacion((loadDTO as Reserva).asignacion)
                setHabitacion((loadDTO as Reserva).habitacion)
                setCheckIn((loadDTO as Reserva).checkIn)
                setCheckOut((loadDTO as Reserva).checkOut)
                setPeticion((loadDTO as Reserva).peticion ?? null)
                setExtra((loadDTO as Reserva).extras ?? null)
                setNota((loadDTO as Reserva).notasInternas ?? null)
            }
        },[])
    
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
                        <h2>{loadDTO ? (loadDTO as Reserva).asignacion.nombre : asignacion.nombre}</h2>
                        <span>{loadDTO ? (loadDTO as Reserva).asignacion.email : asignacion.email}</span>
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
                    <span style={{display:"block",marginBottom:"1em"}} className="contentLeftFormEmpleado">Cliente</span>
                    <div style={{flexDirection:"column",maxHeight:"350px",overflowY:"auto"}} className="contentMainRowForm">
                        <div>
                            <ListCheckBox estado={asignacion} handle={setAsignacion} value={clientes} tipo="clientes" />
                        </div>
                    </div>
                    <hr style={{margin:"1.5em auto"}} />
                    <span style={{display:"block",marginBottom:"1em"}} className="contentLeftFormEmpleado">Habitacion</span>
                    <div style={{flexDirection:"column",maxHeight:"350px",overflowY:"auto"}} className="contentMainRowForm">
                        <div>
                            <ListCheckBox estado={habitacion} handle={setHabitacion} value={habitaciones} tipo="habitaciones" />
                        </div>
                    </div>
                    <hr style={{margin:"1.5em auto"}} />
                    <div className="contentMainRowForm">
                        <span className="contentLeftFormEmpleado">Peticion</span>
                        <div className="contentRightFormEmpleado">
                            <InputTextIcon estado={peticion ?? ""} handle={setPeticion} placeholder="Peticion del cliente" Icon={FaExclamation} style={{width:"100%"}} value={loadDTO ? (loadDTO as Reserva).peticion ?? "" : ""} />
                        </div>
                    </div>
                    <hr style={{margin:"1.5em auto"}} />
                    <div className="contentMainRowForm">
                        <span className="contentLeftFormEmpleado">Extras</span>
                        <div className="contentRightFormEmpleado">
                            <ListCheckBox estado={extra} handle={setExtra} value={[]} tipo="extras"/> {/*TRAER UN THUNK para traer los extras que hay*/}
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