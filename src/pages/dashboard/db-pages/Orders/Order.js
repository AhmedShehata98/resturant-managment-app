import React, { useState, lazy, Suspense } from "react";
import SectionWrapper from "../../SC/SectionWrapper";
import TableCard from "./SC/TableCard";
import TablesCardsWrapper from "./SC/TablesCardsWrapper";
import { createPortal } from "react-dom";
import LoadingModule from "../../../../components/LoadingModule/LoadingModule";
const AddOrderModal = lazy(() => import("./SC/AddOrderModal"));

const Order = () => {
  const [showOrder, setshowOrder] = useState(false);
  const container = document.getElementById("orders-modal");
  const orderModal = createPortal(
    <Suspense>
      <AddOrderModal setshowOrder={setshowOrder} />
    </Suspense>,
    container
  );

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
    </SectionWrapper>
  );
};

export default Order;
