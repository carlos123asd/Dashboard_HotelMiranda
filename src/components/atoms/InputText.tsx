import type React from "react";

export default function InputText({estado,handle,placeholder,style,value}:{estado:string,handle:(value:string) => void,placeholder:string,style:React.CSSProperties,value?:string}){
    
    return <>
        <input 
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => handle(e.currentTarget.value)} 
        value={estado ? estado : value}
        style={style} className="inputTextForm"
        type="text" 
        placeholder={placeholder} />
    </>
}