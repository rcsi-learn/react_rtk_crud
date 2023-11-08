import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/tasks/taskSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;