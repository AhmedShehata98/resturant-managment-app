import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  width: 140px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > :first-child {
    max-width: 35px;
    object-fit: cover;
  }

  > :last-child {
    line-height: 2.2rem;
    margin-bottom: 0;
  }
`;

function Logo(props) {
  return <StyledLogo {...props}>{props.children}</StyledLogo>;
}

export default Logo;
