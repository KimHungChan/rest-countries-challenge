import { numberWithCommas } from "../../Helpers/numbers";
import "./CountryItem.scss";

import React from "react";

const CountryItem = ({ name, population, region, capital, src }) => {
  return (
    <div className="container">
      <div className="image-container">
        <img crossorigin="anonymous" src={src} alt="" />
      </div>
      <div className="info-container">
        <h1>{name}</h1>
        <p>
          <b>Population:</b> {numberWithCommas(population)}
        </p>
        <p>
          <b>Region:</b> {region}
        </p>
        <p>
          <b>Capital:</b> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryItem;
