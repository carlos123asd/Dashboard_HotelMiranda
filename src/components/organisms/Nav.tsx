import react from "../../assets/react.svg"
import { GoHome } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { useMenu } from "../../hooks/hookMenu";
export default function Nav(){
    const {activeMenu,setActiveMenu} = useMenu()
    const {showMenu,setShowMenu} = useMenu()
    const menu = [
        {nombre:"Inicio",icono:<GoHome className="btnNav" size={45} color={activeMenu ===  "Inicio" ? "#fff" : "#939393"}/>},
        {nombre:"Empleados",icono:<FaUserTie className="btnNav" size={35} color={activeMenu ===  "Empleados" ? "#fff" : "#939393"}/>},
        {nombre:"Reservas",icono:<TbBrandBooking className="btnNav" size={40} color={activeMenu ===  "Reservas" ? "#fff" : "#939393"}/>},
        {nombre:"Notas",icono:<MdOutlineSpeakerNotes className="btnNav" size={35} color={activeMenu ===  "Notas" ? "#fff" : "#939393"}/>},
        {nombre:"Habitaciones",icono:<FaRegBuilding className="btnNav" size={35} color={activeMenu ===  "Habitaciones" ? "#fff" : "#939393"}/>},
    ]

    const handleOnClickMenu = (value:string) => {
        setActiveMenu(value)
    }

    const handleShowHideMenu = () => {
        setShowMenu(!showMenu)
    }

    return <>
        <div className={`nav bgSecundary ${showMenu ? 'showMenu' : 'hideMenu'}`}>
            <img className="navIcon" src={react} alt="" />
            <div className="contentNavIcons">
                {
                    menu.map((icon,index) => (
                        <div className="barItemMenu" key={index} onClick={() => handleOnClickMenu(icon.nombre)}>
                            <span style={{background: activeMenu === icon.nombre ? "white" : "none"}} className="barSelectedItem"></span>
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