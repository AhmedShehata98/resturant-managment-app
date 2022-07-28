import styled from "@emotion/styled";
import React from "react";
import Form from "../../../SC/Form";
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
  const handelAdd = () => {};
  const handelClose = () => {
    props.setshowOrder(false);
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
                  name="order name"
                  placeholder="Order Name ..."
                  variant="outlined"
                  size="small"
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
                />
              </FormControl>
            </Grid>

            <Grid item xs={12} md={12} sx={{ zIndex: "100006" }}>
              <FormControl sx={{ width: "40%" }}>
                <label id="demo-simple-select-label">categories</label>
                <select value={"Drinks"} name="categories" label="categories">
                  <option value={10}>Drinks</option>
                  <option value={20}>Foods</option>
                  <option value={30}>Thirty</option>
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
