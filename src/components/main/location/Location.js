import React from "react";
import styled from "styled-components";
import {
  StyledLocation,
  StyledTitle,
} from "../../../styles/components/main/location";
import { StyledInput } from "../../../styles/utils";
import List from "./List";

const StyledInputLocation = styled(StyledInput)`
  padding: 18px 45px;
`;

const Location = () => {
  const cities = ["london", "amsterdam", "new york", "berlin"];

  return (
    <StyledLocation>
      <StyledTitle>location</StyledTitle>

      <StyledInputLocation
        type="text"
        placeholder="City, state, zip, code or country"
      />

      <List cities={cities} />
    </StyledLocation>
  );
};

export default Location;
