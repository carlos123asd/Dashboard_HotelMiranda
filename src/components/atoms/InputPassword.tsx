import { useEffect, useState } from "react"
import { FaAsterisk } from "react-icons/fa6";
import InputTextIcon from "./InputTextIcon"

export default function InputPassword({estado,handle}:{estado:string,handle:(value:string) => void}){
    const [password,setPassword] = useState<string | null>(null)
    const [confirmPassword,setConfirmPassword] = useState<string | null>(null)

    useEffect(() => {
        if(!password || !confirmPassword){
            handle("invalido")
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
            style={{width:"50%",border:estado === 'invalido' ? "2px solid #EA5055" : ""}} 
            ocultar={true} />
            
            <InputTextIcon 
            estado={confirmPassword ? confirmPassword : ""} 
            handle={setConfirmPassword} placeholder="confirmar contraseña" 
            Icon={FaAsterisk} 
            style={{width:"50%",border:estado === 'invalido' ? "2px solid #EA5055" : ""}} 
            ocultar={true} />
        </div>
    </>
}