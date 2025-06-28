import MenuTabla from "../molecules/MenuTabla";
import photo from "../../assets/perfil.jpg"
import { BsTelephoneFill } from "react-icons/bs";
import ActionsTable from "../molecules/ActionsTable";
import FooterTable from "../molecules/FooterTable";

export default function Table({menu,headers,docs}:{menu:Array<string>,headers:Array<string>,docs:Array<object>}){
    return <>
        <div>
            <MenuTabla menu={menu} />
            <table className="table">
                <thead>
                    <tr>
                        <th className="headerTable"><input type="checkbox" name="" id="" /></th>
                        {
                            headers.map((header,index) => (
                                <th key={index} className="headerTable">{header}</th>
                            ))
                        }
                        <th className="headerTable">Acciones</th>
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td><input className="checkboxTable" type="checkbox" name="" id="" /></td>
                        <td className="contentCelda pd-1">
                            <img className="photoPerfil" src={photo} alt="" />
                            <span>Carlos Medina</span>
                        </td>
                        <td className="pd-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </td>
                        <td className="pd-1">
                            17 Dec 2024
                        </td>
                        <td className="pd-1">
                            <BsTelephoneFill />
                            <span style={{marginLeft:"1em"}}>616348947</span>
                        </td>
                        <td>
                            <div className="tagStatusEmpleadoTable">Activo</div>
                        </td>
                        <td>
                            <ActionsTable />
                        </td>
                    </tr>
                </tbody>
            </table>
            <FooterTable />
        </div>
    </>
}