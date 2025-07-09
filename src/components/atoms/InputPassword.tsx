import { useEffect, useState } from "react"
import { FaAsterisk } from "react-icons/fa6";
import InputTextIcon from "./InputTextIcon"

export default function InputPassword({estado,handle,value}:{estado:string,handle:(value:string) => void,value?:string}){
    const [password,setPassword] = useState<string | null>(null)
    const [confirmPassword,setConfirmPassword] = useState<string | null>(null)
    
    useEffect(() => {
        if(value){
            setPassword(value)
            setConfirmPassword(value)
        }
    },[])

    useEffect(() => {
        if(!password || !confirmPassword){
            return;
        }
        if(password === confirmPassword){
            handle(password)
        }else{
            handle("invalido")
        }
    },[password,confirmPassword])

    return <>
        <div className="contentRightFormEmpleado">
            <InputTextIcon 
            estado={password ? password : ""} 
            handle={setPassword} 
            placeholder="contraseña" 
            Icon={FaAsterisk} 
            style={{width:"50%",border:estado === 'invalido' ? "2px solid #EA5055" : "2px solid #DDDDDD"}} 
            ocultar={true} value={value ? value : undefined} />
            
            <InputTextIcon 
            estado={confirmPassword ? confirmPassword : ""} 
            handle={setConfirmPassword} placeholder="confirmar contraseña" 
            Icon={FaAsterisk} 
            style={{width:"50%",border:estado === 'invalido' ? "2px solid #EA5055" : "2px solid #DDDDDD"}} 
            ocultar={true} value={value ? value : undefined} />
        </div>
    </>
}