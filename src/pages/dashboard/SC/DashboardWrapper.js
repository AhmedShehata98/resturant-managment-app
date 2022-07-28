import React from "react";
import styled from "styled-components";

const StyledDashboardWrapper = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background-color: var(--bs-gray-300);
`;

function DashboardWrapper(props) {
  return (
    <StyledDashboardWrapper {...props}>{props.children}</StyledDashboardWrapper>
  );
}

export default DashboardWrapper;
