const concatCurrencies = (currencies) => {
  const currenciesArray = [];
  Object.values(currencies).forEach((currencyObject) => {
    return currenciesArray.push(currencyObject.name);
  });
  return currenciesArray.join(", ");
};

export const concatLanguages = (languages) => {
  return Object.values(languages).join(", ");
};

export const borderCountryCodesToNames = (codes) => {
  const getCountryISO2 = require("country-iso-3-to-2");
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return codes?.map((countryCode) =>
    regionNames.of(getCountryISO2(countryCode))
  );
};

export default concatCurrencies;
