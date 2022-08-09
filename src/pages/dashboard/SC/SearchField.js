import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const StyledSearchField = styled.form`
  position: relative;
  width: 280px;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  transition: width 0.3s ease-out;
  @media (max-width: 768px) {
    width: 40px;
  }

  &.expand {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 40px;
    overflow: hidden;
    justify-content: center;
    > :nth-child(2) {
      > :last-child {
        display: none;
      }
    }
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid var(--bs-border-color);
  background-color: var(--bs-gray-100);
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
  }
`;
const Placeholder = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  user-select: none;
  pointer-events: none;
  transition: opacity 0.2s ease-out;
`;

function SearchField(props) {
  const handleShow = (e) => {
    e.target.nextElementSibling.style.opacity = "0";
    handleExpandSearch(e, true);
    props.setShowWelcome(false);
  };
  const handleHidden = (e) => {
    e.target.nextElementSibling.style.opacity = "1";
    handleExpandSearch(e, false);
    props.setShowWelcome(true);
  };

  const handleExpandSearch = (e, expandState) => {
    const element = e.target;
    if (expandState === true) {
      element.closest("form").classList.add("expand");
    } else {
      element.closest("form").classList.remove("expand");
    }
  };
  return (
    <StyledSearchField>
      <SearchInput
        type="search"
        value={props.Value}
        onChange={props.onChange}
        onFocus={(e) => handleShow(e)}
        onBlur={(e) => handleHidden(e)}
      />
      <Placeholder>
        <SearchOutlinedIcon fontSize="small" color="action" />
        <small>seacch about you want ...</small>
      </Placeholder>
    </StyledSearchField>
  );
}

export default SearchField;
