import type { ICliente } from "./Cliente.type";
import type { empleado } from "./Empleado.type";
import type { IHabitacion } from "./Habitacion.type";
import type { Reserva } from "./Reserva.type";

export type tipo = 'Habitacion' | 'Cliente' | 'Reserva';

export type Notas = {
    _id: string;
    responsable: empleado;
    tipo: tipo;
    fecha: string;
    titulo: string;
    descripcion: string;
    datosAgregados: string[];
    cliente: ICliente | null;
    reserva: Reserva | null;
    habitacion: IHabitacion | null;
    createdAt: string;
    updatedAt: string;
}