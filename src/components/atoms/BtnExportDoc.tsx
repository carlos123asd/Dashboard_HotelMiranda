import { GrDocumentText } from "react-icons/gr";

export default function BtnExportDoc({nombre}:{nombre:string}){
    return <>
        <div className="btnAddDoc btnExportDoc">
            <GrDocumentText size={20}/>
            <span>Exportar {nombre}</span>
        </div>
    </>
}