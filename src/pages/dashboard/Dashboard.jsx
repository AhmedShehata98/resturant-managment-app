import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

// 3rd party components
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

//components
import Tooltip from "@mui/material/Tooltip";
import DashboardHeader from "../../components/dashboardHeader/DashboardHeader";
import Asidebar from "./SC/Asidebar";
import DashboardSection from "./SC/DashboardSection";
import DashboardWrapper from "./SC/DashboardWrapper";
import DbNavbar from "./SC/DbNavbar";
import ControlPanel from "./SC/ControlPanel";
import SearchField from "./SC/SearchField";
import WelcomeHeadding from "./SC/WelcomeHeadding";
import LogoComponent from "../../components/Header/SC/Logo";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { CLOSE_SNAKE_TOAST, OPEN_SAKE_TOAST } from "../../Redux/Slice/AppSlice";

//icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const Dashboard = () => {
  const {
    app: { isOpenToast, toastMessage, toastMessageSeverity },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("home");
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(CLOSE_SNAKE_TOAST());
  };
  return (
    <DashboardWrapper>
      <Asidebar className="border shadow">
        <LogoComponent className="d-flex flex-column mb-5">
          <img src={require("../../assets/icons/cutlery.png")} alt="logo" />
          <small className="text-white">custoso</small>
        </LogoComponent>
        <DbNavbar>
          {/*  */}
          <Tooltip title="Home" placement="left-end">
            <NavLink to="home">
              <HomeOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          <Tooltip title="add table" placement="right-end">
            <NavLink to="add-tables">
              <TableRestaurantOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          <Tooltip title="add employess" placement="right-end">
            <NavLink to="add-employes">
              <PeopleAltOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          <Tooltip title="Tax" placement="right-end">
            <NavLink to="tax">
              <CurrencyExchangeOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          <Tooltip title="orders" placement="right-end">
            <NavLink to="order">
              <AddShoppingCartOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          <Tooltip title="add product" placement="right-end">
            <NavLink to="add-product">
              <LunchDiningOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          <Tooltip title="Reports" placement="right-end">
            <NavLink to="reports">
              <SummarizeOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          {/*  */}
        </DbNavbar>
        <ControlPanel Src="https://picsum.photos/150">
          <Tooltip title="Support" placement="right-end">
            <NavLink to="support">
              <SupportRoundedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
          <Tooltip title="Settings" placement="right-end">
            <NavLink to="setting">
              <SettingsOutlinedIcon color="inherit" fontSize="small" />
            </NavLink>
          </Tooltip>
        </ControlPanel>
      </Asidebar>
      <DashboardSection AsideWidth="60px">
        <DashboardHeader>
          <WelcomeHeadding>
            <strong>Welcome , Ahmed Shehata</strong>
            <small>Lorem ipsum dolor sit amet consectetur.</small>
          </WelcomeHeadding>
          <SearchField />
        </DashboardHeader>
        <Outlet />
        <Snackbar
          open={isOpenToast}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            variant="filled"
            severity={toastMessageSeverity}
            sx={{ width: "100%" }}
          >
            {toastMessage}
          </Alert>
        </Snackbar>
      </DashboardSection>
    </DashboardWrapper>
  );
};

export default Dashboard;
