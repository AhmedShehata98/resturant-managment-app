import React from "react";
import styled from "styled-components";

const StyledControlPanel = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  margin-block-start: auto;

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

const UserImageWrapper = styled.figure`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-block-start: 1.5rem;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
`;

function ControlPanel(props) {
  return (
    <StyledControlPanel {...props}>
      {props.children}
      <UserImageWrapper>
        <UserImage src={props.Src} />
      </UserImageWrapper>
    </StyledControlPanel>
  );
}

export default ControlPanel;
