import React, { useState } from "react";
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
  const [Tax, setTax] = useState({
    services: 0,
    vat: 0,
    otherTax: 0,
  });

  const handleSetTax = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    setTax({ ...Tax, [key]: value });
  };
  return (
    <SectionWrapper
      Type="taxSection"
      Background="var(--bs-gray-300)"
      Direction="column"
    >
      <Grid comtainer width={"100%"} spacing={2}>
        <Grid
          item
          sm={12}
          lg={6}
          display="flex"
          alignItems="flex-start"
          justifyContent={"flex-start"}
        >
          <StatisticsWrapper gridSystem>
            <Statistic
              Title="Services Tax"
              Count={Tax.services + " L.E"}
              IconElement={<LocalAtmOutlinedIcon />}
            />
            <Statistic
              Title="VAT Tax"
              Count={Tax.vat + " L.E"}
              IconElement={<PaymentsOutlinedIcon />}
            />
            <Statistic
              Title="Other Tax"
              Count={Tax.otherTax + " L.E"}
              IconElement={<PaymentsOutlinedIcon />}
            />
          </StatisticsWrapper>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Form>
            <Grid container spacing={2} direction="row">
              <Grid item xs={12} md={4}>
                <FormControl>
                  <TextField
                    type="number"
                    placeholder="150 L.E"
                    label="VAT"
                    size="small"
                    name="vat"
                    focused
                    value={Tax.vat}
                    onChange={(event) => handleSetTax(event)}
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
                    name="services"
                    value={Tax.services}
                    onChange={(event) => handleSetTax(event)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl>
                  <TextField
                    type="number"
                    placeholder="400 L.E"
                    label="Other Tax"
                    name="otherTax"
                    size="small"
                    value={Tax.otherTax}
                    onChange={(event) => handleSetTax(event)}
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
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}

export default Tax;
