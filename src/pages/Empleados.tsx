import BtnAddDoc from "../components/atoms/BtnAddDoc";
import BtnExportDoc from "../components/atoms/BtnExportDoc";
import StatusTable from "../components/organisms/StatusTable";
import DashboardTemplate from "../components/templates/DashboardTemplate";

export default function Empleados(){
    return <>
        <DashboardTemplate>
            <div className="contentTopEmpleado">
                <h3>Todos los Empleados</h3>
                <div className="contentBtnTops">
                    <BtnExportDoc nombre="empleados"/>
                    <BtnAddDoc nombre="empleados"/>
                </div>
            </div>
            <StatusTable />
        </DashboardTemplate>
    </>
}