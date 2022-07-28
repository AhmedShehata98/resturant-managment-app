import React from "react";
import styled from "styled-components";

const StyledIconContainer = styled.span`
  display: grid;
  place-items: center;
  place-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: var(--bs-gray-300);

  > svg {
    color: var(--bs-indigo);
  }
`;

function IconContainer(props) {
  return <StyledIconContainer {...props}>{props.children}</StyledIconContainer>;
}

export default IconContainer;
