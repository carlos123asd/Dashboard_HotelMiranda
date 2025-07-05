import { useState } from "react";
import type { IconType } from "react-icons"
export default function InputTextIcon({placeholder,Icon,style,ocultar}:{placeholder:string,Icon:IconType,style?:React.CSSProperties,ocultar?:boolean}){
    const [focused, setFocused] = useState(false);
    return <>
            <div style={style} className={`inputTextForm inputTextFormIcon ${focused ? 'focusedForm' : ''}`}>
                <Icon  color="#8A8A8A" size={25} />
                <input
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)} 
                className="selectInput" 
                type={ocultar ? "password" : "text"} placeholder={placeholder} />
            </div>
        </>
}