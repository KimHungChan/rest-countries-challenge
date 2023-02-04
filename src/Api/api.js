const axios = require("axios").default;

const getCountries = () =>
  axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

export { getCountries };
