import type { empleado } from "../../types/Empleado.type"

export const ValidacionEmpleado = (dto:empleado):boolean => {
    return true
}

export const PrepararDTOEmpleadoFinal = (dto:empleado) => {
    const dtoEmpleadoFinal = {
        "nuevoEmpleado":{
            ...dto,
            startDate: new Date().toISOString()
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

     
    return dtoEmpleadoFinal
}

export const PrepararDTOModEmpleadoFinal = (dto:empleado) => {
    const dtoEmpleadoFinal = {
        "empleadoMod":{
            ...dto
        },
        "responsable":{
            id: "6862c745c5478b8b9372ba31",
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

     
    return dtoEmpleadoFinal
}

export const PrepararDTODeleteEmpleadoFinal = (dto:empleado) => {
    const dtoEmpleadoFinal = {
        "empleado":{
            ...dto,
            rol: dto.rol.codigo
        },
        "responsable":{
            id: "6862c745c5478b8b9372ba31",
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

     
    return dtoEmpleadoFinal
}
