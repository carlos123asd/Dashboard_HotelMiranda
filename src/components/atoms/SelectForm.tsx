export default function SelectForm({items}:{items:Array<string>}){
    return <>
        <select className="selectForm" name="" id="">
            {
                items.map((item:string) => (
                    <option>{item}</option>
                ))
            }
        </select>
    </>
}