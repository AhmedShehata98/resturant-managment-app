import React, { useEffect } from "react";
import { nanoid } from "nanoid";

// components
import SectionWrapper from "../../SC/SectionWrapper";
import StatisticsWrapper from "../../SC/StatisticsWrapper";
import Statistic from "../../SC/Statistic";
import Table from "../../SC/Table";
import TableRow from "../../SC/TableRow";
import TableHeadding from "../../SC/TableHead";
import TableData from "../../SC/TableData";
import TableHeader from "../../SC/TableHeader";
import TableBody from "../../SC/TableBody";

//3rd party components

//icons
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import BoyOutlinedIcon from "@mui/icons-material/BoyOutlined";

// Redux slice
import { GET_TABLES_ACTION } from "../../../../Redux/Slice/TablesSlice";
import { GET_RESERVATIONS_ACTION } from "../../../../Redux/Slice/ReservationsSlice";
import { GET_EMPLYEES_ACTION } from "../../../../Redux/Slice/EmloyeesSlice";
import { GET_ORDERS_ACTION } from "../../../../Redux/Slice/OrdersSlice";
import { GET_PRODUCTS_ACTION } from "../../../../Redux/Slice/ProductsSlice";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";

const Home = () => {
  const dispatch = useDispatch();
  const {
    tables: { tablesData },
    reservations: { reservationsData },
    products: { productsData },
    orders: { ordersData },
    employees: { emplyeesData },
  } = useSelector((state) => state);

  useEffect(() => {
    // dispatch(GET_TABLES_ACTION());
    dispatch(GET_RESERVATIONS_ACTION());
    // dispatch(GET_EMPLYEES_ACTION());
    // dispatch(GET_ORDERS_ACTION());
    // dispatch(GET_PRODUCTS_ACTION());
  }, [dispatch]);

  const reversionTableHead = [
    "no.",
    "customer name",
    "table number",
    "table type",
    "people count",
    "date",
  ];
  const tableHeadData = [
    "no.",
    "table number",
    "capacity",
    "tableType",
    "status",
  ];
  const employeesHeadData = [
    "no.",
    "full name",
    "brithday",
    "phone number",
    "sallery",
    "carrir",
    "join date",
    "end date",
    "sanctions",
  ];
  const ordersHeadData = [
    "no.",
    "table number",
    "order name",
    "category",
    "phone number",
    "quantity",
  ];
  const productsHeadData = [
    "no.",
    "product name",
    "product price",
    "category",
    "size",
  ];

  return (
    <SectionWrapper>
      <StatisticsWrapper gridSystem>
        <Statistic
          Count={productsData.length}
          Title="total menus"
          IconElement={<ArticleOutlinedIcon />}
          Persent="20"
          ProgressValue="20%"
        ></Statistic>
        <Statistic
          Count={ordersData.length}
          Title="total orders today"
          IconElement={<BookmarkBorderOutlinedIcon />}
          Persent="35"
          ProgressValue="35%"
        ></Statistic>
        <Statistic
          Count={tablesData.length}
          Title="total tables"
          IconElement={<TableRestaurantOutlinedIcon />}
          Persent="35"
          ProgressValue="35%"
        ></Statistic>
        <Statistic
          Count={reservationsData.length}
          Title="total Reservations today"
          IconElement={<BoyOutlinedIcon />}
          Persent="45"
          ProgressValue="45%"
        ></Statistic>
        <Statistic
          className="active"
          Count="577 $"
          Title="revenue ratio today"
          IconElement={<TrendingUpRoundedIcon />}
          Persent="65"
          ProgressValue="65%"
        ></Statistic>
      </StatisticsWrapper>
      <Table Title="tables" FetchData={GET_TABLES_ACTION()}>
        <TableHeader>
          <TableRow>
            {tablesData &&
              tableHeadData.map((table) => {
                return <TableHeadding key={nanoid(3)}>{table}</TableHeadding>;
              })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tablesData &&
            tablesData.map((table) => {
              return (
                <TableRow
                  className={table.availability === true && "not-available"}
                  key={nanoid(4)}
                >
                  <TableData key={nanoid(2)}>{table.id}</TableData>
                  <TableData key={nanoid(2)}>{table.tableNumber}</TableData>
                  <TableData key={nanoid(2)}>{table.capacity}</TableData>
                  <TableData key={nanoid(2)}>{table.tableType}</TableData>
                  <TableData key={nanoid(2)}>{table.availability}</TableData>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Table
        collapsed
        Title="Reservations"
        FetchData={GET_RESERVATIONS_ACTION()}
      >
        <TableHeader>
          <TableRow key={nanoid(4)}>
            {reversionTableHead.map((reserve) => {
              return <TableHeadding key={nanoid(2)}>{reserve}</TableHeadding>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {reservationsData.map((reserve) => {
            return (
              <TableRow key={nanoid(4)}>
                <TableData key={nanoid(2)}>{reserve.id}</TableData>
                <TableData key={nanoid(2)}>{reserve.customerName}</TableData>
                <TableData key={nanoid(2)}>{reserve.tableNumber}</TableData>
                <TableData key={nanoid(2)}>{reserve.tableType}</TableData>
                <TableData key={nanoid(2)}>{reserve.peopleCount}</TableData>
                <TableData key={nanoid(2)}>{reserve.date}</TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Table Title="Products" FetchData={GET_PRODUCTS_ACTION()}>
        <TableHeader>
          <TableRow>
            {productsData &&
              productsHeadData.map((product) => {
                return <TableHeadding key={nanoid(3)}>{product}</TableHeadding>;
              })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {productsData &&
            productsData.map((product) => {
              return (
                <TableRow key={nanoid(3)}>
                  <TableData key={nanoid(2)}>{product.id}</TableData>
                  <TableData key={nanoid(2)}>{product.productName}</TableData>
                  <TableData key={nanoid(2)}>{product.productPrice}</TableData>
                  <TableData key={nanoid(2)}>{product.categories}</TableData>
                  <TableData key={nanoid(2)}>{product.size}</TableData>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Table Title="Orders" FetchData={GET_ORDERS_ACTION()}>
        <TableHeader>
          <TableRow>
            {ordersData &&
              ordersHeadData.map((order) => {
                return <TableHeadding key={nanoid(3)}>{order}</TableHeadding>;
              })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ordersData &&
            ordersData.map((order) => {
              return (
                <TableRow key={nanoid(3)}>
                  <TableData key={nanoid(2)}>{order.id}</TableData>
                  <TableData key={nanoid(2)}>{order.tableNumber}</TableData>
                  <TableData key={nanoid(2)}>{order.orderName}</TableData>
                  <TableData key={nanoid(2)}>{order.category}</TableData>
                  <TableData key={nanoid(2)}>{order.quantity}</TableData>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <Table Title="Employees" FetchData={GET_EMPLYEES_ACTION()}>
        <TableHeader>
          <TableRow>
            {emplyeesData &&
              employeesHeadData.map((emplyee) => {
                return <TableHeadding key={nanoid(3)}>{emplyee}</TableHeadding>;
              })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {emplyeesData &&
            emplyeesData.map((emplyee) => {
              return (
                <TableRow key={nanoid(3)}>
                  <TableData key={nanoid(2)}>{emplyee.id}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.fullName}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.brithday}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.phoneNumber}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.sallery}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.carrir}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.joinDate}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.endDate}</TableData>
                  <TableData key={nanoid(2)}>{emplyee.sanctions}</TableData>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </SectionWrapper>
  );
};

export default Home;
