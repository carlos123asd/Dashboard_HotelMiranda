import CardStatusTable from "../molecules/CardStatusTable"

export default function StatusTable({status}:{status:Array<{nombre:string,grado:number,cantidad:string}>}){
   
    return <>
        <div className="statusTable">
            {
                status.map((status) => (
                    <CardStatusTable nombre={status.nombre} grado={status.grado} cantidad={status.cantidad}/>
                ))
            }
        </div>
    </>
}