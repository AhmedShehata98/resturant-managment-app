import React from "react";
import styled from "styled-components";

const StyledTableDataRow = styled.span`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-block: 2px solid var(--bs-border-color);

  &.reserved > span {
    background-color: var(--bs-orange);
  }

  > span {
    display: grid;
    place-items: center;
    text-transform: capitalize;
  }

  > span:not(:first-child) {
    border-left: 2px solid var(--bs-border-color);
  }
`;

function TableDataRow(props) {
  return <StyledTableDataRow {...props}>{props.children}</StyledTableDataRow>;
}

export default TableDataRow;
