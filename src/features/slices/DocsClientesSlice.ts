import { createSlice } from "@reduxjs/toolkit";
import { getDocsCliente } from "../thunks/getDocsCliente";

type typeListCliente = {
    dataCliente: [],
    statusCliente:  'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState:typeListCliente = {
    dataCliente: [],
    statusCliente: 'idle',
    error: null
}

export const DocsClientesSlice = createSlice({
    name: 'clientes',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDocsCliente.pending, (state) => {
            state.statusCliente = 'pending'
        })
        .addCase(getDocsCliente.fulfilled, (state,action) => {
            state.statusCliente = 'fulfilled'
            state.dataCliente = action.payload
        })
        .addCase(getDocsCliente.rejected, (state,action) => {
            state.statusCliente = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})