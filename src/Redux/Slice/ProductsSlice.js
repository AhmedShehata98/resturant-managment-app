import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:9000/products";
//
export const GET_PRODUCTS_ACTION = createAsyncThunk(
  "products/getProducts",
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
export const ADD_PRODUCTS_ACTION = createAsyncThunk(
  "products/addProducts",
  async function (data, thunkApi) {
    const { rejectWithValue } = thunkApi;
    const incomingData = data;
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
  productsData: [],
};
//
//
const productsSlice = createSlice({
  name: "emplyees",
  initialState,
  extraReducers: {
    [GET_PRODUCTS_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [GET_PRODUCTS_ACTION.fulfilled]: function (state, action) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.productsData = action.payload;
    },
    [GET_PRODUCTS_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // add employees
    [ADD_PRODUCTS_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_PRODUCTS_ACTION.fulfilled]: function (state, action) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.productsData.push(action.payload);
    },
    [ADD_PRODUCTS_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export default productsSlice.reducer;
