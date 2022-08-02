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

export const DELETE_EXISTING_TABLE_ACTION = createAsyncThunk(
  "table/deleteTable",
  async function (id, thunkApi) {
    const { rejectWithValue } = thunkApi;
    const incomingID = id;
    try {
      const req = await fetch(API_URL + "/" + incomingID, {
        method: "DELETE",
      });
      return await req.json();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const EDIT_TABLE_ACTION = createAsyncThunk(
  "tables,editTable",
  async function ({ id, data }, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const req = await fetch(API_URL + "/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: data,
      });
      return await req.json();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const ADD_EXTRA_KEY = createAsyncThunk(
  "tables/addExtra",
  async function ({ id, data }, thunkapi) {
    const { rejectWithValue } = thunkapi;
    try {
      const req = await fetch(API_URL + "/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      rejectWithValue(err.message);
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
        (table) => table.id !== currentTargetID
      );
      newTablesData.push(responseData);
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.tablesData = newTablesData;
    },
    [EDIT_TABLE_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // put extra keys
    [ADD_EXTRA_KEY.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_EXTRA_KEY.fulfilled]: function (state, action) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      console.log(action);
    },
    [ADD_EXTRA_KEY.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});
