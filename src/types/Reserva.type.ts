import type { ICliente } from "./Cliente.type";
import type { empleado } from "./Empleado.type";
import type { IHabitacion } from "./Habitacion.type";
import type { Notas } from "./Notas.type";

export type EstadoReserva = 'pendiente' | 'aceptada' | 'en curso' | 'cancelada';
export type Extras = {
  nombre: string,
  precio: number
}

export type Reserva = {
  _id: string;
  estado: EstadoReserva;
  asignacion: ICliente;
  habitacion: IHabitacion;
  checkIn: string;
  checkOut: string;
  totalReserva: number;
  responsable: empleado;
  extras?: Extras[] | null;
  notasInternas?: Notas[] | null;
  peticion?: string | null;
  createdAt?:string | null,
  updatedAt?:string | null
}
