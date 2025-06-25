import { useMenu } from "../../hooks/hookMenu";
import BtnWithIcon from "../atoms/BtnWithIcon";
import BtnPerfil from "../atoms/BtnPerfil";
import InputSearch from "../molecules/InputSearch";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function TopBar(){
    const {activeMenu} = useMenu()
    return <>
        <div className="topbar">
            <h1 className="titulo-topBar">{activeMenu}</h1>
            <div className="contentRight-TopBar">
                <InputSearch />
                <BtnWithIcon icon={IoMdNotificationsOutline} className="iconNotification" />
                <BtnPerfil />
            </div>
        </div>
    </>
}