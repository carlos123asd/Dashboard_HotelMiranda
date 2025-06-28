import type { Action } from "@reduxjs/toolkit";
import type { ThunkAction } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { DocsSlice } from "../slices/DocsSlice";

export const store = configureStore({
    reducer: {
        documentos: DocsSlice.reducer
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