import MenuTabla from "../molecules/MenuTabla";
import FooterTable from "../molecules/FooterTable";
import type { empleado } from "../../types/Empleado.type";
import TBodyEmpleados from "../molecules/TBodyEmpleados";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Table({menu,headers,docs}:{menu:Array<string>,headers:Array<string>,docs:Array<empleado>}){
    const location = useLocation();
    const [actual,setActual] = useState<number>(10)

    const handleSetActual = (siguiente:boolean) => {
        if(siguiente){
            setActual((prevStatus:number) => {
                prevStatus += 10
                return prevStatus
            })
        }else{
            setActual((prevStatus:number) => {
                prevStatus -= 10
                return prevStatus
            })
        }
    }

    return <>
        <div>
            <MenuTabla menu={menu} />
            <table className="table">
                <thead>
                    <tr>
                        <th className="headerTable"><input type="checkbox" name="" id="" /></th>
                        {
                            headers.map((header,index) => (
                                <th key={index} className="headerTable">{header}</th>
                            ))
                        }
                        <th className="headerTable">Acciones</th>
                    </tr>
                </thead>
                {
                   location.pathname === '/empleados' && <TBodyEmpleados docs={docs} actual={actual}/>
                }
            </table>
            <FooterTable actual={actual} setActual={handleSetActual} total={docs.length}/>
        </div>
    </>
}