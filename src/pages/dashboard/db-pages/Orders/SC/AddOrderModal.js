import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { EDIT_TABLE_ACTION } from "../../../../../Redux/Slice/TablesSlice";
import { GET_PRODUCTS_ACTION } from "../../../../../Redux/Slice/ProductsSlice";
import { ADD_ORDERS_ACTION } from "../../../../../Redux/Slice/OrdersSlice";

// components
import Form from "../../../SC/Form";

// 3rd party components
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

//icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
const SearchInListContainer = styled.div`
  position: relative;
  display : flex ; 
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap ; 0.3rem;
`;

const SearchInListInput = styled.input`
  position: relative;
  z-index: 1000;
  width: 95%;
  padding: 0.3rem;
  border: 1px solid var(--bs-gray-400);
  border-radius: 3px;
`;
const SearchInListSelect = styled.select`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  padding: 0.3rem;
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
  const [InputField, setInputField] = useState({
    searchField: "",
    quantity: "",
  });
  const [searchResult, setSearchResult] = useState(productsData);
  const searchWords = useRef("");
  const timeOutRef = useRef(0);
  const selectElementRef = useRef(null);

  const debounceSearch = (searchparams) => {
    const filter = productsData.filter((product) => {
      return product.productName
        .toLocaleLowerCase()
        .startsWith(searchparams.toLocaleLowerCase());
    });

    setSearchResult(filter);
  };
  function handleChangeInput(e, searchOrder) {
    const key = e.target.name;
    const value = e.target.value;
    //
    if (searchOrder === true) {
      // search
      setInputField({ ...InputField, [key]: value });
      const TimeoutVar = setTimeout(() => {
        searchWords.current = value;
      }, 500);
      timeOutRef.current = TimeoutVar;
    } else {
      // get infos
      setInputField({ ...InputField, [key]: value });
    }
  }

  function handleSelectOrder(e) {
    const value = JSON.parse(e.target.value);
    setFormData({
      orderName: value.productName,
      orderPrice: value.orderPrice,
      category: value.categories,
      size: value.size,
      quantity: InputField.quantity,
    });
  }

  useEffect(() => {
    dispatch(GET_PRODUCTS_ACTION());
  }, [dispatch]);

  useEffect(() => {
    debounceSearch(searchWords.current);

    return () => {
      clearTimeout(timeOutRef);
    };
  }, [searchWords.current]);

  const handelClose = () => {
    props.setOrderModal({ ...props.OrderModal, showOrder: false });
  };

  return (
    <AddOrderModalBackdrop>
      <MddalWrapper>
        <Form FullWidth>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <SearchInListContainer>
                <SearchInListInput
                  type="search"
                  placeholder="order search name ..."
                  name="searchField"
                  value={InputField.searchField}
                  onChange={(e) => handleChangeInput(e, true)}
                />
                <SearchInListSelect
                  ref={selectElementRef}
                  name="selectedOrder"
                  onChange={(e) => handleSelectOrder(e)}
                >
                  {Array.isArray(searchResult) &&
                    searchResult.map((res) => {
                      return (
                        <option key={nanoid(8)} value={JSON.stringify(res)}>
                          {res.productName}
                        </option>
                      );
                    })}
                </SearchInListSelect>
              </SearchInListContainer>
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
                  onChange={(e) => handleChangeInput(e, false)}
                />
              </FormControl>
            </Grid>
            <Grid display={"flex"} alignItems="center" item xs={12} md={3}>
              <Button sx={{ width: "100%" }} variant="contained" size="small">
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
