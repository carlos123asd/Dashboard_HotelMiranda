import type { IconType } from "react-icons"
export default function InputTextIcon({placeholder,Icon,style,ocultar}:{placeholder:string,Icon:IconType,style:React.CSSProperties,ocultar?:boolean}){
    return <>
        <div style={style} className="inputTextForm inputTextFormIcon">
            <Icon  color="#8A8A8A" size={25} />
            <input style={{outline:"none",border:"none",color:"#555555"}} type={ocultar ? "password" : "text"} placeholder={placeholder} />
        </div>
    </>
}