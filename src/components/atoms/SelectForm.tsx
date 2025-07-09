export default function SelectForm({handle,items,value}:{handle:(value:string) => void,items:Array<string>,value?:string}){
    return <>
        <select onChange={(e:React.ChangeEvent<HTMLSelectElement>) => handle(e.currentTarget.value)} className="selectForm" name="" id="">
            {
                items.map((item:string,index:number) => (
                    <option key={index} value={item} selected={value === item ? true : false}>{item}</option>
                ))
            }
        </select>
    </>
}