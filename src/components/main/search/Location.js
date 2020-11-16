import React from "react";

const Location = () => {
  return (
    <div>
      Location
      <input type="text" placeholder="City, state, zip, code or country" />
      <ul>
        <li>
          <input type="checkbox" name="city" id="london" />
          <label htmlFor="london">London</label>
        </li>

        <li>
          <input type="checkbox" name="city" id="amsterdam" />
          <label htmlFor="amsterdam">Amsterdam</label>
        </li>

        <li>
          <input type="checkbox" name="city" id="new-york" />
          <label htmlFor="new-york">New York</label>
        </li>

        <li>
          <input type="checkbox" name="city" id="berlin" />
          <label htmlFor="berlin">Berlin</label>
        </li>
      </ul>
    </div>
  );
};

export default Location;
