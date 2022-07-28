import React from "react";
import styled from "styled-components";

const SyledViewOptions = styled.div`
  width: calc(100% - 60px);
  height: calc(100vh - 5px);
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem 1rem;
  background-color: var(--bs-primary);
`;

const Headding = styled.h5`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-block-start: 1.5rem;
  color: var(--bs-white);
`;

function ViewOptions(props) {
  return (
    <SyledViewOptions {...props}>
      <Headding>dashboard</Headding>
      {props.children}
    </SyledViewOptions>
  );
}

export default ViewOptions;
