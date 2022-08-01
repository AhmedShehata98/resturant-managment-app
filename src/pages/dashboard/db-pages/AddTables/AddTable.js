import React, { useState, useEffect } from "react";
import SectionWrapper from "../../SC/SectionWrapper";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

// components
import Table from "../../SC/Table";
import TableRow from "../../SC/TableRow";
import TableHeadding from "../../SC/TableHead";
import TableData from "../../SC/TableData";
import TableHeader from "../../SC/TableHeader";
import TableBody from "../../SC/TableBody";
import Statistic from "../../SC/Statistic";
import StatisticsWrapper from "../../SC/StatisticsWrapper";

//redux slices
import {
  ADD_NEW_TABLE_ACTION,
  DELETE_EXISTING_TABLE_ACTION,
  EDIT_TABLE_ACTION,
} from "../../../../Redux/Slice/TablesSlice";

//3rd party components
import {
  Card,
  CardContent,
  FormGroup,
  Grid,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

// icons
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import TableRestaurantOutlinedIcon from "@mui/icons-material/TableRestaurantOutlined";
import DoNotDisturbOnTotalSilenceOutlinedIcon from "@mui/icons-material/DoNotDisturbOnTotalSilenceOutlined";

function AddTable() {
  const {
    tables: { tablesData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [tablesBookedup, setTablesBookedup] = useState(0);
  const [formData, setFormData] = useState({
    tableNumber: "",
    capacity: 0,
    tableType: "Non-Smooking",
    availability: true,
  });

  const [editMode, setEditMode] = useState({
    mode: false,
    id: 0,
  });

  useEffect(() => {
    calcBookedUpTables();
  }, []);

  function calcBookedUpTables() {
    let unavailableTables = 0;
    for (let i = 0; i < tablesData.length; i++) {
      if (tablesData[i].availability === false) {
        unavailableTables += 1;
      }
      setTablesBookedup((prev) => (prev = unavailableTables));
    }
  }

  const handleResetAll = () => {
    setFormData({
      tableNumber: "",
      capacity: 0,
      tableType: "No Smooking",
      availability: true,
    });
  };
  const handleInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const tableHeadData = [
    "no.",
    "table number",
    "capacity",
    "tableType",
    "status",
    "delete",
    "edit",
  ];

  const resetFields = () => {
    setFormData({
      tableNumber: "",
      capacity: 0,
      tableType: "Non-Smooking",
      availability: true,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(ADD_NEW_TABLE_ACTION(JSON.stringify(formData)));
    handleResetAll();
  };

  const handleSetStyles = () => {
    if (mdDownMediaQuery.matches) {
      return { width: "100%", mb: 2, minHeight: 310 };
    } else {
      return { width: "60%", alignSelf: "flex-start", mb: 2 };
    }
  };

  //
  const mdDownMediaQuery = window.matchMedia("(max-width : 768px)");
  //

  const handleDeleteTable = (id) => {
    dispatch(DELETE_EXISTING_TABLE_ACTION(id));
  };

  const handleEditTable = ({
    id,
    tableNumber,
    capacity,
    tableType,
    availability,
  }) => {
    setEditMode({ mode: true, id });
    setFormData({
      tableNumber,
      capacity,
      tableType,
      availability,
    });
  };

  const sendChangesRequest = (id, data) => {
    dispatch(EDIT_TABLE_ACTION({ id, data: JSON.stringify(data) }));
    resetFields();
    setEditMode({
      id: 0,
      mode: false,
    });
  };

  return (
    <SectionWrapper>
      <StatisticsWrapper flexBox>
        <Card variant="elevation" sx={handleSetStyles()}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormGroup>
                  <TextField
                    size="small"
                    label="Table Number"
                    placeholder="Enter table number..."
                    id="tableNumber"
                    type={"text"}
                    variant={"filled"}
                    name="tableNumber"
                    value={formData.tableNumber}
                    onChange={(event) => handleInputChange(event)}
                    required
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormGroup>
                  <TextField
                    size="small"
                    label="Table capacity"
                    placeholder="Enter Table capacity count..."
                    id="capacity"
                    type={"text"}
                    variant={"filled"}
                    name="capacity"
                    value={formData.capacity}
                    onChange={(event) => handleInputChange(event)}
                    required
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel> Table Status </InputLabel>
                  <Select
                    size="small"
                    labelId="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={(event) => handleInputChange(event)}
                  >
                    <MenuItem value={true}> available</MenuItem>
                    <MenuItem value={false}> reserved</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel>table type</InputLabel>
                  <Select
                    labelId="tableType"
                    size="small"
                    name="tableType"
                    value={formData.tableType}
                    onChange={(event) => handleInputChange(event)}
                  >
                    <MenuItem value={"VIP"}>VIP</MenuItem>
                    <MenuItem value={"Smooking"}>Smooking</MenuItem>
                    <MenuItem value={"Non-Smooking"}>Non Smooking</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sx={12} md={3}>
                <FormControl sx={{ width: "100%" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: "100%" }}
                    color={editMode.mode === true ? "warning" : "primary"}
                    onClick={(e) => {
                      editMode.mode === true
                        ? sendChangesRequest(editMode.id, formData)
                        : handleSubmit(e);
                    }}
                  >
                    {editMode.mode === true ? "update" : "add table"}
                  </Button>
                </FormControl>
              </Grid>
              <Grid item sx={12} md={3}>
                <FormControl sx={{ width: "100%" }}>
                  <Button
                    type="reset"
                    variant="outlined"
                    sx={{ width: "100%" }}
                    onClick={(e) => handleResetAll(e)}
                  >
                    reset all
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Statistic
          style={{ flexBasis: "250px", height: "initial" }}
          IconElement={<TableRestaurantOutlinedIcon />}
          Title="total Tables count"
          Count={tablesData.length}
          Persent="50"
          ProgressValue="50%"
        />
        <Statistic
          className="active"
          style={{ flexBasis: "250px", height: "initial" }}
          IconElement={<DoNotDisturbOnTotalSilenceOutlinedIcon />}
          Title="Tables booked up"
          Count={tablesBookedup}
          Persent="80"
          ProgressValue="80%"
        />
      </StatisticsWrapper>
      <Table Title="tables view">
        <TableHeader>
          <TableRow>
            {tableHeadData.map((table) => {
              return <TableHeadding key={nanoid(3)}>{table}</TableHeadding>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tablesData.map((table) => {
            return (
              <TableRow
                key={nanoid(3)}
                className={table.availability === false && "not-available"}
              >
                <TableData key={nanoid(2)}>{table.id}</TableData>
                <TableData key={nanoid(2)}>{table.tableNumber}</TableData>
                <TableData key={nanoid(2)}>{table.capacity}</TableData>
                <TableData key={nanoid(2)}>{table.tableType}</TableData>
                <TableData key={nanoid(2)}>
                  {table.availability === true ? (
                    <b>avaliable</b>
                  ) : (
                    <b>Reserved</b>
                  )}
                </TableData>
                <TableData key={nanoid(2)}>
                  <Button
                    variant="text"
                    size="small"
                    onClick={() => handleDeleteTable(table.id)}
                  >
                    <DeleteOutlinedIcon color="error" fontSize="small" />
                  </Button>
                </TableData>
                <TableData key={nanoid(2)}>
                  <Button variant="text" size="small">
                    <EditOutlinedIcon
                      color="action"
                      fontSize="small"
                      onClick={() =>
                        handleEditTable({
                          id: table.id,
                          tableNumber: table.tableNumber,
                          capacity: table.capacity,
                          tableType: table.tableType,
                          availability: table.availability,
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
    </SectionWrapper>
  );
}

export default AddTable;
