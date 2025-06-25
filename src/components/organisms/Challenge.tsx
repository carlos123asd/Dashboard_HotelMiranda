import BtnWithIcon from "../atoms/BtnWithIcon";
import { IoMdAdd } from "react-icons/io";
import OpcionesCrearMeta from "../molecules/OpcionesCrearMeta";
import { useState } from "react";

export default function Challenge(){
    const [showOptions,setShowOptions] = useState(false)
    return <>
        <div className="challenge">
            <div className="contentTopChallenge">
                <h3>Metas Anuales</h3>
                <div 
                onMouseLeave={() => setShowOptions(false)} 
                onClick={() => setShowOptions((prevStatus) => !prevStatus)} className="contentOpcionesChallenge">
                    <BtnWithIcon icon={IoMdAdd} />
                    <OpcionesCrearMeta show={showOptions} />
                </div>
            </div>
        </div>
    </>
}