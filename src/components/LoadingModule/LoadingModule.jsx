import React from "react";
import { Grid } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import SectionWrapper from "../SectionWrapper/SectionWrapper";
import styled from "styled-components";

const LoadingModule = () => {
  const LogoComponent = styled.div`
    width: 100px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    > img {
      max-width: 100%;
      object-fit: cover;
    }
    > :nth-child(2) {
      text-transform: uppercase;
    }
  `;

  return (
    <SectionWrapper
      Type="module"
      Direction="column"
      Background="var(--bs-gray-200)"
      ItemsCenter
      ContentCenter
      Overlay
    >
      <Grid container spacing={3} justifyContent={"center"}>
        <Grid
          item
          xs={12}
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
        >
          <LogoComponent>
            <img src={require("../../assets/icons/cutlery.png")} alt="logo" />
            <h5>Custoso</h5>
          </LogoComponent>
        </Grid>
        <Grid
          item
          xs={6}
          md={4}
          lg={2}
          display="flex"
          direction={"column"}
          justifyContent={"center"}
        >
          <LinearProgress
            sx={{
              height: 6,
              borderRadius: 35,
            }}
            color="success"
            variant="indeterminate"
            value={5}
            valueBuffer={10}
          />
        </Grid>
      </Grid>
    </SectionWrapper>
  );
};

export default LoadingModule;
