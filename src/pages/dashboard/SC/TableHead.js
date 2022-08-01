import React from "react";
import styled from "styled-components";

const StyledTableHeadding = styled.th``;

function TableHeadding(props) {
  return <StyledTableHeadding>{props.children}</StyledTableHeadding>;
}

export default TableHeadding;
