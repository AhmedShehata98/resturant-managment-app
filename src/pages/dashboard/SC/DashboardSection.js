import React from "react";
import styled from "styled-components";

const StyledDashboardSection = styled.section`
    ${(props) =>
      typeof props.AsideWidth === "string" &&
      `width : calc(100% - ${props.AsideWidth})`};
    height : 100%;
    display : 'flex';
    flex-direction : column;
    align-items : flex-start
    justify-content : space-between;

`;

function DashboardSection(props) {
  return (
    <StyledDashboardSection {...props}>{props.children}</StyledDashboardSection>
  );
}

export default DashboardSection;
