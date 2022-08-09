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
  const handleShowCheckoutModal = () => {
    props.setCheckoutModal({
      ...props.CheckoutModal,
      showCheckout: true,
      tableInformation: { ...props.TableInformation },
    });
  };

  const handleShowAddOrderModal = () => {
    props.setOrderModal({
      ...props.OrderModal,
      showOrder: true,
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
          label={props.TableInformation.tableNumber}
          variant="filled"
          icon={<LabelIcon />}
        />
        <Chip
          key={nanoid(6)}
          label={props.TableInformation.capacity}
          variant="outlined"
          icon={<ChairIcon />}
        />
        <Chip
          key={nanoid(6)}
          label={
            Array.isArray(props.TableInformation.orders)
              ? props.TableInformation.orders.length
              : 0
          }
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
          onClick={() => handleShowAddOrderModal()}
        >
          <small>add order</small>
        </Button>
        <Button
          type="button"
          name="checkout"
          variant="outlined"
          size="small"
          onClick={() => handleShowCheckoutModal()}
        >
          <small>checkout</small>
        </Button>
      </Actions>
    </StyledTableCard>
  );
}

export default TableCard;
