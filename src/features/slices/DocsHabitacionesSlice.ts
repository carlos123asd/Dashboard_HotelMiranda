import { createSlice } from "@reduxjs/toolkit"
import { getDocsHabitacionTable } from "../thunks/getDocsHabitacionTable"

type typeListHabitaciones = {
    data: [],
    status: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState:typeListHabitaciones = {
    data: [],
    status: 'idle',
    error: null
}

export const DocsHabitacionesSlice = createSlice({
    name: 'habitaciones',
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDocsHabitacionTable.pending, (state) => {
            state.status = 'pending'
        })
        .addCase(getDocsHabitacionTable.fulfilled, (state,action) => {
            state.status = 'fulfilled'
            state.data = action.payload
        })
        .addCase(getDocsHabitacionTable.rejected, (state,action) => {
            state.status = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})
