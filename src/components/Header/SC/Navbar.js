import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.nav`
  height: 55px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

function Navbar(props) {
  return <StyledNavbar {...props}>{props.children}</StyledNavbar>;
}

export default Navbar;
