import React, { useState } from "react";
import { nanoid } from "nanoid";
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
import TableDataRow from "../../SC/TableDataRow";
import TableData from "../../SC/TableData";

// icons
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FoodBankIcon from "@mui/icons-material/FoodBank";

function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    category: "Foods",
    sizes: "Small",
  });
  const productTableHeadsArr = [
    "no",
    "product price",
    "category",
    "sizes",
    "edit",
    "delete",
  ];
  const productsListArr = [
    {
      id: 1,
      productName: "product 1",
      productPrice: "100",
      category: "Fodds",
      sizes: "Small",
    },
    {
      id: 1,
      productName: "product 2",
      productPrice: "120",
      category: "Fodds",
      sizes: "Small",
    },
    {
      id: 1,
      productName: "product 1",
      productPrice: "180",
      category: "Drinks",
      sizes: "Small",
    },
  ];

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
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={3}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel>category</InputLabel>
                  <Select
                    size="small"
                    name="category"
                    label="category"
                    labelId="category"
                    id="category"
                    value={formData.category}
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
                    name="sizes"
                    label="sizes"
                    labelId="sizes"
                    id="sizes"
                    value={formData.sizes}
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
                  variant="contained"
                  type="button"
                >
                  add product
                </Button>
              </Grid>
              <Grid item xs={12} md={2}>
                <Button sx={{ width: "100%" }} variant="contained" type="reset">
                  reset
                </Button>
              </Grid>
            </Grid>
          </Form>
          <StatisticsWrapper gridSystem Width={"45%"}>
            <Statistic
              Title="total products"
              Count="1200"
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
          <Table
            TableHeadName={productTableHeadsArr}
            TableHeadLength={productTableHeadsArr.length}
            Title="products List"
          >
            {productsListArr.map((product) => {
              return (
                <TableDataRow key={nanoid(6)}>
                  <TableData key={nanoid(4)} Width={productsListArr.length}>
                    {product.id}
                  </TableData>
                  <TableData key={nanoid(4)} Width={productsListArr.length}>
                    {productsListArr.productName}
                  </TableData>
                  <TableData key={nanoid(4)} Width={productsListArr.length}>
                    {product.productPrice}
                  </TableData>
                  <TableData key={nanoid(4)} Width={productsListArr.length}>
                    {product.category}
                  </TableData>
                  <TableData key={nanoid(4)} Width={productsListArr.length}>
                    {product.sizes}
                  </TableData>
                  <TableData key={nanoid(4)} Width={productsListArr.length}>
                    <Button variant="text">
                      <DeleteOutlinedIcon color="error" fontSize="small" />{" "}
                    </Button>
                  </TableData>
                  <TableData key={nanoid(4)} Width={productsListArr.length}>
                    <Button variant="text">
                      <EditOutlinedIcon color="success" fontSize="small" />{" "}
                    </Button>
                  </TableData>
                </TableDataRow>
              );
            })}
          </Table>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default AddProduct;
