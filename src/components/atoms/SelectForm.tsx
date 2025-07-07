export default function SelectForm({handle,items}:{handle:(value:string) => void,items:Array<string>}){
    return <>
        <select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handle(e.currentTarget.value)} className="selectForm" name="" id="">
            {
                items.map((item:string) => (
                    <option value={item}>{item}</option>
                ))
            }
        </select>
    </>
}