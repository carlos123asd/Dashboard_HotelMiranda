import type { ICliente } from "./Cliente.type";
import type { IHabitacion } from "./Habitacion.type";

export type EstadoReserva = 'pendiente' | 'aceptada' | 'en curso' | 'cancelada';

export interface Reserva {
  id: string;
  estado: EstadoReserva;
  asignacion: ICliente;
  habitacion: IHabitacion;
  checkIn: string;
  checkOut: string;
  totalReserva: number;
  responsable?: unknown | null;
  extras?: unknown[] | null;
  notasInternas?: unknown[] | null;
}
