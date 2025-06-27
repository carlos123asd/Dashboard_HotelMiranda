import type React from "react";
import Nav from "../organisms/Nav";
import TopBar from "../organisms/TopBar";
import { useMenu } from "../../hooks/hookMenu";

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
    </div>
    </>
}