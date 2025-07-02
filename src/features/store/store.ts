import type { Action } from "@reduxjs/toolkit";
import type { ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { DocsEmpleadosSlice } from "../slices/DocsEmpleadosSlice";
import { DocsReservasSlice } from "../slices/DocsReservasSlice";

export const store = configureStore({
    reducer: {
        empleados: DocsEmpleadosSlice.reducer,
        reservas: DocsReservasSlice.reducer
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