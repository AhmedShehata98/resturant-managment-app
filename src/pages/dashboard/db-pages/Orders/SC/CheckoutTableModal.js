import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ClearTwoToneIcon from "@mui/icons-material/ClearTwoTone";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import { Button } from "@mui/material";
import { nanoid } from "nanoid";

// redux
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_DATA } from "../../../../../Redux/Slice/TaxSlice";

const ReportWrapperBackdrop = styled.main`
  position: absolute;
  z-index: 10005;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333a6;
`;
const RepoortWrapper = styled.section`
  position: relative;
  z-index: 5;
  width: 30%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bs-gray-100);
  border-radius: 0.3rem;

  @media (max-width: 992px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 576px) {
    width: 75%;
  }
`;
const ReportHeader = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--bs-gray-400);
  padding: 0.5rem;

  > button {
    width: 40px;
    height: 35px;
    display: grid;
    place-items: center;
    border: none;
    background-color: var(--bs-gray-400);
    border-radius: 0.3rem;

    &:hover {
      background-color: var(--bs-gray-300);
    }
  }
  > :nth-child(2) {
    margin-inline: auto;
  }
`;

const ReportContent = styled.div`
  padding: 0.5rem;
  width: 100%;
  height: 100%;
`;
const OrdersList = styled.ul`
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  list-style: none;
  padding-inline: 1rem;
  border-bottom: 1px solid var(--bs-gray-400);

  > :first-child {
    font-weight: 500;
    margin-bottom: 1rem;
    margin-inline-start: -0.5rem;
    opacity: 0.8;
  }
`;
const OrdersItems = styled.li`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
  margin-block-end: 0.5rem;

  > :first-child {
    border: 1px solid var(--bs-gray-400);
    padding: 0.5rem;
    color: var(--bs-primary);

    > :first-child {
      color: var(--bs-primary);
    }
  }

  > :nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    > :first-child {
      text-transform: capitalize;
      font-weight: 500;
      font-size: 0.8rem;
    }
  }
  > :nth-child(3) {
    display: flex;
    flex-direction: column;
    color: var(--bs-primary);
  }
`;

const Price = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--bs-gray-400);
  padding-inline: 1rem;
  list-style: none;
`;
const ListPrices = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;

  > :first-child,
  > :nth-child(2) {
    text-transform: uppercase;
    opacity: 0.7;
  }
`;
const Total = styled.span`
  width: 100%;
  display : flex ;
  justify-content: space-between ;
  align-items: center;
  text-transform: uppercase;
  padding-inline : 1rem;

  > :last-child{
    color(--bs-primary);
  }
`;

const ReportFooter = styled.footer`
  width: 100%;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: auto;
  padding-inline: 0.5rem;
  margin-block-end: 1rem;
`;
//
//
//
const CheckoutTableModal = (props) => {
  const dispatch = useDispatch();
  const {
    tax: { taxData, service, vat, isLoading, isError },
  } = useSelector((state) => state);
  console.log(taxData, service, vat);
  // const vatTax = useRef(taxData[0].taxAmount);
  // const servicesTax = useRef(taxData[1].taxAmount);
  const [subTotalAmount, setSubTotalAmount] = useState(0);
  const [TotalAmount, setTotalAmount] = useState(0);
  const orderList = useRef(props.OrderModal.tableInformation.orders);
  //
  useEffect(() => {
    document.body.style.height = "100vh";
    //
    return () => {
      document.body.style.height = "initial";
    };
  }, []);
  useEffect(() => {
    dispatch(GET_ALL_DATA());
  }, []);
  useEffect(() => {
    //chiking if orders and if there are orders then  loop in
    // all orders array list and calculating total sub total amount
    if (orderList.current && Array.isArray(orderList.current)) {
      const calculatedAmount = orderList.current.reduce((prev, next) => {
        return (
          prev.orderPrice * prev.quantity + next.orderPrice * next.quantity
        );
      });
      // set sub tutal amount for orders
      setSubTotalAmount(calculatedAmount);
    }
  }, []);
  useEffect(() => {
    // set total amount for all orders with tax
    if (isLoading === false && isError === false) {
      setTotalAmount(subTotalAmount + service + vat);
    }
  }, [isLoading, isError]);

  const handleCloseModal = () => {
    props.setCheckoutModal({ ...props.CheckoutModal, showCheckout: false });
  };

  const ItrableOrders =
    orderList.current &&
    Array.isArray(orderList.current) &&
    props.OrderModal.tableInformation.orders.map((order) => {
      return (
        <OrdersItems key={nanoid(6)}>
          <span key={nanoid(4)}>
            <WidgetsOutlinedIcon fontSize="medium" color="action" />
          </span>
          <div key={nanoid(4)}>
            <span>{order.orderName}</span>
            <small>{order.quantity}</small>
          </div>
          <b>{order.orderPrice * order.quantity} L.E</b>
        </OrdersItems>
      );
    });

  return (
    <ReportWrapperBackdrop>
      <RepoortWrapper>
        <ReportHeader>
          <button type="button" onClick={() => handleCloseModal()}>
            <ClearTwoToneIcon color="action" />
          </button>
          <h5>{props.Title}</h5>
        </ReportHeader>
        <ReportContent>
          <OrdersList>
            <strong>Orders List </strong>
            {ItrableOrders}
          </OrdersList>
          <Price>
            <ListPrices>
              <small>subtotal</small>
              <b>{subTotalAmount} l.E</b>
            </ListPrices>
            <ListPrices>
              <small>VAT</small>
              <b>{vat} l.E</b>
            </ListPrices>
            <ListPrices>
              <small>Services</small>
              <b>{service} l.E</b>
            </ListPrices>
          </Price>
          <Total>
            <b>Total</b>
            <b>{TotalAmount} L.E</b>
          </Total>
        </ReportContent>
        <ReportFooter>
          <Button variant={"contained"} size={"small"}>
            checkout
          </Button>
          <Button
            variant={"outlined"}
            size={"small"}
            onClick={() => handleCloseModal()}
          >
            cancel
          </Button>
        </ReportFooter>
      </RepoortWrapper>
    </ReportWrapperBackdrop>
  );
};

export default CheckoutTableModal;
