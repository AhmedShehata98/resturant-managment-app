import React from "react";
import styled from "styled-components";

const StyledDbNavbar = styled.nav`
  width: 60px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  overflow-y: auto;
  overflow-x: hidden;
  padding-block: 0.5rem;

  &::-webkit-scrollbar {
    webkit-appearance: none;
    width: 0;
  }

  > a {
    position: relative;
    z-index: 1;
    color: var(--bs-white) !important;
    text-decoration: none;

    &.active::after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      transform: translate(-50%, -50%);
      background: linear-gradient(
        65deg,
        var(--bs-gray-200),
        var(--bs-gray-400)
      );
      opacity: 0.3;
      border-radius: 0.4rem;
      backdrop-filter: blur(6px);
    }
    &::after {
      content: "";
      z-index: -1;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      transform: translate(-50%, -50%);
      background: tranparent;
      opacity: 0.3;
      border-radius: 0.4rem;
      padding-block: 0.8rem;
      backdrop-filter: blur(6px);
    }
    &:hover::after {
      background: linear-gradient(
        65deg,
        var(--bs-gray-200),
        var(--bs-gray-400)
      );
    }
  }
`;

function DbNavbar(props) {
  return <StyledDbNavbar {...props}>{props.children}</StyledDbNavbar>;
}

export default DbNavbar;
