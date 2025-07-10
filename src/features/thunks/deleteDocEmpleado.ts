import { urlDeleteEmpleado } from "../uris/urls"

export const deleteDocEmpleado = async (dto:object) => {
    const response = await fetch(urlDeleteEmpleado, {
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
        throw new Error(`Error deleteDocEmpleado: ${responseData.error}`)
    }
}