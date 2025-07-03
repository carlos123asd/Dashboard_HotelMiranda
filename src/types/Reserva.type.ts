import type { ICliente } from "./Cliente.type";
import type { IHabitacion } from "./Habitacion.type";

export type EstadoReserva = 'pendiente' | 'aceptada' | 'en curso' | 'cancelada';

export type Reserva = {
  _id: string;
  estado: EstadoReserva;
  asignacion: ICliente;
  habitacion: IHabitacion;
  checkIn: string;
  checkOut: string;
  totalReserva: number;
  responsable?: unknown | null;
  extras?: unknown[] | null;
  notasInternas?: unknown[] | null;
  peticion?: string | null;
  createdAt?:string | null,
  updatedAt?:string | null
}
