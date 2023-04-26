import { configureStore } from "@reduxjs/toolkit";
import { todosApi } from "./apis/todos/api";

export const store = configureStore({
  reducer: {
    [todosApi.reducerPath]: todosApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
