import { urlDeleteHabitacion } from "../uris/urls"

export const deleteDocHabitacion = async (dto:object) => {
    const response = await fetch(urlDeleteHabitacion, {
        method: "DELETE",
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
        throw new Error(`Error deleteDocHabitacion: ${responseData.error}`)
    }
}