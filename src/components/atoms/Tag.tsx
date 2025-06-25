export default function Tag({text,colorText,bg}:{text:string,colorText:string,bg:string}){
    return <>
        <div style={{
            color: colorText,
            background: bg
        }} className='tagIa'>{text}</div>
    </>
}