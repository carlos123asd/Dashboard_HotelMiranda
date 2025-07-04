import { useEffect, useState } from "react"
import type { IHabitacion } from "../types/Habitacion.type"
import { useMenuTable } from "../hooks/hookMenuTable"
import { useDispatch, useSelector } from "react-redux"
import type { AppDispatch, RootState } from "../features/store/store"
import StatusTable from "../components/organisms/StatusTable"
import { getDocsHabitacionTable } from "../features/thunks/getDocsHabitacionTable"
import { urlGetHabitaciones } from "../features/uris/urls"
import DashboardTemplate from "../components/templates/DashboardTemplate"
import BtnExportDoc from "../components/atoms/BtnExportDoc"
import BtnAddDoc from "../components/atoms/BtnAddDoc"
import Table from "../components/organisms/Table"

export default function Habitaciones(){
    const [docs,setDocs] = useState<IHabitacion[]>([])
    const {menuActive,setMenuActive} = useMenuTable()
    const {data,status} = useSelector((state: RootState) => state.habitaciones)

    const dispatch = useDispatch<AppDispatch>()

    const statusHabitacion = [
        {nombre:"Habitacion Simple",grado:5,cantidad:data.filter((doc:IHabitacion) => doc.categoria === 'Habitacion Simple').length},
        {nombre:"Doble Habitacion",grado:5,cantidad:data.filter((doc:IHabitacion) => doc.categoria === 'Doble Habitacion').length},
        {nombre:"Suite",grado:5,cantidad:data.filter((doc:IHabitacion) => doc.categoria === 'Suite').length},
        {nombre:"Deluxe",grado:5,cantidad:data.filter((doc:IHabitacion) => doc.categoria === 'Deluxe').length},
        {nombre:"Familiar",grado:5,cantidad:data.filter((doc:IHabitacion) => doc.categoria === 'Familiar').length},
        {nombre:"Presidencial",grado:5,cantidad:data.filter((doc:IHabitacion) => doc.categoria === 'Presidencial').length},
    ]

    const menuHabitacion = ["Todos","Habitacion Simple","Doble Habitacion","Suite","Deluxe","Familiar","Presidencial"]
    const headerHabitacion = ["Nombre","Categoria","Piso","Descripción","Precio","Oferta"]

    const handleFilterMenu = (value:string) => {
        switch(value){
            case 'Todos': setDocs(data);break;
            case 'Habitacion Simple': setDocs(data.filter((doc:IHabitacion) => doc.categoria === 'Habitacion Simple'));break;
            case 'Doble Habitacion': setDocs(data.filter((doc:IHabitacion) => doc.categoria === 'Doble Habitacion'));break;
            case 'Suite': setDocs(data.filter((doc:IHabitacion) => doc.categoria === 'Suite'));break;
            case 'Deluxe': setDocs(data.filter((doc:IHabitacion) => doc.categoria === 'Deluxe'));break;
            case 'Familiar': setDocs(data.filter((doc:IHabitacion) => doc.categoria === 'Familiar'));break;
            case 'Presidencial': setDocs(data.filter((doc:IHabitacion) => doc.categoria === 'Presidencial'));break;
            case 'limpiar': setDocs(data);setMenuActive('Todos');break;
            default: throw new Error("Opcion invalida para Menu")
        }
    }

    useEffect(() => { 
        if(status === "idle"){
            dispatch(getDocsHabitacionTable(urlGetHabitaciones))
        }else if(status === "pending"){
            console.log("Cargando")
        }else if(status === "fulfilled"){
            setDocs(data)
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
                <h3>Todas las Habitaciones</h3>
                <div className="contentBtnTops">
                    <BtnExportDoc nombre="habitaciones"/>
                    <BtnAddDoc nombre="habitaciones"/>
                </div>
            </div>
            <StatusTable status={statusHabitacion} />
            <Table menu={menuHabitacion} headers={headerHabitacion} setDocs={setDocs} docs={docs}/>
        </DashboardTemplate>
    </>
}