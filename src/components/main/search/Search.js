import React from "react";
import styled from "styled-components";
import {
  StyledContent,
  StyledSearch,
} from "../../../styles/components/main/search";
import {
  StyledInput,
  StyledPrimaryButton,
  StyledCheckbox,
} from "../../../styles/utils";

const StyledInputSearch = styled(StyledInput)`
  padding: 20px 130px 20px 40px;
`;

const StyledPrimaryButtonSearch = styled(StyledPrimaryButton)`
  position: absolute;
  right: 1.5em;
`;

const Search = () => {
  return (
    <StyledSearch>
      <StyledContent>
        <StyledInputSearch
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />

        <StyledPrimaryButtonSearch>Search</StyledPrimaryButtonSearch>
      </StyledContent>

      <ul>
        <StyledCheckbox>
          <input type="checkbox" name="full" id="full" />
          <label htmlFor="full">full time</label>
        </StyledCheckbox>
      </ul>
    </StyledSearch>
  );
};

export default Search;
