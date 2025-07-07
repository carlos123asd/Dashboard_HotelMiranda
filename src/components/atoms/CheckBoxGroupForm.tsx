export default function CheckBoxGroupForm({estado,handle,listOption}:{estado:string[],handle:(value:string[]) => void,listOption:Array<string>}){

    const handleCheckChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const isChecked = e.target.checked

        if(isChecked){
            handle([...estado, value])
        }else{
            handle(estado.filter((item:string) => item !== value))
        }
    }

    return <>
        <div style={{display:"flex", gap:"2em"}}>
            {
                listOption.map((option:string) => (
                    <>
                        <div>
                            <label className="contentLeftFormEmpleado" htmlFor={option}>{option}</label>
                            <input 
                            type="checkbox" 
                            value={option} 
                            name={option} 
                            id={option} 
                            checked={estado.includes(option)}
                            onChange={handleCheckChange}
                            />
                        </div> 
                    </>
                ))
            }
        </div>
    </>
}