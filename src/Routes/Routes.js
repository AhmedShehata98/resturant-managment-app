import React, { lazy, Suspense } from "react";
import { Route, Routes as RoutesDom } from "react-router-dom";

// Routes List
import { RoutesList } from "./RoutesList";

//components
import LoadingModule from "../components/LoadingModule/LoadingModule";
const Header = lazy(() => import("../components/Header/Header"));
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const DashboardHome = lazy(() =>
  import("../pages/dashboard/db-pages/Home/Home")
);
const DashboardAddTable = lazy(() =>
  import("../pages/dashboard/db-pages/AddTables/AddTable")
);
const AddEmployes = lazy(() =>
  import("../pages/dashboard/db-pages/AddEmplyees/AddEmployes")
);
const Tax = lazy(() => import("../pages/dashboard/db-pages/Tax/Tax"));
const AddProduct = lazy(() =>
  import("../pages/dashboard/db-pages/AddProduct/AddProduct")
);
const Reports = lazy(() =>
  import("../pages/dashboard/db-pages/Reports/Reports")
);
const Order = lazy(() => import("../pages/dashboard/db-pages/Orders/Order"));

function Routes() {
  return (
    <RoutesDom>
      <Route
        path={RoutesList.home}
        element={
          <Suspense fallback={<LoadingModule />}>
            <Header />
            <Home />
          </Suspense>
        }
      />

      <Route
        path={RoutesList.login}
        element={
          <Suspense fallback={<LoadingModule />}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path={RoutesList.dashboard.main}
        element={
          <Suspense fallback={<LoadingModule />}>
            <Dashboard />
          </Suspense>
        }
      >
        <Route
          path={RoutesList.dashboard.home}
          element={
            <Suspense fallback={<LoadingModule />}>
              <DashboardHome />
            </Suspense>
          }
        />
        <Route
          path={RoutesList.dashboard.addTables}
          element={
            <Suspense fallback={<LoadingModule />}>
              <DashboardAddTable />
            </Suspense>
          }
        />
        <Route
          path={RoutesList.dashboard.addEmployes}
          element={
            <Suspense fallback={<LoadingModule />}>
              <AddEmployes />
            </Suspense>
          }
        />
        <Route
          path={RoutesList.dashboard.tax}
          element={
            <Suspense fallback={<LoadingModule />}>
              <Tax />
            </Suspense>
          }
        />
        <Route
          path={RoutesList.dashboard.addProduct}
          element={
            <Suspense fallback={<LoadingModule />}>
              <AddProduct />
            </Suspense>
          }
        />
        <Route
          path={RoutesList.dashboard.reports}
          element={
            <Suspense fallback={<LoadingModule />}>
              <Reports />
            </Suspense>
          }
        />
        <Route
          path={RoutesList.dashboard.order}
          element={
            <Suspense fallback={<LoadingModule />}>
              <Order />
            </Suspense>
          }
        />
      </Route>
    </RoutesDom>
  );
}

export default Routes;
