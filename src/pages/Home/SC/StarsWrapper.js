import React from "react";
import styled from "styled-components";
const styledStarsWrapper = styled.div`
  with: 100%;
  height: 80px;
  display: flex;
  alignitems: center;
  justify-content: center;
  gap: 0.5rem;
`;

function StarsWrapper(props) {
  return <styledStarsWrapper>{props.children}</styledStarsWrapper>;
}

export default StarsWrapper;
