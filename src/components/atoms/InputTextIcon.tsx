import { useState } from "react";
import type { IconType } from "react-icons"
export default function InputTextIcon({estado,handle,placeholder,Icon,style,ocultar}:{estado:string,handle:(value:string) => void,placeholder:string,Icon:IconType,style?:React.CSSProperties,ocultar?:boolean}){
    const [focused, setFocused] = useState(false);
    return <>
            <div style={style} className={`inputTextForm inputTextFormIcon ${focused ? 'focusedForm' : ''}`}>
                <Icon  color="#8A8A8A" size={25} />
                <input
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => handle(e.currentTarget.value)} 
                value={estado}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)} 
                className="selectInput" 
                type={ocultar ? "password" : "text"} placeholder={placeholder} />
            </div>
        </>
}