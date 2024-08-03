import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  language: "uk" | "es";
};

const initialState: InitialState = {
  language: "uk",
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<InitialState["language"]>) => {
      state.language = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLanguage } = slice.actions;
export default slice.reducer;
