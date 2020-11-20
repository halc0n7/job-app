import React from "react";
import styled from "styled-components";
import {
  StyledContent,
  StyledSearch,
} from "../../../styles/components/main/search";
import { StyledInput, StyledPrimaryButton } from "../../../styles/utils";

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
    </StyledSearch>
  );
};

export default Search;
