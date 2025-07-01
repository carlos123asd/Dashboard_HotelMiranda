import { useMenuTable } from "../../hooks/hookMenuTable"

export default function TagMenuTable({name,index}:{name:string,index:number}){
    const {menuActive,setMenuActive} = useMenuTable()
    return <>
        <div style={{
            borderBottom:(menuActive === name || (menuActive === 'limpiar' && index === 0)) ? "2px solid #AA92FC" : "",
            color: menuActive === name ? "#fff" : ""
            }} 
            onClick={() => setMenuActive(name)} className="tagMenuTable">
            {name}
        </div>
    </>
}