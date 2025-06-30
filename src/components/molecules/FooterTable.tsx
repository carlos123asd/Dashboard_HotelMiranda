
import { MdArrowBackIos } from "react-icons/md";
export default function FooterTable({actual,setActual,total}:{actual:number,setActual:(value:boolean) =>  void,total:number}){
    const handleAnterior = () => {
        if(actual >= 10){
            setActual(false)
        }
    }

    const handleSiguiente = () => {
        if(actual <= total){
            setActual(true)
        }
    }

    return <>
        <div className="footerTable">
            <div className="infoFooter">Mostrando <strong style={{color:"white"}}>{
                total <= 10 ?
                total :
                actual
                }</strong> de <strong style={{color:"white"}}>{total}</strong> registros</div>
            <div className="pagination">
                <div onClick={!(total <= 10 || actual === 10) ? handleAnterior : undefined} className={`btnPagination ${total <= 10 || actual === 10 ? 'btnPaginationInactive' : 'btnPaginationActive'}`}>
                    <MdArrowBackIos size={20} />
                    <span>Anterior</span>
                </div>
                <div onClick={!(total <= 10 || (actual > (total - 10) && actual <= total)) ? handleSiguiente : undefined} className={`btnPagination ${total <= 10 || (actual > (total - 10) && actual <= total) ? 'btnPaginationInactive' : 'btnPaginationActive'}`}>
                    <span>Siguiente</span>
                    <MdArrowBackIos size={20} style={{transform:"rotate(180deg)"}}/>
                </div>
            </div>
        </div>
    </>
}