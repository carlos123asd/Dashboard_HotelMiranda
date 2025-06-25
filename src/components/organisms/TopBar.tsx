import { useMenu } from "../../hooks/hookMenu";
import BtnNotification from "../atoms/BtnNotification";
import BtnPerfil from "../atoms/BtnPerfil";
import InputSearch from "../molecules/InputSearch";

export default function TopBar(){
    const {activeMenu} = useMenu()
    return <>
        <div className="topbar">
            <h1 className="titulo-topBar">{activeMenu}</h1>
            <div className="contentRight-TopBar">
                <InputSearch />
                <BtnNotification />
                <BtnPerfil />
            </div>
        </div>
    </>
}