import React from "react";
import styled from "styled-components";
import Item from "./Item";

const StyledContainer = styled.ul`
  margin: 1.25em 0;
`;

const List = ({ cities }) => {
  return (
    <StyledContainer>
      {cities.map((city, i) => (
        <Item key={i} city={city} />
      ))}
    </StyledContainer>
  );
};

export default List;
