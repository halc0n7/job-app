import React from "react";
import { PrimaryButton } from "../../../styles";

const Search = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Title, companies, expertise or benefits"
      />
      <PrimaryButton>Search</PrimaryButton>
      <input type="checkbox" name="full" id="full" />
      <label htmlFor="full">full time</label>
    </div>
  );
};

export default Search;
