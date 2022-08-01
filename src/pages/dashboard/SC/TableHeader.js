import React from "react";
import styled from "styled-components";

const StyledTableHeader = styled.thead`
  height: 35px;

  > tr:nth-child(1) {
    color: var(--bs-white);

    > th {
      text-transform: uppercase !important;
      padding-inline-start: 1rem;
      font-weight: bold;
      font-size: 0.8rem;
    }
    > th:nth-child(odd) {
      background-color: var(--bs-secondary) !important;
    }
    > th:nth-child(even) {
      background-color: var(--bs-primary) !important;
    }
  }
`;

function TableHeader(props) {
  return <StyledTableHeader>{props.children}</StyledTableHeader>;
}

export default TableHeader;
