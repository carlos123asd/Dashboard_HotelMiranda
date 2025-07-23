import type { ICliente } from "./Cliente.type"
import type { IHabitacion } from "./Habitacion.type"
import type { IServicio } from "./Servicio.type"

export type DepsReserva = {
    clientes:ICliente[],
    habitaciones: IHabitacion[],
    sevicios: IServicio[]
}