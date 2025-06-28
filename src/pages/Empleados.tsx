import BtnAddDoc from "../components/atoms/BtnAddDoc";
import BtnExportDoc from "../components/atoms/BtnExportDoc";
import StatusTable from "../components/organisms/StatusTable";
import Table from "../components/organisms/Table";
import DashboardTemplate from "../components/templates/DashboardTemplate";

export default function Empleados(){
     const statusEmpleado = [
        {nombre:"Activo",grado:2,cantidad:"200"},
        {nombre:"Inactivo",grado:1,cantidad:"20"},
        {nombre:"Suspendido",grado:3,cantidad:"3"},
    ]

    const menuEmpleado = ["Todos","Activo","Inactivo","Suspendido"]
    const headerEmpleado = ["Nombre","Responsabilidades","Fecha de Inicio","Contacto","Estado"]
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
            <Table menu={menuEmpleado} headers={headerEmpleado} />
        </DashboardTemplate>
    </>
}