import type { ICliente } from "../../types/Cliente.type";
import type { IHabitacion } from "../../types/Habitacion.type";

type ListCheckBoxProps<T> = {
    estado: T;
    handle: (value: T) => void;
    value: T[];
    tipo: string;
};

export default function ListCheckBox<T>({estado,handle,value,tipo}: ListCheckBoxProps<T>){
    return <>
    <div className="contentMainList">
        {
            tipo === "clientes" && (value as ICliente[]).map((cliente, index) => (
                <>
                    <div className="cardListCheckBox" key={index}>
                        <input style={{marginLeft:"1em"}} type="radio" name="asignacion" id={`asignacion${index}`} />
                        <div className="contentCelda">
                            <span>{cliente.nombre}</span>
                        </div>
                        <div className="contentCelda">
                            {cliente.email}
                        </div>
                        <div className="contentCelda">
                            {cliente.direccion}
                        </div>
                        <div className="contentCelda">
                            {cliente.metodoPago}
                        </div>
                    </div>
                </>
            ))
        }
        {
            (tipo === "habitaciones" && value) && (value as IHabitacion[]).map((habitacion, index) => (
                <>
                    <div className="cardListCheckBox" key={index}>
                        <input style={{marginLeft:"1em"}} type="checkbox" name="" id={`habitacion${index}`} />
                        <div className="contentCelda">
                            <img className="photoPerfil" src={undefined} alt="" />
                            <span>{habitacion.nombre}</span>
                        </div>
                        <div className="contentCelda">
                            {habitacion.categoria}
                        </div>
                        <div className="contentCelda">
                            {habitacion.piso}
                        </div>
                        <div className="contentCelda">
                            {habitacion.precio.toFixed(2)}€
                        </div>
                        <div className="contentCelda">
                            {habitacion.oferta.toFixed()}%
                        </div>
                    </div>
                </>
            ))
        }
        {(tipo === "habitaciones" && !value) && <div>
            Para ver las habitaciones disponibles se necesita agregar Fecha de entrada y salida    
        </div>}
    </div>
    </>
}