import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase/firebase-config";
import { OPEN_SAKE_TOAST } from "./AppSlice";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore/lite";
//
const employeesCollection = collection(db, "employees");
//
export const GET_EMPLYEES_ACTION = createAsyncThunk(
  "emplyees/getEmplyees",
  async function (_, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const requestEmployeesData = await getDocs(employeesCollection);
      const snapshotData = requestEmployeesData.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return snapshotData;
    } catch (error) {
      rejectWithValue(error.message);
      dispatch(
        OPEN_SAKE_TOAST({
          message: ` Oops ${error.message}`,
          severity: "error",
        })
      );
    }
  }
);
//
export const ADD_EMPLYEES_ACTION = createAsyncThunk(
  "emplyees/addEmplyees",
  async function (data, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const addEmplyees = await addDoc(employeesCollection, data);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `The employee ${data.fullName} is added Successfully`,
          severity: "success",
        })
      );
      return data;
    } catch (error) {
      rejectWithValue(error.message);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `Ooops , Error : ${error.message}`,
          severity: "error",
        })
      );
    }
  }
);
export const DELETE_EXISTING_EMPLOYEE_ACTION = createAsyncThunk(
  "employees/deleteemployee",
  async function (id, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const deleteTarget = doc(db, "employees", id);
      const deleteEmployee = await deleteDoc(deleteTarget);
      dispatch(
        OPEN_SAKE_TOAST({
          message: " Employee is Deleted from System successfully",
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
export const EDIT_EMPLOYEE_ACTION = createAsyncThunk(
  "employees/editEmployee",
  async function ({ id, data }, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const updateTarget = doc(db, "employees", id);
      const updateEmployeeInfo = updateDoc(updateTarget, data);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `employee named : ${data.fullName} is updated info's successfully`,
          severity: "success",
        })
      );
      return data;
    } catch (error) {
      rejectWithValue(error.message);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `Oops ! ,  : ${error.message} `,
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
