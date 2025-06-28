import { createSlice } from "@reduxjs/toolkit";
import { getDocsTable } from "../thunks/getDocsTable";

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

export const DocsSlice = createSlice({
    name: 'documentos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getDocsTable.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getDocsTable.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(getDocsTable.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})