import BtnNotification from "../atoms/BtnNotification";
import BtnPerfil from "../atoms/BtnPerfil";
import InputSearch from "../molecules/InputSearch";

export default function TopBar(){
    return <>
        <div className="topbar">
            <h1 className="titulo-topBar">My Classes</h1>
            <div className="contentRight-TopBar">
                <InputSearch />
                <BtnNotification />
                <BtnPerfil />
            </div>
        </div>
    </>
}