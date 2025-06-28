import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDocsTable = createAsyncThunk('docsList', async (url:string) => {
    const response = await fetch(url)
    if(response.ok){
        const json = await response.json()
        console.log(json)
        return json
    }else{
        const responseData = await response.json()
        throw new Error(`Error getDocsTable: ${responseData.error}`)
    }
})