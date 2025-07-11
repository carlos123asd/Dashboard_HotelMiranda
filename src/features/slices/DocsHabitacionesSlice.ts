import { createSlice } from "@reduxjs/toolkit"
import { getDocsHabitacionTable } from "../thunks/getDocsHabitacionTable"

type typeListHabitaciones = {
    dataHabitaciones: [],
    statusHabitaciones: 'idle' | 'pending' | 'fulfilled' | 'rejected',
    error: string | null
}

const initialState:typeListHabitaciones = {
    dataHabitaciones: [],
    statusHabitaciones: 'idle',
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
            state.statusHabitaciones = 'pending'
        })
        .addCase(getDocsHabitacionTable.fulfilled, (state,action) => {
            state.statusHabitaciones = 'fulfilled'
            state.dataHabitaciones = action.payload
        })
        .addCase(getDocsHabitacionTable.rejected, (state,action) => {
            state.statusHabitaciones = 'rejected'
            state.error = action.error?.message ?? null
        })
    }
})
