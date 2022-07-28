import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  padding: 1rem;
  max-width: 55%;
  min-width: 55%;
  width: 55%;
  ${(props) => props.FullWidth && "width : 100%"};
  ${(props) => props.FullWidth && "min-width : 100%"};
  display: flex;
  margin-block-end: 1rem;
  background-color: var(--bs-gray-100);
  border: 1px solid var(--bs-gray-400);
  border-radius: 0.25rem;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

function Form(props) {
  return <StyledForm {...props}>{props.children}</StyledForm>;
}

export default Form;
