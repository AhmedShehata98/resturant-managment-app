import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
//
const API_URL = "http://127.0.0.1:9000/reservations";
//
//
export const GET_RESERVATIONS_ACTION = createAsyncThunk(
  "reservations/getData",
  async function (_, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const req = await fetch(API_URL),
        data = req.json();
      return data;
      //
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//
export const ADD_RESERVATION_ACTION = createAsyncThunk(
  "reservations/addReservation",
  async function (data, thunkApi) {
    const { rejectWithValue } = thunkApi;
    const incomingData = data;

    try {
      const req = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: incomingData,
        }),
        data = req.json();
      return data;
      //
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
  reservationsData: [],
};
//
//

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  extraReducers: {
    [GET_RESERVATIONS_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [GET_RESERVATIONS_ACTION.fulfilled]: function (state, action) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.reservationsData = action.payload;
    },
    [GET_RESERVATIONS_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // add reservations
    [ADD_RESERVATION_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_RESERVATION_ACTION.fulfilled]: function (state, action) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.reservationsData.push(action.payload);
    },
    [ADD_RESERVATION_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export default reservationsSlice.reducer;
