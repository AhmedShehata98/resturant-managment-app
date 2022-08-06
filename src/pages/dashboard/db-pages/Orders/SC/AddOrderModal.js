import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_EXTRA_KEY,
  EDIT_TABLE_ACTION,
} from "../../../../../Redux/Slice/TablesSlice";
import { GET_PRODUCTS_ACTION } from "../../../../../Redux/Slice/ProductsSlice";
import { ADD_ORDERS_ACTION } from "../../../../../Redux/Slice/OrdersSlice";

// components
import Form from "../../../SC/Form";

// 3rd party components
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const AddOrderModalBackdrop = styled.main`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10005;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #222222a3;
`;

const MddalWrapper = styled.section`
  position: relative;
  z-index: 10006;
  width: 40%;
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bs-gray-100);

  @media (max-width: 992px) {
    width: 100%;
  }
`;
const Suggestions = styled.div`
  width: 100%;
  min-height: 70px;
  position: absolute;
  z-index: 110000;
  top: 90%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--bs-gray-200);
  border: 1px solid var(--bs-gray-500);
  border-radius: 0.3rem;
  box-shadow: 2px 2px 5px #58545475;

  >: first-child {
    width: 100%;
    padding-block: 0.2rem;
    border-bottom: 1px solid var(--bs-gray-600);

    > :first-child {
      opacity: 0.7;
      font-weight: 600;
      font-size: 0.8rem;
      margin: 0;
      text-align: center;
    }
  }
`;

const SearchList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0.5rem;

  > li:first-child {
    margin-top: 0.5rem;
  }

  > li {
    width: 100%;
    display: flex;
    gap: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border: 1px solid var(--bs-gray-400);
    background-color: var(--bs-gray-100);

    >: first-child {
      display: flex;
      flex-direction: column;
      text-transform: capitalize;
      font-size: 0.8rem;
    }
    > :nth-child(2) {
      font-weight: bold;
      text-transform: uppercase;
      opacity: 0.7;
    }
  }
`;
//
//
//

const AddOrderModal = (props) => {
  const dispatch = useDispatch();
  const {
    products: { productsData },
  } = useSelector((state) => state);
  const [formData, setFormData] = useState({
    orderName: "",
    orderPrice: "",
    quantity: "",
    category: "Drinks",
    size: "Select Order Size",
  });
  const [searchResultArray, setSearchResultArray] = useState([]);
  const [searchWords, setSearchWords] = useState("");
  const ordersList = useRef([]);

  useEffect(() => {
    dispatch(GET_PRODUCTS_ACTION());
  }, [dispatch]);

  useEffect(() => {
    const searchFilter = formData.orderName.toLocaleLowerCase();
    if (searchWords === "") {
      setSearchResultArray([]);
    } else {
      const filterData = productsData.findLast((product) =>
        product.productName.toLocaleLowerCase().startsWith(searchFilter)
      );
      if (filterData) {
        setSearchResultArray([filterData]);
      }
    }
  }, [searchWords]);

  const handleChangeFields = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    setFormData({ ...formData, [key]: value });
    const TimeoutRef = setTimeout(() => {
      setSearchWords(value);
    }, 700);
    return () => {
      clearTimeout(TimeoutRef);
    };
  };
  const handleSeletOrder = () => {
    const id = props.OrderModal.tableSelectedID;
    const tableNumber = props.OrderModal.TableNumber;

    setFormData({
      ...formData,
      orderName: searchResultArray[0].productName,
      orderPrice: searchResultArray[0].productPrice,
      category: searchResultArray[0].categories,
      tableNumber,
      tableId: id,
    });
    setSearchResultArray([]);
    ordersList.current.push(formData);
  };
  const handelAdd = () => {
    const id = props.OrderModal.tableSelectedID;
    const tableNumber = props.OrderModal.tableNumber;

    const requestData = {
      availability: false,
      orders: ordersList.current,
    };
    dispatch(
      EDIT_TABLE_ACTION({
        id,
        data: JSON.stringify(requestData),
      })
    );
    dispatch(ADD_ORDERS_ACTION({ ...formData, tableNumber }));
  };
  const handelClose = () => {
    props.setOrderModal({ ...props.OrderModal, showOrder: false });
  };
  return (
    <AddOrderModalBackdrop>
      <MddalWrapper>
        <Form FullWidth>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  label="order name"
                  type={"text"}
                  name="orderName"
                  placeholder="Order Name ..."
                  variant="outlined"
                  size="small"
                  value={formData.orderName}
                  onChange={(event) => handleChangeFields(event)}
                />
                {searchResultArray.length >= 1 && (
                  <Suggestions>
                    <span>
                      <p>order available here is :</p>
                    </span>
                    <SearchList>
                      {searchResultArray.length >= 1 &&
                        searchResultArray.map((suggest) => {
                          return (
                            <li
                              key={nanoid(6)}
                              onClick={() => handleSeletOrder()}
                            >
                              <div key={nanoid(4)}>
                                <b> {suggest.productName}</b>
                                <small key={nanoid(4)}>
                                  {suggest.categories}
                                </small>
                              </div>
                              <span key={nanoid(4)}>
                                {suggest.productPrice} L.E
                              </span>
                            </li>
                          );
                        })}
                    </SearchList>
                  </Suggestions>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} md={12}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  sx={{ zIndex: 100006 }}
                  label="quantity"
                  type={"text"}
                  name="quantity"
                  placeholder="quantity ..."
                  variant="outlined"
                  size="small"
                  value={formData.quantity}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    })
                  }
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12} sx={{ zIndex: "100006" }}>
              <FormControl sx={{ width: "40%" }}>
                <label id="demo-simple-select-label">size</label>
                <select
                  name="size"
                  label="size"
                  value={formData.size}
                  onChange={(event) => {
                    console.log(event.target.name);
                    console.log(event.target.value);
                    setFormData({
                      ...formData,
                      [event.target.name]: event.target.value,
                    });
                  }}
                >
                  <option value={"Select Order Size"}>Select Order Size</option>
                  <option value={"Small"}>Small</option>
                  <option value={"Medium"}>Medium</option>
                  <option value={"large"}>large</option>
                </select>
              </FormControl>
            </Grid>
            <Grid display={"flex"} alignItems="center" item xs={12} md={3}>
              <Button
                sx={{ width: "100%" }}
                variant="contained"
                size="small"
                onClick={() => handelAdd()}
              >
                add order
              </Button>
            </Grid>
            <Grid display={"flex"} alignItems="center" item xs={12} md={3}>
              <Button
                variant="outlined"
                size="small"
                sx={{ width: "100%" }}
                onClick={() => handelClose()}
              >
                close
              </Button>
            </Grid>
          </Grid>
        </Form>
      </MddalWrapper>
    </AddOrderModalBackdrop>
  );
};
export default AddOrderModal;
