import { createAsyncThunk } from "@reduxjs/toolkit"
import { urlGetClientes } from "../uris/urls"

export const getDocsCliente = createAsyncThunk('docsClientesList',async () => {
    const response = await fetch(urlGetClientes, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    if(response.ok){
        const json = await response.json()
        console.log(json)
        return json
    }else{
        const responseData = await response.json()
        throw new Error(`Error deleteDocReserva: ${responseData.error}`)
    }
})