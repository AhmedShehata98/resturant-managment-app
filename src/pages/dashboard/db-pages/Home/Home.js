import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import Table from "../../SC/Table";
import SectionWrapper from "../../SC/SectionWrapper";
import TableDataRow from "../../SC/TableDataRow";
import TableData from "../../SC/TableData";
import StatisticsWrapper from "../../SC/StatisticsWrapper";
import Statistic from "../../SC/Statistic";

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
    dispatch(GET_TABLES_ACTION());
    dispatch(GET_RESERVATIONS_ACTION());
    dispatch(GET_EMPLYEES_ACTION());
    dispatch(GET_ORDERS_ACTION());
    dispatch(GET_PRODUCTS_ACTION());
  }, [dispatch]);

  console.log(typeof emplyeesData);
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
      <Table
        Title="reservations"
        TableHeadName={reversionTableHead}
        TableHeadLength={reversionTableHead.length}
      >
        {reservationsData.map((reserve) => {
          return (
            <TableDataRow key={nanoid(6)}>
              <TableData key={nanoid(4)} Width={reversionTableHead.length}>
                {reserve.id}
              </TableData>
              <TableData key={nanoid(4)} Width={reversionTableHead.length}>
                {reserve.customerName}
              </TableData>
              <TableData key={nanoid(4)} Width={reversionTableHead.length}>
                {reserve.tableNumber}
              </TableData>
              <TableData key={nanoid(4)} Width={reversionTableHead.length}>
                {reserve.tableType}
              </TableData>
              <TableData key={nanoid(4)} Width={reversionTableHead.length}>
                {reserve.peopleCount}
              </TableData>
              <TableData key={nanoid(4)} Width={reversionTableHead.length}>
                {reserve.date}
              </TableData>
            </TableDataRow>
          );
        })}
      </Table>
      <Table
        Title="tables"
        TableHeadName={tableHeadData}
        TableHeadLength={tableHeadData.length}
      >
        {tablesData.map((data) => {
          return (
            <TableDataRow
              className={data.availability === false && "reserved"}
              key={nanoid(6)}
            >
              <TableData key={nanoid(4)} Width={tableHeadData.length}>
                {data.id}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadData.length}>
                {data.tableNumber}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadData.length}>
                {data.capacity}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadData.length}>
                {data.tableType}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadData.length}>
                {data.availability ? "availabe" : "reserved"}
              </TableData>
            </TableDataRow>
          );
        })}
      </Table>
      <Table
        TableHeadName={productsHeadData}
        TableHeadLength={productsHeadData.length}
        Title="products"
      >
        <TableDataRow key={nanoid(4)}>
          {productsData.map((product) => {
            return (
              <>
                <TableData key={nanoid(4)} Width={productsData.length}>
                  {product.id}
                </TableData>
                <TableData key={nanoid(4)} Width={productsData.length}>
                  {product.productName}
                </TableData>
                <TableData key={nanoid(4)} Width={productsData.length}>
                  {product.productPrice}
                </TableData>
                <TableData key={nanoid(4)} Width={productsData.length}>
                  {product.categories}
                </TableData>
                <TableData key={nanoid(4)} Width={productsData.length}>
                  {product.size}
                </TableData>
              </>
            );
          })}
        </TableDataRow>
      </Table>
      <Table
        TableHeadName={ordersHeadData}
        TableHeadLength={ordersHeadData.length}
        Title="Orders"
      >
        <TableDataRow key={nanoid(4)}>
          {ordersData.map((order) => {
            return (
              <>
                <TableData key={nanoid(4)} Width={ordersData.length}>
                  {order.id}
                </TableData>
                <TableData key={nanoid(4)} Width={ordersData.length}>
                  {order.tableNumber}
                </TableData>
                <TableData key={nanoid(4)} Width={ordersData.length}>
                  {order.orderName}
                </TableData>
                <TableData key={nanoid(4)} Width={ordersData.length}>
                  {order.category}
                </TableData>
                <TableData key={nanoid(4)} Width={ordersData.length}>
                  {order.quantity}
                </TableData>
              </>
            );
          })}
        </TableDataRow>
      </Table>
      <Table
        TableHeadName={employeesHeadData}
        TableHeadLength={employeesHeadData.length}
        Title="Employees"
      >
        <TableDataRow key={nanoid(4)}>
          {emplyeesData.map((employee) => {
            return (
              <>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.id}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.fullName}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.brithday}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.phoneNumber}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.sallery}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.carrir}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.joinDate}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.endDate}
                </TableData>
                <TableData key={nanoid(4)} Width={emplyeesData.length}>
                  {employee.sanctions}
                </TableData>
              </>
            );
          })}
        </TableDataRow>
      </Table>
    </SectionWrapper>
  );
};

export default Home;
