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
const CheckoutTableModal = lazy(() => import("./SC/CheckoutTableModal"));

const Order = () => {
  const dispatch = useDispatch();
  const {
    orders: { ordersData },
    tables: { tablesData },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch(GET_TABLES_ACTION());
  }, [dispatch]);
  const [OrderModal, setOrderModal] = useState({
    showOrder: false,
    oldOrders: [],
    TableNumber: 0,
    tableSelectedID: 0,
  });
  const [CheckoutModal, setCheckoutModal] = useState({
    showCheckout: false,
    ordersList: [],
    tableNumber: 0,
    tableSelectedID: 0,
  });
  //
  const OrderContainer = document.getElementById("orders-modal");
  const ChikingoutContainer = document.getElementById("checkout-modal");
  const orderFormModal = createPortal(
    <Suspense>
      <AddOrderModal setOrderModal={setOrderModal} OrderModal={OrderModal} />
    </Suspense>,
    OrderContainer
  );
  const CheckingoutModal = createPortal(
    <Suspense>
      <CheckoutTableModal
        setCheckoutModal={setCheckoutModal}
        OrderModal={CheckoutModal}
        Title={"Checkout Report"}
      />
    </Suspense>,
    ChikingoutContainer
  );

  const ordersHeadList = [
    "order name",
    "order price",
    "quantity",
    "category",
    "size",
    "table number",
    "delete",
    "edit",
  ];

  return (
    <SectionWrapper>
      {OrderModal.showOrder && orderFormModal}
      {CheckoutModal.showCheckout && CheckingoutModal}
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
                  id={tableCard.id}
                  setOrderModal={setOrderModal}
                  setCheckoutModal={setCheckoutModal}
                  CheckoutModal={CheckoutModal}
                  TableNumber={tableCard.tableNumber}
                  Capacity={tableCard.capacity}
                  Orders={tableCard.orders}
                />
              </>
            );
          })}
      </TablesCardsWrapper>

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
                <TableData key={nanoid(3)}>{order.orderName}</TableData>
                <TableData key={nanoid(3)}>{order.orderPrice} L.E</TableData>
                <TableData key={nanoid(3)}>{order.quantity}</TableData>
                <TableData key={nanoid(3)}>{order.category}</TableData>
                <TableData key={nanoid(3)}>{order.size}</TableData>
                <TableData key={nanoid(3)}>{order.tableNumber}</TableData>
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
