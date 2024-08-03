import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  isSettingsOpen: boolean;
};

const initialState: InitialState = {
  isSettingsOpen: false,
};

const slice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setIsMenuSettingsOpen: (
      state,
      action: PayloadAction<InitialState["isSettingsOpen"]>,
    ) => {
      state.isSettingsOpen = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setIsMenuSettingsOpen } = slice.actions;
export default slice.reducer;
