import MenuTabla from "../molecules/MenuTabla";
import FooterTable from "../molecules/FooterTable";
import type { empleado } from "../../types/Empleado.type";
import TBodyEmpleados from "../molecules/TBodyEmpleados";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import THeadEmpleado from "../molecules/THeadEmpleado";
import MenuChecked from "../molecules/MenuChecked";
import THeadReserva from "../molecules/THeadReserva";
import type { Reserva } from "../../types/Reserva.type";
import TBodyReservas from "../molecules/TBodyReservas";
import THeadNota from "../molecules/THeadNota";
import type { Notas } from "../../types/Notas.type";
import TBodyNotas from "../molecules/TBodyNotas";
import THeadHabitacion from "../molecules/THeadHabitacion";
import type { IHabitacion } from "../../types/Habitacion.type";
import TBodyHabitacion from "../molecules/TBodyHabitacion";
import type { DepsReserva } from "../../types/DepsReserva";

export default function Table({menu,headers,setDocs,docs,depExtra}:{menu?:Array<string>,headers:Array<string>,setDocs:(docsFilters:[])=>void,docs:Array<unknown>,depExtra?:DepsReserva}){
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

    const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            {menu && <MenuTabla menu={menu} />}
            <table className="table">
                <thead>
                    <tr>
                        <th className="headerTable"><input onChange={(e) => handleChecked(e)} checked={checkedGlobal} type="checkbox" name="" id="" /></th>
                        {location.pathname === '/empleados' && <THeadEmpleado setDocs={setDocs} docs={docs as empleado[]} headers={headers}/>}
                        {location.pathname === '/reservas' && <THeadReserva setDocs={setDocs} docs={docs as Reserva[]} headers={headers}/>}
                        {location.pathname === '/notas' && <THeadNota setDocs={setDocs} docs={docs as Notas[]} headers={headers}/>}
                        {location.pathname === '/habitaciones' && <THeadHabitacion setDocs={setDocs} docs={docs as IHabitacion[]} headers={headers}/>}
                        <th className="headerTable">Acciones</th>
                    </tr>
                </thead>
                {location.pathname === '/empleados' && <TBodyEmpleados docs={docs as empleado[]} actual={actual} checkGlobal={checkedGlobal} handleCountChecked={handleCountChecked} />}
                {location.pathname === '/reservas' && <TBodyReservas docs={docs as Reserva[]} actual={actual} checkGlobal={checkedGlobal} handleCountChecked={handleCountChecked} depExtra={depExtra} />}
                {location.pathname === '/notas' && <TBodyNotas docs={docs as Notas[]} actual={actual} checkGlobal={checkedGlobal} handleCountChecked={handleCountChecked} />}
                {location.pathname === '/habitaciones' && <TBodyHabitacion docs={docs as IHabitacion[]} actual={actual} checkGlobal={checkedGlobal} handleCountChecked={handleCountChecked} />}
            </table>
            <MenuChecked checkedGlobal={checkedGlobal} setCheckedGlobal={setCheckedGlobal} countChecked={countChecked} />
            <FooterTable actual={actual} setActual={handleSetActual} total={docs.length}/>
        </div>
    </>
}