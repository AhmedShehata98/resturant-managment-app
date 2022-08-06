import React, { useDeferredValue, useEffect, useState } from "react";
import SectionWrapper from "../../SC/SectionWrapper";
import { nanoid } from "nanoid";
import { MediaQueryMatch, HeadNameArr, emploeesListArr } from "./logic";

// components
import Statistic from "../../SC/Statistic";
import StatisticsWrapper from "../../SC/StatisticsWrapper";
import Table from "../../SC/Table";
import TableRow from "../../SC/TableRow";
import TableHeadding from "../../SC/TableHead";
import TableData from "../../SC/TableData";
import TableHeader from "../../SC/TableHeader";
import TableBody from "../../SC/TableBody";
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

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_EMPLYEES_ACTION,
  DELETE_EXISTING_EMPLOYEE_ACTION,
  EDIT_EMPLOYEE_ACTION,
  GET_EMPLYEES_ACTION,
} from "../../../../Redux/Slice/EmloyeesSlice";

//icons
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const AddEmployes = () => {
  const {
    employees: { emplyeesData },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: "",
    endDate: "2022-01-01",
    phoneNumber: "",
    brithday: "2020-01-01",
    carier: "Barista",
    JoinDate: "2022-01-01",
    Sanctions: "",
    salary: "",
  });
  const [editMode, setEditMode] = useState({
    mode: false,
    id: 0,
  });

  const employeesHeadList = [
    // "no.",
    "full name",
    "brithday",
    "phone number",
    "salery",
    "carrir",
    "join date",
    "end date",
    "sanctions",
    "Delete",
    "Edit",
  ];

  const handleGetInputValue = (e) => {
    const value = e.target.value;
    const key = e.target.name;
    //
    setFormData({ ...formData, [key]: value });
  };

  const resetInputs = () => {
    setFormData({
      fullName: "",
      endDate: "2022-01-01",
      phoneNumber: "",
      brithday: "2020-01-01",
      carier: "Barista",
      JoinDate: "2022-01-01",
      Sanctions: 0,
      salary: "",
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // const fd = new FormData();
    // fd.append("full-name", formData["full-name"]);
    // fd.append("Work-end-date", formData["Work-end-date"]);
    // fd.append("phone-number", formData["phone-number"]);
    // fd.append("brithday", formData["brithday"]);
    // fd.append("carrer", formData["carrer"]);
    // fd.append("JoinDate", formData["JoinDate"]);
    // fd.append("Sanctions", formData["Sanctions"]);
    // fd.append("salery", formData["salery"]);
    const fd = {
      fullName: formData.fullName,
      endDate: formData.endDate,
      phoneNumber: formData.phoneNumber,
      brithday: formData.brithday,
      carier: formData.carier,
      JoinDate: formData.JoinDate,
      Sanctions: formData.Sanctions,
      salary: formData.salary,
    };

    dispatch(ADD_EMPLYEES_ACTION(JSON.stringify(fd)));
    resetInputs();
  };

  const handleDeleteEmployee = (id) => {
    dispatch(DELETE_EXISTING_EMPLOYEE_ACTION(id));
  };

  const handleEditEmployee = ({
    id,
    fullName,
    brithday,
    phoneNumber,
    carier,
    JoinDate,
    endDate,
    salary,
    Sanctions,
  }) => {
    setFormData({
      fullName: fullName,
      phoneNumber: phoneNumber,
      endDate: endDate,
      brithday,
      carier,
      JoinDate,
      salary,
      Sanctions,
    });

    setEditMode({
      mode: true,
      id,
    });
  };

  const handleSendChangesRequest = (id, data) => {
    dispatch(EDIT_EMPLOYEE_ACTION({ id, data: data }));
    setEditMode({ mode: false, id: 0 });
    resetInputs();
  };

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
                  name="fullName"
                  id="fullName"
                  placeholder="Employee Full Name .."
                  variant="filled"
                  value={formData.fullName}
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
                  value={formData.brithday}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <TextField
                  label="phone number"
                  name="phoneNumber"
                  type={"number"}
                  placeholder="+201000000000"
                  value={formData.phoneNumber}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel> carrer</InputLabel>
                <Select
                  label="carier"
                  name="carier"
                  id="employeeCarier"
                  value={formData.carier}
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
                  label="salary"
                  name="salary"
                  value={formData.salary}
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
                  name="endDate"
                  value={formData.endDate}
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
                  value={formData.Sanctions}
                  onChange={(e) => handleGetInputValue(e)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                sx={{ width: "100%" }}
                type="button"
                variant="contained"
                color={editMode.mode === true ? "warning" : "primary"}
                onClick={(e) => {
                  editMode.mode === true
                    ? handleSendChangesRequest(editMode.id, formData)
                    : onSubmit(e);
                }}
              >
                {editMode.mode === true ? "update" : "add employee"}
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <Button
                sx={{ width: "100%" }}
                type="reset"
                variant="outlined"
                onClick={() => resetInputs()}
              >
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

      <Table Title="Employees List" FetchData={GET_EMPLYEES_ACTION()}>
        <TableHeader>
          <TableRow>
            {employeesHeadList.map((employee) => {
              return <TableHeadding key={nanoid(3)}>{employee}</TableHeadding>;
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {emplyeesData.map((employee) => {
            return (
              <TableRow key={nanoid(5)}>
                {/* <TableData key={nanoid(4)}>{employee.id}</TableData> */}
                <TableData key={nanoid(4)}>{employee.fullName}</TableData>
                <TableData key={nanoid(4)}>{employee.brithday}</TableData>
                <TableData key={nanoid(4)}>{employee.phoneNumber}</TableData>
                <TableData key={nanoid(4)}>{employee.salary}</TableData>
                <TableData key={nanoid(4)}>{employee.carier}</TableData>
                <TableData key={nanoid(4)}>{employee.JoinDate}</TableData>
                <TableData key={nanoid(4)}>{employee.endDate}</TableData>
                <TableData key={nanoid(4)}>{employee.sanctions}</TableData>
                <TableData key={nanoid(4)}>
                  <Button variant={"text"} size={"small"}>
                    <DeleteOutlinedIcon
                      fontSize={"small"}
                      color={"error"}
                      onClick={() => handleDeleteEmployee(employee.id)}
                    />
                  </Button>
                </TableData>
                <TableData key={nanoid(2)}>
                  <Button variant={"text"} size={"small"}>
                    <EditOutlinedIcon
                      fontSize={"small"}
                      color={"action"}
                      onClick={() =>
                        handleEditEmployee({
                          id: employee.id,
                          fullName: employee.fullName,
                          brithday: employee.brithday,
                          phoneNumber: employee.phoneNumber,
                          salary: employee.salary,
                          carier: employee.carier,
                          JoinDate: employee.joinDate,
                          endDate: employee.endDate,
                          Sanctions: employee.sanctions,
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
};

export default AddEmployes;
