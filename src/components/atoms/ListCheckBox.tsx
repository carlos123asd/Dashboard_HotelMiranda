import type { ICliente } from "../../types/Cliente.type";
import type { IHabitacion } from "../../types/Habitacion.type";
import type { IServicio } from "../../types/Servicio.type";

type ListCheckBoxProps<T> = {
    estado: T[];
    handle: (value: T[]) => void;
    value: T[];
    tipo: string;
};

export default function ListCheckBox<T>({estado,handle,value,tipo}: ListCheckBoxProps<T>){

    const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checkedValue = e.currentTarget.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            handle([...estado, checkedValue as unknown as T]);
        } else {
            handle(estado.filter((item) => String(item) !== checkedValue));
        }
    }

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
                                    <input
                                    value={cliente.id}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        if (e.target.checked) {
                                            handle([cliente as unknown as T]);
                                        }
                                    }}
                                    name="clientes" id="clientes"
                                    style={{marginLeft:"1em"}} type="radio" />
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
                                    <input 
                                    style={{marginLeft:"1em"}} 
                                    type="checkbox" 
                                    value={habitacion.id} 
                                    name={habitacion.nombre} 
                                    id={habitacion.id}
                                    onChange={handleCheckChange} />
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
                                    <input
                                    style={{marginLeft:"1em"}} 
                                    type="checkbox"
                                    value={extra._id} 
                                    name={extra.nombre} 
                                    id={extra._id}
                                    onChange={handleCheckChange} />
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