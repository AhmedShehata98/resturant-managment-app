import React from "react";
import styled from "styled-components";

function TableData(props) {
  const StyledTableData = styled.span`
    display: inline-block;
    width: calc(100% / ${props.Width});
    height: fit-content;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: capitalize;

    &.empty {
      height: fit-content;
      display: grid;
      place-items: center;
      place-content: center;
    }
  `;

  const emptyClass =
    props.children.length && props.children.length < 1 && "empty";

  return (
    <StyledTableData className={emptyClass} {...props}>
      {props.children}
    </StyledTableData>
  );
}

export default TableData;
