import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//

const TableContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  background-color: var(--bs-gray-100);
  margin-block-end: 1rem;
`;

const StyledTableWrapper = styled.table`
  width: 100%;
  border: 1px solid var(--bs-gray-400);
`;

const Headding = styled.h6`
  text-transform: uppercase;
  color: var(--bs-primary);
  margin-bottom: 0;
`;

const CollabsedNavbar = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bs-gray-300);
  border: 1px solid var(--bs-border-color);
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

const UncollabsedButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90px;
  height: 100%;
  border: none;

  > :first-child {
    margin-block: auto;
    line-height: 1rem;
    user-select: none;
    text-transform: capitalize;
    font-weight: bold;
    pointer-events: none;
  }

  > svg {
    user-select: none;
    pointer-events: none;
    transition: transform 0.3s ease-in-out;
  }
  &.uncollabsed > svg {
    transition: transform 0.3s ease-in-out;
    transform: rotate(180deg);
  }
`;

function Table(props) {
  const dispatch = useDispatch();
  const [collapseTable, setCollapseTable] = useState(
    props.collapsed === true ? true : false
  );

  const handleClick = (e) => {
    const btn = e.target;
    btn.classList.toggle("uncollabsed");
    setCollapseTable(!collapseTable);
  };

  useMemo(() => {
    if (props.FetchData && collapseTable) {
      return dispatch(props.FetchData);
    }
  }, [dispatch, collapseTable]);

  return (
    <TableContainer>
      <CollabsedNavbar>
        <Headding>{props.Title}</Headding>
        <UncollabsedButton onClick={(e) => handleClick(e)}>
          <small>show</small>
          <KeyboardArrowDownIcon color={"action"} />
        </UncollabsedButton>
      </CollabsedNavbar>
      <StyledTableWrapper>
        <StyledTableWrapper>
          {collapseTable && props.children}
        </StyledTableWrapper>
      </StyledTableWrapper>
    </TableContainer>
  );
}

export default Table;
