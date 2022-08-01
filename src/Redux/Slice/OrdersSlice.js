import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//
//
const API_URL = "http://localhost:9000/orders";
//
export const GET_ORDERS_ACTION = createAsyncThunk(
  "orders/getOrders",
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
export const ADD_ORDERS_ACTION = createAsyncThunk(
  "orders/addOrders",
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
        data = req.json();
      return data;
      //
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const DELETE_EXISTING_ORDER_ACTION = createAsyncThunk(
  "orders/deleteOrder",
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

//
//
const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  ordersData: [],
};
//
//
const OrderSlice = createSlice({
  name: "Orders",
  initialState,
  extraReducers: {
    [GET_ORDERS_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [GET_ORDERS_ACTION.fulfilled]: function (state, action) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.ordersData = action.payload;
    },
    [GET_ORDERS_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // add products
    [ADD_ORDERS_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_ORDERS_ACTION.fulfilled]: function (state, action) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.ordersData.push(action.payload);
    },
    [ADD_ORDERS_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // delete Product
    [DELETE_EXISTING_ORDER_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.errorMessage = "";
      state.isError = false;
    },
    [DELETE_EXISTING_ORDER_ACTION.fulfilled]: function (state, action) {
      const currentTargetID = action.meta.arg;
      const newOrdersData = state.ordersData.filter(
        (order) => order.id !== currentTargetID
      );
      state.isLoading = false;
      state.errorMessage = "";
      state.isError = false;
      state.ordersData = newOrdersData;
    },
    [DELETE_EXISTING_ORDER_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});
export default OrderSlice.reducer;
