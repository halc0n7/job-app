import React from "react";
import { StyledCheckbox } from "../../../styles/utils";

const Item = ({ city }) => {
  return (
    <StyledCheckbox>
      <input type="checkbox" name="city" id={city} />
      <label htmlFor={city}>{city}</label>
    </StyledCheckbox>
  );
};

export default Item;
