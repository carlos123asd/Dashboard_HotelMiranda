import type React from "react";

export default function InputText({placeholder,style}:{placeholder:string,style:React.CSSProperties}){
    return <>
        <input style={style} className="inputTextForm" type="text" placeholder={placeholder} />
    </>
}