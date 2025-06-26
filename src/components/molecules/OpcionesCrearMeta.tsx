import BtnWithIcon from "../atoms/BtnWithIcon";
import { BsPersonBadgeFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
import { RiMoneyEuroBoxFill } from "react-icons/ri";

export default function OpcionesCrearMeta({show}:{show:boolean}){

    const handleAddMeta = (value:string) => {
        const metasActuales = JSON.parse(localStorage.getItem("metas") || "[]")
        const nuevasMetas = [
            ...metasActuales,
            {
                tipo: value,
                inicial: 0,
                meta: 0,
            }
        ]
        localStorage.setItem("metas",JSON.stringify(nuevasMetas))
    }

    return <>
        <div style={{display: show ? "flex" : "none"}} className="contentCrearMeta">
            <div onClick={() => handleAddMeta("Empleados")}><BtnWithIcon icon={BsPersonBadgeFill} disable={true} /></div>
            <div className="contentCrearMetaSecond">
                <div onClick={() => handleAddMeta("Ocupaciones")}><BtnWithIcon icon={MdBedroomParent} disable={true} /></div>
                <div onClick={() => handleAddMeta("Ganancias")}><BtnWithIcon icon={RiMoneyEuroBoxFill} disable={true} /></div>
            </div>
        </div>
    </>
}