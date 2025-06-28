import react from "../../assets/react.svg"
import { GoHome } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { useMenu } from "../../hooks/hookMenu";
import { useLocation, useNavigate } from "react-router-dom";
export default function Nav(){
    const {showMenu,setShowMenu} = useMenu()
    const navigate = useNavigate()
    const location = useLocation()
    const menu = [
        {nombre:"/",icono:<GoHome onClick={() => navigate("/")} className="btnNav" size={45} color={location.pathname ===  "/" ? "#fff" : "#939393"}/>},
        {nombre:"/empleados",icono:<FaUserTie onClick={() => navigate("/empleados")} className="btnNav" size={35} color={location.pathname ===  "/empleados" ? "#fff" : "#939393"}/>},
        {nombre:"/reservas",icono:<TbBrandBooking onClick={() => navigate("/reservas")} className="btnNav" size={40} color={location.pathname ===  "/reservas" ? "#fff" : "#939393"}/>},
        {nombre:"/notas",icono:<MdOutlineSpeakerNotes onClick={() => navigate("/notas")} className="btnNav" size={35} color={location.pathname ===  "/notas" ? "#fff" : "#939393"}/>},
        {nombre:"/habitaciones",icono:<FaRegBuilding onClick={() => navigate("/habitaciones")} className="btnNav" size={35} color={location.pathname ===  "/habitaciones" ? "#fff" : "#939393"}/>},
    ]

    const handleShowHideMenu = () => {
        setShowMenu(!showMenu)
    }

    return <>
        <div className={`nav bgSecundary ${showMenu ? 'showMenu' : 'hideMenu'}`}>
            <img className="navIcon" src={react} alt="" />
            <div className="contentNavIcons">
                {
                    menu.map((icon,index) => (
                        <div className="barItemMenu" key={index}>
                            <span style={{background: location.pathname === icon.nombre ? "white" : "none"}} className="barSelectedItem"></span>
                            {icon.icono}
                        </div>
                    ))
                }
            </div>
            <IoExitOutline className="btnNav" size={40} color="#939393" />
            {/*Pestaña*/}
            <div onClick={handleShowHideMenu} className="showHideBtn"></div>
        </div>
    </>
}