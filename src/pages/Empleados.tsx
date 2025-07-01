import { useEffect, useState } from "react";
import BtnAddDoc from "../components/atoms/BtnAddDoc";
import BtnExportDoc from "../components/atoms/BtnExportDoc";
import StatusTable from "../components/organisms/StatusTable";
import Table from "../components/organisms/Table";
import DashboardTemplate from "../components/templates/DashboardTemplate";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../features/store/store";
import { getDocsTable } from "../features/thunks/getDocsTable";
import type { RootState } from "../features/store/store";
import { urlGetEmpleado } from "../features/uris/urls";
import type { empleado } from "../types/Empleado.type";
import { useMenuTable } from "../hooks/hookMenuTable";

export default function Empleados(){
    const [docs,setDocs] = useState<empleado[]>([])
    const {menuActive,setMenuActive} = useMenuTable()
    const dispatch = useDispatch<AppDispatch>()
    const {data,status} = useSelector((state: RootState) => state.documentos)
     const statusEmpleado = [
        {nombre:"Activo",grado:2,cantidad:data.filter((doc:empleado) => doc.status === 'activo').length},
        {nombre:"Inactivo",grado:1,cantidad:data.filter((doc:empleado) => doc.status === 'inactivo').length},
        {nombre:"Suspendido",grado:3,cantidad:data.filter((doc:empleado) => doc.status === 'suspendido').length},
    ]
    
    const menuEmpleado = ["Todos","Activo","Inactivo","Suspendido"]
    const headerEmpleado = ["Nombre","Responsabilidades","Fecha de Inicio","Contacto","Estado"]

    const handleFilterMenu = (value:string) => {
        switch(value){
            case 'Todos': setDocs(data);break;
            case 'Activo': setDocs(data.filter((doc:empleado) => doc.status === 'activo'));break;
            case 'Inactivo': setDocs(data.filter((doc:empleado) => doc.status === 'inactivo'));break;
            case 'Suspendido': setDocs(data.filter((doc:empleado) => doc.status === 'suspendido'));break;
            case 'limpiar': setDocs(data);setMenuActive('Todos');break;
            default: throw new Error("Opcion invalida para Menu")
        }
    }

    useEffect(() => { 
        if(status === "idle"){
            dispatch(getDocsTable(urlGetEmpleado))
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
                <h3>Todos los Empleados</h3>
                <div className="contentBtnTops">
                    <BtnExportDoc nombre="empleados"/>
                    <BtnAddDoc nombre="empleados"/>
                </div>
            </div>
            <StatusTable status={statusEmpleado} />
            <Table menu={menuEmpleado} headers={headerEmpleado} setDocs={setDocs} docs={docs}/>
        </DashboardTemplate>
    </>
}