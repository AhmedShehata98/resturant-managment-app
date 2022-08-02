import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

// 3rd party component
import {
  Grid,
  TextField,
  FormControl,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";

// component
import SectionWrapper from "../../SC/SectionWrapper";
import Statistic from "../../SC/Statistic";
import StatisticsWrapper from "../../SC/StatisticsWrapper";
import Form from "../../SC/Form";
import Table from "../../SC/Table";
import TableRow from "../../SC/TableRow";
import TableHeadding from "../../SC/TableHead";
import TableData from "../../SC/TableData";
import TableHeader from "../../SC/TableHeader";
import TableBody from "../../SC/TableBody";

// icons
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FoodBankIcon from "@mui/icons-material/FoodBank";

//redux
import {
  ADD_PRODUCTS_ACTION,
  DELETE_EXISTING_PRODUCT_ACTION,
  EDIT_PRODUCT_ACTION,
  GET_PRODUCTS_ACTION,
} from "../../../../Redux/Slice/ProductsSlice";

function AddProduct() {
  const {
    products: { productsData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    categories: "Foods",
    size: "Small",
  });
  const [editMode, setEditMode] = useState({
    mode: false,
    id: 0,
  });
  const productTableHeadsArr = [
    "no.",
    "product name",
    "product price",
    "category",
    "size",
    "edit",
    "delete",
  ];

  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const resetInputs = () => {
    setFormData({
      productName: "",
      productPrice: 0,
      categories: "Foods",
      size: "Small",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      productName: formData.productName,
      productPrice: formData.productPrice,
      categories: formData.categories,
      size: formData.size,
    };
    dispatch(ADD_PRODUCTS_ACTION(JSON.stringify(payload)));
    resetInputs();
  };

  const handleDeleteProduct = (id) => {
    dispatch(DELETE_EXISTING_PRODUCT_ACTION(id));
  };

  const handleEditProduct = ({
    id,
    productName,
    productPrice,
    categories,
    size,
  }) => {
    // set form fields
    setFormData({
      id,
      productName,
      productPrice,
      categories,
      size,
    });

    // toggle mode to edit product
    setEditMode({ id, mode: true });
  };
  function handleSendProductRequest(id, data) {
    dispatch(EDIT_PRODUCT_ACTION({ id, data: JSON.stringify(data) }));
    setEditMode({ id: 0, mode: false });
    resetInputs();
  }

  return (
    <SectionWrapper
      Type="ProductSection"
      Direction="column"
      Background="var(--bs-gray-200)"
    >
      <Grid container spacing={2}>
        <Grid item display={"flex"} direction={"row"} xs={12}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    size="small"
                    variant="filled"
                    type="text"
                    placeholder="Product Name ..."
                    name="productName"
                    value={formData.productName}
                    onChange={(e) => handleInputChange(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl sx={{ width: "100%" }}>
                  <TextField
                    size="small"
                    variant="filled"
                    type="numbeer"
                    placeholder="100 L.E"
                    name="productPrice"
                    value={formData.productPrice}
                    onChange={(e) => handleInputChange(e)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel>category</InputLabel>
                  <Select
                    size="small"
                    name="categories"
                    label="category"
                    labelId="category"
                    id="category"
                    value={formData.categories}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <MenuItem value="Drinks">Drinks</MenuItem>
                    <MenuItem value="Foods">Foods </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel>sizes</InputLabel>
                  <Select
                    size="small"
                    name="size"
                    label="sizes"
                    labelId="sizes"
                    id="sizes"
                    value={formData.size}
                    onChange={(e) => handleInputChange(e)}
                  >
                    <MenuItem value="Small">Small</MenuItem>
                    <MenuItem value="Medium">Medium </MenuItem>
                    <MenuItem value="Large">Large </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button
                  sx={{ width: "100%" }}
                  type="button"
                  variant={"contained"}
                  color={editMode.mode === true ? "warning" : "primary"}
                  onClick={(e) => {
                    editMode.mode === false
                      ? onSubmit(e)
                      : handleSendProductRequest(editMode.id, formData);
                  }}
                >
                  {editMode.mode === true ? "update" : "add product"}
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button
                  sx={{ width: "100%" }}
                  variant="outlined"
                  type="reset"
                  onClick={() => resetInputs()}
                >
                  reset
                </Button>
              </Grid>
            </Grid>
          </Form>
          <StatisticsWrapper gridSystem Width={"45%"}>
            <Statistic
              Title="total products"
              Count={productsData.length}
              IconElement={<FoodBankIcon />}
              Persent="90"
              ProgressValue="90%"
            />
            <Statistic
              Title="Total sold out"
              Count="1100"
              IconElement={<ProductionQuantityLimitsIcon />}
              Persent="90"
              ProgressValue="90%"
            />
          </StatisticsWrapper>
        </Grid>
        <Grid item display={"flex"} direction={"row"} xs={12}>
          <Table Title="products view" FetchData={GET_PRODUCTS_ACTION()}>
            <TableHeader>
              <TableRow>
                {productTableHeadsArr.map((product) => {
                  return (
                    <TableHeadding key={nanoid(3)}>{product}</TableHeadding>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {productsData.map((product) => {
                return (
                  <TableRow key={nanoid(3)}>
                    <TableData key={nanoid(2)}>{product.id}</TableData>
                    <TableData key={nanoid(2)}>{product.productName}</TableData>
                    <TableData key={nanoid(2)}>
                      {product.productPrice}
                    </TableData>
                    <TableData key={nanoid(2)}>{product.categories}</TableData>
                    <TableData key={nanoid(2)}>{product.size}</TableData>
                    <TableData key={nanoid(2)}>
                      <Button variant="text" size="small">
                        <DeleteOutlinedIcon
                          color="error"
                          fontSize="small"
                          onClick={() => handleDeleteProduct(product.id)}
                        />
                      </Button>
                    </TableData>
                    <TableData key={nanoid(2)}>
                      <Button variant="text" size="small">
                        <EditOutlinedIcon
                          color="action"
                          fontSize="small"
                          onClick={() =>
                            handleEditProduct({
                              id: product.id,
                              productName: product.productName,
                              productPrice: product.productPrice,
                              categories: product.categories,
                              size: product.size,
                            })
                          }
                        />
                      </Button>
                    </TableData>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default AddProduct;
