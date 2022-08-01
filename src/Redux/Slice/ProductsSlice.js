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

export const DELETE_EXISTING_PRODUCT_ACTION = createAsyncThunk(
  "products/deleteProduct",
  async function (id, thunkApi) {
    const { rejectWithValue } = thunkApi;
    const incomingID = id;
    try {
      const req = await fetch(API_URL + "/" + incomingID, { method: "DELETE" });
      return await req.json();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const EDIT_PRODUCT_ACTION = createAsyncThunk(
  "products/editProduct",
  async function ({ id, data }, thunkApi) {
    const { rejectWithValue } = thunkApi;
    const incomingID = id;
    const incomingData = data;

    try {
      const req = await fetch(API_URL + "/" + incomingID, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: incomingData,
      });
      return await req.json();
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
  name: "products",
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
    // delete Product
    [DELETE_EXISTING_PRODUCT_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.errorMessage = "";
      state.isError = false;
    },
    [DELETE_EXISTING_PRODUCT_ACTION.fulfilled]: function (state, action) {
      const currentTargetID = action.meta.arg;
      const newProductsData = state.productsData.filter(
        (product) => product.id !== currentTargetID
      );
      state.isLoading = false;
      state.errorMessage = "";
      state.isError = false;
      state.productsData = newProductsData;
    },
    [DELETE_EXISTING_PRODUCT_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // edit product action
    [EDIT_PRODUCT_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [EDIT_PRODUCT_ACTION.fulfilled]: function (state, action) {
      const currentTargetID = action.meta.arg.id;
      const newProductsData = state.productsData.filter(
        (product) => product.id !== currentTargetID
      );

      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.productsData = newProductsData;
    },
    [EDIT_PRODUCT_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export default productsSlice.reducer;
