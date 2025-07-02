import { createSlice } from "@reduxjs/toolkit";
import { getDocsReservaTable } from "../thunks/getDocsReservaTable";

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

export const DocsReservasSlice = createSlice({
    name: 'reservas',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDocsReservaTable.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getDocsReservaTable.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(getDocsReservaTable.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})