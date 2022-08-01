import React from "react";
import styled from "styled-components";

const StyledTableDataRow = styled.tr``;

function TableRow(props) {
  return <StyledTableDataRow {...props}>{props.children}</StyledTableDataRow>;
}

export default TableRow;
