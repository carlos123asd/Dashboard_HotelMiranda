import type { IHabitacion } from "../../types/Habitacion.type"

export const ValidacionHabitacion = (dto:IHabitacion):boolean => {
    return true
}

export const PrepararDTOHabitacionFinal = (dto:IHabitacion) => {
    const dtoHabitacionFinal = {
        "nuevaHabitacion":{
            ...dto
        },
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
        }
    }

     
    return dtoHabitacionFinal
}

export const PrepararDTOModHabitacionFinal = (dto:IHabitacion) => {
    const dtoHabitacionFinal = {
        "habitacionMod":{
            ...dto
        },
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
        }
    }

     
    return dtoHabitacionFinal
}

export const PrepararDTODeleteHabitacionFinal = (dto:IHabitacion) => {
    const dtoHabitacionFinal = {
        "habitacion":{
            ...dto
        },
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
        }
    }

     
    return dtoHabitacionFinal
}