import React from "react";
import styled from "styled-components";

const StyledWelcomeHeadding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.2rem;
  margin-inline: 1.5rem;

  > :first-child {
    margin-bottom: 0;
    text-transform: capitalize;
  }
  > :last-child {
    opacity: 0.7;
    text-transform: capitalize;
  }
`;

function WelcomeHeadding(props) {
  return (
    <StyledWelcomeHeadding {...props}>{props.children}</StyledWelcomeHeadding>
  );
}

export default WelcomeHeadding;
