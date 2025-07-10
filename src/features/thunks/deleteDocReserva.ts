import { urlDeleteReserva } from "../uris/urls"

export const deleteDocReserva = async (dto:object) => {
    const response = await fetch(urlDeleteReserva, {
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
        throw new Error(`Error deleteDocReserva: ${responseData.error}`)
    }
}