export default function CardStatusTable({grado,nombre,cantidad}:{grado:number,nombre:string,cantidad:number}){
    
    const handleColorStatus = (value:number) => {
        switch(value){
            case 5: return "#00D8FF"
            case 4: return "#735DE4"
            case 3: return "#E68525"
            case 2: return "#52B447"
            case 1: return "#EA5055"
            default: throw new Error("Opcion status color invalido")
        }
    }
    
    return <>
        <div className="cardStatusTable">
            <div className="titleStatusTable">
                <span className="circleStatus" style={{background: handleColorStatus(grado)}}></span>
                <span>{nombre}</span>
            </div>
            <span className="countStatusTable">{cantidad}</span>
        </div>
    </>
}