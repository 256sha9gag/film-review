import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkMiddleware } from "redux-thunk";
import movieSlice from "./slice/movieSlice";

export const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk as ThunkMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
