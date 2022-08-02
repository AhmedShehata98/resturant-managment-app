import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";

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
  margin-block-start: 1.5rem;
`;

const UserImage = styled.img`
  position: relative;
  z-index: 5;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const MoreOptions = styled.div`
  position: absolute;
  top: 50%;
  left: -15%;
  display: flex;
  background-color: var(--bs-gray-100);
  width: 200px;
  height: 60px;
  border-radius: 0.3rem;
  border: 1px solid var(--bs-gray-500);
  opacity: 0;
  pointer-events: none;
  user-select: none;
  transform: translateY(-60%);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;

  &.open {
    opacity: 1;
    pointer-events: all;
    user-select: all;
    transform: translateY(-50%);
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-inline-start: auto;
    margin-inline-end: 0.5rem;
    border: none;

    > a {
      text-decoration: none;
      color: var(--bs-text);
      font-weight: 600;
      text-transform: capitalize;

      &:hover {
        color: var(--bs-red);
      }
    }
  }
`;

function ControlPanel(props) {
  const handleShowMenu = (e) => {
    const image = e.target.parentElement.lastChild;
    image.classList.toggle("open");
  };
  const handleCloseMenu = (e) => {
    const image = e.target.parentElement.lastChild;
    image.classList.remove("open");
  };
  return (
    <StyledControlPanel {...props}>
      {props.children}
      <UserImageWrapper>
        <UserImage src={props.Src} onClick={(e) => handleShowMenu(e)} />
        <MoreOptions>
          <button>
            <LogoutIcon fontSize="small" color="error" />
            <Link to="logout" onClick={() => handleCloseMenu()}>
              logout
            </Link>
          </button>
        </MoreOptions>
      </UserImageWrapper>
    </StyledControlPanel>
  );
}

export default ControlPanel;
