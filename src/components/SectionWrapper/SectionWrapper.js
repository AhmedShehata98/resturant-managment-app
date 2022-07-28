import React from "react";
import styled from "styled-components";

const StyledSectionWrapper = styled.main`
  width: 100%;
  display: flex;
  ${(props) =>
    props.Type === "header" ? "height : 55px" : "min-height : 100vh"};
  ${(props) => props.Type === "header" && ">:first-child { width : 100%}"};
  ${(props) => props.Direction === "col" && "flex-direction: column"};
  ${(props) => props.Direction === "row" && "flex-direction: row"};
  ${(props) =>
    typeof props.Background === "string" && "background: " + props.Background};

  ${(props) => props.ItemsCenter && "items-content: center"};
  ${(props) => props.ItemsStart && "items-content: flex-start"};
  ${(props) => props.ItemsEnd && "items-content: flex-end"};
  ${(props) => props.ContentCenter && "justify-content: center"};
  ${(props) => props.ContentStart && "justify-content: flex-end"};
  ${(props) => props.ContentEnd && "justify-content: flex-start"};
  ${(props) => props.Overlay && "position: absolute"};
  ${(props) => props.Overlay && "z-index : 10000"};
  ${(props) => props.Overlay && "top : 0"};
  ${(props) => props.Overlay && "left : 0"};
`;

function SectionWrapper(props) {
  return (
    <StyledSectionWrapper {...props}>{props.children}</StyledSectionWrapper>
  );
}

export default SectionWrapper;
