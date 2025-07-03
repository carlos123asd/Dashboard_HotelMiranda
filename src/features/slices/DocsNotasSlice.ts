import { createSlice } from "@reduxjs/toolkit";
import { getDocsNotasTable } from "../thunks/getDocsNotasTable";

type typeListReserva = {
    data: [],
    status:  'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState:typeListReserva = {
    data: [],
    status: 'idle',
    error: null
}

export const DocsNotasSlice = createSlice({
    name: 'notas',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDocsNotasTable.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getDocsNotasTable.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(getDocsNotasTable.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})