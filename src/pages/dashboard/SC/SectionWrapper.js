import React from "react";
import styled from "styled-components";

const StyledSectionWrapper = styled.article`
  width: 100%;
  height: calc(100vh - 95px);
  max-height: calc(100vh - 60px);
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem;
  background-color: var(--bs-gray-300);
`;

function SectionWrapper(props) {
  return (
    <StyledSectionWrapper {...props}>{props.children}</StyledSectionWrapper>
  );
}

export default SectionWrapper;
