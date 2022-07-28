import React from "react";
import styled from "styled-components";

const StyledAsidebar = styled.aside`
  width: 60px;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-block: auto;
  padding-block: 1rem;
  background-color: var(--bs-secondary);
`;

function Asidebar(props) {
  return <StyledAsidebar {...props}>{props.children}</StyledAsidebar>;
}

export default Asidebar;
