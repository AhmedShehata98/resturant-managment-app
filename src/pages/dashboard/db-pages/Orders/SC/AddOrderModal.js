import React, { useState } from "react";
import styled from "@emotion/styled";

// Redux
import { useDispatch } from "react-redux";
import { ADD_EXTRA_KEY } from "../../../../../Redux/Slice/TablesSlice";

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

const AddOrderModal = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    orderName: "",
    quantity: "",
    category: "Drinks",
  });

  const handleChangeFields = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    //
    setFormData({ ...formData, [key]: value });
  };
  console.log(props.OrderModal.oldOrders);
  const handelAdd = () => {
    const ID = props.OrderModal.tableSelectedID;
    const oldOrder = props.OrderModal.oldOrders;
    const tableNumber = props.OrderModal.TableNumber;

    if (oldOrder === {} || oldOrder === null) {
      return dispatch(
        ADD_EXTRA_KEY({
          id: ID,
          data: {
            orders: [{ ...formData, tableOrderdNumber: props.tableNumber }],
          },
        })
      );
    } else {
      return dispatch(
        ADD_EXTRA_KEY({
          id: ID,
          data: {
            orders: [{ ...formData, tableOrderdNumber: tableNumber }],
          },
        })
      );
    }
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
                  onChange={(e) => handleChangeFields(e)}
                />
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
                  onChange={(e) => handleChangeFields(e)}
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12} sx={{ zIndex: "100006" }}>
              <FormControl sx={{ width: "40%" }}>
                <label id="demo-simple-select-label">categories</label>
                <select
                  value={"Drinks"}
                  name="category"
                  label="categories"
                  onChange={(e) => handleChangeFields(e)}
                >
                  <option value={"Drinks"}>Drinks</option>
                  <option value={"Foods"}>Foods</option>
                  <option value={"Thirty"}>Thirty</option>
                  <option value={"Fourty"}>Fourty</option>
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
