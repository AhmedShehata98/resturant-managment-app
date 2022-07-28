import React from "react";
import styled from "styled-components";

const StyledStatisticsWrapper = styled.div`
  ${(props) => (props.Width ? `width: ${props.Width}` : "width: 100%")};
  height: fit-content;
  ${(props) => props.gridSystem && "display: grid"};
  ${(props) =>
    props.gridSystem &&
    "grid-template-columns: repeat(auto-fit, minmax(235px, 245px))"};
  ${(props) => props.flexBox && "display: flex"};
  ${(props) => props.flexBox && "flex-direction: row"};
  gap: 0.5rem;
  ${(props) =>
    props.children.length > 3
      ? "justify-content: space-between"
      : "justify-content : flex-end"};
  margin-block-end: 1rem;

  @media (max-width: 992px) {
    ${(props) =>
      props.gridSystem &&
      "grid-template-columns: repeat(auto-fit, minmax(235px, 1fr))"};
    ${(props) => props.flexBox && "flex-wrap : wrap"};
    ${(props) => props.flexBox && "flex-direction : columns !important"};
    ${(props) => props.Width && `width: 100%`};
    justify-content: center;
  }
`;

function StatisticsWrapper(props) {
  return (
    <StyledStatisticsWrapper {...props}>
      {props.children}
    </StyledStatisticsWrapper>
  );
}

export default StatisticsWrapper;
