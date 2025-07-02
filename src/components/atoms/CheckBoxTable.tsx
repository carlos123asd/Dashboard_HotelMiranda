import { useEffect, useState } from "react"

export default function CheckBoxTable({checkGlobal,handleCountChecked}:{checkGlobal:boolean,handleCountChecked:(value:number) => void}){
    const [checked,setChecked] = useState<boolean>(checkGlobal)

    const handleCheck = () => {
        setChecked((prev) => {
            const newStatus = !prev
            handleCountChecked( newStatus ?  1 : -1)
            return newStatus
        })
    }

    useEffect(() => {
        if(checkGlobal){
            setChecked(true)
        }else{
            setChecked(false)
        }
    },[checkGlobal])

    return <>
        <td><input onChange={handleCheck} className="checkboxTable" checked={checked} type="checkbox" name="" id="" /></td>
    </>
}