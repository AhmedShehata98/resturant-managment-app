import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:9000/emplyees";
//
export const GET_EMPLYEES_ACTION = createAsyncThunk(
  "emplyees/getEmplyees",
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
export const ADD_EMPLYEES_ACTION = createAsyncThunk(
  "emplyees/addEmplyees",
  async function (data, thunkApi) {
    const incomingData = data;
    const { rejectWithValue } = thunkApi;
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
export const DELETE_EXISTING_EMPLOYEE_ACTION = createAsyncThunk(
  "employees/deleteemployee",
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
export const EDIT_EMPLOYEE_ACTION = createAsyncThunk(
  "employees/editEmployee",
  async function ({ id, data }, thunkApi) {
    const { rejectWithValue } = thunkApi;
    try {
      const req = await fetch(API_URL + "/" + id, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
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
//
//
const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  emplyeesData: [],
};
//
//
const emplyeesSlice = createSlice({
  name: "emplyees",
  initialState,
  extraReducers: {
    [GET_EMPLYEES_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [GET_EMPLYEES_ACTION.fulfilled]: function (state, action) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.emplyeesData = action.payload;
    },
    [GET_EMPLYEES_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // add employees
    [ADD_EMPLYEES_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_EMPLYEES_ACTION.fulfilled]: function (state, action) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
      state.emplyeesData.push(action.payload);
    },
    [ADD_EMPLYEES_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // delete Product
    [DELETE_EXISTING_EMPLOYEE_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.errorMessage = "";
      state.isError = false;
    },
    [DELETE_EXISTING_EMPLOYEE_ACTION.fulfilled]: function (state, action) {
      const currentTargetID = action.meta.arg;
      const newEmplyeesData = state.emplyeesData.filter(
        (order) => order.id !== currentTargetID
      );
      state.isLoading = false;
      state.errorMessage = "";
      state.isError = false;
      state.emplyeesData = newEmplyeesData;
    },
    [DELETE_EXISTING_EMPLOYEE_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },

    // edit action
    [EDIT_EMPLOYEE_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [EDIT_EMPLOYEE_ACTION.fulfilled]: function (state, action) {
      const currentTargetID = action.meta.arg.id;
      const responseData = action.payload;
      const newEmplyeesData = state.emplyeesData.filter(
        (employee) => employee.id !== currentTargetID
      );
      newEmplyeesData.push(responseData);
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.emplyeesData = newEmplyeesData;
      console.log(action);
    },
    [EDIT_EMPLOYEE_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export default emplyeesSlice.reducer;
