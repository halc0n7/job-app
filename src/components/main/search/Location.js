import React from "react";

const Location = () => {
  return (
    <div>
      Location
      <input type="text" placeholder="City, state, zip, code or country" />
      <ul>
        <li>
          <input type="checkbox" name="city" id="london" />
          <label htmlFor="london">london</label>
        </li>

        <li>
          <input type="checkbox" name="city" id="amsterdam" />
          <label htmlFor="amsterdam">amsterdam</label>
        </li>

        <li>
          <input type="checkbox" name="city" id="new-york" />
          <label htmlFor="new-york">new York</label>
        </li>

        <li>
          <input type="checkbox" name="city" id="berlin" />
          <label htmlFor="berlin">berlin</label>
        </li>
      </ul>
    </div>
  );
};

export default Location;
