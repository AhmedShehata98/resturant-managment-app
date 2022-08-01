import React from "react";
import styled from "styled-components";

const StyledTableBody = styled.tbody`
  > tr {
    > td {
      text-transform: capitalize;
      padding-inline-start: 1rem;
      border-right: 1px solid var(--bs-gray-300);
    }
    &.not-available {
      background-color: #ff869e !important;
      color: #fff !important;
      font-weight: bolder;
      border-bottom: 1px solid var(--bs-gray-300);
    }
  }
  > tr:nth-child(odd) {
    background-color: var(--bs-gray-300);
  }

  > tr:nth-child(even) {
    background-color: var(--bs-gray-400);
  }
`;

function TableBody(props) {
  return <StyledTableBody {...props}>{props.children}</StyledTableBody>;
}

export default TableBody;
