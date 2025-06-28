import BtnWithIcon from "../atoms/BtnWithIcon";
import BtnPerfil from "../atoms/BtnPerfil";
import InputSearch from "../molecules/InputSearch";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function TopBar(){
    const location = useLocation()

    const switchTitle = () => {
        switch(location.pathname){
            case '/': return "Resumen"
            case '/empleados': return "Empleados"
            case '/reservas': return "Reservas"
            case '/notas': return "Notas"
            case '/habitaciones': return "Habitaciones"
            default: throw new Error("Ruta para titulo Invalido")
        }
    }

    return <>
        <div className="topbar">
            <h1 className="titulo-topBar">{switchTitle()}</h1>
            <div className="contentRight-TopBar">
                <InputSearch />
                <BtnWithIcon icon={IoMdNotificationsOutline} className="iconNotification" />
                <BtnPerfil />
            </div>
        </div>
    </>
}