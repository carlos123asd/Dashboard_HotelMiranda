import { useMenuTable } from "../../hooks/hookMenuTable"

export default function TagMenuTable({name}:{name:string}){
    const {menuActive,setMenuActive} = useMenuTable()
    return <>
        <div style={{
            borderBottom: menuActive === name ? "2px solid #AA92FC" : "",
            color: menuActive === name ? "#fff" : ""
            }} 
            onClick={() => setMenuActive(name)} className="tagMenuTable">
            {name}
        </div>
    </>
}