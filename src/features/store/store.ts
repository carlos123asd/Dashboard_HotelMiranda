import type { Action } from "@reduxjs/toolkit";
import type { ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { DocsEmpleadosSlice } from "../slices/DocsEmpleadosSlice";
import { DocsReservasSlice } from "../slices/DocsReservasSlice";
import { DocsNotasSlice } from "../slices/DocsNotasSlice";
import { DocsHabitacionesSlice } from "../slices/DocsHabitacionesSlice";
import { DocsClientesSlice } from "../slices/DocsClientesSlice";

export const store = configureStore({
    reducer: {
        empleados: DocsEmpleadosSlice.reducer,
        reservas: DocsReservasSlice.reducer,
        notas: DocsNotasSlice.reducer,
        habitaciones: DocsHabitacionesSlice.reducer,
        clientes: DocsClientesSlice.reducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;