import type { DTOReseva } from "../../types/DTOReserva.type"
import type { Reserva } from "../../types/Reserva.type"

export const ValidacionReserva = (dto:DTOReseva,recargo?:number):boolean => {
    return true
}

export const PrepararDTOReservaFinal = (dto:DTOReseva,recargo?:number) => {
    const dtoReservaFinal = {
        "reserva":{
            ...dto,
            idEmpleado: "6862c745c5478b8b9372ba31"
        },
        "recargo": recargo
    }
    return dtoReservaFinal
}

export const PrepararDTOModReservaFinal = (dto:Reserva) => {
    console.log(dto)
    const dtoReservaFinal = {
        "reserva":{
            ...dto
        }
    }
    return dtoReservaFinal
}

export const PrepararDTODeleteReservaFinal = (dto:Reserva) => {
    const dtoReservaFinal = {
        "responsable":{
            _id: "6862c745c5478b8b9372ba31",
            email: "responsable@empresa.com",
            photo: "https://foto.url/responsable.jpg",
            startDate: "2023-01-01T00:00:00.000Z",
            telefono: "555-1234",
            codigo: "RESP001",
            nombre: "Responsable Admin",
            password: "secreto123",
            rol: "admin",
            status: "activo",
            permisosExtra: null
        },
        "reserva":{
            ...dto
        }
    }
    return dtoReservaFinal
}