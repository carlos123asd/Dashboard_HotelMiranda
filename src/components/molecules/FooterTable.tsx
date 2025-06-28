import { MdArrowBackIos } from "react-icons/md";
export default function FooterTable(){
    return <>
        <div className="footerTable">
            <div className="infoFooter">Mostrando <strong style={{color:"white"}}>10</strong> de <strong style={{color:"white"}}>100</strong> registros</div>
            <div className="pagination">
                <div className="btnPagination">
                    <MdArrowBackIos size={20} />
                    <span>Anterior</span>
                </div>
                <div className="btnPagination">
                    <span>Siguiente</span>
                    <MdArrowBackIos size={20} style={{transform:"rotate(180deg)"}}/>
                </div>
            </div>
        </div>
    </>
}