import type { ICliente } from "./Cliente.type"
import type { IHabitacion } from "./Habitacion.type"
import type { Reserva } from "./Reserva.type"
import type { IServicio } from "./Servicio.type"

export type DepsReserva = {
    dto: Reserva,
    depExtra: {
        clientes:ICliente[],
        habitaciones: IHabitacion[],
        sevicios: IServicio[]
    }
}