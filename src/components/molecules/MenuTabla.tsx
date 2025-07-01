import { useMenuTable } from "../../hooks/hookMenuTable";
import TagMenuTable from "../atoms/TagMenuTable";

export default function MenuTabla({menu}:{menu:Array<string>}){
    const {setMenuActive} = useMenuTable()

    const handleLimpiarFiltros = () => {
        setMenuActive('limpiar')
    }

    return <>
        <div className="MenuTabla">
            <div className="contentMenuTabla">
                {
                    menu.map((itemMenu, index) => (
                        <TagMenuTable key={index} index={index} name={itemMenu}/>
                    ))
                }
            </div>
            <span className="eliminarFiltro" onClick={handleLimpiarFiltros}>Eliminar Filtros</span>
        </div>
    </>
}