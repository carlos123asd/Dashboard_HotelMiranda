import { useEffect, useState } from "react"
import type { tipoPermisos } from "../../types/typePermisos"

export default function CheckBoxGroupFormEmpleado({estado,handle,listOption,value}:{estado:tipoPermisos[],handle:(value:tipoPermisos[]) => void,listOption:Array<string>,value?:tipoPermisos[]}){
    const [permisoExtra,setPermisoExtra] = useState<Array<"ADM"|"GR"|"GE"|"GH">|null>(null)
    const [nivelADM,setNivelADM] = useState<number>(permisoExtra?.some((permiso) => permiso === "ADM") ? 1 : 0)
    const [nivelGR,setNivelGR] = useState<number>((permisoExtra?.some((permiso) => permiso === "GR") ? 1 : 0))
    const [nivelGE,setNivelGE] = useState<number>((permisoExtra?.some((permiso) => permiso === "GE") ? 1 : 0))
    const [nivelGH,setNivelGH] = useState<number>((permisoExtra?.some((permiso) => permiso === "GH") ? 1 : 0))
 
    const switchNivelToValue = (value:"crear"|"modificar"|"eliminar") => {
        switch(value){
            case "crear": return 1;
            case "modificar": return 2;
            case "eliminar": return 3;
            default: throw new Error("Nivel invalido")
        } 
    }

    const switchNivelToValueString = (value:1|2|3) => {
        switch(value){
            case 1: return "crear";
            case 2: return "modificar";
            case 3: return "eliminar";
            default: throw new Error("Nivel invalido para valor string")
        } 
    }

    const swithDescripcionValue = (value:"crear"|"modificar"|"eliminar") => {
        switch(value){
            case "crear": return "Creacion sobre los ";
            case "modificar": return "Modificacion sobre los";
            case "eliminar": return "Eliminacion sobre los";
            default: throw new Error("Nivel invalido")
        } 
    }

    const handleCheckChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value
        const isChecked = e.target.checked

        if(isChecked){
            setPermisoExtra([...(permisoExtra ?? []), value as "ADM" | "GR" | "GE" | "GH"])
            handle([
                ...estado,
                {
                    codigo: value,
                    nivel: 1,
                    descripcion: swithDescripcionValue("crear") + " "+ value
                }
            ])
            if(value === "ADM") setNivelADM(1);
            if(value === "GR") setNivelGR(1);
            if(value === "GE") setNivelGE(1);
            if(value === "GH") setNivelGH(1);
        }else{
            setPermisoExtra((permisoExtra ?? []).filter((item:string) => item !== value))
            handle(estado.filter((item) => item.codigo !== value))
            if(value === "ADM") setNivelADM(0);
            if(value === "GR") setNivelGR(0);
            if(value === "GE") setNivelGE(0);
            if(value === "GH") setNivelGH(0);
        }
    }
    
    useEffect(() => {
        if(value){
            setPermisoExtra(value.map(permiso => permiso.codigo as "ADM" | "GR" | "GE" | "GH"))
        }
    },[])
    
    useEffect(() => {
        let niveles:tipoPermisos[] = estado

        if(nivelADM !== 0){
            const prev = niveles.filter(item => item.codigo !== "ADM")
            niveles = [
                ...prev,
                {
                    codigo: "ADM",
                    nivel: nivelADM,
                    descripcion: swithDescripcionValue(switchNivelToValueString(nivelADM as 1|2|3)) + " ADM"
                }
            ]
        }
        if(nivelGR !== 0){
            const prev = niveles.filter(item => item.codigo !== "GR")
            niveles = [
                ...prev,
                {
                    codigo: "GR",
                    nivel: nivelGR,
                    descripcion: swithDescripcionValue(switchNivelToValueString(nivelGR as 1|2|3)) + " GR"
                }
            ]
        }
        if(nivelGE !== 0){
            const prev = niveles.filter(item => item.codigo !== "GE")
            niveles = [
                ...prev,
                {
                    codigo: "GE",
                    nivel: nivelGE,
                    descripcion: swithDescripcionValue(switchNivelToValueString(nivelGE as 1|2|3)) + " GE"
                }
            ]
        }
        if(nivelGH !== 0){
            const prev = niveles.filter(item => item.codigo !== "GH")
            niveles = [
                ...prev,
                {
                    codigo: "GH",
                    nivel: nivelGH,
                    descripcion: swithDescripcionValue(switchNivelToValueString(nivelGH as 1|2|3)) + " GH"
                }
            ]
        }

        handle(niveles)
    },[nivelADM,nivelGR,nivelGE,nivelGH])

    return <>
            <div style={{display:"flex", gap:"2em"}}>
                {
                    listOption.map((option: string, index: number) => (
                        <>
                            <div key={index}>
                                <label className="contentLeftFormEmpleado" htmlFor={option}>{option}</label>
                                <input 
                                type="checkbox" 
                                value={option} 
                                name={option} 
                                id={option} 
                                checked={value !== undefined ? value.some((item) => item.codigo === option) : ((permisoExtra ?? []).includes(option as "ADM" | "GR" | "GE" | "GH"))}
                                onChange={handleCheckChange}
                                />
                            </div> 
                        </>
                    ))
                }
            </div>
        
            <div style={{display:"flex",flexDirection:"column",gap:"1em"}}>
                {permisoExtra?.includes("ADM") && 
                <div style={{marginLeft:"2em"}}>
                    <div style={{marginBottom:".5em"}}>
                        <span style={{marginRight:"1em",width:"max-content"}} className="contentLeftFormEmpleado">Nivel ADM (1-3)</span>
                        <div>
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="crearADM">crear</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelADM(switchNivelToValue("crear")) : null} style={{marginRight:"1em"}} type="radio" name="nivelADMADM" id="crearADM" checked={value ? value.some(permiso => permiso.nivel === 1) : false} />
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="modificarADM">modificar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelADM(switchNivelToValue("modificar")) : null} style={{marginRight:"1em"}} type="radio" name="nivelADM" id="modificarADM" checked={value ? value.some(permiso => permiso.nivel === 2) : false} />
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="eliminarADM">eliminar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelADM(switchNivelToValue("eliminar")) : null} type="radio" name="nivelADM" id="eliminarADM" checked={value ? value.some(permiso => permiso.nivel === 3) : false} />
                        </div>
                    </div>
                </div>}

                {permisoExtra?.includes("GR") && 
                <div style={{marginLeft:"2em"}}>
                    <div style={{marginBottom:".5em"}}>
                        <span style={{marginRight:"1em",width:"max-content"}} className="contentLeftFormEmpleado">Nivel GR (1-3)</span>
                        <div>
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="crearGR">crear</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGR(switchNivelToValue("crear")) : null} style={{marginRight:"1em"}} type="radio" name="nivelGR" id="crearGR" checked={value ? value.some(permiso => permiso.nivel === 1) : false}/>
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="modificarGR">modificar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGR(switchNivelToValue("modificar")) : null} style={{marginRight:"1em"}} type="radio" name="nivelGR" id="modificarGR" checked={value ? value.some(permiso => permiso.nivel === 2) : false} />
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="eliminarGR">eliminar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGR(switchNivelToValue("eliminar")) : null} type="radio" name="nivelGR" id="eliminarGR" checked={value ? value.some(permiso => permiso.nivel === 3) : false} />
                        </div>
                    </div>
                </div>}

                {permisoExtra?.includes("GE") && 
                <div style={{marginLeft:"2em"}}>
                    <div style={{marginBottom:".5em"}}>
                        <span style={{marginRight:"1em",width:"max-content"}} className="contentLeftFormEmpleado">Nivel GE (1-3)</span>
                        <div>
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="crearGE">crear</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGE(switchNivelToValue("crear")) : null} style={{marginRight:"1em"}} type="radio" name="nivelGE" id="crearGE" checked={value ? value.some(permiso => permiso.nivel === 1) : false} />
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="modificarGE">modificar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGE(switchNivelToValue("modificar")) : null} style={{marginRight:"1em"}} type="radio" name="nivelGE" id="modificarGE" checked={value ? value.some(permiso => permiso.nivel === 2) : false} />
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="eliminarGE">eliminar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGE(switchNivelToValue("eliminar")) : null} type="radio" name="nivelGE" id="eliminarGE" checked={value ? value.some(permiso => permiso.nivel === 3) : false} />
                        </div>
                    </div>
                </div>}

                {permisoExtra?.includes("GH") && 
                <div style={{marginLeft:"2em"}}>
                    <div style={{marginBottom:".5em"}}>
                        <span style={{marginRight:"1em",width:"max-content"}} className="contentLeftFormEmpleado">Nivel GH (1-3)</span>
                        <div>
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="crearGH">crear</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGH(switchNivelToValue("crear")) : null} style={{marginRight:"1em"}} type="radio" name="nivelGH" id="crearGH" checked={value ? value.some(permiso => permiso.nivel === 1) : false} />
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="modificarGH">modificar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGH(switchNivelToValue("modificar")) : null} style={{marginRight:"1em"}} type="radio" name="nivelGH" id="modificarGH" checked={value ? value.some(permiso => permiso.nivel === 2) : false} />
                            <label style={{fontSize:".9rem"}} className="contentLeftFormEmpleado" htmlFor="eliminarGH">eliminar</label>
                            <input onChange={(e:React.ChangeEvent<HTMLInputElement>) => e.target.checked ? setNivelGH(switchNivelToValue("eliminar")) : null} type="radio" name="nivelGH" id="eliminarGH" checked={value ? value.some(permiso => permiso.nivel === 3) : false} />
                        </div>
                    </div>
                </div>}
            </div>
    </>
}