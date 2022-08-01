import React, { useState, lazy, Suspense } from "react";
import { nanoid } from "nanoid";
import { createPortal } from "react-dom";

//icons
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import EditOutlined from "@mui/icons-material/EditOutlined";

// redux
import { useSelector } from "react-redux";

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
const AddOrderModal = lazy(() => import("./SC/AddOrderModal"));

const Order = () => {
  const {
    orders: { ordersData },
  } = useSelector((state) => state);
  const [showOrder, setshowOrder] = useState(false);
  const container = document.getElementById("orders-modal");
  const orderModal = createPortal(
    <Suspense>
      <AddOrderModal setshowOrder={setshowOrder} />
    </Suspense>,
    container
  );

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
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
        <TableCard
          setshowOrder={setshowOrder}
          TableName="11"
          TableCapacity="4"
          OrdersCount="8"
        />
      </TablesCardsWrapper>
      {showOrder && orderModal}
      <Table>
        <TableHeader>
          <TableRow>
            {ordersHeadList.map((order) => {
              return <TableHeadding>{order}</TableHeadding>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {ordersData.map((order) => {
            return (
              <TableRow key={nanoid(3)}>
                <TableData key={nanoid(2)}>{order.id}</TableData>
                <TableData key={nanoid(2)}>{order.tableNumber}</TableData>
                <TableData key={nanoid(2)}>{order.orderName}</TableData>
                <TableData key={nanoid(2)}>{order.category}</TableData>
                <TableData key={nanoid(2)}>{order.quantity}</TableData>
                <TableData key={nanoid(2)}>
                  <Button variant="text" size="small">
                    <DeleteOutlined color="error" fontSize="small" />
                  </Button>
                </TableData>
                <TableData key={nanoid(2)}>
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
