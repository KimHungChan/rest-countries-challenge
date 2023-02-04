import React from "react";

import "./Filter.scss";

const Filter = ({ onRegionChange }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <select name="cars" id="cars" onChange={onRegionChange}>
      <option value="" selected>
        Filter by Region
      </option>
      {regions.map((region, key) => (
        <option value={region}>{region}</option>
      ))}
    </select>
  );
};

export default Filter;
