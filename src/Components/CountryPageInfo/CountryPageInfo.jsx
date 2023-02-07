import React from "react";
import concatCurrencies, {
  borderCountryCodesToNames,
  concatLanguages,
} from "../../Helpers/data";
import { numberWithCommas } from "../../Helpers/numbers";
import "./CountryPageInfo.scss";

const CountryPageInfo = ({
  name,
  nativeName,
  population,
  region,
  subRegion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borderCountries,
}) => {
  return (
    <div className="country-page-info-container">
      <h1>{name}</h1>
      <div className="inner-info-container">
        <div className="main-info-container">
          <p>
            <b>Native Name: </b>
            {nativeName} {}
          </p>
          <p>
            <b>Population:</b> {numberWithCommas(population)}
          </p>
          <p>
            <b>Region:</b> {region}
          </p>
          <p>
            <b>Sub Region:</b> {subRegion}
          </p>
          <p>
            <b>Capital:</b> {capital}
          </p>
        </div>

        <div className="other-info-container">
          <p>
            <b>Top Level Domain:</b> {topLevelDomain}
          </p>
          <p>
            <b>Currencies:</b> {concatCurrencies(currencies)}
          </p>
          <p>
            <b>Languages:</b> {concatLanguages(languages)}
          </p>
        </div>
      </div>
      {borderCountries && (
        <div className="border-countries-container">
          <h2>Border Countries:</h2>
          <div className="border-names-container">
            {borderCountryCodesToNames(borderCountries)?.map((region) => (
              <div>
                <p>{region}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryPageInfo;
