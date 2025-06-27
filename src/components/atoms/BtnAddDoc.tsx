import { IoMdAdd } from "react-icons/io";
export default function BtnAddDoc({nombre}:{nombre:string}){
    return <>
        <div className="btnAddDoc">
            <IoMdAdd size={20} color="#fff"/>
            <span>Añadir {nombre}</span>
        </div>
    </>
}