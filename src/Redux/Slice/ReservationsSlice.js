import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
//
const reservationsCollection = collection(db, "Reservations");
//
//
export const GET_RESERVATIONS_ACTION = createAsyncThunk(
  "reservations/getData",
  async function (_, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const requestedData = getDocs(reservationsCollection);
      const snapshotData = (await requestedData).docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      return snapshotData;
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
//
export const ADD_RESERVATION_ACTION = createAsyncThunk(
  "reservations/addReservation",
  async function (data, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
      const addReservation = await addDoc(reservationsCollection, data);
      dispatch(
        OPEN_SAKE_TOAST({
          message: `The booking for the customer: ${data.customerName} has been successfully added , `,
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

export const DELETE_EXISTING_RESERVATION_ACTION = createAsyncThunk(
  "reservations/deleteReservation",
  async function (id, thunkApi) {
    const { rejectWithValue, dispatch } = thunkApi;

    try {
      const deleteTarget = doc(db, "Reservations", id);
      await deleteDoc(deleteTarget);
      dispatch(
        OPEN_SAKE_TOAST({
          message: "Reservations deleted successfully",
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
//
//
const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  reservationsData: [],
};
//
//

const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  extraReducers: {
    [GET_RESERVATIONS_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [GET_RESERVATIONS_ACTION.fulfilled]: function (state, action) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.reservationsData = action.payload;
    },
    [GET_RESERVATIONS_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    // add reservations
    [ADD_RESERVATION_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.isError = false;
      state.errorMessage = "";
    },
    [ADD_RESERVATION_ACTION.fulfilled]: function (state, action) {
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = "";
      state.reservationsData.push(action.payload);
    },
    [ADD_RESERVATION_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },

    // delete reservations

    [DELETE_EXISTING_RESERVATION_ACTION.pending]: function (state) {
      state.isLoading = true;
      state.errorMessage = "";
      state.isError = false;
    },
    [DELETE_EXISTING_RESERVATION_ACTION.fulfilled]: function (state, action) {
      const currentTargetID = action.meta.arg;
      const newReservationData = state.reservationsData.filter(
        (reservation) => reservation.id !== currentTargetID
      );
      state.isLoading = false;
      state.isError = false;
      state.reservationsData = newReservationData;
    },
    [DELETE_EXISTING_RESERVATION_ACTION.rejected]: function (state, action) {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export default reservationsSlice.reducer;
