import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://127.0.0.1:9000/tables";
//
export const GET_TABLES_ACTION = createAsyncThunk(
  "tables/getdata",
  async function (_, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const req = await fetch(API_URL);
      const data = await req.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
//
export const ADD_NEW_TABLE_ACTION = createAsyncThunk(
  "tables/addtable",
  async function (data, thunkApi) {
    const { rejectWithValue } = thunkApi;
    const incomingData = data;
    //
    try {
      const req = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: incomingData,
      });
      const data = await req.json();
      return data;
      //
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

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
  },
});
