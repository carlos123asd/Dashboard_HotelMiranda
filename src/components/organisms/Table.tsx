import MenuTabla from "../molecules/MenuTabla";
import FooterTable from "../molecules/FooterTable";
import type { empleado } from "../../types/Empleado.type";
import TBodyEmpleados from "../molecules/TBodyEmpleados";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import THeadEmpleado from "../molecules/THeadEmpleado";
import MenuChecked from "../molecules/MenuChecked";

export default function Table({menu,headers,setDocs,docs}:{menu:Array<string>,headers:Array<string>,setDocs:(docsFilters:empleado[])=>void,docs:Array<empleado>}){
    const location = useLocation();
    const [actual,setActual] = useState<number>(10)
    const [checkedGlobal,setCheckedGlobal] = useState<boolean>(false)
    const [countChecked,setCountChecked] = useState<number>(0)

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

    const handleChecked = (e: React.MouseEvent<HTMLInputElement>) => {
        const ischecked = e.currentTarget.checked
        setCheckedGlobal(ischecked)
    }

    const handleCountChecked  = (value:number) => {
        setCountChecked((prev) => {
            const calc = prev += value
            return calc
        })
    }

    useEffect(() => {
        if(checkedGlobal){
            setCountChecked(docs.length)
        }else{
            setCountChecked(0)
        }
    },[checkedGlobal,docs.length])

    return <>
        <div>
            <MenuTabla menu={menu} />
            <table className="table">
                <thead>
                    <tr>
                        <th className="headerTable"><input onClick={(e) => handleChecked(e)} checked={checkedGlobal} type="checkbox" name="" id="" /></th>
                        {
                            location.pathname === '/empleados' && <THeadEmpleado setDocs={setDocs} docs={docs} headers={headers}/>
                        }
                        <th className="headerTable">Acciones</th>
                    </tr>
                </thead>
                {
                   location.pathname === '/empleados' && <TBodyEmpleados docs={docs} actual={actual} checkGlobal={checkedGlobal} handleCountChecked={handleCountChecked} />
                }
                <MenuChecked checkedGlobal={checkedGlobal} setCheckedGlobal={setCheckedGlobal} countChecked={countChecked} />
            </table>
            <FooterTable actual={actual} setActual={handleSetActual} total={docs.length}/>
        </div>
    </>
}