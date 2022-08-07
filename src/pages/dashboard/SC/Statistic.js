import React from "react";
import styled from "styled-components";

const StyledStatistic = styled.div`
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-block-end: 1rem;
  border: 1px solid var(--bs-border-color-translucent);
  border-radius: 0.3rem;
  background-color: var(--bs-gray-100);
  color: var(--bs-text);

  &.active {
    background-color: var(--bs-primary) !important;
    color: var(--bs-white) !important;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Counting = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.span`
  position: relative;
  display: grid;
  palce-items: center;
  olace-content: center;

  &::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    background-color: var(--bs-orange);
    border-radius: 0.3rem;
  }
  > svg {
    position: relative;
    z-index: 2;
    color: var(--bs-white);
  }
`;

const Text = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-transform: capitalize;
  margin-inline-end: 1.5rem;
`;

const ProgressbarWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

function Statistic(props) {
  const Progressbar = styled.span`
    position: relative;
    z-index: 1;
    display: flex;
    width: 100%;
    padding: 0.3rem 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--bs-gray-400);
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      top: 0;
      left: 0;
      transtion: width 0.4s ease-out;
      height: 100%;
      width: ${props.ProgressValue};
      border-radius: 0.5rem;
      background: linear-gradient(40deg, var(--bs-blue), var(--bs-pink));
    }
  `;
  return (
    <StyledStatistic {...props}>
      <Counting>
        <Text>
          <b>{props.Count}</b>
          <small>{props.Title}</small>
        </Text>
        <Icon>{props.IconElement}</Icon>
      </Counting>
      {props.Persent && (
        <ProgressbarWrapper>
          <small>{props.Persent + "%"}</small>
          <Progressbar />
        </ProgressbarWrapper>
      )}
    </StyledStatistic>
  );
}

export default Statistic;
