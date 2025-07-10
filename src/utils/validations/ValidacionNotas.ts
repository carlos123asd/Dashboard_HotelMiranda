import type { Notas } from "../../types/Notas.type"

export const ValidacionNota = (dto:Notas):boolean => {
    return true
}

export const PrepararDTONotaFinal = (dto:Notas) => {
    const dtoNotaFinal = {
        "nuevaNotaInterna":{
            ...dto
        }
    }
    return dtoNotaFinal
}

export const PrepararDTOModNotaFinal = (dto:Notas) => {
    const dtoNotaFinal = {
        "notasInternasMod":{
            ...dto
        }
    }
    return dtoNotaFinal
}

export const PrepararDTODeleteNotaFinal = (dto:Notas) => {
    const dtoNotaFinal = {
        "notaInterna":{
            ...dto
        }
    }
    return dtoNotaFinal
}