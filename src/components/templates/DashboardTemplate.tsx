import type React from "react";
import Nav from "../organisms/Nav";
import TopBar from "../organisms/TopBar";

export default function DashboardTemplate({ children }:{children:React.ReactNode}){
    return <>
    <div className="dashboard-template">
        <div className="contentNav">
            <Nav />
        </div>
        <div className="right-content">
            <TopBar />
            <div>
                {children}
            </div>
        </div>
    </div>
    </>
}