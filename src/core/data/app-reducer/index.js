// LIBs
import { createSlice } from "@reduxjs/toolkit";

const appState = {
  scrollTop: 0,
  screen: {
    width: 0,
    height: 0,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState: appState,
  reducers: {
    setScrollTop: (state, action) => {
      state.scrollTop = action.payload;
    },
    setScreen: (state, action) => {
      state.screen = action.payload;
    },
  },
});

export const { setScrollTop, setScreen } = appSlice.actions;
export default appSlice.reducer;
