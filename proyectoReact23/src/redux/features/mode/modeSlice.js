import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: sessionStorage.getItem("theme")
};

const modeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleMode } = modeSlice.actions;

export default modeSlice.reducer;
