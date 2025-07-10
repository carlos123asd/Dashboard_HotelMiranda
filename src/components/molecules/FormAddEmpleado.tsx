import avatar from "../../assets/perfil.jpg"
import InputText from "../atoms/InputText"
import InputTextIcon from "../atoms/InputTextIcon"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import GroupBtnsActionForm from "../atoms/GroupBtnsActionForm";
import SelectForm from "../atoms/SelectForm";
import InputPhoto from "../atoms/InputPhoto";
import { useEffect, useState } from "react";
import InputPassword from "../atoms/InputPassword";
import CheckBoxGroupFormEmpleado from "../atoms/CheckBoxGroupFormEmpleado";
import type { tipoPermisos } from "../../types/typePermisos";
import { useModal } from "../../hooks/hookModal";
import type { empleado } from "../../types/Empleado.type";

export default function FormAddEmpleado(){
    const {edit,loadDTO} = useModal()
    const [image,setImage] = useState<string | null>(null)
    const [nombre,setNombre] = useState<string | null>("")
    const [apellido,setApellido] = useState<string | null>("")
    const [email,setEmail] = useState<string | null>("")
    const [telefono,setTelefono] = useState<string | null>(null)
    const [password,setPassword] = useState<string | null>(null)
    const [rol,setRol] = useState<"admin"|"staff">("admin")
    const [estado,setEstado] = useState<"activo"|"inactivo"|"suspendido">("activo")
    const [permisos,setPermisos] = useState<tipoPermisos[]>()

    useEffect(() => {
        if(loadDTO){
            setImage((loadDTO as empleado).photo)
            setNombre((loadDTO as empleado).nombre.split(" ")[0])
            setApellido((loadDTO as empleado).nombre.split(" ").reverse()[0])
            setEmail((loadDTO as empleado).email)
            setTelefono((loadDTO as empleado).telefono)
            setPassword((loadDTO as empleado).password)
            setRol((loadDTO as empleado).rol.codigo as "admin"|"staff")
            setEstado((loadDTO as empleado).status as "activo"|"inactivo"|"suspendido")
            setPermisos((loadDTO as empleado).permisosExtra)
        }
    },[])

     return <>
        <div className="FormAddDocEmpleado">
            <div className="headerDocEmpleado">
                <div className="topImagen">
                    <div className="imagenAddPerfil">
                        <img src={edit ? (loadDTO as empleado).photo : (!image ? avatar : image)} alt="" />
                    </div>
                </div>
            </div>
            <div className="bodyDocEmpleado">
                <div  className="contentNamePerfil">
                    <h2>{loadDTO ? (loadDTO as empleado).nombre : nombre+" "+apellido}</h2>
                    <span>{loadDTO ? (loadDTO as empleado).email : email}</span>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Nombre</span>
                    <div className="contentRightFormEmpleado">
                        <InputText estado={nombre ? nombre :  ""} handle={setNombre} placeholder="nombre" style={{width:"50%"}} value={loadDTO ? (loadDTO as empleado).nombre.split(" ")[0] : undefined} />
                        <InputText estado={apellido ? apellido : ""} handle={setApellido} placeholder="apellido" style={{width:"50%"}} value={loadDTO ? (loadDTO as empleado).nombre.split(" ").reverse()[0] : undefined} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                {!edit &&
                    <><div className="contentMainRowForm">
                        <span className="contentLeftFormEmpleado">Email</span>
                        <div className="contentRightFormEmpleado">
                            <InputTextIcon estado={email  ? email : ""} handle={setEmail} placeholder="correo" Icon={AiOutlineMail} style={{width:"100%"}} />
                        </div>
                    </div>
                    <hr style={{margin:"1.5em auto"}} /> </>}
                 <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Telefono</span>
                    <div className="contentRightFormEmpleado">
                        <InputTextIcon estado={telefono ? telefono : ""} handle={setTelefono} placeholder="telefono" Icon={BsTelephone} style={{width:"100%"}} value={loadDTO ? (loadDTO as empleado).telefono : undefined} />
                    </div>
                </div>
                 <hr style={{margin:"1.5em auto"}} />
                 <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Contraseña</span>
                    <InputPassword estado={password ? password : ""} handle={setPassword} value={loadDTO ? (loadDTO as empleado).password : undefined} />
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div style={{gap:"10%"}} className="contentMainRowForm">
                    <div style={{display:"flex", width:"50%"}}>
                        <span className="contentLeftFormEmpleado">Rol</span>
                        <SelectForm handle={setRol as (value:string) => void} items={["admin","staff"]} value={loadDTO ? String((loadDTO as empleado).rol.codigo) : undefined} />
                    </div>
                    <div style={{display:"flex", width:"50%"}}>
                        <span className="contentLeftFormEmpleado">Estado</span>
                        <SelectForm handle={setEstado as (value:string) => void} items={["activo","inactivo","suspendido"]} value={loadDTO ? (loadDTO as empleado).status : undefined} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Permisos Extra</span>
                    <CheckBoxGroupFormEmpleado estado={permisos ? permisos : []} handle={setPermisos} listOption={["ADM","GR","GE","GH"]} value={loadDTO ? (loadDTO as empleado).permisosExtra : undefined} />
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Foto de perfil</span>
                    <InputPhoto setImage={setImage} image={(!image ? (edit ? (loadDTO as empleado).photo : "") : image)} />
                </div>
                <hr style={{margin:"1.5em auto",marginBottom:"1em"}} />
                <GroupBtnsActionForm 
                dto={loadDTO ? {
                    id: String((loadDTO as empleado).id),
                    nombre: nombre+" "+apellido,
                    email: email,
                    password: password,
                    photo: image,
                    rol: rol,
                    telefono: telefono,
                    status: estado,
                    permisosExtra: permisos,
                    codigo: (loadDTO as empleado).codigo,
                    startDate: (loadDTO as empleado).startDate
                } :
                {
                    nombre: nombre+" "+apellido,
                    email: email,
                    password: password,
                    photo: image,
                    rol: rol,
                    telefono: telefono,
                    status: estado,
                    permisosExtra: permisos
                }} type="empleado" />
            </div>
        </div>
    </>
}