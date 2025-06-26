import BtnWithIcon from "../atoms/BtnWithIcon";
import { IoMdAdd } from "react-icons/io";
import OpcionesCrearMeta from "../molecules/OpcionesCrearMeta";
import { useEffect, useState } from "react";
import CardChallenge from "../molecules/CardChallenge";
import { BsPersonBadgeFill } from "react-icons/bs";
import { MdBedroomParent } from "react-icons/md";
import { RiMoneyEuroBoxFill } from "react-icons/ri";

type tiposChallenge = "empleados" | "ocupacion" | "ganancias"
type tipoMeta = {
    tipo: string,
    inicial: number,
    meta: number,
}

export default function Challenge(){
    const [showOptions,setShowOptions] = useState(false)
    const metasFromStorage = localStorage.getItem("metas");
    const [metas, setMetas] = useState(() => JSON.parse(metasFromStorage || "[]"))
    

    const iconChallenge = (value:tiposChallenge) => {
        switch(value){
            case "empleados": return BsPersonBadgeFill
            case "ganancias": return RiMoneyEuroBoxFill
            case "ocupacion": return MdBedroomParent
            default: throw new Error ("Valor icon invalido")
        }
    }

    useEffect(() => {
        setMetas(JSON.parse(metasFromStorage || "[]"))
    }, [metasFromStorage])

    return <>
        <div className="challenge">
            <div className="contentTopChallenge">
                <h3>Metas Anuales</h3>
                <div 
                onMouseLeave={() => setShowOptions(false)} 
                onClick={() => setShowOptions((prevStatus) => !prevStatus)} className="contentOpcionesChallenge">
                    <BtnWithIcon icon={IoMdAdd} />
                    <OpcionesCrearMeta show={showOptions} />
                    {
                        metas.map((meta:tipoMeta, idx: number) => (
                            <CardChallenge key={idx} icon={iconChallenge(meta.tipo as tiposChallenge)} nombre={meta.tipo} meta={meta.meta} inicial={meta.inicial} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>
}