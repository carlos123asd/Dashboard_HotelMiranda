import type { Reserva } from "../../types/Reserva.type"

export const ValidacionReserva = (dto:Reserva,recargo?:number):boolean => {
    return true
}

export const PrepararDTOReservaFinal = (dto:Reserva,recargo?:number) => {
    const dtoReservaFinal = {
        "reserva":{
            ...dto
        },
        "recargo": recargo
    }

     
    return dtoReservaFinal
}