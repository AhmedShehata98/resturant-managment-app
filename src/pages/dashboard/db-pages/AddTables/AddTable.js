import React, { useState, useEffect } from "react";
import SectionWrapper from "../../SC/SectionWrapper";
import { nanoid } from "nanoid";
// components
import Table from "../../SC/Table";
import TableData from "../../SC/TableData";
import TableDataRow from "../../SC/TableDataRow";
import Statistic from "../../SC/Statistic";
import StatisticsWrapper from "../../SC/StatisticsWrapper";

//redux slices
import {
  GET_TABLES_ACTION,
  ADD_NEW_TABLE_ACTION,
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
  const [TableState, setTableState] = useState("available");
  const [TableType, setTableType] = useState("VIP");

  const tableHeadItems = [
    "no",
    "table number",
    "table capacity",
    "table status",
    "table type",
    "delete",
    "edit",
  ];
  const tableDataView = [
    {
      id: "1",
      tableNumber: "2",
      tableCapacity: " 4 Individuals",
      tableStatus: "avaliable",
      tableType: "VIP",
    },
    {
      id: "2",
      tableNumber: "4",
      tableCapacity: " 2 Individuals",
      tableStatus: "avaliable",
      tableType: "smooking",
    },
    {
      id: "3",
      tableNumber: "2",
      tableCapacity: " 4 Individuals",
      tableStatus: "reserved",
      tableType: "no smooking",
    },
  ];
  //
  const mdDownMediaQuery = window.matchMedia("(max-width : 768px)");
  //
  const handleTableStateChange = (e) => {
    const elementValue = e.target.value;
    setTableState(elementValue);
  };

  const handleTableTypeChange = (e) => {
    const elementValue = e.target.value;
    setTableType(elementValue);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleResetAll = (e) => {
    e.target.reset();
  };

  const handleSetStyles = () => {
    if (mdDownMediaQuery.matches) {
      return { width: "100%", mb: 2, minHeight: 310 };
    } else {
      return { width: "60%", alignSelf: "flex-start", mb: 2 };
    }
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
                    id="tableCapacity"
                    type={"text"}
                    variant={"filled"}
                    required
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel> Table Status </InputLabel>
                  <Select
                    size="small"
                    labelId="tableStatus"
                    value={TableState}
                    onChange={(e) => handleTableStateChange(e)}
                  >
                    <MenuItem value={"available"}> available</MenuItem>
                    <MenuItem value={"reserved"}> reserved</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={2}>
                <FormControl sx={{ width: "100%" }}>
                  <InputLabel>table type</InputLabel>
                  <Select
                    labelId="tableType"
                    size="small"
                    value={TableType}
                    onChange={(e) => handleTableTypeChange(e)}
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
                    onClick={(e) => handleSubmit(e)}
                  >
                    add table
                  </Button>
                </FormControl>
              </Grid>
              <Grid item sx={12} md={3}>
                <FormControl sx={{ width: "100%" }}>
                  <Button
                    type="reset"
                    variant="contained"
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
          Count="182"
          Persent="50"
          ProgressValue="50%"
        />
        <Statistic
          className="active"
          style={{ flexBasis: "250px", height: "initial" }}
          IconElement={<DoNotDisturbOnTotalSilenceOutlinedIcon />}
          Title="Tables booked up"
          Count="172"
          Persent="80"
          ProgressValue="80%"
        />
      </StatisticsWrapper>
      <Table
        TableHeadName={tableHeadItems}
        Title="tables view"
        TableHeadLength={tableHeadItems.length}
      >
        {tableDataView.map((tableView) => {
          return (
            <TableDataRow key={nanoid(4)}>
              <TableData key={nanoid(4)} Width={tableHeadItems.length}>
                {tableView.id}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadItems.length}>
                {tableView.tableNumber}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadItems.length}>
                {tableView.tableCapacity}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadItems.length}>
                {tableView.tableStatus}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadItems.length}>
                {tableView.tableType}
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadItems.length}>
                <Button type="button" variant="text" size="small">
                  <DeleteOutlinedIcon fontSize="small" color="error" />
                </Button>
              </TableData>
              <TableData key={nanoid(4)} Width={tableHeadItems.length}>
                <Button type="button" variant="text" size="small">
                  <EditOutlinedIcon fontSize="small" color="success" />
                </Button>
              </TableData>
            </TableDataRow>
          );
        })}
      </Table>
    </SectionWrapper>
  );
}

export default AddTable;
