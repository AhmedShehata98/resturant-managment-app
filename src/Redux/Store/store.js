import { configureStore } from "@reduxjs/toolkit";
import { tablesSlice } from "../Slice/TablesSlice";
import ReservationsReducer from "../Slice/ReservationsSlice";
import ProductsReducer from "../Slice/ProductsSlice";
import OrdersReducer from "../Slice/OrdersSlice";
import EmloyeesReducer from "../Slice/EmloyeesSlice";
import TaxReducer from "../Slice/TaxSlice";
import AppReducer from "../Slice/AppSlice";

const store = configureStore({
  reducer: {
    tables: tablesSlice.reducer,
    reservations: ReservationsReducer,
    products: ProductsReducer,
    orders: OrdersReducer,
    employees: EmloyeesReducer,
    tax: TaxReducer,
    app: AppReducer,
  },
});

export default store;
