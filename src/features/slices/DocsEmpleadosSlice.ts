import { createSlice } from "@reduxjs/toolkit";
import { getDocsEmpleadoTable } from "../thunks/getDocsEmpleadoTable";

type typeListEmpleado = {
    data: [],
    status:  'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState:typeListEmpleado = {
    data: [],
    status: 'idle',
    error: null
}

export const DocsEmpleadosSlice = createSlice({
    name: 'empleados',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDocsEmpleadoTable.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getDocsEmpleadoTable.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(getDocsEmpleadoTable.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})