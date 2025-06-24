import react from "../../assets/react.svg"
import { GoHome } from "react-icons/go";
import { FaUserTie } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
export default function Nav(){
    const menu = [
        <GoHome className="btnNav" size={45} color="#939393"/>,
        <FaUserTie className="btnNav" size={35} color="#939393"/>,
        <TbBrandBooking className="btnNav" size={40} color="#939393"/>,
        <MdOutlineSpeakerNotes className="btnNav" size={35} color="#939393"/>,
        <FaRegBuilding className="btnNav" size={35} color="#939393"/>,
    ]
    return <>
        <div className="nav bgSecundary">
            <img className="navIcon" src={react} alt="" />
            <div className="contentNavIcons">
                {
                    menu.map((icon) => (
                        icon
                    ))
                }
            </div>
            <IoExitOutline className="btnNav" size={40} color="#939393" />
        </div>
    </>
}