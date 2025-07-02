import { LuPrinter } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
export default function MenuChecked({checkedGlobal,setCheckedGlobal,countChecked}:{checkedGlobal:boolean,setCheckedGlobal:(value:boolean) => void,countChecked:number}){
    return <>
        <div style={{display: checkedGlobal || countChecked >= 1 ? 'flex' : 'none'}} className="menuChecked">
            <span>{countChecked === 1 ? `${countChecked} registro seleccionado` : `${countChecked} registros seleccionados`}</span>
            <div className="contentBtnMenuChecked">
                <div className="btnMenuChecked">
                    <LuPrinter />
                    <span>Imprimir</span>
                </div>
                <div className="btnMenuChecked btnMenuCheckedEliminar">
                    <RiDeleteBin6Line />
                    <span>Eliminar</span>
                </div>
            </div>
            <IoClose onClick={() => setCheckedGlobal(false)} className="closeMenuChecked" color="#989898" size={20} />
        </div>
    </>
}