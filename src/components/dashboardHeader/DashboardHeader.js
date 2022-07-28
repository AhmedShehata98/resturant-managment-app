import React from "react";
import styled from "styled-components";

const StyledDashboardHeader = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--bs-gray-300);
  margin-block-start: 1rem;
  margin-block-end: 1rem;
`;

const DashboardHeader = (props) => {
  return <StyledDashboardHeader>{props.children}</StyledDashboardHeader>;
};

export default DashboardHeader;
