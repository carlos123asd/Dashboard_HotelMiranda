export default function CheckBoxGroupForm({listOption}:{listOption:Array<string>}){
    return <>
        <div style={{display:"flex", gap:"2em"}}>
            {
                listOption.map((option:string) => (
                    <>
                        <div>
                            <label className="contentLeftFormEmpleado" htmlFor={option}>{option}</label>
                            <input type="checkbox" name={option} id={option} />
                        </div> 
                    </>
                ))
            }
        </div>
    </>
}