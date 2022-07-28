import React from "react";
import styled from "styled-components";

const StyledFeaturedFoods = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 260px));
  justify-content: space-between;
  gap: 1rem;
  margin-block: 1rem;
  padding-block: 2.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Headding = styled.h3`
  position: absolute;
  top: 0;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--bs-text);
`;

function FeaturedFoods(props) {
  return (
    <StyledFeaturedFoods>
      <Headding>Featured Dishes</Headding>
      {props.children}
    </StyledFeaturedFoods>
  );
}

export default FeaturedFoods;
