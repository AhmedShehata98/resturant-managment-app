import React from "react";
import styled from "styled-components";
const StyledReviewers = styled.div`
  width: 35%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;

  > img {
    max-width: 30px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

function Reviewers(props) {
  return <StyledReviewers>{props.children}</StyledReviewers>;
}

export default Reviewers;
