import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase-config";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
} from "@firebase/firestore/lite";
import { OPEN_SAKE_TOAST } from "./AppSlice";

const taxCollection = collection(db, "Tax");
//
export const GET_ALL_DATA = createAsyncThunk(
  "tax/getTax",
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const taxData = await getDocs(taxCollection);
      const spanshotData = taxData.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      return spanshotData;
    } catch (error) {
      rejectWithValue(error.message);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `Oops ! , ${error.message}`,
          severity: "error",
        })
      );
    }
  }
);

export const UPDATE_TAX_DATA = createAsyncThunk(
  "tax/updateTax",
  async ({ id, data }, thunkApi) => {
    const { dispatch, rejectWithValue } = thunkApi;
    //
    try {
      const updateTarget = doc(db, "Tax", id);
      await updateDoc(updateTarget);
      dispatch(
        OPEN_SAKE_TOAST({
          message: "Updated tax data Successfully",
          severity: "success",
        })
      );
      return data;
    } catch (error) {
      rejectWithValue(error.message);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `Oops! ,  ${error.message}`,
          severity: "error",
        })
      );
    }
  }
);

const initialState = {
  isLoading: false,
  isError: false,
  service: 0,
  vat: 0,
  taxData: [],
};
const taxSlice = createSlice({
  name: "tax",
  initialState,
  extraReducers: {
    [GET_ALL_DATA.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.taxData = [];
    },
    [GET_ALL_DATA.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.taxData = action.payload;
      action.payload.filter((item) => {
        if (item.taxType === "vat") {
          return (state.vat = item.taxAmount);
        }
        if (item.taxType === "Services") {
          return (state.service = item.taxAmount);
        }
      });
    },
    [GET_ALL_DATA.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
    [UPDATE_TAX_DATA.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
      state.taxData = [];
    },
    [UPDATE_TAX_DATA.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.taxData.push(action.payload);
    },
    [UPDATE_TAX_DATA.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export default taxSlice.reducer;
