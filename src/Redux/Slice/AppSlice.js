import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenToast: false,
  toastMessage: "",
  toastMessageSeverity: "success",
};
const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    OPEN_SAKE_TOAST: (state, action) => {
      state.toastMessage = action.payload.message;
      state.toastMessageSeverity = action.payload.severity;
      state.isOpenToast = true;
    },
    CLOSE_SNAKE_TOAST: (state) => {
      state.isOpenToast = false;
      state.toastMessage = "";
      state.toastMessageSeverity = "success";
    },
  },
});

export default AppSlice.reducer;
export const { CLOSE_SNAKE_TOAST, OPEN_SAKE_TOAST } = AppSlice.actions;
