import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { es } from 'date-fns/locale/es';
import { useEffect } from "react";

export default function InputFecha({estado,handle,style,placeholder}:{estado:string,handle:(value:string) => void,style:React.CSSProperties,placeholder:string}){
   registerLocale('es', es)

    useEffect(() => {
        handle( new Date().toISOString() )
    },[])

   return <>
        <div style={style}>
            <span style={{marginRight:"1em"}} className="contentLeftFormEmpleado">{placeholder}</span>
            <DatePicker
                selected={estado ? new Date(estado) :  new Date()}
                onChange={(date) => {
                    if (date) {
                        handle(date.toISOString());
                    }
                }}
                showTimeSelect
                dateFormat="Pp"
                locale="es"
                placeholderText={placeholder}
            />
        </div>
    </>
}