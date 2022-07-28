import React, { useDeferredValue, useEffect, useState } from "react";
import SectionWrapper from "../../SC/SectionWrapper";
import { nanoid } from "nanoid";
import { MediaQueryMatch, HeadNameArr, emploeesListArr } from "./logic";

// components
import Statistic from "../../SC/Statistic";
import StatisticsWrapper from "../../SC/StatisticsWrapper";
import Table from "../../SC/Table";
import TableDataRow from "../../SC/TableDataRow";
import TableData from "../../SC/TableData";
import Form from "../../SC/Form";

// 3rd party components
import Card from "@mui/material/Card";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

//icons
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const AddEmployes = () => {
  const [formData, setFormData] = useState({
    "full-name": "",
    "Work-end-date": "2022-01-01",
    "phone-number": "",
    brithday: "2020-01-01",
    carrer: "Barista",
    JoinDate: "2022-01-01",
    Sanctions: "",
    salery: "",
  });

  const handleGetInputValue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    //
    setFormData({ ...formData, [key]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("full-name", formData["full-name"]);
    fd.append("Work-end-date", formData["Work-end-date"]);
    fd.append("phone-number", formData["phone-number"]);
    fd.append("brithday", formData["brithday"]);
    fd.append("carrer", formData["carrer"]);
    fd.append("JoinDate", formData["JoinDate"]);
    fd.append("Sanctions", formData["Sanctions"]);
    fd.append("salery", formData["salery"]);
  };

  const mappedEmploeesListArr = emploeesListArr.map((employee) => {
    return (
      <TableDataRow key={nanoid(6)}>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee.id}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee["full-Name"]}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee["join-date"]}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee["end-date"]}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee["phone-number"]}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee.carrer}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee.salery}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee.brithday}
        </TableData>
        <TableData key={nanoid(4)} Width={HeadNameArr.length}>
          {employee.sanctions}
        </TableData>
        <TableData key={nanoid(4)} width={HeadNameArr.length}>
          <Button variant="text" size="small">
            <DeleteOutlinedIcon fontSize="small" color="error" />
          </Button>
        </TableData>
        <TableData key={nanoid(4)} width={HeadNameArr.length}>
          <Button variant="text" size="small">
            <EditOutlinedIcon fontSize="small" color="success" />
          </Button>
        </TableData>
      </TableDataRow>
    );
  });

  return (
    <SectionWrapper>
      <StatisticsWrapper flexBox>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <FormControl
                sx={{
                  width: "100%",
                }}
              >
                <TextField
                  type="text"
                  name="full-name"
                  id="fullName"
                  placeholder="Employee Full Name .."
                  variant="filled"
                  value={formData["full-name"]}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  label="brithday"
                  name="brithday"
                  type={"date"}
                  value={formData["brithday"]}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  label="phone number"
                  name="phone-number"
                  type={"number"}
                  placeholder="+201000000000"
                  value={formData["phone-number"]}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel> carrer</InputLabel>
                <Select
                  label="carrer"
                  name="carrer"
                  id="employeeCarrer"
                  value={formData["carrer"]}
                  onChange={(e) => handleGetInputValue(e)}
                >
                  <MenuItem value="GeneralManager">General Manager</MenuItem>
                  <MenuItem value="Assistant-Manager">
                    Assistant Manager
                  </MenuItem>
                  <MenuItem value="Executive-Chef">Executive Chef</MenuItem>
                  <MenuItem value="Sous-Chef">Sous Chef</MenuItem>
                  <MenuItem value="Kitchen-Manager">Kitchen Manager</MenuItem>
                  <MenuItem value="Fast-Food-Cook">Fast Food Cook</MenuItem>
                  <MenuItem value="Short-Order-Cook">Short Order Cook</MenuItem>
                  <MenuItem value="Prep cook">Prep cook</MenuItem>
                  <MenuItem value="Server">Server</MenuItem>
                  <MenuItem value="Runner">Runner</MenuItem>
                  <MenuItem value="Barista">Barista</MenuItem>
                  <MenuItem value="Dishwasher">Dishwasher</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  type={"number"}
                  placeholder="8000 L.E"
                  label="salery"
                  name="salery"
                  value={formData["salery"]}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  type={"date"}
                  label="Join Date"
                  name="JoinDate"
                  value={formData["JoinDate"]}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  type={"date"}
                  label="Work end date"
                  name="Work-end-date"
                  value={formData["Work-end-date"]}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  type={"text"}
                  placeholder="100 L.E"
                  label="Sanctions"
                  name="Sanctions"
                  value={formData["Sanctions"]}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                sx={{ width: "100%" }}
                type="button"
                variant="contained"
                onClick={(e) => onSubmit(e)}
              >
                add
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button sx={{ width: "100%" }} type="reset" variant="outlined">
                reset
              </Button>
            </Grid>
          </Grid>
        </Form>

        <Statistic
          Title="total emploees"
          Count="1200"
          Persent="95"
          ProgressValue="95%"
          IconElement={<PeopleAltOutlinedIcon />}
        />
        <Statistic
          Title="emploees Contract renewal"
          Count="1200"
          Persent="95"
          ProgressValue="95%"
          IconElement={<PeopleAltOutlinedIcon />}
        />
      </StatisticsWrapper>

      <Table
        Title="Employees List"
        TableHeadName={HeadNameArr}
        TableHeadLength={HeadNameArr.length}
      >
        {mappedEmploeesListArr}
      </Table>
    </SectionWrapper>
  );
};

export default AddEmployes;
