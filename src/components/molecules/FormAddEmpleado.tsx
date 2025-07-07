import avatar from "../../assets/perfil.jpg"
import InputText from "../atoms/InputText"
import InputTextIcon from "../atoms/InputTextIcon"
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa6";
import GroupBtnsActionForm from "../atoms/GroupBtnsActionForm";
import SelectForm from "../atoms/SelectForm";
import CheckBoxGroupForm from "../atoms/CheckBoxGroupForm";
import InputPhoto from "../atoms/InputPhoto";
import { useState } from "react";

export default function FormAddEmpleado(){
    const [image,setImage] = useState<string |null>(null)
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
                        <InputText placeholder="nombre" style={{width:"50%"}} />
                        <InputText placeholder="apellido" style={{width:"50%"}} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Email</span>
                    <div className="contentRightFormEmpleado">
                        <InputTextIcon placeholder="correo" Icon={AiOutlineMail} style={{width:"100%"}} />
                    </div>
                </div>
                 <hr style={{margin:"1.5em auto"}} />
                 <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Telefono</span>
                    <div className="contentRightFormEmpleado">
                        <InputTextIcon placeholder="telefono" Icon={BsTelephone} style={{width:"100%"}} />
                    </div>
                </div>
                 <hr style={{margin:"1.5em auto"}} />
                 <div className="contentMainRowForm">
                    <span className="contentLeftFormEmpleado">Contraseña</span>
                    <div className="contentRightFormEmpleado">
                        <InputTextIcon placeholder="contraseña" Icon={FaAsterisk} style={{width:"50%"}} ocultar={true} />
                        <InputTextIcon placeholder="confirmar contraseña" Icon={FaAsterisk} style={{width:"50%"}} ocultar={true} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div style={{gap:"10%"}} className="contentMainRowForm">
                    <div style={{display:"flex", width:"50%"}}>
                        <span className="contentLeftFormEmpleado">Rol</span>
                        <SelectForm items={["Admin","staff"]}/>
                    </div>
                    <div style={{display:"flex", width:"50%"}}>
                        <span className="contentLeftFormEmpleado">Estado</span>
                        <SelectForm items={["Activo","Inactivo","Suspendido"]} />
                    </div>
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                        <span className="contentLeftFormEmpleado">Permisos Extra</span>
                        <CheckBoxGroupForm listOption={["ADM","GR","GE","GH"]} />
                </div>
                <hr style={{margin:"1.5em auto"}} />
                <div className="contentMainRowForm">
                        <span className="contentLeftFormEmpleado">Foto de perfil</span>
                        <InputPhoto setImage={setImage} image={!image ? avatar : image} />
                </div>
                <hr style={{margin:"1.5em auto",marginBottom:"1em"}} />
                <GroupBtnsActionForm />
            </div>
        </div>
    </>
}