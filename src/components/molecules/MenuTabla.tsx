import TagMenuTable from "../atoms/TagMenuTable";

export default function MenuTabla({menu}:{menu:Array<string>}){

    return <>
        <div className="MenuTabla">
            {
                menu.map((itemMenu, index) => (
                    <TagMenuTable key={index} name={itemMenu}/>
                ))
            }
        </div>
    </>
}