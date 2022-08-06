import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { OPEN_SAKE_TOAST } from "./AppSlice";
import {
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDocs,
} from "@firebase/firestore/lite";

import { db } from "../../firebase/firebase-config";
//
//
const ordersCollection = collection(db, "orders");
//
export const GET_ORDERS_ACTION = createAsyncThunk(
  "orders/getOrders",
  async function (_, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const orderRequest = await getDocs(ordersCollection);
      const ordersSnapshot = orderRequest.docs.map((docs) => {
        return { ...docs.data(), id: docs.id };
      });
      return ordersSnapshot;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//
export const ADD_ORDERS_ACTION = createAsyncThunk(
  "orders/addOrders",
  async function (data, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const addOrders = await addDoc(db, data);
      dispatch(
        OPEN_SAKE_TOAST({
          message: ` the order :${data.orderName} is added success .`,
          severity: "success",
        })
      );
      return data;
      //
    } catch (error) {
      rejectWithValue(error.message);
      dispatch(
        OPEN_SAKE_TOAST({
          message: ` Oops , ${error.message}`,
          severity: "error",
        })
      );
    }
  }
);
export const DELETE_EXISTING_ORDER_ACTION = createAsyncThunk(
  "orders/deleteOrder",
  async function (id, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
      const deleteTarget = doc(db, "orders", id);
      const deleteOrder = await deleteDoc(deleteTarget);
      dispatch(
        OPEN_SAKE_TOAST({
          message: "Order deleted successfully.",
          severity: "success",
        })
      );
    } catch (error) {
      rejectWithValue(error.message);
      dispatch(
        OPEN_SAKE_TOAST({
          message: "Ooops , something went wrong.",
          severity: "error",
        })
      );
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
