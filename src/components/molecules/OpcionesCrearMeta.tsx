import BtnWithIcon from "../atoms/BtnWithIcon";
import { BsPersonBadgeFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
import { RiMoneyEuroBoxFill } from "react-icons/ri";

export default function OpcionesCrearMeta({show}:{show:boolean}){
    return <>
        <div style={{display: show ? "flex" : "none"}} className="contentCrearMeta">
              <BtnWithIcon icon={BsPersonBadgeFill} disable={true} />
            <div className="contentCrearMetaSecond">
                <BtnWithIcon icon={MdBedroomParent} disable={true} />
                <BtnWithIcon icon={RiMoneyEuroBoxFill} disable={true} />
            </div>
        </div>
    </>
}