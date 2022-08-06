import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OPEN_SAKE_TOAST } from "../Slice/AppSlice";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "@firebase/firestore/lite";
import { db } from "../../firebase/firebase-config";

const productsRef = collection(db, "products");
//
export const GET_PRODUCTS_ACTION = createAsyncThunk(
  "products/getProducts",
  async function (_, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const snapshotProducts = await getDocs(productsRef);
      const resProductsList = snapshotProducts.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log(resProductsList);
      return resProductsList;
      //
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//
export const ADD_PRODUCTS_ACTION = createAsyncThunk(
  "products/addProducts",
  async function (data, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
      const addProducts = await addDoc(productsRef, data);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `the product  : ${data.productName} is added success`,
          severity: "success",
        })
      );
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const DELETE_EXISTING_PRODUCT_ACTION = createAsyncThunk(
  "products/deleteProduct",
  async function (id, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const docDeleteTarget = doc(db, "products", id);
      const deleteProduct = await deleteDoc(docDeleteTarget);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const EDIT_PRODUCT_ACTION = createAsyncThunk(
  "products/editProduct",
  async function ({ id, data }, thunkApi) {
    const { rejectWithValue } = thunkApi;

    try {
      const docUpdateTarget = doc(db, "products", id);
      const updateProductRequest = await updateDoc(docUpdateTarget, data);
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
      const incomingData = action.meta.arg.data;
      const newProductsData = state.productsData.filter(
        (product) => product.id !== currentTargetID
      );
      newProductsData.unshift(incomingData);
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
