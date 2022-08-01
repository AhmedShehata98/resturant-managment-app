import TableDataRow from "../../SC/TableDataRow";
import TableData from "../../SC/TableData";
import { nanoid } from "nanoid";

export const Reservations = (Array) => {
  Array.map((ele) => {
    return (
      <TableDataRow key={nanoid(6)}>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.id}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.customerName}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.tableNumber}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.tableType}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.peopleCount}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.date}
        </TableData>
      </TableDataRow>
    );
  });
};
export const Tables = (Array) => {
  Array.map((ele) => {
    return (
      <TableDataRow
        className={ele.availability === false && "reserved"}
        key={nanoid(6)}
      >
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.id}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.tableNumber}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.capacity}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.tableType}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.availability ? "availabe" : "reserved"}
        </TableData>
      </TableDataRow>
    );
  });
};
export const Products = (Array) => {
  Array.map((ele) => {
    return (
      <TableDataRow key={nanoid(6)}>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.id}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.productName}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.productPrice}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.categories}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.size}
        </TableData>
      </TableDataRow>
    );
  });
};
export const Orders = (Array) => {
  Array.map((ele) => {
    return (
      <TableDataRow key={nanoid(6)}>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.id}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.tableNumber}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.orderName}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.category}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.quantity}
        </TableData>
      </TableDataRow>
    );
  });
};
export const Employees = (Array) => {
  Array.map((ele) => {
    return (
      <TableDataRow key={nanoid(6)}>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.id}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.fullName}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.brithday}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.phoneNumber}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.sallery}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.carrir}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.joinDate}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.endDate}
        </TableData>
        <TableData key={nanoid(4)} Width={Array.length}>
          {ele.sanctions}
        </TableData>
      </TableDataRow>
    );
  });
};
