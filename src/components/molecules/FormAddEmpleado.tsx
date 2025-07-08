import avatar from "../../assets/perfil.jpg"
import InputText from "../atoms/InputText"
import InputTextIcon from "../atoms/InputTextIcon"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import GroupBtnsActionForm from "../atoms/GroupBtnsActionForm";
import SelectForm from "../atoms/SelectForm";
import InputPhoto from "../atoms/InputPhoto";
import { useState } from "react";
import InputPassword from "../atoms/InputPassword";
import CheckBoxGroupFormEmpleado from "../atoms/CheckBoxGroupFormEmpleado";
import type { tipoPermisos } from "../../types/typePermisos";

export default function FormAddEmpleado(){
    const [image,setImage] = useState<string | null>(null)
    const [nombre,setNombre] = useState<string | null>(null)
    const [apellido,setApellido] = useState<string | null>(null)
    const [email,setEmail] = useState<string | null>(null)
    const [telefono,setTelefono] = useState<string | null>(null)
    const [password,setPassword] = useState<string | null>(null)
    const [rol,setRol] = useState<"admin"|"staff"|null>("admin")
    const [estado,setEstado] = useState<"activo"|"inactivo"|"suspendido"|null>("activo")
    const [permisos,setPermisos] = useState<tipoPermisos[]>()

     return <>
        <div className="FormAddDocEmpleado">
            <div className="headerDocEmpleado">
                <div className="topImagen">
                    <div className="imagenAddPerfil">
                        <img src={!image ? avatar : image} alt="" />
                    </div>
                </div>
            </div>
            <div className="bodyDocEmpleado">
                <div  className="contentNamePerfil">
                    <h2>Carlos Medina</h2>
                    <span>carlos.med.dev@gmail.com</span>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Nombre</span>
                    <div className="contentRightFormEmpleado">
                        <InputText estado={nombre ? nombre :  ""} handle={setNombre} placeholder="nombre" style={{width:"50%"}} />
                        <InputText estado={apellido ? apellido : ""} handle={setApellido} placeholder="apellido" style={{width:"50%"}} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Email</span>
                    <div className="contentRightFormEmpleado">
                        <InputTextIcon estado={email  ? email : ""} handle={setEmail} placeholder="correo" Icon={AiOutlineMail} style={{width:"100%"}} />
                    </div>
                </div>
                 <hr style={{margin:"1.5em auto"}} />
                 <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Telefono</span>
                    <div className="contentRightFormEmpleado">
                        <InputTextIcon estado={telefono ? telefono : ""} handle={setTelefono} placeholder="telefono" Icon={BsTelephone} style={{width:"100%"}} />
                    </div>
                </div>
                 <hr style={{margin:"1.5em auto"}} />
                 <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Contraseña</span>
                    <InputPassword estado={password ? password : ""} handle={setPassword} />
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div style={{gap:"10%"}} className="contentMainRowForm">
                    <div style={{display:"flex", width:"50%"}}>
                        <span className="contentLeftFormEmpleado">Rol</span>
                        <SelectForm handle={setRol as (value:string) => void} items={["admin","staff"]}/>
                    </div>
                    <div style={{display:"flex", width:"50%"}}>
                        <span className="contentLeftFormEmpleado">Estado</span>
                        <SelectForm handle={setEstado as (value:string) => void} items={["activo","inactivo","suspendido"]} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Permisos Extra</span>
                    <CheckBoxGroupFormEmpleado estado={permisos ? permisos : []} handle={setPermisos} listOption={["ADM","GR","GE","GH"]} />
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Foto de perfil</span>
                    <InputPhoto setImage={setImage} image={!image ? avatar : image} />
                </div>
                <hr style={{margin:"1.5em auto",marginBottom:"1em"}} />
                <GroupBtnsActionForm 
                dto={{
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