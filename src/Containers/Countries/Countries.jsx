import CountryItem from "../../Components/CountryItem/CountryItem";
import "./Countries.scss";

import React from "react";

const Countries = ({ countries }) => {
  return (
    <div className="countries-container">
      {countries.map((country, key) => (
        <CountryItem
          name={country?.name.common}
          population={country?.population}
          region={country?.region}
          capital={country?.capital?.[0]}
          src={country?.flags.png}
          key={key}
        ></CountryItem>
      ))}
    </div>
  );
};

export default Countries;
