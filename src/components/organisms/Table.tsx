import MenuTabla from "../molecules/MenuTabla";

export default function Table({menu}:{menu:Array<string>}){
    return <>
        <div>
            <MenuTabla menu={menu} />
        </div>
    </>
}