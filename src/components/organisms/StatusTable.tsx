import CardStatusTable from "../molecules/CardStatusTable"

export default function StatusTable({status}:{status:Array<{nombre:string,grado:number,cantidad:number}>}){
   
    return <>
        <div className="statusTable">
            {
                status.map((status,index) => (
                    <CardStatusTable key={index} nombre={status.nombre} grado={status.grado} cantidad={status.cantidad}/>
                ))
            }
        </div>
    </>
}