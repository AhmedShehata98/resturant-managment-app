import React from "react";
import styled from "styled-components";

function TablesCardsWrapper(props) {
  const StyledTablesCardsWrapper = styled.section`
    width: 100%;
    height: fit-contnet;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 210px));
    gap: 0.5rem;
    ${(props) =>
      props.children && props.children.length <= 4
        ? "justify-content : flex-start"
        : "justify-content : space-around"};

    margin-block-end: 1rem;

    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  `;

  return (
    <StyledTablesCardsWrapper {...props}>
      {props.children}
    </StyledTablesCardsWrapper>
  );
}

export default TablesCardsWrapper;
