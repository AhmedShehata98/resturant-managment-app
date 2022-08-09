import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { OPEN_SAKE_TOAST } from "./AppSlice";
import { db } from "../../firebase/firebase-config";

import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore/lite";
//
const tablesCollection = collection(db, "tables");
//
export const GET_TABLES_ACTION = createAsyncThunk(
  "tables/getdata",
  async function (_, thunkApi) {
    const { dispatch, rejectWithValue } = thunkApi;
    try {
      const requestedData = await getDocs(tablesCollection);
      const snapshotData = requestedData.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      return snapshotData;
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
//
export const ADD_NEW_TABLE_ACTION = createAsyncThunk(
  "tables/addtable",
  async function (data, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    //
    try {
      await addDoc(tablesCollection, data);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `Table number : ${data.tableNumber} was added successfully`,
          severity: "success",
        })
      );
      return data;
      //
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

export const DELETE_EXISTING_TABLE_ACTION = createAsyncThunk(
  "table/deleteTable",
  async function (id, thunkApi) {
    const { dispatch, rejectWithValue } = thunkApi;

    try {
      const deleteTableTarget = doc(db, "tables", id);
      await deleteDoc(deleteTableTarget);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `Table  was Delete successfully`,
          severity: "success",
        })
      );
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
export const EDIT_TABLE_ACTION = createAsyncThunk(
  "tables,editTable",
  async function ({ id, data }, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const tableTarget = doc(db, "tables", id);
      await addDoc(tableTarget, data);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `Table data was Updated successfully`,
          severity: "success",
        })
      );
      return data;
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

//
//

const initialState = {
  loading: true,
  isError: false,
  errorMessage: "",
  tablesData: [],
};
export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  extraReducers: {
    [GET_TABLES_ACTION.pending]: function (state) {
      state.loading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [GET_TABLES_ACTION.fulfilled]: function (state, action) {
      state.loading = false;
      state.isError = false;
      state.errorMessage = "";
      state.tablesData = action.payload;
    },
    [GET_TABLES_ACTION.rejected]: function (state, action) {
      state.loading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // post action
    [ADD_NEW_TABLE_ACTION.pending]: function (state) {
      state.loading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_NEW_TABLE_ACTION.fulfilled]: function (state, action) {
      state.loading = false;
      state.isError = false;
      state.errorMessage = "";
      state.tablesData.push(action.payload);
    },
    [ADD_NEW_TABLE_ACTION.rejected]: function (state, action) {
      state.loading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // Delete the table
    [DELETE_EXISTING_TABLE_ACTION.pending]: function (state) {
      state.loading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [DELETE_EXISTING_TABLE_ACTION.fulfilled]: function (state, action) {
      const deleteTarget = action.meta.arg;
      const newTablesData = state.tablesData.filter(
        (table) => table.id !== deleteTarget
      );
      state.loading = false;
      state.isError = false;
      state.errorMessage = "";
      state.tablesData = newTablesData;
    },
    [DELETE_EXISTING_TABLE_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // edit action
    [EDIT_TABLE_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [EDIT_TABLE_ACTION.fulfilled]: function (state, action) {
      const currentTargetID = action.meta.arg.id;
      const responseData = action.payload;
      const newTablesData = state.tablesData.filter(
        (table) => table.id === currentTargetID
      );
      // newTablesData.push(responseData);
      console.log(newTablesData);
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      // state.tablesData = newTablesData;
    },
    [EDIT_TABLE_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});
