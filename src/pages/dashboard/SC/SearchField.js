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
  const handleShow = (e) => (e.target.nextElementSibling.style.opacity = "0");
  const handleHidden = (e) => {
    e.target.nextElementSibling.style.opacity = "1";
    console.log(e.target);
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
