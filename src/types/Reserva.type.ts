import type { ICliente } from "./Cliente.type";
import type { empleado } from "./Empleado.type";
import type { IHabitacion } from "./Habitacion.type";
import type { Notas } from "./Notas.type";
import type { IServicio } from "./Servicio.type";

export type EstadoReserva = 'pendiente' | 'aceptada' | 'en curso' | 'cancelada';

export type Reserva = {
  _id: string;
  estado: EstadoReserva;
  asignacion: ICliente;
  habitacion: IHabitacion;
  checkIn: string;
  checkOut: string;
  totalReserva: number;
  responsable: empleado;
  extras?: IServicio[] | null;
  notasInternas?: Notas[] | null;
  peticion?: string | null;
  createdAt?:string | null,
  updatedAt?:string | null
}
