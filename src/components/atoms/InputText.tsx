import type React from "react";

export default function InputText({estado,handle,placeholder,style}:{estado:string,handle:(value:string) => void,placeholder:string,style:React.CSSProperties}){
    
    return <>
        <input 
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handle(e.currentTarget.value)} 
        value={estado}
        style={style} className="inputTextForm"
        type="text" 
        placeholder={placeholder} />
    </>
}