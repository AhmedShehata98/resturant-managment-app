import React from "react";
import styled from "styled-components";

const TableWrapper = styled.div`
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
const Headding = styled.h5`
  text-transform: uppercase;
  color: var(--bs-text);
  height: 35px;
  color: var(--bs-primary);
`;
const StyledTable = styled.div`
  width: 100%;
  height: calc(100% - 35px);
  border-inline: 1px solid var(--bs-primary);
  border-bottom: 1px solid var(--bs-primary);
`;

const TableHeadder = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    display: grid;
    place-items: center;
    text-transform: capitalize;
    color: var(--bs-white);
    border-right: 1px solid var(--bs-border-color);
  }

  > span:first-child {
    border-left: none;
  }
  > span:last-child {
    border-right: none;
  }

  > span:nth-child(even) {
    background-color: var(--bs-primary);
  }

  > span:nth-child(odd) {
    background-color: var(--bs-secondary);
  }
`;

const TableData = styled.section`
  > span:nth-child(even) {
    background-color: var(--bs-gray-200);
  }
`;

function Table(props) {
  const TableHead = styled.span`
    width: calc(100% / ${props.TableHeadLength});
    height: 100%;
    font-size: 0.7rem;
    font-weight: bold;
    text-transform: capitalize;

    &.empty {
      display: grid;
      place-items: center;
      place-content: center;
    }
  `;

  const mapedTableHead = props.TableHeadName.map((name) => {
    return <TableHead>{name}</TableHead>;
  });

  return (
    <TableWrapper>
      <Headding>{props.Title}</Headding>
      <StyledTable>
        <TableHeadder>{mapedTableHead}</TableHeadder>
        <TableData>{props.children}</TableData>
      </StyledTable>
    </TableWrapper>
  );
}

export default Table;
