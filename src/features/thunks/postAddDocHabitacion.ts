import { urlPostAddHabitacion } from "../uris/urls"

export const postAddDocHabitacion= async (dto:object) => {
    const response = await fetch(urlPostAddHabitacion, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(dto)
    })
    if(response.ok){
        const json = await response.json()
        console.log(json)
        return json
    }else{
        const responseData = await response.json()
        throw new Error(`Error postAddDocEmpleado: ${responseData.error}`)
    }
}