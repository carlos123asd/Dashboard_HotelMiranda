export default function Tag({text,colorText,bg,classname}:{text:string,colorText:string,bg:string,classname?:string}){
    return <>
        <div style={{
            color: colorText,
            background: bg
        }} className={`tagIa ${classname}`}>{text}</div>
    </>
}