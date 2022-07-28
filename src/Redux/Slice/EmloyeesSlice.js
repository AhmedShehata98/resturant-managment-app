import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:9000/emplyees";
//
export const GET_EMPLYEES_ACTION = createAsyncThunk(
  "emplyees/getEmplyees",
  async function (_, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const req = await fetch(API_URL),
        data = await req.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//
export const ADD_EMPLYEES_ACTION = createAsyncThunk(
  "emplyees/addEmplyees",
  async function (data, thunkApi) {
    const incomingData = data;
    const { rejectWithValue } = thunkApi;
    try {
      const req = await fetch(API_URL, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            accept: "application/json",
          },
          body: incomingData,
        }),
        data = await req.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//
//
const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  emplyeesData: [],
};
//
//
const emplyeesSlice = createSlice({
  name: "emplyees",
  initialState,
  extraReducers: {
    [GET_EMPLYEES_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [GET_EMPLYEES_ACTION.fulfilled]: function (state, action) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.emplyeesData = action.payload;
    },
    [GET_EMPLYEES_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // add employees
    [ADD_EMPLYEES_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_EMPLYEES_ACTION.fulfilled]: function (state, action) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.emplyeesData.push(action.payload);
    },
    [ADD_EMPLYEES_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export default emplyeesSlice.reducer;
