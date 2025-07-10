import { urlPutModHabitacion } from "../uris/urls"

export const putDocHabitacion = async (dto:object) => {
    const response = await fetch(urlPutModHabitacion, {
        method: "PUT",
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
        throw new Error(`Error putDocHabitacion: ${responseData.error}`)
    }
}