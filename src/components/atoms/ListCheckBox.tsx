import type { ICliente } from "../../types/Cliente.type";
import type { IHabitacion } from "../../types/Habitacion.type";
import type { IServicio } from "../../types/Servicio.type";

type ListCheckBoxProps<T> = {
    handle: (value: T) => void;
    value: T[];
    tipo: string;
};

export default function ListCheckBox<T>({handle,value,tipo}: ListCheckBoxProps<T>){
    return <>
        <div className="contentMainList">
            <table className="table">
                <thead>
                    {tipo === "clientes" && <tr>
                        <th className="headerTable"></th>
                        <th className="headerTable">Nombre</th>
                        <th className="headerTable">Email</th>
                        <th className="headerTable">Dirección</th>
                        <th className="headerTable">Método de Pago</th>
                    </tr>}
                    {tipo === "habitaciones" && <tr>
                        <th className="headerTable"></th>
                        <th className="headerTable">Nombre</th>
                        <th className="headerTable">Categoria</th>
                        <th className="headerTable">Piso</th>
                        <th className="headerTable">Precio</th>
                        <th className="headerTable">Oferta</th>
                    </tr>}
                    {tipo === "extras" && <tr>
                        <th className="headerTable"></th>
                        <th className="headerTable">Nombre</th>
                        <th className="headerTable">Descripción</th>
                        <th className="headerTable">Precio</th>
                    </tr>}
                </thead>
                <tbody>
                    {
                        tipo === "clientes" && (value as ICliente[]).map((cliente, index) => (
                            <tr key={index}>
                                <td style={{padding: "1em 0"}}>
                                    <input style={{marginLeft:"1em"}} type="radio" name="asignacion" id={`asignacion${index}`} />
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    <span>{cliente.nombre}</span>
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {cliente.email}
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {cliente.direccion}
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {cliente.metodoPago}
                                </td>
                            </tr>
                        ))
                    }
                    {
                        (tipo === "habitaciones" && value) && (value as IHabitacion[]).map((habitacion, index) => (
                            <tr key={index}>
                                <td style={{padding: "1em 0"}}>
                                    <input style={{marginLeft:"1em"}} type="checkbox" name="" id={`habitacion${index}`} />
                                </td>
                                <td style={{padding: "1em 0",display:"flex",alignItems:"center",gap:"1em"}}>
                                    <img className="photoPerfil" src={undefined} alt="" />
                                    <span>{habitacion.nombre}</span>
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {habitacion.categoria}
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {habitacion.piso}
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {habitacion.precio.toFixed(2)}€
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {habitacion.oferta.toFixed()}%
                                </td>
                            </tr>
                        ))
                    }
                    {
                        (tipo === "extras" && value) && (value as IServicio[]).map((extra, index) => (
                            <tr key={index}>
                                <td style={{padding: "1em 0"}}>
                                    <input style={{marginLeft:"1em"}} type="checkbox" name="" id={`extra${index}`} />
                                </td>
                                <td style={{padding: "1em 0",display:"flex",alignItems:"center",gap:"1em"}}>
                                    <img className="photoPerfil" src={extra.imagen} alt="" />
                                    <span>{extra.nombre}</span>
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {extra.descripcion}
                                </td>
                                <td style={{padding: "1em 0"}}>
                                    {extra.precio}€
                                </td>
                            </tr>
                        ))
                    }
                    {(tipo === "habitaciones" && !value) && (
                        <tr>
                            <td colSpan={6}>
                                Para ver las habitaciones disponibles se necesita agregar Fecha de entrada y salida    
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>
}