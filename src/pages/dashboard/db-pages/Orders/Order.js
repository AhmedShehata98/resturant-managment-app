import React, { useState, lazy, Suspense, useEffect } from "react";
import { nanoid } from "nanoid";
import { createPortal } from "react-dom";

//icons
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";

// redux
import { useSelector, useDispatch } from "react-redux";
import { GET_TABLES_ACTION } from "../../../../Redux/Slice/TablesSlice";

// components
import SectionWrapper from "../../SC/SectionWrapper";
import TablesCardsWrapper from "./SC/TablesCardsWrapper";
import TableCard from "./SC/TableCard";
import Table from "../../SC/Table";
import TableRow from "../../SC/TableRow";
import TableHeadding from "../../SC/TableHead";
import TableData from "../../SC/TableData";
import TableHeader from "../../SC/TableHeader";
import TableBody from "../../SC/TableBody";
import LoadingModule from "../../../../components/LoadingModule/LoadingModule";
import { Button } from "@mui/material";
import { GET_ORDERS_ACTION } from "../../../../Redux/Slice/OrdersSlice";
const AddOrderModal = lazy(() => import("./SC/AddOrderModal"));

const Order = () => {
  const dispatch = useDispatch();
  const {
    orders: { ordersData },
    tables: { tablesData },
  } = useSelector((state) => state);
  const [OrderModal, setOrderModal] = useState({
    showOrder: false,
    oldOrders: [],
    TableNumber: 0,
    tableSelectedID: 0,
  });
  const container = document.getElementById("orders-modal");
  const orderFormModal = createPortal(
    <Suspense>
      <AddOrderModal setOrderModal={setOrderModal} OrderModal={OrderModal} />
    </Suspense>,
    container
  );

  useEffect(() => {
    dispatch(GET_TABLES_ACTION());
  }, [dispatch]);

  const ordersHeadList = [
    "no.",
    "table number",
    "order name",
    "category",
    "quantity",
    "delete",
    "edit",
  ];

  return (
    <SectionWrapper>
      <TablesCardsWrapper>
        {tablesData &&
          tablesData.map((tableCard) => {
            return (
              <>
                <TableCard
                  key={nanoid(5)}
                  className={
                    tableCard.availability === false ? "not-available" : null
                  }
                  setOrderModal={setOrderModal}
                  TableNumber={tableCard.tableNumber}
                  oldOrders={tableCard.orders ? tableCard.orders : null}
                  id={tableCard.id}
                  TableCapacity={tableCard.capacity}
                  OrdersCount={tableCard.orders ? tableCard.orders.length : 0}
                />
              </>
            );
          })}
      </TablesCardsWrapper>
      {OrderModal.showOrder && orderFormModal}
      <Table Title="Orders" FetchData={GET_ORDERS_ACTION()}>
        <TableHeader>
          <TableRow>
            {ordersHeadList.map((order) => {
              return <TableHeadding key={nanoid(6)}>{order}</TableHeadding>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ordersData.map((order) => {
            return (
              <TableRow key={nanoid(3)}>
                <TableData key={nanoid(3)}>{order.id}</TableData>
                <TableData key={nanoid(3)}>{order.tableNumber}</TableData>
                <TableData key={nanoid(3)}>{order.orderName}</TableData>
                <TableData key={nanoid(3)}>{order.category}</TableData>
                <TableData key={nanoid(3)}>{order.quantity}</TableData>
                <TableData key={nanoid(3)}>
                  <Button variant="text" size="small">
                    <DeleteOutlined color="error" fontSize="small" />
                  </Button>
                </TableData>
                <TableData key={nanoid(3)}>
                  <Button variant="text" size="small">
                    <EditOutlined color="action" fontSize="small" />
                  </Button>
                </TableData>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </SectionWrapper>
  );
};

export default Order;
