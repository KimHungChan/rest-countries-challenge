import "./CountryPage.scss";

import React from "react";
import CountryPageInfo from "../../Components/CountryPageInfo/CountryPageInfo";

const CountryPage = ({ country, onBackClicked, countryData }) => {
  return (
    <div className="country-container">
      <button onClick={onBackClicked}>
        <i class="fa-solid fa-arrow-left-long"></i> Back
      </button>
      <div className="outer-container">
        <div className="image-container">
          <img crossorigin="anonymous" src={countryData?.flags.png} alt="" />
        </div>
        <CountryPageInfo
          name={countryData?.name.common}
          nativeName={Object.values(countryData?.name?.nativeName)[0].common}
          population={countryData?.population}
          region={countryData?.region}
          subRegion={countryData?.subregion}
          capital={countryData?.capital?.[0]}
          topLevelDomain={countryData?.tld?.[0]}
          currencies={countryData?.currencies}
          languages={countryData?.languages}
          borderCountries={countryData?.borders}
        ></CountryPageInfo>
      </div>
    </div>
  );
};

export default CountryPage;
