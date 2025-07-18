import { createSlice } from "@reduxjs/toolkit";
import { getDocsServicio } from "../thunks/getDocsServicio";

type typeListServicio = {
    dataServicios: [],
    statusServicios:  'idle' | 'pending' | 'fulfilled' | 'rejected',
    errorServicios: string | null
}

const initialState:typeListServicio = {
    dataServicios: [],
    statusServicios: 'idle',
    errorServicios: null
}

export const DocsServiciosSlice = createSlice({
    name: 'servicios',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDocsServicio.pending, (state) => {
            state.statusServicios = 'pending'
        })
        .addCase(getDocsServicio.fulfilled, (state,action) => {
            state.statusServicios = 'fulfilled'
            state.dataServicios = action.payload
        })
        .addCase(getDocsServicio.rejected, (state,action) => {
            state.statusServicios = 'rejected'
            state.errorServicios = action.error?.message ?? null
        })
    }
})