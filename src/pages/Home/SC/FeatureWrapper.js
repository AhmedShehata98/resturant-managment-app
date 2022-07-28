import React from "react";
import styled from "styled-components";

const StyledFeatureWrapper = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: space-bewteen;
  align-items: center;
  padding-block: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

function FeatureWrapper(props) {
  return (
    <StyledFeatureWrapper {...props}> {props.children}</StyledFeatureWrapper>
  );
}

export default FeatureWrapper;
