import type React from "react";
import Nav from "../organisms/Nav";
import TopBar from "../organisms/TopBar";
import { useMenu } from "../../hooks/hookMenu";
import Modal from "../organisms/Modal";
import FormAddEmpleado from "../molecules/FormAddEmpleado";

export default function DashboardTemplate({ children }:{children:React.ReactNode}){
    const {showMenu} = useMenu()
    return <>
    <div className="dashboard-template">
        <div style={{paddingLeft: showMenu ? "1.5em" : "0px"}} className="contentNav">
            <Nav />
        </div>
        <div style={{paddingLeft: showMenu ? "3em" : "0px"}} className="right-content">
            <TopBar />
            <div className="contentTemplate">
                {children}
            </div>
        </div>
        <Modal>
            <FormAddEmpleado />
        </Modal>
    </div>
    </>
}