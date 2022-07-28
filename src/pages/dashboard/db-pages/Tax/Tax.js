import React from "react";
import styled from "styled-components";
import SectionWrapper from "../../SC/SectionWrapper";
import Statistic from "../../SC/Statistic";
import StatisticsWrapper from "../../SC/StatisticsWrapper";

// icons
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import Form from "../../SC/Form";
import { Grid, TextField, FormControl, Button } from "@mui/material";

function Tax() {
  return (
    <SectionWrapper
      Type="taxSection"
      Background="var(--bs-gray-300)"
      Direction="column"
    >
      <StatisticsWrapper gridSystem>
        <Statistic
          Title="Services Tax"
          Count="70 L.E"
          IconElement={<LocalAtmOutlinedIcon />}
        />
        <Statistic
          Title="VAT Tax"
          Count="40 L.E"
          IconElement={<PaymentsOutlinedIcon />}
        />
        <Statistic
          Title="Other Tax"
          Count="60 L.E"
          IconElement={<PaymentsOutlinedIcon />}
        />
      </StatisticsWrapper>
      <Form>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={4}>
            <FormControl>
              <TextField
                type="number"
                placeholder="150 L.E"
                label="VAT"
                size="small"
                focused
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl>
              <TextField
                type="number"
                placeholder="300 L.E"
                label="services Tax"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl>
              <TextField
                type="number"
                placeholder="400 L.E"
                label="Other Tax"
                size="small"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button type="button" variant="contained">
              add
            </Button>
          </Grid>
        </Grid>
      </Form>
    </SectionWrapper>
  );
}

export default Tax;
