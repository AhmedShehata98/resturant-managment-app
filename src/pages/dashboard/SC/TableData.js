import React from "react";
import styled from "styled-components";

const StyledTableData = styled.td``;

function TableData(props) {
  return <StyledTableData>{props.children}</StyledTableData>;
}

export default TableData;
