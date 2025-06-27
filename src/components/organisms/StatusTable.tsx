import CardStatusTable from "../molecules/CardStatusTable"

export default function StatusTable(){
    const statusEmpleado = [
        {nombre:"Activo",grado:2,cantidad:"200"},
        {nombre:"Inactivo",grado:1,cantidad:"20"},
        {nombre:"Suspendido",grado:3,cantidad:"3"}
    ]
    return <>
        <div className="statusTable">
            {
                statusEmpleado.map((status) => (
                    <CardStatusTable nombre={status.nombre} grado={status.grado} cantidad={status.cantidad}/>
                ))
            }
        </div>
    </>
}