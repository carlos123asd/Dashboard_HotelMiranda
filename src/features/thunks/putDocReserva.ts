import { urlPutModReserva } from "../uris/urls"

export const putDocReserva = async (dto:object) => {
    const response = await fetch(urlPutModReserva, {
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
        throw new Error(`Error putDocReserva: ${responseData.error}`)
    }
}