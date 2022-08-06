import React from "react";
import { nanoid } from "nanoid";

// icons
import TableRestaurantTwoToneIcon from "@mui/icons-material/TableRestaurantTwoTone";
import LabelIcon from "@mui/icons-material/Label";
import ChairIcon from "@mui/icons-material/Chair";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// 3rd party components
import Chip from "@mui/material/Chip";
import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledTableCard = styled.div`
  position: relative;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--bs-gray-400);
  background-color: var(--bs-gray-100);
  border-radius: 0.3rem;

  &.not-available {
    background-color: var(--bs-orange);
    color: var(--bs-text);
    opacity: 0.6;
    pointer-events: no-drop;

    > * {
      > * {
        color: var(--bs-black);
      }
    }
  }
`;

const TableIcon = styled.span`
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  padding: 1rem;

  > svg {
    font-size: 5rem !important;
  }
`;

const TableInformation = styled.span`
  display: flex;
  gap : 0.5rem ;
  width: 100%;
  padding 0.5rem;

`;

const Actions = styled.span`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--bs-gray-400);
  padding: 0.5rem 0;
`;

function TableCard(props) {
  const handleShowOrderModal = () => {
    props.setOrderModal({
      showOrder: true,
      oldOrders: props.Orders.length === 0 ? null : props.Orders,
      TableNumber: props.TableNumber,
      tableSelectedID: props.id,
    });
  };

  const handleShowCheckout = () => {
    props.setCheckoutModal({
      showCheckout: true,
      ordersList: props.Orders || [],
      tableNumber: props.TableNumber,
      tableSelectedID: props.id,
    });
  };

  return (
    <StyledTableCard {...props}>
      <TableIcon key={nanoid(8)}>
        <TableRestaurantTwoToneIcon fontSize="large" color="action" />
      </TableIcon>
      <TableInformation key={nanoid(8)}>
        <Chip
          key={nanoid(6)}
          label={props.TableNumber}
          variant="filled"
          icon={<LabelIcon />}
        />
        <Chip
          key={nanoid(6)}
          label={props.Capacity}
          variant="outlined"
          icon={<ChairIcon />}
        />
        <Chip
          key={nanoid(6)}
          label={props.Orders.length}
          variant="outlined"
          icon={<ShoppingCartIcon />}
        />
      </TableInformation>
      <Actions key={nanoid(8)}>
        <Button
          type="button"
          name="add-order"
          variant="contained"
          size="small"
          onClick={() => handleShowOrderModal()}
        >
          <small>add order</small>
        </Button>
        <Button
          type="button"
          name="checkout"
          variant="outlined"
          size="small"
          onClick={() => handleShowCheckout()}
        >
          <small>checkout</small>
        </Button>
      </Actions>
    </StyledTableCard>
  );
}

export default TableCard;
