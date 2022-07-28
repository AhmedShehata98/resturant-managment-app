import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//components
import LoadingModule from "./components/LoadingModule/LoadingModule";
import "./scss/custom.css";
const Header = lazy(() => import("./components/Header/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Login = lazy(() => import("./pages/Login/Login"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const DashboardHome = lazy(() =>
  import("./pages/dashboard/db-pages/Home/Home")
);
const DashboardAddTable = lazy(() =>
  import("./pages/dashboard/db-pages/AddTables/AddTable")
);
const AddEmployes = lazy(() =>
  import("./pages/dashboard/db-pages/AddEmplyees/AddEmployes")
);
const Tax = lazy(() => import("./pages/dashboard/db-pages/Tax/Tax"));
const AddProduct = lazy(() =>
  import("./pages/dashboard/db-pages/AddProduct/AddProduct")
);
const Reports = lazy(() =>
  import("./pages/dashboard/db-pages/Reports/Reports")
);
const Order = lazy(() => import("./pages/dashboard/db-pages/Orders/Order"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingModule />}>
              <Header />
              <Home />
            </Suspense>
          }
        />

        <Route
          path="login"
          element={
            <Suspense fallback={<LoadingModule />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<LoadingModule />}>
              <Dashboard />
            </Suspense>
          }
        >
          <Route
            path="home"
            element={
              <Suspense fallback={<LoadingModule />}>
                <DashboardHome />
              </Suspense>
            }
          />
          <Route
            path="add-tables"
            element={
              <Suspense fallback={<LoadingModule />}>
                <DashboardAddTable />
              </Suspense>
            }
          />
          <Route
            path="add-employes"
            element={
              <Suspense fallback={<LoadingModule />}>
                <AddEmployes />
              </Suspense>
            }
          />
          <Route
            path="tax"
            element={
              <Suspense fallback={<LoadingModule />}>
                <Tax />
              </Suspense>
            }
          />
          <Route
            path="add-product"
            element={
              <Suspense fallback={<LoadingModule />}>
                <AddProduct />
              </Suspense>
            }
          />
          <Route
            path="reports"
            element={
              <Suspense fallback={<LoadingModule />}>
                <Reports />
              </Suspense>
            }
          />
          <Route
            path="order"
            element={
              <Suspense fallback={<LoadingModule />}>
                <Order />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
