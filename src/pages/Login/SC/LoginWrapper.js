import React from "react";
import styled from "styled-components";

const StyledLoginWrapper = styled.div`
  width: 40%;
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1.5rem;
  background: var(--bs-gray-100);

  @media (max-width: 992px) {
    width: 60%;
    height: 60vh;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 60vh;
  }
`;

function LoginWrapper(props) {
  return <StyledLoginWrapper {...props}>{props.children}</StyledLoginWrapper>;
}

export default LoginWrapper;
