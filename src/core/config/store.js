// LIBs
import { configureStore } from "@reduxjs/toolkit";

// DATA
import appReducer from "../data/app-reducer";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
